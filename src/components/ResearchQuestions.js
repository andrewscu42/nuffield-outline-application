import React, { useState } from 'react';
import './ResearchQuestions.css';
const ResearchQuestions = () => {
  const [formData, setFormData] = useState({
    researchQuestions: '',
    projectImportance: '',
    projectRelevance: '',
    projectDistinctiveness: '',
    impactTypes: {
      policiesChange: false,
      practiceChange: false,
      understandingImprovement: false,
      attitudesChange: false,
      buildingCapability: false
    },
    impactAchievement: '',
    disseminationStrategy: '',
    methods: '',
    teamMembers: '',
    disseminationTeam: '',
    newStaffRecruitment: '',
    budget: {
      piTime: '',
      coITime: '',
      teamMembers: '',
      consultants: '',
      overheads: '',
      qualitativeResearch: '',
      quantitativeResearch: '',
      communications: '',
      equipment: '',
      otherCosts: ''
    },
    references: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      impactTypes: {
        ...prev.impactTypes,
        [name]: checked
      }
    }));
  };

  const handleBudgetChange = (e) => {
    const { name, value } = e.target;
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    setFormData(prev => ({
      ...prev,
      budget: {
        ...prev.budget,
        [name]: value
      }
    }));
  };

  // Add CSS styles
  const textareaStyle = {
    width: '100%',
    minHeight: '200px',
    padding: '12px',
    border: '2px solid #4CAF50', // Green border
    borderRadius: '4px',
    fontSize: '16px',
    lineHeight: '1.5',
    resize: 'vertical'
  };

  const formGroupStyle = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold'
  };

  return (
    <div className="research-questions-form">
      <section>
        <h2>A) Research questions</h2>
        <div className="form-group" style={formGroupStyle}>
          <label style={labelStyle}>
            What research questions will your project answer?
          </label>
          <textarea
            name="researchQuestions"
            value={formData.researchQuestions}
            onChange={handleInputChange}
            maxLength={2000}
            placeholder="Maximum 200 words"
            style={textareaStyle}
          />
        </div>
      </section>

      <section>
        <h2>B) Case for importance</h2>
        <div className="form-group">
          <label>Why is the project needed?</label>
          <label>How is the project relevant to the Nuffield Foundation's interests and areas of focus?</label>
          <label>What is distinctive about the project and how will it build on previous research?</label>
          <textarea
            name="projectImportance"
            value={formData.projectImportance}
            onChange={handleInputChange}
            maxLength={3000} // Approximately 300 words
            placeholder="Maximum 300 words"
          />
        </div>
      </section>

      <section>
        <h2>C) Outcomes and influence</h2>
        <div className="checkbox-group">
          <label>What type of impact do you expect your project to have?</label>
          <div>
            <input
              type="checkbox"
              name="policiesChange"
              checked={formData.impactTypes.policiesChange}
              onChange={handleCheckboxChange}
            />
            <label>Informing change to policies, systems or legislation</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="practiceChange"
              checked={formData.impactTypes.practiceChange}
              onChange={handleCheckboxChange}
            />
            <label>Informing practice change</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="understandingImprovement"
              checked={formData.impactTypes.understandingImprovement}
              onChange={handleCheckboxChange}
            />
            <label>Improving or advancing understanding or awareness of an issue</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="attitudesChange"
              checked={formData.impactTypes.attitudesChange}
              onChange={handleCheckboxChange}
            />
            <label>Changing attitudes or perceptions</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="buildingCapability"
              checked={formData.impactTypes.buildingCapability}
              onChange={handleCheckboxChange}
            />
            <label>Providing opportunity and building capability</label>
          </div>
        </div>
        
        <div className="form-group">
          <label>How will your project and its outputs achieve this impact?</label>
          <label>As part of this, outline your dissemination and influencing strategy, including the audiences that you will prioritise and the range of ways you plan to engage with them.</label>
          <textarea
            name="impactAchievement"
            value={formData.impactAchievement}
            onChange={handleInputChange}
            maxLength={3500} // Approximately 350 words
            placeholder="Maximum 350 words"
          />
        </div>
      </section>

      <section>
        <h2>D) Methods, approach and activities</h2>
        <div className="form-group">
          <label>What research methods will be used and what work will be undertaken?</label>
          <label>You should demonstrate that the activities planned are feasible and rigorous, as well as both sufficient and required to answer the research questions.</label>
          <textarea
            name="methods"
            value={formData.methods}
            onChange={handleInputChange}
            maxLength={6000} // Approximately 600 words
            placeholder="Maximum 600 words"
          />
        </div>
      </section>
      
      <section>
        <h2>E) Research and engagement team</h2>
        <div className="form-group">
          <label htmlFor="teamMembers">
            Who will be working on the project? Include their name, organisation, 
            and role, and briefly outline each person's relevant expertise and 
            experience.
          </label>
          <textarea
            id="teamMembers"
            name="teamMembers"
            value={formData.teamMembers}
            onChange={handleInputChange}
            maxLength={2500} // Approximately 250 words
            placeholder="Maximum 250 words"
          />
        </div>

        <div className="form-group">
          <label htmlFor="disseminationTeam">
            Who will work on the dissemination and influencing strategy?
          </label>
          <textarea
            id="disseminationTeam"
            name="disseminationTeam"
            value={formData.disseminationTeam}
            onChange={handleInputChange}
            maxLength={2500}
            placeholder="Please describe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="newStaffRecruitment">
            State whether any new staff will be recruited, and into which roles.
          </label>
          <textarea
            id="newStaffRecruitment"
            name="newStaffRecruitment"
            value={formData.newStaffRecruitment}
            onChange={handleInputChange}
            maxLength={2500}
            placeholder="Please describe"
          />
        </div>
      </section>

      <section>
        <h2>F) Budget</h2>
        <div className="budget-table">
          <div className="budget-row">
            <label>Staff costs: PI Time</label>
            <input
              type="text"
              name="piTime"
              value={formData.budget.piTime}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="budget-row">
            <label>Staff costs: Co-I Time</label>
            <input
              type="text"
              name="coITime"
              value={formData.budget.coITime}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="budget-row">
            <label>Staff costs: Team Members</label>
            <input
              type="text"
              name="teamMembers"
              value={formData.budget.teamMembers}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="budget-row">
            <label>Staff costs: Consultants</label>
            <input
              type="text"
              name="consultants"
              value={formData.budget.consultants}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="budget-row">
            <label>Staff costs: Overheads and Estate costs</label>
            <input
              type="text"
              name="overheads"
              value={formData.budget.overheads}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="budget-row">
            <label>Non staff costs: Qualitative research</label>
            <input
              type="text"
              name="qualitativeResearch"
              value={formData.budget.qualitativeResearch}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="budget-row">
            <label>Non staff costs: Quantitative research</label>
            <input
              type="text"
              name="quantitativeResearch"
              value={formData.budget.quantitativeResearch}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="budget-row">
            <label>Non staff costs: Communications and stakeholder engagement</label>
            <input
              type="text"
              name="communications"
              value={formData.budget.communications}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="budget-row">
            <label>Non staff costs: Equipment</label>
            <input
              type="text"
              name="equipment"
              value={formData.budget.equipment}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
          <div className="budget-row">
            <label>Non staff costs: Other costs</label>
            <input
              type="text"
              name="otherCosts"
              value={formData.budget.otherCosts}
              onChange={handleBudgetChange}
              placeholder="Enter amount"
            />
          </div>
        </div>
      </section>

      <section>
        <h2>G) Bibliographic references</h2>
        <div className="form-group">
            <label>Restricted to those cited in the application, and ideally presented in author-date format (e.g. Harvard style).</label>
            <label>Maximum 350 words</label>
            <textarea
                name="references"
                value={formData.references}
                onChange={handleInputChange}
                maxLength={3500} // Approximately 350 words
                placeholder="Maximum 350 words"
            />
        </div>
      </section>

      <section>
        <h2>H) Additional information</h2>
        <div className="form-group">
            <label>We would strongly prefer that all relevant information regarding your outline information is covered in the sections above.</label>
            <label>However, if you feel that it is absolutely necessary to provide some additional information e.g. in the form of charts, diagrams, tables, or budgetary explanation, you may upload one additional supporting document using the button below:</label>
            <button>Upload supporting document</button>
        </div>
      </section>

    </div>
  );
};

export default ResearchQuestions;
