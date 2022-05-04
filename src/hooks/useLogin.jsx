import { useState } from "react";
import useUser from "hooks/useUser";
import { setLogin } from "services/UsuarioService";

export default function useLogin() {
    const { setUser } = useUser();
    const [errorUsername, setErrorUsername] = useState("");
    const [loading, setLoading] = useState(false);

    const login = (userLogin) => {
        setLoading(true);
        setLogin(userLogin)
            .then((token) => {
                setUser({ username: userLogin.username, token });
            })
            .catch((error) => {
                console.log("Error xd: ", error);
                setErrorUsername("Username y/o password incorrectos");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { login, errorUsername, loading };
}
