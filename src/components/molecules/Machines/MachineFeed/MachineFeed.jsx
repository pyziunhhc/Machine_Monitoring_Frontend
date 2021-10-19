import React, { useState, useEffect } from "react";
import MachineCard from "../MachineCard/MachineCard";
import styled from "styled-components";
import Title from "components/atoms/Title/Title";
import { useFetch } from "hooks/useFetch";
const DashboardElementWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .machines__container {
    display: flex;
    flex-wrap: wrap;
    .machine-card {
      .status__container {
        img {
        }
      }
    }
  }
`;
export default function MachineFeed() {
  const [feedValues, setFeedValues] = useState([]);
  const { doFetch } = useFetch();
  const getFeed = async () => {
    const url = "/machines/feed",
      method = "GET",
      result = await doFetch(url, method);
    if (result) {
      return result.feedValues;
    }
  };
  useEffect(() => {
    (async () => {
      setFeedValues(await getFeed());
    })();
    return () => {
      setFeedValues([]);
    };
  }, []);
  useEffect(() => {
    const id = setInterval(getFeed, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <DashboardElementWrapper className="machine-feed__container">
      <Title color="white">Prędkość maszyn</Title>
      <div className="machines__container">
        {feedValues && feedValues.length > 0
          ? feedValues.map(({ machineName, feedValue }) => {
              return (
                <MachineCard
                  machineName={machineName}
                  feed={feedValue}
                  showStatus={true}
                />
              );
            })
          : null}
      </div>
    </DashboardElementWrapper>
  );
}
