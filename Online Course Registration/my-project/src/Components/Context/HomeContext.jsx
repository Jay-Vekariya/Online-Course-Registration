import React, { createContext, useReducer, useEffect, useContext } from "react";

const HomeContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  Courses: [
    { id: 1, name: "Introduction to JavaScript" },
    { id: 2, name: "React Crash Course" },
    { id: 3, name: "Node.js Basics" },
    { id: 4, name: "HTML & CSS Fundamentals" },
    { id: 5, name: "Python for Beginners" },
  ],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  QuesNo: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  Userdata: {
    Username: "",
    Email: "",
    Password: "",
    ConfirmPasswrd: "",
  },
  Logindata: {
    Email: "",
    Password: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Courses":
      return {
        ...state,
        Courses: action.payload,
      };
    case "randomquestion":
      const randomIndex = Math.floor(Math.random() * state.questions.length);

      return {
        ...state,
        index: randomIndex,
        answer: null,
      };
    case "dataReceived":
      return {
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
        points: 0,
        QuesNo: 0,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        QuesNo: state.QuesNo + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    case "SET_USER_DATA":
      return {
        ...state,
        Userdata: action.payload,
      };
    case "SET_LOGIN_DATA":
      return {
        ...state,
        Logindata: action.payload,
      };
    default:
      throw new Error("Action unkonwn");
  }
};

const QuizProvider = ({ children }) => {
  const [
    {
      Userdata,
      Logindata,
      questions,
      status,
      index,
      QuesNo,
      answer,
      points,
      highscore,
      secondsRemaining,
      Courses,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .then(() => dispatch({ type: "randomquestion" }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <>
      <HomeContext.Provider
        value={{
          questions,
          status,
          index,
          QuesNo,
          answer,
          points,
          highscore,
          secondsRemaining,
          numQuestions,
          maxPossiblePoints,
          Userdata,
          Logindata,
          Courses,
          dispatch,
        }}
      >
        {children}
      </HomeContext.Provider>
    </>
  );
};

function useQuiz() {
  const context = useContext(HomeContext);
  if (context === undefined)
    throw new Error("HomeContext was used outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };

// if (randomIndex === state.index) {
//   return { ...state, index: (randomIndex + 1) % state.questions.length };
// } else {
//   return {
//     ...state,
//     index: randomIndex.number({ min: 0, max: state.questions.length - 1 })(),
//   };
// }
