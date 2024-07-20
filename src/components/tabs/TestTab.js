import React, { useState } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { submitForm } from "../utils/formFunction";

const TaxDetailsTab = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    homeAddress: "",
    fiscalYear: "",
    hasHRA: false,
    monthlyRent: "",
    landlordFullName: "",
    landlordHomeAddress: "",
    accountNumber: "",
    wantsDeduction: false,
    interestPaid: "",
    lenderFullName: "",
    lenderHomeAddress: "",
    lenderAccountNumber: "",
    lenderAdditionalInfo: "",
    deduction80C: "",
    deduction80CCC: "",
    deduction80CCD: "",
    otherSection: "",
    salaryExcluding: "",
    allowancesChargeable: "",
    totalColumns678: "",
    deductedLifeInsurance: "",
    taxDeducted: "",
    unfurnishedAccommodation: "",
    valueUnfurnished: "",
    costFurniture: "",
    perquisiteFurniture: "",
    totalColumns46: "",
    rentPaid: "",
    perquisiteValue: "",
    conveyanceProvided: "",
    domesticServices: "",
    otherBenefits: "",
    employerContribution: "",
    interestCredited: "",
    totalAnnexure: "",
    termsAgreed: false,
    leaveTravel: "",
    lenderEmpIf: "",
    lenderFinan: "",
    tanemp: "",
    periodEmp: "",
    valuePerq: "",
    valueFree: "",
    estValue: "",
    panCardNo: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      console.log("Submitting form data:", formData); // Debugging output
      const response = await submitForm(formData);
      console.log("Form submitted successfully:", response);
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      console.error("Form submission error:", error.message);
      // Handle error (e.g., show an error message)
    }
  };
  
  
  

  return (
    <Box component="form" sx={{ padding: 2 }} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item lg={2} xs={12}>
          <TextField
            id="panCardNo"
            label="PAN"
            variant="filled"
            size="small"
            name="panCardNo"
            value={formData.panCardNo}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Typography
        variant="h6"
        sx={{ fontSize: 16, fontWeight: 600 }}
        gutterBottom
      >
        Form No 12B
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Address of the Employee"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Financial Year"
            name="fiscalYear"
            value={formData.fiscalYear}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <FormControlLabel
        control={
          <Checkbox
            name="hasHRA"
            checked={formData.hasHRA}
            onChange={handleChange}
          />
        }
        label="House Rent Allowance"
      />

      {formData.hasHRA && (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              label="Rent paid to landlord"
              name="monthlyRent"
              value={formData.monthlyRent}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Landlord Full Name"
              name="landlordFullName"
              value={formData.landlordFullName}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Landlord Address"
              name="landlordHomeAddress"
              value={formData.landlordHomeAddress}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Permanent Account Number of the landlord"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Typography
            variant="caption"
            sx={{ color: "red", fontSize: 12, margin: "4px 20px" }}
          >
            Note: Account Number shall be furnished if the aggregate rent paid
            during the previous year exceeds one lakh rupees.
          </Typography>
        </Grid>
      )}

      <Typography variant="h5" sx={{ fontSize: 16 }}>
        Leave travel concessions or assistance
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Leave Travel"
            name="leaveTravel"
            value={formData.leaveTravel}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <FormControlLabel
        control={
          <Checkbox
            name="wantsDeduction"
            checked={formData.wantsDeduction}
            onChange={handleChange}
          />
        }
        label="Deduction of interest on borrowing"
      />

      {formData.wantsDeduction && (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              label="Interest payable/paid to the lender"
              name="interestPaid"
              value={formData.interestPaid}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Lender Full Name"
              name="lenderFullName"
              value={formData.lenderFullName}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Lender Address"
              name="lenderHomeAddress"
              value={formData.lenderHomeAddress}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Permanent Account Number of the lender"
              name="lenderAccountNumber"
              value={formData.lenderAccountNumber}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Financial Institution(If available)"
              name="lenderFinan"
              value={formData.lenderFinan}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Employer(if available)"
              name="lenderEmpIf"
              value={formData.lenderEmpIf}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Additional Information"
              name="lenderAdditionalInfo"
              value={formData.lenderAdditionalInfo}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      )}

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Deductions under Section VI-A
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Section 80C"
            name="deduction80C"
            value={formData.deduction80C}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Section 80CCC"
            name="deduction80CCC"
            value={formData.deduction80CCC}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Section 80CCD"
            name="deduction80CCD"
            value={formData.deduction80CCD}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Other Section"
            name="otherSection"
            value={formData.otherSection}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Salary Excluded from Tax
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Salary Excluding"
            name="salaryExcluding"
            value={formData.salaryExcluding}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Allowances chargeable"
            name="allowancesChargeable"
            value={formData.allowancesChargeable}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Perquisites and Allowances
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Total Column 6 to 8"
            name="totalColumns678"
            value={formData.totalColumns678}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Deducted Life Insurance"
            name="deductedLifeInsurance"
            value={formData.deductedLifeInsurance}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Tax Deducted"
            name="taxDeducted"
            value={formData.taxDeducted}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Other Benefits
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Unfurnished Accommodation"
            name="unfurnishedAccommodation"
            value={formData.unfurnishedAccommodation}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Value of Unfurnished Accommodation"
            name="valueUnfurnished"
            value={formData.valueUnfurnished}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Cost of Furniture"
            name="costFurniture"
            value={formData.costFurniture}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Perquisite Value of Furniture"
            name="perquisiteFurniture"
            value={formData.perquisiteFurniture}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Computation of Taxable Perquisite
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Total Column 4 and 6"
            name="totalColumns46"
            value={formData.totalColumns46}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Rent Paid"
            name="rentPaid"
            value={formData.rentPaid}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Perquisite Value"
            name="perquisiteValue"
            value={formData.perquisiteValue}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Conveyance Provided"
            name="conveyanceProvided"
            value={formData.conveyanceProvided}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Other Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Domestic Services"
            name="domesticServices"
            value={formData.domesticServices}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Other Benefits"
            name="otherBenefits"
            value={formData.otherBenefits}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Contributions
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Employer's Contribution"
            name="employerContribution"
            value={formData.employerContribution}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Interest Credited"
            name="interestCredited"
            value={formData.interestCredited}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Total Annexure"
            name="totalAnnexure"
            value={formData.totalAnnexure}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <FormControlLabel
        control={
          <Checkbox
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
          />
        }
        label="I agree to the terms and conditions"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default TaxDetailsTab;
