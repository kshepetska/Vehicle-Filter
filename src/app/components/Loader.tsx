import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <Rings
        color="#F7931A"
        height={50}
        width={50}
      />
    </div>
  );
};

export default Loader;
