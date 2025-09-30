import React, { useState, useEffect, useRef } from "react";
import questionSets from "./questions.json";
import "./App.css";

function QuizApp() {
  const [playerName, setPlayerName] = useState("");
  const [highScore, setHighScore] = useState(
    JSON.parse(localStorage.getItem("highScore")) || { name: "", score: 0 }
  );
  const [stage, setStage] = useState("start");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);

  const resultRef = useRef(null);

  useEffect(() => {
    if (showResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showResult]);

  // Timer
  useEffect(() => {
    if (stage === "quiz" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0 && stage === "quiz") {
      endQuiz();
    }
  }, [timeLeft, stage]);

  function startQuizApp() {
    if (playerName.trim() === "") {
      alert("Please enter your name before starting.");
      return;
    }
    setStage("category");
  }

  function selectCategory(category) {
    setSelectedCategory(category);
    setStage("subcategory");
  }

  function selectSubCategory(subCategory) {
    setSelectedSubCategory(subCategory);
    setStage("questionCount");
  }

  function selectQuestionCount(count) {
    setQuestionCount(count);

    // Shuffle questions
    const allQuestions = [...questionSets[selectedCategory][selectedSubCategory]];
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, count);

    setQuestions(selectedQuestions);
    setStage("quiz");
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers([]);
    setShowResult(false);

    // Timer setup
    if (count === 15) setTimeLeft(6 * 60);
    if (count === 30) setTimeLeft(12 * 60);
    if (count === 60) setTimeLeft(18 * 60);
  }

  function handleAnswer(answer) {
    const updatedAnswers = [
      ...userAnswers,
      { question: questions[currentIndex].question, selected: answer.text },
    ];
    setUserAnswers(updatedAnswers);

    if (answer.correct) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    setStage("results");
    setShowResult(true);

    // Save high score
    if (score > highScore.score) {
      const newHigh = { name: playerName, score };
      setHighScore(newHigh);
      localStorage.setItem("highScore", JSON.stringify(newHigh));
    }
  }

  function restartQuiz() {
    setStage("start");
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setQuestionCount(0);
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers([]);
    setShowResult(false);
    setTimeLeft(0);
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  return (
    <div className="quiz-app">
      <h1>Fun Quiz App</h1>
      {highScore.name && (
        <div className="high-score">
          🏆 Highest Score: {highScore.name} - {highScore.score}
        </div>
      )}

      {stage === "start" && (
        <div className="start-screen">
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={startQuizApp}>Start Quiz</button>
        </div>
      )}

      {stage === "category" && (
        <div>
          <h2>Select a Category</h2>
          <div className="category-selection">
            {Object.keys(questionSets).map((category) => (
              <button
                key={category}
                className="circle-button"
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === "subcategory" && (
        <div>
          <h2>Select a Subcategory</h2>
          <div className="subcategory-selection">
            {Object.keys(questionSets[selectedCategory]).map((subCategory) => (
              <button
                key={subCategory}
                className="circle-button"
                onClick={() => selectSubCategory(subCategory)}
              >
                {subCategory}
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === "questionCount" && (
        <div>
          <h2>Select Number of Questions</h2>
          <div className="question-count-selection">
            {[15, 30, 60].map((count) => (
              <button
                key={count}
                className="circle-button"
                onClick={() => selectQuestionCount(count)}
              >
                {count}
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === "quiz" && (
        <div>
          <h2>
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <div className="timer">⏱ {formatTime(timeLeft)}</div>
          <p>{questions[currentIndex].question}</p>
          <div className="answers">
            {questions[currentIndex].answers.map((answer, idx) => (
              <button key={idx} onClick={() => handleAnswer(answer)}>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === "results" && showResult && (
        <div ref={resultRef}>
          <h2>Results</h2>
          <p>
            {playerName}, you scored {score} out of {questions.length} (
            {Math.round((score / questions.length) * 100)}%)
          </p>
          <div className="result-list">
            {questions.map((q, idx) => (
              <div key={idx} className="result-item">
                <p>
                  <strong>Q{idx + 1}:</strong> {q.question}
                </p>
                <p>Your Answer: {userAnswers[idx]?.selected}</p>
                <p>
                  Correct Answer: {q.answers.find((a) => a.correct).text}
                </p>
              </div>
            ))}
          </div>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}


