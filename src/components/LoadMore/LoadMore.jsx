import { Component } from 'react';

import css from 'components/imageFinder.module.css';

class LoadMore extends Component {
  render() {
    return (
      <div className="container">
        <div className={css.ButtonLoadMore}>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.props.onLoadMore}
          >
            Load more...
          </button>
        </div>
      </div>
    );
  }
}

export default LoadMore;
