import "../styles.css";
import url1 from "../images/index_06.jpeg";
import url2 from "../images/index_09.jpeg";

export default function CallInfo() {
  return (
      <div className="call-info overflow-hidden w-10/12 m-auto">
        <div className="fl logo">
          <h1>
            <a title="smt钢网" href="http://www.xjxsmt.com/">
              <img src={url1} alt="smt钢网" />
            </a>
          </h1>
        </div>
        <div className="fl top-name-hz">
          <div className="column">9年专业生产SMT钢网</div>
          <div className="gg"> 专注为客户提升直通率,降低成本</div>
        </div>
        <div className="fr fw-hz">
          <div className="top-rz-pic">
            <img src={url2} alt="smt" />
          </div>
          <div className="tel-title">
            <div>0755-29749682</div>
            <div>18928403435</div>
          </div>
        </div>
      </div>
  );
}
