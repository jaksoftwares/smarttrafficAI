const IntersectionBDetails = () => {
    return (
      <div>
        <h3 className="text-xl font-bold">Intersection B</h3>
        <p>Congestion Level: 75%</p>
        <p>Details about Intersection B, including its congestion history and contributing factors.</p>
        <div className="mt-2 bg-gray-300 dark:bg-gray-600 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
        </div>
      </div>
    );
  };
  
  export default IntersectionBDetails;
  