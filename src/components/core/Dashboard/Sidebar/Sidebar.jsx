import React, { useState } from "react";
import SidebarLinks from "./SidebarLinks";
import { sidebarLinks } from "../../../../data/dashboard-links";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationModal from "../../../common/ConfirmationModal";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../services/operations/authApi";
import { VscSignOut } from "react-icons/vsc";

const Sidebar = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModalData, setConfirmationModalData] = useState(null);

  const modalData = {
    heading: "Are you sure?",
    description: "You will be logged out of your account",
    btn1text: "Logout",
    btn1handler: () => dispatch(logout(navigate)),
    btn2text: "Cancel",
    btn2handler: () => setConfirmationModalData(null),
  };

  return (
    <div className="w-1/6 h-full py-5 border-r bg-richblack-800 border-richblack-700">
      <div className="flex flex-col py-5">
        {sidebarLinks.map((link) =>
          link.type && link.type !== user?.accountType ? null : (
            <SidebarLinks
              key={link.id}
              text={link.name}
              path={link.path}
              icon={link.icon}
            />
          )
        )}
      </div>
      <div className="w-10/12 mx-auto h-[1px] bg-richblack-700" />
      <div className="py-5">
        <SidebarLinks
          text={"Settings"}
          path={"/dashboard/settings"}
          icon={"VscSettingsGear"}
        />
        <button
          className="flex items-center gap-3 px-6 py-2 text-base font-medium text-richblack-300"
          onClick={() => setConfirmationModalData(modalData)}
        >
          <VscSignOut className="text-lg" />
          Logout
        </button>
      </div>
      {confirmationModalData !== null && (
        <ConfirmationModal modalData={modalData} />
      )}
    </div>
  );
};

export default Sidebar;
