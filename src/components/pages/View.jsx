import { columnDefs } from '../utils/columnDefs';
import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  CircularProgress,
  Box,
  IconButton,
  Typography,
  TextField,
  Button
} from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Download, Refresh } from "@mui/icons-material";
import axios from 'axios';


const View = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const gridApiRef = useRef(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://192.168.4.97:5001/api/data');
      const data = response.data;

      // Check and transform data if necessary
      const formattedData = Array.isArray(data) ? data : Object.values(data).flat();
      
      setRowData(formattedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onGridReady = (params) => {
    gridApiRef.current = params.api;
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    gridApiRef.current?.setQuickFilter(event.target.value);
  };

  const handleExport = () => {
    gridApiRef.current?.exportDataAsCsv();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Employee Data</Typography>
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            label="Search"
            value={searchText}
            onChange={handleSearch}
            size="small"
            margin="dense"
            style={{ marginRight: "16px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleExport}
          >
            Export CSV <Download />
          </Button>
          <IconButton color="primary" onClick={loadData}>
            <Refresh titleAccess="Refresh" />
          </IconButton>
        </Box>
      </Box>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <Typography color="error">Error: {error}</Typography>
        </Box>
      ) : (
        <div
          className="ag-theme-alpine"
          style={{ height: "80vh", width: "100%" }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true, // Allow column resizing
            }}
            onGridReady={onGridReady}
            pagination={true} // Enable pagination
            paginationPageSize={10} // Number of rows per page
            // domLayout='autoHeight'
          />
        </div>
      )}
    </div>
  );
};

export default View;
