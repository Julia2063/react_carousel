(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n.n(a),s=n(8),r=n(2),c=n(3),l=n(5),o=n(4),h=n(1),m=n.n(h),u=(n(13),n(14),n(0)),p=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={shift:0},t.image=t.props.images,t.maxShift=1,t.translateNext=function(){var e=t.props,n=e.itemWidth,a=e.step,i=e.frameSize,s=t.state.shift,r=n*a+s,c=n*t.image.length-a*n+(a-i)*n;t.setState({shift:r>c?c:r}),t.maxShift=c,t.props.infinity&&(r>c&&s!==c?t.setState({shift:c}):s===c?t.setState({shift:0}):t.setState({shift:r}))},t.translatePrev=function(){var e=t.props,n=e.itemWidth,a=e.step,i=e.frameSize,s=t.state.shift,r=s-n*a,c=n*t.image.length-a*n+(a-i)*n;t.setState({shift:r>0?r:0}),t.props.infinity&&(r>0&&0!==s?t.setState({shift:r}):0===s?t.setState({shift:c}):t.setState({shift:0}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.frameSize,a=t.itemWidth,i=t.animationDuration,s=t.infinity,r=this.state.shift;return Object(u.jsxs)("div",{className:"Carousel",children:[Object(u.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--prev",onClick:this.translatePrev,disabled:0===r&&!s||n===e.length,children:" "}),Object(u.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(n*a,"px")},children:Object(u.jsx)("div",{className:"Carousel__container",style:{transform:"translateX(-".concat(r,"px)"),transition:"transform ".concat(i/1e3,"s")},children:e.map((function(t,e){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{src:t,alt:e.toString(),className:"Carousel__image",style:{width:a,height:a}})},t)}))})}),Object(u.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--next","data-cy":"next",onClick:this.translateNext,disabled:r===this.maxShift&&!s||n===e.length,children:" "})]})}}]),n}(h.Component),b=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinity:!1},t.handlerEvent=function(e){var n=e.target,a=n.name,i=n.value,r=n.checked;switch(a){case"itemWidth":case"frameSize":case"step":case"animationDuration":t.setState(Object(s.a)({},a,"frameSize"===a?1:+i));break;default:t.setState({infinity:r})}},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.itemWidth,a=t.frameSize,i=t.step,s=t.animationDuration,r=t.infinity;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with"," ",e.length," ","images"]}),Object(u.jsxs)("form",{className:"App__form",onSubmit:function(t){t.preventDefault()},children:[Object(u.jsxs)("label",{children:["Item width:",Object(u.jsx)("input",{name:"itemWidth",type:"number",value:n,onChange:this.handlerEvent})]}),Object(u.jsxs)("label",{children:["Frame Size:",Object(u.jsx)("input",{name:"frameSize",type:"number",min:1,value:a,onChange:this.handlerEvent})]}),Object(u.jsxs)("label",{children:["Step:",Object(u.jsx)("input",{name:"step",type:"number",value:i,onChange:this.handlerEvent})]}),Object(u.jsxs)("label",{children:["Animation duration:",Object(u.jsx)("input",{name:"animationDuration",type:"number",value:s,onChange:this.handlerEvent})]}),Object(u.jsxs)("label",{children:["Infinity:",Object(u.jsx)("input",{name:"infinit",type:"checkbox",checked:r,onChange:this.handlerEvent})]})]}),Object(u.jsx)(p,{images:e,itemWidth:n,frameSize:a,step:i,animationDuration:s,infinity:r})]})}}]),n}(m.a.Component);i.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.474c3c76.chunk.js.map