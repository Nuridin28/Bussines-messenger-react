import FileIcon from "../assets/icons/FileIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import ListIcon from "../assets/icons/ListIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import UserProfilesIcon from "../assets/icons/UserProfilesIcon";
import teamMock from "../assets/png/teamMock.png";

export const menuItems = [
  {
    id: 1,
    title: "Home",
    img: HomeIcon,
    nested: null,
  },
  {
    id: 2,
    title: "Projects",
    img: FileIcon,
    nested: null,
  },
  {
    id: 3,
    title: "Task",
    img: ListIcon,
    nested: null,
  },
  {
    id: 4,
    title: "Team",
    img: UserProfilesIcon,
    nested: null,
  },
  {
    id: 5,
    title: "Settings",
    img: SettingsIcon,
    nested: null,
  },
];

export const TeamMembers = [
  {
    id: 6,
    img: teamMock,
    name: "Billy Parker",
    role: "PM",
  },
  {
    id: 7,
    img: teamMock,
    name: "Nancy Salmon",
    role: "Sales Manager",
  },
  {
    id: 8,
    img: teamMock,
    name: "Stella Maxwell",
    role: "Designer",
  },
];

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
