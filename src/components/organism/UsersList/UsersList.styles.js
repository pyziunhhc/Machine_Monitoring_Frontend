import styled from "styled-components";

export const UsersListWrapper = styled.div`
  width: 100%;
  padding: 10px;
  color: ${({ theme, ...props }) => theme.colors[props.color]};
  section {
    margin: 10px 0px;
  }
`;
