
const [maritalIneptness, setMaritalIneptness] = useState(false);
const [courtProc, setCourtProc] = useState(false);
const [interviewDetails, setInterviewDetails] = useState({
  date: null,
  position: "",
  location: "",
  outcome: "",
  datefrom: null,
  dateto: null,
  designation: "",
  lastSalary: "",
});

const handleInterviewDetailsChange = (event) => {
  const { name, value } = event.target;
  setInterviewDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
};

const handleInterviewDateChange = (name, date) => {
  setInterviewDetails((prevDetails) => ({
    ...prevDetails,
    [name]: date ? dayjs(date).format("YYYY-MM-DD") : "",
  }));
};

const handleCheckboxChangeForm = (e) => {
  const { name, checked } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: checked ? "Yes" : "No",
  }));
};

const handleNestedChange = (e, key, nestedKey) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [key]: {
      ...prevData[key],
      [name]: value,
    },
  }));
};

const handleTermsChange = (e) => {
  setFormData((prevData) => ({
    ...prevData,
    termsAgreed: e.target.checked,
  }));
};


const showPreviousAccountDetails = formData.previousPFAccount === "Yes";
const showInternationalWorkerDetails = formData.internationalWorker === "Yes";


<Typography
variant="h4"
style={{ fontSize: "16px", marginTop: "20px", fontWeight: "600" }}
gutterBottom
>
Employee Provident Fund Organization Form
</Typography>
<Grid container spacing={2}>
<Grid item xs={3}>
  <TextField
    fullWidth
    label="Name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    size="small"
  />
</Grid>
<Grid item xs={3}>
  <TextField
    fullWidth
    label="Father's Name"
    name="fathersName"
    value={formData.fathersName}
    onChange={handleChange}
    size="small"
  />
</Grid>
<Grid item xs={3}>
  <TextField
    fullWidth
    label="Mother's Name"
    name="mothersName"
    value={formData.mothersName}
    onChange={handleChange}
    size="small"
  />
</Grid>
<Grid item xs={3}>
  <TextField
    fullWidth
    label="Date of Birth"
    name="dob"
    value={formData.dob}
    onChange={handleChange}
    size="small"
    type="date"
    InputLabelProps={{ shrink: true }}
  />
</Grid>
<Grid item xs={3}>
  <FormControl fullWidth size="small">
    <InputLabel>Gender</InputLabel>
    <Select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      fullWidth
      size="small"
      label="Gender"
    >
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
      <MenuItem value="other">Other</MenuItem>
    </Select>
  </FormControl>
</Grid>
<Grid item xs={3}>
  <FormControl fullWidth size="small">
    <InputLabel>Marital Status</InputLabel>
    <Select
      name="maritalStatus"
      value={formData.maritalStatus}
      onChange={handleChange}
      fullWidth
      size="small"
      label="Marital Status"
    >
      <MenuItem value="single">Single</MenuItem>
      <MenuItem value="married">Married</MenuItem>
    </Select>
  </FormControl>
</Grid>
<Grid item xs={3}>
  <TextField
    fullWidth
    label="Email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    size="small"
  />
</Grid>
<Grid item xs={3}>
  <TextField
    fullWidth
    label="Mobile"
    name="mobile"
    value={formData.mobile}
    onChange={handleChange}
    size="small"
  />
</Grid>

