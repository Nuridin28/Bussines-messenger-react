import ChatBlock from "../ChatBlock/ChatBlock";
import Header from "../Header/Header";
import MobileNav from "../LeftMenu/Mobile/MobileNav";
import MeetingsBlock from "../MeetingsBlock/MeetingsBlock";
import TeamBlock from "../TeamBlock/TeamBlock";

export default function Main() {
  return (
    <div className="sm:px-10 px-2 pb-[47px] w-full">
      <div className="lg:hidden w-full">
        <MobileNav />
      </div>
      <Header />
      <div className="flex gap-8 mt-8 justify-between xl:flex-row flex-col">
        <div className=" xl:w-fit w-full">
          <ChatBlock />
        </div>
        <div className="w-full">
          <TeamBlock />
          <MeetingsBlock />
        </div>
      </div>
    </div>
  );
}
