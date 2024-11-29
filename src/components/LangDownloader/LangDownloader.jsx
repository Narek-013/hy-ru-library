import {  useParams } from "react-router-dom";
import "../../Pages/About/about.scss"
import { useDispatch, useSelector } from "react-redux";
import { changeLang, selectDownloadBtn } from "../../store/Slices/downloadBtn/downloadBtn";

const LangDownloader = () => {
  const { lang } = useParams();
  const { oneLang } = useSelector(selectDownloadBtn);
  const dispatch = useDispatch();
  

  const downloadFile = () => {
    const filePath = `/txt-files/${lang}_full.txt`;

    const link = document.createElement("a");
    link.href = filePath;
    link.download = `${lang}_text.txt`;

    link.click();
    dispatch(changeLang());
  };

  return (
    <div className="about lang">
      <div className="about__container container">
        <h1>Язык  {lang}</h1>
        <p>Нажмите на кнопку ниже, чтобы скачать файл для соответствующего языка.</p>
        {oneLang ? (
          <button className="lang_btn-down dn" onClick={() => dispatch(changeLang())}>
            Готово
          </button>
        ) : (
          <button className="lang_btn-down" onClick={downloadFile}>
            Скачать файл
          </button>
        )}
      </div>
    </div>
  );
};

export default LangDownloader;
