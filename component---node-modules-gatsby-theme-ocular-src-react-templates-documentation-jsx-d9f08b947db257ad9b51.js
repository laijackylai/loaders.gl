(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/v66":function(n,e,t){"use strict";function l(n){if("string"==typeof n)return function(n){return function(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return a;if("object"==typeof n)return("length"in n?r:o)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function o(n){return function(e){var t;for(t in n)if(e[t]!==n[t])return!1;return!0}}function r(n){var e=function(n){for(var e=[],t=n.length,o=-1;++o<t;)e[o]=l(n[o]);return e}(n),t=e.length;return function(){var n=-1;for(;++n<t;)if(e[n].apply(this,arguments))return!0;return!1}}function a(){return!0}n.exports=l},"0rpx":function(n,e,t){"use strict";var l=t("4v99");n.exports=function(n,e){return l(n,e.toLowerCase())}},"1nHS":function(n,e,t){"use strict";n.exports=o;var l=o.prototype;function o(n,e,t){this.property=n,this.normal=e,t&&(this.space=t)}l.space=null,l.normal={},l.property={}},"2dtT":function(n,e,t){"use strict";var l=t("Cjod"),o=t("RdQs");n.exports=function(n){var e=n||{},t=e.createElement,a=e.Fragment,i=e.components||{};function u(n,e,l){var o=r.call(i,n)?i[n]:n;return t(o,e,l)}this.Compiler=function(n){var r=l(u,o(n),e.prefix);return"root"===n.type?(r="div"!==r.type||1===n.children.length&&"element"===n.children[0].type?[r]:r.props.children,t(a||"div",{},r)):r}};var r={}.hasOwnProperty},"2qIq":function(n,e,t){"use strict";var l=t("h5Sy"),o=t("N8K4"),r=t("LyDg"),a=t("Wb05"),i=t("I7gA"),u=t("sU6V");n.exports=l([r,o,a,i,u])},"33yf":function(n,e,t){(function(n){function l(n,e){for(var t=0,l=n.length-1;l>=0;l--){var o=n[l];"."===o?n.splice(l,1):".."===o?(n.splice(l,1),t++):t&&(n.splice(l,1),t--)}if(e)for(;t--;t)n.unshift("..");return n}function o(n,e){if(n.filter)return n.filter(e);for(var t=[],l=0;l<n.length;l++)e(n[l],l,n)&&t.push(n[l]);return t}t("0l/t"),t("KKXr"),e.resolve=function(){for(var e="",t=!1,r=arguments.length-1;r>=-1&&!t;r--){var a=r>=0?arguments[r]:n.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,t="/"===a.charAt(0))}return(t?"/":"")+(e=l(o(e.split("/"),(function(n){return!!n})),!t).join("/"))||"."},e.normalize=function(n){var t=e.isAbsolute(n),a="/"===r(n,-1);return(n=l(o(n.split("/"),(function(n){return!!n})),!t).join("/"))||t||(n="."),n&&a&&(n+="/"),(t?"/":"")+n},e.isAbsolute=function(n){return"/"===n.charAt(0)},e.join=function(){var n=Array.prototype.slice.call(arguments,0);return e.normalize(o(n,(function(n,e){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},e.relative=function(n,t){function l(n){for(var e=0;e<n.length&&""===n[e];e++);for(var t=n.length-1;t>=0&&""===n[t];t--);return e>t?[]:n.slice(e,t-e+1)}n=e.resolve(n).substr(1),t=e.resolve(t).substr(1);for(var o=l(n.split("/")),r=l(t.split("/")),a=Math.min(o.length,r.length),i=a,u=0;u<a;u++)if(o[u]!==r[u]){i=u;break}var s=[];for(u=i;u<o.length;u++)s.push("..");return(s=s.concat(r.slice(i))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var e=n.charCodeAt(0),t=47===e,l=-1,o=!0,r=n.length-1;r>=1;--r)if(47===(e=n.charCodeAt(r))){if(!o){l=r;break}}else o=!1;return-1===l?t?"/":".":t&&1===l?"/":n.slice(0,l)},e.basename=function(n,e){var t=function(n){"string"!=typeof n&&(n+="");var e,t=0,l=-1,o=!0;for(e=n.length-1;e>=0;--e)if(47===n.charCodeAt(e)){if(!o){t=e+1;break}}else-1===l&&(o=!1,l=e+1);return-1===l?"":n.slice(t,l)}(n);return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t},e.extname=function(n){"string"!=typeof n&&(n+="");for(var e=-1,t=0,l=-1,o=!0,r=0,a=n.length-1;a>=0;--a){var i=n.charCodeAt(a);if(47!==i)-1===l&&(o=!1,l=a+1),46===i?-1===e?e=a:1!==r&&(r=1):-1!==e&&(r=-1);else if(!o){t=a+1;break}}return-1===e||-1===l||0===r||1===r&&e===l-1&&e===t+1?"":n.slice(e,l)};var r="b"==="ab".substr(-1)?function(n,e,t){return n.substr(e,t)}:function(n,e,t){return e<0&&(e=n.length+e),n.substr(e,t)}}).call(this,t("8oxB"))},"4v99":function(n,e,t){"use strict";n.exports=function(n,e){return e in n?n[e]:e}},"6B/p":function(n,e,t){"use strict";t("pIFo");var l=t("i/jK"),o=t("RH6O"),r=t("JjqA");n.exports=function(n,e){var t=l(e),p=e,d=r;if(t in n.normal)return n.property[n.normal[t]];t.length>4&&"data"===t.slice(0,4)&&a.test(e)&&("-"===e.charAt(4)?p=function(n){var e=n.slice(5).replace(i,c);return"data"+e.charAt(0).toUpperCase()+e.slice(1)}(e):e=function(n){var e=n.slice(4);if(i.test(e))return n;"-"!==(e=e.replace(u,s)).charAt(0)&&(e="-"+e);return"data"+e}(e),d=o);return new d(p,e)};var a=/^data[-a-z0-9.:_]+$/i,i=/-[a-z]/g,u=/[A-Z]/g;function s(n){return"-"+n.toLowerCase()}function c(n){return n.charAt(1).toUpperCase()}},"7yFj":function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"d",(function(){return a})),t.d(e,"e",(function(){return i})),t.d(e,"f",(function(){return u})),t.d(e,"g",(function(){return s})),t.d(e,"h",(function(){return c})),t.d(e,"i",(function(){return p})),t.d(e,"j",(function(){return d})),t.d(e,"o",(function(){return f})),t.d(e,"l",(function(){return h})),t.d(e,"m",(function(){return g})),t.d(e,"n",(function(){return m})),t.d(e,"k",(function(){return v})),t.d(e,"c",(function(){return y})),t.d(e,"p",(function(){return k})),t.d(e,"b",(function(){return b})),t.d(e,"q",(function(){return x})),t.d(e,"s",(function(){return w})),t.d(e,"r",(function(){return C}));var l=t("vOnD"),o=t("Wbzz"),r=l.c.a.withConfig({displayName:"typography__A",componentId:"sc-1pmaksm-0"})(["text-decoration:none;color:",";&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],(function(n){return n.theme.colors.linkText}),(function(n){return n.theme.colors.linkVisited}),(function(n){return n.theme.colors.linkHover}),(function(n){return n.theme.colors.linkHover})),a=Object(l.c)(o.a).withConfig({displayName:"typography__GatsbyA",componentId:"sc-1pmaksm-1"})(["text-decoration:none;color:",";&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],(function(n){return n.theme.colors.linkText}),(function(n){return n.theme.colors.linkVisited}),(function(n){return n.theme.colors.linkHover}),(function(n){return n.theme.colors.linkHover})),i=l.c.h1.withConfig({displayName:"typography__H1",componentId:"sc-1pmaksm-2"})(["font:",";letter-spacing:0.02em;margin:4px 0 24px;"],(function(n){return n.theme.typography.font800})),u=l.c.h2.withConfig({displayName:"typography__H2",componentId:"sc-1pmaksm-3"})(["font:",";margin:24px 0 16px;"],(function(n){return n.theme.typography.font700})),s=l.c.h3.withConfig({displayName:"typography__H3",componentId:"sc-1pmaksm-4"})(["font:",";"],(function(n){return n.theme.typography.font600})),c=l.c.h4.withConfig({displayName:"typography__H4",componentId:"sc-1pmaksm-5"})(["font:",";"],(function(n){return n.theme.typography.font500})),p=l.c.h5.withConfig({displayName:"typography__H5",componentId:"sc-1pmaksm-6"})(["font:",";"],(function(n){return n.theme.typography.font450})),d=l.c.h6.withConfig({displayName:"typography__H6",componentId:"sc-1pmaksm-7"})(["font:",";"],(function(n){return n.theme.typography.font350})),f=l.c.p.withConfig({displayName:"typography__P",componentId:"sc-1pmaksm-8"})(["margin:'0 0 16px'"]),h=l.c.ul.withConfig({displayName:"typography__List",componentId:"sc-1pmaksm-9"})(["margin:0 0 12px;"]),g=l.c.li.withConfig({displayName:"typography__ListItem",componentId:"sc-1pmaksm-10"})(["margin-bottom:4px;"]),m=l.c.div.withConfig({displayName:"typography__MarkdownBody",componentId:"sc-1pmaksm-11"})(["font:",";padding:36px;max-width:692px;"],(function(n){return n.theme.typography.font300})),v=l.c.code.withConfig({displayName:"typography__InlineCode",componentId:"sc-1pmaksm-12"})(["background-color:",";border-radius:",";padding:0 5px;font-family:Consolas,Menlo,Monaco,'Andale Mono WT','Andale Mono','Lucida Console','Lucida Sans Typewriter','DejaVu Sans Mono','Bitstream Vera Sans Mono','Liberation Mono','Nimbus Mono L','Courier New',Courier,monospace;font-size:0.9em;margin:1px 0;line-height:calc(1.5em / 0.9 - 2px);display:inline-block;vertical-align:top;"],(function(n){return n.theme.colors.mono200}),(function(n){return n.theme.sizing.scale100})),y=l.c.code.withConfig({displayName:"typography__CodeBlock",componentId:"sc-1pmaksm-13"})(["font-family:Consolas,Menlo,Monaco,'Andale Mono WT','Andale Mono','Lucida Console','Lucida Sans Typewriter','DejaVu Sans Mono','Bitstream Vera Sans Mono','Liberation Mono','Nimbus Mono L','Courier New',Courier,monospace;font-size:0.9em;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;tab-size:4;hyphens:none;background-color:",";"],(function(n){return n.theme.colors.mono200})),k=l.c.pre.withConfig({displayName:"typography__Pre",componentId:"sc-1pmaksm-14"})(["background-color:",";padding:",";overflow-x:auto;.keyword{color:#339;font-weight:bold;}.operator{color:#d14;}.punctuation{color:#458;}.string,.number{color:#008080;}"],(function(n){return n.theme.colors.mono200}),(function(n){return n.theme.sizing.scale200})),b=l.c.blockquote.withConfig({displayName:"typography__BlockQuote",componentId:"sc-1pmaksm-15"})(["background-color:",";margin-inline-start:0;margin-inline-end:0;padding:"," ",";"],(function(n){return n.theme.colors.warning100}),(function(n){return n.theme.sizing.scale400}),(function(n){return n.theme.sizing.scale600})),x=l.c.table.withConfig({displayName:"typography__Table",componentId:"sc-1pmaksm-16"})(["border-collapse:collapse;border-spacing:1px;width:100%;"]),w=l.c.th.withConfig({displayName:"typography__TableHeaderCell",componentId:"sc-1pmaksm-17"})(["padding:4px;text-align:left;background:",";font-weight:bold;border:1px solid ",";"],(function(n){return n.theme.colors.mono200}),(function(n){return n.theme.colors.mono400})),C=l.c.td.withConfig({displayName:"typography__TableBodyCell",componentId:"sc-1pmaksm-18"})(["padding:4px;text-align:left;border:1px solid ",";"],(function(n){return n.theme.colors.mono400}))},"8mkv":function(n,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("pIFo"),t("SRfc"),t("91GP");var l=t("q1tI"),o=t.n(l),r=t("2dtT"),a=t.n(r),i=t("7yFj"),u=t("vOJQ");function s(n,e){if(null==n)return{};var t,l,o={},r=Object.keys(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(o[t]=n[t]);return o}var c=function(n,e){return function(t){var l=t.href,r=s(t,["href"]),a=Object(u.parseLinks)(l,n,e);return a?o.a.createElement(i.d,Object.assign({to:a},r)):o.a.createElement(i.a,Object.assign({href:l},r))}},p=function(n){var e=n.children,t=s(n,["children"]);return o.a.createElement(i.p,t,o.a.Children.map(e,(function(n){return"code"===n.type||"Styled(code)"===n.type.displayName?o.a.createElement(i.c,n.props):o.a.cloneElement(n)})))},d=/^code-classlanguage-text(.*?)code/,f=/code-classlanguage-text(.*?)code/g;e.a=function(n){var e=n.relativeLinks,t=n.path,r={},u=function(n){return function(e){var t=e.id,a=s(e,["id"]);return function(n,e,t,r){if(r[e=d.test(e)?e.match(d)[1]:e.replace(f,(function(n,e){return e}))]){for(var a=1;r[e+"-"+a];)a++;e=e+"-"+a}r[e]=!0;var i=t.children.slice(),u=i[0];return u.props&&u.props.href&&(i[0]=Object(l.cloneElement)(u,{href:"#"+e})),o.a.createElement(n,Object.assign({},t,{id:e}),i)}(n,t,a,r)}};return(0,new a.a({createElement:o.a.createElement,components:{h1:i.e,h2:u(i.f),h3:u(i.g),h4:u(i.h),h5:u(i.i),h6:u(i.j),p:i.o,ul:i.l,li:i.m,pre:p,code:i.k,table:i.q,th:i.s,td:i.r,blockquote:i.b,a:e?c(t,e):i.a}}).Compiler)(n.htmlAst)}},"9phv":function(n,e,t){"use strict";t("V+eJ");var l=t("i/jK"),o=t("1nHS"),r=t("RH6O");n.exports=function(n){var e,t,a=n.space,i=n.mustUseProperty||[],u=n.attributes||{},s=n.properties,c=n.transform,p={},d={};for(e in s)t=new r(e,c(u,e),s[e],a),-1!==i.indexOf(e)&&(t.mustUseProperty=!0),p[e]=t,d[l(e)]=e,d[l(t.attribute)]=e;return new o(p,d,a)}},CC3I:function(n,e,t){var l=t("Lc7W");n.exports=function(n,e){var t,o=null;if(!n||"string"!=typeof n)return o;for(var r,a,i=l(n),u="function"==typeof e,s=0,c=i.length;s<c;s++)r=(t=i[s]).property,a=t.value,u?e(r,a,t):a&&(o||(o={}),o[r]=a);return o}},Cjod:function(n,e,t){"use strict";t("pIFo");var l=t("ZQof"),o=t("2qIq"),r=t("6B/p"),a=t("W+Vs"),i=t("TTG4"),u=t("vfP8"),s=t("CC3I"),c=t("qrWY"),p=t("/v66"),d=p("root"),f=p("element"),h=p("text"),g=/-([a-z])/g;function m(n,e,t,l){var o,s=l.hyperscript||l.vdom||l.vue,c=l.schema,p=r(c,e);null==t||t!=t||s&&!1===t||s&&p.boolean&&!t||(null!==t&&"object"==typeof t&&"length"in t&&(t=(p.commaSeparated?u:i).stringify(t)),p.boolean&&!0===l.hyperscript&&(t=""),l.vue?"style"!==e&&(o="attrs"):p.mustUseProperty||(!0===l.vdom?o="attributes":!0===l.hyperscript&&(o="attrs")),o?(void 0===n[o]&&(n[o]={}),n[o][p.attribute]=t):l.react&&p.space?n[a[p.property]||p.property]=t:n[p.attribute]=t)}function v(n){return Boolean(n&&n.context&&n.cleanup)}function y(n,e){return e.toUpperCase()}n.exports=function(n,e,t){var r,a,i,u,p=t||{};if("function"!=typeof n)throw new Error("h is not a function");"string"==typeof p||"boolean"==typeof p?(r=p,p={}):r=p.prefix;a=function(n){var e=n&&n("div");return Boolean(e&&("_owner"in e||"_store"in e)&&null===e.key)}(n),i=function(n){var e=n&&n("div");return Boolean(e&&e.context&&e.context._isVue)}(n),u=function(n){return n&&"VirtualNode"===n("div").type}(n),null==r&&(r=(!0===a||!0===i||!0===u)&&"h-");if(d(e))e=1===e.children.length&&f(e.children[0])?e.children[0]:{type:"element",tagName:"div",properties:{},children:e.children};else if(!f(e))throw new Error("Expected root or element, not `"+(e&&e.type||e)+"`");return function n(e,t,l){var r,a,i,u,p,d,v,k,b,x=l.schema,w=x,C=t.tagName;"html"===x.space&&"svg"===C.toLowerCase()&&(w=o,l.schema=w);!0===l.vdom&&"html"===w.space&&(C=C.toUpperCase());for(u in r=t.properties,a={},r)m(a,u,r[u],l);"string"!=typeof a.style||!0!==l.vdom&&!0!==l.vue&&!0!==l.react||(a.style=function(n,e){var t={};try{s(n,(function(n,e){t[function(n){"-ms-"===n.slice(0,4)&&(n="ms-"+n.slice(4));return n.replace(g,y)}(n)]=e}))}catch(l){throw l.message=e+"[style]"+l.message.slice("undefined".length),l}return t}(a.style,C));l.prefix&&(l.key++,a.key=l.prefix+l.key);l.vdom&&"html"!==w.space&&(a.namespace=c[w.space]);p=[],i=t.children,d=i?i.length:0,v=-1;for(;++v<d;)k=i[v],f(k)?p.push(n(e,k,l)):h(k)&&p.push(k.value);return b=0===p.length?e(C,a):e(C,a,p),l.schema=x,b}(n,e,{schema:"svg"===p.space?o:l,prefix:r,key:0,react:a,vue:i,vdom:u,hyperscript:v(n)})}},I7gA:function(n,e,t){"use strict";var l=t("Yup2"),o=t("9phv"),r=l.booleanish,a=l.number,i=l.spaceSeparated;n.exports=o({transform:function(n,e){return"role"===e?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:r,ariaAutoComplete:null,ariaBusy:r,ariaChecked:r,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:i,ariaCurrent:null,ariaDescribedBy:i,ariaDetails:null,ariaDisabled:r,ariaDropEffect:i,ariaErrorMessage:null,ariaExpanded:r,ariaFlowTo:i,ariaGrabbed:r,ariaHasPopup:null,ariaHidden:r,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:i,ariaLevel:a,ariaLive:null,ariaModal:r,ariaMultiLine:r,ariaMultiSelectable:r,ariaOrientation:null,ariaOwns:i,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:r,ariaReadOnly:r,ariaRelevant:null,ariaRequired:r,ariaRoleDescription:i,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:r,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}})},JjqA:function(n,e,t){"use strict";n.exports=o;var l=o.prototype;function o(n,e){this.property=n,this.attribute=e}l.space=null,l.attribute=null,l.property=null,l.boolean=!1,l.booleanish=!1,l.overloadedBoolean=!1,l.number=!1,l.commaSeparated=!1,l.spaceSeparated=!1,l.commaOrSpaceSeparated=!1,l.mustUseProperty=!1,l.defined=!1},Lc7W:function(n,e,t){t("pIFo"),t("mGWK"),t("SRfc");var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,o=/\n/g,r=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,c=/^\s+|\s+$/g;function p(n){return n?n.replace(c,""):""}n.exports=function(n,e){if("string"!=typeof n)throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var t=1,c=1;function d(n){var e=n.match(o);e&&(t+=e.length);var l=n.lastIndexOf("\n");c=~l?n.length-l:c+n.length}function f(){var n={line:t,column:c};return function(e){return e.position=new h(n),y(),e}}function h(n){this.start=n,this.end={line:t,column:c},this.source=e.source}h.prototype.content=n;var g=[];function m(l){var o=new Error(e.source+":"+t+":"+c+": "+l);if(o.reason=l,o.filename=e.source,o.line=t,o.column=c,o.source=n,!e.silent)throw o;g.push(o)}function v(e){var t=e.exec(n);if(t){var l=t[0];return d(l),n=n.slice(l.length),t}}function y(){v(r)}function k(n){var e;for(n=n||[];e=b();)!1!==e&&n.push(e);return n}function b(){var e=f();if("/"==n.charAt(0)&&"*"==n.charAt(1)){for(var t=2;""!=n.charAt(t)&&("*"!=n.charAt(t)||"/"!=n.charAt(t+1));)++t;if(t+=2,""===n.charAt(t-1))return m("End of comment missing");var l=n.slice(2,t-2);return c+=2,d(l),n=n.slice(t),c+=2,e({type:"comment",comment:l})}}function x(){var n=f(),e=v(a);if(e){if(b(),!v(i))return m("property missing ':'");var t=v(u),o=n({type:"declaration",property:p(e[0].replace(l,"")),value:t?p(t[0].replace(l,"")):""});return v(s),o}}return y(),function(){var n,e=[];for(k(e);n=x();)!1!==n&&(e.push(n),k(e));return e}()}},LyDg:function(n,e,t){"use strict";var l=t("9phv");n.exports=l({space:"xml",transform:function(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},N8K4:function(n,e,t){"use strict";var l=t("9phv");n.exports=l({space:"xlink",transform:function(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},RH6O:function(n,e,t){"use strict";var l=t("JjqA"),o=t("Yup2");n.exports=i,i.prototype=new l,i.prototype.defined=!0;var r=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],a=r.length;function i(n,e,t,i){var s,c=-1;for(u(this,"space",i),l.call(this,n,e);++c<a;)u(this,s=r[c],(t&o[s])===o[s])}function u(n,e,t){t&&(n[e]=t)}},RdQs:function(n,e,t){"use strict";t("Tze0");var l=t("ZkSf"),o=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(n){var e;if("tr"===n.tagName||"td"===n.tagName||"th"===n.tagName)for(e in r)o.call(r,e)&&void 0!==n.properties[e]&&(i(n,r[e],n.properties[e]),delete n.properties[e])}function i(n,e,t){var l=(n.properties.style||"").trim();l&&!/;\s*/.test(l)&&(l+=";"),l&&(l+=" ");var o=l+e+": "+t+";";n.properties.style=o}n.exports=function(n){return l(n,"element",a),n}},TTG4:function(n,e,t){"use strict";t("KKXr"),t("Tze0"),e.parse=function(n){var e=String(n||"").trim();return""===e?[]:e.split(l)},e.stringify=function(n){return n.join(" ").trim()};var l=/[ \t\n\r\f]+/g},U6jy:function(n,e){n.exports=function(){for(var n={},e=0;e<arguments.length;e++){var l=arguments[e];for(var o in l)t.call(l,o)&&(n[o]=l[o])}return n};var t=Object.prototype.hasOwnProperty},"W+Vs":function(n){n.exports=JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}')},Wb05:function(n,e,t){"use strict";var l=t("9phv"),o=t("0rpx");n.exports=l({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:o,properties:{xmlns:null,xmlnsXLink:null}})},Yup2:function(n,e,t){"use strict";var l=0;function o(){return Math.pow(2,++l)}e.boolean=o(),e.booleanish=o(),e.overloadedBoolean=o(),e.number=o(),e.spaceSeparated=o(),e.commaSeparated=o(),e.commaOrSpaceSeparated=o()},ZQof:function(n,e,t){"use strict";var l=t("h5Sy"),o=t("N8K4"),r=t("LyDg"),a=t("Wb05"),i=t("I7gA"),u=t("afOB");n.exports=l([r,o,a,i,u])},ZkSf:function(n,e,t){"use strict";t("V+eJ"),n.exports=i;var l=t("uzq8"),o=l.CONTINUE,r=l.SKIP,a=l.EXIT;function i(n,e,t,o){"function"==typeof e&&"function"!=typeof t&&(o=t,t=e,e=null),l(n,e,(function(n,e){var l=e[e.length-1],o=l?l.children.indexOf(n):null;return t(n,o,l)}),o)}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},a3B7:function(n,e,t){"use strict";t.r(e);var l=t("d3wX"),o=t("W1BH");t.d(e,"VERSION",(function(){return o.a}));var r=t("K9nA");t.d(e,"self",(function(){return r.e})),t.d(e,"window",(function(){return r.f})),t.d(e,"global",(function(){return r.c})),t.d(e,"document",(function(){return r.b})),t.d(e,"process",(function(){return r.d})),t.d(e,"console",(function(){return r.a}));var a=t("5ku3");t.d(e,"isBrowser",(function(){return a.a})),t.d(e,"isBrowserMainThread",(function(){return a.b}));var i=t("XbXb");t.d(e,"getBrowser",(function(){return i.a})),t.d(e,"isMobile",(function(){return i.b}));var u=t("I0ug");t.d(e,"isElectron",(function(){return u.a}));var s=t("qlHW");t.d(e,"assert",(function(){return s.a})),t.d(e,"Log",(function(){return l.a}));var c=t("X68p");t.d(e,"COLOR",(function(){return c.a})),t.d(e,"addColor",(function(){return c.b}));var p=t("ygbw");t.d(e,"leftPad",(function(){return p.c})),t.d(e,"rightPad",(function(){return p.d}));var d=t("NdJ4");t.d(e,"autobind",(function(){return d.a}));var f=t("S5bX");t.d(e,"LocalStorage",(function(){return f.a}));var h=t("egY1");t.d(e,"getHiResTimestamp",(function(){return h.a}));var g=t("laie");t.d(e,"Stats",(function(){return g.b})),t.d(e,"Stat",(function(){return g.a})),e.default=new l.a({id:"probe.gl"})},afOB:function(n,e,t){"use strict";var l=t("Yup2"),o=t("9phv"),r=t("0rpx"),a=l.boolean,i=l.overloadedBoolean,u=l.booleanish,s=l.number,c=l.spaceSeparated,p=l.commaSeparated;n.exports=o({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:r,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:a,allowPaymentRequest:a,allowUserMedia:a,alt:null,as:null,async:a,autoCapitalize:null,autoComplete:c,autoFocus:a,autoPlay:a,capture:a,charSet:null,checked:a,cite:null,className:c,cols:s,colSpan:null,content:null,contentEditable:u,controls:a,controlsList:c,coords:s|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:a,defer:a,dir:null,dirName:null,disabled:a,download:i,draggable:u,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:a,formTarget:null,headers:c,height:s,hidden:a,high:s,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:p,inputMode:null,integrity:null,is:null,isMap:a,itemId:null,itemProp:c,itemRef:c,itemScope:a,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loop:a,low:s,manifest:null,max:null,maxLength:s,media:null,method:null,min:null,minLength:s,multiple:a,muted:a,name:null,nonce:null,noModule:a,noValidate:a,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:a,optimum:s,pattern:null,ping:c,placeholder:null,playsInline:a,poster:null,preload:null,readOnly:a,referrerPolicy:null,rel:c,required:a,reversed:a,rows:s,rowSpan:s,sandbox:c,scope:null,scoped:a,seamless:a,selected:a,shape:null,size:s,sizes:null,slot:null,span:s,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:p,start:s,step:null,style:null,tabIndex:s,target:null,title:null,translate:null,type:null,typeMustMatch:a,useMap:null,value:u,width:s,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:s,borderColor:null,bottomMargin:s,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:a,declare:a,event:null,face:null,frame:null,frameBorder:null,hSpace:s,leftMargin:s,link:null,longDesc:null,lowSrc:null,marginHeight:s,marginWidth:s,noResize:a,noHref:a,noShade:a,noWrap:a,object:null,profile:null,prompt:null,rev:null,rightMargin:s,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:s,valueType:null,version:null,vAlign:null,vLink:null,vSpace:s,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:a,prefix:null,property:null,results:s,security:null,unselectable:null}})},bzNg:function(n,e,t){"use strict";t.r(e),t.d(e,"query",(function(){return i})),t.d(e,"default",(function(){return u}));t("a1Th"),t("Btvt"),t("I5cv");var l=t("q1tI"),o=t.n(l),r=t("8mkv"),a=t("7yFj");var i="312603768",u=function(n){var e,t;t=n,(e=i).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var l;l=i;function i(){return n.apply(this,arguments)||this}return i.prototype.render=function(){var n=this.props.data.docBySlug.htmlAst,e=this.props.pageContext.relativeLinks;return o.a.createElement(a.n,null,o.a.createElement(r.a,{path:this.props.location.pathname,relativeLinks:e,htmlAst:n}))},i}(o.a.Component)},h5Sy:function(n,e,t){"use strict";var l=t("U6jy"),o=t("1nHS");n.exports=function(n){var e,t,r=n.length,a=[],i=[],u=-1;for(;++u<r;)e=n[u],a.push(e.property),i.push(e.normal),t=e.space;return new o(l.apply(null,a),l.apply(null,i),t)}},"i/jK":function(n,e,t){"use strict";n.exports=function(n){return n.toLowerCase()}},mFtL:function(n,e,t){"use strict";function l(n){if("string"==typeof n)return function(n){return function(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return a;if("object"==typeof n)return("length"in n?r:o)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function o(n){return function(e){var t;for(t in n)if(e[t]!==n[t])return!1;return!0}}function r(n){var e=function(n){for(var e=[],t=n.length,o=-1;++o<t;)e[o]=l(n[o]);return e}(n),t=e.length;return function(){var n=-1;for(;++n<t;)if(e[n].apply(this,arguments))return!0;return!1}}function a(){return!0}n.exports=l},mIDF:function(n,e,t){var l=t("a3B7"),o=l.Log,r=l.COLOR,a=new o({id:"gatsby-theme-ocular"}).enable();a.log({color:r.CYAN},"Loading ocular website generator (gatsby version)")(),n.exports.log=a,n.exports.COLOR=r},qrWY:function(n){n.exports=JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')},sU6V:function(n,e,t){"use strict";var l=t("Yup2"),o=t("9phv"),r=t("4v99"),a=l.boolean,i=l.number,u=l.spaceSeparated,s=l.commaSeparated,c=l.commaOrSpaceSeparated;n.exports=o({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:r,properties:{about:c,accentHeight:i,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:i,amplitude:i,arabicForm:null,ascent:i,attributeName:null,attributeType:null,azimuth:i,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:i,by:null,calcMode:null,capHeight:i,className:u,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:i,diffuseConstant:i,direction:null,display:null,dur:null,divisor:i,dominantBaseline:null,download:a,dx:null,dy:null,edgeMode:null,editable:null,elevation:i,enableBackground:null,end:null,event:null,exponent:i,externalResourcesRequired:null,fill:null,fillOpacity:i,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:s,g2:s,glyphName:s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:i,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:i,horizOriginX:i,horizOriginY:i,id:null,ideographic:i,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:i,k:i,k1:i,k2:i,k3:i,k4:i,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:i,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:i,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:i,overlineThickness:i,paintOrder:null,panose1:null,path:null,pathLength:i,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:u,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:i,pointsAtY:i,pointsAtZ:i,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:i,specularExponent:i,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:i,strikethroughThickness:i,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:i,strokeOpacity:i,strokeWidth:null,style:null,surfaceScale:i,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:i,tableValues:null,target:null,targetX:i,targetY:i,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,u1:null,u2:null,underlinePosition:i,underlineThickness:i,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:i,values:null,vAlphabetic:i,vMathematical:i,vectorEffect:null,vHanging:i,vIdeographic:i,version:null,vertAdvY:i,vertOriginX:i,vertOriginY:i,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:i,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})},uzq8:function(n,e,t){"use strict";n.exports=o;var l=t("mFtL");function o(n,e,t,o){var a;function i(n,l,u){var s,c=[];return(e&&!a(n,l,u[u.length-1]||null)||!1!==(c=r(t(n,u)))[0])&&n.children&&"skip"!==c[0]&&!1===(s=r(function(n,e){var t,l=o?-1:1,r=(o?n.length:-1)+l;for(;r>-1&&r<n.length;){if(!1===(t=i(n[r],r,e))[0])return t;r="number"==typeof t[1]?t[1]:r+l}}(n.children,u.concat(n))))[0]?s:c}"function"==typeof e&&"function"!=typeof t&&(o=t,t=e,e=null),a=l(e),i(n,null,[])}function r(n){return null!==n&&"object"==typeof n&&"length"in n?n:"number"==typeof n?[!0,n]:[n]}o.CONTINUE=!0,o.SKIP="skip",o.EXIT=!1},vOJQ:function(n,e,t){t("91GP"),t("SRfc"),t("pIFo"),t("9VmF");var l=t("33yf"),o=t("mIDF"),r=o.log,a=o.COLOR;function i(n,e){var t=l.relative(n,l.dirname(e));return l.join(t,l.basename(e,".md"))}n.exports.addToRelativeLinks=function(n){var e,t=n.source,l=n.target,o=n.rootFolder,u=n.edge,s=n.relativeLinks;if(!t||!l)return r.log({color:a.YELLOW},"couldn't add relative link for: "+JSON.stringify({source:t,target:l}))(),{};var c=o&&i(o,t),p=i(u.node.fields.path,l),d="/"+l;return Object.assign({},s,((e={})[c]=d,e[p]=d,e[l]=d,e))},n.exports.parseLinks=function(n,e,t){if(n.startsWith("http")||n.startsWith("#"))return null;var l=i(e,n.replace(/#.*/,"")),o=n.match(/#.*/),r=t[l];return r?o?r+o[0]:r:null}},vfP8:function(n,e,t){"use strict";t("Tze0"),t("V+eJ"),e.parse=function(n){var e,t=[],l=String(n||""),o=l.indexOf(","),r=0,a=!1;for(;!a;)-1===o&&(o=l.length,a=!0),!(e=l.slice(r,o).trim())&&a||t.push(e),r=o+1,o=l.indexOf(",",r);return t},e.stringify=function(n,e){var t=e||{},l=!1===t.padLeft?"":" ",o=t.padRight?" ":"";""===n[n.length-1]&&(n=n.concat(""));return n.join(o+","+l).trim()}}}]);