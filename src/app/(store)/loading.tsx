import { BarLoader } from "react-spinners";
function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BarLoader color="#0083ff" />
    </div>
  );
}

export default Loading;
