import HomeHeader from "@/sections/HomeHeader";
import LatestListings from "@/sections/LatestListings";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { listings } from "@/lib/utils";
import Testimonials from "@/sections/Testimonials";
import AboutUs from "@/sections/AboutUs";
import Footer from "@/sections/Footer";
import EmailInput from "@/sections/EmailInput";

const Home = () => {
  return (
    <main className="HomePage">
      {/* Nav */}
      
      <HomeHeader />
      <LatestListings listings={listings ?? []} />

      <AboutUs />

      <Testimonials />

      <EmailInput />

    </main>
  );
};

export default Home;
