import Menu from "components/Menu";
import { H1 } from "styles";
import { HomeContainer } from "./styles";

export default function Home() {
    return (
        <HomeContainer>
            <H1>Reserva tu motocicleta :D</H1>
            <Menu />
        </HomeContainer>
    );
}
