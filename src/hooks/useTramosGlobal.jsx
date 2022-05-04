import { useEffect, useState } from "react";
import { getTramos } from "services/TramosService";
import useUser from "./useUser";

export default function useTramosGlobal() {
    const { user } = useUser();
    const [cantidades, setCantidades] = useState([]);
    const [loadingTramosGlobal, setLoadingTramosGlobal] = useState(true);

    useEffect(() => {
        setLoadingTramosGlobal(true);
        getTramos()
            .then((tramos) => {
                setCantidades(tramos);
            })
            .finally(() => {
                setLoadingTramosGlobal(false);
            });
    }, [user]);

    return { cantidades, loadingTramosGlobal };
}
