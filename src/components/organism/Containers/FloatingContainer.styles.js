import styled from "styled-components";

export const FloatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.white};
  position: ${(props) =>
    props["data-type"] === "operator" ? "fixed;" : "absolute;"}
  z-index: 2;
  top: 5%;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow.container};
top: ${(props) => (props["data-type"] === "operator" ? "0" : "")};
left: ${(props) => (props["data-type"] === "operator" ? "0;" : "")};
transform: ${(props) =>
  props["data-type"] === "operator" ? "" : "translate(-50%, -50%)"};
width: ${(props) => (props["data-type"] === "operator" ? "100%" : "auto;")};
height: ${(props) => (props["data-type"] === "operator" ? "100vh;" : "auto;")};
animation: show .3s ease-in-out;
&.foreground {
z-index: 3;
will-change: transform;
}
`;
