import { useState, useEffect } from "react";

const App = () => {
  const [quiz, setQuiz] = useState(null);

  const fecthData = async () => {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const json = await response.json();
      setQuiz(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect;

  return <div></div>;
};

export default App;
