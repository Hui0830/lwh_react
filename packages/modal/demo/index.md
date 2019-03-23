### 属性

参数     | 类型 | 默认值 | 作用 | 其他
-------- | --- | --- | --- | ---
width | string、number | 520 | 对话框宽度 | ---
visible | boolean | false | 对话框的显示和隐藏 | ---
title | string、ReactNode | 对话框标题 | ---
footer | string、ReactNode | 确认取消按钮 | 对话框底部 | 如果不需要可设置为null
cancelText | string、ReactNode |取消 | 取消按钮文字 | ---
centered | Boolean | false | 垂直居中展示 Modal | ---
closable | boolean | true | 是否显示右上角的关闭按钮 | ---
keyboard | boolean | true | 是否支持键盘esc关闭 | ---
mask | Boolean | true | 是否展示遮罩 | ---
maskClosable | boolean | true | 点击蒙层是否允许关闭 | ---
okText | string、ReactNode | 确定 | 确认按钮文字 | ---
okType | string | primary | 确认按钮类型 | ---
style | object | --- | 可用于设置浮层内容modal的样式 | ---
wrapClassName | string | '' | 对话框外层warp容器的类名 | ---
onCancel | function(e) | 无 | 点击遮罩层或右上角叉或取消按钮的回调 | ---
onOk | function(e) | 无 | 点击确定回调 | ---
* * *
### Modal.method()
- 接受一个object参数：参数配置与<Modal />基本相同,增加content取代children
    - Modal.info
    - Modal.success
    - Modal.error
    - Modal.warning
    - Modal.confirm

- 返回一个引用，可以通过该引用关闭弹窗和更新，包含方法update,destroy