const RecentActivity = () => {
    const activities = [
      { user: "John Doe", action: "Logged in", time: "2 mins ago" },
      { user: "Admin", action: "Updated settings", time: "10 mins ago" },
      { user: "Jane Smith", action: "Added new user", time: "1 hour ago" },
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-bold">Recent Activity</h3>
        <ul className="mt-4 space-y-3">
          {activities.map((activity, index) => (
            <li key={index} className="flex justify-between items-center text-sm text-gray-700 border-b pb-2">
              <span>{activity.user} {activity.action}</span>
              <span className="text-gray-500">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentActivity;
  