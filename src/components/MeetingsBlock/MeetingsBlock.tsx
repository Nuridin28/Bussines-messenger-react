import Attendees from "./Attendees";
import MeetingInfo from "./MeetingInfo";

export default function MeetingsBlock() {
  return (
    <div className="bg-white rounded-3xl p-6 text-black mt-8">
      <p className="font-medium text-sm text-[#6D7289]">MEETING</p>
      <p className="font-semibold text-[28px] text-[#132050] mt-5">
        Project onboarding
      </p>
      <p className="font-medium text-sm text-[#6D7289] mt-2">
        Add description of your meeting
      </p>
      <MeetingInfo />
      <Attendees />
    </div>
  );
}
