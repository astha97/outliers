import React ,{Component,Fragment} from 'react';
//import React, { Fragment } from 'react';
import CompanyLogo from '../components/CompanyLogo';
import MainIntro from '../components/MainIntro';
import FeaturedMedia from '../components/FeaturedMedia';
import FeaturedMediaWithCard from '../components/FeaturedMediaWithCard';
import PartnerLogos from '../components/PartnerLogos';
import Footer from '../components/Footer';
import '../styles/global.css';
import '../components/LoginModal';
import Modal from 'react-awesome-modal';
import LoginModal from '../components/LoginModal';

class Main extends Component{
    
        state={
            modal:false,
    
        };
    
    
    openModal(){
        this.setState({
            modal:true,
        })
    }

    closeModal(){
        this.setState({
            modal:false,
        })
    }
    render(){
        return(
            <Fragment>
    <CompanyLogo />in

    <Modal
      visible={this.state.modal}
      width="550"
      height="375"
      effect="fadeInUp"
      onClickAway={() => this.closeModal()}
    >
        <LoginModal/>
        
   </Modal>
    <button onClick={() => this.openModal()} className="btn btn-success float-right mr-2">login</button>
    
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
  </Fragment>

        );
    }

}
export default Main;
