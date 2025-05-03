# Research Foundation Application Form

## Project Overview

This application provides a multi-step web form for submitting research grant applications to a foundation. It features a React-based frontend for a smooth user experience and a Node.js/Express backend server that securely connects to and submits the application data directly into the foundation's Salesforce Org.

## Project Structure

The project is organized into distinct directories to separate concerns between the frontend client, the backend server, and static public assets:

```
project-root/
├── node_modules/       # Dependencies for the frontend (managed by root package.json)
├── public/             # Static assets served directly
│   ├── index.html      # Main HTML template for the React app
│   ├── favicon.ico     # Browser tab icon
│   └── ...             # Other static files (images, manifests, etc.)
├── server/             # Backend Node.js/Express application
│   ├── node_modules/   # Dependencies for the server (managed by server/package.json)
│   ├── server.js       # Main Express application setup and Salesforce connection
│   ├── .env            # Environment variables (Salesforce credentials, PORT) - **DO NOT COMMIT**
│   └── package.json    # Server dependencies and scripts
├── src/                # React frontend application source code
│   ├── components/     # Reusable React components (form pages, buttons, etc.)
│   ├── App.jsx         # Main application component, routing setup
│   ├── index.js        # Entry point for the React application
│   └── ...             # Other JS files, CSS files, assets used by React
├── .gitignore          # Specifies intentionally untracked files (e.g., node_modules, .env)
├── package.json        # Frontend dependencies and main project scripts
└── README.md           # This file
```

### Directory Purposes

1.  **`/public`**:
    *   **Purpose**: Contains static files that are served directly by the web server without processing by Webpack (the bundler used by Create React App).
    *   **Key Files**:
        *   `index.html`: The single HTML page shell into which the React application is injected.
        *   `favicon.ico`, `logo192.png`, `manifest.json`: Standard assets for Progressive Web Apps (PWA) features and browser display.
    *   **Usage**: Files here are accessible directly via the root URL (e.g., `/favicon.ico`).

2.  **`/src`**:
    *   **Purpose**: Holds all the source code for the React frontend application. This is where the user interface logic, component structure, and client-side routing reside.
    *   **Key Files**:
        *   `index.js`: The JavaScript entry point that renders the main `App` component into the `public/index.html` file.
        *   `App.jsx`: The root component that sets up React Router and defines the main application layout and routes (`/`, `/apply`, `/success`, etc.). It orchestrates the display of different form pages.
        *   `/components`: Contains individual React components that make up the UI, including each step of the multi-page form (`PrincipalInvestigator.jsx`, `ResearchQuestions.jsx`, etc.), navigation elements (`NavigationButtons.jsx`), and informational pages (`HomePage.jsx`, `SuccessPage.jsx`).
    *   **Workflow**: Code here is processed by `react-scripts` (Webpack, Babel) to bundle it into optimized static assets that are then served.

3.  **`/server`**:
    *   **Purpose**: Contains the backend Node.js application built with the Express framework. Its primary role is to act as a secure intermediary between the frontend and the Salesforce Org.
    *   **Key Files**:
        *   `server.js`: Sets up the Express server, configures middleware (like `cors` for cross-origin requests and `body-parser` to handle JSON data), establishes the connection to Salesforce using `jsforce` and credentials from `.env`, and defines API endpoints.
        *   `package.json`: Manages the server's specific dependencies (like `express`, `jsforce`, `dotenv`).
        *   `.env`: Stores sensitive configuration like Salesforce API credentials and the server port. **This file should be listed in `.gitignore` and never committed to version control.**
    *   **Workflow**: This server listens for incoming API requests from the React frontend (e.g., when the form is submitted). It then uses the `jsforce` library to interact with the Salesforce API (e.g., creating an `Application__c` record) and sends a response back to the frontend.

### How They Work Together

1.  **User Interaction**: The user accesses the application in their browser, which loads the `index.html` from `/public` and the bundled JavaScript generated from `/src`.
2.  **Frontend Logic**: React takes over, rendering components based on the current route (managed by React Router in `App.jsx`). The user navigates through the form steps within the `/apply` route.
3.  **API Request**: When the user completes the form and clicks "Submit", the React frontend (specifically the `handleSubmit` function in `App.jsx`) gathers the form data and sends an HTTP POST request to the backend API endpoint (e.g., `http://localhost:5000/api/submit-application`).
4.  **Backend Processing**: The Node.js server running from `/server` receives the request. It parses the incoming data, connects to Salesforce using the credentials in `.env`, creates a new record in Salesforce with the submitted data, and handles any potential errors.
5.  **API Response**: The server sends a JSON response back to the React frontend indicating success or failure.
6.  **Frontend Update**: The React frontend receives the response. If successful, it navigates the user to the `/success` page. If there's an error, it displays an error message to the user.

This client-server architecture ensures that sensitive Salesforce credentials are never exposed in the user's browser and allows for secure, controlled interaction with the Salesforce API.

## Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm (usually comes with Node.js)
*   Access to a Salesforce Org and API credentials (Username, Password, Security Token)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd project-root
    ```

2.  **Install Frontend Dependencies:** Navigate to the project root directory and install the necessary packages listed in the root `package.json`.
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies:** Navigate to the `server` directory and install its specific dependencies listed in `server/package.json`.
    ```bash
    cd server
    npm install
    cd ..
    ```

### Configuration

1.  **Create Environment File:** In the `/server` directory, create a file named `.env`.
2.  **Add Credentials:** Add your Salesforce credentials and desired server port to the `.env` file. **Never commit this file to version control.**
    ```dotenv:server/.env
    # Salesforce Credentials
    SF_LOGIN_URL=https://login.salesforce.com # Or your specific instance/sandbox URL
    SF_USERNAME=your_salesforce_username@example.com
    SF_PASSWORD=your_salesforce_password
    SF_SECURITY_TOKEN=your_salesforce_security_token

    # Server Port
    PORT=5000
    ```

### Running the Application (Development)

You need to run both the frontend React development server and the backend Node.js server simultaneously. Open two separate terminal windows/tabs:

1.  **Start the Backend Server:** In the first terminal, navigate to the `server` directory and start the Node.js server using `nodemon` (which automatically restarts on file changes).
    ```bash
    cd server
    npm run dev
    ```
    The server will typically start on `http://localhost:5000` (or the port specified in `.env`).

2.  **Start the Frontend Development Server:** In the second terminal, navigate to the project root directory and start the React development server.
    ```bash
    npm start
    ```
    This will usually open the application automatically in your default web browser at `http://localhost:3000`. The React app is configured to proxy API requests to the backend server (check `package.json` for proxy setup if needed).

### Building for Production

To create an optimized build of the React frontend application:

1.  **Run the build script:** From the project root directory:
    ```bash
    npm run build
    ```
2.  This command bundles the React app into static files in the `/build` directory. You would then typically serve these static files along with your backend server in a production environment. The backend server (`server/server.js`) would still need to be running to handle API calls.

// ... potentially add deployment instructions later ...

