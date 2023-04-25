import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  Select,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box
        height="65vh"
        width={`calc(100vw - ${isNonMobile ? "350px" : "50px"})`}
      >
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
