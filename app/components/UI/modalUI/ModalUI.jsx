"use client";
import "./styles.scss";

const ModalUI = ({ children, isModalActive, setIsModalActive }) => {
  const handleClose = () => {
    setIsModalActive(false);
  };

  return (
      <div
        onClick={() => handleClose()}
        className={`modal-ui-wrapper ${isModalActive ? "modal-is-show" : ""}`}>
        <div onClick={e => e.stopPropagation()} className="modal-content">
          <div className="modal-body">{children}</div>
        </div>
      </div>
  );
};

export default ModalUI;
