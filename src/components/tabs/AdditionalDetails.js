import React, { useState, useEffect } from "react";
import {
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { submitForm } from "../utils/formFunction";
import { getPanCardNoFromLocalStorage } from "../utils/localStorage"


const CombinedForm = () => {
  const [formData, setFormData] = useState({
    panCardNo: "",
    physicalDisabilities: false,
    maritalIneptness: false,
    courtProc: false,
    interviewDetails: {
      date: "",
      position: "",
      location: "",
      outcome: "",
    },
    employmentDetails: {
      datefrom: "",
      dateto: "",
      designation: "",
      lastSalary: "",
    },
    languages: "",
    twoWheeler: false,
    fourWheeler: false,
    drivingLicenseNoTwoWheeler: "",
    drivingLicenseNoFourWheeler: "",
    relatedEmployeeName: "",
    memberOfAnyProfessional: "",
    needAnySpecificTraning: "",
    anyInformation: "",
  });



    
  useEffect(() => {
    const panCardNo = getPanCardNoFromLocalStorage();
    setFormData((prevData) => ({
      ...prevData,
      panCardNo: panCardNo || "",
    }));
  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date ? dayjs(date).format("YYYY-MM-DD") : "",
    }));
  };

  const handleNestedChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await submitForm({ additionalDetails: formData });
      console.log("Form submitted successfully:", result);
      // Handle success (e.g., show a success message or redirect)
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
              value={formData.panCardNo}
              onChange={handleChange}
              name="panCardNo"
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.physicalDisabilities}
                  onChange={handleChange}
                  name="physicalDisabilities"
                />
              }
              label="Physical disabilities"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.maritalIneptness}
                  onChange={handleChange}
                  name="maritalIneptness"
                />
              }
              label="Marital ineptness"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.courtProc}
                  onChange={handleChange}
                  name="courtProc"
                />
              }
              label="Been involved in Court Proceedings. (Give details on a separate sheet of paper if answer is yes)"
            />
          </Grid>
        </Grid>
        <Typography variant="h6" style={{ margin: 6, fontSize: "15px" }}>
          Have you ever been interviewed before in an organization? If yes, Give
          Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date"
                label="Date"
                value={
                  formData.interviewDetails.date
                    ? dayjs(formData.interviewDetails.date)
                    : null
                }
                onChange={(date) =>
                  handleDateChange("interviewDetails.date", date)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                  />
                )}
                size="small"
                fullWidth
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="position"
              label="Position"
              value={formData.interviewDetails.position}
              onChange={(e) => handleNestedChange(e, "interviewDetails")}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="location"
              label="Location"
              value={formData.interviewDetails.location}
              onChange={(e) => handleNestedChange(e, "interviewDetails")}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="outcome"
              label="Outcome"
              value={formData.interviewDetails.outcome}
              onChange={(e) => handleNestedChange(e, "interviewDetails")}
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>
        <Typography variant="h6" style={{ margin: 6, fontSize: "15px" }}>
          Have you served your services early in this organization? If yes, Give
          Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="datefrom"
                label="Date From"
                value={
                  formData.employmentDetails.datefrom
                    ? dayjs(formData.employmentDetails.datefrom)
                    : null
                }
                onChange={(date) =>
                  handleDateChange("employmentDetails.datefrom", date)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                  />
                )}
                size="small"
                fullWidth
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="dateto"
                label="Date To"
                value={
                  formData.employmentDetails.dateto
                    ? dayjs(formData.employmentDetails.dateto)
                    : null
                }
                onChange={(date) =>
                  handleDateChange("employmentDetails.dateto", date)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                  />
                )}
                size="small"
                fullWidth
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="designation"
              label="Designation"
              value={formData.employmentDetails.designation}
              onChange={(e) => handleNestedChange(e, "employmentDetails")}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="lastSalary"
              label="Last Salary"
              value={formData.employmentDetails.lastSalary}
              onChange={(e) => handleNestedChange(e, "employmentDetails")}
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Known Languages"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              size="small"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          style={{ fontSize: "16px", marginTop: "20px" }}
          gutterBottom
        >
          Have you Driving Skilled, If yes, please fill in the following
          details:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.twoWheeler}
                  onChange={handleChange}
                  name="twoWheeler"
                />
              }
              label="Two Wheeler"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.fourWheeler}
                  onChange={handleChange}
                  name="fourWheeler"
                />
              }
              label="Four Wheeler"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="drivingLicenseNoTwoWheeler"
              label="Driving License No (Two Wheeler)"
              value={formData.drivingLicenseNoTwoWheeler}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="drivingLicenseNoFourWheeler"
              label="Driving License No (Four Wheeler)"
              value={formData.drivingLicenseNoFourWheeler}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>
        <Typography variant="h6" style={{ margin: 6, fontSize: "15px" }}>
          Are you Related to any Employee of the organization? If yes, Give
          Details
        </Typography>
        <TextField
          name="relatedEmployeeName"
          label="Name of the Related Employee"
          value={formData.relatedEmployeeName}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
        />
        <Typography variant="h6" style={{ margin: 6, fontSize: "15px" }}>
          Member of any professional organizations or societies? If yes, Give
          Details
        </Typography>
        <TextField
          name="memberOfAnyProfessional"
          label="Membership Details"
          value={formData.memberOfAnyProfessional}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
        />
        <Typography variant="h6" style={{ margin: 6, fontSize: "15px" }}>
          Need any specific training or development? If yes, Give Details
        </Typography>
        <TextField
          name="needAnySpecificTraning"
          label="Specific Training Details"
          value={formData.needAnySpecificTraning}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
        />
        <Typography variant="h6" style={{ margin: 6, fontSize: "15px" }}>
          Any other information you wish to provide?
        </Typography>
        <TextField
          name="anyInformation"
          label="Additional Information"
          value={formData.anyInformation}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CombinedForm;
