import { Users, Activity, Database, BarChart3 } from "lucide-react";

const OverviewStats = () => {
  const stats = [
    { 
      title: "Total Users", 
      value: "1,245", 
      icon: <Users className="w-7 h-7" />, 
      bgColor: "bg-blue-500" 
    },
    { 
      title: "Active Sessions", 
      value: "56", 
      icon: <Activity className="w-7 h-7" />, 
      bgColor: "bg-green-500" 
    },
    { 
      title: "System Health", 
      value: "Good", 
      icon: <Database className="w-7 h-7" />, 
      bgColor: "bg-yellow-500" 
    },
    { 
      title: "Traffic Today", 
      value: "12,340", 
      icon: <BarChart3 className="w-7 h-7" />, 
      bgColor: "bg-red-500" 
    },
  ];

  return (
    <div className="w-full px-6"> {/* Full-width wrapper with padding */}
      <div className="flex justify-between items-center gap-8 w-full">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="group relative flex-[1_1_22%] p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 border border-gray-200 hover:border-gray-300"
          >
            <div className="flex items-start justify-between">
              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>

              {/* Icon with Background */}
              <div className={`${stat.bgColor} rounded-lg p-3 shadow-md transition-colors duration-300`}>
                {stat.icon}
              </div>
            </div>

            {/* Accent Bar at Bottom */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${stat.bgColor} opacity-10 rounded-b-xl`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewStats;
