!function(e){var n={};function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)l.d(t,a,function(n){return e[n]}.bind(null,a));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l(l.s=1)}([function(e,n,l){var t;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)&&t.length){var o=a.apply(null,t);o&&e.push(o)}else if("object"===r)for(var c in t)l.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},function(e,n,l){"use strict";l.r(n);var t=l(0),a=l.n(t);function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<n)&&(e=n),null!==l&&e>l&&(e=l),e}function o(e){return function(e){if(Array.isArray(e)){for(var n=0,l=new Array(e.length);n<e.length;n++)l[n]=e[n];return l}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=lodash.get;function u(e,n,l,t){var a=o(e);return a[n]=c(a,n,{}),null===a[n]&&(a[n]={}),a[n][l]=t,a}function i(e){return function(e){if(Array.isArray(e)){for(var n=0,l=new Array(e.length);n<e.length;n++)l[n]=e[n];return l}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=lodash,d=s.get,m=s.times,b=wp.blocks.registerBlockType,p=wp.editor,w=p.InspectorControls,f=p.ColorPalette,y=p.BlockControls,k=p.URLInput,v=wp.components,h=v.PanelBody,g=v.Button,z=v.BaseControl,_=v.SelectControl,E=v.TextControl,N=v.Toolbar,C=v.ToolbarButton,M=v.Modal,S=wp.element.Fragment,A=wp.i18n,D=A.__,O=A.sprintf,T=["sun","mon","tue","wed","thu","fri","sat"],j=[D("SUN","notwiz-calendar-block"),D("MON","notwiz-calendar-block"),D("TUE","notwiz-calendar-block"),D("WED","notwiz-calendar-block"),D("THU","notwiz-calendar-block"),D("FRI","notwiz-calendar-block"),D("SAT","notwiz-calendar-block")],x=["SUN","MON","TUE","WED","THU","FRI","SAT"],W=[D("January","notwiz-calendar-block"),D("February","notwiz-calendar-block"),D("March","notwiz-calendar-block"),D("April","notwiz-calendar-block"),D("May","notwiz-calendar-block"),D("June","notwiz-calendar-block"),D("July","notwiz-calendar-block"),D("August","notwiz-calendar-block"),D("September","notwiz-calendar-block"),D("October","notwiz-calendar-block"),D("November","notwiz-calendar-block"),D("December","notwiz-calendar-block")],U=["January","February","March","April","May","June","July","August","September","October","November","December"],P=[D("Mutsuki","notwiz-calendar-block"),D("Kisaragi","notwiz-calendar-block"),D("Yayoi","notwiz-calendar-block"),D("Uzuki","notwiz-calendar-block"),D("Satsuki","notwiz-calendar-block"),D("Minazuki","notwiz-calendar-block"),D("Fumizuki","notwiz-calendar-block"),D("Hazuki","notwiz-calendar-block"),D("Nagatuki","notwiz-calendar-block"),D("Kannazuki","notwiz-calendar-block"),D("Shimotsuki","notwiz-calendar-block"),D("Shiwasu","notwiz-calendar-block")];function B(e,n,l){for(var t=i(e),a=0;a<t.length;a++)if(t[a]=d(t,a,{}),null!==t[a]&&l===t[a][n])return a;return null}function F(e,n,l){if(null===n)return null;var t=i(e);return t[n]=d(t,n,{}),null===t[n]||null===t[n][l]?null:t[n][l]}b("notwiz-block/calendar",{title:D("Calendar","notwiz-calendar-block"),icon:"calendar-alt",category:"nwcb",description:D("This block displays business days, holidays, and appointments on the calendar.","notwiz-calendar-block"),styles:[{name:"nw-calendar-default",label:D("Default","notwiz-calendar-block"),isDefault:!0},{name:"nw-calendar-flat",label:D("Flat","notwiz-calendar-block")}],attributes:{content:{type:"array",default:[],day:{type:"number",default:null},event:{type:"string",default:null},link:{type:"string",default:null},backgroundColor:{type:"string",default:null},textColor:{type:"string",default:null}},events:{type:"number",default:0},year:{type:"number",default:1970},month:{type:"number",default:1},firstWeek:{type:"number",default:4},lastDay:{type:"number",default:31},modeMonth:{type:"string",default:null},modeWeek:{type:"string",default:null}},edit:function(e){var n,l=e.attributes,t=e.setAttributes,o=e.className,c=l.content,i=l.events,s=l.year,b=l.month,p=l.inputYear,v=l.inputMonth,A=l.firstWeek,J=l.lastDay,I=l.modeMonth,R=l.modeWeek,Y=l.selectDay,H=l.errorMessage,K=function(e,n){var l=r(e,1970,9999),a=r(n,1,12),o=new Date(l,a-1,1),c=o.getDay();o.setMonth(o.getMonth()+1),o.setDate(0);var u=o.getDate();t({inputYear:l}),t({year:l}),t({inputMonth:a}),t({month:a}),t({lastDay:u}),t({firstWeek:c})};return void 0===p&&void 0===v&&(t({inputYear:s}),t({inputMonth:b}),K(s,b)),wp.element.createElement(S,null,wp.element.createElement(y,null,wp.element.createElement(N,null,wp.element.createElement(C,{className:"components-toolbar__control",label:D("Add Event","notwiz-calendar-block"),title:D("Add Event","notwiz-calendar-block"),icon:"plus",onClick:function(){null!=Y?null===B(c,"day",Y)?(t({content:u(c,i,"day",Y)}),t({events:i+1})):t({errorMessage:D("Event have already been added on the selected day","notwiz-calendar-block")}):t({errorMessage:D("Select the day to add the event","notwiz-calendar-block")})}}),wp.element.createElement(C,{className:"components-toolbar__control",label:D("Remove Event","notwiz-calendar-block"),title:D("Remove Event","notwiz-calendar-block"),icon:"minus",onClick:function(){if(null!=Y){var e=B(c,"day",Y);null!==e?(c.splice(e,1),t({content:c}),t({events:i-1})):t({errorMessage:D("No events are set for the selected day","notwiz-calendar-block")})}else t({errorMessage:D("Select the day to remove the event","notwiz-calendar-block")})}}),null!=H&&wp.element.createElement(M,{title:D("Warning","notwiz-calendar-block"),onRequestClose:function(){return t({errorMessage:null})}},H))),wp.element.createElement(w,null,wp.element.createElement(h,{title:D("Display Setting","notwiz-calendar-block")},wp.element.createElement(_,{label:D("Display the week","notwiz-calendar-block"),value:R,onChange:function(e){return t({modeWeek:e})},options:[{value:"0",label:D("Localize","notwiz-calendar-block")},{value:"1",label:D("English","notwiz-calendar-block")}]}),wp.element.createElement(_,{label:D("Display the month","notwiz-calendar-block"),value:I,onChange:function(e){return t({modeMonth:e})},options:[{value:"0",label:D("Numeric","notwiz-calendar-block")},{value:"1",label:D("English","notwiz-calendar-block")},{value:"2",label:D("lunar Japanese","notwiz-calendar-block")}]})),wp.element.createElement(h,{title:D("Date Setting","notwiz-calendar-block")},wp.element.createElement(E,{label:D("Year","notwiz-calendar-block"),value:p,onChange:function(e){return t({inputYear:e})}}),wp.element.createElement(_,{label:D("Month","notwiz-calendar-block"),value:v,onChange:function(e){return t({inputMonth:e})},options:[{value:1,label:W[0]},{value:2,label:W[1]},{value:3,label:W[2]},{value:4,label:W[3]},{value:5,label:W[4]},{value:6,label:W[5]},{value:7,label:W[6]},{value:8,label:W[7]},{value:9,label:W[8]},{value:10,label:W[9]},{value:11,label:W[10]},{value:12,label:W[11]}]}),wp.element.createElement(g,{isDefault:!0,onClick:function(){K(p,v)}},D("Apply","notwiz-calendar-block"))),m(i,function(e){var n=d(c,[e,"day"],""),l=d(c,[e,"event"],""),a=d(c,[e,"link"],""),r=d(c,[e,"backgroundColor"],""),o=d(c,[e,"textColor"],"");return wp.element.createElement(h,{title:O(D("Settings for Day %d","notwiz-calendar-block"),n),initialOpen:!1},wp.element.createElement(E,{label:D("Event Title","notwiz-calendar-block"),value:l,onChange:function(n){return t({content:u(c,e,"event",n)})}}),wp.element.createElement(z,{label:D("Event Url","notwiz-calendar-block")},wp.element.createElement(k,{value:a,onChange:function(n){return t({content:u(c,e,"link",n)})}})),wp.element.createElement(z,{label:D("Background Color","notwiz-calendar-block")},wp.element.createElement(f,{value:r,onChange:function(n){return t({content:u(c,e,"backgroundColor",n)})}})),wp.element.createElement(z,{label:D("Text Color","notwiz-calendar-block")},wp.element.createElement(f,{value:o,onChange:function(n){return t({content:u(c,e,"textColor",n)})}})))})),wp.element.createElement("div",{className:a()("nw-calendar",o)},wp.element.createElement("div",{className:"nw-calendar__head"},(n="1"===I?U[b-1]:"2"===I?P[b-1]:O("%02d",b),wp.element.createElement("span",{className:"head-month"},n)),wp.element.createElement("span",{className:"head-year"},s)),wp.element.createElement("div",{className:"nw-calendar__main"},function(){for(var e="1"===R?x:j,n=[],l=0;l<7;l++)n.push(wp.element.createElement("li",{className:"week-".concat(T[l])},wp.element.createElement("span",{className:"week-label"},e[l])));return wp.element.createElement("ul",{className:"nw-calendar__weeks"},n)}(),function(){for(var e=[],n=0;n<A;n++)e.push(wp.element.createElement("li",{className:a()("day__week-".concat(T[n]),"day__fill")}));for(var l=function(n){var l=B(c,"day",n),r=(n%7+(A-1))%7;r<0&&(r=6);var o=null!==l?F(c,l,"textColor"):null,u=null!==l?F(c,l,"backgroundColor"):null,i=null!==l?F(c,l,"link"):null,s=null!==l?F(c,l,"event"):null,d=wp.element.createElement("span",{className:"day__number",style:{color:o,backgroundColor:u}},n),m=null!==s&&wp.element.createElement("span",{className:"day__title",style:{color:o,backgroundColor:u}},s);e.push(wp.element.createElement("li",{className:a()("day__week-".concat(T[r]),null!==l?"day__event":null),style:{color:o,backgroundColor:u}},(null===i||""===i||void 0===i)&&d,(null===i||""===i||void 0===i)&&m,null!==i&&""!==i&&void 0!==i&&wp.element.createElement("a",{href:i,className:"day__link",style:{color:o,backgroundColor:u}},d,m),wp.element.createElement(g,{className:a()("day__button",Y===n?"day__button__select":null),onClick:function(){var e;t({selectDay:(e=n)===Y?null:e})}})))},r=1;r<=J;r++)l(r);for(var o=J+1;(o%7+(A-1))%7!=0;o++){var u=(o%7+(A-1))%7;e.push(wp.element.createElement("li",{className:a()("day__week-".concat(T[u]),"day__fill")}))}return wp.element.createElement("ul",{className:"nw-calendar__days"},e)}())))},save:function(e){var n,l=e.attributes,t=l.content,r=l.year,o=l.month,c=l.firstWeek,u=l.lastDay,i=l.modeWeek,s=l.modeMonth;return wp.element.createElement("div",{className:"nw-calendar"},wp.element.createElement("div",{className:"nw-calendar__head"},(n="1"===s?U[o-1]:"2"===s?P[o-1]:O("%02d",o),wp.element.createElement("span",{className:"head-month"},n)),wp.element.createElement("span",{className:"head-year"},r)),function(){for(var e="1"===i?x:j,n=[],l=0;l<7;l++)n.push(wp.element.createElement("li",{className:"week-".concat(T[l])},wp.element.createElement("span",{className:"week-label"},e[l])));return wp.element.createElement("ul",{className:"nw-calendar__weeks"},n)}(),function(){for(var e=[],n=0;n<c;n++)e.push(wp.element.createElement("li",{className:a()("day__week-".concat(T[n]),"day__fill")}));for(var l=1;l<=u;l++){var r=B(t,"day",l),o=(l%7+(c-1))%7;o<0&&(o=6);var i=null!==r?F(t,r,"textColor"):null,s=null!==r?F(t,r,"backgroundColor"):null,d=null!==r?F(t,r,"event"):null,m=null!==r?F(t,r,"link"):null,b=wp.element.createElement("span",{className:"day__number",style:{color:i,backgroundColor:s}},l),p=wp.element.createElement("span",{className:"day__title",style:{color:i,backgroundColor:s}},d);e.push(wp.element.createElement("li",{className:a()("day__week-".concat(T[o]),null!==r?"day__event":null),style:{color:i,backgroundColor:s}},(null===m||""===m||void 0===m)&&b,(null===m||""===m||void 0===m)&&p,null!==m&&""!==m&&void 0!==m&&wp.element.createElement("a",{href:m,className:"day__link",style:{color:i,backgroundColor:s}},b,p)))}for(var w=u+1;(w%7+(c-1))%7!=0;w++){var f=(w%7+(c-1))%7;e.push(wp.element.createElement("li",{className:a()("day__week-".concat(T[f]),"day__fill")}))}return wp.element.createElement("ul",{className:"nw-calendar__days"},e)}())}})}]);