import React,{ PureComponent } from 'react';
import { Modal,Button } from 'lwh_react';

export default class baseModal extends PureComponent {
    state = {
        visible: false
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }
    onCancel = () => {
        console.log('cancel')
        this.setState({
            visible: false
        })
    }
    onOk = () => {
        console.log('ok')
        this.setState({
            visible: false
        })
    }

    render() {
        const { visible } = this.state;
        return (
            <div>
                简单基本用法：
                <Button onClick={this.showModal}>modal</Button>
                <Modal visible={visible} onCancel={this.onCancel} onOk={this.onOk}>
                    <div>modal提示内容</div>
                </Modal>
            </div>
        )
    }
}

export const baseCode = {
    title: '这里是代码的展示',
    code: `
    import React,{ PureComponent } from 'react';
    import { Modal,Button } from 'lwh-react';

    export default class baseModal extends PureComponent {
        state = {
            visible: false
        }

        showModal = () => {
            this.setState({
                visible: true
            })
        }
        onCancel = () => {
            console.log('cancel')
            this.setState({
                visible: false
            })
        }
        onOk = () => {
            console.log('ok')
            this.setState({
                visible: false
            })
        }

        render() {
            const { visible } = this.state;
            return (
                <div>
                    简单基本用法：
                    <Button onClick={this.showModal}>modal</Button>
                    <Modal visible={visible} onCancel={this.onCancel} onOk={this.onOk}>
                        <div>modal提示内容</div>
                    </Modal>
                </div>
            )
        }
    }
    `
}