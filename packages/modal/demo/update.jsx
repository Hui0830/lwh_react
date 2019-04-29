/* eslint-disable no-undef */
import React from 'react';
import { Modal, Button } from 'lwh_react';

function countDown() {
    let secondsToGo = 5;
    const modal = Modal.success({
        title: '倒计时关闭',
        content: `对话框将在${secondsToGo} s后自动关闭.`
    });
    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
        content: `对话框将在${secondsToGo} s后自动关闭.`
        });
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
    }, secondsToGo * 1000);
}
const UpdateModal = () => <Button onClick={countDown}>Open modal to close in 5s</Button>
export default UpdateModal

export const updateCode = {
    title: '手动更新和卸载Modal，5s后自动关闭',
    code: `
    import React from 'react'
    import { Button, Modal } from 'lwh_react'

    const UpdateModal = () => {
        function countDown() {
            let secondsToGo = 5;
            const modal = Modal.success({
            title: '倒计时关闭',
            content: \`对话框将在\${secondsToGo} s后自动关闭.\`
            });
            const timer = setInterval(() => {
            secondsToGo -= 1;
            modal.update({
                content: \`对话框将在\${secondsToGo} s后自动关闭.\`
            });
            }, 1000);
            setTimeout(() => {
            clearInterval(timer);
            modal.destroy();
            }, secondsToGo * 1000);
        }
        return (
            <Button onClick={countDown}>Open modal to close in 5s</Button>
        )
    }
    export default UpdateModal
    `
}