import './Outline.css';
import ProgressIndicator from './ProgressIndicator';

export default function ProjectInformation() {
    return (
        <>
            <ProgressIndicator currentStep={1} />
            <section className="section">
                <div className="form-header">
                    <h2>Project Information</h2>
                </div>

                <form>
                    <div className="form-group">
                        <label className="field-label">
                            Project Title <span className="required">*</span>
                        </label>
                        <input 
                            type="text" 
                            className="form-field"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label className="field-label">
                            Proposed Start Date <span className="required">*</span>
                        </label>
                        <input 
                            type="date" 
                            className="form-field"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label className="field-label">
                            Proposed End Date <span className="required">*</span>
                        </label>
                        <input 
                            type="date" 
                            className="form-field"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label className="field-label">
                            Have you applied, or are you applying, elsewhere for funds for this project, 
                            or for a similar or related project? <span className="required">*</span>
                        </label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input 
                                    type="radio" 
                                    name="otherFunding" 
                                    value="yes"
                                    required 
                                />
                                Yes
                            </label>
                            <label className="radio-label">
                                <input 
                                    type="radio" 
                                    name="otherFunding" 
                                    value="no"
                                    required 
                                />
                                No
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="field-label">
                            If you wish to propose a partnership funding model, please identify here 
                            the proposed co-funder(s) and set out the reasons why a partnership 
                            funding model would be beneficial to the project.
                        </label>
                        <textarea 
                            className="form-field"
                            rows="4"
                        />
                    </div>
                </form>
            </section>
        </>
    );
}