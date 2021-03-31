import * as React from "react";
import "./Login.scss";
import useOnClickOutside from "../../../../helpers/useClickOutside";

interface loginProps {
  actives: boolean;
  func: () => void;
}

const Login: React.FC<loginProps> = ({ actives, func }: loginProps) => {
  const [login, setLogin] = React.useState(true);

  const toggleLogin = () => {
    setLogin(!login);
  };

  const ref = React.useRef(null);

  const handleClickOutside = () => {
    if (actives) {
      console.log("siema");
      func();
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={actives ? "login" : "login closeLoginWindow"}>
      <div
        ref={ref}
        className={
          actives ? "login__container" : "login__container closeLoginWindow"
        }
      >
        <div
          className={
            login
              ? "login__container__loginin activeLog"
              : "login__container__loginin"
          }
        >
          <h3 className="login__container__title">Zaloguj</h3>
          <form action="/" className="login__container__form">
            <input
              className="login__container__form__login"
              type="text"
              placeholder="LOGIN"
            />
            <input
              className="login__container__form__password"
              type="password"
              placeholder="HASŁO"
            />
            <button type="submit">ZALOGUJ</button>
          </form>
          <button onClick={toggleLogin}>ZAREJESTRUJ</button>
        </div>
        <div
          className={
            login
              ? "login__container__register"
              : "login__container__register activeLog"
          }
        >
          <h3 className="login__container__title">Rejestracja</h3>
          <form action="/" className="login__container__form">
            <input
              className="login__container__form__login"
              type="text"
              placeholder="LOGIN"
            />
            <input
              className="login__container__form__login"
              type="email"
              placeholder="EMAIL"
            />
            <input
              className="login__container__form__password"
              type="password"
              placeholder="HASŁO"
            />
            <button>ZAREJESTRUJ</button>
          </form>
          <button type="submit" onClick={toggleLogin}>
            ZALOGUJ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
