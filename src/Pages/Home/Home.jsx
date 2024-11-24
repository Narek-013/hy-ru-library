import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newDay, selectWords } from "../../store/Slices/wordsSlice/wordsSlice";
import "./home.scss";

function Home() {
  const dispatch = useDispatch();
  const { day, words } = useSelector(selectWords);
  const updateDay = useCallback(() => {
    const storedDay = parseInt(localStorage.getItem("day")) || 0;
    const lastUpdated = localStorage.getItem("lastUpdated") || "";

    const today = new Date().toISOString().split("T")[0];

    if (lastUpdated !== today) {
      const nextDay = storedDay + 1;
      localStorage.setItem("day", nextDay);
      localStorage.setItem("lastUpdated", today);

      dispatch(newDay({ day: nextDay, words: [] }));
    }
  }, [dispatch]);

  const fetchWords = useCallback(async () => {
    try {
      const storedDay = parseInt(localStorage.getItem("day")) || 0;
      const resp = await fetch(`https://serv-production-dceb.up.railway.app/words?day=${storedDay}`);
      if (resp.ok) {
        const result = await resp.json();
        dispatch(newDay({ day: storedDay, words: result }));
      } else {
        console.error("Failed to fetch words:", resp.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    updateDay();
    fetchWords();

    const intervalId = setInterval(() => {
      updateDay();
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [updateDay, fetchWords]);

  return (
    <div className="home">
      <div className="home__container container">
        <h1>Այսօրվա բառերը Օր {day}</h1>
        <ul>
          {words.length > 0 ? (
            words.map((word, index) => (
              <li key={index}>
                {word.word}
                <span>{word.value}</span>
              </li>
            ))
          ) : (
            <li>No words available for this day.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
