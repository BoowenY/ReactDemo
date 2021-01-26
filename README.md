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