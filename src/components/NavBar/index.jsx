import NavContent from "./NavContent";
import { Nav, NavBarContainer, NavLinkList } from "./styles";
export default function NavBar() {
    return (
        <>
            <NavBarContainer>
                <Nav>
                    <NavLinkList>
                        <NavContent />
                    </NavLinkList>
                </Nav>
            </NavBarContainer>
        </>
    );
}
