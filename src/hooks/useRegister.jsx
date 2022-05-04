import { useCallback, useState } from "react";
import useUser from "hooks/useUser";
import { setRegister, setLogin } from "services/UsuarioService";

export default function useRegister() {
    const { setUser } = useUser();
    const [loading, setLoading] = useState(false);
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const crearCuenta = useCallback(
        ({ username, password }) => {
            // validación ----------------------------
            const usernameValid = username.length >= 6;
            const passwordValid = password.length >= 3;
            // ---------------------------------------
            if (usernameValid && passwordValid) {
                setErrorPassword("");
                const userNew = { username, password };
                // Registramos
                setLoading(true);
                setRegister(userNew)
                    .then(() => {
                        setLogin(userNew).then((token) => {
                            setUser({ username, token });
                            setLoading(false);
                        });
                    })
                    .catch(() => {
                        setErrorUsername("Username existente");
                        setLoading(false);
                    });
            } else {
                // formato inválido
                if (!usernameValid) {
                    setErrorUsername("Mínimo 6 caracteres");
                } else {
                    setErrorUsername("");
                }
                if (!passwordValid) {
                    setErrorPassword("Mínimo 3 caracteres");
                } else {
                    setErrorPassword("");
                }
            }
        },
        [setUser]
    );

    return { errorUsername, errorPassword, crearCuenta, loading };
}
