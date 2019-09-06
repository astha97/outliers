import React ,{Component} from 'react';
//import React from 'react';
import '../styles/careers.css';
// import Carousel from '../components/Carousel';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import TitleDescGrid from '../components/TitleDescGrid';
import RolesSection from '../components/RolesSection';
import Carousel2 from '../components/Carousel2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/carousel.css';
import Tab from '../components/Tab';

import '../styles/global.css';

class careers2 extends Component{
   constructor(props){
    super(props);
    this.state={
        tab:0,
    };
     this.changeTab=this.changeTab.bind(this);

   }

   changeTab(tab){
    this.setState({tab});
}
render(){
    const{tab}=this.state;
    return(
        <Layout heroText="우리가 즐거워야 즐거운 서비스가 만들어집니다.">
    { /* <div className="contact_image">
        <img className="team__image" src="../static/images/career_img-3.jpg" alt="" />
  </div>*/}
    <Carousel2/>
      {/* <Carousel data={carouselData} noOfTiles={3} /> */}
      <Heading>
        에이네 팀의 목표달성이 또 하나의 삶의 목표가 되어가는, 책임을 전제한 자유를 즐길 줄 아는
        능동적인 팀원을 기다립니다.
      </Heading>
      <TitleDescGrid />
      <Heading>
        <strong>전체 / 진행 중 / 상시 채용</strong>
      </Heading>
      <div>
          <header className="header">
          <ul className="navigation">
             <li><Tab selected={tab===0}text="SignUp" onClick={()=>this.changeTab(0)}></Tab></li>
             <li><Tab selected={tab===1}text="SignIn" onClick={()=>this.changeTab(1)}></Tab></li>
                    </ul> 

          </header>
          <div className="form">
                        {tab===0 && <RolesSection/>}
                        {tab===1 && <RolesSection/>}
                    </div>
      </div>
      <RolesSection />
    </Layout>
    );
}

}
export default careers2;