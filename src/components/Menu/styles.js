import styled from "@emotion/styled";
import { COLOR } from "styles";

export const MenuContainer = styled.table`
    background-color: ${COLOR.WHITE};
    color: ${COLOR.BLACK_1};
    width: 100%;
    text-align: center;
    border-radius: 2rem;
    padding: 1.5rem;
    font-size: 1rem;
    border-collapse: collapse;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    @media screen  and (max-width: 550px){
        border-radius: 1rem;
        padding: 0.5rem;
        font-size: 0.9rem;
    }
    `;

export const MenuHeader = styled.thead``;

export const MenuBody = styled.tbody``;

export const MenuItemHeader = styled.tr`
    background-color: ${COLOR.BLACK_1};
    color: ${COLOR.WHITE};
    height: 4rem;
`;


export const MenuTitle = styled.th``;

export const MenuSpinner = styled.td`
    padding: 2rem 0;
`;
