'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@radix-ui/react-select';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DatePicker, Switch, Input, message } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

interface UserSettings {
  name: string;
  email: string;
  password: string;
  notificationType: string;
  preferredDate: Dayjs;
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

  // Load saved settings (from localStorage)
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

  function validate() {
    const errs: { [key: string]: string } = {};
    if (!settings.name.trim()) errs.name = 'Name is required';
    if (!settings.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(settings.email)) errs.email = 'Invalid email address';

    if (settings.password && settings.password.length < 6)
      errs.password = 'Password must be at least 6 characters';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  // Fix: Use proper type for event
  // function handleInputChange(
  //   key: keyof UserSettings,
  //   e: ChangeEvent<HTMLInputElement>
  // ) {
  //   setSettings((prev) => ({ ...prev, [key]: e.target.value }));
  //   setErrors((prev) => ({ ...prev, [key]: '' }));
  // }

  // Switches send boolean directly
  function handleSwitchChange(key: keyof UserSettings, checked: boolean) {
    setSettings((prev) => ({ ...prev, [key]: checked }));
  }

  // DatePicker change handler
  // function handleDateChange(date: Dayjs | null) {
  //   if (date) setSettings((prev) => ({ ...prev, preferredDate: date }));
  // }

  function saveSettings() {
    if (!validate()) {
      message.error('Please fix the errors in the form before saving.');
      return;
    }

    localStorage.setItem('user-settings', JSON.stringify(settings));
    message.success('Settings saved successfully!');
  }

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
            {/* <Input
              value={settings.name}
              onChange={(e) => handleInputChange('name', e)}
              placeholder="John Doe"
              status={errors.name ? 'error' : ''}
            /> */}
            {errors.name && <small className="text-red-600">{errors.name}</small>}
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Email Address *</span>
            {/* <Input
              type="email"
              value={settings.email}
              onChange={(e) => handleInputChange('email', e)}
              placeholder="john@example.com"
              status={errors.email ? 'error' : ''}
            /> */}
            {errors.email && <small className="text-red-600">{errors.email}</small>}
          </label>

          <label className="flex flex-col">
            <span className="text-gray-700 dark:text-gray-300 font-medium">New Password</span>
            {/* Use Input.Password correctly */}
            {/* <Input.Password
              value={settings.password}
              onChange={(e) => handleInputChange('password', e)}
              placeholder="Leave blank to keep current password"
              status={errors.password ? 'error' : ''}
            /> */}
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
            onValueChange={(value) => setSettings((prev) => ({ ...prev, notificationType: value }))}
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
            onChange={(checked) => handleSwitchChange('darkMode', checked)}
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
            onChange={(checked) => handleSwitchChange('locationSharing', checked)}
          />
          <span className="text-gray-700 dark:text-gray-300 font-medium select-none">Share Location with App</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <Switch
            checked={settings.autoUpdate}
            onChange={(checked) => handleSwitchChange('autoUpdate', checked)}
          />
          <span className="text-gray-700 dark:text-gray-300 font-medium select-none">Enable Auto Updates</span>
        </label>
      </section>

      {/* Date & Time Section */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Date & Time Settings</h2>

        {/* <DatePicker
          value={settings.preferredDate.toDate()} // convert Dayjs to Date for AntD DatePicker
          onChange={(date) => handleDateChange(date)}
          className="w-full"
          disabledDate={(current) => current && current > dayjs().endOf('day')}
          allowClear={false}
        /> */}
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
