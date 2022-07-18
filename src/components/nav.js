import React from "react"
import CallInfo from "./CallInfo"
import { useLocation } from 'react-router-dom'

const Nav = () => {
  const {pathname} = useLocation();
  console.log(pathname);

  return (<>
    <div className="topnav">
      <div className="hz">
        <div className="topnav-title">林川精密专业生产SMT钢网,激光钢网厂家,9年间服务客户超3000家,生产超25万张优质钢网</div>
        <div className="topnav-sidebar">
          <ul>
            <li><a href="http://www.xjxsmt.com/" rel="nofollow">中文版</a></li>
            <li>|</li>
            <li><a href="http://en.xjxsmt.com/" rel="nofollow">English</a></li>
            <li>|</li>
            {/* <li> <a href="javascript:void(0);" onclick="AddFavorite('我的网站',location.href)" rel="nofollow">收藏本站</a></li> */}
            <li><a href="http://www.xjxsmt.com/contact.html" rel="nofollow">联系林川 </a></li>
            <li>|</li>
            <li><a href="http://www.xjxsmt.com/sitemap.xml" target="_blank" rel="nofollow noreferrer">网站地图 </a></li>
          </ul>
        </div>
      </div>
    </div>
    <CallInfo />
    <div className="nav">
      <div className="hz">
        <div className="mainbav">
          <ul>
            <li className={`memu ${pathname === '/' ? 'active' : ''}`}>
              <a href="/" rel="nofollow" title="林川首页">林川首页</a>
            </li>
            <li className="memu ">
              <a href="http://www.xjxsmt.com/products.html" title="SMT钢网">SMT钢网</a>
              <ul style={{ display: 'none' }}>
                <li><a href="http://www.xjxsmt.com/products-jg.html" title="激光钢网">激光钢网</a></li>
                <li><a href="http://www.xjxsmt.com/products-lm.html" title="纳米钢网">纳米钢网</a></li>
                <li><a href="http://www.xjxsmt.com/products-dp.html" title="电抛光钢网">电抛光钢网</a></li>
                <li><a href="http://www.xjxsmt.com/products-jt.html" title="阶梯钢网">阶梯钢网</a></li>
                <li><a href="http://www.xjxsmt.com/products-fg.html" title="FG钢网">FG钢网</a></li>
                <li><a href="http://www.xjxsmt.com/products-dj.html" title="电铸钢网">电铸钢网</a></li>
                <li><a href="http://www.xjxsmt.com/products-ai.html" title="AI钢网">AI钢网</a></li>
                <li><a href="http://www.xjxsmt.com/products-wk.html" title="微孔钢网">微孔钢网</a></li>
                <li><a href="http://www.xjxsmt.com/products-zj.html" title="SMT治具">SMT治具</a></li>
                <li><a href="http://www.xjxsmt.com/products-ym.html" title="掩模板">掩模板</a></li>
                <li><a href="http://www.xjxsmt.com/process-etching.html" title="蚀刻加工">蚀刻加工</a></li>
              </ul>
            </li>
            <li className="memu ">
              <a href="http://www.xjxsmt.com/products-jg.html" title="激光钢网">激光钢网</a>
            </li>
            <li className="memu ">
              <a href="http://www.xjxsmt.com/products-lm.html" title="纳米钢网">纳米钢网</a>
            </li>
            <li className={`memu ${pathname === '/kaikong' ? 'active' : ''}`}>
              <a href="/kaikong" rel="nofollow" title="开孔方案">开孔方案</a>
            </li>
            <li className="memu ">
              <a href="http://www.xjxsmt.com/xjsb.html" rel="nofollow" title="厂家设备">厂家设备</a>
              <ul style={{ display: 'none' }}>
                <li><a href="http://www.xjxsmt.com/xjsb-gc.html" rel="nofollow" title="工程软件设备">工程软件设备</a></li>
                <li><a href="http://www.xjxsmt.com/xjsb-qg.html" rel="nofollow" title="切割设备">切割设备</a></li>
                <li><a href="http://www.xjxsmt.com/xjsb-bg.html" rel="nofollow" title="孔壁抛光设备">孔壁抛光设备</a></li>
                <li><a href="http://www.xjxsmt.com/xjsb-jc.html" rel="nofollow" title="检测设备">检测设备</a></li>
              </ul>
            </li>
            <li className="memu ">
              <a href="http://www.xjxsmt.com/khmy.html" rel="nofollow" title="客户评价">客户评价</a>
            </li>
            <li className="memu ">
              <a href="http://www.xjxsmt.com/honorary.html" rel="nofollow" title="荣誉资质">荣誉资质</a>
            </li>
            <li className={`memu ${pathname === '/about' ? 'active' : ''}`}>
              <a href="/about" rel="nofollow" title="林川简介">林川简介</a>
              <ul>
                <li><a href="http://www.xjxsmt.com/about-gsjj.html" rel="nofollow" title="公司简介">公司简介</a></li>
                <li><a href="http://www.xjxsmt.com/about-hzhb.html" rel="nofollow" title="合作伙伴">合作伙伴</a></li>
              </ul>
            </li>
            <li className="memu ">
              <a href="http://www.xjxsmt.com/contact.html" rel="nofollow" title="联系林川">联系林川</a>
              <ul>
                <li><a href="http://www.xjxsmt.com/contact-fs.html" rel="nofollow" title="联系方式">联系方式</a></li>
                <li><a href="http://www.xjxsmt.com/feedback.html" title="在线留言">在线留言</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default Nav