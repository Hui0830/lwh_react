import React,{ PureComponent } from 'react';
import Block from 'packages/block';
import Md from './index.md';
import Code from 'components/code'

import './index.scss'
import Confirm,{confirmCode} from './confirm';
import Base,{baseCode} from './base';
import Info,{ infoCode } from './info';
import UpdateModal,{updateCode} from './update'

// eslint-disable-next-line
class ModalDemo extends PureComponent {
    render() {
        return (
            <div className="modal-demo">
                {/* 内容书写，以Block模块形式 */}
                <Block
                    meta={<Code {...baseCode} />}
                    title="Modal基本用法展示"
                    discript="Modal基本用法展示"
                >
                    <Base />
                </Block>
                <Block
                    meta={<Code {...confirmCode} />}
                    title="确认对话框"
                    discript="使用 confirm() 可以快捷地弹出确认框。"
                >
                    <Confirm />
                </Block>
                <Block
                    meta={<Code {...infoCode} />}
                    title="消息提醒对话框"
                    discript="各种类型的信息提示，只提供一个按钮用于关闭。"
                >
                    <Info />
                </Block>
                <Block
                    meta={<Code {...updateCode} />}
                    title="手动更新和移除"
                    discript="手动更新和关闭 Modal.method 方式创建的对话框。"
                >
                    <UpdateModal />
                </Block>
                {/* 内容书写，以Block模块形式 */}
                <Md />
            </div>
        )
    }
}
export default ModalDemo
