import ErrorPage from "./ErrorPage";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import MainPage from "./MainPage";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Question from "./Question";
import StartScreen from "./StartScreen";
import Timer from "./Timer";
import "./DisplayQuiz.css";
import { useQuiz } from "../HomeContext";

export default function DisplayQuiz() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <MainPage>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorPage />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </MainPage>
    </div>
  );
}
