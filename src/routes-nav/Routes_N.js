import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

function Routes_N({ login, signup }) {
  console.debug(
      "Routes_N",
      `login=${typeof login}`,
      `register=${typeof register}`,
  );

  return (
      <div className="pt-5">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />

          <Route path="/companies"  element= {<CompanyList />} />
          <Route path="/jobs"  element= {<JobList />} />
          <Route path="/companies/:handle"  element= {<CompanyDetail />} />
          <Route path="/companies"  element= {<CompanyList />} />
          <Route path="/profile"  element= {<ProfileForm />} />

 
        </Routes>
      </div>
  );
}

export default Routes_N;
