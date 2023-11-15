import{g as pe,r as te,c as ue,j as y}from"./app-6a5f28b9.js";import ge from"./FindeesCard-272e8d7c.js";import{A as de}from"./AuthenticatedLayout-0fa097db.js";import fe from"./FilterForm-89bf5425.js";import"./ApplicationLogo-a2b5a343.js";import"./transition-87e4e635.js";import"./InputError-3ff28845.js";import"./InputLabel-633b5018.js";import"./TextInput-be5a2939.js";var oe={exports:{}};(function(q,j){(function(T,R){q.exports=R(te)})(ue,T=>(()=>{var R={703:(p,u,h)=>{var a=h(414);function U(){}function W(){}W.resetWarningCache=U,p.exports=function(){function v(ie,A,z,V,se,Y){if(Y!==a){var Q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw Q.name="Invariant Violation",Q}}function O(){return v}v.isRequired=v;var K={array:v,bigint:v,bool:v,func:v,number:v,object:v,string:v,symbol:v,any:v,arrayOf:O,element:v,elementType:v,instanceOf:O,node:v,objectOf:O,oneOf:O,oneOfType:O,shape:O,exact:O,checkPropTypes:W,resetWarningCache:U};return K.PropTypes=K,K}},697:(p,u,h)=>{p.exports=h(703)()},414:p=>{p.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:p=>{p.exports=T}},S={};function b(p){var u=S[p];if(u!==void 0)return u.exports;var h=S[p]={exports:{}};return R[p](h,h.exports,b),h.exports}b.n=p=>{var u=p&&p.__esModule?()=>p.default:()=>p;return b.d(u,{a:u}),u},b.d=(p,u)=>{for(var h in u)b.o(u,h)&&!b.o(p,h)&&Object.defineProperty(p,h,{enumerable:!0,get:u[h]})},b.o=(p,u)=>Object.prototype.hasOwnProperty.call(p,u),b.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var $={};return(()=>{b.r($),b.d($,{default:()=>le});var p=b(98),u=b.n(p),h=b(697),a=b.n(h);function U(){return U=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},U.apply(this,arguments)}var W=function(r){var i=r.pageClassName,o=r.pageLinkClassName,l=r.page,F=r.selected,M=r.activeClassName,w=r.activeLinkClassName,t=r.getEventListener,e=r.pageSelectedHandler,g=r.href,n=r.extraAriaContext,s=r.pageLabelBuilder,c=r.rel,f=r.ariaLabel||"Page "+l+(n?" "+n:""),C=null;return F&&(C="page",f=r.ariaLabel||"Page "+l+" is your current page",i=i!==void 0?i+" "+M:M,o!==void 0?w!==void 0&&(o=o+" "+w):o=w),u().createElement("li",{className:i},u().createElement("a",U({rel:c,role:g?void 0:"button",className:o,href:g,tabIndex:F?"-1":"0","aria-label":f,"aria-current":C,onKeyPress:e},t(e)),s(l)))};W.propTypes={pageSelectedHandler:a().func.isRequired,selected:a().bool.isRequired,pageClassName:a().string,pageLinkClassName:a().string,activeClassName:a().string,activeLinkClassName:a().string,extraAriaContext:a().string,href:a().string,ariaLabel:a().string,page:a().number.isRequired,getEventListener:a().func.isRequired,pageLabelBuilder:a().func.isRequired,rel:a().string};const v=W;function O(){return O=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},O.apply(this,arguments)}var K=function(r){var i=r.breakLabel,o=r.breakAriaLabel,l=r.breakClassName,F=r.breakLinkClassName,M=r.breakHandler,w=r.getEventListener,t=l||"break";return u().createElement("li",{className:t},u().createElement("a",O({className:F,role:"button",tabIndex:"0","aria-label":o,onKeyPress:M},w(M)),i))};K.propTypes={breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabel:a().string,breakClassName:a().string,breakLinkClassName:a().string,breakHandler:a().func.isRequired,getEventListener:a().func.isRequired};const ie=K;function A(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??i}function z(r){return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},z(r)}function V(){return V=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},V.apply(this,arguments)}function se(r,i){for(var o=0;o<i.length;o++){var l=i[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,l.key,l)}}function Y(r,i){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},Y(r,i)}function Q(r,i){if(i&&(z(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return k(r)}function k(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function X(r){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},X(r)}function x(r,i,o){return i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,r}var re=function(r){(function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Y(t,e)})(w,r);var i,o,l,F,M=(l=w,F=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,e=X(l);if(F){var g=X(this).constructor;t=Reflect.construct(e,arguments,g)}else t=e.apply(this,arguments);return Q(this,t)});function w(t){var e,g;return function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,w),x(k(e=M.call(this,t)),"handlePreviousPage",function(n){var s=e.state.selected;e.handleClick(n,null,s>0?s-1:void 0,{isPrevious:!0})}),x(k(e),"handleNextPage",function(n){var s=e.state.selected,c=e.props.pageCount;e.handleClick(n,null,s<c-1?s+1:void 0,{isNext:!0})}),x(k(e),"handlePageSelected",function(n,s){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(s,null,void 0,{isActive:!0});e.handleClick(s,null,n)}),x(k(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),x(k(e),"getEventListener",function(n){return x({},e.props.eventListener,n)}),x(k(e),"handleClick",function(n,s,c){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},C=f.isPrevious,E=C!==void 0&&C,Z=f.isNext,G=Z!==void 0&&Z,J=f.isBreak,L=J!==void 0&&J,B=f.isActive,D=B!==void 0&&B;n.preventDefault?n.preventDefault():n.returnValue=!1;var _=e.state.selected,d=e.props.onClick,N=c;if(d){var P=d({index:s,selected:_,nextSelectedPage:c,event:n,isPrevious:E,isNext:G,isBreak:L,isActive:D});if(P===!1)return;Number.isInteger(P)&&(N=P)}N!==void 0&&e.handlePageChange(N)}),x(k(e),"handleBreakClick",function(n,s){var c=e.state.selected;e.handleClick(s,n,c<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),x(k(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),x(k(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),x(k(e),"getElementPageRel",function(n){var s=e.state.selected,c=e.props,f=c.nextPageRel,C=c.prevPageRel,E=c.selectedPageRel;return s-1===n?C:s===n?E:s+1===n?f:void 0}),x(k(e),"pagination",function(){var n=[],s=e.props,c=s.pageRangeDisplayed,f=s.pageCount,C=s.marginPagesDisplayed,E=s.breakLabel,Z=s.breakClassName,G=s.breakLinkClassName,J=s.breakAriaLabels,L=e.state.selected;if(f<=c)for(var B=0;B<f;B++)n.push(e.getPageElement(B));else{var D=c/2,_=c-D;L>f-c/2?D=c-(_=f-L):L<c/2&&(_=c-(D=L));var d,N,P=function(I){return e.getPageElement(I)},m=[];for(d=0;d<f;d++){var ee=d+1;if(ee<=C)m.push({type:"page",index:d,display:P(d)});else if(ee>f-C)m.push({type:"page",index:d,display:P(d)});else if(d>=L-D&&d<=L+(L===0&&c>1?_-1:_))m.push({type:"page",index:d,display:P(d)});else if(E&&m.length>0&&m[m.length-1].display!==N&&(c>0||C>0)){var ne=d<L?J.backward:J.forward;N=u().createElement(ie,{key:d,breakAriaLabel:ne,breakLabel:E,breakClassName:Z,breakLinkClassName:G,breakHandler:e.handleBreakClick.bind(null,d),getEventListener:e.getEventListener}),m.push({type:"break",index:d,display:N})}}m.forEach(function(I,H){var ae=I;I.type==="break"&&m[H-1]&&m[H-1].type==="page"&&m[H+1]&&m[H+1].type==="page"&&m[H+1].index-m[H-1].index<=2&&(ae={type:"page",index:I.index,display:P(I.index)}),n.push(ae.display)})}return n}),t.initialPage!==void 0&&t.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(t.initialPage,") and forcePage (").concat(t.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),g=t.initialPage?t.initialPage:t.forcePage?t.forcePage:0,e.state={selected:g},e}return i=w,(o=[{key:"componentDidMount",value:function(){var t=this.props,e=t.initialPage,g=t.disableInitialCallback,n=t.extraAriaContext,s=t.pageCount,c=t.forcePage;e===void 0||g||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),e!==void 0&&e>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(s-1,").")),c!==void 0&&c>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(c," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(t){this.props.forcePage!==void 0&&this.props.forcePage!==t.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(t.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var t=this.state.selected,e=this.props,g=e.pageCount,n=t+e.pageRangeDisplayed;return n>=g?g-1:n}},{key:"getBackwardJump",value:function(){var t=this.state.selected-this.props.pageRangeDisplayed;return t<0?0:t}},{key:"getElementHref",value:function(t){var e=this.props,g=e.hrefBuilder,n=e.pageCount,s=e.hrefAllControls;if(g)return s||t>=0&&t<n?g(t+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(t){var e=t===this.state.selected;if(this.props.ariaLabelBuilder&&t>=0&&t<this.props.pageCount){var g=this.props.ariaLabelBuilder(t+1,e);return this.props.extraAriaContext&&!e&&(g=g+" "+this.props.extraAriaContext),g}}},{key:"getPageElement",value:function(t){var e=this.state.selected,g=this.props,n=g.pageClassName,s=g.pageLinkClassName,c=g.activeClassName,f=g.activeLinkClassName,C=g.extraAriaContext,E=g.pageLabelBuilder;return u().createElement(v,{key:t,pageSelectedHandler:this.handlePageSelected.bind(null,t),selected:e===t,rel:this.getElementPageRel(t),pageClassName:n,pageLinkClassName:s,activeClassName:c,activeLinkClassName:f,extraAriaContext:C,href:this.getElementHref(t),ariaLabel:this.ariaLabelBuilder(t),page:t+1,pageLabelBuilder:E,getEventListener:this.getEventListener})}},{key:"render",value:function(){var t=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&t!==void 0)return t&&t(this.props);var e=this.props,g=e.disabledClassName,n=e.disabledLinkClassName,s=e.pageCount,c=e.className,f=e.containerClassName,C=e.previousLabel,E=e.previousClassName,Z=e.previousLinkClassName,G=e.previousAriaLabel,J=e.prevRel,L=e.nextLabel,B=e.nextClassName,D=e.nextLinkClassName,_=e.nextAriaLabel,d=e.nextRel,N=this.state.selected,P=N===0,m=N===s-1,ee="".concat(A(E)).concat(P?" ".concat(A(g)):""),ne="".concat(A(B)).concat(m?" ".concat(A(g)):""),I="".concat(A(Z)).concat(P?" ".concat(A(n)):""),H="".concat(A(D)).concat(m?" ".concat(A(n)):""),ae=P?"true":"false",ce=m?"true":"false";return u().createElement("ul",{className:c||f,role:"navigation","aria-label":"Pagination"},u().createElement("li",{className:ee},u().createElement("a",V({className:I,href:this.getElementHref(N-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ae,"aria-label":G,rel:J},this.getEventListener(this.handlePreviousPage)),C)),this.pagination(),u().createElement("li",{className:ne},u().createElement("a",V({className:H,href:this.getElementHref(N+1),tabIndex:m?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ce,"aria-label":_,rel:d},this.getEventListener(this.handleNextPage)),L)))}}])&&se(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),w}(p.Component);x(re,"propTypes",{pageCount:a().number.isRequired,pageRangeDisplayed:a().number,marginPagesDisplayed:a().number,previousLabel:a().node,previousAriaLabel:a().string,prevPageRel:a().string,prevRel:a().string,nextLabel:a().node,nextAriaLabel:a().string,nextPageRel:a().string,nextRel:a().string,breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabels:a().shape({forward:a().string,backward:a().string}),hrefBuilder:a().func,hrefAllControls:a().bool,onPageChange:a().func,onPageActive:a().func,onClick:a().func,initialPage:a().number,forcePage:a().number,disableInitialCallback:a().bool,containerClassName:a().string,className:a().string,pageClassName:a().string,pageLinkClassName:a().string,pageLabelBuilder:a().func,activeClassName:a().string,activeLinkClassName:a().string,previousClassName:a().string,nextClassName:a().string,previousLinkClassName:a().string,nextLinkClassName:a().string,disabledClassName:a().string,disabledLinkClassName:a().string,breakClassName:a().string,breakLinkClassName:a().string,extraAriaContext:a().string,ariaLabelBuilder:a().func,eventListener:a().string,renderOnZeroPageCount:a().func,selectedPageRel:a().string}),x(re,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const le=re})(),$})())})(oe);var me=oe.exports;const be=pe(me);function he({items:q,itemsPerPage:j,children:T}){const[R,S]=te.useState(0),b=R+j;console.log(`Loading items from ${R} to ${b}`),q.slice(R,b);const $=Math.ceil(q.length/j),p=u=>{const h=u.selected*j%q.length;console.log(`User requested page number ${u.selected}, which is offset ${h}`),S(h)};return y.jsxs(y.Fragment,{children:[y.jsx(be,{breakLabel:"...",nextLabel:" >",onPageChange:p,pageRangeDisplayed:5,pageCount:$,previousLabel:"< ",renderOnZeroPageCount:null}),T]})}function we({auth:q,findees:j}){const[T,R]=te.useState({});return te.useEffect(()=>{console.log("searching..."),console.log(T)},[T]),y.jsxs(de,{user:q.user,header:y.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Dashboard"}),children:[y.jsx(he,{items:j,itemsPerPage:4,children:y.jsx("span",{children:"test"})}),y.jsx("div",{className:"py-12",children:y.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-4",children:y.jsxs("div",{className:" overflow-hidden sm:rounded-lg",children:[y.jsx(fe,{filterObj:T,setFilterObj:R}),y.jsx("div",{className:" text-gray-900 flex flex-wrap ",children:j==null?void 0:j.map(S=>y.jsx("div",{className:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2",children:y.jsx(ge,{findee:S},S.id)},S.id))})]})})})]})}export{we as default};