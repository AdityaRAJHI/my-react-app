import React, { useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    address: '123 Food Street, Foodville, FC 12345',
    preferences: {
      vegetarian: false,
      glutenFree: false,
      nutFree: true
    }
  });

  const handlePreferenceChange = (preference) => {
    setProfile(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: !prev.preferences[preference]
      }
    }));
  };

  return (
    <div className="profile-page">
      <h1 className="page-title">Profile</h1>
      <div className="profile-container">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="profile-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" value={profile.name} readOnly />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={profile.email} readOnly />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" value={profile.phone} readOnly />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" value={profile.address} readOnly />
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Dietary Preferences</h2>
          <div className="preferences-grid">
            <div className="preference-item">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={profile.preferences.vegetarian}
                  onChange={() => handlePreferenceChange('vegetarian')}
                />
                <span className="toggle-slider"></span>
              </label>
              <span>Vegetarian</span>
            </div>
            <div className="preference-item">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={profile.preferences.glutenFree}
                  onChange={() => handlePreferenceChange('glutenFree')}
                />
                <span className="toggle-slider"></span>
              </label>
              <span>Gluten Free</span>
            </div>
            <div className="preference-item">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={profile.preferences.nutFree}
                  onChange={() => handlePreferenceChange('nutFree')}
                />
                <span className="toggle-slider"></span>
              </label>
              <span>Nut Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
