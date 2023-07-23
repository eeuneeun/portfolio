/* React */
import React from "react";
import { prefix } from "/config/config.js";

export default function Study(props) {
  return (
    <div id="study" className="study">
      <div className="inner">
        <h2>PERSONAL PROJECT</h2>

        <h3>Zenity 를 이용하여 개발한 KVM 관리툴</h3>
        <article className="project">
          <div className="spec">
            <dl>
              <dt>OS : </dt>
              <dd>CentOS</dd>
            </dl>
            <dl>
              <dt>LANGUAGE : </dt>
              <dd>Bash Shell Script</dd>
            </dl>
            <dl>
              <dt>DATABASE : </dt>
              <dd>Maria DB</dd>
            </dl>
            <dl>
              <dt>LIBRARY : </dt>
              <dd>KVM, Zenity Library</dd>
            </dl>
            <dl>
              <dt>GITHUB : </dt>
              <dd>
                <a href="https://github.com/eeuneeun/kvmManager">
                  kvmManager Link
                </a>
              </dd>
            </dl>
          </div>
          <div className="video-wrap">
            <video
              src={`${prefix}/video/KVMToolByZenity.mp4`}
              type="video/mp4"
              controls
            ></video>
          </div>
        </article>

        <h3>JJABIX</h3>
        <article className="project">
          <div className="spec">
            <dl>
              <dt>OS : </dt>
              <dd>WINDOW</dd>
            </dl>
            <dl>
              <dt>LANGUAGE : </dt>
              <dd>Bash Shell Script, Html, Css, Javascript</dd>
            </dl>
            <dl>
              <dt>DATABASE : </dt>
              <dd>Maria DB</dd>
            </dl>
            <dl>
              <dt>LIBRARY : </dt>
              <dd>Zabbix, ChartJS</dd>
            </dl>
          </div>
          <div className="video-wrap">
            <video
              src={`${prefix}/video/JJABIX.mp4`}
              type="video/mp4"
              controls
            ></video>
          </div>
        </article>
      </div>
    </div>
  );
}
