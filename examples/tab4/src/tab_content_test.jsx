var TabHeaderItem   = require('./tab_header_item.jsx');
var TabHeader       = require('./tab_header.jsx');

var TabContentItem   = require('./tab_content_item.jsx');
var TabContent       = require('./tab_content.jsx');

React.render(
    // <TabHeader>
    //   <TabHeaderItem
    //     current
    //     title="tab说明"
    //   />
    //   <TabHeaderItem
    //     title="特性"
    //   />
    //   <TabHeaderItem
    //     title="开源协议"
    //   />
    //   <TabHeaderItem
    //     title="源码"
    //   />
    //   <TabHeaderItem
    //     title="张婷作品"
    //   />
    // </TabHeader>
    <TabContent>
      <TabContentItem current>
        <p>tab说明</p>
      </TabContentItem>
      <TabContentItem>
        特性
      </TabContentItem>
      <TabContentItem>
        开源协议
      </TabContentItem>
  
      <TabContentItem>
        源码
      </TabContentItem>
      <TabContentItem>
        <p>张婷作品</p>
      </TabContentItem>
    </TabContent>
  ,
  document.getElementById('wrap1')
);
