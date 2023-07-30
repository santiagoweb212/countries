import ButtonForm from "./components/Button";
import ButtonGoogle from "./components/ButtonGoogle";
import Input from "./components/Input";
import InputCheckBok from "./components/InputCheckBox";
import LineDivider from "./components/LineDivider";
import useForm from "./hooks/useForm";

const FormSingUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const { form, handleInputChange, handleSubmit, errors } = useForm(
    initialValues,
    "http://localhost:3000/register"
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full  flex px-3 py-3 flex-col gap-2"
    >
      <h2 className=" text-2xl font-bold text-white">Crear una cuenta</h2>
      <p className=" text-gray-400 dark:text-gray-300">
        {" "}
        ya tienen una cuenta? inicie sesion aqui
      </p>
      <Input
        label="Su correo electronico"
        name="email"
        value={form.email}
        onChange={handleInputChange}
        errors={errors}
      />

      <Input
        label="Su nombre"
        name="name"
        value={form.name}
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
      <LineDivider />
      <ButtonGoogle />
      <InputCheckBok texto="acepto los" textLink="terminos y condiciones" link={true}/>
      <ButtonForm type="submit" text="crear una cuenta" />
    </form>
  );
};

export default FormSingUp;
