import { useEffect, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import "./sign-up-form.scss";
import Button from "../button/button";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const resetForm = () => {
    setFormFields(defaultFields);
  };

  const handleSubmit = async (event) => {
    resetForm();
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Senhas não correspondem!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("e-mail já está em uso");
      } else {
        console.log("Erro ao criar usuario", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Criar um conta </h2>
      <span>Preencha as informações e crie sua conta!</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Usuario"}
          onChange={handleChange}
          type="text"
          required
          name="displayName"
          value={displayName}
        />
        <FormInput
          label={"Email"}
          onChange={handleChange}
          type="text"
          required
          name="email"
          value={email}
        />

        <FormInput
          label={"Senha"}
          onChange={handleChange}
          type="password"
          required
          name="password"
          value={password}
        />
        <FormInput
          label={"Confirmar Senha"}
          onChange={handleChange}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="default" type="submit">
          Criar conta
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
