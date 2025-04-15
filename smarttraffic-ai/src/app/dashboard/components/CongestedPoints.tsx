export default function CongestedPoints() {
    const congestedPoints = [
      { point: 'Intersection A', level: 90 },
      { point: 'Intersection B', level: 75 },
      { point: 'Intersection C', level: 85 },
    ];
  
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Most Congested Points</h2>
        <div className="space-y-4 mt-6">
          {congestedPoints.map((item) => (
            <div key={item.point} className="flex items-center space-x-4">
              <div className="w-1/3">{item.point}</div>
              <div className="w-2/3 bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  