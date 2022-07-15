import './modal.scss'

const Modal = ({children}) => {
    return(
        <div className="modal-custom">
            {children}
        </div>
    )
}

export default Modal;