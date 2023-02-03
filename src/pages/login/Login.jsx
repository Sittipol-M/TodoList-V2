import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <div className="loginTitle">
          <p>Sign In</p>
        </div>
        <form className="loginInput">
          <div className="loginUsername">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="loginPassword">
            <FontAwesomeIcon className="icon" icon={faLock} />
            <input type="password" name="password" placeholder="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
