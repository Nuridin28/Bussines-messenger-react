import { ButtonPrimaryPropsType } from "../../types/types";

export default function ButtonPrimary({
  additionalStyle,
  text,
}: ButtonPrimaryPropsType) {
  return (
    <button
      className={`w-full text-white text-center text-base font-semibold py-4 sm:px-[134px] px-7 rounded-lg bg-[#1570EF] text-nowrap mt-8 ${additionalStyle} `}
    >
      {text}
    </button>
  );
}
