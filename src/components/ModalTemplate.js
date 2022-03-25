import { useState } from "react"
import classNames from "classnames"

export default function ModalTemplate({ onBack, isShowBackButton, children }) {
  const [closeMainModal, setCloseMainModal] = useState(false)  
  
  return (
        <>
       
          <div className="modalBackground" style={{display: closeMainModal ? "none" : "flex" }}>
            <div className="modalContainer">
                <div className={classNames("titleCloseBtn", {modalBackButtonVisible: isShowBackButton})}>
                 <button
				          	onClick={() => {
				          		onBack();
				          	}}
				          >
				          	Back
				         </button>
                 <button
                   onClick={() => setCloseMainModal(!closeMainModal)}
                 > 
                   X
                 </button>
                </div>
                {children}
            </div>
                   
          </div>
        </>
    )
}