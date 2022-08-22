import './modal.scss'

const Modal = ({children, close}) => {
    return(
        <div id="modal1" className="modal modal-custom">
            <div className="modal-content">
                <button className="close-modal" onClick={()=>close(true)}>x</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;