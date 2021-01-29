jsx方便创建虚拟DOM，需要经过babel转译
jsx可以理解为原始创建虚拟DOM的语法糖
虚拟DOM本质是Object类型的对象
虚拟DOM是React内部在用，无需真实DOM那么多属性
虚拟DOM会被转化为真实DOM呈现在页面上
jsx语法规则：
1.定义虚拟DOM不要写引号
2.标签中混入JS要使用{}
3.样式的类名需要用className
4.内联样式要使用style={{key: value}}
5.虚拟DOM必须只有一个根标签
6.标签必须闭合
7.标签首字母为小写元素，转化为HTML元素
8.无小写字母元素，会报错
9.自定义标签必须大写字母开头

jsx中只能够使用{}引入一个JS语句，而不是引入代码部分
ReactDOM.render()之后，React会解析标签，发现组件是函数定义的，随后会调用该函数，组件首字母必须大写

类式组件必须继承React.Component，而且必须实现render方法,而且render必须有返回值
类式组件使用标签之后，React解析器会自动new一个该类的实例并通过该实例调用到原型的render方法
props, refs, state三大重要属性
类式组件拥有状态，属于复杂组件
函数式组件是简单组件，没有state

组件实例对象三大属性，state，props，refs
函数式组件是没有this的，所以也没有实例
React onClick事件，添加的函数应该在{}内，但是不能加()，所以不能直接用函数调用，React会自动生成实例
类式组件只有通过实例对象调用this才是this，否则是undefined
React自动new实例然后调用render方法,自定义方法不能使用this指向，只会返回undefined
类中写了赋值语句，就会在类中追加一个属性

State总结：
1.组件被称为状态机，更新状态需要使用setState
2.组件中render方法的this为实例对象
3.强制绑定this需要通过函数对象的this
3.也可以使用箭头函数，使用赋值语句
4.状态数据不能直接修改或更新，只能用setState

props是只读的，不能修改
使用构造器必须接super，然后输入props为参数
构造器是否接受props，是否传递给super，取决于是否要在构造器中使用this.props
类中的构造器能省略就省略
函数能够接收参数，可以使用props，但是不能使用state和refs

组件可以使用ref打标识
字符串类型使用ref不推荐，React可能会弃用这种方法
推荐使用回调函数方法，ref = {c => this.input2 = c}
箭头函数没有this，所以this是外部的实例对象，参数c代表jsx语法生成的DOM节点，回调函数语法将DOM节点挂载到实例对象上
回调函数类型在每次更新的时候都会渲染两次，一次为null，另一次为实例，因为react在每次重新渲染的时候都会重新生成一个类实例
在使用class方法的时候，ref并不需要调用两次，只需要一次即可

通过onXxxxx处理事件
React使用自定义事件，而不是DOM原生事件
React事件是通过委托形式处理的，所有事件都委托给了最外层元素
最好减少ref的使用，当发生事件的元素是要操作的元素，就可以使用event.target操作，而不是用ref标记

页面中所有输入类节点，数据都是现用现取，就是非受控组件
高阶函数定义，符合下面规范中的任意一个
1.接收函数参数
2.返回一个函数
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
shouldComponentUpdate是一个阀门，其实在调用setState之后，调用shouldComponentUpdate，返回true则开启阀门，false就关闭
强制更新是不受阀门限制的
父组件给子组件传值的时候，子组件会有一个方法，componentWillReceiveProps
这个方法有一个坑，第一次传入的组件不会调用，因为第一次不算，但是第二次就会调用该函数

三个钩子是常用的
1.didMount 做一些初始化的事情，开启定时器，发送网络请求，订阅消息
2.willUnmount做一些善后工作，关闭定时器
3.render

