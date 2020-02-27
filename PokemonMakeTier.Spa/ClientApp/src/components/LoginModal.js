import React from "react";
import Modal from "./Modal";

function LoginModal(props) {
  return (
    <Modal>
      <div className="LoginModal">
        <h1>Ingresa</h1>
        <p>Para continuar, inicia sesión en PokemónMakeTier</p>
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <div className="btn-group-vertical">
              <button className="btn btn-danger" onClick={props.onClickDelete}>
                Delete
              </button>
              <button className="btn btn-secondary" onClick={props.onClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
