const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/material");

const CenterBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default CenterBox;
