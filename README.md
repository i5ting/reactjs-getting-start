# reactjs

https://github.com/facebook/react

## Virtual DOM

Virtual DOM是reactjs的最核心概念，我拷贝一段来说明它

在Web开发中，我们总需要将变化的数据实时反应到UI上，这时就需要对DOM进行操作。而复杂或频繁的DOM操作通常是性能瓶颈产生的原因（如何进行高性能的复杂DOM操作通常是衡量一个前端开发人员技能的重要指标）。React为此引入了虚拟DOM（Virtual DOM）的机制：在浏览器端用Javascript实现了一套DOM API。基于React进行开发时所有的DOM构造都是通过虚拟DOM进行，每当数据变化时，React都会重新构建整个DOM树，然后React将当前整个DOM树和上一次的DOM树进行对比，得到DOM结构的区别，然后仅仅将需要变化的部分进行实际的浏览器DOM更新。而且React能够批处理虚拟DOM的刷新，在一个事件循环（Event Loop）内的两次数据变化会被合并，例如你连续的先将节点内容从A变成B，然后又从B变成A，React会认为UI不发生任何变化，而如果通过手动控制，这种逻辑通常是极其复杂的。尽管每一次都需要构造完整的虚拟DOM树，但是因为虚拟DOM是内存数据，性能是极高的，而对实际DOM进行操作的仅仅是Diff部分，因而能达到提高性能的目的。这样，在保证性能的同时，开发者将不再需要关注某个数据的变化如何更新到一个或多个具体的DOM元素，而只需要关心在任意一个数据状态下，整个界面是如何Render的。


说那么多你可能都没明白，上例子

## helloworld


```
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(
  <HelloMessage name="John" />,
  document.getElementById('container')
);
```

首先，这是一种 HTML-like 的语法，叫jsx，可以理解成coffee，typescript之类的，需要编译

核心就是React.render，说明这个组件放在什么地方，比如上面的例子就是

    <div id='container'>
      ...
    </div>


这样页面就可以拆分成n个小块，每块各自为政，即所谓的组件化（也就积木一样）

再来个复杂点的，下面给出的是带有状态的组件

```
var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});

React.render(<Input/>, document.body);
```

## 视图相关的3个概念

- Props（属性，就是element上的attrs，换个名字property，变成复数，即props）
- State（写过view组件的基本都会知道，按钮有三态，Normal，Highlight，Selected，包括extjs，jquery里的大部分ui框架都是有状态的。）
- Event（其实还应该算一个就是dom事件，上面的例子就把onChange的handler编译后的handleChange方法，这要感谢jsx）

了解了上面这些，就可以写代码了，因为

- 属性，解决了view的定义问题，即语义描述
- 状态，是view的有穷状态机，根据状态决定ui和行为
- 事件，是view里元素的行为

单独的view的话，实际上上面的东西已经足够了，但是往往我们用的时候是view和viewController一起用的。

但reactjs里并没有却分这个，也就是说view和controller都在组件里，比如ios的但是往往我们用的时候是view和viewController里就有很多生命周期方法，这些在reackjs里也被实现了

## 组件的生命周期

组件的生命周期，另外的名字是状态回调，和上面讲的状态的唯一差别，上面的状态是它里面的元素，而组件的生命周期是它自己

组件的生命周期分成三个状态：

- Mounting：已插入真实 DOM
- Updating：正在被重新渲染
- Unmounting：已移出真实 DOM

React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。

- componentWillMount()
- componentDidMount()
- componentWillUpdate(object nextProps, object nextState)
- componentDidUpdate(object prevProps, object prevState)
- componentWillUnmount()

此外，React 还提供两种特殊状态的处理函数。

- componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
- shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用


## FAQ

1）很多人最常问的问题：比如和jQuery集成可以吗？

reactjs很小，并没有jq提供的功能，可以说它们是互补的，可以结合着使用

2）react比angular好用吗？

reactjs是组件化的最佳实践，但angularjs的mvvm等好用功能，它是没有的，所以更好用说不上，姑且可以认为各有千秋吧

## 推荐



## 总结

总结一下，关于reactjs，我没有讲virtual dom，而是主要讲了4个概念

- 属性
- 状态
- 事件
- 生命周期

如果你掌握了这4点，实际上就已经可以很好的使用reactjs了，比如一般view是要和ajax放到一起用的，这时候，只要在组件的生命周期里处理即可，实际上也还是上面的东西，此处就不罗嗦了。


## todo（reactjs高级篇）

- 加点 路由和 数据单向流的 东西吧
- 或者 是服务器端渲染的 数据请求逻辑 什么的
- 如果能用redux 和express做个例子 那就更好了
