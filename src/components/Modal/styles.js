import styled from "@emotion/styled";
import { COLOR } from "styles";

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);
    z-index: 100000;
`;

export const ModalContent = styled.div`
    position: relative;
    margin: 0 auto;
    width: 90%;
    max-width: 24rem;
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    text-align: center;
    line-height: 0;

    background-color: ${COLOR.WHITE_4};

    font-size: 1rem;

    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;

    @media (hover: hover) {
        &:hover {
            background-color: ${COLOR.BLACK};
            color: ${COLOR.WHITE};
        }
    }
`;
