import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import BreakdownChart from "components/BreakdownChart";

const Breakdown = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box
        m="0 auto"
        mt="20px"
        height="70vh"
        width={`calc(100vw - ${isNonMobile ? "350px" : "50px"})`}
      >
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
