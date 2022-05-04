import styled from "@emotion/styled";
import { COLOR } from "styles";

export const MenuItem = styled.tr`
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 600;
    height: 4rem;
    user-select: none;
    ${({ tomado }) => tomado && `background-color: ${COLOR.SUCCESS};`}
    ${({ agotado, tomado }) =>
        !tomado && agotado
            ? `
            background-color: ${COLOR.RED};
            color: ${COLOR.WHITE_1}`
            : `
            @media (hover: hover) {
                &:hover {
                    cursor: pointer;
                    background-color: ${COLOR.BLACK_1};
                    color: ${COLOR.WHITE};
                }
            }`}
`;

export const MenuDato = styled.td``;
