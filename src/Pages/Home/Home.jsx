import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newDay, selectWords } from "../../store/Slices/wordsSlice/wordsSlice";
import "./home.scss";

function Home() {
  const dispatch = useDispatch();
  const { day, words } = useSelector(selectWords);

  // Կանխելու համար օրվա փոփոխությունը
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

  // Fetch բառերը տվյալ օրվա համար
  const fetchWords = useCallback(async () => {
    try {
      const storedDay = parseInt(localStorage.getItem("day")) || 0;
      const resp = await fetch(`https://hyrus-production.up.railway.app/api/data/${storedDay}`);

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

  // Օրվա թարմացում և fetch
  useEffect(() => {
    updateDay();
    fetchWords();

    const intervalId = setInterval(() => {
      updateDay();
    }, 24 * 60 * 60 * 1000); // 24 ժամվա համար

    return () => clearInterval(intervalId);
  }, [updateDay, fetchWords]);

  // Prev button handler
  const prevDay = () => {
    const storedDay = parseInt(localStorage.getItem("day")) || 0;
    if (storedDay > 1) {
      const prevDay = storedDay - 1;
      localStorage.setItem("day", prevDay);
      dispatch(newDay({ day: prevDay, words: [] }));
      fetchWords();
    }
  };

  // Next button handler
  const nextDay = () => {
    const storedDay = parseInt(localStorage.getItem("day")) || 0;
    const nextDay = storedDay + 1;
    localStorage.setItem("day", nextDay);
    dispatch(newDay({ day: nextDay, words: [] }));
    fetchWords();
  };

  return (
    <div className="home">
      <div className="home__container container">
        <h1>Այսօրվա բառերը Օր {day}</h1>
        <ul>
          {words ? (
            Object.entries(words).map(([key, value]) => (
              <li key={key}>
                {key}: <span>{value}</span>
              </li>
            ))
          ) : (
            <li>No words available for this day.</li>
          )}
        </ul>
        <div className="home__days">
          <button onClick={prevDay}>Prev</button>
          <button onClick={nextDay}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
