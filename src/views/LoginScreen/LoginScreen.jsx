import React from "react";
import { useForm } from "react-hook-form";
import logo from "./logo.png";
import Button from "components/atoms/Button/Button";
import FormField from "components/molecules/FormField/FormField";
import { Wrapper, Container } from "./LoginScreen.styles";
import { useAuth } from "hooks/useAuth";
export default function LoginScreen() {
  const { handleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Wrapper className="login-window__wrapper">
        <Container className="login-window__container">
          <header className="title__container">
            <div className="brand-text">
              <h1>ITA TOOLS</h1>
              <img src={logo} alt="logo" className="logo-img" />
            </div>
            <h2>Monitoring Maszyn Produkcyjnych</h2>
          </header>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="fields__container">
              <div className="inputs__container">
                <FormField
                  id="login"
                  type="text"
                  className="authorization__input"
                  name="login"
                  text="Login:"
                  {...register("login", { required: true })}
                />
                {errors.login && <span>Login jest wymagany</span>}
                <FormField
                  id="password"
                  type="password"
                  className="authorization__input"
                  name="password"
                  text="Hasło:"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>Hasło jest wymagane</span>}
              </div>
              <Button className="" type="submit">
                Zaloguj
              </Button>
            </div>
          </form>
        </Container>
      </Wrapper>
    </>
  );
}
