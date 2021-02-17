jsx 方便创建虚拟 DOM，需要经过 babel 转译
jsx 可以理解为原始创建虚拟 DOM 的语法糖
虚拟 DOM 本质是 Object 类型的对象
虚拟 DOM 是 React 内部在用，无需真实 DOM 那么多属性
虚拟 DOM 会被转化为真实 DOM 呈现在页面上
jsx 语法规则： 1.定义虚拟 DOM 不要写引号 2.标签中混入 JS 要使用{} 3.样式的类名需要用 className 4.内联样式要使用 style={{key: value}} 5.虚拟 DOM 必须只有一个根标签 6.标签必须闭合 7.标签首字母为小写元素，转化为 HTML 元素 8.无小写字母元素，会报错 9.自定义标签必须大写字母开头

jsx 中只能够使用{}引入一个 JS 语句，而不是引入代码部分
ReactDOM.render()之后，React 会解析标签，发现组件是函数定义的，随后会调用该函数，组件首字母必须大写

类式组件必须继承 React.Component，而且必须实现 render 方法,而且 render 必须有返回值
类式组件使用标签之后，React 解析器会自动 new 一个该类的实例并通过该实例调用到原型的 render 方法
props, refs, state 三大重要属性
类式组件拥有状态，属于复杂组件
函数式组件是简单组件，没有 state

组件实例对象三大属性，state，props，refs
函数式组件是没有 this 的，所以也没有实例
React onClick 事件，添加的函数应该在{}内，但是不能加()，所以不能直接用函数调用，React 会自动生成实例
类式组件只有通过实例对象调用 this 才是 this，否则是 undefined
React 自动 new 实例然后调用 render 方法,自定义方法不能使用 this 指向，只会返回 undefined
类中写了赋值语句，就会在类中追加一个属性

State 总结： 1.组件被称为状态机，更新状态需要使用 setState 2.组件中 render 方法的 this 为实例对象 3.强制绑定 this 需要通过函数对象的 this 3.也可以使用箭头函数，使用赋值语句 4.状态数据不能直接修改或更新，只能用 setState

props 是只读的，不能修改
使用构造器必须接 super，然后输入 props 为参数
构造器是否接受 props，是否传递给 super，取决于是否要在构造器中使用 this.props
类中的构造器能省略就省略
函数能够接收参数，可以使用 props，但是不能使用 state 和 refs

组件可以使用 ref 打标识
字符串类型使用 ref 不推荐，React 可能会弃用这种方法
推荐使用回调函数方法，ref = {c => this.input2 = c}
箭头函数没有 this，所以 this 是外部的实例对象，参数 c 代表 jsx 语法生成的 DOM 节点，回调函数语法将 DOM 节点挂载到实例对象上
回调函数类型在每次更新的时候都会渲染两次，一次为 null，另一次为实例，因为 react 在每次重新渲染的时候都会重新生成一个类实例
在使用 class 方法的时候，ref 并不需要调用两次，只需要一次即可

通过 onXxxxx 处理事件
React 使用自定义事件，而不是 DOM 原生事件
React 事件是通过委托形式处理的，所有事件都委托给了最外层元素
最好减少 ref 的使用，当发生事件的元素是要操作的元素，就可以使用 event.target 操作，而不是用 ref 标记

页面中所有输入类节点，数据都是现用现取，就是非受控组件
高阶函数定义，符合下面规范中的任意一个 1.接收函数参数 2.返回一个函数
函数的柯里化，通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

生命周期钩子函数(回调函数)
componentDidMount
componentWillUnmount
ReactDOM.unmountComponentAtNode

调用次序
1.constructor
2.componentWillUnmount
3.render
4.componentDidMount
shouldComponentUpdate 是一个阀门，其实在调用 setState 之后，调用 shouldComponentUpdate，返回 true 则开启阀门，false 就关闭
强制更新是不受阀门限制的
父组件给子组件传值的时候，子组件会有一个方法，componentWillReceiveProps
这个方法有一个坑，第一次传入的组件不会调用，因为第一次不算，但是第二次就会调用该函数

三个钩子是常用的
1.didMount 做一些初始化的事情，开启定时器，发送网络请求，订阅消息
2.willUnmount 做一些善后工作，关闭定时器
3.render

所有带 will 的组件在新版本都需要加 UNSAFE\_
除了 WillUNMount

getDerivedStateFromProps 使得 state 的值取决于 props

React 中的 key 有什么作用？
为什么遍历列表时 key 最好不要用 index
(1)key 是虚拟 DOM 对象中的标识，更新显示时 key 非常重要
2).详细的说:当状态中的数据发生变化时，react 会根据 [新数据]生成[新的虚拟 DOM] ,随后 React 进行[新虚拟 DOM]与[旧虚拟 DOM]的 diff 比较
比较规则如下:
a.旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key:
(1).若虚拟 DOM 中内容没变，直接使用之前的真实 DOM
(2).若虚拟 DOM 中内容变了，则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM
b.旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key
根据数据创建新的真实 DOM，随后渲染到到页面

