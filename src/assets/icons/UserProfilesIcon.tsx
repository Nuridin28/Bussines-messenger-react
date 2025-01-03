import { IconPropsType } from "../../types/types";

export default function UserProfilesIcon(props: IconPropsType) {
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
        d="M16.0253 20.5707L16.0256 17.357C16.0258 15.5818 14.5867 14.1426 12.8115 14.1426H5.61432C3.83939 14.1426 2.40046 15.5814 2.40026 17.3563L2.3999 20.5707M21.5996 20.5709L21.5999 17.3571C21.6001 15.5819 20.161 14.1428 18.3858 14.1428M15.4062 4.0605C16.1955 4.64614 16.7071 5.58499 16.7071 6.64332C16.7071 7.70165 16.1955 8.64051 15.4062 9.22615M12.4937 6.64315C12.4937 8.41822 11.0547 9.8572 9.27964 9.8572C7.50457 9.8572 6.06559 8.41822 6.06559 6.64315C6.06559 4.86807 7.50457 3.42909 9.27964 3.42909C11.0547 3.42909 12.4937 4.86807 12.4937 6.64315Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
