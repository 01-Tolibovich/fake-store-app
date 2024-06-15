"use client"

import { useState } from "react";
import "./styles.scss";

const ModalUI = ({ children }) => {
  const [closeModal, setCloseModal] = useState(true);
	 return closeModal && (
      <div onClick={() => setCloseModal(false)} className="modal-ui-wrapper">
      <div className="modal-content">{ children }</div>
    </div>
  );
};

export default ModalUI;
