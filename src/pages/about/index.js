import React from 'react'
import img_about from '../../images/about.jpeg';
export const About = () => {
  return (
    <div>
      <div class="ny-banner"><img src={img_about} alt='联系林川' /></div>
      <div class="about-menu-hz">
        <div class="hz">
          <div class="ny_dh_bj">
            <div class="about-menu-cd">
              <ul>
                <li><a class="on" href="http://www.xjxsmt.com/about-gsjj.html">公司简介</a></li>
                <li><a href="http://www.xjxsmt.com/about-hzhb.html">合作伙伴</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="hza">
        <div class="about-title">公司简介</div>
        <div class="about-hz">
          <div class="about-content"><p style={{lineHeight: "2em"}}>
            深圳市林川精密科技有限公司是一家专业生产smt钢网的企业，7年来专注为SMT印刷领域提高产品直通率，降低生产成本，目前生产的产品涵盖：激光钢网、电抛光钢网、阶梯钢网、纳米钢网、FG钢网、电铸钢网、双工艺钢网、AI钢网等。
          </p>
            <p style={{lineHeight: '2em'}}>
              近几年随着电子产品向便携式、小型化方向的迅速发展，新的高密度组装技术不断涌现，如球栅阵列封装(BGA)和板上芯片(COB)封装等，其管脚间距日益减小，这样对SMT钢网的印刷要求越来越高，为满足客户需求，林川精密相继开发出各种高新、特殊工艺的产品：提供模块和大引脚元件的阶梯钢网;同时上锡膏和红胶的双工艺钢网;AI后不用点胶机的AI钢网;针对板上芯片(COB)封装的纳米钢网;触摸屏LED的微孔纳米钢网;TV导光板上用的导光板钢网。
            </p>
            <p style={{lineHeight: '2em'}}>
              “以品质求生存，以信誉求发展”的服务思想，“帮助客户成功、创造价值典范、通过卓越技术不断创新”经营理念，免费提供技术咨询服务。为用户提供优质高性价比
              产品、贴心完善的售后服务
            </p></div>
          <div class="about-pic"><img src="http://www.xjxsmt.com/Data/xjxsmt/template/cn/images/about-tu.jpg" /></div>
        </div>
        <div class="clear"></div>
        <div class="about-title">林川精密优势</div>
        <div class="about-ys"><img src="http://www.xjxsmt.com/Data/xjxsmt/template/cn/images/ys.jpg" /></div>
      </div>
    </div>
  )
}