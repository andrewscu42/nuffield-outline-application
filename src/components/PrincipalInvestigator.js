import './Outline.css';
import ProgressIndicator from './ProgressIndicator';

export default function PrincipalInvestigator() {
    return (
      <>
        <ProgressIndicator currentStep={0} />
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
              <label htmlFor="title" className="field-label">
                Title <span className="required">*</span>
              </label>
              <select 
                id="title" 
                name="title" 
                className="form-field"
                required
              >
                <option value="">Please select...</option>
                <option value="Dr">Dr</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Prof">Prof</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="firstName" className="field-label">
                First name <span className="required">*</span>
              </label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                className="form-field"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="field-label">
                Last name <span className="required">*</span>
              </label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                className="form-field"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="field-label">
                Email address <span className="required">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-field"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="position" className="field-label">
                Position/job title <span className="required">*</span>
              </label>
              <input 
                type="text" 
                id="position" 
                name="position" 
                className="form-field"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="field-label">
                Phone number <span className="required">*</span>
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-field"
                required 
              />
            </div>

            <div className="form-group">
              <label className="field-label">
                Do you have Co-Investigators on this project? <span className="required">*</span>
              </label>
              <div className="radio-group">
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="coInvestigators" 
                    value="yes" 
                    required
                  />
                  Yes
                </label>
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="coInvestigators" 
                    value="no" 
                    required
                  />
                  No
                </label>
              </div>
            </div>
          </form>
        </section>
      </>
    );
}