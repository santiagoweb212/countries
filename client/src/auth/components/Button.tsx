interface ButtonProps {
  name?: string;
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick?: () => void;
}
const ButtonForm = ({ name, type, text, onClick }: ButtonProps) => {
  return (
    <div className="bg-blue-600 py-2.5 rounded-lg">
      <button
        className="cursor-pointer text-white w-full rounded-lg font-semibold text-lg"
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonForm;
