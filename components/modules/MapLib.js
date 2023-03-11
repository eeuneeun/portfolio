import React, { Component } from "react";


const GOOGLE_API = process.env.NEXT_PUBLIC_GOOGLE_API;

class MapLib extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    this.props.onMapLoad(map);
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.google.com/maps/api/js?key=${GOOGLE_API}`;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);

      s.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return <div id={this.props.id} />;
  }
}

export default MapLib;