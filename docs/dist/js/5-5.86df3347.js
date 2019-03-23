(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{128:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.attributes=void 0,t.default=function(){return u.default.createElement("div",null,u.default.createElement("h3",null,"属性"),u.default.createElement("table",null,u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"参数"),u.default.createElement("th",null,"类型"),u.default.createElement("th",null,"默认值"),u.default.createElement("th",null,"作用"),u.default.createElement("th",null,"其他"))),u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("td",null,"disabled"),u.default.createElement("td",null,"boolean"),u.default.createElement("td",null,"false"),u.default.createElement("td",null,"按钮失效状态"),u.default.createElement("td",null,"---")),u.default.createElement("tr",null,u.default.createElement("td",null,"htmlType"),u.default.createElement("td",null,"string"),u.default.createElement("td",null,"button"),u.default.createElement("td",null,"设置 button 原生的 type 值"),u.default.createElement("td",null,"---")),u.default.createElement("tr",null,u.default.createElement("td",null,"size"),u.default.createElement("td",null,"string"),u.default.createElement("td",null,"default"),u.default.createElement("td",null,"设置按钮大小，可选值为 small large 或者不设"),u.default.createElement("td",null,"---")),u.default.createElement("tr",null,u.default.createElement("td",null,"type"),u.default.createElement("td",null,"string"),u.default.createElement("td",null,"---"),u.default.createElement("td",null,"设置按钮类型，可选值为 primary dashed danger"),u.default.createElement("td",null,"---")),u.default.createElement("tr",null,u.default.createElement("td",null,"onClick"),u.default.createElement("td",null,"function"),u.default.createElement("td",null,"---"),u.default.createElement("td",null,"点击按钮时的回调"),u.default.createElement("td",null,"---")),u.default.createElement("tr",null,u.default.createElement("td",null,"block"),u.default.createElement("td",null,"boolean"),u.default.createElement("td",null,"false"),u.default.createElement("td",null,"将按钮宽度调整为其父宽度的选项"),u.default.createElement("td",null,"---")),u.default.createElement("tr",null,u.default.createElement("td",null,"ghost"),u.default.createElement("td",null,"boolean"),u.default.createElement("td",null,"false"),u.default.createElement("td",null,"镂空状态、背景透明"),u.default.createElement("td",null,"---")),u.default.createElement("tr",null,u.default.createElement("td",null,"style"),u.default.createElement("td",null,"object"),u.default.createElement("td",null,"---"),u.default.createElement("td",null,"自定义样式"),u.default.createElement("td",null,"---")))))};var a,n=l(1),u=(a=n)&&a.__esModule?a:{default:a};t.attributes={}},129:function(e,t,l){},33:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(l(1)),n=r(l(37)),u=r(l(128));l(129);var d=r(l(54));function r(e){return e&&e.__esModule?e:{default:e}}var c=function(){return a.default.createElement("div",{className:"code-container"},a.default.createElement("p",{className:"code-title"},"这里是代码的展示"),a.default.createElement("code",null,'\n        <div>\n            按钮类型：\n            <Button>default</Button>\n            <Button type="primary">primary</Button>\n            <Button type="dashed">dashed</Button>\n            <Button type="danger">danger</Button>\n        </div>\n        <div>\n            按钮大小：\n            <Button size="small">small</Button>\n            <Button>default</Button>\n            <Button type="large">large</Button>\n        </div>\n        <div>\n            其他：\n            <Button type="primary" ghost style={{color: \'#e85e83\'}}>ghost</Button>\n            <Button block type="primary" >block</Button>\n        </div>\n        '))};t.default=function(){return a.default.createElement("div",{className:"button-demo"},a.default.createElement(n.default,{discript:"按钮有四种类型：主按钮、默认按钮、虚线按钮、危险按钮。",meta:a.default.createElement(c,null),title:"使用展示"},a.default.createElement("div",null,"按钮类型：",a.default.createElement(d.default,null,"default"),a.default.createElement(d.default,{type:"primary"},"primary"),a.default.createElement(d.default,{type:"dashed"},"dashed"),a.default.createElement(d.default,{type:"danger"},"danger")),a.default.createElement("div",null,"按钮大小：",a.default.createElement(d.default,{size:"small"},"small"),a.default.createElement(d.default,null,"default"),a.default.createElement(d.default,{type:"large"},"large")),a.default.createElement("div",null,"其他：",a.default.createElement(d.default,{type:"primary",ghost:!0,style:{color:"#e85e83"}},"ghost"),a.default.createElement(d.default,{block:!0,type:"primary"},"block"))),a.default.createElement(u.default,null))}},37:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(l(39)),n=f(l(44)),u=f(l(45)),d=f(l(46)),r=f(l(47)),m=f(l(1)),c=f(l(0));function f(e){return e&&e.__esModule?e:{default:e}}l(48);var o=function(e){function l(e){(0,n.default)(this,l);var t=(0,d.default)(this,(l.__proto__||(0,a.default)(l)).call(this,e));return t.state={show:!1,metaHeight:0},t.controlShowHandle=function(){t.setState({show:!t.state.show,metaHeight:t.meta.current.offsetHeight})},t.meta=m.default.createRef(),t}return(0,r.default)(l,e),(0,u.default)(l,[{key:"render",value:function(){var e=this.props,t=e.children,l=e.meta,a=e.name,n=e.className,u=e.title,d=e.discript,r=this.state,c=r.show,f=r.metaHeight;return m.default.createElement("div",{className:"lwh-pirate-block "+n},u&&m.default.createElement("h3",null,u),d&&m.default.createElement("p",null,d),m.default.createElement("div",{className:"lwh-pirate-block-container "+n},m.default.createElement("div",{className:"lwh-block-source",ref:this.child},t||"未设置组件内容"),m.default.createElement("div",{className:"lwh-block-meta",style:{height:c?f:0}},m.default.createElement("div",{ref:this.meta},l)),m.default.createElement("div",{className:"lwh-block-control "+(c?"lwh-block-close":""),onClick:this.controlShowHandle},m.default.createElement("span",null,c?"隐藏"+a:"显示"+a))))}}]),l}(m.default.PureComponent);o.propTypes={meta:c.default.oneOfType([c.default.string,c.default.element,c.default.node]),name:c.default.string,title:c.default.string,discript:c.default.string,className:c.default.string},o.defaultProps={meta:m.default.createElement("div",null,"meta"),name:"代码"},t.default=o},48:function(e,t,l){},54:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=l(1),o=(a=n)&&a.__esModule?a:{default:a};l(56);t.default=function(e){var t=e.disabled,l=e.type,a=e.htmlType,n=e.size,u=e.onClick,d=e.block,r=e.ghost,c=e.children,f=e.style,m="lwh-pirate-btn "+(d?"lwh-btn-block":"")+" "+(r?"lwh-btn-ghost":"");return l&&(m+=" lwh-btn-"+l),n&&(m+=" lwh-btn-"+n),o.default.createElement("button",{className:m,disabled:t,onClick:u,style:f,type:a},c)}},56:function(e,t,l){}}]);