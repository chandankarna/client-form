import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { submitForm } from "../utils/formFunction";
import { getPanCardNoFromLocalStorage } from "../utils/localStorage"
import { Add, Remove } from "@mui/icons-material";

const EmploymentDetailsTab = () => {
  const [employmentDetails, setEmploymentDetails] = useState([
    {
      panCardNo: "",
      Nature: "",
      SelfEmployeed: "",
      CurrentDesignation: "",
      Project: "",
      OrganizationName: "",
      OrganizationAddress: "",
      EmployeeCode: "",
      Salary: "",
      KeyResponsibilities: "",
      Grade: "",
      TenureFromDate: null,
      TenureToDate: null,
      ReasonForLeaving: "",
      HRName: "",
      HRDesignation: "",
      CompanyNumber: "",
      HRMobile: "",
      SupervisorName: "",
      SupervisorDesignation: "",
      SupervisorMobile: "",
      SupervisorBTR: "",
    },
  ]);

  useEffect(() => {
    const panCardNo = getPanCardNoFromLocalStorage();
    setEmploymentDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[0].panCardNo = panCardNo || "";
      return newDetails;
    });
  }, []);
  

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setEmploymentDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[index][name] = value;
      return newDetails;
    });
  };

  const handleDateChange = (index, date, name) => {
    setEmploymentDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[index][name] = dayjs(date).isValid()
        ? dayjs(date).toDate()
        : null;
      return newDetails;
    });
  };

  const handleAddEmployment = () => {
    setEmploymentDetails((prevDetails) => [
      ...prevDetails,
      {
        panCardNo: "",
        Nature: "",
        SelfEmployeed: "",
        CurrentDesignation: "",
        Project: "",
        OrganizationName: "",
        OrganizationAddress: "",
        EmployeeCode: "",
        Salary: "",
        KeyResponsibilities: "",
        Grade: "",
        TenureFromDate: null,
        TenureToDate: null,
        ReasonForLeaving: "",
        HRName: "",
        HRDesignation: "",
        CompanyNumber: "",
        HRMobile: "",
        SupervisorName: "",
        SupervisorDesignation: "",
        SupervisorMobile: "",
        SupervisorBTR: "",
      },
    ]);
  };

  const handleRemoveEmployment = (index) => {
    setEmploymentDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails.splice(index, 1);
      return newDetails;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formatDate = (date) =>
      date ? dayjs(date).format("YYYY-MM-DD") : null;

    const formattedEmploymentDetails = employmentDetails.map((detail) => ({
      ...detail,
      TenureFromDate: formatDate(detail.TenureFromDate),
      TenureToDate: formatDate(detail.TenureToDate),
    }));

    try {
      console.log("Submitting data:", {
        employmentDetails: formattedEmploymentDetails,
      });

      const result = await submitForm({
        employmentDetails: formattedEmploymentDetails,
      });
      alert(result.message || "Form submitted successfully!");
      console.log("Form submitted successfully:", result);

    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred";
      console.error("Form submission error:", errorMessage);
      alert(`Error submitting form: ${errorMessage}`);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={2} xs={12}>
            <TextField
              id="panCardNo"
              label="PAN"
              variant="filled"
              size="small"
              value={employmentDetails[0].panCardNo}
              onChange={(e) => handleChange(0, e)}
              name="panCardNo"
              required
            />
          </Grid>
        </Grid>
        {employmentDetails.map((formData, index) => (
          <div key={index} className="customizableFormDat">
            <Typography
              className="title-text"
              style={{ fontSize: "15px", marginBottom: "8px" }}
              variant="h6"
              sx={{ marginTop: 2 }}
            >
              Previous Employment Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Nature of Employment</InputLabel>
                  <Select
                    name="Nature"
                    value={formData.Nature}
                    onChange={(e) => handleChange(index, e)}
                    label="Nature of Employment"
                  >
                    <MenuItem value="permanent">Permanent</MenuItem>
                    <MenuItem value="temporary">Temporary</MenuItem>
                    <MenuItem value="agency">Agency</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Self Employed</InputLabel>
                  <Select
                    name="SelfEmployeed"
                    value={formData.SelfEmployeed}
                    onChange={(e) => handleChange(index, e)}
                    label="Self Employed"
                  >
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {[
                {
                  id: "CurrentDesignation",
                  label: "Current Designation",
                  value: formData.CurrentDesignation,
                },
                {
                  id: "Project",
                  label: "Dept./Project",
                  value: formData.Project,
                },
                {
                  id: "OrganizationName",
                  label: "Organization Name",
                  value: formData.OrganizationName,
                },
                {
                  id: "OrganizationAddress",
                  label: "Organization Address",
                  value: formData.OrganizationAddress,
                },
                {
                  id: "EmployeeCode",
                  label: "Employee Code",
                  value: formData.EmployeeCode,
                },
                {
                  id: "Salary",
                  label: "Salary (Per Annum)",
                  value: formData.Salary,
                },
                {
                  id: "KeyResponsibilities",
                  label: "Key Responsibilities",
                  value: formData.KeyResponsibilities,
                },
                { id: "Grade", label: "Grade/Level", value: formData.Grade },
              ].map(({ id, label, value }) => (
                <Grid item xs={12} sm={3} key={id}>
                  <TextField
                    id={id}
                    label={label}
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                    name={id}
                    fullWidth
                    size="small"
                  />
                </Grid>
              ))}
            </Grid>

            <Typography
              className="title-text"
              style={{ fontSize: "15px", marginBottom: "8px" }}
              variant="h6"
              sx={{ marginTop: 2 }}
            >
              Employment Tenure
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="From Date"
                    value={
                      formData.TenureFromDate
                        ? dayjs(formData.TenureFromDate)
                        : null
                    }
                    onChange={(date) =>
                      handleDateChange(index, date, "TenureFromDate")
                    }
                    renderInput={(params) => (
                      <TextField {...params} fullWidth size="small" />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="To Date"
                    value={
                      formData.TenureToDate
                        ? dayjs(formData.TenureToDate)
                        : null
                    }
                    onChange={(date) =>
                      handleDateChange(index, date, "TenureToDate")
                    }
                    renderInput={(params) => (
                      <TextField {...params} fullWidth size="small" />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Reason for Leaving"
                  value={formData.ReasonForLeaving}
                  onChange={(e) => handleChange(index, e)}
                  name="ReasonForLeaving"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>

            <Typography
              className="title-text"
              style={{ fontSize: "15px", marginBottom: "8px" }}
              variant="h6"
              sx={{ marginTop: 2 }}
            >
              HR Manager Details
            </Typography>
            <Grid container spacing={2}>
              {[
                { id: "HRName", label: "Name", value: formData.HRName },
                {
                  id: "HRDesignation",
                  label: "Designation",
                  value: formData.HRDesignation,
                },
                {
                  id: "CompanyNumber",
                  label: "Company Landline No.",
                  value: formData.CompanyNumber,
                },
                {
                  id: "HRMobile",
                  label: "HR's Mobile No.",
                  value: formData.HRMobile,
                },
              ].map(({ id, label, value }) => (
                <Grid item xs={12} sm={3} key={id}>
                  <TextField
                    id={id}
                    label={label}
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                    name={id}
                    fullWidth
                    size="small"
                  />
                </Grid>
              ))}
            </Grid>

            <Typography
              className="title-text"
              style={{ fontSize: "15px", marginBottom: "8px" }}
              variant="h6"
              sx={{ marginTop: 2 }}
            >
              Supervisor Details
            </Typography>
            <Grid container spacing={2}>
              {[
                {
                  id: "SupervisorName",
                  label: "Name",
                  value: formData.SupervisorName,
                },
                {
                  id: "SupervisorDesignation",
                  label: "Designation",
                  value: formData.SupervisorDesignation,
                },
                {
                  id: "SupervisorMobile",
                  label: "Mobile No.",
                  value: formData.SupervisorMobile,
                },
                {
                  id: "SupervisorBTR",
                  label: "Best Time to Reach",
                  value: formData.SupervisorBTR,
                },
              ].map(({ id, label, value }) => (
                <Grid item xs={12} sm={3} key={id}>
                  <TextField
                    id={id}
                    label={label}
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                    name={id}
                    fullWidth
                    size="small"
                  />
                </Grid>
              ))}
            </Grid>

            {/* Add and Remove buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <IconButton color="primary" onClick={handleAddEmployment}>
                <Add />
              </IconButton>
              {employmentDetails.length > 1 && (
                <IconButton
                  color="secondary"
                  onClick={() => handleRemoveEmployment(index)}
                >
                  <Remove />
                </IconButton>
              )}
            </Box>
          </div>
        ))}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Save & Continue
        </Button>
      </form>
    </Box>
  );
};

export default EmploymentDetailsTab;
