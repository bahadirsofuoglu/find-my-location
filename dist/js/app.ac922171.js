(function(t){function e(e){for(var o,s,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("GetLocation")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("b-card",[n("b-row",[n("b-col",{attrs:{md:"8"}}),n("b-col",[n("b-button",{staticClass:"mb-3 mr-2 ",attrs:{variant:"dark"},on:{click:function(e){return t.locatorButtonPressed()}}},[t._v("Konumumu Bul")]),n("b-button",{directives:[{name:"show",rawName:"v-show",value:1==t.showMap,expression:"showMap == true"},{name:"b-modal",rawName:"v-b-modal.modal-center.modal-lg",modifiers:{"modal-center":!0,"modal-lg":!0}}],staticClass:"mb-3 mr-2",attrs:{variant:"danger"}},[t._v("Haritada Göster")])],1)],1),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Waiting Your Address..",rows:"3","max-rows":"6"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)],1),n("div",[n("b-modal",{attrs:{title:t.description,id:"modal-lg",size:"lg",centered:""}},[n("GmapMap",{staticClass:"map",attrs:{center:{lat:t.towTruck.lat,lng:t.towTruck.lng},zoom:13}},[n("gmap-marker",{attrs:{position:t.userLocation}}),n("gmap-marker",{attrs:{position:t.towTruck,icon:{url:"/TowTruck-icon.png"}}})],1)],1)],1)])},i=[],c=(n("a4d3"),n("e01a"),n("99af"),n("96cf"),n("1da1")),u=n("bc3a"),l=n.n(u),d={data:function(){return{address:"",userLocation:{lat:null,lng:null},towTruck:{lat:null,lng:null},step:0,interval:null,routeData:null,showMap:!1,distance:"",duration:"",description:""}},computed:{url:function(){return"https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=".concat(this.towTruck.lat,",").concat(this.towTruck.lng,"&destination=").concat(this.userLocation.lat,",").concat(this.userLocation.lng,"&key=AIzaSyDz1nw7RPkW2jWm9-SOv2tVc4Ss-vKmYCw")}},mounted:function(){},methods:{locatorButtonPressed:function(){var t=this;this.towTruckPosition=0,this.showMap=!0,navigator.geolocation.getCurrentPosition((function(e){t.getStreetAddressFrom(e.coords.latitude,e.coords.longitude)}),(function(t){console.log(t.message)}));var e=this;this.description="Çekici bekleniyor...",window.setTimeout((function(){t.description="Çekiciniz yola çıktı.. Tahmini varış süresi: ".concat(t.duration," - Tahmini mesafe: ").concat(t.distance)}),5e3),window.setTimeout(Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.towTruck={lat:41.028941,lng:29.0390162},n.next=3,t.getRouteData();case 3:e.interval=window.setInterval((function(){console.log("interval"),e.changeDestination()}),3e3);case 4:case"end":return n.stop()}}),n)}))))},getRouteData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.towTruckPosition=1,n=new Request(t.url),e.next=5,l()(n);case 5:o=e.sent,console.log(o),"NOT_FOUND"==o.data.status&&t.getRouteData(),"OK"!==o.data.status?(console.log(o.error_message),t.getRouteData()):(console.log(o.data.routes),t.routeData=o.data.routes.length>0?o.data.routes[0]:null),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0.message),t.getRouteData();case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},changeDestination:function(){if(this.routeData){console.log(this.routeData);var t=this.routeData.legs[0].steps;this.towTruck.lat=t[this.step].end_location.lat,this.towTruck.lng=t[this.step].end_location.lng,this.distance=this.routeData.legs[0].distance.text,this.duration=this.routeData.legs[0].duration.text,t.length>this.step+1?this.step++:(window.clearInterval(this.interval),this.description=" Çekiciniz konumunuza ulaştı..")}},getStreetAddressFrom:function(t,e){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){var a,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,l.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+t+","+e+"&key=AIzaSyDz1nw7RPkW2jWm9-SOv2tVc4Ss-vKmYCw");case 3:a=o.sent,r=a.data,r.error_message?console.log(r.error_message):(n.userLocation.lat=r.results[0].geometry.location.lat,n.userLocation.lng=r.results[0].geometry.location.lng,n.address=r.results[0].formatted_address,console.log(n.url),console.log(n.userLocation.lat),console.log(n.userLocation.lng)),o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),console.log(o.t0.message);case 11:case"end":return o.stop()}}),o,null,[[0,8]])})))()}}},p=d,g=(n("d6a9"),n("2877")),m=Object(g["a"])(p,s,i,!1,null,"712520be",null),f=m.exports,h={name:"App",components:{GetLocation:f}},v=h,w=(n("034f"),Object(g["a"])(v,a,r,!1,null,null,null)),b=w.exports,k=n("5f5b"),y=n("b1e0"),x=n("a7fe"),O=n.n(x),T=n("755e");n("f9e3"),n("2dd8");o["default"].config.productionTip=!1,o["default"].use(k["a"]),o["default"].use(O.a,l.a),o["default"].use(y["a"]),o["default"].use(T,{load:{key:"AIzaSyDz1nw7RPkW2jWm9-SOv2tVc4Ss-vKmYCw",libraries:"places, directions",installComponents:!0}}),new o["default"]({render:function(t){return t(b)}}).$mount("#app")},"5b4c":function(t,e,n){},"85ec":function(t,e,n){},d6a9:function(t,e,n){"use strict";var o=n("5b4c"),a=n.n(o);a.a}});
//# sourceMappingURL=app.ac922171.js.map