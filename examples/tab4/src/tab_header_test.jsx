var TabHeaderItem   = require('./tab_header_item.jsx');
var TabHeader       = require('./tab_header.jsx');

React.render(
    <TabHeader>
      <TabHeaderItem 
        current
        title="tab说明"
      />
      <TabHeaderItem 
        title="特性"
      />
      <TabHeaderItem 
        title="开源协议"
      />
      <TabHeaderItem 
        title="源码"
      />
      <TabHeaderItem 
        title="张婷作品"
      />
    </TabHeader>
  ,
  document.getElementById('wrap1')
);
