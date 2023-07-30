interface IFormProps {
  name: string;
  email: string;
  password: string;
}
export const validateForm = (values:IFormProps) => {
  console.log('--->>>',values);
  const errors: { [key: string]: string } = {};
  if (!values.name) {
    errors.name = "no te olvides del nombre ctmr";
  } else if (/\d/.test(values.name)) {
    errors.name = "el nombre no debe contener numeros";
  }
  if (!values.email) {
    errors.email = "no te olvides del correo electronico ctmr";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo electrónico inválido";
  }
  if (!values.password) {
    errors.password = "no te olvides de la contraseña ctmr";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password =
      "La contraseña debe contener al menos una letra mayúscula";
  } else if (!/\d/.test(values.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  }
  return errors;
};
