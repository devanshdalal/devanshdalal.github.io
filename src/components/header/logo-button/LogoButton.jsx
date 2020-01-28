import React, { useState, useEffect } from 'react';

import './logo-button.css';
import { getUserInfoCached } from 'utils/helpers';

const LogoButton = () => {
  const [src, setSrc] = useState('');
  useEffect(() => {
    const fetchSrc = async () => {
      const info = await getUserInfoCached()
      setSrc(info.avatar_url)
    };
    fetchSrc()
  }, []);
  
  return (
    <div className="logo">
      <img className="logo-icon" src={src} alt="No Logo" />
    </div>
  )
};

export default LogoButton;
