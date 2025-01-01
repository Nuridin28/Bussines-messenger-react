import UserCard from "../UserCard/UserCard";
import Chat from "./Chat/Chat";

export default function ChatBlock() {
  return (
    <div className="bg-white rounded-3xl p-5">
      <UserCard />
      <Chat />
    </div>
  );
}
