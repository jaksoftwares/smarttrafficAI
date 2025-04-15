const QuickActions = () => {
    const actions = [
      { label: "Add User", link: "/admin/users/new" },
      { label: "View Reports", link: "/admin/reports" },
      { label: "Manage Roles", link: "/admin/roles" },
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-bold">Quick Actions</h3>
        <ul className="mt-4 space-y-3">
          {actions.map((action, index) => (
            <li key={index}>
              <a href={action.link} className="text-blue-600 hover:underline">{action.label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default QuickActions;
  