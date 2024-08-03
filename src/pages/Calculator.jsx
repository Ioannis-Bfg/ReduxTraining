import Display from "../components/display";
import Numpad from "../components/keyboard";

export default function Calculator() {
  return (
    <>
      <div
        id="wrapper"
        className="flex py-4 justify-center h-screen items-center"
      >
        <div className="bg-[#181313] p-8  flex flex-col gap-8 text-sky-500  min-w-[30rem] max-w-[30rem] aspect-[9/16] rounded-md">
          <Display />
          <Numpad />
        </div>
      </div>
    </>
  );
}
