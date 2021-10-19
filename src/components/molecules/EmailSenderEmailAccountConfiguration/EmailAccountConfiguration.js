import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Title from "components/atoms/Title/Title";
import FormField from "../FormField/FormField";
import Button from "components/atoms/Button/Button";
const ConfigurationContainer = styled.div`
  padding: 10px;
`;
const EmailAccountConfiguration = ({ handleSetEmailConfiguration }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ConfigurationContainer>
      <Title color="black">Konto email</Title>
      <form onSubmit={handleSubmit(handleSetEmailConfiguration)}>
        <FormField
          type="text"
          text="Adres email:"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Adres email jest wymagany</span>}
        <FormField
          type="password"
          text="Hasło:"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Hasło jest wymagane</span>}
        <FormField
          type="text"
          text="Host:"
          name="host"
          {...register("host", { required: true })}
        />
        {errors.host && <span>Host jest wymagany</span>}
        <FormField
          type="text"
          text="Port:"
          name="port"
          {...register("port", { required: true })}
        />
        {errors.port && <span>Port jest wymagany</span>}
        <Button className="--success" type="submit">
          Zapisz
        </Button>
      </form>
    </ConfigurationContainer>
  );
};

export default EmailAccountConfiguration;
