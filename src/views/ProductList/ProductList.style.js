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

export const Content = styled.div`
  top: 0;
  z-index: 999;
  margin-left: 200px;
  padding: 1px 16px;
  min-height: 80vh;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  font-family: Quicksand, arial, sans-serif;
`;
