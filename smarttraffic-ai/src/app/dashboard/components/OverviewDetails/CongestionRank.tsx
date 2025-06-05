const CACongestionRankDetails = () => {
    return (
      <div>
        <h3 className="text-xl font-bold text-green-600 dark:text-green-400">CA Congestion Ranking</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          California currently ranks <strong>3rd</strong> in national traffic congestion statistics. Efforts are ongoing to
          improve road efficiency and reduce gridlocks.
        </p>
        <div className="mt-4">
          <p className="font-semibold text-sm">Comparison to Last Month:</p>
          <ul className="list-disc ml-5 text-sm">
            <li>Last Month Rank: 2nd</li>
            <li>Average congestion time reduced by 4%</li>
            <li>Downtown traffic flow improved by 10%</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default CACongestionRankDetails;
  