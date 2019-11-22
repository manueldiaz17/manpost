import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthConsumer } from "../context/AuthContext";


const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    ID: "1",
    LOGIN: "example",
    EMAIL: "@example.com",
    ROLE: "admin",
    LANG: "en"
  });
  const { t, i18n } = useTranslation();
  console.log(username, password);

  i18n.changeLanguage(user.LANG);
 const handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/Home`);
}
  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card mt-5">
          <div className="card-body">
            <h2 className="text-center py-4">
              <i className="fas fa-lock"></i> {""}
              Iniciar Sesión
            </h2>
            <form>
              <div className="form-group">
                <label>{t('user.1')}</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label> {t('pass.1')}</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-success btn-block"
                onClick={handleSubmit}
                value="Inicar Sesión"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
