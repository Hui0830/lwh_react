
### 项目地址
[https://github.com/Hui0830/lwh_react.git](https://github.com/Hui0830/lwh_react.git)

### 组件库开发

#### 一、手动添加开发组件文档
进入到markdown目录
```
    /docs/markdown
```
添加.md文件，使用markdown语法书写内容文档。

#### 二、命令添加组件
```
npm run doc:add -- packageName
```
- packageName为需要添加的组件名；
- 运行完毕后组件库会自动添加"packageName"目录,并在packageName目录中生成"demo"目录,如果不需要demo目录,可以手动移除demo目录
- packageName组件命名以a_b命名格式处理，即`input_number`
- 如运行`npm run doc:add -- input_number`将生成input_number目录，InputNumber组件。

### 开始运行
非首次运行
```javascript
npm run dev
```
- 初次运行需要按照依赖包,`yarn install || npm install`
- 运行启动后，会自动打开浏览器窗口，文件修改后会自动刷新页面

### 发布到线上
#### 构建
- 开发中
#### 访问
[https://github.com/Hui0830/lwh_react.git](https://github.com/Hui0830/lwh_react.git)

### 书写规则
#### markdown书写规则
- 参照[http://www.markdown.cn/](http://www.markdown.cn/)

### 组件命名方式
- 下划线命名方式
```
npm run doc:add -- input_number
```