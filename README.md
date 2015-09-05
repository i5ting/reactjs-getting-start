# reactjs

- 代码 https://github.com/facebook/react
- 入门（中文） http://reactjs.cn/react/docs/getting-started.html

## Virtual DOM

Virtual DOM是reactjs的最核心概念，我拷贝一段来说明它

在Web开发中，我们总需要将变化的数据实时反应到UI上，这时就需要对DOM进行操作。而复杂或频繁的DOM操作通常是性能瓶颈产生的原因（如何进行高性能的复杂DOM操作通常是衡量一个前端开发人员技能的重要指标）。React为此引入了虚拟DOM（Virtual DOM）的机制：在浏览器端用Javascript实现了一套DOM API。基于React进行开发时所有的DOM构造都是通过虚拟DOM进行，每当数据变化时，React都会重新构建整个DOM树，然后React将当前整个DOM树和上一次的DOM树进行对比，得到DOM结构的区别，然后仅仅将需要变化的部分进行实际的浏览器DOM更新。而且React能够批处理虚拟DOM的刷新，在一个事件循环（Event Loop）内的两次数据变化会被合并，例如你连续的先将节点内容从A变成B，然后又从B变成A，React会认为UI不发生任何变化，而如果通过手动控制，这种逻辑通常是极其复杂的。尽管每一次都需要构造完整的虚拟DOM树，但是因为虚拟DOM是内存数据，性能是极高的，而对实际DOM进行操作的仅仅是Diff部分，因而能达到提高性能的目的。这样，在保证性能的同时，开发者将不再需要关注某个数据的变化如何更新到一个或多个具体的DOM元素，而只需要关心在任意一个数据状态下，整个界面是如何Render的。


说那么多你可能都没明白，上例子

## helloworld

```
bower install --save react
```

创建并编写index.html

```
<!DOCTYPE html>
<html>
  <head>
    <!-- The core React library -->
    <script src="bower_components/react/react.js"></script>
    <!-- In-browser JSX transformer, remove when pre-compiling JSX. -->
    <script src="bower_components/react/JSXTransformer.js"></script>
  </head>
  <body>
    <div id="container"></div>
    <script type="text/jsx" src="helloworld.jsx">
  </body>
</html>
```

编写helloworld.jsx

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

然后使用http-server启动一个http服务（如果没有http-server，请[sudo]npm install -g http-server）

    http-server .  -p 8044 -o

访问

    http://127.0.0.1:8044/
    

首先，这是一种 HTML-like 的语法，叫jsx，可以理解成coffee，typescript之类的，需要编译

核心就是React.render，说明这个组件放在什么地方，比如上面的例子就是

    <div id='container'>
      ...
    </div>


这样页面就可以拆分成n个小块，每块各自为政，即所谓的组件化（也就积木一样）

注意：

1. 对于内联与HTML中的代码或者是未经过转化的外部文件，在script标签中要加上type="text/jsx"，并引入JSXTransformer.js文件即可
1. 上面使用的是helloworld.jsx，这是为了演示用的，实际reactjs建议的后缀是js
1. 使用http-server可以防止chrome的本地资源跨域问题

开发阶段这样写没问题，但上线的产品环境是不能这样写的，见helloworld2

## helloworld2（使用react-tools编译jsx）

复制helloworld为helloworld2，创建dist目录存放编译后的jsx文件，把helloworld.jsx放到src/helloworld.jsx,同时修改index.html里的链接

    <script type="text/jsx" src="dist/helloworld.js">

至此准备工作就做完了，下面开始介绍使用react-tools来编译jsx

