import styled from "@emotion/styled";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Home from "pages/Home";
import { COLOR, Main } from "styles";
import { UserProvider } from "context/UserProvider";

const AppStyle = styled.div`
    min-height: 100vh;
    background-color: ${COLOR.WHITE_1};
`;

function App() {
    return (
        <AppStyle>
            <UserProvider>
                <NavBar />
                <Main>
                    <Home />
                </Main>
                <Footer />
            </UserProvider>
        </AppStyle>
    );
}

export default App;
