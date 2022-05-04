import { useState } from "react";
import { Button } from "components/Button";
import { COLOR } from "styles";
import { NavLink } from "./styles";
import Modal from "components/Modal";
import Login from "components/Login";
import Register from "components/Login/Register";
import useUser from "hooks/useUser";

export default function NavContent() {
    const { user, setUser } = useUser();
    const [showModal, setShowModal] = useState(false);
    const [toggleForm, setToggle] = useState(true);

    const handleLogin = () => {
        setToggle(true);
        setShowModal(true);
    };
    const handleRegister = () => {
        setToggle(false);
        setShowModal(true);
    };

    const handleLogout = () => {
        setShowModal(false);
        setUser(null);
    };

    const handleClose = () => setShowModal(false);

    return Boolean(user) ? (
        <>
            <NavLink>{user.username} 🤟</NavLink>
            <NavLink>
                <Button onClick={handleLogout} bg={COLOR.BLACK}>
                    Cerrar sesión
                </Button>
            </NavLink>
        </>
    ) : (
        <>
            {!user && showModal && (
                <Modal onClick={handleClose}>
                    {toggleForm ? <Login /> : <Register />}
                </Modal>
            )}
            <NavLink>
                <Button onClick={handleLogin}>Iniciar sesión</Button>
            </NavLink>
            <NavLink>
                <Button onClick={handleRegister} bg={COLOR.BLACK}>
                    Crear cuenta
                </Button>
            </NavLink>
        </>
    );
}
