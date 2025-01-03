import { ButtonPrimaryPropsType } from "../../types/types";

export default function ButtonPrimary({
  additionalStyle,
  text,
}: ButtonPrimaryPropsType) {
  return (
    <button
      className={`w-full text-white text-base font-semibold py-4 px-[134px] rounded-lg bg-[#1570EF] mt-8 ${additionalStyle} `}
    >
      {text}
    </button>
  );
}
