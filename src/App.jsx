import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import JobDetailsPage from "./Pages/JobDetailsPage/JobDetailsPage";
import JobPostPage from "./Pages/JobPostPage/JobPostPage";
import HomePage from "./Pages/HomePage/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/job-details/:id" element={<JobDetailsPage />} />
        <Route path="/job-post" element={<JobPostPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