2.用 index 作为 key 可 能会引发的问题: 1.若对数据进行:逆序添加、逆序删除等破坏顺序操作:会产生没 有必要的真实 DOM 更新==>界面效果没问题，但效率低。 2.如果结构中还包含输入类的 DOM:会产生错误 DOM 更新==> 界面有问题。
注意!如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用 index 作 为 key 是没有问题的。 3.开发中如何选择 key?:
最好使用每条数据的唯一标识作为 key, 比如 id、手机号、身份证号.与興品 2.如果确定只是简单的展示数据，用 index 也是可以的。
index.html 只有一个节点 div，id 为 root，ReactDOM 只负责把 App 渲染到该页面
index.js 是入口文件，引入核心库和样式
{Component}的引入方式不是解构赋值，而是单独暴露了一个 Component 类，通过 React.Component = Component 方式添加到 React
可以使用 index.module.css 方式，引入的时候使用 import hello from './xxx'，使用{hello.title}使样式模块化
父子组件传值的时候对对象数组选用{...todo}的形式
子组件给父组件传递数据，可以使用父组件给子组件传递一个函数
yarn add prop-types 进行类型限制

关于跨域问题
所处位置 3000，想给 5000 位置发送请求，可以发送，但是无法返回数据
开启中间代理，服务在 3000 端口，代理没有 ajax 引擎，所以不存在跨域问题

    const {keyWordElement: {value}} = this
    连续解构赋值，但是keyWordElement并没有被定义，只是一个过程值
React不能够存错误对象，而是错误对象的。message属性

消息订阅与发布机制
npm install pubsub-js --save 
PubSubJS

路由的工作原理，点击导航区的链接但是不会引起跳转
一个路由就是一个映射关系，路由的key导航到value，value可能是function或者component
前端路由依赖于History,BOM包含History
window.History

npm install --save react-router-dom
BrowserRouter
HashRouter
Route
Redirect
Link
NavLink
Switch

使用a标签跳转页面，路由链接切换组件
整个路径由一个路由器管理，只能用一个Router标签包裹
在入口文件index.js包裹整个App即可在整个组件直接使用路由功能
路由组件最好放在pages中，因为是靠路由使用的单独组件，而不是直接使用<Home/>

路由组件能收到一些东西，只要路径对了，就可以直接渲染路由组件
只在路由被激活时，路由组件才会被渲染，它与一般组件区别在于，路由会收到几个信息，history，location，match

React接收标签体内容,标签体也是一个特殊的内容
key值为children，也可以通过props收集
Switch包裹所有组件,一个路径对应一个组件，匹配到一个之后就不再进行匹配
一般不会让一个路径对应多个路由

HashRouter比BrowserRouter多一个#，可以处理缓存请求的问题
一般使用BrowserRouter，删除目录文件使用的 . ,多级路径刷新问题
解决方法：
    1.public/index.html引入样式不写./写/（常用）
    2.public/index.html引入样式使用%PUBLIC_URLS%,仅在React中可以使用
    3.使用HashRouter

路由默认模糊匹配，exact为true开启精准匹配，路由标签属性
在不引发问题的时候不开启严格匹配，可能导致无法匹配二级路由
React内置组件，redirect，重定向，可以默认使用一个组件
redirect放在路由最下方，不配置路径和组件，只有to=""，如果都不能匹配，则使用redirect匹配

由于模糊匹配，所以二级路由可以使用上一级路由路径后面加上自己的注册路由路径
 使用params进行路由参数传值必须进行声明，一方面传值，一方面接收

 antd引入的时候需要样式，antd.css


 Redux练习
 dispatch, getState, subscribe
 在indexjs使用subscribe，每当react调用App重新渲染，都可以触发redux订阅
 同步action值为对象，异步返回值应该是一个函数
 无论是数组还是数值都不能开启一个异步的任务，而函数可以
 yarn add redux-thunk
 在函数中写异步任务，由store执行，可以接受一个dispatch参数
 react-redux基本使用
 UI组件与容器组件，一个负责交互，一个将结果交给UI组件
 connect(mapStateToProps, mapDispatchToProps)
 一个是映射状态，返回值是一个对象
 一个映射操作状态的方法，返回值也是对象
 容器组件store是props传进去的，而不是在容器组件中直接引入
 mapDispatchToProps简写方式
   {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createAsyncAction,
  }
  只传入一个对象，而不是使用function
使用react-redux可以自己检测页面渲染，使用Provider托管所有需要的store

容器组件和UI组件整合成一个组件
无需自己给容器组件传store，使用Provider即可
使用react-redux自动监测redux变化
组件与redux交互步骤：
    1.定义UI组件
    2.引入connect连接UI与容器
    3.mapDispatchToProps与mapStateToProps
    4.UI通过this.props.xxx读取操作状态
preState.unshift(data) 与展开运算符相比，[data, ...preState]，redux底层判断，如果值是一样的，那么就不会进行页面更新数
使用纯函数，不得修改参数，浅拷贝中push一个变量是不会改变地址的
使用Provider包裹app，app所有后代容器都能接受到store
App中引入的是count的容器组件
npm run build打包生成静态文件



setState:
  异步更新，setState有一个可选参数为异步函数，setState是一个同步方法，但是引起React的后续动作是异步的
  状态更新完毕，而且渲染完毕，React第二个参数的函数才会被调用
对象式的setState是类式setState的简写方式,如果新状态依赖于原状态，最好使用函数式


