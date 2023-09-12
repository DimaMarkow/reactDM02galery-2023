import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from 'components/imageFinder.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModalOnClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModalOnClick);
  }

  closeModalOnClick = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.closeModalOnClick}>
        <div className={css.Modal}>
          <img src={this.props.imageDetail} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  imageDetail: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
