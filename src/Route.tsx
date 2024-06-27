import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from "./layout/root-layout";
import AuthPage from "./pages/auth-page";


export default function AppRoutes() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/auth" element={<AuthPage/>}/>
                </Routes>
            </MainLayout>
        </Router>
    );
};

