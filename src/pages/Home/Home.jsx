import React from "react";
import HighlightText from "../../components/common/HighlightText";
import Footer from "../../components/common/Footer";
import ReviewSlider from "../../components/common/ReviewSlider";
import {
  CTAbutton,
  TimelineSection,
  LearningLanguageSection,
  InstructorSection,
  HeroSection,
} from "../../components/core/HomePage";

const Home = () => {
  return (
    <div className="font-inter bg-richblack-900">
      {/* Section 1 */}
      <HeroSection />

      {/* Section 2 */}

      <div className="w-full bg-pure-greys-5">
        <div className="flex items-center justify-center bg_homepage h-60 md:h-80" />

        <div className="flex flex-col layout gap-14">
          <div className="flex flex-col w-full gap-3 lg:flex-row sm:px-10">
            <div className="heading lg:w-1/2">
              <p>
                Get the skills you need for a
                <HighlightText text={"job that is in demand."} />
              </p>
            </div>

            <div className="flex flex-col gap-6 md:gap-9 lg:gap-12 xl:pl-32 lg:w-1/2">
              <p>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <CTAbutton active={true} linkTo={"/signup"}>
                Learn More
              </CTAbutton>
            </div>
          </div>

          <TimelineSection />
        </div>

        <LearningLanguageSection />
      </div>

      {/* Section 3 */}
      <div className="w-full bg-richblack-900">
        <InstructorSection />
        <ReviewSlider />
      </div>

      {/* Section 4 */}

      <Footer />
    </div>
  );
};

export default Home;
