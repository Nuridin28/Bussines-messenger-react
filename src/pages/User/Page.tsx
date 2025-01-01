import LeftSideMenu from "../../components/LeftMenu/LeftSideMenu";
import Main from "../../components/Main/Main";

export default function Page() {
  return (
    <div className="flex flex-row min-h-screen bg-[#CCCCCC] text-white overflow-hidden">
      <LeftSideMenu />
      <Main />
    </div>
  );
}
