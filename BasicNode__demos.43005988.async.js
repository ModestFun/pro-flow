"use strict";(self.webpackChunkkitchen_flow_editor=self.webpackChunkkitchen_flow_editor||[]).push([[199],{98752:function(p,c,e){e.r(c);var f=e(54306),u=e.n(f),d=e(86385),h=e(43233),_=e(5072),m=e(10807),v=e(50959),x=e(84817),o=e(11527),O=(0,v.memo)(function(){var M=(0,v.useState)([]),E=u()(M,2),t=E[0],r=E[1];return(0,o.jsxs)("div",{children:[(0,o.jsxs)(_.Z.Preview,{collapsedKeys:t,onCollapsedKeysChange:r,title:"\u8F93\u51FA",children:[(0,o.jsx)(m.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,o.jsx)(m.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"}),(0,o.jsx)(m.Q,{id:"model",title:"\u6A21\u578B",children:"GPT-3.5-turbo"})]}),(0,o.jsx)(d.Z,{}),(0,o.jsxs)(x.D,{align:"center",horizontal:!0,gap:8,children:[(0,o.jsx)(h.ZP,{onClick:function(){r([])},children:"\u5168\u90E8\u5C55\u5F00"}),(0,o.jsxs)("div",{children:["\u6298\u8D77 Key: ",t.join(",")]})," "]})]})});c.default=O},30873:function(p,c,e){e.r(c);var f=e(5072),u=e(50307),d=e(50959),h=e(11527),_=(0,d.memo)(function(){return(0,h.jsx)(f.Z.Preview,{title:"\u6587\u672C\u6846",children:(0,h.jsx)(u.K,{placeholder:"\u5728\u8FD9\u91CC\u8F93\u5165\u6587\u672C\u5185\u5BB9",type:"block"})})});c.default=_},86385:function(p,c,e){e.d(c,{Z:function(){return E}});var f=e(84875),u=e.n(f),d=e(50959),h=e(69624),_=e(64813),m=e(76734),v=e(70157);const x=t=>{const{componentCls:r,sizePaddingEdgeHorizontal:l,colorSplit:n,lineWidth:i}=t;return{[r]:Object.assign(Object.assign({},(0,_.Wf)(t)),{borderBlockStart:`${i}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${r}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${r}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${r}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${r}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${r}-with-text${r}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${r}-dashed`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${r}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${r}-with-text-left${r}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${r}-inner-text`]:{paddingInlineStart:l}},[`&-horizontal${r}-with-text-right${r}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${r}-inner-text`]:{paddingInlineEnd:l}}})}};var o=(0,m.Z)("Divider",t=>{const r=(0,v.TS)(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[x(r)]},{sizePaddingEdgeHorizontal:0}),O=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(l[n[i]]=t[n[i]]);return l},E=t=>{const{getPrefixCls:r,direction:l}=d.useContext(h.E_),{prefixCls:n,type:i="horizontal",orientation:g="center",orientationMargin:s,className:y,rootClassName:S,children:P,dashed:j,plain:z}=t,T=O(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),a=r("divider",n),[w,I]=o(a),W=g.length>0?`-${g}`:g,$=!!P,C=g==="left"&&s!=null,D=g==="right"&&s!=null,B=u()(a,I,`${a}-${i}`,{[`${a}-with-text`]:$,[`${a}-with-text${W}`]:$,[`${a}-dashed`]:!!j,[`${a}-plain`]:!!z,[`${a}-rtl`]:l==="rtl",[`${a}-no-default-orientation-margin-left`]:C,[`${a}-no-default-orientation-margin-right`]:D},y,S),b=d.useMemo(()=>typeof s=="number"?s:/^\d+$/.test(s)?Number(s):s,[s]),K=Object.assign(Object.assign({},C&&{marginLeft:b}),D&&{marginRight:b});return w(d.createElement("div",Object.assign({className:B},T,{role:"separator"}),P&&i!=="vertical"&&d.createElement("span",{className:`${a}-inner-text`,style:K},P)))}}}]);
