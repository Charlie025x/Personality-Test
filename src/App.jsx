import { useState } from "react";
import "./App.css";
import "../src/assets/fonts/SEGA.woff";
const questions = [
  { question: "Take the Test", options: ["Ready"] },
  { question: "Do you easily make new friends?", options: ["yes", "no"] },
  {
    question: "Your living and working spaces are clean and organized.",
    options: ["true", "false"],
  },
  {
    question:
      "You rarely worry about whether you make a good impression on people you meet.",
    options: ["true", "false"],
  },
  {
    question: "You enjoy solitary hobbies or activities more than group ones.",
    options: ["yes", "no"],
  },
  {
    question: "You often end up doing things at the last possible moment.",
    options: ["yes", "no"],
  },
  {
    question: "You rarely second-guess the choices that you have made.",
    options: ["yes", "no"],
  },
  {
    question: "What is the name of the main character in the anime 'Bleach'?",
    options: ["Ken kaneki", "Ichigo Kurosaki", "Natsu Dragneel"],
  },
  {
    question: "What is the name of Goku's signature move?",
    options: ["Detroit smash", "Rasengan", "Kamehameha", "Hollow purple"],
  },
  {
    question: "What day will Edward Elric never forget",
    options: ["February 14", "June 21", "September 7", "October 3"],
  },
  {
    question: "What did Kenichi trade with Miu when they first met as kids",
    options: ["yo-yo", "cat badge", "manga", "candy"],
  },
  {
    question:
      "You stubed your toe and your day's almosted ruined. But you take a ____ from your pocket and all is well now",
    options: ["Chocolate bar", "Rice krispy treat"],
  },
  {
    question: "Your Favorite shonen anime protagonist",
    options: ["Goku", "Naruto"],
  },
  {
    question: "Have you ever beaten Charlie in pool?",
    options: ["yes🤨", "no"],
  },
  {
    question: "You completed the test!",
    options: ["Submit my answers"],
  },
];

function App() {
  const [showText, setShowText] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleAnswer = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowLoading(!showLoading);
    }
  };

  return (
    <>
      <div className="">
        <div className="mx-4 mt-20 max-w-3xl rounded-2xl rounded-br-[5rem]   bg-white px-6 py-10 md:mx-auto md:mt-36 md:rounded-br-[8rem] md:p-10  opacity-70">
          <div className="text-center grid min-h-100">
            {showLoading ? (
              isDone ? (
                <div>
                  <div className=" font-bold text-2xl my-8">
                    You have the perfect personality to...
                  </div>
                  <div className=" font-['SegaFont'] text-blue-600 text-4xl">
                    Be my Valentine
                  </div>
                  <div className="  font-bold  mt-12  text-3xl">
                    Lets have a virtual movie night, what do you say?
                  </div>
                </div>
              ) : (
                <div className="grid">
                  <div class="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500 mx-auto mt-auto"></div>
                  <span
                    class="inline-block font-bold text-gray-700 after:animate-text-cycle animate-bounce-x after:content-['']"
                    onAnimationEnd={() => setIsDone(true)}
                  />
                </div>
              )
            ) : (
              <div>
                <div className=" text-5xl  font-bold">
                  {questions[currentQuestion].question}
                </div>
                <div className="grid">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      className=" bg-indigo-500 m-4 rounded-2xl text-4xl py-2"
                      key={option}
                      onClick={() => {
                        handleAnswer(option);
                        startTimer();
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
