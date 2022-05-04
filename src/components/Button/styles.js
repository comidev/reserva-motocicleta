import styled from "@emotion/styled";
import { COLOR } from "styles";

export const ButtonContainer = styled.button`
    display: inline-block;
    padding: 0.7rem 1rem;
    max-width: max-content;
    border-radius: 0.7rem;
    margin: auto;
    font-size: 1rem;
    font-weight: 600;

    background-color: ${({ bg }) => (bg ? bg : COLOR.PRIMARY)};
    color: ${({ color }) => (color ? color : COLOR.WHITE)};

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    transition-property: transform, background-color, color;
    transition: ease 0.3s;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            background-color: ${({ bg }) =>
                bg === COLOR.BLACK ? COLOR.WHITE : COLOR.BLACK};
            ${({ bg }) => (bg === COLOR.BLACK ? `color: ${COLOR.BLACK};` : "")}
            box-shadow: 0 15px 10px rgba(0, 0, 0, 0.3);
            transform: translateY(-7px);
        }
    }
`;
