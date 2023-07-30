import ButtonForm from "./components/Button";
import ButtonGoogle from "./components/ButtonGoogle";
import ErroroMessage from "./components/ErrorMessage";
import Input from "./components/Input";
import InputCheckBok from "./components/InputCheckBox";
import LineDivider from "./components/LineDivider";
import useForm from "./hooks/useForm";

const FormSingIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const { form, handleInputChange,errors,handleSubmit } = useForm(initialValues,"http://localhost:3000/login");
  return (
    <form onSubmit={handleSubmit}  className="w-full  flex px-3 py-3 flex-col gap-2 ">
      <h2 className=" text-2xl font-bold text-white">Iniciar session</h2>
      <ButtonGoogle/>
      <LineDivider/>
      <Input
        label="Su correo electronico"
        name="email"
        value={form.email}
        onChange={handleInputChange}
        errors={errors}
      />
     
      <Input
        label="Su contraseña"
        name="password"
        value={form.password}
        onChange={handleInputChange}
        errors={errors}
      />
      <InputCheckBok  texto="recuerdame" link={false}/>
      <ButtonForm text="Iniciar session" type="submit"/>
    </form>
  );
};

export default FormSingIn;