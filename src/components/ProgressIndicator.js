export default function ProgressIndicator({ currentPage }) {
  const steps = [
    'Principal Investigator',
    'Project Information',
    'Research Questions',
    'Signature'
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((label, index) => (
          <div 
            key={label} 
            className={`flex flex-col items-center w-1/4 ${
              currentPage > index + 1 ? 'text-green-500' : 
              currentPage === index + 1 ? 'text-blue-500' : 
              'text-gray-400'
            }`}
          >
            <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 
              ${currentPage > index + 1 ? 'border-green-500 bg-green-500 text-white' : 
                currentPage === index + 1 ? 'border-blue-500 bg-blue-500 text-white' : 
                'border-gray-400'}`}
            >
              {index + 1}
            </div>
            <span className="text-sm mt-2">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
