import { useState } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { display_appointment_modal } from "../store/actions/auth";

export default function ModalTemplate({ onBack, isShowBackButton, children }) {
  const [closeMainModal, setCloseMainModal] = useState(false);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setCloseMainModal(!closeMainModal);
    dispatch(display_appointment_modal(true));
  };

  return (
    <>
      <div
        className="modalBackground"
        style={{ display: closeMainModal ? "none" : "flex" }}
      >
        <div className="modalContainer">
          <div
            className={classNames("titleCloseBtn", {
              modalBackButtonVisible: isShowBackButton,
            })}
          >
            <button
              onClick={() => {
                onBack();
              }}
            >
              Back
            </button>
            <button onClick={handleCloseModal}>X</button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
