import { Button } from "components/Button";
import { Spinner } from "components/Spinner";
import useLogin from "hooks/useLogin";
import { useState } from "react";
import { COLOR, H3 } from "styles";
import Register from "./Register";
import { LoginButtons, LoginContainer, Form, Input, Label, Error } from "./styles";

export default function Login() {
    const { login, errorUsername, loading } = useLogin();
    const [showRegister, setShowRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        login({ username, password });
    };

    const handleClick = () => setShowRegister(true);

    if (showRegister) return <Register />;

    return (
        <LoginContainer onSubmit={handleSubmit}>
            <H3>Iniciar Sesión</H3>
            <Form>
                <Label>
                    <Input error={errorUsername} placeholder="Escriba su username" />
                    <Error>{errorUsername}</Error>
                </Label>
                <Input type="password" placeholder="Escriba su password" />
                {loading ? (
                    <Spinner width="30" />
                ) : (
                    <>
                        <LoginButtons>
                            <Button type="submit">Iniciar sesión</Button>
                            <Button
                                type="button"
                                onClick={handleClick}
                                bg={COLOR.GOLD}>
                                Crear cuenta
                            </Button>
                        </LoginButtons>
                    </>
                )}
            </Form>
        </LoginContainer>
    );
}
