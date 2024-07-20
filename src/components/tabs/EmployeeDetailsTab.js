import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { submitForm } from "../utils/formFunction";
import { Add, Remove } from "@mui/icons-material";

const EmployeeDetailsTab = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    birthPlace: "",
    gender: "",
    maritalStatus: "",
    bloodGroup: "",
    postConfirm: "",
    department: "",
    panCardNo: "",
    aadharCardNo: "",
    dob: null,
    dateofJoining: null,
    permanentAddress: "",
    stdCode: "",
    phoneResidence: "",
    personalMobileNumber: "",
    pAlternateMobileNumber: "",
    pEmergencyContactPersonName: "",
    pEmergencyContactPersonNumber: "",
    pEmailID: "",
    correspondenceAddress: "",
    cStdCode: "",
    cPhoneResidence: "",
    cPersonalMobileNumber: "",
    cAlternateMobileNumber: "",
    cEmergencyContactPersonName: "",
    cEmergencyContactPersonNumber: "",
    cEmailID: "",
  });

  const [dependentPersons, setDependentPersons] = useState([
    {
      name: "",
      relationship: "",
      contactNumber: "",
      currentAddress: "",
      occupation: "",
      age: "",
    },
  ]);

  const [professionalReferences, setProfessionalReferences] = useState([
    {
      name: "",
      designation: "",
      organization: "",
      relationship: "",
      contact: "",
    },
  ]);

  const [personalReferences, setPersonalReferences] = useState([
    {
      name: "",
      relationship: "",
      contact: "",
    },
  ]);

  const handleChange = (e, stateUpdater) => {
    const { name, value } = e.target;
    stateUpdater((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date, name) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: date,
    }));
  };

  const handleArrayChange = (index, e, state, stateUpdater) => {
    const { name, value } = e.target;
    const updatedArray = [...state];
    updatedArray[index][name] = value;
    stateUpdater(updatedArray);
  };

  const addArrayField = (stateUpdater) => {
    stateUpdater((prevState) => [
      ...prevState,
      {
        name: "",
        relationship: "",
        contactNumber: "",
        currentAddress: "",
        occupation: "",
        age: "",
      },
    ]);
  };

  const removeArrayField = (index, state, stateUpdater) => {
    const updatedArray = [...state];
    updatedArray.splice(index, 1);
    stateUpdater(updatedArray);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formatDate = (date) => (date ? dayjs(date).format("YYYY-MM-DD") : null);
  
    const formattedPersonalInfo = {
      ...personalInfo,
      panCardNo: personalInfo.panCardNo.toUpperCase(),
      dob: formatDate(personalInfo.dob),
      dateofJoining: formatDate(personalInfo.dateofJoining),
    };
  
    // Save panCardNo to local storage
    localStorage.setItem("panCardNo", formattedPersonalInfo.panCardNo);
    console.log("PAN Card Number saved to local storage:", formattedPersonalInfo.panCardNo);

    // console.log("Formatted Personal Info:", formattedPersonalInfo);
  
    const dataToSubmit = {
      personalInfo: formattedPersonalInfo,
      dependentPersons,
      professionalReferences,
      personalReferences,
    };
  
    // console.log("Data to Submit:", dataToSubmit);
  
    try {
      const response = await submitForm({ employeeDetails: dataToSubmit });
      alert(response.message || "Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.message || error);
      alert(`Error submitting form: ${error.message || "Unknown error occurred"}`);
    }
  };
  
  
  

  const renderTextField = (label, name, state, stateUpdater, index = null) => (
    <Grid item xs={12} sm={4}>
      <TextField
        label={label}
        name={name}
        value={index !== null ? state[index][name] : state[name]}
        onChange={(e) =>
          index !== null
            ? handleArrayChange(index, e, state, stateUpdater)
            : handleChange(e, stateUpdater)
        }
        fullWidth
        size="small"
      />
    </Grid>
  );

  const renderSelectField = (label, name, value, options, stateUpdater) => (
    <Grid item xs={12} sm={4}>
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={(e) => handleChange(e, stateUpdater)}
          label={label}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );

  return (
    <Box sx={{ padding: 2 }}>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <Typography variant="h6" style={{ fontSize: "15px" }} gutterBottom>
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          {renderTextField(
            "First Name",
            "firstName",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Middle Name",
            "middleName",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Last Name",
            "lastName",
            personalInfo,
            setPersonalInfo
          )}
        </Grid>

        {/* Father's Information */}
        <Typography
          className="title-text"
          variant="h6"
          style={{ fontSize: "15px" }}
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          Father/Husband's Information
        </Typography>
        <Grid container spacing={2}>
          {renderTextField(
            "First Name",
            "fatherFirstName",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Middle Name",
            "fatherMiddleName",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Last Name",
            "fatherLastName",
            personalInfo,
            setPersonalInfo
          )}
        </Grid>

        {/* Additional Details */}
        <Typography
          className="title-text"
          variant="h6"
          style={{ fontSize: "15px" }}
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          Additional Details
        </Typography>
        <Grid container spacing={2}>
          {renderTextField(
            "Place of Birth",
            "birthPlace",
            personalInfo,
            setPersonalInfo
          )}
          {renderSelectField(
            "Gender",
            "gender",
            personalInfo.gender,
            [
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ],
            setPersonalInfo
          )}
          {renderSelectField(
            "Marital Status",
            "maritalStatus",
            personalInfo.maritalStatus,
            [
              { value: "single", label: "Single" },
              { value: "married", label: "Married" },
              { value: "divorced", label: "Divorced" },
              { value: "widowed", label: "Widowed" },
            ],
            setPersonalInfo
          )}
          {renderTextField(
            "Blood Group",
            "bloodGroup",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Post Confirm",
            "postConfirm",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Department",
            "department",
            personalInfo,
            setPersonalInfo
          )}
        </Grid>

        {/* List of Dependent Persons */}
        <Typography
          className="title-text"
          variant="h6"
          style={{ fontSize: "15px" }}
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          List of Dependent Persons
        </Typography>
        {dependentPersons.map((dependentPerson, index) => (
          <Grid container spacing={2} key={index}>
            {renderTextField(
              "Name",
              "name",
              dependentPersons,
              setDependentPersons,
              index
            )}
            {renderTextField(
              "Relationship",
              "relationship",
              dependentPersons,
              setDependentPersons,
              index
            )}
            {renderTextField(
              "Contact Number",
              "contactNumber",
              dependentPersons,
              setDependentPersons,
              index
            )}
            {renderTextField(
              "Current Address",
              "currentAddress",
              dependentPersons,
              setDependentPersons,
              index
            )}
            {renderTextField(
              "Occupation",
              "occupation",
              dependentPersons,
              setDependentPersons,
              index
            )}
            {renderTextField(
              "Age",
              "age",
              dependentPersons,
              setDependentPersons,
              index
            )}
            <Grid item xs={12}>
              <IconButton
                variant="contained"
                color="secondary"
                onClick={() =>
                  removeArrayField(index, dependentPersons, setDependentPersons)
                }
              >
                <Remove titleAccess="Remove"/>
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <IconButton
          aria-label="add"
          color="success"
          onClick={() => addArrayField(setDependentPersons)}
        >
          <Add titleAccess="Add More"/>
        </IconButton>

        {/* Documents */}
        <Typography
          className="title-text"
          variant="h6"
          style={{ fontSize: "15px" }}
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          Documents
        </Typography>
        <Grid container spacing={2}>
          {renderTextField(
            "Pan Card No",
            "panCardNo",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Aadhar Card No",
            "aadharCardNo",
            personalInfo,
            setPersonalInfo
          )}
          <Grid item xs={12} sm={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={personalInfo.dob ? dayjs(personalInfo.dob) : null}
                onChange={(date) => handleDateChange(date, "dob")}
                renderInput={(params) => (
                  <TextField {...params} fullWidth size="small" />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Joining"
                value={
                  personalInfo.dateofJoining
                    ? dayjs(personalInfo.dateofJoining)
                    : null
                }
                onChange={(date) => handleDateChange(date, "dateofJoining")}
                renderInput={(params) => (
                  <TextField {...params} fullWidth size="small" />
                )}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>

        {/* Permanent Address */}
        <Typography
          className="title-text"
          variant="h6"
          style={{ fontSize: "15px" }}
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          Permanent Address
        </Typography>
        <Grid container spacing={2}>
          {renderTextField(
            "Permanent Address",
            "permanentAddress",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "STD Code",
            "stdCode",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Phone Residence",
            "phoneResidence",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Personal Mobile Number",
            "personalMobileNumber",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Alternate Mobile Number",
            "pAlternateMobileNumber",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Emergency Contact Person Name",
            "pEmergencyContactPersonName",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Emergency Contact Person Number",
            "pEmergencyContactPersonNumber",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Email ID",
            "pEmailID",
            personalInfo,
            setPersonalInfo
          )}
        </Grid>

        {/* Correspondence Address */}
        <Typography
          className="title-text"
          variant="h6"
          style={{ fontSize: "15px" }}
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          Correspondence Address
        </Typography>
        <Grid container spacing={2}>
          {renderTextField(
            "Correspondence Address",
            "correspondenceAddress",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "STD Code",
            "cStdCode",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Phone Residence",
            "cPhoneResidence",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Personal Mobile Number",
            "cPersonalMobileNumber",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Alternate Mobile Number",
            "cAlternateMobileNumber",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Emergency Contact Person Name",
            "cEmergencyContactPersonName",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Emergency Contact Person Number",
            "cEmergencyContactPersonNumber",
            personalInfo,
            setPersonalInfo
          )}
          {renderTextField(
            "Email ID",
            "cEmailID",
            personalInfo,
            setPersonalInfo
          )}
        </Grid>

        {/* Professional References */}
        <Typography
          className="title-text"
          variant="h6"
          style={{ fontSize: "15px" }}
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          Professional References
        </Typography>
        {professionalReferences.map((reference, index) => (
          <Grid container spacing={2} key={index}>
            {renderTextField(
              "Name",
              "name",
              professionalReferences,
              setProfessionalReferences,
              index
            )}
            {renderTextField(
              "Designation",
              "designation",
              professionalReferences,
              setProfessionalReferences,
              index
            )}
            {renderTextField(
              "Organization",
              "organization",
              professionalReferences,
              setProfessionalReferences,
              index
            )}
            {renderTextField(
              "Relationship",
              "relationship",
              professionalReferences,
              setProfessionalReferences,
              index
            )}
            {renderTextField(
              "Contact",
              "contact",
              professionalReferences,
              setProfessionalReferences,
              index
            )}
            <Grid item xs={12}>
              <IconButton
                variant="contained"
                color="secondary"
                onClick={() =>
                  removeArrayField(
                    index,
                    professionalReferences,
                    setProfessionalReferences
                  )
                }
              >
                <Remove titleAccess="Remove" />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <IconButton
          variant="contained"
          onClick={() => addArrayField(setProfessionalReferences)}
        >
          <Add titleAccess="Add More" />
        </IconButton>

        {/* Personal References */}
        <Typography
          className="title-text"
          variant="h6"
          style={{ fontSize: "15px" }}
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          Personal References
        </Typography>
        {personalReferences.map((reference, index) => (
          <Grid container spacing={2} key={index}>
            {renderTextField(
              "Name",
              "name",
              personalReferences,
              setPersonalReferences,
              index
            )}
            {renderTextField(
              "Relationship",
              "relationship",
              personalReferences,
              setPersonalReferences,
              index
            )}
            {renderTextField(
              "Contact",
              "contact",
              personalReferences,
              setPersonalReferences,
              index
            )}
            <Grid item xs={12}>
              <IconButton
                variant="contained"
                color="secondary"
                onClick={() =>
                  removeArrayField(
                    index,
                    personalReferences,
                    setPersonalReferences
                  )
                }
              >
                <Remove titleAccess="Remove" />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <IconButton
          variant="contained"
          onClick={() => addArrayField(setPersonalReferences)}
        >
          <Add titleAccess="Add More"/>
        </IconButton>
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2 }}
        >
          Save & Continue
        </Button>
      </form>
    </Box>
  );
};

export default EmployeeDetailsTab;
