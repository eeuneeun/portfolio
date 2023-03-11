import React, { Component } from "react";
import MaLib from "./MapLib";


const branchList = [
  {
    id : 1,
    name : "서울지부",
    lat : 38.15135248460305,
    lng : 127.8057077624652,
    site : "Indonesia CireBon-2",
    capacity : "1,000MW",
    config : "1 Boller - 1STG",
    phmMachines : "CWP x 3EA",
  },
  {
    id : 2,
    name : "중국지부",
    lat : 34.10674574568669,
    lng : 99.24125419487875,
    site : "Indonesia CireBon-2",
    capacity : "1,000MW",
    config : "1 Boller - 1STG",
    phmMachines : "CWP x 3EA",
  },
  {
    id : 3,
    name : "아프리카",
    lat : 7.296475915979212,
    lng : 19.70023839855501,
    site : "Indonesia CireBon-2",
    capacity : "1,000MW",
    config : "1 Boller - 1STG",
    phmMachines : "CWP x 3EA",
  },
]


export default class Map extends Component {
  
  createInfoWindow = (e, map, name) => {

    const targetBranch = branchList.find(item => item.name === name);
    
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div className="popup-wrap">' + 
                  '<div className="popup-header">'+ targetBranch.name +'</div>' + 
                  '<div className="popup-container">' +
                    '<ul>' +
                      '<li>' + targetBranch.site + '</li>' +
                      '<li>' + targetBranch.capacity + '</li>' +
                      '<li>' + targetBranch.config + '</li>' +
                      '<li>' + targetBranch.phmMachines + '</li>' +
                    '</ul>' +
                  '</div>' +
                '</div>',
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    });
    
    infoWindow.open(map);
  };
 
  render() {
    return (
      <MaLib id="myMap"
            
            options={{
              center: { lat: 33.4890, lng: 126.4983 },
              zoom: 2
            }}

            onMapLoad={map => {
              branchList.map((item)=>{
                // console.log(item)
                const marker = new window.google.maps.Marker({
                  position: { lat: item.lat, lng: item.lng },
                  map: map
                });

                marker.addListener('click', e => {
                  this.createInfoWindow(e, map, item.name);
                });
              })
            }}
      />
    );
  };

};