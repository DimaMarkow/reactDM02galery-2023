import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from 'components/Header/Header';

class App extends Component {
  state = {
    showFeedback: false,
  };

  // showFeedback = () => {
  //   this.setState(state => ({ showFeedback: !state.showFeedback }));
  // };

  render() {
    return (
      <>
        <div className="container">
          <Header showFeedback={this.showFeedback} />
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
