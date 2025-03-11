import { Routes, Route } from "react-router-dom";
import AuthGuard from "./guards/auth.guard";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthGuard />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;