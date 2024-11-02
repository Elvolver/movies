import './App.css';
import {Container} from "@mui/material";
import * as React from "react";
import routes from "./routes";
import {Route, Routes} from "react-router-dom";
import AppAppBar from "./views/AppAppBar";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchCountries} from "./redux/countriesThunk";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    return (
        <>
            <AppAppBar/>
            <Container maxWidth="lg">

                <Routes>
                    {routes.map((prop, key) => {
                        return (
                            <Route
                                path={prop.path}
                                element={prop.component}
                                key={key}
                                exact
                            />
                        );
                    })}
                </Routes>
            </Container>
        </>

    );
}

export default App;