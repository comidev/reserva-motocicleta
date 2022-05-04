import Login from "components/Login";
import Modal from "components/Modal";
import useUser from "hooks/useUser";
import { useState } from "react";
import { MenuDato, MenuItem } from "./styles";
import { tomar, devolver } from "services/TramosService";
import { Spinner } from "components/Spinner";

export default function Horario({ id, horario, cantidad, tomado2 }) {
    const [showModal, setShowModal] = useState(false);
    const { user } = useUser();
    const [motociclistas, setMotociclistas] = useState(cantidad);
    const [loading, setLoading] = useState(false);
    const [tomado, setTomado] = useState(Boolean(tomado2));
    const tomarValue = tomado2 ? cantidad : cantidad - 1;
    const devolverValue = tomado2 ? cantidad + 1 : cantidad;

    const handleClick = () => {
        if (user) {
            setShowModal(false);
            setLoading(true);
            if (!tomado && motociclistas > 0) {
                tomar(id, user.token).then((res) => {
                    if (res) {
                        setTomado(true);
                        setMotociclistas(tomarValue);
                    }
                    setLoading(false);
                });
            } else if (motociclistas < 8) {
                devolver(id, user.token).then((res) => {
                    if (res) {
                        setTomado(false);
                        setMotociclistas(devolverValue);
                    }
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
        } else {
            setShowModal(true);
        }
    };

    const handleClose = () => setShowModal(false);

    if (user && showModal) {
        setShowModal(false);
    }

    return (
        <>
            {!user && showModal && (
                <Modal onClick={handleClose}>
                    <Login />
                </Modal>
            )}
            <MenuItem
                onClick={handleClick}
                agotado={motociclistas === 0 ? "rojo" : ""}
                tomado={tomado ? "verde" : ""}>
                <MenuDato>{id}</MenuDato>
                <MenuDato>{horario}</MenuDato>
                <MenuDato>
                    {loading ? <Spinner width="15" /> : motociclistas}
                </MenuDato>
                <MenuDato>{motociclistas === 0 ? "Agotado" : "Disponible"}</MenuDato>
            </MenuItem>
        </>
    );
}
