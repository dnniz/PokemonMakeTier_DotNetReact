import React from "react";
import Modal from "./Modal";

import "./styles/Login.css";
function LoginModal(props) {
  return (
    <Modal>
      <div className="LoginModal text-center">
        <h3>
          <span className="font-weight-light">Pokemon</span>
          <span className="font-weight-bold">MakeTier</span>
        </h3>
        <hr />
        <p>Para continuar, inicia sesión</p>
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <div className="">
              <button className="loginBtn loginBtn--facebook btn-block text-center">
                Continuar con Facebook
              </button>
              <button className="loginBtn loginBtn--google btn-block text-center">
                Continuar con Google
              </button>
            </div>
          </div>
        </div>
        <hr />
        <form onSubmit={props.onSubmit}>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="form-group">
                <label>Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  name="UserName"
                  onChange={props.onChange}
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="Password"
                  onChange={props.onChange}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <button className="btn btn-primary btn-block text-center">
                Ingresar
              </button>
            </div>
          </div>
        </form>
        <hr />
        <div className="text-center">
          <button className="btn btn-link" onClick={props.onRegister}>
            Registrarse
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
