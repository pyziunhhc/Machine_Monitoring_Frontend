import styled from "styled-components";

export const TableWrapper = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  background-color: ${({ theme: { colors } }) => colors.lightPurple};
  thead {
    tr {
      th {
        background-color: ${({ theme: { colors } }) => colors.darkPurple};
        padding: 5px;
        border: 1px solid black;
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 5px;
        border: 1px solid black;
        vertical-align: middle;
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    }
  }
`;
