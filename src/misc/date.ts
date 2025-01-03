import { months } from "./constants";

export default function updateDate() {
  const today = new Date();
  const day = today.getDate();
  const month = months[today.getMonth()];
  return `${day < 10 ? "0" + day : day} ${month}`;
}
