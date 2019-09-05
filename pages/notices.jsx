import React from 'react';

// Import components
import NoticeData from '../components/NoticeData';
import Layout from '../components/Layout';

function Notices() {
  return (
    <Layout heroText="Everyone has a story to tell. This is ours.">
      <NoticeData category="1" title="test" date="Test" onClick/>
      <NoticeData category="1" title="test" date="Test" onClick/>
      <NoticeData category="1" title="test" date="Test" onClick/>
    </Layout>
  );
}

export default Notices;
