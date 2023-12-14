import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { TbEdit } from "react-icons/tb";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const dataContainer = "w-[50%] space-y-2";
  const title = "text-richblack-500";
  const titleData = "font-medium text-[17px]";

  return (
    <div className="mb-10 space-y-10">
      <div className="flex justify-between w-5/6 py-5 mx-auto my-5">
        <h1 className="heading">MyProfile</h1>
        <IconBtn active={true} onclick={() => navigate("/dashboard/settings")}>
          <TbEdit size={20} />
          Edit
        </IconBtn>
      </div>

      {/* section 1 */}
      <div className="flex items-center justify-between w-5/6 px-10 py-5 mx-auto border rounded-lg bg-richblack-800 border-richblack-700">
        <div className="flex items-center gap-4">
          <img src={user?.image} alt="dp" className="w-20 rounded-full" />
          <div>
            <p className="text-xl font-semibold````````">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-richblack-300">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col w-5/6 gap-10 px-10 py-5 mx-auto border rounded-lg bg-richblack-800 border-richblack-700">
        <div className="text-xl font-semibold">About</div>
        <div className="text-richblack-400">
          {user?.additionalDetails?.about ?? "Write something about yourself"}
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col w-5/6 gap-4 px-10 py-5 mx-auto border rounded-lg bg-richblack-800 border-richblack-700">
        <div className="text-xl font-semibold">Personal Details</div>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <div className={dataContainer}>
              <p className={`${title}`}>First Name</p>
              <p className={`${titleData}`}>{user?.firstName}</p>
            </div>
            <div className={dataContainer}>
              <p className={`${title}`}>Last Name</p>
              <p className={`${titleData}`}>{user?.lastName}</p>
            </div>
          </div>
          <div className="flex">
            <div className={dataContainer}>
              <p className={`${title}`}>Email</p>
              <p className={`${titleData}`}>{user?.email}</p>
            </div>
            <div className={dataContainer}>
              <p className={`${title}`}>Contact Number</p>
              <p className={`${titleData}`}>
                {user?.additionalDetails?.contactNumber ?? "Add Conatct Number"}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className={dataContainer}>
              <p className={`${title}`}>Gender</p>
              <p className={`${titleData}`}>
                {user?.additionalDetails?.gender ?? "Add gender"}
              </p>
            </div>
            <div className={dataContainer}>
              <p className={`${title}`}>Date of Birth</p>
              <p className={`${titleData}`}>
                {user?.additionalDetails?.dateOfBirth ?? "Add date of birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
