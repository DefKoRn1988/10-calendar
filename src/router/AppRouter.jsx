import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {
    const authState = "not-authenticated";

    return (
        <Routes>
            {authState == "not-authenticated" ? (
                <Route path="/auth/*" element={<LoginPage />} />
            ) : (
                <Route path="/*" element={<CalendarPage />} />
            )}

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};
