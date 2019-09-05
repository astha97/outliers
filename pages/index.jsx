import React, { Fragment } from 'react';
import CompanyLogo from '../components/CompanyLogo';
import MainIntro from '../components/MainIntro';
import FeaturedMedia from '../components/FeaturedMedia';
import FeaturedMediaWithCard from '../components/FeaturedMediaWithCard';
import PartnerLogos from '../components/PartnerLogos';
import Footer from '../components/Footer';
import '../styles/global.css';
import Main from './Main.jsx';

const Index = () => (
  <Main/>
 
  /*<Fragment>
    <CompanyLogo />
    <MainIntro />
    <FeaturedMedia src="https://www.youtube.com/embed/tzzfnVmCPfk" video />
    <FeaturedMediaWithCard
      title="Identity Co-creation
      Platform "
      src="../static/images/main_identity.jpg"
    >
      지금 내가 하는 생각,
      <br />
      내가 자주 가는 곳,
      <br />내 곁에 있는 사람들
      <br />
      <br />
      나를 말해주는 것들을 통해 나를 찾기.
    </FeaturedMediaWithCard>

    <PartnerLogos />
    <Footer />
  </Fragment>*/
);

export default Index;
