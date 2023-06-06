/* React */
import React from "react";

/* Next Js */
import MainGallery from "../pieces/MainGallery";

export default function Profile(props) {
  return (
    <div id="profile" className="profile">
      <div className="inner">
        <h2>PROFILE</h2>
        <div className="gallery-wrap flex-start">
          <MainGallery />
          <article className="profile-contents">
            <h3>
              원은재 <span>1989.02.06</span>
            </h3>

            <h3 className="display-none">보유기술</h3>
            <div className="skills">
              <dl>
                <dt>TOOLS</dt>
                <dd className="photoshop">포토샵</dd>
                <dd className="illustrator">일러스트레이터</dd>
                <dd className="drawing">디지털 드로잉</dd>
              </dl>
              <dl>
                <dt>FRONTEND</dt>
                <dd className="js">Vanilla Javascript ECMA 5, ECMA 6</dd>
                <dd className="jqeury">JQuery</dd>
                <dd className="react">React.js</dd>
                <dd className="nextjs">Next.js</dd>
                <dd className="vuejs">Vue.js</dd>
                <dd className="svelt">Svelt</dd>
              </dl>
              <dl>
                <dt>BACKEND</dt>
                <dd className="nodejs">Node.js Express Fastify</dd>
                <dd className="java">Java</dd>
              </dl>
              <dl>
                <dt>BASH SHELL </dt>
                <dd className="shell">Shell script Zenity</dd>
                <dd className="vyatta">Vyatta</dd>
                <dd className="zabbix">Zabbix</dd>
              </dl>
              <dl>
                <dt>SERVER</dt>
                <dd className="docker">Docker</dd>
                <dd className="kubernetes">Kubernetes Kubeflow airflow</dd>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
