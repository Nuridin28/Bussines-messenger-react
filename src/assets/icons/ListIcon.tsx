import { IconPropsType } from "../../types/types";

export default function ListIcon(props: IconPropsType) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ` + props.additionalStyle}
    >
      <path
        d="M8.7201 6H21.6001M8.7201 12.48H21.6001M8.7201 18.96H21.6001M3.6001 6V6.0128M3.6001 12.48V12.4928M3.6001 18.96V18.9728"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
