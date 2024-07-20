import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { submitForm } from "../utils/formFunction";
import { getPanCardNoFromLocalStorage } from "../utils/localStorage";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.panCardNo) {
      alert("PAN Card Number is required.");
      return;
    }

    try {
      const response = await submitForm(formData);
      alert("Form submitted successfully:", response);
    } catch (error) {
      console.error("Form submission error:", error.message);
      alert("Form submission error:", error.message);
    }
  };

  return (
    <Box component="form" sx={{ padding: 2 }} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item lg={2} xs={3}>
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
        style={{ fontSize: "16px", fontWeight: "600" }}
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
            checked={formData.hasHRA}
            onChange={handleChange}
            name="hasHRA"
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
            style={{ color: "red", fontSize: "12px", margin: "4px 20px" }}
          >
            Note: Account Number shall be furnished if the aggregate rent paid
            during the previous year exceeds one lakh rupees.
          </Typography>
        </Grid>
      )}
      <Typography variant="h5" style={{ fontSize: "16px" }}>
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
            checked={formData.wantsDeduction}
            onChange={handleChange}
            name="wantsDeduction"
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
              label="Financial Institution (If available)"
              name="lenderFinan"
              value={formData.lenderFinan}
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Employer (if available)"
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
      <Typography variant="h6" style={{ marginTop: "15px" }}>
        Deductions under Section VI-A
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Deduction 80C"
            name="deduction80C"
            value={formData.deduction80C}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Deduction 80CCC"
            name="deduction80CCC"
            value={formData.deduction80CCC}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Deduction 80CCD"
            name="deduction80CCD"
            value={formData.deduction80CCD}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
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
      <Typography variant="h6" style={{ marginTop: "15px" }}>
        Income Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Salary excluding all allowances"
            name="salaryExcluding"
            value={formData.salaryExcluding}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Allowances chargeable to tax"
            name="allowancesChargeable"
            value={formData.allowancesChargeable}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Total of columns 6, 7, 8"
            name="totalColumns678"
            value={formData.totalColumns678}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Deducted life insurance premium"
            name="deductedLifeInsurance"
            value={formData.deductedLifeInsurance}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Tax deducted at source"
            name="taxDeducted"
            value={formData.taxDeducted}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Unfurnished accommodation"
            name="unfurnishedAccommodation"
            value={formData.unfurnishedAccommodation}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Value of unfurnished accommodation"
            name="valueUnfurnished"
            value={formData.valueUnfurnished}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Cost of furniture"
            name="costFurniture"
            value={formData.costFurniture}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Perquisite value of furniture"
            name="perquisiteFurniture"
            value={formData.perquisiteFurniture}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Total of columns 4, 5, 6"
            name="totalColumns46"
            value={formData.totalColumns46}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Rent paid"
            name="rentPaid"
            value={formData.rentPaid}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Perquisite value"
            name="perquisiteValue"
            value={formData.perquisiteValue}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Conveyance provided"
            name="conveyanceProvided"
            value={formData.conveyanceProvided}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Domestic services provided"
            name="domesticServices"
            value={formData.domesticServices}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Other benefits or amenities provided"
            name="otherBenefits"
            value={formData.otherBenefits}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Employer's contribution to PF"
            name="employerContribution"
            value={formData.employerContribution}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Interest credited to PF"
            name="interestCredited"
            value={formData.interestCredited}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Total of annexure II"
            name="totalAnnexure"
            value={formData.totalAnnexure}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography variant="caption" style={{ color: "red", fontSize: "12px" }}>
        Note: If the employee was employed for part of the year, provide details
        of perquisites during the period of employment with the current
        employer.
      </Typography>

      <Divider style={{ marginTop: "15px" }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsAgreed}
                onChange={handleChange}
                name="termsAgreed"
              />
            }
            label="I hereby declare that the information provided is correct."
            title="I hereby declare that the information given above and in the enclosed documents is true to the best of my knowledge and belief and nothing has been concealed therein. I understand that if the information given by me is proved false/not true, I will have to face the punishment as per the law. Also, all the benefits availed by me shall be summarily withdrawn."
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Save & Continue
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaxDetailsTab;
