import React from "react";
import { Tabs } from 'antd';

import url1 from "../../images/index_47.jpeg";
import url2 from "../../images/index_47.jpeg";
import url3 from "../../images/index_48.jpeg";
import url4 from "../../images/index_49.jpeg";
import url5 from "../../images/index_50.jpeg";

const { TabPane } = Tabs;

const list = [
  {
    title: "工厂实力",
    url: url1,
    intro: [
      "核心技术人员行内10年以上经验",
      "进口专用设备保证产品精度",
      "已为3000+客户生产超5000000+张合格SMT钢网"
    ]
  },
  {
    title: "交货时间",
    url: url2,
    intro: [
      "在线电抛光技术，最快生产周期1小时/张",
      "对比传统SMT钢网工艺每张节省至少2小时",
      "高效的运输团队一张钢网也准时送达"
    ]
  },
  {
    title: "质量稳定",
    url: url3,
    intro: [
      "ISO认证体系,强大的技术团队",
      "全自动检测设备",
      "每张SMT钢网都要经过6道检测工序"
    ]
  },
  {
    title: "产品创新",
    url: url4,
    intro: [
      "面板封装使用SMT钢网效率提升1000%",
      "省去上千万设备投入",
      "LED散热使用钢网后使LED死灯下降30%,节经材料10%",
      "使用寿命从3年提高到5年"
    ]
  },
  {
    title: "优质服务",
    url: url5,
    intro: [
      "在线电抛光技术，最快生产周期1小时/张",
      "对比传统SMT钢网工艺每张节省至少2小时",
      "高效的运输团队一张钢网也准时送达"
    ]
  }
];


// eslint-disable-next-line import/no-anonymous-default-export
export default () => { 
 return (
  <Tabs key="tabs" type="card" defaultActiveKey="工厂实力">
    {list.map((item, index) => (
      <TabPane key={index} tab={item.title}>
        <div
          style={{
            padding: "40px 0 40px 10px",
            textAlign: 'left',
            background: `url(${item.url}) no-repeat right top #f7f7f7`
          }}
        >
          <h2 style={{fontSize: "32px",
                    marginLeft: '35px',
                    fontWeight: "bold",
                    color: "#0089e1"}}>
            {item.title}
          </h2>
          {item.intro.map((key) => (
            <p style={{fontSize: "15px", marginLeft: '35px',}} key={key}>{key}</p>
          ))}
        </div>
      </TabPane>
    ))}
  </Tabs>
)
}