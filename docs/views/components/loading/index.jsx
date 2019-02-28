import React from 'react';

const Loading = ({ pastDelay, timedOut, error }) => {
    if (pastDelay) {
      return <div>loadding</div>;
    } else if (timedOut) {
      return <div>Taking a long time...</div>;
    } else if (error) {
      return <div>Error!</div>;
    }
    return null;
  };
export default Loading