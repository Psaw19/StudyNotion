import React from "react";
import "./assets/global.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/common";
import { PrivateRoute, OpenRoute } from "./components/core/Auth";
import {
  Home,
  About,
  Contact,
  Login,
  Signup,
  VerifyEmail,
  Error,
  Dashboard,
  ForgotPassword,
  UpdatePassword,
} from "./pages";
import {
  MyProfile,
  EnrolledCourses,
  Settings,
  Cart,
  AddCourse,
} from "./components/core/Dashboard";

const App = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden bg-richblack-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route path="/reset-password-token" element={<ForgotPassword />} />
        <Route path="/update-password/:id" element={<UpdatePassword />} />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route
            path="/dashboard/enrolled-courses"
            element={<EnrolledCourses />}
          />
          <Route path="/dashboard/cart" element={<Cart />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/add-course" element={<AddCourse />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
