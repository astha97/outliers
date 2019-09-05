import React from 'react';
import '../styles/careers.css';
// import Carousel from '../components/Carousel';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import TitleDescGrid from '../components/TitleDescGrid';
import RolesSection from '../components/RolesSection';

import '../styles/global.css';

function Careers() {
  // const workEthics = {
  //   0: {
  //     title: 'Logical',
  //     content: '일을 하는 목적을 끊임 없이 생각하며 일합니다. 나의 생각을 한 문장으로 설명할 수 있을 때에 행동합니다.',
  //   },
  //   1: {
  //     title: 'Ownership',
  //     content: '누군가 일을 시키지 않습니다. 맡은 서비스와 역할에 대해 오너로서, 본인의 할 일은 스스로 판단합니다',
  //   },
  //   2: {
  //     title: 'Horizontal',
  //     content: "Nickname과 '님' 호칭을 통해 직급이 없는 수평적 기업문화를 갖춥니다.",
  //   },
  //   3: {
  //     title: 'Transparency',
  //     content: "불필요한 '보고'와 '승인' 절차를 없앱니다. 핵심에 집중할 수 있도록 모든 정보의 공유와 개방을 추구합니다.",
  //   },
  //   4: {
  //     title: 'Trust',
  //     content: '서로의 실력과 경험에 대해 신뢰하며, 신의를 지켜 팀 전체의 목표 달성에 주도적으로 기여합니다.',
  //   },
  // };

  // const carouselData = {
  //   0: {
  //     title: '우리는 상식적인 생각과 논리로 일합니다.',
  //     imgSrc: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1153&q=80',
  //   },
  //   1: {
  //     title: '우리는 일하는게 재미있습니다.',
  //     imgSrc: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  //   },
  //   2: {
  //     title: '우리는 즐거운 서비스를 만듭니다.',
  //     imgSrc: 'https://images.unsplash.com/photo-1473073957860-e6eb51b91b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
  //   },
  // };
  return (
    <Layout heroText="우리가 즐거워야 즐거운 서비스가 만들어집니다.">
      <div className="contact_image">
        <img className="team__image" src="../static/images/career_img-3.jpg" alt="" />
      </div>
      {/* <Carousel data={carouselData} noOfTiles={3} /> */}
      <Heading>
        에이네 팀의 목표달성이 또 하나의 삶의 목표가 되어가는, 책임을 전제한 자유를 즐길 줄 아는
        능동적인 팀원을 기다립니다.
      </Heading>
      <TitleDescGrid />
      <Heading>
        <strong>전체 / 진행 중 / 상시 채용</strong>
      </Heading>
      <RolesSection />
    </Layout>
  );
}

export default Careers;
