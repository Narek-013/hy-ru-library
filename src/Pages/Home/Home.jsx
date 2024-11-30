import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItem, newDay, selectWords } from "../../store/Slices/wordsSlice/wordsSlice";
import EditWord from "../../components/EditWord/EditWord";
import { Imgs } from "../../Images/Imgs";
import "./home.scss";
import { selectAdmin } from "../../store/Slices/admin/adminSlice";

function Home() {
  const dispatch = useDispatch();
  const { day, wordArray } = useSelector(selectWords);
  const { adminSt } = useSelector(selectAdmin);


  const updateDay = useCallback(() => {
    let storedDay = parseInt(localStorage.getItem("day")) || 0;
    const lastUpdated = localStorage.getItem("lastUpdated") || "";
    const today = new Date().toISOString().split("T")[0];

    if (lastUpdated !== today) {
      if (storedDay >= 109466) {
        storedDay = 1;
      } else {
        storedDay += 1;
      }

      localStorage.setItem("day", storedDay);
      localStorage.setItem("lastUpdated", today);

      dispatch(newDay({ day: storedDay, words: [] }));
    }
  }, [dispatch]);

  const fetchWords = useCallback(async () => {
    try {
      const storedDay = parseInt(localStorage.getItem("day")) || 0;
      const resp = await fetch(`https://hyrus-production.up.railway.app/api/ru/${storedDay}`);

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

  const prevDay = () => {
    let storedDay = parseInt(localStorage.getItem("day")) || 0;
    if (storedDay > 1) {
      const prevDay = storedDay - 1;
      localStorage.setItem("day", prevDay);
      dispatch(newDay({ day: prevDay, words: {} }));
      fetchWords();
    }
  };

  const nextDay = () => {
    let storedDay = parseInt(localStorage.getItem("day")) || 0;
    let nextDay = storedDay + 1;
    if (nextDay > 109466) {
      nextDay = 1;
    }
    localStorage.setItem("day", nextDay);
    dispatch(newDay({ day: nextDay, words: {} }));
    fetchWords();
  };


  return (
    <div className="home">
      <div className="home__container container">
        <h1>Այսօրվա բառերը Օր {day}</h1>
        <ul>
          {wordArray.length > 0 ? (
            wordArray.map(({ key, value, isEdit }, idx) => (
              <li key={idx} className={isEdit ? "word-form" : "word-li"}>
                {isEdit ? (
                  <EditWord word={{ key, value, isEdit }} idx={idx} day={day} />
                ) : (
                  <>
                    {key}
                    <span>{value}</span>
                  </>
                )}
                {adminSt && <img className="edit" onClick={() => dispatch(editItem(idx))} src={Imgs.edit} alt="edit" />}
              </li>
            ))
          ) : (
            <li>На этот день нет доступных слов.</li>
          )}
        </ul>
        <div className="home__days">
          <button className={day <= 1 ? "btn_color" : ""} onClick={prevDay}>
            Предыдущий
          </button>
          <button onClick={nextDay}>Следующий</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
