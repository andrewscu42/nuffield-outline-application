const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsforce = require('jsforce');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Salesforce connection configuration
const SF_LOGIN_URL = process.env.SF_LOGIN_URL || 'https://login.salesforce.com';
const SF_USERNAME = process.env.SF_USERNAME;
const SF_PASSWORD = process.env.SF_PASSWORD;
const SF_TOKEN = process.env.SF_TOKEN;

// Create connection to Salesforce
const conn = new jsforce.Connection({
  loginUrl: SF_LOGIN_URL
});

// Connect to Salesforce
conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, (err) => {
  if (err) {
    console.error('Salesforce connection error:', err);
  } else {
    console.log('Connected to Salesforce!');
  }
});

// Basic route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running correctly!' });
});

// API endpoint to submit application
app.post('/api/submit-application', async (req, res) => {
  try {
    const formData = req.body;
    
    // Create application record in Salesforce
    const result = await conn.sobject('Application__c').create({
      // Map form fields to Salesforce object fields
      Research_Questions__c: formData.researchQuestions,
      Project_Importance__c: formData.projectImportance,
      Impact_Achievement__c: formData.impactAchievement,
      Methods__c: formData.methods,
      Team_Members__c: formData.teamMembers,
      // Add other fields as needed
    });
    
    if (result.success) {
      res.status(200).json({ 
        success: true, 
        applicationId: result.id,
        message: 'Application submitted successfully' 
      });
    } else {
      throw new Error('Failed to create application record');
    }
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting application', 
      error: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 