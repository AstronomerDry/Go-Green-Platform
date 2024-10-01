import React from "react";
import { BiHome } from "react-icons/bi";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Complaint from "./components/Complaint";
import Login from "./components/Login";
import SocietyRegister from "./components/PostForm";
import Donation from "./components/Donation";
import Educational from "./components/Educational";
import Complaints from "./components/Complaints";
import Faq from "./components/Faq";
import About from "./components/About";
import CardDetail from "./components/CardDetail";
import PostListings from "./components/PostListings";
import Campaign from "./components/Campaign";
import Algae from "./components/Algae";
import BioGasCommunity from "./components/BioGasCommunity";
import BioGasDistributionTest from "./components/BioGasDistributionTest";
import PrivateAuthRoute from "./components/Routes/PrivateAuthRoute";
import Incentive from "./components/Incentive";
import PostForm from "./components/PostForm";
import Footprint from "./components/Footprint";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/complaint"
        element={
          <PrivateAuthRoute>
            <Complaint />
          </PrivateAuthRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/society/signup" element={<SocietyRegister />} />
      <Route path="/donation" element={<PrivateAuthRoute><Donation /></PrivateAuthRoute>} />
      <Route path="/incentive" element={
      <PrivateAuthRoute>
      <Incentive />
      </PrivateAuthRoute>}/>
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/incentive/society/:id" element={<CardDetail />} />
      <Route path="/posts" element={<PostListings />} />
      <Route path="/newpost" element={<PostForm />} />
      <Route path="/campaign" element={<Campaign />} />
      <Route path="/algae" element={<Algae />} />
      <Route path="/biogas-community" element={<BioGasCommunity />} />
      <Route path="/biogas-distribution" element={<BioGasDistributionTest />} />
      <Route path="/education" element={<Educational />} />
      <Route path="/Footprint" element={<Footprint />} />


    </Routes>
  );
};

export default AllRoutes;
