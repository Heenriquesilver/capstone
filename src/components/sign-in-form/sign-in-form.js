import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  sigInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import "./sign-in-form.scss";
import Button from "../button/button";

import { UserContext } from "../../contexts/user.context";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const resetForm = () => {
    setFormFields(defaultFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await sigInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetForm();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("login ou senha incorreta");
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Já possui uma conta ? </h2>
      <span>Login com email e senha</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          onChange={handleChange}
          type="email"
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
        <div className="buttons-container">
          <Button type="submit">Entrar</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Login Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
