import { Component } from 'react';
// import PropTypes from 'prop-types';

import css from 'components/imageFinder.module.css';

class ImageGalleryItem extends Component {
  render() {
    const images = this.props.images;
    return (
      <>
        <div className="container">
          <ul className={css.ImageGallery}>
            {images.map(({ webformatURL, id, tags, largeImageURL }) => {
              return (
                <li
                  key={id}
                  className={css.ImageGalleryItem}
                  onClick={() => this.props.showImage({ largeImageURL })}
                >
                  <img
                    src={webformatURL}
                    alt={tags}
                    className={css.ImageGalleryItemImage}
                  />
                </li>
              );
            })}
          </ul>
          <button>Load more...</button>
        </div>
      </>
    );
  }
}

export default ImageGalleryItem;

// Header.propTypes = {
//   showFeedback: PropTypes.func,
//   showContacts: PropTypes.func,
// };
