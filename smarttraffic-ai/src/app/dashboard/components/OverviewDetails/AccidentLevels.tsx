const AccidentLevelDetails = () => {
    return (
      <div>
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Accident Level Overview</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          The accident level is currently categorized as <strong>High</strong>, indicating an increase in road incidents
          across the monitored region. Authorities are advised to deploy extra patrol and implement preventive measures.
        </p>
        <ul className="list-disc ml-5 mt-4 text-sm">
          <li>Spike observed in highway collisions</li>
          <li>Increased pedestrian incidents</li>
          <li>Weather-related factors contributing</li>
        </ul>
      </div>
    );
  };
  
  export default AccidentLevelDetails;
  