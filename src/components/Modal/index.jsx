import { createPortal } from "react-dom";
import { ModalClose, ModalContainer, ModalContent } from "./styles";

function Modal({ children, onClick }) {
    return (
        <ModalContainer>
            <ModalContent>
                <ModalClose onClick={onClick}>✖</ModalClose>
                {children}
            </ModalContent>
        </ModalContainer>
    );
}

export default function ModalPortal({ children, onClick }) {
    return createPortal(
        <Modal onClick={onClick}>{children}</Modal>,
        document.getElementById("modal-login")
    );
}
