import { useState } from "react";
import { validateForm } from "../../helpers/validate";
interface Form {
  name: string;
  email: string;
  password: string;
}
const useForm = (data: Form, API: string) => {
  const [form, setForm] = useState<Form>(data);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const error = validateForm({ ...form, [name]: value });
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: error[name],
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {console.error(err)})
  };
  return { form, handleInputChange, handleSubmit, errors };
};
export default useForm;
