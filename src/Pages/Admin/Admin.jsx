import { useDispatch } from "react-redux";
import "./admin.scss"
import { loginAdmin } from "../../store/Slices/admin/adminSlice";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const adminLog = (ev) => {
        ev.preventDefault();
        let {login:{value:login},password:{value:password}} = ev.target
        dispatch(loginAdmin([login, password, navigate]));
    };

  return (
    <div className="admin">
      <div className="admin__container container">
        <h1>Войти</h1>
        <p>На сайт могут войти только администраторы</p>
        <form onSubmit={adminLog}>
          <input type="text" placeholder="Введите логин администратора" name="login" required/>
          <input type="password" placeholder="Введите пароль администратора" name="password" required/>
          <button>Вход</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
