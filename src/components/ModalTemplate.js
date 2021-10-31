

export default function ModalTemplate({onClose, onBack, children}) {
    return (
        <>
          <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
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