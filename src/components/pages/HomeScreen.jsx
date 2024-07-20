import React, { useState, useEffect } from "react";
import { Tabs, Tab, Container, IconButton } from "@mui/material";
import EmployeeDetailsTab from "../tabs/EmployeeDetailsTab";
import EducationDetailsTab from "../tabs/EducationDetailsTab";
import EmploymentDetailsTab from "../tabs/EmploymentDetailsTab";
import AdditionalDetailsTab from "../tabs/AdditionalDetails";
import TaxDetailsTab from "../tabs/TaxDetailsTab";
import InfoModal from "../defaults/InfoModal";
import TestTab from "../tabs/TestTab";
import { QuestionMarkRounded } from "@mui/icons-material";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const HomeScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const driverObj = driver();

    const highlightElement = () => {
      driverObj.highlight({
        element: ".info-button",
        popover: {
          title: "Need help?",
          description: "Click here for important information and guidelines.",
          position: "top",
        },
      });


      setTimeout(() => {
        driverObj.destroy();
      }, 3000);
    };

    highlightElement();

    return () => driverObj.destroy();
  }, []);

  const handleTabChange = (event, newValue) => {
    if (newValue === 9) {
      return;
    }
    setTabIndex(newValue);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="wrapper">
      <div className="top-header"></div>
      <div className="form-container">
        <Container className="formbox-container" maxWidth="lg">
          <Tabs value={tabIndex} onChange={handleTabChange} aria-label="tabs">
            <Tab label="Employee Details" />
            <Tab label="Employment Details" />
            <Tab label="Education Details" />
            <Tab label="Tax Details" />
            <Tab label="Additional Details" />
          </Tabs>
          {tabIndex === 0 && <EmployeeDetailsTab />}
          {tabIndex === 1 && <EmploymentDetailsTab />}
          {tabIndex === 2 && <EducationDetailsTab />}
          {tabIndex === 3 && <TaxDetailsTab />}
          {tabIndex === 4 && <AdditionalDetailsTab />}
          {tabIndex === 5 && <TestTab />}
        </Container>
      </div>
      <IconButton
        color="primary"
        className="info-button"
        onClick={handleOpenModal}
      >
        <QuestionMarkRounded className="iconStyle" />
      </IconButton>
      <InfoModal open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default HomeScreen;
