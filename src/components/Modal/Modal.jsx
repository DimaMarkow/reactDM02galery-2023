import { Component } from 'react';
import css from 'components/imageFinder.module.css';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC);
  }

  handlePressESC = e => {
    // if (e.code === 'Escape') this.props.closeModal();
    this.props.closeModal();
  };

  render() {
    const { closeModal } = this.props;
    return (
      <div
        className="modal fade show"
        style={{ display: 'block', backdropFilter: 'blur(5px)' }}
      >
        {/* <div className="modal-dialog"> */}
        <div className="container">
          <div className={css.Modal}>
            <div className="modal-content ">
              <div className="modal-header">
                {/* <h5 className="modal-title"> Modal</h5> */}
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div>
                <img
                  src={this.props.imageDetail}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
    // return (
    //   <div id="carouselExample" className="carousel slide">
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img
    //           src={this.props.imageDetail}
    //           className="d-block w-100"
    //           alt="..."
    //         />
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default Modal;