<Grid container spacing={2}>
  <Grid item xs={6}>
    <FormControlLabel
      control={
        <Checkbox
          checked={formData.previousPFAccount === "Yes"}
          onChange={handleCheckboxChange}
          name="previousPFAccount"
        />
      }
      label="Whether earlier a member of Employee's Provident Fund Scheme, 1952?"
    />
    {showPreviousAccountDetails && (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Date of Exit"
            name="exitDate"
            value={formData.previousAccountDetails.exitDate}
            onChange={(e) =>
              handleNestedChange(
                e,
                "previousAccountDetails",
                "exitDate"
              )
            }
            size="small"
            style={{ marginTop: "6px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Scheme Certificate Number"
            name="schemeCertNo"
            value={formData.previousAccountDetails.schemeCertNo}
            onChange={(e) =>
              handleNestedChange(
                e,
                "previousAccountDetails",
                "schemeCertNo"
              )
            }
            size="small"
            style={{ marginTop: "6px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Pension Payment Order Number"
            name="pensionOrder"
            value={formData.previousAccountDetails.pensionOrder}
            onChange={(e) =>
              handleNestedChange(
                e,
                "previousAccountDetails",
                "pensionOrder"
              )
            }
            size="small"
            style={{ marginTop: "6px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Previous PF Account Number"
            name="previousPFAccountNum"
            value={
              formData.previousAccountDetails.previousPFAccountNum
            }
            onChange={(e) =>
              handleNestedChange(
                e,
                "previousAccountDetails",
                "previousPFAccountNum"
              )
            }
            size="small"
            style={{ marginTop: "6px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Universal Account Number"
            name="universalAccountNum"
            value={
              formData.previousAccountDetails.universalAccountNum
            }
            onChange={(e) =>
              handleNestedChange(
                e,
                "previousAccountDetails",
                "universalAccountNum"
              )
            }
            size="small"
            style={{ marginTop: "6px" }}
          />
        </Grid>
      </Grid>
    )}
  </Grid>
  <Grid item xs={6}>
    <FormControlLabel
      control={
        <Checkbox
          checked={formData.internationalWorker === "Yes"}
          onChange={handleCheckboxChange}
          name="internationalWorker"
        />
      }
      label="Are you an International Worker?"
    />

    {showInternationalWorkerDetails && (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="State/Country of Origin"
            name="stateCountryOfOrigin"
            value={
              formData.internationalWorkerDetails.stateCountryOfOrigin
            }
            onChange={(e) =>
              handleNestedChange(
                e,
                "internationalWorkerDetails",
                "stateCountryOfOrigin"
              )
            }
            size="small"
            style={{ marginTop: "6px" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Passport Number"
            name="passportNumber"
            value={formData.internationalWorkerDetails.passportNumber}
            onChange={(e) =>
              handleNestedChange(
                e,
                "internationalWorkerDetails",
                "passportNumber"
              )
            }
            size="small"
            style={{ marginTop: "6px" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Validity of Passport"
            name="validityOfPassport"
            value={
              formData.internationalWorkerDetails.validityOfPassport
            }
            onChange={(e) =>
              handleNestedChange(
                e,
                "internationalWorkerDetails",
                "validityOfPassport"
              )
            }
            size="small"
            style={{ marginTop: "6px" }}
          />
        </Grid>
      </Grid>
    )}
  </Grid>
</Grid>

<Grid item xs={3}>
  <TextField
    fullWidth
    label="Bank Account No"
    name="bankAccountNo"
    value={formData.kycDetails.bankAccountNo}
    onChange={(e) =>
      handleNestedChange(e, "kycDetails", "bankAccountNo")
    }
    size="small"
  />
</Grid>
<Grid item xs={3}>
  <TextField
    fullWidth
    label="Adhar Number"
    name="adharNumber"
    value={formData.kycDetails.adharNumber}
    onChange={(e) =>
      handleNestedChange(e, "kycDetails", "adharNumber")
    }
    size="small"
  />
</Grid>
<Grid item xs={3}>
  <TextField
    fullWidth
    label="PAN ID"
    name="panID"
    value={formData.kycDetails.panID}
    onChange={(e) => handleNestedChange(e, "kycDetails", "panID")}
    size="small"
  />
</Grid>
<Grid item xs={12}>
  <FormControlLabel
    control={
      <Checkbox
        checked={formData.termsAgreed}
        onChange={handleTermsChange}
      />
    }
    label="I agree to the terms and conditions"
  />
</Grid>
</Grid>