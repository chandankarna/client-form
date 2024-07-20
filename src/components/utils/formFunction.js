import axios from "axios";

const API_BASE_URL = "http://192.168.4.97:5001/api";

const endpoints = {
  employeeDetails: "/employee/submit-employee-details",
  employmentDetails: "/employment/submit-employment-details",
  educationDetails: "/education/submit-education-details",
  taxDetails: "/tax/submit-tax-details",
  additionalDetails: "/additional/submit-additional-details",
};

const determineEndpoint = (formData) => {
  if (formData.employeeDetails) {
    return endpoints.employeeDetails;
  } else if (formData.employmentDetails) {
    return endpoints.employmentDetails;
  } else if (formData.educationDetails) {
    return endpoints.educationDetails;
  } else if (formData.taxDetails) {
    return endpoints.taxDetails;
  } else if (formData.additionalDetails) {
    return endpoints.additionalDetails;
  }
  throw new Error("Unknown form data type or no matching endpoint");
};

export const submitForm = async (formData) => {
  const endpoint = determineEndpoint(formData);
  if (!endpoint) {
    throw new Error("Unknown form data type");
  }

  console.log("Submitting to endpoint:", endpoint);
  // console.log("Form data:", JSON.stringify(formData, null, 2));

  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("Form submission response:", response.data);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Unknown error occurred";
    console.error("Error submitting form:", errorMessage);
    throw new Error(`Form submission failed: ${errorMessage}`);
  }
};
