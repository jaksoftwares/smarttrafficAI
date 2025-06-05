const AccidentsDetails = () => {
    return (
      <div>
        <h3 className="text-xl font-bold text-red-600 dark:text-red-400">Accident Report Summary</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          A total of <strong>42 accidents</strong> have been reported this month. Compared to last month, this reflects a
          12% increase.
        </p>
        <div className="mt-4">
          <p className="font-semibold text-sm">Top 3 Affected Zones:</p>
          <ol className="list-decimal ml-5 text-sm">
            <li>Zone A - 15 accidents</li>
            <li>Zone C - 11 accidents</li>
            <li>Zone D - 8 accidents</li>
          </ol>
        </div>
      </div>
    );
  };
  
  export default AccidentsDetails;
  