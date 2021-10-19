import React from "react";
import Button from "components/atoms/Button/Button";
import FloatingContainer from "components/organism/Containers/FloatingContainer";
import FormField from "components/molecules/FormField/FormField";
import { StyledForm } from "./Register.styles";
import { useFetch } from "hooks/useFetch";
import { useError } from "hooks/useError";
import { useForm } from "react-hook-form";
const initialUserData = {
  login: "",
  password: "",
  rePassword: "",
  name: "",
  surname: "",
  email: "",
  role: "administrator",
};
export default function Register({ update, removeWindow }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { dispatchError } = useError();
  const { doFetch } = useFetch();

  const registerUser = async (userData) => {
    const url = "/users/register",
      method = "POST",
      body = userData;
    const result = await doFetch(url, method, body);
    if (result.success) {
      update();
    } else {
      dispatchError(result.message);
    }
  };
  return (
    <>
      <FloatingContainer
        className="register__container"
        beltText="Rejestracja"
        removeWindow={removeWindow}>
        <StyledForm
          className="inputs__container"
          onSubmit={handleSubmit(registerUser)}>
          <FormField
            text="Login"
            name="login"
            type="text"
            {...register("login", { required: true })}>
            {" "}
            {errors.login && (
              <span className="error">Pole nie może być puste</span>
            )}
          </FormField>

          <FormField
            text="Hasło"
            name="password"
            type="password"
            {...register("password", { required: true })}>
            {" "}
            {errors.password && (
              <span className="error">Pole nie może być puste</span>
            )}
          </FormField>

          <FormField
            text="Powtórz hasło"
            name="rePassword"
            type="password"
            {...register("rePassword", { required: true })}>
            {" "}
            {errors.rePassword && (
              <span className="error">Pole nie może być puste</span>
            )}
          </FormField>

          <FormField
            text="Imię"
            name="name"
            type="text"
            {...register("name", { required: true })}>
            {errors.name && (
              <span className="error">Pole nie może być puste</span>
            )}
          </FormField>
          <FormField
            text="Nazwisko"
            name="surname"
            type="text"
            {...register("surname", { required: true })}>
            {" "}
            {errors.surname && (
              <span className="error">Pole nie może być puste</span>
            )}
          </FormField>

          <FormField
            text="Email"
            name="email"
            type="text"
            {...register("email", { required: true })}>
            {errors.email && (
              <span className="error">Pole nie może być puste</span>
            )}
          </FormField>

          <label htmlFor="role">
            Rola
            <select name="role" {...register("role")}>
              <option value="administrator">Administrator</option>
              <option value="analitician">Analityk</option>
              <option value="operator">Operator</option>
            </select>
          </label>
          <Button className="button --success" type="submit">
            Dodaj
          </Button>
        </StyledForm>
      </FloatingContainer>
    </>
  );
}
