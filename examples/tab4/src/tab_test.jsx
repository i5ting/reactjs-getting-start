var TabContentItem   = require('./tab_content_item.jsx');
var TabContent       = require('./tab_content.jsx');

var Tab              = require('./tab.jsx');

var data = ['tab说明','特性','开源协议','源码','张婷作品'];

React.render(
  <Tab headers={data} current_tab_index={2}>
    <TabContent>
      <TabContentItem>
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
  </Tab>
  ,
  document.getElementById('wrap1')
);