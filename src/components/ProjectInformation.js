export default function ProjectInformation() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Project Information</h2>
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <label className="block mb-2">Project Title</label>
                        <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                        <label className="block mb-2">Proposed Start Date</label>
                        <input type="date" className="w-full border rounded p-2" />
                    </div>
                    <div>
                        <label className="block mb-2">Proposed End Date</label>
                        <input type="date" className="w-full border rounded p-2" />
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2">Have you applied, or are you applying, elsewhere for funds for this project, or for a similar or related project?</label>
                        <div className="space-x-4">
                            <label className="inline-flex items-center">
                                <input type="radio" name="otherFunding" value="yes" className="mr-2" />
                                Yes
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" name="otherFunding" value="no" className="mr-2" />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2">If you wish to propose a partnership funding model, please identify here the proposed co-funder(s) and set out the reasons why a partnership funding model would be beneficial to the project.</label>
                        <textarea className="w-full border rounded p-2 h-32" />
                    </div>
                </div>
            </form>
        </div>
    );
}