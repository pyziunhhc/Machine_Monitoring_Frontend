import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: no-wrap;
  padding: 10px;
  animation: show 1.5s ease;

    .machine-type__container {
    display: flex;
    flex-direction: column;
    align-items: center;

  .machine-type__container > h1 {
    font-weight: bold;
    font-size: 2em;
    color: white;
  }

  @media screen and (max-width: 500px) {
    .machines__container {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
  @media screen and (min-width: 501px) and (max-width: 900px) {
  }
`;
