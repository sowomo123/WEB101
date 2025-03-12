import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: "Sonam wangmo",
      role: "Front-End Developer",
      avatar: "react-app/WhatsApp Image 2024-08-14 at 01.38.27_719dcac0 - Copy (2).jpg",
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      id: 2,
      name: "Pema Dem",
      role: "Product Designer",
      avatar: "react-app/Sunset_2007-1 - Copy (2).jpg",
      skills: ["Figma", "Wireframing", "Prototyping"]
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Profile</h1>
      </header>
      <div className="profiile-container">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            avatar={profile.avatar}
            skills={profile.skills}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
