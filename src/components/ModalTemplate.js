

export default function ModalTemplate({onClose, children}) {
    return (
        <>
         <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
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