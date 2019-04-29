import React from 'react';
import Spin from 'packages/spin'

const Loading = ({ pastDelay, timedOut, error }) => {
    if (pastDelay) {
      return <Spin spinning tip="Loadding..." ><div style={{height: 300}} /></Spin>
    } else if (timedOut) {
      return <Spin spinning tip="Taking a long time..." ><div style={{height: 300}} /></Spin>
    } else if (error) {
      return <div>Error!</div>;
    }
    return null;
  };
export default Loading