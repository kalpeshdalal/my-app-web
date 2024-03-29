import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { AuthLayout } from "./layouts/authLayout";
import { Signup } from "./pages/signup/signup";
import { Login } from "./pages/login/login";
import { NotFound } from "./pages/notFound/notFound";
import { Home } from "./pages/home/home";
import AuthRequired from "./hooks/useAuthContext";
import Category from "./pages/category/category";
import Products from "./pages/products/products";
import AddNewCategory from "./pages/category/addNewCategory";
import AddNewProducts from "./pages/products/addNewProducts";

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
                        <Route path="/category" element={<AuthRequired><Category/></AuthRequired>}/>
                        <Route path="/category/new" element={<AuthRequired><AddNewCategory/></AuthRequired>}/>
                        <Route path="/category/:id" element={<AuthRequired><AddNewCategory/></AuthRequired>}/>
                        <Route path="/products" element={<AuthRequired><Products/></AuthRequired>}/>
                        <Route path="/products/new" element={<AuthRequired><AddNewProducts/></AuthRequired>}/>
                        <Route path="/products/:id" element={<AuthRequired><AddNewProducts/></AuthRequired>}/>
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
