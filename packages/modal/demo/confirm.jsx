import React from 'react';
import { Modal,Button } from 'lwh_react';

const ModalConfirm = () => {
    const onConfirm = () => {
        Modal.confirm({
            title: '你确定需要删除该项么?',
            content: '一些删除提示内容',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            }
        })
    }
    const showDeleteConfirm = () => {
        const modal = Modal.confirm({
          title: '你确定需要删除该项么?',
          content: '一些删除提示内容',
          okText: '删除',
          okType: 'danger',
          cancelText: '取消',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          }
        });
        console.log(modal);
    }
    return (
        <div>
            <Button onClick={showDeleteConfirm} type="dashed">删除</Button>
            <Button  onClick={onConfirm} type="primary">confirm</Button>
        </div>
    )
}

export default ModalConfirm;
export const confirmCode = {
    title: '这里是代码的展示',
    code: `
    const ModalConfirm = () => {
        const onConfirm = () => {
            Modal.confirm({
                title: '你确定需要删除该项么?',
                content: '一些删除提示内容',
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                }
            })
        }
        const showDeleteConfirm = () => {
            const modal = Modal.confirm({
              title: '你确定需要删除该项么?',
              content: '一些删除提示内容',
              okText: '删除',
              okType: 'danger',
              cancelText: '取消',
              onOk() {
                console.log('OK');
              },
              onCancel() {
                console.log('Cancel');
              }
            });
            console.log(modal)
        }
        return (
            <div>
                <Button onClick={showDeleteConfirm} type="dashed">删除</Button>
                <Button  onClick={onConfirm} type="primary">confirm</Button>
            </div>
        )
    }
    `
}