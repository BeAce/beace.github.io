(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{214:function(e,t,n){"use strict";n.r(t);var r=n(32),a=n.n(r),o=n(1),i=n.n(o),l=n(232),u=n.n(l),s=n(216),c=n(239),p=n.n(c),f=n(312),d=n.n(f),m=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.handleNewComment=function(e){console.log(e)},n.render=function(){return i.a.createElement("div",null,i.a.createElement(d.a,{shortname:"beace",identifier:"blog-beacelee-com",title:"Beace Blog",url:"https://blog.beacelee.com",category_id:"",onNewComment:this.handleNewComment}))},t}(i.a.Component),h=n(231);n.d(t,"pageQuery",function(){return y});var g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=p()(this.props,"data.site.siteMetadata.title"),n=this.props.pageContext,r=n.previous,a=n.next;return i.a.createElement(h.a,{location:this.props.location},i.a.createElement(u.a,{title:e.frontmatter.title+" | "+t}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:{display:"block",marginBottom:10,marginTop:10}},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:10}}),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r&&i.a.createElement("li",null,i.a.createElement(s.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),a&&i.a.createElement("li",null,i.a.createElement(s.a,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →"))),i.a.createElement(m,null))},t}(i.a.Component),y=(t.default=g,"525352797")},216:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(0),i=n.n(o),l=n(215),u=n.n(l);n.d(t,"a",function(){return u.a}),n(217),a.a.createContext({}),i.a.object,i.a.string.isRequired,i.a.func,i.a.func},217:function(e,t,n){var r;e.exports=(r=n(224))&&r.default||r},224:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(0),i=n.n(o),l=n(59),u=n(3),s=function(e){var t=e.location,n=u.a.getResourcesForPathname(t.pathname);return a.a.createElement(l.a,{location:t,pageResources:n})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},229:function(e,t,n){},231:function(e,t,n){"use strict";var r=n(32),a=n.n(r),o=n(1),i=n.n(o),l=n(216),u=(n(243),n(229),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:60,alignItems:"center",textDecoration:"none"}},i.a.createElement(l.a,{to:"/",style:{marginRight:20}},i.a.createElement("img",{src:"https://images-manager.oss-cn-shanghai.aliyuncs.com/logo.jpg",alt:"Beace Lee",style:{marginRight:20,marginBottom:0,width:80,height:80,borderRadius:"50%"}})),i.a.createElement("div",{style:{padding:0,margin:0}},i.a.createElement("h3",{style:{marginBottom:6}},i.a.createElement(l.a,{to:"/",style:{textDecoration:"none"}},"Beace Blog")),"Written by ",i.a.createElement("strong",null,"Beace Lee")," who lives and works in China building useful things."," ",i.a.createElement("a",{href:"https://twitter.com/beaceshimin"},"You should follow him on Twitter")))},t}(i.a.Component)),s=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return i.a.createElement("div",{style:{padding:"50px 200px"}},i.a.createElement(u,null),t)},t}(i.a.Component);t.a=s},312:function(e,t,n){"use strict";e.exports=n(313)},313:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),i=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],s=!1;function c(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return u.some(function(e){return e===n})?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!s){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),s=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){c(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){c(this,t)},this.addDisqusScript())}}]),t}();p.displayName="DisqusThread",p.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9cf7f3acbafd97c74869.js.map