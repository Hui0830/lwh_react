import React from 'react';
import Block from 'packages/block';
import Button from 'packages/button';
import Md from './index.md';

import './index.scss'
import Spin from '../index';

const Code = ({title, code}) => {
    return <div className="code-container">
        {title &&  <p className="code-title">{title}</p>}
        <code>{code}</code>
    </div>
}
const demoCode = [
    {
        title: '大小size拥有small、default、large三种取值。',
        code: `
        <div>
            <span>简单设置大小spinning用法：</span>
            <Spin spinning size="small" style={{ marginRight: 30 }}/>
            <Spin spinning style={{ marginRight: 30 }}/>
            <Spin spinning size="large"/>
        </div>
        `
    },
    {
        code: `
        class SpinDemo extends React.PureComponent {
            state = {
                spinning: false
            }
            toggle = () => {
                this.setState({ spinning: !this.state.spinning });
            }
            render() {
                const { spinning } = this.state; 
                return(
                    <div className="spin-demo">
                        <Spin spinning={spinning}>
                            <div className="lwh-demo-container">
                                <h2>作为容器进行加载</h2>
                                <div>可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。</div>
                            </div>
                        </Spin>
                        <div>加载状态：
                            <Button
                                style={{width: 100, marginTop: 20}}
                                onClick={this.toggle}>{spinning ? '取消' : 'loadding'}
                            </Button>
                        </div>
                    </div>
                )
            }
        }
        `
    },
    {
        title: '设置tip。',
        code: `
        class SpinDemo extends React.PureComponent {
            state = {
                spinning: false
            }
            toggle = () => {
                this.setState({ spinning: !this.state.spinning });
            }
            render() {
                const { spinning } = this.state; 
                return(
                    <div className="spin-demo">
                        <Spin spinning={loadding} tip="Loadding...">
                            <div className="lwh-demo-container">
                                <h2>设置加载状态描述</h2>
                                <div>可以直接把内容内嵌到Spin中，将现有容器变为加载状态,设置tip加载状态描述。</div>
                            </div>
                        </Spin>
                        <div>加载状态：
                            <Button
                                style={{width: 100, marginTop: 20}}
                                onClick={this.toggle}>{spinning ? '取消' : 'loadding'}
                            </Button>
                        </div>
                    </div>
                )
            }
        }
        `
    }
]

// eslint-disable-next-line
class SpinDemo extends React.PureComponent {
    state = {
        spinning: false,
        loadding: false
    }
    toggle = () => {
        this.setState({ spinning: !this.state.spinning });
    }
    toggle1 = () => {
        this.setState({ loadding: !this.state.loadding });
    }
    render() {
        const { spinning,loadding } = this.state;
        return(
            <div className="spin-demo">
                {/* 内容书写，以Block模块形式 */}
                <Block
                    meta={<Code {...demoCode[0]} />}
                    title="加载大小展示"
                    discript="加载组件默认没有子组件时，为inline-block，大小size拥有small、default、large三种状态。"
                >
                    <span>简单设置大小spinning用法：</span>
                    <Spin spinning size="small" style={{ marginRight: 30 }}/>
                    <Spin spinning style={{ marginRight: 30 }}/>
                    <Spin spinning size="large"/>
                </Block>
                <Block
                    meta={<Code {...demoCode[1]} />}
                    title="作为容器加载"
                    discript="可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。"
                >
                    <Spin spinning={spinning}>
                        <div className="lwh-demo-container">
                            <h2>作为容器进行加载</h2>
                            <div>可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。</div>
                        </div>
                    </Spin>
                    <div>加载状态：<Button style={{width: 100, marginTop: 20}} onClick={this.toggle}>{spinning ? '取消' : 'loadding'}</Button></div>
                </Block>
                <Block
                    meta={<Code {...demoCode[2]} />}
                    title="设置加载状态描述"
                    discript="设置加载状态文字描述：tip"
                >
                    <Spin spinning={loadding} tip="Loadding...">
                        <div className="lwh-demo-container">
                            <h2>设置加载状态描述</h2>
                            <div>可以直接把内容内嵌到Spin中，将现有容器变为加载状态,设置tip加载状态描述。</div>
                        </div>
                    </Spin>
                    <div>加载：<Button style={{width: 100, marginTop: 20}} onClick={this.toggle1}>{loadding ? '取消' : 'loadding'}</Button></div>
                </Block>
                {/* 内容书写，以Block模块形式 */}
                <Md />
            </div>
        )
    }
}
export default SpinDemo
