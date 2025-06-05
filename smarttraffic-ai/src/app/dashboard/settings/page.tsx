'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@radix-ui/react-select';
import { DatePicker, Switch, Input, message } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

interface UserSettings {
  name: string;
  email: string;
  password: string;
  notificationType: string;
  preferredDate: Dayjs | null;
  darkMode: boolean;
  locationSharing: boolean;
  autoUpdate: boolean;
}

const defaultSettings: UserSettings = {
  name: '',
  email: '',
  password: '',
  notificationType: 'all',
  preferredDate: dayjs(),
  darkMode: false,
  locationSharing: false,
  autoUpdate: true,
};

export default function Settings() {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Simulate loading saved settings (e.g., from API or localStorage)
  useEffect(() => {
    const saved = localStorage.getItem('user-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings({
          ...defaultSettings,
          ...parsed,
          preferredDate: parsed.preferredDate ? dayjs(parsed.preferredDate) : dayjs(),
        });
      } catch {}
    }
  }, []);

  // Validation function
  function validate() {
    const errs: { [key: string]: string } = {};
    if (!settings.name.trim()) errs.name = 'Name is required';
    if (!settings.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(settings.email)) errs.email = 'Invalid email address';

    // Password optional but if filled must meet criteria
    if (settings.password && settings.password.length < 6)
      errs.password = 'Password must be at least 6 characters';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  // Handle input changes
  function handleChange<K extends keyof UserSettings>(key: K, value: UserSettings[K]) {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' })); // clear error on change
  }

  // Save handler
  function saveSettings() {
    if (!validate()) {
      message.error('Please fix the errors in the form before saving.');
      return;
    }

    // Simulate API save with localStorage
    localStorage.setItem('user-settings', JSON.stringify(settings));
    message.success('Settings saved successfully!');
  }

  // Reset handler
  function resetSettings() {
    setSettings(defaultSettings);
    setErrors({});
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg space-y-10">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">User Settings</h1>

      {/* Profile Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Profile Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <label className="flex flex-col">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Full Name *</span>
            <Input
              value={settings.name}
              onChange={(e) => handleChange('name', (e.target as HTMLInputElement).value)}
              placeholder="John Doe"
              status={errors.name ? 'error' : ''}
            />
            {errors.name && <small className="text-red-600">{errors.name}</small>}
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Email Address *</span>
            <Input
              type="email"
              value={settings.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="john@example.com"
              status={errors.email ? 'error' : ''}
            />
            {errors.email && <small className="text-red-600">{errors.email}</small>}
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 dark:text-gray-300 font-medium">New Password</span>
            <Input.Password
              value={settings.password}
              onChange={(e) => handleChange('password', e.target.value)}
              placeholder="Leave blank to keep current password"
              status={errors.password ? 'error' : ''}
            />
            {errors.password && <small className="text-red-600">{errors.password}</small>}
          </label>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Notification Preferences</h2>

        <label className="flex flex-col">
          <span className="text-gray-700 dark:text-gray-300 font-medium mb-2">Notification Type</span>
          <Select
            value={settings.notificationType}
            onValueChange={(value) => handleChange('notificationType', value)}
          >
            <SelectTrigger className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 cursor-pointer">
              <SelectValue placeholder="Select notification type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Notifications</SelectItem>
              <SelectItem value="alert">Alerts Only</SelectItem>
              <SelectItem value="info">Info Only</SelectItem>
              <SelectItem value="warning">Warnings Only</SelectItem>
              <SelectItem value="success">Success Messages</SelectItem>
            </SelectContent>
          </Select>
        </label>
      </section>

      {/* Appearance Section */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Appearance</h2>

        <label className="flex items-center gap-3 cursor-pointer">
          <Switch
            checked={settings.darkMode}
            onChange={(checked) => handleChange('darkMode', checked)}
          />
          <span className="text-gray-700 dark:text-gray-300 font-medium select-none">Enable Dark Mode</span>
        </label>
      </section>

      {/* Privacy Section */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Privacy & Security</h2>

        <label className="flex items-center gap-3 cursor-pointer">
          <Switch
            checked={settings.locationSharing}
            onChange={(checked) => handleChange('locationSharing', checked)}
          />
          <span className="text-gray-700 dark:text-gray-300 font-medium select-none">
            Share Location with App
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <Switch
            checked={settings.autoUpdate}
            onChange={(checked) => handleChange('autoUpdate', checked)}
          />
          <span className="text-gray-700 dark:text-gray-300 font-medium select-none">
            Enable Auto Updates
          </span>
        </label>
      </section>

      {/* Date & Time Section */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Date & Time Settings</h2>

        <DatePicker
          value={settings.preferredDate}
          onChange={(date) => handleChange('preferredDate', date)}
          className="w-full"
          disabledDate={(current) => current && current > dayjs().endOf('day')}
          allowClear={false}
        />
      </section>

      {/* Action Buttons */}
      <section className="flex gap-4 mt-8">
        <Button variant="default" type="button" onClick={saveSettings}>
          Save Changes
        </Button>
        <Button variant="outline" type="button" onClick={resetSettings}>
          Reset to Defaults
        </Button>
      </section>
    </div>
  );
}
