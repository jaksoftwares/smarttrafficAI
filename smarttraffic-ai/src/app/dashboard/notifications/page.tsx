'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

type Notification = {
  id: string;
  type: 'alert' | 'info' | 'warning' | 'success';
  message: string;
  createdAt: Date;
  read: boolean;
};

const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'alert',
    message: 'High congestion detected on Highway 24.',
    createdAt: new Date(Date.now() - 3600 * 1000 * 2), // 2 hours ago
    read: false,
  },
  {
    id: '2',
    type: 'info',
    message: 'Scheduled maintenance on traffic sensors tomorrow.',
    createdAt: new Date(Date.now() - 3600 * 1000 * 24 * 1), // 1 day ago
    read: true,
  },
  {
    id: '3',
    type: 'warning',
    message: 'Road closure reported at 5th Avenue due to construction.',
    createdAt: new Date(Date.now() - 3600 * 1000 * 5), // 5 hours ago
    read: false,
  },
  {
    id: '4',
    type: 'success',
    message: 'New traffic pattern analytics report is available.',
    createdAt: new Date(Date.now() - 3600 * 1000 * 12), // 12 hours ago
    read: true,
  },
];

// Helper to format time ago
function timeAgo(date: Date) {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);
  const [filter, setFilter] = useState<'all' | Notification['type']>('all');

  // Filter notifications based on selected type
  const filteredNotifications =
    filter === 'all'
      ? notifications
      : notifications.filter((n) => n.type === filter);

  // Toggle read/unread status
  function toggleRead(id: string) {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  }

  // Clear all read notifications
  function clearRead() {
    setNotifications((prev) => prev.filter((n) => !n.read));
  }

  return (
    <div className="p-6 space-y-6 min-h-full bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Notifications</h1>

      {/* Filter and Clear */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <Select value={filter} onValueChange={(value) => setFilter(value as typeof filter)}>
        <SelectTrigger className="w-full sm:w-48">
          <SelectValue placeholder="Filter notifications" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="alert">Alerts</SelectItem>
          <SelectItem value="info">Info</SelectItem>
          <SelectItem value="warning">Warnings</SelectItem>
          <SelectItem value="success">Success</SelectItem>
        </SelectContent>
      </Select>

        <Button variant="destructive" onClick={clearRead} className="w-full sm:w-auto">
          Clear Read Notifications
        </Button>
      </div>

      {/* Notifications List */}
      {filteredNotifications.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">No notifications to display.</p>
      ) : (
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {filteredNotifications.map(({ id, type, message, createdAt, read }) => (
            <Card
              key={id}
              className={`p-4 flex justify-between items-center border-l-4
                ${
                  type === 'alert' ? 'border-red-500 bg-red-900/30' :
                  type === 'info' ? 'border-blue-500 bg-blue-900/30' :
                  type === 'warning' ? 'border-yellow-400 bg-yellow-900/30' :
                  type === 'success' ? 'border-green-500 bg-green-900/30' : ''
                }
                ${read ? 'opacity-60' : 'opacity-100'}
              `}
            >
              <div>
                <p className="font-semibold">{message}</p>
                <p className="text-sm text-gray-300">{timeAgo(createdAt)}</p>
              </div>
              <Button
                variant={read ? 'outline' : 'default'}
                onClick={() => toggleRead(id)}
                size="sm"
              >
                {read ? 'Mark Unread' : 'Mark Read'}
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
