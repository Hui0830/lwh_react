import React from 'react';
import { Modal, Button } from 'lwh_react';

function info() {
  Modal.info({
    title: 'Info',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {}
  });
}

function success() {
  Modal.success({
    title: 'success',
    content: 'some messages...some messages...'
  });
}

function error() {
  Modal.error({
    title: 'error',
    content: 'some messages...some messages...'
  });
}

function warning() {
  Modal.warning({
    title: 'warning',
    content: 'some messages...some messages...'
  });
}

function centerWarning() {
  Modal.warning({
    title: 'centerWarning',
    content: 'some messages...some messages...,垂直剧中',
    centered: true
  });
}

const InfoModal = () => (
  <div>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
    <Button onClick={centerWarning}>剧中显示</Button>
  </div>
);
export default InfoModal

export const infoCode = {
    title: '各种类型的信息提示，只提供一个按钮用于关闭。',
    code: `
    import React from 'react';
    import { Modal, Button } from 'lwh_react';

    function info() {
      Modal.info({
        title: 'Info',
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
        onOk() {}
      });
    }

    function success() {
      Modal.success({
        title: 'success',
        content: 'some messages...some messages...'
      });
    }

    function error() {
      Modal.error({
        title: 'error',
        content: 'some messages...some messages...'
      });
    }

    function warning() {
      Modal.warning({
        title: 'warning',
        content: 'some messages...some messages...'
      });
    }

    function centerWarning() {
      Modal.warning({
        title: 'centerWarning',
        content: 'some messages...some messages...,垂直剧中',
        centered: true
      });
    }

    const InfoModal = () => (
      <div>
        <Button onClick={info}>Info</Button>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
        <Button onClick={centerWarning}>剧中显示</Button>
      </div>
    );
    export default InfoModal 
    `
}