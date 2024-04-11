import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useState,
} from "react";
import img2 from "../assets/img2react.jpg";
import img3 from "../assets/images12.jpeg";
import img4 from "../assets/image.png";
const HomeContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  // Courses: [],
  Courses: [
    {
      id: 1,
      title: "Redux Toolkit",
      Category: "Website",
      About:
        "Redux Toolkit is a powerful library that simplifies the process of managing state in React applications.",
      information:
        "It provides a concise and efficient way to write Redux logic, reducing boilerplate code and making state management more straightforward.",
      duration: "02:00:00",
      Contain: "10 videos, 05 Notes",
      contentCount: 10,
      rating: "⭐⭐⭐⭐⭐",
      thumbnail: img4,
      enrollButtonText: "Enroll Now for React.js",
      url1: "https://www.youtube-nocookie.com/embed/DXlnr7rDDR0?si=zJyYxX2fJA3NrQNk",
      description1:
        "Redux Toolkit Tutorial in Hindi #1: A Game-Changer for Managing State in React with Redux Toolkit",
      url2: "https://www.youtube-nocookie.com/embed/2qlij2qkHZc?si=U4uasBsM1eMNY8kx",
      description2:
        "Mastering Redux Toolkit in Hindi #2: Folder Structure, Prerequisites, and Homepage Design",
      url3: "https://www.youtube-nocookie.com/embed/jSuB8elMLJA?si=S6GGs5KeuPhNyxYd",
      description3:
        "Redux Toolkit #3: CreateSlice Method to Organize Your State",
      url4: "https://www.youtube-nocookie.com/embed/y_kxf-ia6FE?si=Qe2XlLqE5QwbYk5H",
      description4:
        "Redux Toolkit #4: Create Store, Understanding the Flow & Redux Dev tools",
      url5: "https://www.youtube-nocookie.com/embed/PMqszsM7QJQ?si=Vt8hZZvLu2DX1tWt",
      description5:
        "Redux Toolkit #5: let's Connect React with Redux Toolkit to Access Store Data🔥",
      url6: "https://www.youtube-nocookie.com/embed/0LePYfbkvXk?si=tvuQASmIti1U6jCf",
      description6:
        "Redux Toolkit #6: Access the state data with useDispatch & action creators ❤️‍🔥",
    },
    {
      id: 2,
      title: "Andriod Applications",
      Category: "App",
      About:
        "The top frontend frameworks for web development are widely favored",
      information:
        "It's extensively utilized in both single-page applications and sizable endeavors",
      duration: "02:00:00",
      Contain: "15 videos, 04 Notes",
      contentCount: 10,
      rating: "⭐⭐⭐⭐⭐",
      thumbnail: img2,
      enrollButtonText: "Enroll Now for React.js",
      url1: "https://www.youtube.com/embed/InigFUSiPl8?si=co0U8dbdmJJrbZUR", //1
      description1:
        "Installing Android Studio & Setup | Android Tutorials in Hindi #1", //1
      url2: "https://www.youtube.com/embed/PoBePPh5Iko?si=5q-2coodTMxoKgbF",
      description2:
        "Creating Our First Android App (with APK) | Android Tutorials in Hindi #2",
      url3: "https://www.youtube.com/embed/HHaghq5wXic?si=MamCMF0Peczj0bN-",
      description3:
        "Linear Layout & Relative Layout In Android | Android Tutorials in Hindi #3",
      url4: "https://www.youtube.com/embed/jUmqYE2iWiI?si=nuD95WM7XZILQzuz",
      description4:
        "Android activity & Activity Lifecycle | Android Tutorials in Hindi #4",
      url5: "https://www.youtube.com/embed/WVjqX1BoQeM?si=R9T7F20x_sBg5Qrv",
      description5:
        "Project 1: Tic Tac Toe Game Android Game Development | Android Tutorials in Hindi #5",
      url6: "https://www.youtube.com/embed/n_S2myhVPww?si=5N8MgYuMjq3xGZsF",
      description6:
        "Creating Photo Frame Application In Android: Exercise 1 | Android Tutorials in Hindi #6",
    },
    {
      id: 3,
      title: "Online Education",
      Category: "Development",
      About:
        "The top frontend frameworks for web development are widely favored",
      information:
        "It's extensively utilized in both single-page applications and sizable endeavors",
      duration: "02:00:00",
      Contain: "15 videos, 04 Notes",
      contentCount: 10,
      rating: "⭐⭐⭐⭐⭐",
      thumbnail: img3,
      enrollButtonText: "Enroll Now for React.js",
      url1: "",
      description1: "",
      url2: "",
      description2: "",
      url3: "",
      description3: "",
      url4: "",
      description4: "",
      url5: "",
      description5: "",
      url6: "",
      description6: "",
    },
    {
      id: 4,
      title: "Online Education",
      Category: "Development",
      About:
        "The top frontend frameworks for web development are widely favored",
      information:
        "It's extensively utilized in both single-page applications and sizable endeavors",
      duration: "02:00:00",
      Contain: "15 videos, 04 Notes",
      contentCount: 10,
      rating: "⭐⭐⭐⭐⭐",
      thumbnail: img3,
      enrollButtonText: "Enroll Now for React.js",
      url1: "",
      description1: "",
      url2: "",
      description2: "",
      url3: "",
      description3: "",
      url4: "",
      description4: "",
      url5: "",
      description5: "",
      url6: "",
      description6: "",
    },
    {
      id: 5,
      title: "Online Education",
      Category: "Development",
      About:
        "The top frontend frameworks for web development are widely favored",
      information:
        "It's extensively utilized in both single-page applications and sizable endeavors",
      duration: "02:00:00",
      Contain: "15 videos, 04 Notes",
      contentCount: 10,
      rating: "⭐⭐⭐⭐⭐",
      thumbnail: img3,
      enrollButtonText: "Enroll Now for React.js",
      url1: "",
      description1: "",
      url2: "",
      description2: "",
      url3: "",
      description3: "",
      url4: "",
      description4: "",
      url5: "",
      description5: "",
      url6: "",
      description6: "",
    },
    {
      id: 6,
      title: "Online Education",
      Category: "Development",
      About:
        "The top frontend frameworks for web development are widely favored",
      information:
        "It's extensively utilized in both single-page applications and sizable endeavors",
      duration: "02:00:00",
      Contain: "15 videos, 04 Notes",
      contentCount: 10,
      rating: "⭐⭐⭐⭐⭐",
      thumbnail: img3,
      enrollButtonText: "Enroll Now for React.js",
      url1: "",
      description1: "",
      url2: "",
      description2: "",
      url3: "",
      description3: "",
      url4: "",
      description4: "",
      url5: "",
      description5: "",
      url6: "",
      description6: "",
    },
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
        CourseDetails: action.payloadDisplay,
      };
    // case "SearchCourse":
    //   return {
    //     ...state,
    //     SearchValue: action.payload,
    //   };
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
      CourseDetails,
      // SearchValue,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  //fetch the Quiz Application Data from JSON Server using API...
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .then(() => dispatch({ type: "randomquestion" }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  //fetch the Courses Data from JSON Server using API...
  // useEffect(function () {
  //   fetch("http://localhost:8000/Courses")
  //     .then((res) => res.json())
  //     .then((cors) => dispatch({ type: "Courses", payload: cors }))
  //     .catch((err) => dispatch({ type: "dataFailed" }));
  // }, []);

  //implement the Search Functionality...
  // const SearchCourse = (SearchValue) => {
  //   const filteredValue = Courses.filter((Search) => {
  //     return `${Search.title.toLowerCase()} ${Search.Category.toLowerCase()}`.includes(
  //       SearchValue.toLowerCase()
  //     );
  //   });
  //   dispatch({
  //     type: "SearchCourse",
  //     payload: filteredValue,
  //   });
  //   console.log("filteredValue" + filteredValue);
  // };

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
          // : SearchValue.length > 0 ? SearchValue : Courses,
          CourseDetails,
          dispatch,
          // SearchCourse,
          // filteredValue,
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
