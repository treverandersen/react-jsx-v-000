import React from 'react';

class Tweet extends React.component {
  render() {
    return (
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
        <div className="tweet__body">
          <p>We are writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    );
  }
}

export default Tweet;
