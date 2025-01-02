import help from "../../assets/svg/help-circle-contained.svg";
import logout from "../../assets/svg/logout.svg";

export default function ControlPanel() {
  return (
    <div className="mt-[162px]">
      <div className="flex gap-5 items-center">
        <img src={help} alt="help&info" />
        <p className="text-[#807A75] font-medium text-sm">Help & information</p>
      </div>
      <div className="flex gap-5 items-center mt-[37px]">
        <img src={logout} alt="logout" />
        <p className="text-[#807A75] font-medium text-sm">Logout</p>
      </div>
    </div>
  );
}
