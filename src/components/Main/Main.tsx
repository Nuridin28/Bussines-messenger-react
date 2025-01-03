import ChatBlock from "../ChatBlock/ChatBlock";
import Header from "../Header/Header";
import MeetingsBlock from "../MeetingsBlock/MeetingsBlock";
import TeamBlock from "../TeamBlock/TeamBlock";

export default function Main() {
  return (
    <div className="px-10 pb-[47px] w-full">
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
