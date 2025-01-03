import { useEffect, useState } from "react";
import mock from "../../assets/png/mockMess.png";
import calendar from "../../assets/svg/calendar.svg";
import search from "../../assets/svg/search.svg";
import bell from "../../assets/svg/bell.svg";
import message from "../../assets/svg/message-typing.svg";
import updateDate from "../../misc/date";

export default function Header() {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const currentDate = updateDate();
    setDate(currentDate);
    window.onload = () => {
      const newDate = updateDate();
      setDate(newDate);
    };
  }, []);

  return (
    <div className="bg-white mt-11 h-fit w-full md:flex hidden items-center p-3 rounded-[80px] justify-between">
      <div className="flex items-center gap-4">
        <img src={mock} alt="avatar" />
        <div>
          <p className="text-[#132050] text-lg font-medium">Margsate Flether</p>
          <p className="text-[#132050] text-sm font-light opacity-50">
            Margsate Flether
          </p>
        </div>
      </div>

      <div className="bg-[#F6F6F6] py-2 px-4 rounded-[30px] flex gap-3 items-center text-nowrap w-fit">
        <img src={calendar} alt="calendar" />
        <p className="text-[#132050] text-sm font-medium">{date}</p>
      </div>

      <div className="flex items-center justify-end">
        <div className="bg-[#F6F6F6] p-[14px] rounded-[30px] flex items-center  gap-[14px]">
          <img src={search} alt="search" />
          <input
            className="outline-none text-[#132050] bg-inherit"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex ml-5 gap-4">
          <div className="bg-[#F6F6F6] rounded-[30px] p-[14px]">
            <img src={bell} alt="bell" />
          </div>
          <div className="bg-[#F6F6F6] rounded-[30px] p-[14px]">
            <img src={message} alt="message" />
          </div>
        </div>
      </div>
    </div>
  );
}
