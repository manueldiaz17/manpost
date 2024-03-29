import React, { useState, useEffect } from "react";
import { TranslatorProvider } from "react-translate";
import AuthProvaider from "../context/AuthContext";
import { AuthConsumer } from "../context/AuthContext";
import ButtonLogin from "../components/Login/ButtonLogin";
import LoginLabel from "../components/Login/LoginLabel";

const Login = props => {
  
  const hadaleonsubtmit = e => {
    e.preventDefault();
    props.history.push("/Home");
  };

  return (
    <AuthProvaider>
      <AuthConsumer>
        {value => {
          return (
            <TranslatorProvider
              translations={require(".././assets/i18n/" +
                value.user.LANG +
                ".json")}
            >
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
                          <LoginLabel content="user" />
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            //value={username}
                            //onChange={({ target }) => setUsername(target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <LoginLabel content="pass" />
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            //value={password}
                            //  onChange={({ target }) => setPassword(target.value)}
                            required
                          />
                        </div>
                        <ButtonLogin
                          onClick={hadaleonsubtmit}
                          content="login"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </TranslatorProvider>
          );
        }}
      </AuthConsumer>
    </AuthProvaider>
  );
};

export default Login;
