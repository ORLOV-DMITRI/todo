import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import AuthPage from "./pages/AuthPage";


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

