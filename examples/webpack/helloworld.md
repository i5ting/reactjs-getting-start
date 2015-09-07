# webpack-helloworld
安装

    [sudo] npm install -g webpack
    [sudo] npm install -g webpack-dev-server
    
初始化webpack/helloworld目录
    
    mkdir webpack/helloworld
    cd webpack/helloworld
    npm init
    touch main.js index.js
    touch webpack.config.js

可以把 ./main.js 作为入口打包 bundle.js:

```
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'index.js'       
  }
};
```

main.js

```
var o = require('./test')
console.log(o)
// var o = require('./main')
o.say('hello')
```

test.js

```
module.exports = {
  say: function(str){
    console.log('say words: ' + str);
  }
};
```

测试

```
➜  helloworld git:(master) npm test

> helloworld@1.0.0 test /Users/sang/workspace/github/reactjs/examples/webpack/helloworld
> webpack  --target node && node index.js

Hash: 70040d7d89102e3ca122
Version: webpack 1.12.1
Time: 31ms
   Asset     Size  Chunks             Chunk Names
index.js  1.69 kB       0  [emitted]  main
   [0] ./main.js 56 bytes {0} [built]
   [1] ./test.js 157 bytes {0} [built]
{ say: [Function] }
say words: hello
```

上面是简单的nodejs使用webpack的场景，下面给出最常见的web场景，把css和js都打包到一起