import React, { useState } from 'react';

function Settings() {
  const [settings, setSettings] = useState({
    theme: 'light',
    fontSize: 'medium',
    notifications: true,
    language: 'en'
  });

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const saveSettings = () => {
    console.log('Settings saved:', settings);
    // Implement save logic here
  };

  const resetSettings = () => {
    setSettings({
      theme: 'light',
      fontSize: 'medium',
      notifications: true,
      language: 'en'
    });
    console.log('Settings reset to default');
  };

  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>
      
      <div className="settings-section">
        <h2>Theme Customization</h2>
        <div className="settings-grid">
          <div className="setting-item">
            <label>Theme</label>
            <select 
              value={settings.theme}
              onChange={(e) => handleSettingChange('theme', e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
          
          <div className="setting-item">
            <label>Font Size</label>
            <select 
              value={settings.fontSize}
              onChange={(e) => handleSettingChange('fontSize', e.target.value)}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2>Preferences</h2>
        <div className="settings-grid">
          <div className="setting-item">
            <label>
              <input 
                type="checkbox" 
                checked={settings.notifications}
                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
              />
              Enable Notifications
            </label>
          </div>
          
          <div className="setting-item">
            <label>Language</label>
            <select 
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="save-btn" onClick={saveSettings}>Save Settings</button>
        <button className="reset-btn" onClick={resetSettings}>Reset to Default</button>
      </div>
    </div>
  );
}

export default Settings;
