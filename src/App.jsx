import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import JobDetailsPage from "./Pages/JobDetailsPage/JobDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/job-details/:id" element={<JobDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
