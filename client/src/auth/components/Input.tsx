import ErroroMessage from "./ErrorMessage";

interface InputProps {
  label?: string;
  name: string;
  value?: string;
  errors:{[key:string]:string};
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ label, name, value, onChange,errors }: InputProps) => {
  return (
    <div>
      <label htmlFor="" className="text-slate-50 font-[600]">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="border-2 outline-none border-gray-300 rounded-md px-4 py-2 text-slate-700 font-[600] w-full"
      />
      {errors[name] && <ErroroMessage text={errors[name]}/>}
    </div>
  );
};

export default Input;
