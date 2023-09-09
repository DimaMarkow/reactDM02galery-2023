import { Component } from 'react';
import getPictures from 'services/getPictures';
import ErrorCard from '../ErrorCard/ErrorCard';

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
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: STATUS.PENDING });
      try {
        const newImages = await getPictures(this.props.searchText);
        console.log(newImages);
        this.setState(prevstate => ({
          images: [...prevstate.images, ...newImages],
          status: STATUS.RESOLVED,
        }));
      } catch (error) {
        this.setState({ error, status: STATUS.REJECTED });
      }
      //  --------------------------------------------------
      //   getPictures(this.props.searchText)
      //     .then(response => response.json())
      //     .then(data => {
      //       if (data.status === 'ok')
      //         this.setState(prevstate => ({
      //           images: [...prevstate.images, data.hits],
      //           status: STATUS.RESOLVED,
      //         }));
      //       else return Promise.reject(data.message);
      //     })
      //     .catch(error => {
      //       this.setState({ error, status: STATUS.REJECTED });
      //     });
    }
  }
  render() {
    const { images, error } = this.state;
    if (this.state.status === STATUS.PENDING)
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    else if (this.state.status === STATUS.RESOLVED)
      return (
        <ul>
          {/* {news.map(el => {
            return <li key={el.url}>{el.title}</li>;
          })} */}
          <button>Load more...</button>
        </ul>
      );
    else if (this.state.status === STATUS.REJECTED)
      return <ErrorCard>{error.response.data}</ErrorCard>;
  }
}

export default ContentInfo;
