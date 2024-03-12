import { useQuiz } from "../Context/HomeContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <>
      <div className="start">
        {/* <h2>Welcome to The React Quiz!</h2> */}
        <h3>Take exam to test your knowledge.</h3>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "start" })}
        >
          Let's start
        </button>
      </div>
    </>
  );
}

export default StartScreen;