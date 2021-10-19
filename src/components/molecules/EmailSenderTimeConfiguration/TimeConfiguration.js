import Button from "components/atoms/Button/Button";
import Title from "components/atoms/Title/Title";
import React from "react";
import FormField from "../FormField/FormField";
import styled from "styled-components";
const ConfigurationContainer = styled.div`
  padding: 10px;
`;
const TimeConfiguration = ({
  dailyTime,
  monthlyTime,
  setSenderTime,
  saveSenderTime,
}) => {
  return (
    <ConfigurationContainer>
      <Title color="white">Czas wysyłki</Title>
      <FormField
        type="time"
        text="Dzienny:"
        name="daily"
        value={dailyTime}
        onChange={setSenderTime}
      />
      <FormField
        type="time"
        text="Miesięczny:"
        name="monthly"
        value={monthlyTime}
        onChange={setSenderTime}
      />
      <Button className="--success" onClick={saveSenderTime}>
        Zapisz
      </Button>
    </ConfigurationContainer>
  );
};

export default TimeConfiguration;
