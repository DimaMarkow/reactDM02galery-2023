import { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  filter: '',
};
class Header extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFilterChange(this.state.filter);
    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.google.com/">
            Homework-DM-02-gallery
          </a>

          <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              name="filter"
              placeholder="Search"
              aria-label="Search"
              value={this.state.filter}
              onChange={this.handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
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
