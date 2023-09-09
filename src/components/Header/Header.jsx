import { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.google.com/">
            Homework-DM-02
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="container-fluid justify-content-start">
              <button
                className="btn btn-sm btn-outline-success me-2"
                type="button"
                onClick={this.props.showFeedback}
              >
                Feedback
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

Header.propTypes = {
  showFeedback: PropTypes.func,
  showContacts: PropTypes.func,
};
