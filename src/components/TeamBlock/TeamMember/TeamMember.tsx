import mail from "../../../assets/svg/mail.svg";
import { TeamMemberPropsType } from "../../../types/types";

export default function TeamMember({ name, role, img }: TeamMemberPropsType) {
  return (
    <div className="flex gap-[14px] items-center">
      <div className="">
        <img src={img} alt="teamProfile" />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-[#00072A] text-lg font-medium">{name}</p>
        <p className="text-[#132050] opacity-50 text-sm font-light">{role}</p>
      </div>
      <div className="bg-[#F6F6F6] rounded-[30px] p-[14px] w-fit">
        <img src={mail} alt="mail" />
      </div>
    </div>
  );
}
