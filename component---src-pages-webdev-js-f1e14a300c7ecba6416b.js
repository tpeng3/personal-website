(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{197:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(202),i=a(214),s=[{id:1,name:"this website!",date:"Summer 2019",description:"I used to host my portfolio on Weebly, but I decided to rebuild all the components with React as a learning project.",built:"Gatsby, React, Bootstrap",imageURL:"https://imgur.com/SHPaSDi.png",altText:"Website Screenshot",links:{"Weebly Site":"https://shuttlefrog.weebly.com"},tag:["web","programming"]},{id:1,name:"Savor Saber",date:"Fall 2018 - Present​",description:"Art Director, Producer, and Pixel Artist/Animator for a slash and skewer adventure game about a robot feeding food to Eldritch Gods. I also designed and coded the public website!",addText:"Won both the Visual Arts and Worldbuilding Award at the 2019 UCSC Showcase.",imageURL:"https://imgur.com/iXvlb6J.png",altText:"Savor Saber Screenshot",built:"HTML5, Bootstrap",links:{Website:"https://savorsaber.com/","Game Page":"https://shuttlefrog.itch.io/savor-saber",Twitter:"https://twitter.com/SAVORSABER"},tag:["art","game","web","programming","featured"]},{id:2,name:"Okinawa Memory Initiative",date:"Fall 2018​",description:"Front-end Lead Programmer for a website hosting documents and articles related to Okinawan history during American military occupation. This is side website to the Gail Project.",built:"React, Bootstrap, Django, SQLite",imageURL:"https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/fdfdg_3.png",altText:"OMI Screenshot",links:{Github:"https://github.com/tpeng3/Okinawa-Initiative","Gail Project Site":"https://gailproject.ucsc.edu/"},tag:["web","programming"]},{id:3,name:"Null Metal Detective: Tactical Schedule Management",date:"Spring 2018​",description:"Artist, Programmer and Writer for a time management visual novel about an incompetent detective. It also doubles as a bullet hell game.",addText:"Featured in the 2018 Sammy Showcase.",built:"Phaser, Javascript",imageURL:"https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/nmd-screencap_orig.png",altText:"Typocrypha Screenshot",links:{"Game Page":"https://hanmori.itch.io/harold",Github:"https://github.com/tpeng3/Endless-Runner","Dev Video":"Available upon request."},tag:["programming","art","game"]},{id:3,name:"Harold, they're Lesbians",date:"Spring 2018​",description:"Solo project. Programmer and Artist for a short endless runner about a phantom thief and police detective.",addText:"Nominated for Sonic '06 Best Runner 2018 (in-class joke award)",imageURL:"https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/screenshot1_orig.png",altText:"Harold Screenshot",built:"Phaser, Javascript",links:{"Game Page":"https://hanmori.itch.io/harold",Github:"https://github.com/tpeng3/Endless-Runner","Dev Video":"https://youtu.be/JAerYD-Mx7Y"},tag:["art","game"]},{id:4,name:"Rubik's Cube Teacher as AI",date:"Fall 2017",description:"Lead Programmer for an AI program that gives the players tips on how to solve a Rubik's cube, using behavior trees.",built:"HTML5, Javascript",imageURL:"https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/294260296_1_orig.jpg",altText:"Rubiks Screenshot",links:{"Demo Video":"https://www.youtube.com/watch?v=n9YwXZanT5o",Github:"https://github.com/mmmayr/cube-destroyers"},tag:["programming"]}];t.default=function(){return n.a.createElement(o.a,null,n.a.createElement("div",{id:"project-container"},s.map(function(e){return n.a.createElement(i.a,{info:e,key:e.id})})))}},198:function(e,t,a){var r;e.exports=(r=a(200))&&r.default||r},199:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",function(){return r})},200:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),n=a.n(r),o=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",function(){return r})},202:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(66),i=a.n(o);a(198),a(9).default.enqueue,n.a.createContext({});a(203);var s=function(e){return n.a.createElement("li",null,n.a.createElement(i.a,{to:e.to,className:"header-links",activeStyle:{color:"#333"}},e.children))};t.a=function(e){var t=e.children;return n.a.createElement("div",{id:"page-container"},n.a.createElement("div",{id:"content-wrap"},n.a.createElement("div",{className:"title"},n.a.createElement("img",{src:"https://imgur.com/YzY5UEZ.png",alt:"Icon"})),n.a.createElement("div",{className:"header-links-container"},n.a.createElement("nav",null," ",n.a.createElement("ul",null,n.a.createElement(s,{to:"/"},"HOME"),n.a.createElement(s,{to:"/about/"},"ABOUT"),n.a.createElement(s,{to:"/webdev/"},"WEBDEV"),n.a.createElement(s,{to:"/gamedev/"},"GAMEDEV"),n.a.createElement(s,{to:"/art/"},"ART"))," ")),n.a.createElement("div",null,t)),n.a.createElement("footer",{id:"footer"},"© 2019 Tina Peng"))}},204:function(e,t,a){var r;a(68),function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},205:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return u});a(49);var r=a(199),n=a(208),o=a.n(n),i=a(0),s=a.n(i),l=s.a.createContext({});l.Consumer,l.Provider;function c(e,t){var a=Object(i.useContext)(l);return e||a[t]||t}function u(e,t){"string"==typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,n=t,i=n.prefix,l=n.forwardRefAs,u=void 0===l?a?"ref":"innerRef":l;return o()(function(t,a){var n=Object(r.a)({},t);n[u]=a;var o=c(n.bsPrefix,i);return s.a.createElement(e,Object(r.a)({},n,{bsPrefix:o}))},{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},206:function(e,t,a){var r=a(1),n=a(207)(!0);r(r.S,"Object",{entries:function(e){return n(e)}})},207:function(e,t,a){var r=a(7),n=a(31),o=a(32),i=a(52).f;e.exports=function(e){return function(t){for(var a,s=o(t),l=n(s),c=l.length,u=0,d=[];c>u;)a=l[u++],r&&!i.call(s,a)||d.push(e?[a,s[a]]:s[a]);return d}}},208:function(e,t,a){"use strict";a(23),a(49),t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,r=a.propTypes,o=a.defaultProps,i=a.allowFallback,s=void 0!==i&&i,l=a.displayName,c=void 0===l?e.name||e.displayName:l,u=function(t,a){return e(t,a)};return Object.assign(n.default.forwardRef||!s?n.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:r,defaultProps:o})};var r,n=(r=a(0))&&r.__esModule?r:{default:r}},209:function(e,t,a){"use strict";a(134);var r=a(199),n=a(201),o=a(0),i=a.n(o);a(67),a(133);var s=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];e.apply(this,r),t.apply(this,r)}},null)};function l(e){return!e||"#"===e.trim()}var c=i.a.forwardRef(function(e,t){var a=e.as,o=void 0===a?"a":a,c=e.disabled,u=e.onKeyDown,d=Object(n.a)(e,["as","disabled","onKeyDown"]),p=function(e){var t=d.href,a=d.onClick;(c||l(t))&&e.preventDefault(),c?e.stopPropagation():a&&a(e)};return l(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),c&&(d.tabIndex=-1,d["aria-disabled"]=!0),i.a.createElement(o,Object(r.a)({ref:t},d,{onClick:p,onKeyDown:s(function(e){" "===e.key&&(e.preventDefault(),p(e))},u)}))});c.displayName="SafeAnchor";t.a=c},214:function(e,t,a){"use strict";a(29),a(30),a(13),a(206),a(49);var r=a(0),n=a.n(r),o=(a(211),a(199)),i=a(201),s=a(204),l=a.n(s),c=a(205),u=a(209),d=n.a.forwardRef(function(e,t){var a=e.bsPrefix,r=e.variant,s=e.size,d=e.active,p=e.className,m=e.block,f=e.type,h=e.as,b=Object(i.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),g=Object(c.b)(a,"btn"),v=l()(p,g,d&&"active",g+"-"+r,m&&g+"-block",s&&g+"-"+s);if(b.href)return n.a.createElement(u.a,Object(o.a)({},b,{as:h,ref:t,className:l()(v,b.disabled&&"disabled")}));t&&(b.ref=t),h||(b.type=f);var y=h||"button";return n.a.createElement(y,Object(o.a)({},b,{className:v}))});d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var p=d;a(222);var m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.info,t=e.name,a=e.date,r=e.description,o=e.built,i=e.imageURL,s=e.altText,l=this.props.info.addText,c=this.props.info.links;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"project-img-container"},n.a.createElement("img",{className:"project-img",src:i,alt:s})),n.a.createElement("div",{className:"project-desc"},n.a.createElement("h2",null,t),n.a.createElement("h3",null,a),n.a.createElement("p",null,r),n.a.createElement("p",null,l),n.a.createElement("p",null,"Made with: ",o),c?n.a.createElement("div",{className:"project-links"},Object.entries(c).map(function(e){var t=e[0],a=e[1];return n.a.createElement(p,{a:!0,href:a,className:"projbtn",variant:"outline-info"},t)})):n.a.createElement("div",null)))},r}(r.Component);t.a=m}}]);
//# sourceMappingURL=component---src-pages-webdev-js-f1e14a300c7ecba6416b.js.map