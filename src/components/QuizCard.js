import { useState } from "react";

export default function QuizCard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="extra__quizcard">
      <p>{question}</p>
      <button className="extra__btn" onClick={() => setShowAnswer(!showAnswer)}>Toggle answer</button>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
}

