import React from 'react';
import PropTypes from 'prop-types';
import '../styles/side-modal.css';

/* {function SideModal({ children }) {
  return (
    <div className="tile-teaser__heading">
      {children}
    </div>
  );
}

SideModal.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SideModal;} */

function SideModal({ show, onExit }) {
  return (
    <div className={`modal__backdrop ${show ? 'modal__backdrop--show' : ''}`}>
      <div className="side_modal">
        <div className="modal__title-bar">
          <span className="modal__title">Title of Modal</span>
          <button type="button" className="modal__btn-close" onClick={onExit}>
            ⨯
          </button>
        </div>
        <div className="modal__content-box">
          <h1>Title</h1>
          {Array(3)
            .fill(
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aspernatur tenetur ea minima eveniet? Praesentium tempora perspiciatis non
                        enim provident dolores, illum suscipit, earum odit eveniet fugiat cum eius. Maxime, eaque?`,
            )
            .join('')}
        </div>
      </div>
    </div>
  );
}
SideModal.propTypes = {
  // children: PropTypes.oneOfType(
  //   PropTypes.node,
  //   PropTypes.arrayOf(PropTypes.node),
  // ),
  show: PropTypes.bool,
  onExit: PropTypes.func.isRequired,
};

SideModal.defaultProps = {
  // children: '',
  show: false,
};

export default SideModal;
