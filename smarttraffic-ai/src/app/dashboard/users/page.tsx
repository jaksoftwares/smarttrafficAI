'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button2";
import { Table } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Pencil, Trash2 } from 'lucide-react';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'disabled';
  joined: string;
};

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice Njeri',
    email: 'alice@smarttraffic.ai',
    role: 'Admin',
    status: 'active',
    joined: '2024-02-10',
  },
  {
    id: '2',
    name: 'John Otieno',
    email: 'john.otieno@smarttraffic.ai',
    role: 'Analyst',
    status: 'disabled',
    joined: '2024-03-15',
  },
  {
    id: '3',
    name: 'Grace Kamau',
    email: 'grace.k@smarttraffic.ai',
    role: 'Officer',
    status: 'active',
    joined: '2024-05-01',
  },
];

const UserManagementPage = () => {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role.toLowerCase() === roleFilter.toLowerCase();
    return matchesSearch && matchesRole;
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-white">User Management</h1>
      <p className="text-gray-300 text-lg">Manage SmartTraffic AI system users, their roles, and access levels.</p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-800 p-4 rounded-lg shadow">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2"
        />
        <Select onValueChange={(value) => setRoleFilter(value)} defaultValue="all">
          <SelectTrigger className="w-full md:w-52">
            <SelectValue placeholder="Filter by Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="Analyst">Analyst</SelectItem>
            <SelectItem value="Officer">Officer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* User Table */}
      <Card className="bg-gray-900 text-white border border-gray-700">
        <CardContent className="p-0">
          <Table className="w-full text-sm">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Joined</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-800 transition">
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className={`p-4 capitalize ${user.status === 'active' ? 'text-green-400' : 'text-red-400'}`}>
                    {user.status}
                  </td>
                  <td className="p-4">{user.joined}</td>
                  <td className="p-4 flex gap-3">
                    <Button variant="ghost" className="text-indigo-400 hover:text-indigo-600">
                      <Pencil size={18} />
                    </Button>
                    <Button variant="ghost" className="text-red-400 hover:text-red-600">
                      <Trash2 size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-4 text-center text-gray-500">No users found.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagementPage;
