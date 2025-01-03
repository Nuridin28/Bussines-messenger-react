import { useNavigate } from "react-router-dom";
import help from "../../assets/svg/help-circle-contained.svg";
import logout from "../../assets/svg/logout.svg";

export default function ControlPanel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <div className="md:mt-[162px] mt-24">
      <div className="flex gap-5 items-center">
        <img src={help} alt="help&info" />
        <p className="text-[#807A75] font-medium text-sm">Help & information</p>
      </div>
      <div
        className="flex gap-5 items-center mt-[37px] cursor-pointer"
        onClick={handleLogout}
      >
        <img src={logout} alt="logout" />
        <p className="text-[#807A75] font-medium text-sm">Logout</p>
      </div>
    </div>
  );
}
