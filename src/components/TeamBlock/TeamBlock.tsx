import { TeamMembers } from "../../misc/constants";
import TeamMember from "./TeamMember/TeamMember";
import profile from "../../assets/svg/user-profile.svg";
import plus from "../../assets/svg/plus-black.svg";
import { useState } from "react";

export default function TeamBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTeamMember = () => {
    console.log(isModalOpen);

    setIsModalOpen(true);
  };
  return (
    <div className="bg-white rounded-3xl p-6 text-black ">
      <div className="flex justify-between">
        <p className="text-[28px] font-semibold">Team</p>
        <div className="flex gap-2 bg-[#F6F6F6] rounded-[30px] px-[14px] py-[10px] w-fit text-[#19427F] text-sm font-medium">
          <img src={profile} alt="" />
          {TeamMembers.length}
        </div>
      </div>
      <div className="mt-9 flex flex-col gap-5">
        {TeamMembers.map((member) => (
          <TeamMember
            name={member.name}
            role={member.role}
            img={member.img}
            key={member.id}
          />
        ))}
      </div>
      <hr className="bg-[#F6F6F6] w-full h-[1px] mt-8" />

      <div className="flex items-center mt-5 gap-3">
        <div
          onClick={addTeamMember}
          className="bg-[#BCD9F6] rounded-[30px] p-6 cursor-pointer"
        >
          <img src={plus} alt="plus" />
        </div>
        <p className="text-base text-black font-medium">
          Invite new team member
        </p>
      </div>
    </div>
  );
}
