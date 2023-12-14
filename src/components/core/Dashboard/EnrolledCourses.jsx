import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileApi";

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const response = await getUserEnrolledCourses(token);
      setEnrolledCourses(response);
    } catch (error) {
      console.log("Unable to fetch enrolled courses");
    }
  };

  useEffect(() => {
    getEnrolledCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>EnrolledCourses</div>
      <div>
        {!enrolledCourses ? (
          <div> Loading...</div>
        ) : !enrolledCourses.length ? (
          <div>No enrolled courses</div>
        ) : (
          <div>Here are your courses</div>
        )}
      </div>
    </div>
  );
};

export default EnrolledCourses;
