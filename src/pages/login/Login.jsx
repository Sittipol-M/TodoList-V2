import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginImage behind"></div>
      <div className="loginForm front">
        <div className="loginTitle">
          <p>Login</p>
        </div>
        <div className="loginInput">
          <div className="loginUsername">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <input type="" name="" value="" placeholder="username" />
          </div>
          <div className="loginPassword">
            <FontAwesomeIcon className="icon" icon={faLock} />
            <input type="" name="" value="" placeholder="password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
