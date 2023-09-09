import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  onChange = e => {
    this.props.onFilterChange(e.target.value);
  };

  render() {
    return (
      <>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Find contacts by name
            </label>
            <input
              type="text"
              name="filter"
              value={this.props.filter}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.onChange}
            />
          </div>
        </form>
      </>
    );
  }
}

export default Filter;

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
};
