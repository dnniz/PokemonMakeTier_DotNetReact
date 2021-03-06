import React from "react";
import Modal from "./Modal";

import "./styles/Login.css";
function RegisterModal(props) {
  return (
    <Modal>
      <div className="LoginModal">
        <h3 className="text-center">
          <span className="font-weight-light">Pokemon</span>
          <span className="font-weight-bold">MakeTier</span>
        </h3>
        <hr />
        <form onSubmit={props.onSubmit}>
          <p className="text-center">Registro de usuario</p>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="form-group">
                <label>Correo</label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  value={props.formValues.Email}
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
                  name="PasswordHash"
                  value={props.formValues.PasswordHash}
                  onChange={props.onChange}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <button className="btn btn-primary btn-block text-center">
                Registrarse
              </button>
            </div>
          </div>
        </form>
        <hr />
        <div className="text-center">
          <button className="btn btn-link" onClick={props.onLogin}>
            Ingresar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default RegisterModal;
