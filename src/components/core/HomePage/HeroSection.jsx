import React from "react";
import ExploreMore from "./ExploreMore";
import HighlightText from "../../common/HighlightText";
import CodeBlocks from "./CodeBlocks";
import CTAbutton from "./CTAbutton";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../../../assets/Images/banner.mp4";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="flex flex-col items-center justify-between layout text-richblack-5 gap-9">
      {!user && (
        <Link to="/signup">
          <div className="transition-all duration-300 rounded-full hover:scale-95 bg-richblack-800 group shadow-[0_1px_0_0] shadow-richblack-700 hover:shadow-none">
            <div className="flex items-center gap-2 px-8 py-2 text-xs font-bold rounded-full text-richblack-100 hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
      )}

      <div className="flex flex-col items-center gap-2">
        <div className="text-center heading">
          Empower Your Future With
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className="w-full md:w-[70%] text-base font-bold text-center text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
      </div>

      <div className="flex gap-6">
        <CTAbutton linkTo={"/signup"} active={true}>
          Learn More
        </CTAbutton>
        <CTAbutton linkTo={"/login"} active={false}>
          Book a Demo
        </CTAbutton>
      </div>

      <div className="flex justify-center">
        <video
          loop
          muted
          autoPlay
          className="w-11/12  max-w-[1035px] shadow-white shadow-[20px_20px_0_0]"
        >
          <source src={Banner} type="video/mp4" />
        </video>
      </div>

      <div className="w-full">
        <CodeBlocks
          position={"flex-col lg:flex-row"}
          heading={
            <p className="tracking-tight heading font-inter">
              Unlock your
              <HighlightText text={"coding potential "} />
              with our online courses.
            </p>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={{
            text: "Try it Yourself",
            active: true,
            linkTo: "/signup",
          }}
          ctabtn2={{
            text: "Learn More",
            active: false,
            linkTo: "/login",
          }}
          textcolor={"text-brown-100"}
          bg_gradient_color={"from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF]"}
        />

        <CodeBlocks
          position={"flex-col lg:flex-row-reverse"}
          heading={
            <p className="tracking-tight heading font-inter">
              Start
              <HighlightText text={"coding in seconds"} />
            </p>
          }
          subheading={
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          ctabtn1={{
            text: "Continue Lesson",
            active: true,
            linkTo: "/signup",
          }}
          ctabtn2={{
            text: "Learn More",
            active: false,
            linkTo: "/login",
          }}
          textcolor={"text-richblack-50"}
          bg_gradient_color={"from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]"}
        />
      </div>
      <ExploreMore />
    </div>
  );
};

export default HeroSection;
