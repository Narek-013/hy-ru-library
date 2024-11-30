import { useDispatch, useSelector } from "react-redux";
import "./about.scss";
import { changeValue, selectDownloadBtn } from "../../store/Slices/downloadBtn/downloadBtn";
import { Imgs } from "../../Images/Imgs";

const About = () => {

  const { allLang } = useSelector(selectDownloadBtn);
  const dispatch = useDispatch();

  const downloadFile = (lang,idx) => {
    
    const filePath = `/txt-files/${lang}_full.txt`;

    const link = document.createElement("a");
    link.href = filePath;
    link.download = `${lang}_text.txt`;

    link.click();
    dispatch(changeValue(idx));
  };
 
  return (
    <div className="about">
      <div className="about__container container">
        <h1>All languages</h1>
        <p>Нажмите на кнопки ниже, чтобы скачать файл для соответствующего языка.</p>
        <div className="about__langs">
          {allLang.map((el, idx) => {
            return (
              <div className="about__langs-item" key={idx}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src={Imgs.txt} alt="txtImg" />
                  <div className="about__langs-info">
                    <span>Имя: {el.name}</span>
                    <span>слово: {el.col}</span>
                  </div>
                </div>
                {!el.ed ? (
                  <button onClick={() => downloadFile(el.name, idx)}>Скачать</button>
                ) : (
                  <button className="done_btn" onClick={() => dispatch(changeValue(idx))}>
                    Готово
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
