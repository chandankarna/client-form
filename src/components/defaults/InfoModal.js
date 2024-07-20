import React from "react";
import {
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import RefreshIcon from "@mui/icons-material/Refresh";
import TimerIcon from "@mui/icons-material/Timer";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import { styled } from "@mui/system";

const ScrollBox = styled(Box)({
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
});

const InfoModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ScrollBox
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: 600,
          bgcolor: "background.paper",
          backgroundColor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          height: "80vh",
          overflowY: "scroll",
        }}
        style={{
          height: "80vh",
          width: "100%",
          overflowY: "scroll",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h6" style={{ fontWeight: "600" }} gutterBottom>
          Candidate Information Form Guidelines
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Ensure that all details are entered accurately, especially your PAN Card Number and contact information." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Verify that each field is filled out correctly before submitting the form. Mistakes may delay processing." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ErrorIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Review all your entries twice before submission to avoid any errors." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RefreshIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Do not refresh or navigate away from the page while submitting the form, as this may result in loss of data." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TimerIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="The form submission might take some time, so please be patient and do not close the page." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ErrorIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="If you encounter any errors during submission, check your internet connection and try again." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Make sure to provide accurate and up-to-date information in all sections of the form." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AttachFileIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="For fields requiring attachments or uploads, ensure files are in the correct format and size." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="If you need to provide additional details, use the 'Additional Details' tab to include any extra information." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HelpIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="If you need to make changes after submission, contact support with your PAN Card Number for assistance." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="For best results, complete all mandatory fields marked with an asterisk (*)." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Keep a copy of your submitted form for your records and reference." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ErrorIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="In case of discrepancies, ensure that you have provided consistent information across all tabs." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Be aware that certain fields may have validation rules or format requirements. Follow on-screen instructions for these fields." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HelpIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Reach out to our support team if you have any questions or need help filling out the form." />
          </ListItem>
        </List>
      </ScrollBox>
    </Modal>
  );
};

export default InfoModal;
