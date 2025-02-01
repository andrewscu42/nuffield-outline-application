import React, { useState } from 'react';
import './ResearchQuestions.css';
const SignaturePage = () => {
  const [formData, setFormData] = useState({
    signature: '',
    newsletter: '',
    category: '',
    subCategory: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="signature-page">
      <section className="personal-data">
        <h2>Information about your personal data</h2>
        
        <div className="data-section">
          <h3>What we do with your data</h3>
          <p>
            We will use the data submitted on this form to process and make a decision on your application. 
            As part of this review process, we may share your personal data with individuals outside the Foundation. 
            This will always be on a confidential basis and we will ensure that your data is kept secure.
          </p>
          <p>
            If we decide to award a grant, we will use the personal data submitted as part of your application 
            for our grant management processes. We will include the name of the principal investigator in lists 
            of our grant-holders and in summaries of funded projects published online and in hard copy. In addition 
            to data processing for grant management, we will also use your data in ongoing monitoring and evaluation 
            of our grant activities and impact assessment work.
          </p>
        </div>

        <div className="data-section">
          <h3>Retention of your data</h3>
          <p>
            The data on the grants we award form part of the historical records of the Foundation. As an 
            organisation with a strong interest in impact and trends over the long term, we need to retain 
            our application and grant records on a similarly long-term basis. We do not therefore delete 
            these records or the associated personal data.
          </p>
        </div>

        <div className="declaration">
          <h3>Declaration/Signature</h3>
          <p>
            I have read the Guide for applicants and believe that this application meets the eligibility 
            criteria for funding. You don't need to use an electronic signature to declare completion of 
            the application form. Simply typing your name is acceptable:
          </p>
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleInputChange}
            placeholder="Type your name here"
          />
        </div>
      </section>
      <section className="newsletter">
        <h2>Stay Informed</h2>
        
        <div className="form-group">
          <h3>Would you like to subscribe to Nuffield Foundation Newsletter?</h3>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                id="subscribe"
                name="newsletter"
                value="subscribe"
                checked={formData.newsletter === "subscribe"}
                onChange={handleInputChange}
              />
              <label htmlFor="subscribe">I want to stay up to date with news about funding rounds and research</label>
            </div>
            <div>
              <input
                type="radio"
                id="noSubscribe" 
                name="newsletter"
                value="noSubscribe"
                checked={formData.newsletter === "noSubscribe"}
                onChange={handleInputChange}
              />
              <label htmlFor="noSubscribe">No thank you!</label>
            </div>
          </div>
        </div>

        {formData.newsletter === "subscribe" && (
          <div className="form-group">
            <h3>Please choose one category and one sub category that best matches your interests</h3>
            <p>The Nuffield Foundation will use the information you provide on this form to be in touch with you, via email, about its work.</p>
            
            <div className="select-group">
              <div>
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select a category</option>
                  <option value="justice">Justice</option>
                  <option value="education">Education</option>
                  <option value="welfare">Welfare</option>
                </select>
              </div>

              <div>
                <label htmlFor="subCategory">Sub Category:</label>
                <select
                  id="subCategory"
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleInputChange}
                >
                  <option value="">Select a sub category</option>
                  {/* Sub categories would be populated based on main category selection */}
                </select>
              </div>
            </div>

            <div className="privacy-notice">
              <p>We will use your data only to send you the newsletter and for internal reviews of our effectiveness. We will not share your data with any third parties.</p>
              <p>You may unsubscribe at any time by clicking the unsubscribe link in any newsletter email or by emailing privacy@nuffieldfoundation.org. For more details of our principles when dealing with personal data, see our Privacy Policy.</p>
              <p>We use Salesforce as our marketing automation platform. The information you provide will be transferred to Salesforce for processing in accordance with their Privacy Policy and Terms.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SignaturePage;
