import videoCall from "../../assets/svg/video-call.svg";
import phone from "../../assets/svg/phone.svg";
import dot from "../../assets/svg/dot-horizontal.svg";
import mock from "../../assets/png/MockMess2.png";

export default function UserCard() {
  return (
    <div className="bg-[#CCCCCC] text-[#132050] flex flex-col items-center rounded-2xl py-10 sm:px-[70px] px-8  xl:w-fit w-full text-nowrap">
      <div className="flex flex-col justify-center items-center px-20">
        <img src={mock} alt="avatar" />
        <p className="text-[26px] font-medium mt-4">Megan Norton</p>
        <p className="text-base font-medium mt-2">@Megan Norton</p>
      </div>
      <div className="flex sm:gap-6 gap-2 items-center justify-center mt-9">
        <div className="bg-[#F6F6F6] rounded-[30px] sm:p-[14px] p-2">
          <img src={videoCall} alt="videoCall" />
        </div>
        <div className="bg-[#F6F6F6] rounded-[30px] sm:p-[14px] p-2">
          <img src={phone} alt="phone" />
        </div>
        <div className="bg-[#F6F6F6] rounded-[30px] sm:p-[14px] p-2">
          <img src={dot} alt="dot" />
        </div>
      </div>
    </div>
  );
}
