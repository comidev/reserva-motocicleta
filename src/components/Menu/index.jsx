import ListOfTramos from "./ListOfTramos";
import {
    MenuBody,
    MenuContainer,
    MenuHeader,
    MenuItemHeader,
    MenuTitle,
} from "./styles";

export default function Menu() {
    return (
        <>
            <MenuContainer>
                <MenuHeader>
                    <MenuItemHeader>
                        <MenuTitle>Turno</MenuTitle>
                        <MenuTitle>Horario</MenuTitle>
                        <MenuTitle>Motociclistas</MenuTitle>
                        <MenuTitle>Estado</MenuTitle>
                    </MenuItemHeader>
                </MenuHeader>
                <MenuBody>
                    <ListOfTramos />
                </MenuBody>
            </MenuContainer>
        </>
    );
}
