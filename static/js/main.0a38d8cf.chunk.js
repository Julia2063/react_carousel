(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(7),i=a.n(n),s=a(2),r=a(3),c=a(5),l=a(4),o=a(1),h=a.n(o),m=(a(12),a(13),a(0)),u=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={shift:0},t.image=t.props.images,t.maxShift=1,t.translateNext=function(){var e=t.props,a=e.itemWidth,n=e.step,i=t.state.shift,s=a*n+i,r=a*t.image.length-n*a+(n-t.props.frameSize)*a;t.setState({shift:s>r?r:s}),t.maxShift=r,t.props.infinity&&(s>r&&i!==r?t.setState({shift:r}):i===r?t.setState({shift:0}):t.setState({shift:s}))},t.translatePrev=function(){var e=t.props,a=e.itemWidth,n=e.step,i=t.state.shift,s=i-a*n,r=a*t.image.length-n*a+(n-t.props.frameSize)*a;t.setState({shift:s>0?s:0}),t.props.infinity&&(s>0&&0!==i?t.setState({shift:s}):0===i?t.setState({shift:r}):t.setState({shift:0}))},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this.props,e=t.images,a=t.frameSize,n=t.itemWidth,i=t.animationDuration,s=t.infinity,r=this.state.shift;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--prev",onClick:this.translatePrev,disabled:0===r&&!s||a===e.length,children:" "}),Object(m.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(a*n,"px")},children:Object(m.jsx)("div",{className:"Carousel__container",style:{transform:"translateX(-".concat(r,"px)"),transition:"transform ".concat(i/1e3,"s")},children:e.map((function(t,e){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:t,alt:e.toString(),className:"Carousel__image",style:{width:n,height:n}})},t)}))})}),Object(m.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--next","data-cy":"next",onClick:this.translateNext,disabled:r===this.maxShift&&!s||a===e.length,children:" "})]})}}]),a}(o.Component),p=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinity:!1},t.handlerEvent=function(e){var a=e.target,n=a.name,i=a.value,s=a.checked;switch(n){case"itemWidth":t.setState({itemWidth:+i});break;case"frameSize":t.setState({frameSize:+i});break;case"step":t.setState({step:+i});break;case"animationDuration":t.setState({animationDuration:+i});break;default:t.setState({infinity:s})}},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this.state,e=t.images,a=t.itemWidth,n=t.frameSize,i=t.step,s=t.animationDuration,r=t.infinity;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with",e.length,"images"]}),Object(m.jsxs)("form",{className:"App__form",onSubmit:function(t){t.preventDefault()},children:[Object(m.jsxs)("label",{children:["Item width:",Object(m.jsx)("input",{name:"itemWidth",type:"number",value:a,onChange:this.handlerEvent})]}),Object(m.jsxs)("label",{children:["Frame Size:",Object(m.jsx)("input",{name:"frameSize",type:"number",min:"1",value:n,onChange:this.handlerEvent})]}),Object(m.jsxs)("label",{children:["Step:",Object(m.jsx)("input",{name:"step",type:"number",value:i,onChange:this.handlerEvent})]}),Object(m.jsxs)("label",{children:["Animation duration:",Object(m.jsx)("input",{name:"animationDuration",type:"number",value:s,onChange:this.handlerEvent})]}),Object(m.jsxs)("label",{children:["Infinity:",Object(m.jsx)("input",{name:"infinit",type:"checkbox",checked:r,onChange:this.handlerEvent})]})]}),Object(m.jsx)(u,{images:e,itemWidth:a,frameSize:n,step:i,animationDuration:s,infinity:r})]})}}]),a}(h.a.Component);i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0a38d8cf.chunk.js.map