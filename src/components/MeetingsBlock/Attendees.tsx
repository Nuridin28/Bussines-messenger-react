import mock from "../../assets/png/teamMock.png";
import send from "../../assets/svg/send.svg";

export default function Attendees() {
  return (
    <div className="mt-10 ">
      <p className="text-black font-semibold text-[24px]">Attendees</p>
      <div className="flex items-center justify-between sm:flex-row flex-col">
        <div className="flex relative space-x-[-10px] mt-6 items-center">
          <img className="z-1 w-[50px] h-[50px]" src={mock} alt="profile1" />
          <img className="z-2 w-[50px] h-[50px]" src={mock} alt="profile2" />
          <img className="z-3 w-[50px] h-[50px]" src={mock} alt="profile3" />
          <img className="z-4 w-[50px] h-[50px]" src={mock} alt="profile4" />
          <img className="z-5 w-[50px] h-[50px]" src={mock} alt="profile5" />
          <div className="bg-[#D6EEF6] rounded-[30px] px-[13.5px] py-[12px] flex items-center w-[50px] h-[50px] text-[20px] tetx-black font-medium justify-center">
            +2
          </div>
        </div>

        <div className="flex items-center mt-6">
          <p className="font-medium text-base text-[#132050]">
            Send invitation link
          </p>
          <div className="p-[10px] bg-[#BCD9F6] rounded-[30px] flex items-center justify-center ml-4 cursor-pointer">
            <img src={send} alt="sendIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
