# Candidate Information Form

Sure, here’s the updated instruction including the additional detail about updating only values in the database and creating new properties if they don’t exist:

---

### Candidate Information Form Project Overview

The Candidate Information Form is a comprehensive tool designed to collect detailed information from candidates upon their joining. The form is segmented into five distinct tabs, each focusing on a specific category of information:

1. Employee Details Tab - [EmployeeDetailsTab] (First Form)
2. Employment Details Tab -[EmploymentDetailsTab] (Second Form)
3. Education Details Tab - [EducationDetailsTab] (Third Form)
4. Tax Details Tab - [TaxDetailsTab] (Fourth Form)
5. Additional Details Tab - [AdditionalDetailsTab] (Fifth Form)

Each tab includes various fields, summing up to approximately 100 inputs.

## Data Storage:
- Unique Identifier: Each candidate is uniquely identified by their PAN Card Number.

- Collection Naming: Data for each candidate is stored in a collection named after the lowercase version of their PAN Card Number. For example, a PAN Card Number of ABCDE1234F results in a collection named abcde1234f in the CIF database.

# Storing Data:
- The first form (Employee Details) creates a collection in the database with the PAN Card Number as its name.

- Subsequent forms (Employment Details, Education Details, Tax Details, Additional Details) store their data as documents within this collection.

- Each candidate's initial form submission creates the collection; subsequent forms update the existing collection with new documents or additional fields.

# Collection Update:

- If a candidate submits the form again with the same PAN Card Number, the existing collection is updated with the new data.

- If the new submission includes new parameters not previously recorded, these are added to the existing collection as additional objects.


## Backend Implementation:
- Framework: Express.js is used to handle form submissions and data management.
- Function Files: Different function files are employed to manage data operations and interactions with the MongoDB database named `CIF`.
- Data Handling: The backend server (`server.js`) processes form submissions by:
  - Checking if a collection with the PAN Card Number already exists.
  - Updating Existing Data: If the collection is present, it updates only the values of existing properties with the new data from the form submission. 
  - Creating New Properties: If a property (e.g., `pOrganizationAddress`) does not exist in the collection, it will create this property and store the user-provided data in it.
  - Adding/Modifying Fields: Properties that do not previously exist in the collection will be added, while existing properties will be updated with the latest information provided in the form.

Each form input is mapped to a specific property in the MongoDB collection. For instance, if the property `firstName` is filled out as "Chandan" and the PAN Card Number is "MIHPK6033S," the document in the collection `mipk6033s` will be updated with these details. If the `pOrganizationAddress` property is provided but does not exist in the database, it will be created and the form data will be saved in this new property.


The project uses React for the front-end and Material-UI (MUI) for the UI components. The form data will be managed in React and integrated with a mongoDB database.

## Table of Contents

- [Setup](#setup)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Form Handling](#form-handling)
- [Database Integration](#database-integration)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

cif/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── defaults/
│   │   │   ├── Layout.js
│   │   │   ├── Navs.js
│   │   │   └── ...
│   │   ├── tabs/
│   │   │   ├── EmployeeDetailsTab.js
│   │   │   ├── EmploymentDetailsTab.js
│   │   │   ├── EducationDetailsTab.js
│   │   │   ├── TaxInformationTab.js
│   │   │   ├── AdditionalDetailsTab.js
│   │   │   └── ...
│   ├── utils/
│   │   ├── formFunctions.js
│   ├── pages/
│   │   ├── HomeScreen.jsx
│   │   └── ...
│   ├── App.js
│   ├── App.scss
│   ├── index.js
│   └── ...
├── .gitignore
├── README.md
├── package.json
└── ...



backend
project-root/
├── server/
│   ├── controllers/
│   │   ├── employeeController.js
│   │   ├── educationController.js
│   │   ├── employmentController.js
│   │   ├── taxController.js
│   │   └── additionalController.js
│   ├── models/
│   │   └── dynamicModel.js
│   ├── routes/
│   │   ├── employeeRoutes.js
│   │   ├── educationRoutes.js
│   │   ├── employmentRoutes.js
│   │   ├── taxRoutes.js
│   │   └── additionalRoutes.js
│   └── server.js
# client-form
