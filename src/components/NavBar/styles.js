import styled from "@emotion/styled";
import { BG_COLOR, COLOR, CONTAINER } from "styles";

export const NavBarContainer = styled.header`
    position: sticky;
    top: 0;
    width: 100vw;
    backdrop-filter: blur(5px);
    height: 5rem;
`;

export const Nav = styled.nav`
    ${CONTAINER};
    display: flex;
    align-items: center;
    height: 100%;
`;

export const NavLinkList = styled.ul`
    display: flex;
    width: max-content;
    margin: auto 0;
    margin-left: auto;
    align-items: center;
`;

export const NavLink = styled.li`
    margin-left: 0.5rem;
`;
