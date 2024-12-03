import { useDispatch, useSelector } from "react-redux";
import "./admin.scss";
import { loginAdmin, logOutAdmin, selectAdmin } from "../../store/Slices/admin/adminSlice";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adminSt, adminUser } = useSelector(selectAdmin);
  const adminLog = (ev) => {
    ev.preventDefault();
    let {
      login: { value: login },
      password: { value: password },
    } = ev.target;
    dispatch(loginAdmin([login, password, navigate]));
  };

  const logOut = () => {
    localStorage.removeItem("admin");
    dispatch(logOutAdmin());
  };

  return (
    <div className="admin">
      <div className="admin__container container">
        {adminSt ? (
          <>
            <h1>Админ {adminUser.admin}</h1>
            <p>Админский аккаунт дает возможность изменить любое слово, спасибо за поддержку.</p>
            <button onClick={logOut}>Выйти</button>
          </>
        ) : (
          <>
            <form onSubmit={adminLog}>
              <h1>Войти</h1>
              <p>На сайт могут войти только администраторы</p>
              <input type="text" placeholder="Введите логин администратора" name="login" required />
              <input type="password" placeholder="Введите пароль администратора" name="password" required />
              <button>Вход</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
