const { default: styled } = require("@emotion/styled");

const ContentContainer = styled.div`
  display: block;
  margin: 0 auto;
  padding: 1em;
  width: 85vw;
  &::after {
    content: "";
    clear: both;
    display: block;
  }
`;

export default ContentContainer;
