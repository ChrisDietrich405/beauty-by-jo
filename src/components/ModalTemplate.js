import classNames from "classnames"

export default function ModalTemplate({onClose, onBack, isShowBackButton, children}) {
    return (
        <>
          <div className="modalBackground">
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
                   onClick={
                     onClose
                   }
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