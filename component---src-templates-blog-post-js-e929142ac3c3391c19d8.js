(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(154),u=n.n(l),c=n(147),s=n(155),p=n.n(s),d=n(219),m=n.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.handleNewComment=function(e){},n.render=function(){return i.a.createElement("div",null,i.a.createElement(m.a,{shortname:"beace",identifier:"blog-beacelee-com",title:this.props.title,url:"https://blog.beacelee.com",category_id:"",onNewComment:this.handleNewComment}))},t}(i.a.Component),h=n(153);n.d(t,"pageQuery",function(){return g});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=p()(this.props,"data.site.siteMetadata.title"),n=this.props.pageContext,a=n.previous,r=n.next;return i.a.createElement(h.a,{location:this.props.location},i.a.createElement(u.a,{title:e.frontmatter.title+" | "+t}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",null,e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:10}}),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a&&i.a.createElement("li",null,i.a.createElement(c.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r&&i.a.createElement("li",null,i.a.createElement(c.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))),i.a.createElement(f,{title:e.frontmatter.title}))},t}(i.a.Component),g=(t.default=y,"525352797")},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(146),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(27);n.d(t,"waitForRouteChange",function(){return c.c});var s=n(148),p=n.n(s);n.d(t,"PageRenderer",function(){return p.a});var d=n(38);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},149:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(52),u=n(1),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=(n(150),n(159),n(147)),u=(n(151),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("nav",{className:"top-nav"},i.a.createElement("div",{className:"top-nav-container"},i.a.createElement(l.Link,{to:"/",className:"top-nav-item",activeStyle:{color:"skyblue",borderBottom:"1px solid skyblue"}},i.a.createElement("i",{className:"iconfont icon-home"}),"HOME"),i.a.createElement(l.Link,{to:"/tags",className:"top-nav-item",activeStyle:{color:"skyblue",borderBottom:"1px solid skyblue"}},i.a.createElement("i",{className:"iconfont icon-tags"}),"TAGS"),i.a.createElement(l.Link,{to:"/timeline",className:"top-nav-item",activeStyle:{color:"skyblue",borderBottom:"1px solid skyblue"}},i.a.createElement("i",{className:"iconfont icon-timeline"}),"TIMELINE"),i.a.createElement(l.Link,{to:"/about/",className:"top-nav-item",activeStyle:{color:"skyblue",borderBottom:"1px solid skyblue"}},i.a.createElement("i",{className:"iconfont icon-about"}),"About"),i.a.createElement("a",{href:"https://github.com/BeAce",target:"_blank",className:"top-nav-item",activeStyle:{color:"skyblue",borderBottom:"1px solid skyblue"}},i.a.createElement("i",{className:"iconfont icon-GitHub"}),"GitHub")))},t}(i.a.Component)),c=(n(152),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(l.Link,{to:"/",style:{marginRight:20,flexShrink:0}},i.a.createElement("img",{src:"https://imgs.beacelee.com/logo.jpg",alt:"Beace Lee",style:{marginRight:20,marginBottom:0,width:80,height:80,borderRadius:"50%"}})),i.a.createElement("div",{style:{padding:0,margin:0}},i.a.createElement("h3",{style:{marginBottom:6}},i.a.createElement(l.Link,{to:"/",style:{textDecoration:"none"}},"Beace Blog")),i.a.createElement("div",{className:"description"},"Written by ",i.a.createElement("strong",null,"Beace Lee")," who lives and works in China building useful things."," ",i.a.createElement("a",{href:"https://twitter.com/beaceshimin"},"You should follow him on Twitter"))))},t}(i.a.Component)),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null),i.a.createElement("div",{className:"section"},i.a.createElement(c,null),e))},t}(i.a.Component);t.a=s},219:function(e,t,n){"use strict";e.exports=n(220)},220:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=l(n(0)),i=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],c=!1;function s(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return u.some(function(e){return e===n})?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!c){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),c=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){s(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){s(this,t)},this.addDisqusScript())}}]),t}();p.displayName="DisqusThread",p.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e929142ac3c3391c19d8.js.map