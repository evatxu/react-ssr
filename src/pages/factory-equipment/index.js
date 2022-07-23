import React from 'react';

import case_1 from '../../images/case.jpeg';
import img_2 from '../../images/2.jpeg'
import img_1 from '../../images/1.jpeg';
import img_qyxc2 from '../../images/qyxc2.jpeg'
const FactoryEquipment = () => {
  return (
    <div>
      <div class="ny-banner"><img src={case_1} alt='厂家设备' /></div>
      <div class="about-menu-hz">
        <div class="hz">
          <div class="about-menu-top">
            <div class="fl about-menu-top-title">先进工程软件设备辅助工程师更快设计出更适合您的产品，为您节约时间。</div>
          </div>
          <div class="clear"></div>
          <div class="ny_dh_bj">
            <div class="about-menu-cd">
              <ul>
                <li><a class="on" href="http://www.xjxsmt.com/xjsb-gc.html">工程软件设备</a></li>
                <li><a href="http://www.xjxsmt.com/xjsb-qg.html">切割设备</a></li>
                <li><a href="http://www.xjxsmt.com/xjsb-bg.html">孔壁抛光设备</a></li>
                <li><a href="http://www.xjxsmt.com/xjsb-jc.html">检测设备</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="hza">
        <div class="news-tt-hz">
          <div class="khfk-pic"><img src={img_2} /></div>
          <div class="khfk-right">
            <div class="news-tt-title"><a href="http://www.xjxsmt.com/original.html">原装进口贴片层采集机</a></div>
            <div class="khfk-content">
              线路板贴片层采集设备是用来解决客户无法提供线路板GBR文件，而需要用线路板实物（PCB）作为原始资料开制smt钢网的情况，用此设备可以将线路板上需要贴片的元器件一一扫描出来，再经专业SMT钢网处理软件，制作成我们需要的GBR文件，再进行smt钢网的生产，所以有了此设备客户就不用为没有线路板文件而发愁了。
            </div>
            <div class="news-tt-more"><a href="http://www.xjxsmt.com/original.html"> 查看详情 >></a></div>
          </div>
        </div>
        <div class="news-tt-hz">
          <div class="khfk-pic"><img src={img_1} /></div>
          <div class="khfk-right">
            <div class="news-tt-title"><a href="http://www.xjxsmt.com/professional.html">专业SMT钢网设计软件</a></div>
            <div class="khfk-content">
              SMT钢网设计软件是专业为smt钢网设计开发的一套软件，它帮助钢网设计工程师更高效地完成客户需要的效果，不易出错，便于检查，让您的SMT钢网质量更优。
            </div>
            <div class="news-tt-more"><a href="http://www.xjxsmt.com/professional.html"> 查看详情 >></a></div>
          </div>
        </div>
        <div class="news-tt-hz">
          <div class="khfk-pic"><img src={img_qyxc2} /></div>
          <div class="khfk-right">
            <div class="news-tt-title"><a href="http://www.xjxsmt.com/binary-imager.html">二次元影像仪</a></div>
            <div class="khfk-content">
              全自动二次元影像仪是林川为解决大型线路板无法提供GBR文件，生产SMT钢网无贴片层数据的问题而引进的。它的采集面积可达800*1000mm，精度高误差在0.01mm以内。
            </div>
            <div class="news-tt-more"><a href="http://www.xjxsmt.com/binary-imager.html"> 查看详情 >></a></div>
          </div>
        </div>
      </div>
      </div>
      )

}

      export default FactoryEquipment;