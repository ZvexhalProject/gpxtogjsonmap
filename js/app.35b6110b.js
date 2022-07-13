(function(e){function t(t){for(var n,i,s=t[0],l=t[1],u=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/gpxtogjsonmap/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"055c":function(e,t,r){"use strict";r("2916")},"21d3":function(e,t,r){},2916:function(e,t,r){},4066:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,a,o=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"header"}},[r("b-navbar",{attrs:{type:"dark",variant:"dark",fixed:"top"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[r("router-link",{attrs:{to:{name:"upload"}}},[e._v("Home")])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{staticClass:"right_header"},[e._v("Muchtar Arefi - CMP SS21 - A2")])],1)],1)],1)},u=[],c={name:"Header",props:{}},p=c,f=(r("cce4"),r("2877")),d=Object(f["a"])(p,l,u,!1,null,"1128aae3",null),m=d.exports,h={name:"App",components:{Header:m}},g=h,b=(r("034f"),Object(f["a"])(g,i,s,!1,null,null,null)),v=b.exports,x=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"upload"}},[r("div",[r("b-jumbotron",{attrs:{header:"Standard-GPX-Trackingdaten zu GeoJSON",lead:"Cross-Media-Publishing, Sommersemester 2021 - Hochschule Aalen"}},[r("p",[e._v('Die .gpx Datei einfach mit Drag and Drop in das Feld hineinziehen oder über "Browse" hochladen')])])],1),r("div",{staticClass:"container"},[r("b-form-group",[r("b-form-file",{attrs:{id:"file-large",size:"lg",accept:".gpx, .GPX"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),r("b-alert",{attrs:{show:"",variant:"danger",dismissible:""},model:{value:e.showAlert,callback:function(t){e.showAlert=t},expression:"showAlert"}},[r("strong",[e._v("Datei ist korrupt/fehlerhaft oder im falschen Format.")])]),r("div")],1)])},w=[],O=r("1da1"),M=(r("96cf"),r("a9e3"),r("b0c0"),r("a6f4")),j=Object(M["a"])({parse:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,l,u,c,p,f,d,m,h,g,b,v,x,y,w,O,M,j,k,N,S,C,P,_,D,T,A;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(s=[],l=[],u=[],c=[],p=[],d=[],b=e,v=(new DOMParser).parseFromString(b,"text/xml"),x=v.getElementsByTagName("gpx")[0].children,v.getElementsByTagName("metadata")&&v.getElementsByTagName("metadata").length>0)for(y=v.getElementsByTagName("metadata")[0].children,w=0;w<y.length;w++)"time"==y[w].tagName&&(m=new Date(y[w].textContent));O=0;case 11:if(!(O<x.length)){r.next=45;break}if("wpt"!=x[O].tagName){r.next=22;break}for(M=x[O].children,n=Number(x[O].getAttribute("lat")),a=Number(x[O].getAttribute("lon")),j=0;j<M.length;j++)p=[],c=[],"ele"==M[j].tagName&&(o=Number(M[j].textContent)),"time"==M[j].tagName&&(i=new Date(M[j].textContent),c.push(i)),"name"==M[j].tagName&&(f=M[j].textContent),"desc"==M[j].tagName&&(g=M[j].textContent),o?p.push(a,n,o):p.push(a,n);return r.t0=d,r.next=20,t.buildJSONpt(f,g,c,p);case 20:r.t1=r.sent,r.t0.push.call(r.t0,r.t1);case 22:if("rte"!=x[O].tagName){r.next=31;break}for(u=[],k=x[O].children,N=0;N<k.length;N++)"rtept"==k[N].tagName&&(l=[],n=Number(k[N].getAttribute("lat")),a=Number(k[N].getAttribute("lon")),l.push(a,n)),u.push(l);return r.t2=d,r.next=29,t.buildJSON(null,null,null,null,u);case 29:r.t3=r.sent,r.t2.push.call(r.t2,r.t3);case 31:if("trk"!=x[O].tagName){r.next=42;break}for(s=[],u=[],l=[],S=x[O].children,C=0;C<S.length;C++)if("name"==S[C].tagName&&(h=S[C].textContent),"desc"==S[C].tagName&&(g=S[C].textContent),"trkseg"==S[C].tagName)for(P=S[C].children,_=0;_<P.length;_++){for(D=P[_].children,n=Number(P[_].getAttribute("lat")),a=Number(P[_].getAttribute("lon")),T=0;T<D.length;T++)l=[],"ele"==D[T].tagName&&(o=Number(D[T].textContent)),"time"==D[T].tagName&&(i=new Date(D[T].textContent),s.push(i)),o?l.push(a,n,o):l.push(a,n);u.push(l)}return r.t4=d,r.next=40,t.buildJSON(h,g,m,s,u);case 40:r.t5=r.sent,r.t4.push.call(r.t4,r.t5);case 42:O++,r.next=11;break;case 45:return A={type:"FeatureCollection",features:d},console.log(JSON.stringify(A,null,2)),r.abrupt("return",A);case 48:case"end":return r.stop()}}),r)})))()},buildJSON:function(e,t,r,n,a){return Object(O["a"])(regeneratorRuntime.mark((function o(){var i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i={type:"Feature",properties:{},geometry:{type:"LineString",coordinates:a}},e&&(i.properties.name=e),t&&(i.properties.desc=t),r&&(i.properties.time=r),n&&(i.properties.coordTimes=n),o.abrupt("return",i);case 6:case"end":return o.stop()}}),o)})))()},buildJSONpt:function(e,t,r,n){return Object(O["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o={type:"Feature",properties:{},geometry:{type:"Point",coordinates:n}},e&&(o.properties.name=e),t&&(o.properties.desc=t),r.length>0&&(o.properties.time=r),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}}),k=j,N=Object(f["a"])(k,n,a,!1,null,null,null),S=N.exports,C={name:"Upload",props:{},data:function(){return{file:null,showAlert:!1}},methods:{toggleAlert:function(){this.showAlert=!0}},watch:{file:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=S,e.next=4,t.text();case 4:return e.t1=e.sent,e.next=7,e.t0.parse.call(e.t0,e.t1);case 7:r=e.sent,W.push({name:"map",params:{file:t.text(),convFile:r}}),e.next=15;break;case 11:e.prev=11,e.t2=e["catch"](0),console.log(e.t2),this.toggleAlert();case 15:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}()}},P=C,_=(r("055c"),Object(f["a"])(P,y,w,!1,null,"d279b6d6",null)),D=_.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"playground"}},[r("b-form-file",{attrs:{state:Boolean(e.file1),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}})],1)},A=[],I={name:"PlayGround",props:{},data:function(){return{file1:null}}},E=I,B=(r("7f69"),Object(f["a"])(E,T,A,!1,null,"498e8a3c",null)),F=B.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"map"}},[r("l-map",{ref:"myMap",attrs:{zoom:e.zoom,center:e.center,options:e.mapOptions},on:{ready:function(t){return e.initMap()}}},[r("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),r("l-geo-json",{attrs:{geojson:e.geojson,options:e.options}})],1),r("vue-fab",{attrs:{icon:"download",size:"big",mainBtnColor:"#3599DB"}},[r("fab-item",{attrs:{idx:0,title:"GPX",icon:"download"},on:{clickItem:function(t){return e.clickItem("gpx")}}}),r("fab-item",{attrs:{idx:1,title:"GeoJSON",icon:"download"},on:{clickItem:function(t){return e.clickItem("geojson")}}}),r("fab-item",{attrs:{idx:2,title:"Upload new file",icon:"upload"},on:{clickItem:function(t){return e.goBack()}}})],1)],1)},R=[],$=r("2909"),G=(r("fb6a"),r("e11e")),L=r("2699"),U=r("a40a"),z=r("044a");delete G["Icon"].Default.prototype._getIconUrl,G["Icon"].Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")});var H={name:"Map",components:{LMap:L["a"],LTileLayer:U["a"],LGeoJson:z["a"]},data:function(){return{zoom:13,center:Object(G["latLng"])(48.8359,10.0903),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',enableTooltip:!0,mapOptions:{zoomSnap:.5},geojson:null,originalFile:null,options:{onEachFeature:function(e,t){if("Point"==e.geometry.type){var r,n="";if(e.properties.name&&(n+="Name:\t"+e.properties.name+"</br>"),e.properties.time&&(n+="Time:\t"+e.properties.time+"</br>"),e.properties.desc)r="Desc:\t"+e.properties.desc,n+=r.substr(0,30)+"...</br>";n+="Coord (Lon, Lat, Ele): </br>["+e.geometry.coordinates+"]",t.bindTooltip(n)}else{var a=["black","blue","brown","green","red","orange","purple"];t.setStyle({color:a[Math.floor(8*Math.random())]});var o,i="";if(e.properties.name&&(i+="Name:\t"+e.properties.name+"</br>"),e.properties.time&&(i+="Time:\t"+e.properties.time+"</br>"),e.properties.desc)o="Desc:\t"+e.properties.desc,i+=o.substr(0,30)+"...</br>";if(e.properties.coordTimes){var s=e.properties.coordTimes,l=Math.max.apply(Math,Object($["a"])(s)),u=Math.min.apply(Math,Object($["a"])(s)),c=new Date(l-u),p=c.getUTCHours(),f=c.getUTCMinutes(),d=c.getUTCSeconds();i+="Start:\t"+new Date(u)+"</br>End:\t"+new Date(l)+"</br>Duration:\t"+("0"+p).slice(-2)+":"+("0"+f).slice(-2)+":"+("0"+d).slice(-2)+"\t(HH:MM:SS) </br>"}for(var m=0,h=e.geometry.coordinates,g=0;g<h.length;g++)if(h[g+1]){var b=h[g][0]*Math.PI/180,v=h[g][1]*Math.PI/180,x=h[g+1][0]*Math.PI/180,y=h[g+1][1]*Math.PI/180,w=y-v,O=x-b,M=Math.pow(Math.sin(w/2),2)+Math.cos(v)*Math.cos(y)*Math.pow(Math.sin(O/2),2),j=2*Math.asin(Math.sqrt(M)),k=6371;m+=j*k}i+="Distance in km:\t"+Math.round(1e3*m)/1e3,t.bindPopup(i)}}}}},mounted:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$route.params.convFile;case 2:return r=t.sent,e.geojson=r,t.next=6,e.$route.params.file;case 6:e.originalFile=t.sent,e.$nextTick().then((function(){var t=new G["featureGroup"];e.$refs.myMap.mapObject.eachLayer((function(e){void 0!=e.feature&&t.addLayer(e)})),e.$refs.myMap.mapObject.fitBounds(t.getBounds(),{padding:[100,100]})}));case 8:case"end":return t.stop()}}),t)})))()},methods:{initMap:function(){},clickItem:function(e){var t="",r="",n=(new Date).toISOString();"geojson"==e&&(t=n+"GPX.geojson",r=JSON.stringify(this.geojson,null,4)),"gpx"==e&&(t=n+"GPX.gpx",r=this.originalFile);var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(r)),a.setAttribute("download",t),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},goBack:function(){W.go(-1)}}},X=H,q=(r("9f3a"),Object(f["a"])(X,J,R,!1,null,"3b168fdf",null)),K=q.exports;o["default"].use(x["a"]);var Q=[{path:"/",name:"upload",component:D},{path:"/map",name:"map",component:K},{path:"/pg",name:"playground",component:F}],V=new x["a"]({mode:"hash",routes:Q}),W=V,Y=r("5f5b"),Z=r("b1e0"),ee=r("4e2b"),te=r("8cf7"),re=r.n(te);r("6cc5"),r("f9e3"),r("2dd8");o["default"].use(Y["a"]),o["default"].use(Z["a"]),o["default"].use(re.a),o["default"].component("l-map",L["a"]),o["default"].component("l-tile-layer",U["a"]),o["default"].component("l-marker",ee["a"]),o["default"].config.productionTip=!1,new o["default"]({router:W,render:function(e){return e(v)}}).$mount("#app")},"7f69":function(e,t,r){"use strict";r("21d3")},"85ec":function(e,t,r){},"9f3a":function(e,t,r){"use strict";r("ff82")},cce4:function(e,t,r){"use strict";r("4066")},ff82:function(e,t,r){}});
//# sourceMappingURL=app.35b6110b.js.map