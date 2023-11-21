import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { TbEdit } from "react-icons/tb";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <>
      <div className="">MyProfile</div>

      {/* section1 */}
      <div className="flex items-center justify-between w-5/6 p-8 mx-auto border rounded-lg bg-richblack-800 border-richblack-700">
        <div className="flex items-center gap-4">
          <img src={user?.image} alt="dp" className="w-20 rounded-full" />
          <div>
            <p className="text-xl font-semibold">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-richblack-300">{user?.email}</p>
          </div>
        </div>

        <IconBtn active={true} onclick={() => navigate("/dashboard/settings")}>
          <TbEdit size={20} />
          Edit
        </IconBtn>
      </div>
    </>
  );
};

export default MyProfile;
