import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Button,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { submitForm } from "../utils/formFunction";
import { getPanCardNoFromLocalStorage } from "../utils/localStorage"


const EducationDetailsTab = () => {
  const [panCardNo, setPanCardNo] = useState("");
  const [fields, setFields] = useState([
    {
      courseName: "",
      regCorresp: "",
      university: "",
      majorSubject: "",
      yearOfCompletion: "",
      percentage: "",
    },
  ]);

  const handleAddField = () => {
    setFields([
      ...fields,
      {
        courseName: "",
        regCorresp: "",
        university: "",
        majorSubject: "",
        yearOfCompletion: "",
        percentage: "",
      },
    ]);
  };



  useEffect(() => {
    const panCardNo = getPanCardNoFromLocalStorage();
    setPanCardNo(panCardNo || "");
  }, []);
  


  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setFields(updatedFields);
  };

  const handlePanCardChange = (event) => {
    setPanCardNo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!panCardNo) {
      alert("PAN Card Number is required.");
      return;
    }

    // Prepare the data for backend API submission
    const formData = {
      panCardNo,
      educationDetails: fields,
    };

    try {
      // Submit the form data using the submitForm function
      const response = await submitForm(formData);
      console.log("Form submission response:", response);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={2} xs={3}>
            <TextField
              id="panCardNo"
              label="PAN"
              variant="filled"
              size="small"
              name="panCardNo"
              value={panCardNo}
              onChange={handlePanCardChange}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        {fields.map((field, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" sx={{ fontSize: "15px", marginTop: 2 }}>
                Course Name {index + 1}
              </Typography>
              <TextField
                label="Course Name"
                size="small"
                fullWidth
                name="courseName"
                value={field.courseName}
                onChange={(event) => handleChange(index, event)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl
                fullWidth
                size="small"
                sx={{ fontSize: "15px", marginTop: 2 }}
                style={{ marginTop: "40px" }}
              >
                <InputLabel>Education Type {index + 1}</InputLabel>
                <Select
                  name="regCorresp"
                  value={field.regCorresp}
                  onChange={(event) => handleChange(index, event)}
                  label={`Education Type ${index + 1}`}
                  required
                >
                  <MenuItem value="Regular">Regular</MenuItem>
                  <MenuItem value="Correspondance">Correspondence</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" sx={{ fontSize: "15px", marginTop: 2 }}>
                University {index + 1}
              </Typography>
              <TextField
                label="University"
                size="small"
                fullWidth
                name="university"
                value={field.university}
                onChange={(event) => handleChange(index, event)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" sx={{ fontSize: "15px", marginTop: 2 }}>
                Major Subject {index + 1}
              </Typography>
              <TextField
                label="Major Subject"
                size="small"
                fullWidth
                name="majorSubject"
                value={field.majorSubject}
                onChange={(event) => handleChange(index, event)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" sx={{ fontSize: "15px", marginTop: 2 }}>
                Year of Completion {index + 1}
              </Typography>
              <TextField
                label="Year of Completion"
                size="small"
                fullWidth
                name="yearOfCompletion"
                value={field.yearOfCompletion}
                onChange={(event) => handleChange(index, event)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" sx={{ fontSize: "15px", marginTop: 2 }}>
                Percentage {index + 1}
              </Typography>
              <TextField
                label="Percentage"
                size="small"
                fullWidth
                name="percentage"
                value={field.percentage}
                onChange={(event) => handleChange(index, event)}
                required
              />
            </Grid>
          </Grid>
        ))}

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12}>
            <IconButton
              aria-label="add"
              color="success"
              onClick={handleAddField}
            >
              <Add />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              SDave & Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EducationDetailsTab;