```
➜  reactjs git:(master) ✗ npm install -g react-tools
➜  reactjs git:(master) ✗ jsx --help

  Usage: jsx [options] <source directory> <output directory> [<module ID> [<module ID> ...]]

  Options:

    -h, --help                               output usage information
    -V, --version                            output the version number
    -c, --config [file]                      JSON configuration file (no file or - means STDIN)
    -w, --watch                              Continually rebuild
    -x, --extension <js | coffee | ...>      File extension to assume when resolving module identifiers
    --relativize                             Rewrite all module identifiers to be relative
    --follow-requires                        Scan modules for required dependencies
    --use-provides-module                    Respect @providesModules pragma in files
    --cache-dir <directory>                  Alternate directory to use for disk cache
    --no-cache-dir                           Disable the disk cache
    --source-charset <utf8 | win1252 | ...>  Charset of source (default: utf8)
    --output-charset <utf8 | win1252 | ...>  Charset of output (default: utf8)
    --harmony                                Turns on JS transformations such as ES6 Classes etc.
    --target [version]                       Specify your target version of ECMAScript. Valid values are "es3" and "es5". The default is "es5". "es3" will avoid uses of defineProperty and will quote reserved words. WARNING: "es5" is not properly supported, even with the use of es5shim, es5sham. If you need to support IE8, use "es3".
    --strip-types                            Strips out type annotations.
    --es6module                              Parses the file as a valid ES6 module. (Note that this means implicit strict mode)
    --non-strict-es6module                   Parses the file as an ES6 module, except disables implicit strict-mode. (This is useful if you're porting non-ES6 modules to ES6, but haven't yet verified that they are strict-mode safe yet)
    --source-map-inline                      Embed inline sourcemap in transformed source
```

安装完成后

```
➜  helloworld2 git:(master) ✗ jsx src/ dist/ -w
["helloworld"]
``` 

上面的`-w`是watch的意思，就是当src目录里的任何文件变动，就会重新编译，和gulp-watch是类似的。

然后执行

    http-server .  -p 8045 -o


访问

    http://127.0.0.1:8045/


## helloworld3（使用gulp-react编译jsx）

复制helloworld2为helloworld3


https://github.com/sindresorhus/gulp-react

安装

    npm install --save gulp-react

创建gulpfile.js

```
var gulp = require('gulp');
var react = require('gulp-react');
 
gulp.task('jsx', function () {
    return gulp.src('src/**')
        .pipe(react())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['jsx'], function() {
  gulp.watch('./src/**/*', ['jsx']);
});
```

- 执行`gulp jsx`是编译src下的所有
- 执行`gulp`是编译src下的所有，并当src变动的时候也会重新编译src下的

实际上helloworld2和helloworld3可以实现的功能是一样的，不过gulp更强大更丰富一些，推荐使用gulp。

如果各位不熟悉gulp，参见https://github.com/streakq/js-tools-best-practice/blob/master/doc/Gulp.md


更多jsx集成和构建工具见

- https://github.com/facebook/react/wiki/Complementary-Tools#jsx-integrations
- https://github.com/facebook/react/wiki/Complementary-Tools#build-tools

至此我们完成了3个helloworld，相信大家都已经熟悉了react的几种开发方式和入门例子，下面继续深入reactjs。

## 带有状态的组件

再来个复杂点的，下面给出的是带有状态的组件

见`examples/simple-state/src/state.js`

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

React.render(<Input/>, document.getElementById('container'));

```

然后

    http-server .  -p 8046 -o

访问

    http://127.0.0.1:8046/


是不是有点像双向数据绑定的意思？感兴趣可以看看angular或vuejs或avalon，好多。。。

## 视图相关的3个概念（属性，状态，事件）

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

## 推荐阅读

- http://www.ruanyifeng.com/blog/2015/03/react.html
- http://segmentfault.com/a/1190000002559219
- http://my.oschina.net/leogao0816/blog/379487

## 最佳实践

### ant-design

https://github.com/ant-design

特性

- 提炼自企业级后台产品的交互语言和视觉风格。
- 丰富实用的 React UI 组件。
- 基于 React 的组件化开发模式。
- 背靠 npm 生态圈。
- 基于 webpack 的调试构建方案，支持 ES6。

我们来换一种说法

- 基于react组件化
- 代码在npm里，做到模块化
- 通过webpack构建，更灵活

至于说es几，那只是噱头而已

通过npm，可以更好的和nodejs结合，利用node的生态来扩展，其实bower等也类似，但对package.json不友好，所以我是很看好这种方式的。

以后js大一统，npm就不在只是nodejs package manager的，而是js package manager

另外它的界面设计的很好，模块化的做的也很好，我非常喜欢，唯一的缺点是它对nodejs的版本要求太高了，会让一小部分人不适应的。

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
