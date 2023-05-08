"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4121],{11199:(U,p,t)=>{t.r(p),t.d(p,{default:()=>be});var e=t(67294),s=t(73599),b=t(87751),h=t(16550),y=t(86896),L=t(14087),C=t(17034),v=t(185),E=t(53979),f=t(36989),d=t(75515),M=t(29728),x=t(49066),H=t(41580),te=t(38939),ne=t(49386),le=t(8060),j=t(79031),m=t(37909),G=t(41451),oe=t(63237),ae=t(15234),S=t(11047),O=t(45697),N=t(1565);const $=N.ZP.div`
  background: ${({theme:l})=>l.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:l})=>l?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:l})=>l.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:l})=>l.spaces[1]};
    top: ${({theme:l})=>l.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=N.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${$} {
    background: ${({theme:l})=>l.colors.success500};
  }

  &[aria-checked='true'] ${$}:before {
    transform: translateX(1rem);
  }
`,W=e.forwardRef(({label:l,onChange:r,onLabel:a,offLabel:c,selected:T,visibleLabels:D,...u},o)=>e.createElement(se,{ref:o,role:"switch","aria-checked":T,"aria-label":l,onClick:r,visibleLabels:D,type:"button",...u},e.createElement(S.k,null,e.createElement($,null,e.createElement("span",null,a),e.createElement("span",null,c)),D&&e.createElement(H.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:T?"success600":"danger600"},T?a:c))));W.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},W.propTypes={label:O.string.isRequired,offLabel:O.string,onChange:O.func.isRequired,onLabel:O.string,selected:O.bool.isRequired,visibleLabels:O.bool},W.displayName="Switch";var V=t(12028),re=t(89722),R=t(96315),F=t(20022),ie=t(4585),de=t(86031),ce=t(18172),Ee=t(36968),me=t.n(Ee);const he={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},ue=(l,r)=>(0,ce.ZP)(l,a=>{switch(r.type){case"GET_DATA_SUCCEEDED":{a.webhooks=r.data,a.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{a.loadingWebhooks=!l.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{me()(a,["webhooks",...r.keys],r.value);break}case"SET_WEBHOOK_TO_DELETE":{a.webhookToDelete=r.id;break}case"SET_WEBHOOKS_TO_DELETE":{r.value?a.webhooksToDelete.push(r.id):a.webhooksToDelete=l.webhooksToDelete.filter(c=>c!==r.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{l.webhooksToDelete.length===0?a.webhooksToDelete=l.webhooks.map(c=>c.id):a.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{a.webhooks=l.webhooks.filter(c=>!l.webhooksToDelete.includes(c.id)),a.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{a.webhooks=l.webhooks.filter((c,T)=>T!==r.index),a.webhookToDelete=null;break}default:return a}}),ge=()=>{const{isLoading:l,allowedActions:{canCreate:r,canRead:a,canUpdate:c,canDelete:T}}=(0,s.ss)(b.Z.settings.webhooks),D=(0,s.lm)(),u=(0,e.useRef)(!0),{formatMessage:o}=(0,y.Z)(),[fe,B]=(0,e.useState)(!1),[{webhooks:P,webhooksToDelete:Z,webhookToDelete:K,loadingWebhooks:I},g]=(0,e.useReducer)(ue,he),{notifyStatus:z}=(0,L.G)(),{get:Q,del:Te,post:De,put:ve}=(0,s.kY)();(0,s.go)();const{push:pe}=(0,h.k6)(),{pathname:X}=(0,h.TH)(),A=P.length,k=Z.length,Y=n=>P.findIndex(i=>i.id===n);(0,e.useEffect)(()=>(u.current=!0,()=>{u.current=!1}),[]),(0,e.useEffect)(()=>{a&&(async()=>{try{const{data:{data:i}}=await Q("/admin/webhooks");u.current&&(g({type:"GET_DATA_SUCCEEDED",data:i}),z("webhooks have been loaded"))}catch(i){console.log(i),u.current&&(i.code!==20&&D({type:"warning",message:{id:"notification.error"}}),g({type:"TOGGLE_LOADING"}))}})()},[a,Q,z,D]);const ye=()=>{B(n=>!n)},Le=()=>{K?Oe():Ce()},Oe=async()=>{try{await Te(`/admin/webhooks/${K}`),g({type:"WEBHOOK_DELETED",index:Y(K)})}catch(n){n.code!==20&&D({type:"warning",message:{id:"notification.error"}})}B(!1)},Ce=async()=>{const n={ids:Z};try{await De("/admin/webhooks/batch-delete",n),u.current&&g({type:"WEBHOOKS_DELETED"})}catch(i){u.current&&i.code!==20&&D({type:"warning",message:{id:"notification.error"}})}B(!1)},J=n=>{B(!0),n!=="all"&&g({type:"SET_WEBHOOK_TO_DELETE",id:n})},ke=async(n,i)=>{const q=Y(i),Be=P[q],_=[q,"isEnabled"],ee={...Be,isEnabled:n};delete ee.id;try{g({type:"SET_WEBHOOK_ENABLED",keys:_,value:n}),await ve(`/admin/webhooks/${i}`,ee)}catch(Pe){u.current&&(g({type:"SET_WEBHOOK_ENABLED",keys:_,value:!n}),Pe.code!==20&&D({type:"warning",message:{id:"notification.error"}}))}},Me=()=>{g({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},We=(n,i)=>{g({type:"SET_WEBHOOKS_TO_DELETE",value:n,id:i})},w=n=>{pe(`${X}/${n}`)};return e.createElement(C.A,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(v.o,{"aria-busy":l||I},e.createElement(E.T,{title:o({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:o({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:r&&!I&&e.createElement(s.Qj,{startIcon:e.createElement(R.Z,null),variant:"default",to:`${X}/create`,size:"S"},o({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),k>0&&T&&e.createElement(f.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(d.Z,{variant:"epsilon",textColor:"neutral600"},o({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:k})),e.createElement(M.z,{onClick:()=>J("all"),startIcon:e.createElement(F.Z,null),size:"L",variant:"danger-light"},o({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(x.D,null,l||I?e.createElement(H.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null)):A>0?e.createElement(te.i,{colCount:5,rowCount:A+1,footer:e.createElement(ne.c,{onClick:()=>r?w("create"):{},icon:e.createElement(R.Z,null)},o({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(le.h,null,e.createElement(j.Tr,null,e.createElement(m.Th,null,e.createElement(G.C,{"aria-label":o({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:k>0&&k<A,value:k===A,onValueChange:Me})),e.createElement(m.Th,{width:"20%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},o({id:"global.name",defaultMessage:"Name"}))),e.createElement(m.Th,{width:"60%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},o({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(m.Th,{width:"20%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},o({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(m.Th,null,e.createElement(oe.T,null,o({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,P.map(n=>e.createElement(j.Tr,{key:n.id,...(0,s.X7)({fn:()=>w(n.id),condition:c})},e.createElement(m.Td,{...s.UW},e.createElement(G.C,{"aria-label":`${o({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:Z?.includes(n.id),onValueChange:i=>We(i,n.id),id:"select",name:"select"})),e.createElement(m.Td,null,e.createElement(d.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(m.Td,null,e.createElement(d.Z,{textColor:"neutral800"},n.url)),e.createElement(m.Td,null,e.createElement(S.k,{...s.UW},e.createElement(W,{onLabel:o({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:o({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${o({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:()=>ke(!n.isEnabled,n.id),visibleLabels:!0}))),e.createElement(m.Td,null,e.createElement(S.k,{gap:1,...s.UW},c&&e.createElement(V.h,{onClick:()=>{w(n.id)},label:o({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(ie.Z,null),noBorder:!0}),T&&e.createElement(V.h,{onClick:()=>J(n.id),label:o({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(F.Z,null),noBorder:!0,id:`delete-${n.id}`}))))))):e.createElement(re.x,{icon:e.createElement(de.Z,{width:"160px"}),content:o({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(M.z,{variant:"secondary",startIcon:e.createElement(R.Z,null),onClick:()=>r?w("create"):{}},o({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.QH,{isOpen:fe,onToggleDialog:ye,onConfirm:Le}))},be=()=>e.createElement(s.O4,{permissions:b.Z.settings.webhooks.main},e.createElement(ge,null))},36989:(U,p,t)=>{t.d(p,{Z:()=>v});var e=t(67294),s=t(45697),b=t(1565),h=t(41580),y=t(11047);const L=(0,b.ZP)(y.k)`
  & > * + * {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }

  margin-left: ${({pullRight:E})=>E?"auto":void 0};
`,C=(0,b.ZP)(L)`
  flex-shrink: 0;
`,v=({startActions:E,endActions:f})=>E||f?e.createElement(h.x,{paddingLeft:10,paddingRight:10},e.createElement(h.x,{paddingBottom:4},e.createElement(y.k,{justifyContent:"space-between",alignItems:"flex-start"},E&&e.createElement(L,{wrap:"wrap"},E),f&&e.createElement(C,{pullRight:!0},f)))):null;v.defaultProps={endActions:void 0,startActions:void 0},v.propTypes={endActions:s.node,startActions:s.node}},49386:(U,p,t)=>{t.d(p,{c:()=>f});var e=t(67294),s=t(45697),b=t(1565),h=t(41580),y=t(70004),L=t(11047),C=t(75515);const v=(0,b.ZP)(h.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:d})=>d.colors.primary600};
  }
`,E=(0,b.ZP)(h.x)`
  border-radius: 0 0 ${({theme:d})=>d.borderRadius} ${({theme:d})=>d.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,f=({children:d,icon:M,...x})=>e.createElement("div",null,e.createElement(y.i,null),e.createElement(E,{as:"button",background:"primary100",padding:5,...x},e.createElement(L.k,null,e.createElement(v,{"aria-hidden":!0,background:"primary200"},M),e.createElement(h.x,{paddingLeft:3},e.createElement(C.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},d)))));f.propTypes={children:s.string.isRequired,icon:s.node.isRequired}}}]);
