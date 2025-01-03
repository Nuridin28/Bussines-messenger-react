import { IconPropsType } from "../../types/types";

export default function HomeIcon(props: IconPropsType) {
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
        d="M8.7999 21.6V14.2963C8.7999 13.6241 9.37298 13.0791 10.0799 13.0791H13.9199C14.6268 13.0791 15.1999 13.6241 15.1999 14.2963V21.6M11.2581 2.62525L2.93811 8.25176C2.60045 8.48011 2.3999 8.84976 2.3999 9.24379V19.7741C2.3999 20.7825 3.25952 21.6 4.3199 21.6H19.6799C20.7403 21.6 21.5999 20.7825 21.5999 19.7741V9.24379C21.5999 8.84976 21.3994 8.48011 21.0617 8.25176L12.7417 2.62525C12.2976 2.32492 11.7022 2.32492 11.2581 2.62525Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
