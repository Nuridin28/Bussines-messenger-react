import { menuItems } from "../../misc/constants";
import logo from "../../assets/svg/logo.svg";
import SubscribeBlock from "./SubscribeBlock";
type Props = {};

export default function LeftSideMenu({}: Props) {
  return (
    <div className="px-8 py-16 bg-[#F1F1F1] flex flex-col h-full min-h-screen  overflow-hidden">
      <img src={logo} alt="logo" className="w-[120px]" />
      <div className="flex flex-col gap-8 font-normal text-sm mt-24">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-5 text-[#807A75] hover:text-[#132050] items-center"
          >
            {item.img({})}
            {item.title}
          </div>
        ))}
      </div>
      <SubscribeBlock />
    </div>
  );
}