import { Button } from "components/Button";
import { Spinner } from "components/Spinner";
import useRegister from "hooks/useRegister";
import { useState } from "react";
import { COLOR, H3 } from "styles";
import Login from ".";
import { LoginButtons, LoginContainer, Form, Input, Label, Error } from "./styles";

export default function Register() {
    const [showLogin, setShowLogin] = useState(false);
    const { errorUsername, errorPassword, crearCuenta, loading } = useRegister();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        crearCuenta({ username, password });
    };

    const handleClick = () => setShowLogin(true);
    if (showLogin) return <Login />;

    return (
        <LoginContainer onSubmit={handleSubmit}>
            <H3>Crear Cuenta</H3>
            <Form>
                <Label>
                    <Input error={errorUsername} placeholder="Escriba su username" />
                    <Error>{errorUsername}</Error>
                </Label>
                <Label>
                    <Input
                        type="password"
                        error={errorPassword}
                        placeholder="Escriba su password"
                    />
                    <Error>{errorPassword}</Error>
                </Label>
                {loading ? (
                    <Spinner width="30" />
                ) : (
                    <LoginButtons>
                        <Button type="submit">Crear cuenta</Button>
                        <Button type="button" onClick={handleClick} bg={COLOR.GOLD}>
                            Iniciar sesión
                        </Button>
                    </LoginButtons>
                )}
            </Form>
        </LoginContainer>
    );
}
