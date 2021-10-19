import styled from "styled-components";

export const StatisticsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div {
    h1 {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;
