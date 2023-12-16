import React from "react";
import {
  HeroSection,
  Quote,
  FoundingStory,
  VisionAndMission,
  Stats,
  LearningGrid,
  ContactUs,
} from "../../components/core/AboutPage";
import { ReviewSlider, Footer } from "../../components/common";

const About = () => {
  return (
    <div className="text-richblack-5 bg-richblack-900 font-inter">
      {/* Section 1 */}
      <HeroSection />

      {/* Section 2 */}
      <Quote />

      {/* Section 3 */}
      <FoundingStory />
      <VisionAndMission />

      {/* Section 4 */}
      <Stats />
      <LearningGrid />

      {/* Section 5 */}
      <ContactUs />

      {/* Section6 */}
      <ReviewSlider />

      <Footer />
    </div>
  );
};

export default About;
