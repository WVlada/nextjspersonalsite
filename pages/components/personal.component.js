import Image from "next/image";
export default function Personal() {
  return (
    <div id="anchor-personal" className="w-full font-rubik">
      <div className="m-8 border-2 border-[#e1ca7f] border-[#274162]">
        <p className="text-center p-2 md:p-4 font-rubik text-md md:text-2xl ">Personal</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image src="/images/profile.png" width={107 * 2} height={124 * 2} />
        </div>
      </div>
    </div>
  );
}
