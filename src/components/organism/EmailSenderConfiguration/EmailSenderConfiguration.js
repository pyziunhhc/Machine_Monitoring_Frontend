import React from "react";
import { useSenders } from "hooks/useSenders";
import styled from "styled-components";
import EmailAccountConfiguration from "components/molecules/EmailSenderEmailAccountConfiguration/EmailAccountConfiguration";
import TimeConfiguration from "components/molecules/EmailSenderTimeConfiguration/TimeConfiguration";
const ConfigurationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const SenderConfiguration = () => {
  const {
    dailyTime,
    monthlyTime,
    setSenderTime,
    saveSenderTime,
    handleSetEmailConfiguration,
  } = useSenders();
  return (
    <ConfigurationWrapper>
      <TimeConfiguration
        dailyTime={dailyTime}
        monthlyTime={monthlyTime}
        setSenderTime={setSenderTime}
        saveSenderTime={saveSenderTime}
      />
      <EmailAccountConfiguration
        handleSetEmailConfiguration={handleSetEmailConfiguration}
      />
    </ConfigurationWrapper>
  );
};

export default SenderConfiguration;
