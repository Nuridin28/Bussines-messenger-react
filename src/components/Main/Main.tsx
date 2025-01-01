import ChatBlock from "../ChatBlock/ChatBlock";
import Header from "../Header/Header";
import TeamBlock from "../TeamBlock/TeamBlock";

export default function Main() {
  return (
    <div className="px-10 w-full">
      <Header />
      <div className="flex gap-8 mt-8 ">
        <div className="w-[42%]">
          <ChatBlock />
        </div>
        <div className="w-[58%]">
          <TeamBlock />
        </div>
      </div>
    </div>
  );
}
