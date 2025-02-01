import './ResearchQuestions.css';

export default function PrincipalInvestigator() {
    return (
      <section className="research-questions-form">
        <div className="form-header">
          <h2>Principal Investigator details</h2>
          <p className="form-instruction">
            You can only nominate one Principal Investigator on this form. See section 3 of the Guide for 
            Applicants for more details.
          </p>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="title">
              Title: <span className="required">*</span>
            </label>
            <select id="title" name="title" required>
              <option value="">Please select...</option>
              <option value="Dr">Dr</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Prof">Prof</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="firstName">
              First name <span className="required">*</span>
            </label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Last name: <span className="required">*</span>
            </label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email address: <span className="required">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">
              Position/job title: <span className="required">*</span>
            </label>
            <input 
              type="text" 
              id="position" 
              name="position" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone number: <span className="required">*</span>
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
            />
          </div>

          <div className="form-group">
            <label>
              Do you have Co-Investigators on this project? <span className="required">*</span>
            </label>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="coInvestigators" 
                  value="yes" 
                />
                Yes
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="coInvestigators" 
                  value="no" 
                />
                No
              </label>
            </div>
          </div>
        </form>
      </section>
    );
}