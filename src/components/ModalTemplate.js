import { useState } from "react";
import classNames from "classnames";

import {
  displayServiceModal,
  display_appointment_modal,
} from "../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { bookService } from "../store/actions/schedule";

export default function ModalTemplate({ onBack, isShowBackButton, children }) {
  const [closeMainModal, setCloseMainModal] = useState(false);
  //const [backAction, setBackAction] = useState(false);
  const { back_service } = useSelector(
    (state) => state.schedule.schedule
  );

  const dispatch = useDispatch();
  const handleCloseModal = (params) => {
    setCloseMainModal(!closeMainModal);
    dispatch(display_appointment_modal(false));
    dispatch(displayServiceModal(false));
    dispatch(bookService({ isBooking: false }));
  };

  return (
    <>
      <div
        className="modalBackground"
        style={{ display: closeMainModal ? "none" : "flex", zIndex: 999 }}
      >
        <div className="modalContainer">
          <div
            className={classNames("titleCloseBtn", {
              modalBackButtonVisible: isShowBackButton,
            })}
          >
            {back_service && onBack && (
              <button
                onClick={() => {
                  onBack();
                }}
              >
                Back
              </button>
            )}
            <button onClick={handleCloseModal}>X</button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
