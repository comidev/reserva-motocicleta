import { HORARIOS } from "data";
import Horario from "components/Horario";
import { Spinner } from "components/Spinner";
import useTramosGlobal from "hooks/useTramosGlobal";
import useTramosUser from "hooks/useTramosUser";
import { MenuSpinner } from "./styles";

export default function ListOfTramos() {
    const { cantidades, loadingTramosGlobal } = useTramosGlobal();
    const { tramosUser, loadingTramosUser } = useTramosUser();

    return loadingTramosGlobal || loadingTramosUser ? (
        <MenuSpinner colSpan={4}>
            <Spinner />
        </MenuSpinner>
    ) : (
        HORARIOS.map((horario, index) => (
            <Horario
                id={index + 1}
                key={horario}
                horario={horario}
                cantidad={cantidades[index].cantidad}
                tomado2={
                    tramosUser.some((tramo) => tramo.id === index + 1) ? "verde" : ""
                }
            />
        ))
    );
}
