import googleLogo from "../../assets/google.svg";
const ButtonGoogle = () => {
  return (
    <div>
      <button className=" flex bg-gray-800 border border-gray-300 gap-1 py-2.5 items-center justify-center w-full  px-4 font-medium text-white transition-colors duration-200 transform rounded-lg hover:bg-gray-700 focus:outline-none">
        <img src={googleLogo} className="w-6 h-6" alt="" /> <span>Registrate con google</span>
      </button>
    </div>
  );
};

export default ButtonGoogle;
