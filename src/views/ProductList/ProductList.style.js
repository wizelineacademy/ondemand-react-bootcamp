import styled from "styled-components";

export const Sidebar = styled.div`
  top: 1;
  z-index: 999;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
`;

export const Option = styled.a`
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  &.active {
    background-color: #04aa6d;
    color: white;
  }
  &:hover:not(.active) {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    transform: translateY(-0.5rem) scale(1.02);
    color: white;
  }
`;

export const Content = styled.div`
  top: 0;
  z-index: 999;
  margin-left: 200px;
  padding: 1px 16px;
`;
