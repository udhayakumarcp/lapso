import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Billing from "../pages/billing/Billing";
import Campaign from "../pages/campaign/Campaign";
import CreateBusiness from "../pages/create-business/CreateBusiness";
import Dashboard from "../pages/dashboard/Dashboard";
import GettingStarted from "../pages/getting-started/GettingStarted";
import Notification from "../pages/notification/Notification";
import Settings from "../pages/settings/Settings";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const AppRoutes: React.FC = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="signin" element={<SignIn />} />
    <Route path="signup" element={<SignUp />} />
    <Route path="create-business" element={<CreateBusiness />} />

    {/* Protected Routes */}
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<GettingStarted />} />
      <Route path="campaign" element={<Campaign />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="billing" element={<Billing />} />
      <Route path="notification" element={<Notification />} />
      <Route path="settings" element={<Settings />} />
    </Route>

    {/* Wildcard Route */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
