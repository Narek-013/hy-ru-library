import AppRouter from "./Routes/AppRouter.jsx";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin, selectAdmin } from "./store/Slices/admin/adminSlice.js";

function App() {
  const dispatch = useDispatch();
  const {adminSt} = useSelector(selectAdmin)
  useEffect(() => {
    const getStorage = () => {
      let x = localStorage.getItem("admin");
      dispatch(getAdmin(x));
    };
    getStorage();
  }, [dispatch,adminSt]);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
