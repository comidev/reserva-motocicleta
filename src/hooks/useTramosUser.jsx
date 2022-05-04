import { useEffect, useState } from "react";
import { getTramosByUser } from "services/UsuarioService";
import useUser from "hooks/useUser";

export default function useTramosUser() {
    const { user } = useUser();
    const [tramosUser, setTramosUser] = useState([]);
    const [loadingTramosUser, setLoadingTramosUser] = useState(true);

    useEffect(() => {
        setLoadingTramosUser(true);
        if (user) {
            getTramosByUser(user.token)
                .then((tramos) => {
                    setTramosUser(tramos);
                })
                .finally(() => {
                    setLoadingTramosUser(false);
                });
        } else {
            setTramosUser([]);
            setLoadingTramosUser(false);
        }
    }, [user]);

    return { tramosUser, loadingTramosUser };
}
