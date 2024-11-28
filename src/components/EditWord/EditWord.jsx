import { useDispatch } from "react-redux";
import { editItem } from "../../store/Slices/wordsSlice/wordsSlice";
import { fetchChangeText } from "../../store/Slices/wordsSlice/API";
import { Imgs } from "../../Images/Imgs";

const EditWord = ({ word, idx, day }) => {
  const dispatch = useDispatch();

  const changeText = (ev) => {
    ev.preventDefault();

    let newText = ev.target[0].value;

    const isValid = /^[ա-ֆ]+$/i.test(newText.trim());

    if (newText === word.value || newText === "") {
      dispatch(editItem(idx));
    } else if (!isValid) {
      alert("Գրել պետք է միայն հայատառ բառեր");
    } else if (newText.trim()) {
      dispatch(fetchChangeText([word, day, newText, idx]));
    }

    ev.target.reset();
  };

  return (
    <form onSubmit={changeText}>
      <input type="text" />
      <button>
        <img src={Imgs.done} alt="done" />
      </button>
    </form>
  );
};

export default EditWord;
