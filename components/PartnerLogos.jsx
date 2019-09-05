import React from 'react';

import '../styles/partner-logos.css';

export default function LogoSection() {
  const logos = {
    buzzfeed: '/static/images/partners_list/GEMC.png',
    glamour: '/static/images/partners_list/Bioface.png',
    new_yorker: '/static/images/partners_list/milestone_company.jpg',
    gemc: '/static/images/partners_list/milestone_company.jpg',
    emc: '/static/images/partners_list/milestone_company.jpg',
    0: '/static/images/partners_list/mckinley_logo.png',
  };

  return (
    <div className="logo-section">
      {Object.keys(logos).map(key => <img key={key} src={logos[key]} alt={key} className="logo-section__logo" />)}
    </div>
  );
}
