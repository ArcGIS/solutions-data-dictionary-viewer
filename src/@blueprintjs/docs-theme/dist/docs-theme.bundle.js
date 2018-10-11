!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("@blueprintjs/core"),require("tslib"),require("classnames"),require("@blueprintjs/select")):"function"==typeof define&&define.amd?define(["react","@blueprintjs/core","tslib","classnames","@blueprintjs/select"],t):"object"==typeof exports?exports.DocsTheme=t(require("react"),require("@blueprintjs/core"),require("tslib"),require("classnames"),require("@blueprintjs/select")):(e.Blueprint=e.Blueprint||{},e.Blueprint.DocsTheme=t(e.React,e.Blueprint.Core,e.tslib,e.classNames,e.Blueprint.Select))}("undefined"!=typeof self?self:this,function(e,t,n,r,o){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(10)),r(n(11)),r(n(12)),r(n(13))},function(e,t){(function(){var e,n,r,o,a,i,s,c,l,u,p,d,m,f,h,v,g;g=150,t.score=function(e,t,r){var o,i,s;return o=r.preparedQuery,r.allowErrors||a(e,o.core_lw,o.core_up)?(s=e.toLowerCase(),i=n(e,s,o),Math.ceil(i)):0},t.isMatch=a=function(e,t,n){var r,o,a,i,s,c,l;if(a=e.length,i=t.length,!a||i>a)return!1;for(r=-1,o=-1;++o<i;){for(s=t.charCodeAt(o),c=n.charCodeAt(o);++r<a&&(l=e.charCodeAt(r))!==s&&l!==c;);if(r===a)return!1}return!0},t.computeScore=n=function(e,t,n){var r,o,a,i,s,f,h,g,y,E,x,T,N,w,C,b,_,I,S,k,O,M,P,A;if(C=n.query,b=n.query_lw,E=e.length,N=C.length,o=(r=l(e,t,C,b)).score,r.count===N)return d(N,E,o,r.pos);if((w=t.indexOf(b))>-1)return m(e,t,C,b,w,N,E);for(k=new Array(N),s=new Array(N),A=v(N,E),T=x=Math.ceil(.75*N)+5,h=!0,y=-1;++y<N;)k[y]=0,s[y]=0;for(g=-1;++g<E;)if(!(M=t[g]).charCodeAt(0)in n.charCodes){if(h){for(y=-1;++y<N;)s[y]=0;h=!1}}else for(I=0,S=0,i=0,_=!0,h=!0,y=-1;++y<N;){if((O=k[y])>I&&(I=O),f=0,b[y]===M)if(P=c(g,e,t),f=i>0?i:p(e,t,C,b,g,y,P),(a=S+u(g,y,P,o,f))>I)I=a,T=x;else{if(_&&--T<=0)return Math.max(I,k[N-1])*A;_=!1}S=O,i=s[y],s[y]=f,k[y]=I}return(I=k[N-1])*A},t.isWordStart=c=function(e,t,n){var r,o;return 0===e||(r=t[e],o=t[e-1],i(o)||r!==n[e]&&o===n[e-1])},t.isWordEnd=s=function(e,t,n,r){var o,a;return e===r-1||(o=t[e],a=t[e+1],i(a)||o===n[e]&&a!==n[e+1])},i=function(e){return" "===e||"."===e||"-"===e||"_"===e||"/"===e||"\\"===e},h=function(e){var t;return e<20?100+(t=20-e)*t:Math.max(120-e,0)},t.scoreSize=v=function(e,t){return 85/(85+Math.abs(t-e))},d=function(e,t,n,r){return 2*e*(g*n+h(r))*v(e,t)},t.scorePattern=f=function(e,t,n,r,o){var a,i;return i=e,a=6,n===e&&(a+=2),r&&(a+=3),o&&(a+=1),e===t&&(r&&(i+=n===t?2:1),o&&(a+=1)),n+i*(i+a)},t.scoreCharacter=u=function(e,t,n,r,o){var a;return a=h(e),n?a+g*((r>o?r:o)+10):a+g*o},t.scoreConsecutives=p=function(e,t,n,r,o,a,i){var c,l,u,p,d,m,h;for(c=(u=(l=e.length)-o)<(d=(p=n.length)-a)?u:d,m=0,h=0,n[a]===e[o]&&m++;++h<c&&r[++a]===t[++o];)n[a]===e[o]&&m++;return 1===h?1+2*m:f(h,p,m,i,s(o,e,t,l))},t.scoreExactMatch=m=function(e,t,n,r,o,a,i){var l,u,p,m,h;for((h=c(o,e,t))||(p=t.indexOf(r,o+1))>-1&&(h=c(p,e,t))&&(o=p),u=-1,m=0;++u<a;)n[o+u]===e[u]&&m++;return l=s(o+a-1,e,t,i),d(a,i,f(a,a,m,h,l),o)},e=function(){return function(e,t,n){this.score=e,this.pos=t,this.count=n}}(),r=new e(0,.1,0),t.scoreAcronyms=l=function(t,n,a,s){var l,u,p,d,m,h,v,g,y,E,x;if(m=t.length,h=a.length,!(m>1&&h>1))return r;for(l=0,E=0,x=0,g=0,p=-1,d=-1;++d<h;){if(v=s[d],i(v)){if((p=n.indexOf(v,p+1))>-1){E++;continue}break}for(;++p<m;)if(v===n[p]&&c(p,t,n)){a[d]===t[p]&&g++,x+=p,l++;break}if(p===m)break}return l<2?r:(u=l===h&&o(t,n,a,l),y=f(l,h,g,!0,u),new e(y,x/l,l+E))},o=function(e,t,n,r){var o,a,i;if(o=0,(i=e.length)>12*n.length)return!1;for(a=-1;++a<i;)if(c(a,e,t)&&++o>r)return!1;return!0}}).call(this)},function(e,t,n){(function(){var e,r,o,a,i,s,c;c=n(5),a=c.isMatch,e=c.computeScore,s=c.scoreSize,t.score=function(t,n,r){var o,s,c;return o=r.preparedQuery,r.allowErrors||a(t,o.core_lw,o.core_up)?(c=t.toLowerCase(),s=e(t,c,o),s=i(t,c,s,r),Math.ceil(s)):0},i=function(t,n,a,i){var c,l,u,p,d,m,f,h,v,g;if(0===a)return 0;for(v=i.preparedQuery,g=i.useExtensionBonus,h=i.pathSeparator,d=t.length-1;t[d]===h;)d--;if(f=d-(u=t.lastIndexOf(h,d)),m=1,g&&(a*=m+=o(n,v.ext,u,d,2)),-1===u)return a;for(p=v.depth;u>-1&&p-- >0;)u=t.lastIndexOf(h,u-1);return l=-1===u?a:m*e(t.slice(u+1,d+1),n.slice(u+1,d+1),v),(c=6.5/(13+r(t,d+1,h)))*l+(1-c)*a*s(0,1.2*f)},t.countDir=r=function(e,t,n){var r,o;if(t<1)return 0;for(r=0,o=-1;++o<t&&e[o]===n;);for(;++o<t;)if(e[o]===n)for(r++;++o<t&&e[o]===n;);return r},t.getExtension=function(e){var t;return(t=e.lastIndexOf("."))<0?"":e.substr(t+1)},o=function(e,t,n,r,a){var i,s,c,l;if(!t.length)return 0;if(!((l=e.lastIndexOf(".",r))>n))return 0;for((i=r-l)<(c=t.length)&&(c=i,i=t.length),l++,s=-1;++s<c&&e[l+s]===t[s];);return 0===s&&a>0?.9*o(e,t,n,l-2,a-1):s/i}}).call(this)},function(e,t,n){(function(){var t,r,o,a,i,s,c;c=n(6),r=c.countDir,a=c.getExtension,e.exports=function(){return function(e,n){var i,c,l;if(i=(l=null!=n?n:{}).optCharRegEx,c=l.pathSeparator,!e||!e.length)return null;this.query=e,this.query_lw=e.toLowerCase(),this.core=t(e,i),this.core_lw=this.core.toLowerCase(),this.core_up=s(this.core),this.depth=r(e,e.length,c),this.ext=a(this.query_lw),this.charCodes=o(this.query_lw)}}(),i=/[ _\-:\/\\]/g,t=function(e,t){return null==t&&(t=i),e.replace(t,"")},s=function(e){var t,n,r;for(t="",n=0,r=e.length;n<r;n++)t+=e[n].toUpperCase()[0];return t},o=function(e){var t,n,r;for(r=e.length,n=-1,t=[];++n<r;)t[e.charCodeAt(n)]=!0;return t}}).call(this)},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(1),a=n(3),i=n.n(a),s=n(0),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,r=e.href,a=e.intent,c=void 0===a?o.Intent.PRIMARY:a,l=i()("docs-banner",o.Classes.intentClass(c),n);return s.createElement("a",{className:l,href:r,target:"_blank"},t)},t}(s.PureComponent),l="[Blueprint] BaseExample is deprecated and will be removed in the next beta. Compose new Example component instead of extending BaseExample.",u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.hasDelayedBeforeInitialRender=!1,t.hasCompletedInitialRender=!1,t}return r.__extends(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.hasDelayedBeforeInitialRender&&!this.hasCompletedInitialRender||!o.Utils.shallowCompareKeys(this.props,e)||!o.Utils.shallowCompareKeys(this.state,t)},t.prototype.componentWillMount=function(){var e=this;requestAnimationFrame(function(){e.hasDelayedBeforeInitialRender=!0,e.forceUpdate()})},t.prototype.componentDidMount=function(){console.warn(l)},t.prototype.componentDidUpdate=function(e,t){this.hasCompletedInitialRender||(this.hasCompletedInitialRender=!0)},t.prototype.render=function(){return this.hasDelayedBeforeInitialRender?s.createElement("div",{className:i()("docs-example-frame",this.className),"data-example-id":this.props.id},s.createElement("div",{className:"docs-example"},this.renderExample()),s.createElement("div",{className:"docs-example-options"},this.actuallyRenderOptions())):null},t.prototype.renderExample=function(){},t.prototype.renderOptions=function(){return[]},t.prototype.actuallyRenderOptions=function(){var e=this.renderOptions();return Array.isArray(e)?e.map(function(e,t){return s.createElement("div",{className:"docs-react-options-column",key:t},e)}):e},t}(s.Component);function p(e){return function(t){return e(t.target.checked)}}function d(e){return function(t){return e(t.target.value)}}function m(e){return d(function(t){return e(+t)})}var f=n(4);var h={getDocsData:v,renderBlock:v,renderType:v,renderViewSourceLinkText:v,showApiDocs:v};function v(e,t){if(null==e[t]||!o.Utils.isFunction(e[t]))return new Error("[Blueprint] Documentation context "+t+" must be function.")}function g(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=e.reduce(function(e,n,r){return e+t[r-1].toString()+n}),o=r.match(/^[ \t]*(?=\S)/gm),a=Math.min.apply(Math,o.map(function(e){return e.length})),i=new RegExp("^[ \\t]{"+a+"}","gm");return(r=a>0?r.replace(i,""):r).trim()}function y(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=e.toLowerCase().split(" "),o=t.map(function(e){return e.toLowerCase()});return r.every(function(e){return o.some(function(t){return t.indexOf(e)>=0})})}function E(e,t){return void 0===t&&(t=!1),function(n){for(var r=0,a=Object.keys(e);r<a.length;r++){var i=a[r],s=Number(i);n.which===s&&(t&&n.preventDefault(),e[s](n))}o.Utils.safeInvoke(e.all,n)}}function x(e,t,n){void 0===n&&(n=[]),e.forEach(function(e){t(e,n),Object(f.isPageNode)(e)&&x(e.children,t,[e].concat(n))})}var T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.hasDelayedBeforeInitialRender=!1,t}return r.__extends(t,e),t.prototype.render=function(){if(!this.hasDelayedBeforeInitialRender)return null;var e=this.props,t=e.children,n=e.className,o=(e.data,e.html),a=e.id,c=e.options,l=e.showOptionsBelowExample,u=r.__rest(e,["children","className","data","html","id","options","showOptionsBelowExample"]),p=i()("docs-example-frame",l?"docs-example-frame-column":"docs-example-frame-row",n),d=null==o?s.createElement("div",{className:"docs-example"},t):s.createElement("div",{className:"docs-example",dangerouslySetInnerHTML:{__html:o}});return s.createElement("div",r.__assign({className:p,"data-example-id":a},u),d,c&&s.createElement("div",{className:"docs-example-options"},c))},t.prototype.componentDidMount=function(){var e=this;requestAnimationFrame(function(){e.hasDelayedBeforeInitialRender=!0,e.forceUpdate()})},t}(s.PureComponent),N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={modifiers:new Set},t}return r.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props.value,n=this.context.getDocsData().css;if(null==n||null==n[t])return null;var r=n[t],a=r.markup,c=r.markupHtml,l=r.modifiers,u=r.reference,p=l.map(function(t){return s.createElement(o.Checkbox,{key:t.name,checked:e.state.modifiers.has(t.name),onChange:e.getModifierToggleHandler(t.name)},s.createElement(o.Code,{"data-modifier":t.name},t.name),s.createElement("div",{className:"docs-prop-description",dangerouslySetInnerHTML:{__html:t.documentation}}))});return s.createElement(s.Fragment,null,s.createElement(T,{id:u,options:p.length>0&&p,html:this.renderExample(a)}),s.createElement("div",{className:i()("docs-example-markup",o.Classes.RUNNING_TEXT),dangerouslySetInnerHTML:{__html:c}}))},t.prototype.getModifierToggleHandler=function(e){var t=this;return function(){var n=new Set(t.state.modifiers);n.has(e)?n.delete(e):n.add(e),t.setState({modifiers:n})}},t.prototype.renderExample=function(e){var t=this.getModifiers("."),n=this.getModifiers(":");return e.replace(w,n).replace(C,t)},t.prototype.getModifiers=function(e){return Array.from(this.state.modifiers.keys()).filter(function(t){return t.charAt(0)===e}).map(function(e){return e.slice(1)}).join(" ")},t.contextTypes=h,t.displayName="Docs2.CssExample",t}(s.PureComponent),w=/\{\{:modifier}}/g,C=/\{\{\.modifier}}/g;function b(){return{css:N,heading:_,interface:L,page:function(){return null},see:k}}var _=function(e){var t=e.level,n=e.route,r=e.value;return s.createElement("h"+t,{className:i()(o.Classes.HEADING,"docs-title")},s.createElement("a",{className:"docs-anchor","data-route":n,key:"anchor"}),s.createElement("a",{className:"docs-anchor-link",href:"#"+n,key:"link"},s.createElement(o.Icon,{icon:"link"})),r)};_.displayName="Docs2.Heading";var I=function(){return function(e){var t=this;this.docs=e,this.render=function(e){var n=e.value;if(null==n)return null;var r=t.docs[n];if(null==r)throw new Error("Unknown @reactDocs component: "+n);return s.createElement(r)}}}(),S=function(){return function(e){var t=this;this.examples=e,this.render=function(e){var n=e.value;if(null==n)return null;var r=t.examples[n];if(null==r)throw new Error("Unknown @example component: "+n);return s.createElement(s.Fragment,null,r.render({id:n}),s.createElement(o.AnchorButton,{className:"docs-example-view-source",fill:!0,href:r.sourceUrl,icon:"code",intent:o.Intent.PRIMARY,minimal:!0,target:"_blank",text:"View source on GitHub"}))}}}(),k=function(e,t){var n=e.value,r=t.renderType;return s.createElement("p",null,"See: ",r(n))};k.contextTypes=h,k.displayName="Docs.SeeTag";var O=function(e){var t,n,r=e.children,a=e.emptyMessage,c=e.title;return s.createElement("div",{className:i()("docs-modifiers-table",o.Classes.RUNNING_TEXT)},s.createElement(o.HTMLTable,null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,c),s.createElement("th",null,"Description"))),s.createElement("tbody",null,(t=r,0===(n=s.Children.toArray(t)).length||0===n.filter(function(e){return!!e}).length?function(e){void 0===e&&(e="Nothing here.");return s.createElement("tr",null,s.createElement("td",{colSpan:2},s.createElement("em",{className:o.Classes.TEXT_MUTED},e)))}(a):r))))};var M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return s.createElement("div",{className:"docs-interface-header"},s.createElement("div",{className:"docs-interface-name"},s.createElement("small",null,this.props.kind)," ",this.props.name," ",s.createElement("small",null,this.renderInheritance())),s.createElement("small",{className:"docs-package-name"},s.createElement("a",{href:this.props.sourceUrl,target:"_blank"},this.context.renderViewSourceLinkText(this.props))),this.props.children)},t.prototype.renderInheritance=function(){if(Object(f.isTsClass)(this.props)||Object(f.isTsInterface)(this.props)){var e=P("extends",this.props.extends),t=P("implements",this.props.implements);return this.context.renderType(e+" "+t)}return""},t.contextTypes=h,t.displayName="Docs2.ApiHeader",t}(s.PureComponent);function P(e,t){return null==t||0===t.length?"":e+" "+t.join(", ")}var A=function(e){var t,n=e.isDeprecated;return!0===n||"string"==typeof n?s.createElement(o.Tag,{intent:o.Intent.DANGER,minimal:!0},"string"==typeof n?s.createElement("span",{dangerouslySetInnerHTML:(t="Deprecated: "+n,{__html:t.replace("<","&lt;").replace(/```([^`]+)```/g,function(e,t){return"<pre>"+t+"</pre>"}).replace(/`([^`]+)`/g,function(e,t){return"<code>"+t+"</code>"})})}):"Deprecated"):null};A.displayName="Docs2.DeprecatedTag";var D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderPropRow=function(e){var n=t.context.renderBlock,r=e.flags,o=r.isDeprecated,a=r.isExternal,c=e.name,l=i()("docs-prop-name",{"docs-prop-is-deprecated":!!o,"docs-prop-is-internal":!a});return s.createElement("tr",{key:c},s.createElement("td",{className:l},s.createElement("code",null,c)),s.createElement("td",{className:"docs-prop-details"},s.createElement("code",{className:"docs-prop-type"},s.createElement("strong",null,e.defaultValue)),s.createElement("div",{className:"docs-prop-description"},n(e.documentation)),s.createElement("div",{className:"docs-prop-tags"},t.renderTags(e))))},t}return r.__extends(t,e),t.prototype.render=function(){var e=this.props.data,t=this.context.renderBlock;return s.createElement("div",{className:i()("docs-modifiers",this.props.className)},s.createElement(M,r.__assign({},e)),t(e.documentation),s.createElement(O,{emptyMessage:"This enum is empty.",title:"Members"},e.members.map(this.renderPropRow)))},t.prototype.renderTags=function(e){var t=e.flags.isDeprecated;return s.createElement(A,{isDeprecated:t})},t.contextTypes=h,t.displayName="Docs2.EnumTable",t}(s.PureComponent),R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderPropRow=function(e){var n=t.context,r=n.renderBlock,a=n.renderType,c=e.flags,l=c.isDeprecated,u=c.isExternal,p=c.isOptional,d=e.name,m=(Object(f.isTsProperty)(e)?e:e.signatures[0]).documentation;if(null!=m&&null!=m.contents&&m.contents.some(function(e){return Object(f.isTag)(e)&&"internal"===e.tag}))return null;var h=i()("docs-prop-name",{"docs-prop-is-deprecated":!0===l||"string"==typeof l,"docs-prop-is-internal":!u,"docs-prop-is-required":!p}),v=Object(f.isTsProperty)(e)?s.createElement(s.Fragment,null,s.createElement("strong",null,a(e.type)),s.createElement("em",{className:i()("docs-prop-default",o.Classes.TEXT_MUTED)},e.defaultValue)):s.createElement(s.Fragment,null,s.createElement("strong",null,a(e.signatures[0].type)));return s.createElement("tr",{key:d},s.createElement("td",{className:h},s.createElement("code",null,d)),s.createElement("td",{className:"docs-prop-details"},s.createElement("code",{className:"docs-prop-type"},v),s.createElement("div",{className:"docs-prop-description"},r(m)),s.createElement("div",{className:"docs-prop-tags"},t.renderTags(e))))},t}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.title,o=this.context.renderBlock,a=t.properties.concat(t.methods).sort(function(e,t){return e.name.localeCompare(t.name)}).map(this.renderPropRow);return s.createElement("div",{className:i()("docs-modifiers",this.props.className)},s.createElement(M,r.__assign({},t)),o(t.documentation),s.createElement(O,{emptyMessage:"This interface is empty.",title:n},a,this.renderIndexSignature(t.indexSignature)))},t.prototype.renderIndexSignature=function(e){if(null==e)return null;var t=this.context,n=t.renderBlock,r=t.renderType,o=e.type.slice(2,-2).split("]: "),a=o[0],i=o[1];return s.createElement("tr",{key:name},s.createElement("td",{className:"docs-prop-name"},s.createElement("code",null,r(a),"]")),s.createElement("td",{className:"docs-prop-details"},s.createElement("code",{className:"docs-prop-type"},r(i)),s.createElement("div",{className:"docs-prop-description"},n(e.documentation))))},t.prototype.renderTags=function(e){var t=this.context.renderType,n=e.flags,r=n.isDeprecated,a=n.isOptional,i=e.inheritedFrom;return s.createElement(s.Fragment,null,!a&&s.createElement(o.Tag,{children:"Required",intent:o.Intent.SUCCESS,minimal:!0}),s.createElement(A,{isDeprecated:r}),i&&s.createElement(o.Tag,{minimal:!0},"Inherited from ",s.createElement("code",null,t(i))))},t.contextTypes=h,t.displayName="Docs2.InterfaceTable",t}(s.PureComponent),B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props.data,t=this.context,n=t.renderBlock,o=t.renderType,a=e.type.split(" | ").map(function(e,t){return s.createElement("div",null,0===t?"=":"|"," ",o(e))});return s.createElement("div",{className:i()("docs-modifiers",this.props.className)},s.createElement(M,r.__assign({},e)),n(e.documentation),s.createElement("div",{className:"docs-type-alias docs-code"},a))},t.contextTypes=h,t.displayName="Docs2.TypeAliasTable",t}(s.PureComponent),L=function(e,t){var n=e.className,r=e.value,o=(0,t.getDocsData)().typescript;if(null==o||null==o[r])return null;var a=o[r];if(void 0===a)throw new Error("Unknown @interface "+name);if(Object(f.isTsClass)(a)||Object(f.isTsInterface)(a))return s.createElement(R,{className:n,data:a,title:"Props"});if(Object(f.isTsEnum)(a))return s.createElement(D,{className:n,data:a});if(Object(f.isTsTypeAlias)(a))return s.createElement(B,{className:n,data:a});throw new Error('"@interface '+name+'": unknown member kind "'+a.kind+'"')};function j(e,t,n){if(void 0===e)return null;var a=i()(o.Classes.RUNNING_TEXT,n),c=e.contents.map(function(e,n){if("string"==typeof e)return s.createElement("div",{className:a,key:n,dangerouslySetInnerHTML:{__html:e}});try{var i=t[e.tag];if(void 0===i)throw new Error("Unknown @tag: "+e.tag);return s.createElement(i,r.__assign({},e,{key:n}))}catch(e){return console.error(e.message),s.createElement(o.H3,{key:"__error-"+n},s.createElement(o.Code,null,e.message))}});return s.createElement("div",{className:"docs-section"},c)}L.contextTypes=h,L.displayName="Docs2.TypescriptExample";var H=function(e){return s.createElement("div",{className:i()("docs-nav-button",o.Classes.TEXT_MUTED),onClick:e.onClick},s.createElement(o.Icon,{icon:e.icon}),s.createElement("span",{className:o.Classes.FILL},e.text),s.createElement("div",{style:{opacity:.5}},s.createElement(o.KeyCombo,{combo:e.hotkey,minimal:!0})))},U=n(14),q=n(15),F=U.Omnibar.ofType(),K=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.filterMatches=function(e,t){return Object(q.filter)(t,e,{key:"filterKey",isPath:!0})},t.renderItem=function(e,t){if(!t.modifiers.matchesPredicate)return null;var n=e.path.reduce(function(e,t){return e.push(t,s.createElement(o.Icon,{icon:"caret-right"})),e},[]);n.pop();var r=s.createElement(s.Fragment,null,s.createElement("div",null,e.title),s.createElement("small",{className:o.Classes.TEXT_MUTED},n));return s.createElement(o.MenuItem,{active:t.modifiers.active,href:"#"+e.route,key:e.route,multiline:!0,onClick:t.handleClick,text:r})},t.handleItemSelect=function(e){location.hash=e.route,t.props.onClose()},t}return r.__extends(t,e),t.prototype.componentDidMount=function(){var e=this;this.sections=[],x(this.props.items,function(t,n){if(!0!==o.Utils.safeInvoke(e.props.itemExclude,t)){var r=t.route,a=t.title,i=n.map(function(e){return e.title}).reverse(),s=i.concat(["`"+a]).join("/");e.sections.push({filterKey:s,path:i,route:r,title:a})}})},t.prototype.render=function(){return this.sections?s.createElement(F,{className:"docs-navigator-menu",itemListPredicate:this.filterMatches,isOpen:this.props.isOpen,items:this.sections,itemRenderer:this.renderItem,onItemSelect:this.handleItemSelect,onClose:this.props.onClose,resetOnSelect:!0}):null},t}(s.PureComponent),V=function(e){var t=e.className,n=(e.isActive,e.isExpanded,e.section),a=r.__rest(e,["className","isActive","isExpanded","section"]);return s.createElement("a",r.__assign({className:i()(o.Classes.MENU_ITEM,t)},a),s.createElement("span",{className:o.Classes.FILL},n.title))};V.displayName="Docs2.NavMenuItem";var W=function(e){var t=e.renderNavMenuItem,n=void 0===t?V:t,a=e.items.map(function(t){var a,c,l,u=e.activeSectionId===t.route,p=u||(a=t.route,0===(c=e.activeSectionId).indexOf(a+"/")||0===c.indexOf(a+".")),d=i()("depth-"+(t.level-e.level-1),((l={"docs-nav-expanded":p})[o.Classes.ACTIVE]=u,l)),m=n({className:d,href:"#"+t.route,isActive:u,isExpanded:p,onClick:function(){return e.onItemClick(t.route)},section:t});return s.createElement("li",{key:t.route},m,Object(f.isPageNode)(t)?s.createElement(W,r.__assign({},e,{level:t.level,items:t.children})):null)}),c=i()("docs-nav-menu",o.Classes.LIST_UNSTYLED,e.className);return s.createElement("ul",{className:c},a)};W.displayName="Docs2.NavMenu";var X=function(e){var t=e.page,n=e.renderActions,r=j(t,e.tagRenderers,o.Classes.TEXT_LARGE);return s.createElement("div",{className:"docs-page","data-page-id":t.route},n&&s.createElement("div",{className:"docs-page-actions"},n(t)),r)};function G(){var e,t=function(){var e=document.createElement("div");e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),n=((e=document.createElement("style")).type="text/css",document.head.appendChild(e),e.sheet),r=o.Classes.getClassNamespace();n.insertRule("."+r+"-overlay-open .docs-banner { padding-right: "+(20+t)+"px; }",0),n.insertRule("."+r+"-overlay-open .docs-root { padding-right: "+t+"px }",0)}var Q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),t.context.showApiDocs(t.props.name)},t}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.name;return s.createElement("a",{className:t,href:"#api/"+n,onClick:this.handleClick},n)},t.contextTypes=h,t}(s.PureComponent),Y=function(e){function t(t){var n=e.call(this,t)||this;return n.refHandlers={content:function(e){return n.contentElement=e},nav:function(e){return n.navElement=e}},n.handleHashChange=function(){-1!==location.hostname.indexOf("blueprint")&&window.ga("send","pageview",{page:location.pathname+location.search+location.hash}),n.updateHash()},n.handleCloseNavigator=function(){return n.setState({isNavigatorOpen:!1})},n.handleOpenNavigator=function(){return n.setState({isNavigatorOpen:!0})},n.handleNavigation=function(e){var t=n.routeToPage[e];void 0!==e&&void 0!==t&&(n.setState({activePageId:t,activeSectionId:e,isNavigatorOpen:!1}),n.scrollToActiveSection())},n.handleNextSection=function(){return n.shiftSection(1)},n.handlePreviousSection=function(){return n.shiftSection(-1)},n.handleScroll=function(){var e=function(e,t){void 0===t&&(t=document.documentElement);var n=Array.from(t.querySelectorAll(".docs-title"));for(;n.length>0;){var r=n.pop();if(r.offsetTop<t.scrollTop+e)return r.querySelector("[data-route]").getAttribute("data-route")}return}(100,n.props.scrollParent);null!=e&&n.setState({activeSectionId:e})},n.handleApiBrowserOpen=function(e){return n.setState({activeApiMember:e,isApiBrowserOpen:!0})},n.handleApiBrowserClose=function(){return n.setState({isApiBrowserOpen:!1})},n.state={activeApiMember:"",activePageId:t.defaultPageId,activeSectionId:t.defaultPageId,isApiBrowserOpen:!1,isNavigatorOpen:!1},n.routeToPage={},x(n.props.docs.nav,function(e,t){var r=(Object(f.isPageNode)(e)?e:t[0]).reference;n.routeToPage[e.route]=r}),n}return r.__extends(t,e),t.prototype.getChildContext=function(){var e,t=this,n=this.props,r=n.docs,a=n.renderViewSourceLinkText;return{getDocsData:function(){return r},renderBlock:function(e){return j(e,t.props.tagRenderers)},renderType:(e=r,null!=e&&null!=e.typescript?function(e){return Object(f.linkify)(e,r.typescript,function(e,t,n){return s.createElement(Q,{key:e+"-"+n,name:e})})}:function(e){return e}),renderViewSourceLinkText:o.Utils.isFunction(a)?a:function(){return"View source"},showApiDocs:this.handleApiBrowserOpen}},t.prototype.render=function(){var e=this.state,t=e.activeApiMember,n=e.activePageId,r=e.activeSectionId,a=e.isApiBrowserOpen,c=this.props.docs,l=c.nav,u=c.pages,p=i()("docs-root",{"docs-examples-only":"?examples"===location.search},this.props.className),d=i()("docs-api-overlay",this.props.className);return s.createElement("div",{className:p},this.props.banner,s.createElement("div",{className:"docs-app"},s.createElement("div",{className:"docs-nav-wrapper"},s.createElement("div",{className:"docs-nav",ref:this.refHandlers.nav},this.props.header,s.createElement("div",{className:"docs-nav-divider"}),s.createElement(H,{icon:"search",hotkey:"shift + s",text:"Search...",onClick:this.handleOpenNavigator}),s.createElement("div",{className:"docs-nav-divider"}),s.createElement(W,{activePageId:n,activeSectionId:r,items:l,level:0,onItemClick:this.handleNavigation,renderNavMenuItem:this.props.renderNavMenuItem}),this.props.footer)),s.createElement("main",{className:i()("docs-content-wrapper",o.Classes.FILL),ref:this.refHandlers.content,role:"main"},s.createElement(X,{page:u[n],renderActions:this.props.renderPageActions,tagRenderers:this.props.tagRenderers}))),s.createElement(o.Overlay,{className:d,isOpen:a,onClose:this.handleApiBrowserClose},s.createElement(L,{tag:"typescript",value:t})),s.createElement(K,{isOpen:this.state.isNavigatorOpen,items:l,itemExclude:this.props.navigatorExclude,onClose:this.handleCloseNavigator}))},t.prototype.renderHotkeys=function(){return s.createElement(o.Hotkeys,null,s.createElement(o.Hotkey,{global:!0,combo:"shift+s",label:"Open navigator",onKeyDown:this.handleOpenNavigator,preventDefault:!0}),s.createElement(o.Hotkey,{global:!0,combo:"[",label:"Previous section",onKeyDown:this.handlePreviousSection}),s.createElement(o.Hotkey,{global:!0,combo:"]",label:"Next section",onKeyDown:this.handleNextSection}))},t.prototype.componentWillMount=function(){G(),this.updateHash()},t.prototype.componentDidMount=function(){var e=this;o.FocusStyleManager.onlyShowFocusOnTabs(),this.scrollToActiveSection(),o.Utils.safeInvoke(this.props.onComponentUpdate,this.state.activePageId),window.addEventListener("hashchange",this.handleHashChange),document.addEventListener("scroll",this.handleScroll),requestAnimationFrame(function(){return e.maybeScrollToActivePageMenuItem()})},t.prototype.componentWillUnmount=function(){window.removeEventListener("hashchange",this.handleHashChange),document.removeEventListener("scroll",this.handleScroll)},t.prototype.componentDidUpdate=function(e,t){var n=this.state.activePageId;t.activePageId!==n&&(this.scrollToActiveSection(),this.maybeScrollToActivePageMenuItem()),o.Utils.safeInvoke(this.props.onComponentUpdate,n)},t.prototype.updateHash=function(){var e=location.hash.slice(1);this.handleNavigation(""===e?this.props.defaultPageId:e)},t.prototype.maybeScrollToActivePageMenuItem=function(){var e=this.state.activeSectionId,t=this.navElement.querySelector('a[href="#'+e+'"]'),n=t.offsetTop-this.navElement.scrollTop;(n<0||n>this.navElement.offsetHeight)&&(this.navElement.scrollTop=t.offsetTop-2*t.offsetHeight)},t.prototype.scrollToActiveSection=function(){null!=this.contentElement&&function(e,t){void 0===t&&(t=document.documentElement);requestAnimationFrame(function(){var n,r=(n='a[data-route="'+e+'"]',t.querySelector(n));if(null!=r&&null!=r.parentElement){var o=r.parentElement.offsetTop+r.offsetTop;t.scrollTop=o}})}(this.state.activeSectionId,this.props.scrollParent)},t.prototype.shiftSection=function(e){var t=location.hash.slice(1),n=Object.keys(this.routeToPage),r=n.indexOf(t),o=-1===r?0:(r+e+n.length)%n.length;location.hash=n[o]},t.childContextTypes=h,t=r.__decorate([o.HotkeysTarget],t)}(s.PureComponent);n.d(t,"Banner",function(){return c}),n.d(t,"WARNING_BASE_EXAMPLE_DEPRECATED",function(){return l}),n.d(t,"BaseExample",function(){return u}),n.d(t,"handleBooleanChange",function(){return p}),n.d(t,"handleStringChange",function(){return d}),n.d(t,"handleNumberChange",function(){return m}),n.d(t,"Documentation",function(){return Y}),n.d(t,"Example",function(){return T}),n.d(t,"NavMenuItem",function(){return V}),n.d(t,"NavButton",function(){return H}),n.d(t,"dedent",function(){return g}),n.d(t,"smartSearch",function(){return y}),n.d(t,"createKeyEventHandler",function(){return E}),n.d(t,"eachLayoutNode",function(){return x}),n.d(t,"CssExample",function(){return N}),n.d(t,"createDefaultRenderers",function(){return b}),n.d(t,"Heading",function(){return _}),n.d(t,"ReactDocsTagRenderer",function(){return I}),n.d(t,"ReactExampleTagRenderer",function(){return S}),n.d(t,"SeeTag",function(){return k}),n.d(t,"TypescriptExample",function(){return L})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isPageNode=function(e){return null!=e&&null!=e.children}},function(e,t,n){"use strict";function r(e,t){return null!=e&&null!=e.tag&&(null==t||e.tag===t)}Object.defineProperty(t,"__esModule",{value:!0}),t.isTag=r,t.isHeadingTag=function(e){return r(e,"heading")}},function(e,t,n){"use strict";var r,o;function a(e){return function(t){return null!=t&&t.kind===e}}Object.defineProperty(t,"__esModule",{value:!0}),(o=r=t.Kind||(t.Kind={})).Class="class",o.Constructor="constructor",o.Enum="enum",o.EnumMember="enum member",o.Interface="interface",o.Method="method",o.Parameter="parameter",o.Signature="signature",o.Property="property",o.TypeAlias="type alias",t.isTsClass=a(r.Class),t.isTsConstructor=a(r.Constructor),t.isTsEnum=a(r.Enum),t.isTsEnumMember=a(r.EnumMember),t.isTsInterface=a(r.Interface),t.isTsMethod=a(r.Method),t.isTsParameter=a(r.Parameter),t.isTsProperty=a(r.Property),t.isTsSignature=a(r.Signature),t.isTsTypeAlias=a(r.TypeAlias)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.linkify=function(e,t,n){return e.split(r).map(function(e,r){return null==t[e]?e:n(e,t[e],r)})};var r=/([\[\]<>()| :.,]+)/g;t.slugify=function(e){return e.toLowerCase().replace(/[^\w.\/]/g,"-")}},function(e,t){e.exports=o},function(e,t,n){(function(t){(function(){var r,o,a,i,s,c,l,u;a=n(17),i=n(18),u=n(5),c=n(6),r=n(7),l=null,o="win32"===(void 0!==t&&null!==t?t.platform:void 0)?"\\":"/",e.exports={filter:function(e,t,n){return null==n&&(n={}),(null!=t?t.length:void 0)&&(null!=e?e.length:void 0)?(n=s(n,t),a(e,t,n)):[]},score:function(e,t,n){return null==n&&(n={}),(null!=e?e.length:void 0)&&(null!=t?t.length:void 0)?(n=s(n,t)).usePathScoring?c.score(e,t,n):u.score(e,t,n):0},match:function(e,t,n){var r;return null==n&&(n={}),e&&t?e===t?function(){r=[];for(var t=0,n=e.length;0<=n?t<n:t>n;0<=n?t++:t--)r.push(t);return r}.apply(this):(n=s(n,t),i.match(e,t,n)):[]},wrap:function(e,t,n){return null==n&&(n={}),e&&t?(n=s(n,t),i.wrap(e,t,n)):[]},prepareQuery:function(e,t){return null==t&&(t={}),(t=s(t,e)).preparedQuery}},s=function(e,t){return null==e.allowErrors&&(e.allowErrors=!1),null==e.usePathScoring&&(e.usePathScoring=!0),null==e.useExtensionBonus&&(e.useExtensionBonus=!1),null==e.pathSeparator&&(e.pathSeparator=o),null==e.optCharRegEx&&(e.optCharRegEx=null),null==e.wrap&&(e.wrap=null),null==e.preparedQuery&&(e.preparedQuery=l&&l.query===t?l:l=new r(t,e)),e}}).call(this)}).call(t,n(16))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,l=[],u=!1,p=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):p=-1,l.length&&m())}function m(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++p<t;)c&&c[p].run();p=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||s(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){(function(){var t,r,o,a;o=n(5),t=n(6),n(7),r=function(e){return e.candidate},a=function(e,t){return t.score-e.score},e.exports=function(e,n,i){var s,c,l,u,p,d,m,f,h,v,g,y,E;for(f=[],l=i.key,p=i.maxResults,u=i.maxInners,g=i.usePathScoring,h=null!=u&&u>0?u:e.length+1,s=null!=l,m=g?t:o,y=0,E=e.length;y<E&&(c=e[y],!((v=s?c[l]:c)&&(d=m.score(v,n,i))>0)||(f.push({candidate:c,score:d}),--h));y++);return f.sort(a),e=f.map(r),null!=p&&(e=e.slice(0,p)),e}}).call(this)},function(e,t,n){(function(){var e,r,o,a,i,s,c,l,u,p;p=n(5),o=p.isMatch,a=p.isWordStart,u=p.scoreConsecutives,l=p.scoreCharacter,c=p.scoreAcronyms,t.match=i=function(t,n,a){var i,c,l,u,p,d;return i=a.allowErrors,p=a.preparedQuery,u=a.pathSeparator,i||o(t,p.core_lw,p.core_up)?(d=t.toLowerCase(),0===(l=r(t,d,p)).length?l:(t.indexOf(u)>-1&&(c=e(t,d,p,u),l=s(l,c)),l)):[]},t.wrap=function(e,t,n){var r,o,a,s,c,l,u,p,d;if(null!=n.wrap&&(l=(d=n.wrap).tagClass,p=d.tagOpen,u=d.tagClose),null==l&&(l="highlight"),null==p&&(p='<strong class="'+l+'">'),null==u&&(u="</strong>"),e===t)return p+e+u;if(0===(a=i(e,0,n)).length)return e;for(s="",r=-1,c=0;++r<a.length;){for((o=a[r])>c&&(s+=e.substring(c,o),c=o);++r<a.length;){if(a[r]!==o+1){r--;break}o++}++o>c&&(s+=p,s+=e.substring(c,o),s+=u,c=o)}return c<=e.length-1&&(s+=e.substring(c)),s},e=function(e,t,n,o){var a,i,s;for(s=e.length-1;e[s]===o;)s--;if(-1===(a=e.lastIndexOf(o,s)))return[];for(i=n.depth;i-- >0;)if(-1===(a=e.lastIndexOf(o,a-1)))return[];return a++,s++,r(e.slice(a,s),t.slice(a,s),n,a)},s=function(e,t){var n,r,o,a,i,s,c;if(i=e.length,0===(s=t.length))return e.slice();if(0===i)return t.slice();for(o=-1,r=t[a=0],c=[];++o<i;){for(n=e[o];r<=n&&++a<s;)r<n&&c.push(r),r=t[a];c.push(n)}for(;a<s;)c.push(t[a++]);return c},r=function(e,t,n,r){var o,i,s,p,d,m,f,h,v,g,y,E,x,T,N,w,C,b,_,I,S,k;for(null==r&&(r=0),T=n.query,N=n.query_lw,v=e.length,E=T.length,o=c(e,t,T,N).score,b=new Array(E),d=new Array(E),0,1,2,3,k=new Array(v*E),x=-1,h=-1;++h<E;)b[h]=0,d[h]=0;for(f=-1;++f<v;)for(w=0,_=0,p=0,I=t[f],h=-1;++h<E;)m=0,i=0,C=_,N[h]===I&&(S=a(f,e,t),m=p>0?p:u(e,t,T,N,f,h,S),i=C+l(f,h,S,o,m)),_=b[h],p=d[h],w>_?y=2:(w=_,y=1),i>w?(w=i,y=3):m=0,b[h]=w,d[h]=m,k[++x]=w>0?y:0;for(x=(f=v-1)*E+(h=E-1),s=!0,g=[];s&&f>=0&&h>=0;)switch(k[x]){case 1:f--,x-=E;break;case 2:h--,x--;break;case 3:g.push(f+r),h--,f--,x-=E+1;break;default:s=!1}return g.reverse(),g}}).call(this)}])});