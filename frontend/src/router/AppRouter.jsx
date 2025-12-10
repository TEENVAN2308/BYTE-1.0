import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import TeamSignup from "../pages/TeamSignup.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UpdateQuestions from "../pages/admin/UpdateQuestions.jsx";
import RoundWiseResults from "../pages/admin/RoundWiseResults.jsx";
import RoundOne from "../pages/rounds/round-one/RoundOne.jsx";
import QuesOne from "../pages/rounds/round-two/QuesOne.jsx";
import QuesTwo from "../pages/rounds/round-two/QuesTwo.jsx";
import RoundThree from "../pages/rounds/round-three/RoundThree.jsx";
import Rules from "../pages/rules/Rules.jsx"
import Waiting from "../pages/waiting/Waiting.jsx"
// components
// import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>

      {/* Main page Routes */}
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/team-signup"
        element={<TeamSignup />}
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/questions"
        element={<UpdateQuestions />}
      />

      <Route
        path="/admin/results"
        element={<RoundWiseResults />}
      />

      {/* Round-1 */}
      <Route
        path="/round-one"
        element={<RoundOne />}
      />
      {/* Round-2 */}
      <Route
        path="/round-two-ques-one"
        element={<QuesOne />}
      />
      <Route
        path="/round-two-ques-one"
        element={<QuesTwo />}
      />

      {/* Round-3 */}
      <Route
        path="/round-three"
        element={<RoundThree />}
      />

      {/* Waiting and Rules dynamic routing */}
      <Route
        path="/rules/:roundId"
        element={
            <Rules />
        }
      />

      <Route
        path="/waiting/:roundId"
        element={
            <Waiting />
        }
      />


      {/* 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
