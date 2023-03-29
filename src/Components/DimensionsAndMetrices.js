import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import "../Css/DimensionsAndMetrices.css";

const DimensionsAndMetrices = ({ open, setOpen, setcolumn }) => {
  const [col, setcol] = useState([
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
  //save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  //const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _columnItems = [...col];

    //remove and save the dragged item content
    const draggedItemContent = _columnItems.splice(dragItem.current, 1)[0];

    //switch the position
    _columnItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setcol(_columnItems);
  };

  const handleKeys = (columnIndexNumber, keyName, keyValue) => {
    const newColumnData = { ...col[columnIndexNumber] };
    newColumnData[keyName] = !keyValue;
    const newColumns = col.map((value) =>
      Object.keys(value)[0] === keyName ? newColumnData : value
    );
    setcol(newColumns);
  };

  return (
    <>
      {open ? (
        <Box className="dm-container" sx={{ p: 2 }}>
          <Typography variant="subtitle2" mb={1} mx={1}>
            Dimensions and Metrics
          </Typography>
          <Box className="list-container">
            {col.map((item, index) => (
              <Box
                key={index}
                className="list-item"
                draggable
                onDragStart={(e) => (dragItem.current = index)}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
                sx={{ m: 1 }}
                onClick={() => {
                  handleKeys(
                    index,
                    Object.keys(item)[0],
                    Object.values(item)[0]
                  );
                }}
              >
                <span
                  className="indicator"
                  style={{
                    backgroundColor: Object.values(item)[0]
                      ? "#116FED"
                      : "#FFFFFF",
                  }}
                ></span>
                <Typography
                  variant="subtitle2"
                  ml={8}
                  style={{ textTransform: "capitalize" }}
                >
                  {Object.keys(item)[0]}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box className="dm-bottom-container" sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              sx={{ mr: 1 }}
              onClick={() => {
                setOpen(false);
              }}
            >
              close
            </Button>
            <Button variant="contained" onClick={() => setcolumn(col)}>
              apply changes
            </Button>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default DimensionsAndMetrices;
