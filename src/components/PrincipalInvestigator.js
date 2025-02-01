import './ResearchQuestions.css';
export default function PrincipalInvestigator() {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Principal Investigator Details</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Title</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block mb-2">First Name</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block mb-2">Email Address</label>
              <input type="email" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block mb-2">Position/Job Title</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block mb-2">Phone Number</label>
              <input type="tel" className="w-full border rounded p-2" />
            </div>
            <div className="col-span-2">
              <label className="block mb-2">Do you have Co-Investigators on this project?</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="coInvestigators" value="yes" className="mr-2" />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="coInvestigators" value="no" className="mr-2" />
                  No
                </label>
              </div>
            </div>
            <div className="col-span-2">
              <h3 className="text-xl font-semibold mb-4">Principal Investigator Organisation</h3>
              <label className="block mb-2">Have you found the organisation or do you need to enter new details?</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="orgFound" value="yes" className="mr-2" />
                  Yes - I have found my organisation
                </label>
                <label className="flex items-center">
                  <input type="radio" name="orgFound" value="no" className="mr-2" />
                  No - I want to enter in organisational details
                </label>
              </div>
            </div>
            <div className="col-span-2">
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">New Organisation Name</label>
                  <input type="text" className="w-full border rounded p-2" />
                </div>
                <div>
                  <label className="block mb-2">Organisation Address</label>
                  <input type="text" placeholder="Building name/number and street" className="w-full border rounded p-2 mb-2" />
                </div>
                <div>
                  <label className="block mb-2">Town/City</label>
                  <input type="text" className="w-full border rounded p-2" />
                </div>
                <div>
                  <label className="block mb-2">Country</label>
                  <input type="text" className="w-full border rounded p-2" />
                </div>
                <div>
                  <label className="block mb-2">County</label>
                  <input type="text" className="w-full border rounded p-2" />
                </div>
                <div>
                  <label className="block mb-2">Postcode</label>
                  <input type="text" className="w-full border rounded p-2" />
                </div>
                <div>
                  <label className="block mb-2">Is organisation a UK registered charity?</label>
                  <div className="space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="isCharity" value="yes" className="mr-2" />
                      Yes
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="isCharity" value="no" className="mr-2" />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }