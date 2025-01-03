import { ButtonSocialPropsType } from "../../types/types";

export default function ButtonSocial({
  text,
  additionalStyle,
  logo,
}: ButtonSocialPropsType) {
  return (
    <button
      className={`w-full text-[#1570EF] text-base font-semibold py-4 px-[134px] flex items-center justify-center gap-2 rounded-lg bg-[#D1E9FF] hover:bg-[#b4d3f1] mt-8 text-nowrap ${additionalStyle} `}
    >
      <img src={logo} alt="logo" />
      {text}
    </button>
  );
}
