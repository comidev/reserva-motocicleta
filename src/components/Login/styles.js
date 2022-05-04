import styled from "@emotion/styled";
import { COLOR } from "styles";

export const LoginContainer = styled.div`
    margin: auto;
    height: max-content;
    padding: 1.5rem;
    border-radius: 0.4rem;
    background-color: ${COLOR.WHITE_1};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    position: relative;
`;

export const Error = styled.span`
    position: absolute;
    top: 3.4rem;
    left: 0.5rem;
    color: ${COLOR.RED};
    font-size: 13px;
`;

export const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 1.2rem;
    border-radius: 0.4rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${({ error }) => error && `border-color: ${COLOR.RED};`}
    width: 100%;

    &:focus-within {
        border-color: ${COLOR.PRIMARY};
    }
`;

export const LoginButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
`;
