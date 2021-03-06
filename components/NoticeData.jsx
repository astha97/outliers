import React, { Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import SideModal from './SideModal';
import '../styles/notice-data.css';




/*{function NoticeData({ category, title, date, onClick }) {
  return (
    <div className="notice-row" onClick={openModal}>
      <div className="notice-text">{category}</div>
      <div className="notice-text">{title}</div>
      <div className="notice-text">{date}</div>
    </div>
  );
}}*/
class NoticeData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const {showModal}=this.state;
    const {category} = this.props;
    const {title} = this.props;
    const {date} = this.props;
    const {onClick}=this.props;
    
      return (
      <Fragment>
      <div className="notice-row" onClick={this.openModal}>
      <div className="notice-text">{category}</div>
      <div className="notice-text">{title}</div>
      <div className="notice-text">{date}</div>
      </div>
      <SideModal show={showModal} onExit={this.closeModal} />
      </Fragment>
      );
    }
  }
  

NoticeData.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NoticeData;
