
# API

### Tabs属性

参数     | 类型 | 默认值 | 作用 | 其他
-------- | --- | --- | --- | ---
defaultActiveKey | string | 初始化选中面板的 key，如果没有设置为第一个面板 | 初始选择的面板 | ---
size | string | 'default' | tab大小，提供 large default 和 small 三种大小 | ---
onTabClick | `Function(activeKey) {}`	| --- | tab 被点击的回调 | 接受一个参数为当前选中面板id
onChange| `Function(preActiveKey,activeKey) {}` | ---| 切换面板tab改变的回调 | 接受两个参数，第一个为改变前的选中面板id，第二个为当前选中面板id
tabPosition | string | 'top' | tabPane位置，可选值有 top right bottom left | ---

### Tabs.TabPane属性
参数     | 类型 | 默认值 | 作用 | 其他
-------- | --- | --- | --- | ---
key	| string | --- | 对应 activeKey | 必传的值，且需要唯一
tab	| string、ReactNode | tab-id | 选项卡头显示文字 | ---