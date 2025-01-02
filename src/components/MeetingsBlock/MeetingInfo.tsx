import clock from "../../assets/svg/clock.svg";
import dots from "../../assets/svg/dot-vertical.svg";
import calendar from "../../assets/svg/calendar.svg";

export default function MeetingInfo() {
  return (
    <div className="mt-6">
      <div className="flex justify-between bg-[#F6F6F6] rounded-lg p-[14px]">
        <div className="flex gap-3  ">
          <img src={clock} alt="clock" />
          <p className="text-base font-medium text-[#132050]">11:00 - 12:30</p>
        </div>
        <div>
          <img src={dots} alt="dots" />
        </div>
      </div>

      <div className="flex justify-between bg-[#F6F6F6] rounded-lg p-[14px] mt-4">
        <div className="flex gap-3  ">
          <img src={calendar} alt="calendar" />
          <p className="text-base font-medium text-[#132050]">Monday,20 Feb</p>
        </div>
        <div>
          <img src={dots} alt="dots" />
        </div>
      </div>
    </div>
  );
}
