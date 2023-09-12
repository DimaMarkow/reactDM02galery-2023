import { Component } from 'react';
import getPictures from 'services/getPictures';
import ErrorCard from '../ErrorCard/ErrorCard';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import LoadMore from 'components/LoadMore/LoadMore';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

class ContentInfo extends Component {
  state = {
    images: [],
    error: '',
    status: STATUS.IDLE,
    imageDetail: '',
    showModal: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ page: 1, images: [] });
    }
    if (
      prevProps.searchText !== this.props.searchText ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: STATUS.PENDING });
      try {
        const newImages = await getPictures(
          this.props.searchText,
          this.state.page
        );
        this.setState(prevstate => ({
          images: [...prevstate.images, ...newImages],
          status: STATUS.RESOLVED,
        }));
      } catch (error) {
        this.setState({ error, status: STATUS.REJECTED });
      }
    }
  }

  showImage = ({ largeImageURL }) => {
    this.setState({
      imageDetail: largeImageURL,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  onLoadMore = () => {
    this.setState(prevstate => ({
      page: prevstate.page + 1,
    }));
  };

  render() {
    const { showModal, imageDetail, error } = this.state;
    if (this.state.status === STATUS.PENDING)
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    else if (this.state.status === STATUS.RESOLVED)
      return (
        <>
          <ImageGalleryItem
            images={this.state.images}
            showImage={this.showImage}
          />
          <LoadMore onLoadMore={this.onLoadMore} />
          {showModal && (
            <Modal imageDetail={imageDetail} closeModal={this.closeModal} />
          )}
        </>
      );
    else if (this.state.status === STATUS.REJECTED)
      return <ErrorCard>{error.response.data}</ErrorCard>;
  }
}

export default ContentInfo;
