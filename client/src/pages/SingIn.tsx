
import { useState } from "react";
import FormSingIn from "../auth/FormSingIn";
import FormSingUp from "../auth/FormSingup";

const SingIn = () => {
  const [value, setValue] = useState<boolean>(true);
  const [text, setText] = useState<string>("crear cuenta");
  const handleToggle = (e:any) => {
    setValue(!value);
    if (e.target.name === "login") {
      setText("Bienvenido, para empezar inicia sesión");
    } else{
      setText('Bienvenido, para empezar crea una cuenta ')
    }
      
  };
  
  return (
    <section className="w-full h-screen bg-countries bg-[length:100%_100%] bg-no-repeat flex justify-center items-center">
      <div className="w-[70%] h-[85%]  rounded-xl bg-slate-700/50 text-white">
        <div className="w-full flex justify-end">
          <div className="inline-flex items-center rounded-lg bg-slate-700/50 gap-1 ">
            <button
              className={`rounded-lg flex items-center py-2 ${
                value ? "bg-slate-800 shadow-xl text-[#cceeff] " : ""
              } transition-all duration-500 ease-in-out font-semibold text-white px-2`}
             name='singup'
              onClick={handleToggle}
            >
              crear cuenta
            </button>
            <button
              className={`rounded-lg flex items-center py-2 ${
                !value ? "bg-slate-800 shadow-xl  text-[#cceeff]" : ""
              } transition-all duration-500 ease-in-out font-semibold text-white px-2`}
             name='login'
              onClick={handleToggle}
            >
              iniciar sesión
            </button>
          </div>
        </div>
        <div className="flex w-full  h-full ">
          <div className=" relative w-full h-auto flex items-center">
            <div className= {` top-0 absolute transition-all duration-1000 transform ${
                value ? "" : "opacity-0 scale-0"
              }`}>
              <FormSingUp />
              
            </div>
            <div className={`w-full absolute transition-all duration-1000 transform ${
                value ? "opacity-0 scale-0" : ""
              }`}>
              <FormSingIn />
              
            </div>
          
          </div>

          <div className="w-[100%] h-[calc(100%-4.5em)] flex justify-center items-center">
            <h2 className="text-center font-bold text-4xl">
              {/* Bienvenido, para empezar crea una cuenta */}{text}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingIn;
