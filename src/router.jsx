import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { AuthLayout } from "./layouts/authLayout";
import { Signup } from "./pages/signup/signup";
import { Login } from "./pages/login/login";
import { NotFound } from "./pages/notFound/notFound";
import { Home } from "./pages/home/home";
import AuthRequired from "./hooks/useAuthContext";

export const Routers = (params) => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<MainLayout/>}
                    >
                        <Route index element={<AuthRequired><Home/></AuthRequired>}/>
                    </Route>
                    <Route
                        element={<AuthLayout />}
                    >
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
