import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from 'components/Header/Header';
import ContentInfo from './ContentInfo/ContentInfo';

const INITIAL_STATE = {
  pictures: [],
  filter: '',
  showFeedback: false,
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onFilterChange = filterText => {
    console.log(filterText);
    this.setState({ filter: filterText });
  };

  // showFeedback = () => {
  //   this.setState(state => ({ showFeedback: !state.showFeedback }));
  // };

  render() {
    return (
      <>
        <div className="container">
          <Header
            filterText={this.state.filter}
            onFilterChange={this.onFilterChange}
          />
          <ContentInfo searchText={this.state.filter} />
          {/* {this.state.showFeedback && <Feedback />} */}
        </div>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}

export default App;
