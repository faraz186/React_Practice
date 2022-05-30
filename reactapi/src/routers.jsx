import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";


export default function AppRouter()
{
    return(
        <>
        <Router>
            <Routes>
                <Route path="/dashboard/*" element={<Dashboard />}/>
            </Routes>
        </Router>
        </>
    )
}