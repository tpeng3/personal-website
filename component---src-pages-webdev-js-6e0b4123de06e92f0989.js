(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{236:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(242),o=a(264),s=a(266),l=a(270),c=a(252),u=a.n(c);t.default=function(){return n.a.createElement(i.a,{childKey:"webdev"},n.a.createElement(l.a,null,n.a.createElement(u.a,null,s.a.map(function(e){return n.a.createElement(o.a,{info:e,key:e.id})}))))}},238:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",function(){return r})},239:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",function(){return r})},240:function(e,t,a){var r;a(58),function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},241:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return u});a(56);var r=a(238),n=a(246),i=a.n(n),o=a(0),s=a.n(o),l=s.a.createContext({});l.Consumer,l.Provider;function c(e,t){var a=Object(o.useContext)(l);return e||a[t]||t}function u(e,t){"string"==typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,n=t,o=n.prefix,l=n.forwardRefAs,u=void 0===l?a?"ref":"innerRef":l;return i()(function(t,a){var n=Object(r.a)({},t);n[u]=a;var i=c(n.bsPrefix,o);return s.a.createElement(e,Object(r.a)({},n,{bsPrefix:i}))},{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},242:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(145);a(245),a(229);t.a=function(e){var t=function(e){return n.a.createElement("li",null,n.a.createElement(i.Link,{to:e.to,className:"header-links",activeStyle:{color:"#333"}},e.children))};return n.a.createElement("div",{id:"page-container"},n.a.createElement("div",{id:"content-wrap"},n.a.createElement("div",{className:"title"},n.a.createElement("img",{src:"https://imgur.com/YzY5UEZ.png",alt:"Icon"})),n.a.createElement("div",{className:"header-links-container"},n.a.createElement("nav",null," ",n.a.createElement("ul",null,n.a.createElement(t,{index:0,to:"/"},"HOME"),n.a.createElement(t,{index:1,to:"/about"},"ABOUT"),n.a.createElement(t,{index:2,to:"/webdev/"},"WEBDEV"),n.a.createElement(t,{index:3,to:"/gamedev/"},"GAMEDEV"))," ")),n.a.createElement("div",null,e.children)),n.a.createElement("footer",{id:"footer"},"© 2019 Tina Peng"))}},243:function(e,t,a){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}a.d(t,"a",function(){return r})},246:function(e,t,a){"use strict";a(18),a(56),t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,r=a.propTypes,i=a.defaultProps,o=a.allowFallback,s=void 0!==o&&o,l=a.displayName,c=void 0===l?e.name||e.displayName:l,u=function(t,a){return e(t,a)};return Object.assign(n.default.forwardRef||!s?n.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:r,defaultProps:i})};var r,n=(r=a(0))&&r.__esModule?r:{default:r}},247:function(e,t,a){var r=a(1),n=a(148)(!0);r(r.S,"Object",{entries:function(e){return n(e)}})},248:function(e,t,a){"use strict";a(147);var r=a(238),n=a(239),i=a(0),o=a.n(i);a(81),a(146);var s=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];e.apply(this,r),t.apply(this,r)}},null)};function l(e){return!e||"#"===e.trim()}var c=o.a.forwardRef(function(e,t){var a=e.as,i=void 0===a?"a":a,c=e.disabled,u=e.onKeyDown,d=Object(n.a)(e,["as","disabled","onKeyDown"]),m=function(e){var t=d.href,a=d.onClick;(c||l(t))&&e.preventDefault(),c?e.stopPropagation():a&&a(e)};return l(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),c&&(d.tabIndex=-1,d["aria-disabled"]=!0),o.a.createElement(i,Object(r.a)({ref:t},d,{onClick:m,onKeyDown:s(function(e){" "===e.key&&(e.preventDefault(),m(e))},u)}))});c.displayName="SafeAnchor";t.a=c},261:function(e,t,a){"use strict";var r=a(238),n=a(239),i=a(243),o=a(240),s=a.n(o),l=a(0),c=a.n(l),u=a(241),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,i=e.fluid,o=e.rounded,l=e.roundedCircle,u=e.thumbnail,d=Object(n.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]),m=s()(i&&t+"-fluid",o&&"rounded",l&&"rounded-circle",u&&t+"-thumbnail");return c.a.createElement("img",Object(r.a)({},d,{className:s()(a,m)}))},t}(c.a.Component);d.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=Object(u.a)(d,"img")},264:function(e,t,a){"use strict";a(16),a(17),a(6),a(247),a(56);var r=a(0),n=a.n(r),i=a(271),o=a(272),s=a(261),l=a(276);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.info,t=e.name,a=e.date,r=e.description,c=e.built,u=e.imageURL,d=e.altText,m=this.props.info.addText,p=this.props.info.links,f={borderRadius:"10",marginRight:"1.2em"};return n.a.createElement(i.a,null,n.a.createElement(o.a,{md:6},n.a.createElement("div",{className:"pb-3"},n.a.createElement(s.a,{src:u,alt:d,thumbnail:!0,width:"600"}))),n.a.createElement(o.a,{md:6},n.a.createElement("div",{className:"px-2"},n.a.createElement("h2",null,t),n.a.createElement("h3",null,a),n.a.createElement("p",null,r),n.a.createElement("p",null,m),n.a.createElement("p",null,"Made with: ",c),p?n.a.createElement("div",{style:{display:"flex",listStyle:"none",marginTop:"2em",marginBottom:"4em"}},Object.entries(p).map(function(e){var t=e[0],a=e[1];return n.a.createElement(l.a,{key:t,href:a,style:f,className:"d-flex align-items-center",variant:"outline-info"},t)})):n.a.createElement("div",null))))},r}(r.Component);t.a=c},266:function(e,t,a){"use strict";t.a=[{id:1,name:"this website!",date:"Summer 2019",description:"I used to host my portfolio on Weebly, but I decided to rebuild all the components with React as a learning project.",built:"Gatsby, React, Bootstrap",imageURL:"https://imgur.com/SHPaSDi.png",altText:"Website Screenshot",links:{"Weebly Site":"https://shuttlefrog.weebly.com"},tag:["web","programming"]},{id:2,name:"Savor Saber",date:"Fall 2018 - Present​",description:"Art Director, Producer, and Pixel Artist/Animator for a slash and skewer adventure game about a robot feeding food to Eldritch Gods. I also designed and coded the public website!",addText:"Won both the Visual Arts and Worldbuilding Award at the 2019 UCSC Showcase.",imageURL:"https://imgur.com/iXvlb6J.png",altText:"Savor Saber Screenshot",built:"HTML5, Bootstrap",links:{Website:"https://savorsaber.com/","Game Page":"https://shuttlefrog.itch.io/savor-saber",Twitter:"https://twitter.com/SAVORSABER"},tag:["art","game","web","programming","featured"]},{id:3,name:"Okinawa Memory Initiative",date:"Fall 2018​",description:"Front-end Lead Programmer for a website hosting documents and articles related to Okinawan history during American military occupation. This is side website to the Gail Project.",built:"React, Bootstrap, Django, SQLite",imageURL:"https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/fdfdg_3.png",altText:"OMI Screenshot",links:{Github:"https://github.com/tpeng3/Okinawa-Initiative","Gail Project Site":"https://gailproject.ucsc.edu/"},tag:["web","programming"]},{id:4,name:"Null Metal Detective: Tactical Schedule Management",date:"Spring 2018​",description:"Artist, Programmer and Writer for a time management visual novel about an incompetent detective. It also doubles as a bullet hell game.",addText:"Featured in the 2018 Sammy Showcase.",built:"Phaser, Javascript",imageURL:"https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/nmd-screencap_orig.png",altText:"Typocrypha Screenshot",links:{"Game Page":"https://hanmori.itch.io/harold",Github:"https://github.com/tpeng3/Endless-Runner","Dev Video":"Available upon request."},tag:["programming","art","game"]},{id:5,name:"Harold, they're Lesbians",date:"Spring 2018​",description:"Solo project. Programmer and Artist for a short endless runner about a phantom thief and police detective.",addText:"Nominated for Sonic '06 Best Runner 2018 (in-class joke award)",imageURL:"https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/screenshot1_orig.png",altText:"Harold Screenshot",built:"Phaser, Javascript",links:{"Game Page":"https://hanmori.itch.io/harold",Github:"https://github.com/tpeng3/Endless-Runner","Dev Video":"https://youtu.be/JAerYD-Mx7Y"},tag:["art","game"]},{id:6,name:"Rubik's Cube Teacher as AI",date:"Fall 2017",description:"Lead Programmer for an AI program that gives the players tips on how to solve a Rubik's cube, using behavior trees.",built:"HTML5, Javascript",imageURL:"https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/294260296_1_orig.jpg",altText:"Rubiks Screenshot",links:{"Demo Video":"https://www.youtube.com/watch?v=n9YwXZanT5o",Github:"https://github.com/mmmayr/cube-destroyers"},tag:["programming"]}]},270:function(e,t,a){"use strict";var r=a(238),n=a(239),i=a(240),o=a.n(i),s=a(0),l=a.n(s),c=a(241),u=l.a.forwardRef(function(e,t){var a=e.bsPrefix,i=e.fluid,s=e.as,u=void 0===s?"div":s,d=e.className,m=Object(n.a)(e,["bsPrefix","fluid","as","className"]),p=Object(c.b)(a,"container");return l.a.createElement(u,Object(r.a)({ref:t},m,{className:o()(d,i?p+"-fluid":p)}))});u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},271:function(e,t,a){"use strict";var r=a(238),n=a(239),i=a(240),o=a.n(i),s=a(0),l=a.n(s),c=a(241),u=l.a.forwardRef(function(e,t){var a=e.bsPrefix,i=e.noGutters,s=e.as,u=void 0===s?"div":s,d=e.className,m=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(c.b)(a,"row");return l.a.createElement(u,Object(r.a)({ref:t},m,{className:o()(d,p,i&&"no-gutters")}))});u.defaultProps={noGutters:!1},t.a=u},272:function(e,t,a){"use strict";a(40);var r=a(238),n=a(239),i=a(240),o=a.n(i),s=a(0),l=a.n(s),c=a(241),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef(function(e,t){var a=e.bsPrefix,i=e.className,s=e.as,d=void 0===s?"div":s,m=Object(n.a)(e,["bsPrefix","className","as"]),p=Object(c.b)(a,"col"),f=[],b=[];return u.forEach(function(e){var t,a,r,n=m[e];if(delete m[e],null!=n&&"object"==typeof n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";null!=t&&f.push(!0===t?""+p+o:""+p+o+"-"+t),null!=r&&b.push("order"+o+"-"+r),null!=a&&b.push("offset"+o+"-"+a)}),f.length||f.push(p),l.a.createElement(d,Object(r.a)({},m,{ref:t,className:o.a.apply(void 0,[i].concat(f,b))}))});d.displayName="Col",t.a=d},276:function(e,t,a){"use strict";var r=a(238),n=a(239),i=a(240),o=a.n(i),s=a(0),l=a.n(s),c=a(241),u=a(248),d=l.a.forwardRef(function(e,t){var a=e.bsPrefix,i=e.variant,s=e.size,d=e.active,m=e.className,p=e.block,f=e.type,b=e.as,h=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(c.b)(a,"btn"),g=o()(m,v,d&&"active",v+"-"+i,p&&v+"-block",s&&v+"-"+s);if(h.href)return l.a.createElement(u.a,Object(r.a)({},h,{as:b,ref:t,className:o()(g,h.disabled&&"disabled")}));t&&(h.ref=t),b||(h.type=f);var y=b||"button";return l.a.createElement(y,Object(r.a)({},h,{className:g}))});d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=d}}]);
//# sourceMappingURL=component---src-pages-webdev-js-6e0b4123de06e92f0989.js.map