import { IconPropsType } from "../../types/types";

export default function FileIcon(props: IconPropsType) {
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
        d="M13.1998 2.4V7.2C13.1998 7.86274 13.7371 8.4 14.3998 8.4H19.1998M13.4057 2.4H7.1998C5.87432 2.4 4.7998 3.47452 4.7998 4.8V19.2C4.7998 20.5255 5.87432 21.6 7.19981 21.6H16.7998C18.1253 21.6 19.1998 20.5255 19.1998 19.2V8.19411C19.1998 7.55759 18.9469 6.94715 18.4969 6.49706L15.1027 3.10295C14.6527 2.65286 14.0422 2.4 13.4057 2.4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
