import React, { useState } from 'react';
import Header from './Header';
import ProfileCard from './ProfileCard';
import EditForm from './EditForm';
import StatsDashboard from './StatsDashboard';
import './App.css';

function App() {
  const [userData, setUserData] = useState({
    name: "Sonam Wangmo",
    bio: "Software Student",
    avatar: "https://th.bing.com/th/id/OIP.dW1BmZ17CnWkGgZdzNIGfAHaEK?rs=1&pid=ImgDetMain",
    location: "Phuentsholing, Bhutan",
    email: "02240363.cst@rub.edu.bt"
  });
 
  const [isEditing, setIsEditing] = useState(false);
 
  const updateUserData = (updatedData) => {
    setUserData(updatedData);
    setIsEditing(false); // 
  };

  return (
    <div className="app">
      <Header />
      <ProfileCard user={userData} onEdit={() => setIsEditing(true)} />
      {isEditing && <EditForm user={userData} onUpdate={updateUserData} onCancel={() => setIsEditing(false)} />}
      <StatsDashboard user={userData} />
    </div>
  );
}

export default App; 