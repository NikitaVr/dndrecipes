(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5izn":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));a("pJf4"),a("E5k/");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("9eSz"),d=a.n(s),l=a("O8qb"),o=a("At4Z"),c=a("e4VM"),u=a("bBPc"),f=a("sjrs"),g="3334867410";t.default=function(e){var t=e.data,a=e.pageContext,r=Object.assign({},t.markdownRemark.frontmatter);console.log("INGREDIENT"),console.log(r);var s=a.recipes;console.log(s);var g=Object(u.a)("(min-width: 500px)");return i.a.createElement(l.a,null,i.a.createElement(o.a,{title:r.name},i.a.createElement("div",{style:{height:g?"400px":"200px"}},r.image&&i.a.createElement(d.a,{fluid:r.image.childImageSharp.fluid,alt:r.name,style:{maxHeight:"100%"},imgStyle:{objectFit:"contain",height:"100%"}})),i.a.createElement("h4",null,"Rarity: ",r.rarity),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.description}}),i.a.createElement("div",{class:"w-100"},i.a.createElement("h2",null,"Recipes"),i.a.createElement("hr",{class:"border-primary"}),i.a.createElement(f.a,null,s&&s.map((function(e){var t=Object.assign({},e.frontmatter);return console.log(t),i.a.createElement(n.Link,{to:"/recipes/"+Object(c.convertToSlug)(t.name)},i.a.createElement(f.a.Item,{action:!0},i.a.createElement("div",{class:"d-flex w-100 justify-content-between"},i.a.createElement("h5",{class:"mb-1"},t.name)),i.a.createElement("div",{class:"d-flex w-100 justify-content-between"},i.a.createElement("p",null,"Effects: ",t.effects.join(",")))))}))))))}},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),l=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+o+s+d+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=o.default.createElement(V,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?o.default.createElement("picture",null,i(r),d):d})),V=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,w=e.loading,I=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,l.default)({opacity:z?1:0,transition:j?"opacity "+y+"ms":"none"},d),H="boolean"==typeof b?"lightgray":b,C={transitionDelay:y+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&C,d,f),q={title:t,alt:this.state.isVisible?"":a,style:k,className:g,itemProp:v};if(m){var N=m,P=p(m);return o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},o.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),H&&o.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&C)}),P.base64&&o.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:q,imageVariants:N,generateSources:R}),P.tracedSVG&&o.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:q,imageVariants:N,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(N),o.default.createElement(V,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:w},P,{imageVariants:N}))}}))}if(h){var W=h,M=p(h),G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete G.display,o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},H&&o.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},j&&C)}),M.base64&&o.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:q,imageVariants:W,generateSources:R}),M.tracedSVG&&o.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:q,imageVariants:W,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(W),o.default.createElement(V,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:w},M,{imageVariants:W}))}}))}return null},t}(o.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});j.propTypes={resolutions:T,sizes:H,fixed:c.default.oneOfType([T,c.default.arrayOf(T)]),fluid:c.default.oneOfType([H,c.default.arrayOf(H)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=j;t.default=C}}]);
//# sourceMappingURL=component---src-templates-ingredient-js-8dca994a999528c0ca52.js.map