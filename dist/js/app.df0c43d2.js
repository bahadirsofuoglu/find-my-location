(function(t){function e(e){for(var a,s,l=e[0],c=e[1],i=e[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0428":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("GetLocation")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("b-card",[n("b-row",[n("b-col",{attrs:{md:"8"}}),n("b-col",[n("b-button",{directives:[{name:"show",rawName:"v-show",value:1==t.showMap,expression:"showMap == true"},{name:"b-modal",rawName:"v-b-modal.modal-center.modal-lg",modifiers:{"modal-center":!0,"modal-lg":!0}}],staticClass:"mb-3 mr-2",attrs:{variant:"danger"}},[t._v("Haritada Göster")]),n("b-button",{staticClass:"mb-3 ",attrs:{variant:"dark"},on:{click:function(e){return t.locatorButtonPressed()}}},[t._v("Konumumu Bul")])],1)],1),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Waiting Your Address..",rows:"3","max-rows":"6"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)],1),n("b-modal",{attrs:{id:"modal-lg",size:"lg",centered:"",title:"Çekici Yola Çıktı"}},[n("GmapMap",{staticClass:"map",attrs:{center:{lat:this.towTruck.lat,lng:this.towTruck.lng},zoom:13}},[n("gmap-marker",{attrs:{position:t.userLocation}}),n("gmap-marker",{attrs:{position:t.towTruck,icon:{url:"/tow-truck (1).png"}}})],1)],1)],1)},l=[],c=(n("99af"),n("96cf"),n("1da1")),i=n("bc3a"),u=n.n(i),d={data:function(){return{address:"",userLocation:{lat:null,lng:null},towTruck:{lat:null,lng:null},step:0,interval:null,routeData:null,showMap:!1}},computed:{url:function(){return"https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=".concat(this.towTruck.lat,",").concat(this.towTruck.lng,"&destination=").concat(this.userLocation.lat,",").concat(this.userLocation.lng,"&key=AIzaSyDz1nw7RPkW2jWm9-SOv2tVc4Ss-vKmYCw")}},mounted:function(){},methods:{locatorButtonPressed:function(){var t=this;this.showMap=!0,navigator.geolocation.getCurrentPosition((function(e){t.getStreetAddressFrom(e.coords.latitude,e.coords.longitude)}),(function(t){console.log(t.message)}));var e=this;window.setTimeout(Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.towTruck={lat:41.028941,lng:29.0390162},n.next=3,t.getRouteData();case 3:e.interval=window.setInterval((function(){console.log("interval"),e.changeDestination()}),3e3);case 4:case"end":return n.stop()}}),n)}))),3e3)},getRouteData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new Request(t.url),e.next=4,u()(n);case 4:a=e.sent,console.log(a),"NOT_FOUND"==a.data.status&&t.getRouteData(),"OK"!==a.data.status?(console.log(a.error_message),t.getRouteData()):(console.log(a.data.routes),t.routeData=a.data.routes.length>0?a.data.routes[0]:null),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0.message),t.getRouteData();case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},changeDestination:function(){if(this.routeData){console.log(this.routeData);var t=this.routeData.legs[0].steps;this.towTruck.lat=t[this.step].end_location.lat,this.towTruck.lng=t[this.step].end_location.lng,t.length>this.step+1?this.step++:window.clearInterval(this.interval)}},getStreetAddressFrom:function(t,e){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+t+","+e+"&key=AIzaSyDz1nw7RPkW2jWm9-SOv2tVc4Ss-vKmYCw");case 3:r=a.sent,o=r.data,o.error_message?console.log(o.error_message):(n.userLocation.lat=o.results[0].geometry.location.lat,n.userLocation.lng=o.results[0].geometry.location.lng,n.address=o.results[0].formatted_address,console.log(n.url),console.log(n.userLocation.lat),console.log(n.userLocation.lng)),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()}}},p=d,f=(n("daf5"),n("2877")),g=Object(f["a"])(p,s,l,!1,null,"ba59512c",null),m=g.exports,h={name:"App",components:{GetLocation:m}},v=h,w=(n("034f"),Object(f["a"])(v,r,o,!1,null,null,null)),b=w.exports,k=n("5f5b"),y=n("b1e0"),O=n("a7fe"),x=n.n(O),j=n("755e");n("f9e3"),n("2dd8");a["default"].config.productionTip=!1,a["default"].use(k["a"]),a["default"].use(x.a,u.a),a["default"].use(y["a"]),a["default"].use(j,{load:{key:"AIzaSyDz1nw7RPkW2jWm9-SOv2tVc4Ss-vKmYCw",libraries:"places, directions",installComponents:!0}}),new a["default"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){},daf5:function(t,e,n){"use strict";var a=n("0428"),r=n.n(a);r.a}});
//# sourceMappingURL=app.df0c43d2.js.map