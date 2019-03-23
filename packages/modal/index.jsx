/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import './index.scss';

const Modal = ({
    visible=false,
    style,
    width= 520,
    zIndex=1000,
    centered=false,
    title='title',
    footer,
    wrapClassName='',
    okText='确定',
    okType='primary',
    cancelText='取消',
    cancelType='default',
    closable= true,
    onOk=() => {},
    onCancel=() => {},
    mask=true,
    maskClosable= true,
    children='Basic body'
}) => {
    const onMask = () => {
        maskClosable && onCancel()
    }
    return (
        visible ?
        ReactDOM.createPortal(
            <div className="lwh-pirate-modal">
                <div
                    className="lwh-modal-mask"
                    onClick={onMask}
                    style={{
                        visibility: mask ? 'visible' : 'hidden',
                        zIndex: zIndex
                    }}
                />
                <div
                    className={`lwh-modal-warp ${centered ? 'lwh-modal-center' : ''} ${wrapClassName}`}
                    style={{
                        width,
                        zIndex
                    }}
                >
                    {closable && <div className="lwh-modal-close" onClick={onCancel}><span>+</span></div>}
                    <div className="lwh-modal" style={{width,...style}}>
                        <div className="lwh-modal-content">
                            <div className="lwh-modal-header">
                                <div className="lwh-modal-title">{title}</div>
                            </div>
                            <div className="lwh-modal-body">
                                {children}
                            </div>
                            {
                                (footer === null) ? null :
                                <div className="lwh-modal-footer">
                                {
                                    footer ||
                                    <div>
                                        <Button onClick={onOk} type={okType}>{okText}</Button>
                                        <Button onClick={onCancel} type={cancelType}>{cancelText}</Button>
                                    </div>
                                }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>,
        document.querySelector('body')) : null
    )
};
const HOCModal = (Component) => {
    //剔除出visible，footer，closable，使其不可配，赋予永久默认值
    return ({
        visible,
        footer,
        closable,
        okText='知道了',
        okType='primary',
        onOk=() => {},
        onCancel=() => {},
        maskClosable= false,
        content='Basic body',
        name,
        destroy,
        ...props
    }) => {
        // 修改onOk方法传入关闭Modal方法destroy();
        const onOk_1 = () => {
            onOk();
            destroy();
        }
        // 修改onCancel方法传入关闭Modal方法destroy();
        const onCancel_1 = () => {
            onCancel();
            destroy();
        }
        // Modal底部footer固定使用这里为默认值，且不可自定义footer，如果调用的是confirm返回undefined走Modal的默认配置，其他则只显示一个OK、button
        // eslint-disable-next-line react/no-multi-comp
        const Footer = () => (
            name == 'confirm' ? undefined : <Button onClick={onOk_1} type={okType}>{okText}</Button>
        )
        return (
                <Component
                    okText={okText}
                    closable={false}
                    maskClosable={maskClosable}
                    onOk={onOk_1}
                    footer={Footer()}
                    onCancel={onCancel_1}
                    children={content}
                    okType={okType}
                    visible
                    {...props}
                />
            )
    }
}
['confirm','info','success','error','warning'].forEach(item => {
    // eslint-disable-next-line react/no-multi-comp
    Modal[item] = (props) => {
        // 创建div作为挂载Modal的容器
        let div = document.createElement('div');
        document.body.appendChild(div);
        // 使用高阶组件剔除Method（）调用形式不可配置的props和默认值
        const FunModal = HOCModal(Modal);
        let currentConfig = Object.assign({}, props);
        // 关闭
        const destroy = () => {
            const unmountResult = ReactDOM.unmountComponentAtNode(div);
            if (unmountResult && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }
        //定义render函数，内部render组件至body
        const render = (config) => {
            ReactDOM.render(<FunModal destroy={destroy} name={item} {...config} />, div);
        }
        // 更新
        const update = (newConfig) => {
            currentConfig = Object.assign({}, currentConfig,newConfig);
            render(currentConfig);
        }
        // render
        render(currentConfig);
        return {
            destroy: destroy,
            update: update
        }
    }
});

export default Modal
