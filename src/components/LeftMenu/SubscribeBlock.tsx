type Props = {};

export default function SubscribeBlock({}: Props) {
  return (
    <div className=" bg-white rounded-3xl text-center mt-40 py-5 px-4">
      <p className="text-[#132050] text-2xl font-medium text-center">
        Upgrade to Pro
      </p>
      <p className="text-[#7B6C8D] text-base font-medium mt-4">
        Get 1 month free and unlock all pro features
      </p>
      <button className="bg-[#B5D9F6] text-black rounded-3xl xl:px-20 py-4 mt-8 px-5">
        Upgrade
      </button>
    </div>
  );
}
