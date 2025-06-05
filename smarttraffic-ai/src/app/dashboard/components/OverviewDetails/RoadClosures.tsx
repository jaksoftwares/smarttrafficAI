const RoadClosuresDetails = () => {
    return (
      <div>
        <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-300">Current Road Closures</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          There are currently <strong>5 road closures</strong> in effect due to ongoing accident investigations and
          clearance operations.
        </p>
        <ul className="mt-4 text-sm list-disc ml-5">
          <li>Highway 101 - Northbound</li>
          <li>5th Avenue - Construction zone</li>
          <li>Elm Street - Collision aftermath</li>
          <li>Ridge Road - Debris removal</li>
          <li>Main Street - Infrastructure damage</li>
        </ul>
      </div>
    );
  };
  
  export default RoadClosuresDetails;
  