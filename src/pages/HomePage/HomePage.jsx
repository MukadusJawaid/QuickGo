import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import HeroSection from "../../components/HeroSection/HeroSection";
import PackageCard from "../../components/PackageCard/PackageCard";

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <PackageCard/>
    </div>
  );
}
