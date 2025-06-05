const AvgTransitDelayDetails = () => {
    return (
      <div>
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300">Transit Delay Insights</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Commuters are facing an average delay of <strong>15 minutes</strong> during peak hours. This is influenced by
          ongoing roadworks and increased traffic volume.
        </p>
        <div className="mt-4">
          <p className="font-semibold text-sm">Key Contributing Factors:</p>
          <ul className="list-disc ml-5 text-sm">
            <li>Increased morning congestion</li>
            <li>Delayed accident clearance</li>
            <li>Weather disruptions</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default AvgTransitDelayDetails;
  