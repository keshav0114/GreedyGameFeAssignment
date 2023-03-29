import React, { useState } from "react";
import Header from "../Components/Header";
import DimensionsAndMetrices from "../Components/DimensionsAndMetrices";
import Sidebar from "../Components/Sidebar";
import Table from "../Components/Table";
import "../Css/Analytics.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Analytics = () => {
  const [open, setOpen] = useState(false);
  const [column, setcolumn] = useState([
    { date: true },
    { app_id: true },
    { clicks: true },
    { requests: true },
    { responses: true },
    { impressions: true },
    { revenue: true },
    { fill_rate: true },
    { CTR: true },
  ]);
  const [dateRange, setDateRange] = useState([
    new Date("2021-05-01 01:00:00"),
    new Date("2021-05-03 14:00:00"),
  ]);
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={0.5}>
            <Sidebar />
          </Grid>
          <Grid item xs={11.5}>
            <Box sx={{ m: 3 }}>
              <Header
                setOpen={setOpen}
                open={open}
                dateRange={dateRange}
                setDateRange={setDateRange}
              />
              <DimensionsAndMetrices
                open={open}
                setOpen={setOpen}
                column={column}
                setcolumn={setcolumn}
              />
              <Table column={column} dateRange={dateRange} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Analytics;
