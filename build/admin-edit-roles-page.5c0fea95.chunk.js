(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2544],{23341:(w,F,r)=>{"use strict";r.r(F),r.d(F,{CreatePage:()=>Ce,default:()=>Oe});var e=r(67294),C=r(66115),o=r(73599),x=r(185),k=r(53979),R=r(11047),E=r(29728),S=r(49066),P=r(41580),M=r(75515),A=r(11276),I=r(74571),y=r(16364),u=r(64256),N=r(67109),Q=r(41054),z=r(27361),he=r.n(z),T=r(41609),X=r.n(T),me=r(86896),h=r(16550),q=r(1565),Y=r(18280),ee=r(48474),ie=r(87751),le=r(87561);const ye=le.Ry().shape({name:le.Z_().required(o.I0.required),description:le.Z_().required(o.I0.required)}),ce=q.ZP.div`
  border: 1px solid ${({theme:G})=>G.colors.primary200};
  background: ${({theme:G})=>G.colors.primary100};
  padding: ${({theme:G})=>`${G.spaces[2]} ${G.spaces[4]}`};
  color: ${({theme:G})=>G.colors.primary600};
  border-radius: ${({theme:G})=>G.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Ce=()=>{const G=(0,o.lm)(),{lockApp:re,unlockApp:j}=(0,o.o1)(),{formatMessage:D}=(0,me.Z)(),[_,se]=(0,e.useState)(!1),{replace:de}=(0,h.k6)(),te=(0,e.useRef)(),{trackUsage:ue}=(0,o.rS)(),Ie=(0,h.$B)("/settings/roles/duplicate/:id"),Re=he()(Ie,"params.id",null),{isLoading:Ze,data:fe}=(0,ee.U_)(),{permissions:$e,isLoading:Me}=(0,ee.Dq)(Re),{post:Be,put:je}=(0,o.kY)(),Ve=ae=>{re(),se(!0),ue(Re?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(Be("/admin/roles",ae)).then(async({data:V})=>{const{permissionsToSend:K}=te.current.getPermissions();return ue(Re?"didDuplicateRole":"didCreateNewRole"),V.data.id&&!X()(K)&&await je(`/admin/roles/${V.data.id}/permissions`,{permissions:K}),V}).then(V=>{se(!1),G({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),de(`/settings/roles/${V.data.id}`)}).catch(V=>{console.error(V),se(!1),G({type:"warning",message:{id:"notification.error"}})}).finally(()=>{j()})},De=`${D({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,C.Z)(new Date,"PPP")}`;return e.createElement(x.o,null,e.createElement(o.SL,{name:"Roles"}),e.createElement(Q.J9,{initialValues:{name:"",description:De},onSubmit:Ve,validationSchema:ye,validateOnChange:!1},({handleSubmit:ae,values:V,errors:K,handleReset:Ee,handleChange:ve})=>e.createElement(o.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(k.T,{primaryAction:e.createElement(R.k,{gap:2},e.createElement(E.z,{variant:"secondary",onClick:()=>{Ee(),te.current.resetForm()},size:"L"},D({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(E.z,{onClick:ae,loading:_,size:"L"},D({id:"global.save",defaultMessage:"Save"}))),title:D({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:D({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(o.rU,{startIcon:e.createElement(N.Z,null),to:"/settings/roles"},D({id:"global.back",defaultMessage:"Back"}))}),e.createElement(S.D,null,e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(P.x,null,e.createElement(P.x,null,e.createElement(M.Z,{fontWeight:"bold"},D({id:"global.details",defaultMessage:"Details"}))),e.createElement(P.x,null,e.createElement(M.Z,{variant:"pi",textColor:"neutral600"},D({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ce,null,D({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(A.r,{gap:4},e.createElement(I.P,{col:6},e.createElement(y.o,{name:"name",error:K.name&&D({id:K.name}),label:D({id:"global.name",defaultMessage:"Name"}),onChange:ve,value:V.name})),e.createElement(I.P,{col:6},e.createElement(u.g,{label:D({id:"global.description",defaultMessage:"Description"}),name:"description",error:K.description&&D({id:K.description}),onChange:ve},V.description))))),!Ze&&!Me?e.createElement(P.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(Y.Z,{isFormDisabled:!1,ref:te,permissions:$e,layout:fe})):e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(o.dO,null))))))))};function Oe(){return e.createElement(o.O4,{permissions:ie.Z.settings.roles.create},e.createElement(Ce,null))}},18280:(w,F,r)=>{"use strict";r.d(F,{Z:()=>_n});var e=r(67294),C=r(45697),o=r.n(C),x=r(73599),k=r(82777),R=r(60633),E=r(42761),S=r(18721),P=r.n(S),M=r(41609),A=r.n(M),I=r(86896),y=r(41580),u=r(1565),N=r(89734),Q=r.n(N),z=r(52337),he=r(66942),T=r(11047),X=r(41451),me=r(27361),h=r.n(me),q=r(57557),Y=r.n(q),ee=r(48474),ie=r(78114),le=r(29728);const Se=u.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:a})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?a.colors.neutral100:a.colors.primary600};
    }
  `}
`,ye=({onClick:t,className:n,hasConditions:a,variant:s})=>{const{formatMessage:i}=(0,I.Z)();return e.createElement(Se,{hasConditions:a,className:n},e.createElement(le.z,{variant:s,startIcon:e.createElement(ie.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};ye.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},ye.propTypes={onClick:o().func.isRequired,className:o().string,hasConditions:o().bool,variant:o().string};const ce=(0,u.ZP)(ye)``;var Ce=r(42866),Oe=r(24969),G=r(2407),re=r(59946),j=r(75515),D=r(36856),_=r(18172),se=r(7739),de=r.n(se),te=r(11700),ue=r.n(te),Ie=r(17603);const Re=t=>Object.values(t).map(n=>Object.entries(n).filter(([,a])=>a).map(([a])=>a)).flat(),Ze=t=>t.reduce((n,[a,s])=>(n.push({label:ue()(a),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),fe=(t,n)=>t.map(([,a])=>a).flat().reduce((a,s)=>({[s.id]:n.includes(s.id),...a}),{}),$e=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:a,label:s,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,I.Z)(),p=m=>{l(i,fe(t,m))};return e.createElement(T.k,{as:"li",background:a?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(T.k,{paddingLeft:6,style:{width:180}},e.createElement(j.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(j.Z,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement(j.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(y.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Ie.Q,{id:i,customizeContent:m=>`${m.length} currently selected`,onChange:p,value:Re(c),options:Ze(t),disabled:n})))};$e.propTypes={arrayOfOptionsGroupedByCategory:o().array.isRequired,isFormDisabled:o().bool.isRequired,isGrey:o().bool.isRequired,label:o().string.isRequired,name:o().string.isRequired,value:o().object.isRequired,onChange:o().func.isRequired};const Me=$e,Be=(t,n)=>t.reduce((a,s)=>(a[s.id]=h()(n,s.id,!1),a),{}),je=(t,n)=>t.reduce((a,s)=>{const[i,l]=s,c=Be(l,n);return a[i]=c,a},{}),De=(t,n,a)=>t.reduce((s,i)=>{const l=h()(n,[...i.pathToConditionsObject,"conditions"],{}),c=je(a,l);return s[i.pathToConditionsObject.join("..")]=c,s},{}),ae=({actions:t,headerBreadCrumbs:n,isFormDisabled:a,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,I.Z)(),{availableConditions:c,modifiedData:d,onChangeConditions:p}=(0,ee.$_)(),m=(0,e.useMemo)(()=>Object.entries(de()(c,"category")),[c]),g=t.filter(({isDisplayed:f,hasSomeActionsSelected:Z,hasAllActionsSelected:L})=>f&&(Z||L)),v=(0,e.useMemo)(()=>De(g,d,m),[g,d,m]),[O,W]=(0,e.useState)(v),$=(f,Z)=>{W((0,_.ZP)(L=>{L[f]||(L[f]={}),L[f].default||(L[f].default={}),L[f].default=Z}))},b=()=>{const f=Object.entries(O).reduce((Z,L)=>{const[B,ne]=L,U=Object.values(ne).reduce((J,H)=>({...J,...H}),{});return Z[B]=U,Z},{});p(f),i()};return e.createElement(Ce.P,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Oe.x,null,e.createElement(G.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map(f=>e.createElement(G.$,{key:f},ue()(l({id:f,defaultMessage:f})))))),e.createElement(re.f,null,g.length===0&&e.createElement(j.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,g.map(({actionId:f,label:Z,pathToConditionsObject:L},B)=>{const ne=L.join("..");return e.createElement(Me,{key:f,arrayOfOptionsGroupedByCategory:m,label:Z,isFormDisabled:a,isGrey:B%2===0,name:ne,onChange:$,value:h()(O,ne,{})})}))),e.createElement(D.m,{startActions:e.createElement(le.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(le.z,{onClick:b},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};ae.propTypes={actions:o().arrayOf(o().shape({actionId:o().string.isRequired,checkboxName:o().string,hasSomeActionsSelected:o().bool.isRequired,hasAllActionsSelected:o().bool,isDisplayed:o().bool.isRequired,label:o().string})).isRequired,headerBreadCrumbs:o().arrayOf(o().string).isRequired,isFormDisabled:o().bool.isRequired,onClosed:o().func.isRequired,onToggle:o().func.isRequired};const V=ae,K=`${120/16}rem`,Ee=`${200/16}rem`,ve=`${53/16}rem`,Ge=u.ZP.div`
  width: ${K};
`,st=(0,u.ZP)(T.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ke=({children:t,isCollapsable:n,isActive:a,isFormDisabled:s,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:p,value:m})=>{const{formatMessage:g}=(0,I.Z)();return e.createElement(T.k,{alignItems:"center",paddingLeft:6,style:{width:Ee,flexShrink:0}},e.createElement(y.x,{paddingRight:2},e.createElement(X.C,{name:d,"aria-label":g({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:v=>l({target:{name:d,value:v}}),indeterminate:p,value:m})),e.createElement(st,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":a,onKeyDown:({key:v})=>(v==="Enter"||v===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(j.Z,{fontWeight:a?"bold":"",textColor:a?"primary600":"neutral800",ellipsis:!0},ue()(i)),t))};Ke.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ke.propTypes={checkboxName:o().string,children:o().node,label:o().string.isRequired,isCollapsable:o().bool,isFormDisabled:o().bool.isRequired,onChange:o().func,onClick:o().func.isRequired,someChecked:o().bool,value:o().bool,isActive:o().bool.isRequired};const ot=(0,e.memo)(Ke);var Bt=r(42348),Ft=r.n(Bt),Nt=r(13218),xe=r.n(Nt);const rt=t=>xe()(t)?Ft()(Object.values(t).map(n=>xe()(n)?rt(n):n)):[],Le=rt,Ue=t=>t?Object.keys(t).reduce((n,a)=>(a!=="conditions"&&(n[a]=t[a]),n),{}):null,Pe=t=>{const n=Ue(t),a=Le(n);if(!a.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=a.every(l=>l),i=a.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}},Wt=(t,n,a)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...a.split(".."),s],p=A()(l)?[...d,"properties","enabled"]:d,m=p.join(".."),g=h()(n,[...d,"conditions"],null),v=Le(g).some(b=>b);if(A()(l)){const b=h()(n,p,!1);return{actionId:s,checkboxName:m,hasAllActionsSelected:b,hasConditions:v,hasSomeActionsSelected:b,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const O=h()(n,p,null),{hasAllActionsSelected:W,hasSomeActionsSelected:$}=Pe(O);return{actionId:s,checkboxName:m,hasAllActionsSelected:W,hasConditions:v,hasSomeActionsSelected:$,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}});var Vt=r(12645);const Fe=(0,u.ZP)(Vt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ne=t=>`
  ${j.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Fe} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,ze=(t,n)=>`
  ${at} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${lt} {
    display: flex;
  }
  ${ce} {
    display: block;
  }
  &:hover {
   ${Ne(t)}
  }

  &:focus-within {
    ${({theme:a,isActive:s})=>ze(a,s)}
  }
  
`,at=u.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${ve};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Ht=u.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${ce} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&ze(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>ze(t,n)}
  }
`,it=(0,u.ZP)(T.k)`
  width: ${K};
  position: relative;
`,lt=(0,u.ZP)(y.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ct=u.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Gt=(0,u.ZP)(y.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,dt=({availableActions:t,isActive:n,isGrey:a,isFormDisabled:s,label:i,onClickToggle:l,pathToData:c})=>{const[d,p]=(0,e.useState)(!1),{formatMessage:m}=(0,I.Z)(),{modifiedData:g,onChangeParentCheckbox:v,onChangeSimpleCheckbox:O}=(0,ee.$_)(),W=()=>{p(U=>!U)},$=()=>{p(!1)},b=h()(g,c.split(".."),{}),f=(0,e.useMemo)(()=>Object.keys(b).reduce((U,J)=>(U[J]=Y()(b[J],"conditions"),U),{}),[b]),{hasAllActionsSelected:Z,hasSomeActionsSelected:L}=Pe(f),B=(0,e.useMemo)(()=>Wt(t,g,c),[t,g,c]),ne=B.some(({hasConditions:U})=>U);return e.createElement(Ht,{isActive:n},e.createElement(at,{isGrey:a},e.createElement(ot,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:c,onChange:v,onClick:l,someChecked:L,value:Z,isActive:n},e.createElement(lt,{paddingLeft:2},n?e.createElement(z.Z,null):e.createElement(he.Z,null))),e.createElement(T.k,{style:{flex:1}},B.map(({actionId:U,hasConditions:J,hasAllActionsSelected:H,hasSomeActionsSelected:ge,isDisplayed:ke,isParentCheckbox:oe,checkboxName:be,label:We})=>ke?oe?e.createElement(it,{key:U,justifyContent:"center",alignItems:"center"},J&&e.createElement(ct,null),e.createElement(X.C,{disabled:s,name:be,"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${We} ${i}`}),onValueChange:Ae=>{v({target:{name:be,value:Ae}})},indeterminate:ge,value:H})):e.createElement(it,{key:U,justifyContent:"center",alignItems:"center"},J&&e.createElement(ct,null),e.createElement(X.C,{disabled:s,indeterminate:J,name:be,onValueChange:Ae=>{O({target:{name:be,value:Ae}})},value:H})):e.createElement(Ge,{key:U}))),d&&e.createElement(V,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:B,isFormDisabled:s,onClosed:$,onToggle:W})),e.createElement(Gt,null,e.createElement(ce,{onClick:W,hasConditions:ne})))};dt.propTypes={availableActions:o().array.isRequired,isActive:o().bool.isRequired,isGrey:o().bool.isRequired,isFormDisabled:o().bool.isRequired,label:o().string.isRequired,onClickToggle:o().func.isRequired,pathToData:o().string.isRequired};const Kt=dt,Ut=(t,n)=>t.map(a=>{const s=Array.isArray(a.applyToProperties)&&a.applyToProperties.indexOf(n)!==-1&&a.isDisplayed;return{label:a.label,actionId:a.actionId,isActionRelatedToCurrentProperty:s}}),ut=(0,u.ZP)(T.k)`
  width: ${K};
  flex-shrink: 0;
`,zt=(0,u.ZP)(T.k)`
  width: ${Ee};
  height: ${ve};
  flex-shrink: 0;
`,mt=({headers:t,label:n})=>{const{formatMessage:a}=(0,I.Z)(),s=a({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(T.k,null,e.createElement(zt,{alignItems:"center",paddingLeft:6},e.createElement(j.Z,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ut,{justifyContent:"center",key:i.label},e.createElement(j.Z,{variant:"sigma",textColor:"neutral500"},a({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ut,{key:i.label})))};mt.propTypes={headers:o().arrayOf(o().shape({label:o().string.isRequired,isActionRelatedToCurrentProperty:o().bool.isRequired})).isRequired,label:o().string.isRequired};const Xt=mt,Yt=u.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,pt=()=>e.createElement(Yt,null,"*"),wt=(t,n)=>t.map(a=>{const s=Array.isArray(a.subjects)&&a.subjects.indexOf(n)!==-1;return{...a,isDisplayed:s}}),Jt=(0,u.ZP)(y.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Qt=u.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Xe=t=>e.createElement(Jt,null,e.createElement(Qt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Xe.defaultProps={fill:"primary200"},Xe.propTypes={fill:o().string};const qt=(0,e.memo)(Xe),gt=(0,u.ZP)(T.k)`
  width: ${K};
  position: relative;
`,_t=(0,u.ZP)(T.k)`
  height: ${ve};
`,en=(0,u.ZP)(y.x)`
  padding-left: ${31/16}rem;
`,tn=(0,u.ZP)(y.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,nn=(0,u.ZP)(T.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Fe} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ne(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ne(n)};
`,sn=u.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Ye=({childrenForm:t,isFormDisabled:n,recursiveLevel:a,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,I.Z)(),{modifiedData:p,onChangeParentCheckbox:m,onChangeSimpleCheckbox:g}=(0,ee.$_)(),[v,O]=(0,e.useState)(null),W=b=>{O(f=>f===b?null:b)},$=(0,e.useMemo)(()=>v?t.find(({value:b})=>b===v):null,[v,t]);return e.createElement(en,null,e.createElement(sn,null),t.map(({label:b,value:f,required:Z,children:L},B)=>{const ne=B+1<t.length,U=Array.isArray(L),J=v===f;return e.createElement(tn,{key:f,isVisible:ne},e.createElement(_t,null,e.createElement(qt,{color:"primary200"}),e.createElement(T.k,{style:{flex:1}},e.createElement(nn,{level:a,isActive:J,isCollapsable:U},e.createElement(st,{alignItems:"center",isCollapsable:U,...U&&{onClick:()=>W(f),"aria-expanded":J,onKeyDown:({key:H})=>(H==="Enter"||H===" ")&&W(f),tabIndex:0,role:"button"},title:b},e.createElement(j.Z,{ellipsis:!0},ue()(b)),Z&&e.createElement(pt,null),e.createElement(Fe,{$isActive:J}))),e.createElement(T.k,{style:{flex:1}},i.map(({actionId:H,label:ge,isActionRelatedToCurrentProperty:ke})=>{if(!ke)return e.createElement(Ge,{key:H});const oe=[...s.split(".."),H,"properties",c,...l.split(".."),f],be=h()(p,oe,!1);if(!L)return e.createElement(gt,{key:ge,justifyContent:"center",alignItems:"center"},e.createElement(X.C,{disabled:n,name:oe.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${b} ${ge}`}),onValueChange:Te=>{g({target:{name:oe.join(".."),value:Te}})},value:be}));const{hasAllActionsSelected:We,hasSomeActionsSelected:Ae}=Pe(be);return e.createElement(gt,{key:ge,justifyContent:"center",alignItems:"center"},e.createElement(X.C,{key:ge,disabled:n,name:oe.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${b} ${ge}`}),onValueChange:Te=>{m({target:{name:oe.join(".."),value:Te}})},value:We,indeterminate:Ae}))})))),$&&J&&e.createElement(y.x,{paddingBottom:2},e.createElement(Ye,{isFormDisabled:n,parentName:`${l}..${f}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:c,recursiveLevel:a+1,childrenForm:$.children})))}))};Ye.propTypes={childrenForm:o().array.isRequired,isFormDisabled:o().bool.isRequired,parentName:o().string.isRequired,pathToDataFromActionRow:o().string.isRequired,propertyActions:o().array.isRequired,propertyName:o().string.isRequired,recursiveLevel:o().number.isRequired};const on=(0,e.memo)(Ye),rn=t=>t.reduce((a,s)=>(s.isActionRelatedToCurrentProperty&&a.push(s.actionId),a),[]),an=(t,n,a,s,i)=>{const c=rn(t).reduce((d,p)=>{const m=[...a.split(".."),p,"properties",s,i],g=h()(n,m,!1);return d[p]=g,d},{});return Pe(c)},ht=(0,u.ZP)(T.k)`
  width: ${K};
  position: relative;
`,ln=(0,u.ZP)(T.k)`
  height: ${ve};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Fe} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ne(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ne(n)};
`,we=({childrenForm:t,label:n,isFormDisabled:a,name:s,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:p})=>{const{formatMessage:m}=(0,I.Z)(),[g,v]=(0,e.useState)(null),{modifiedData:O,onChangeCollectionTypeLeftActionRowCheckbox:W,onChangeParentCheckbox:$,onChangeSimpleCheckbox:b}=(0,ee.$_)(),f=g===s,Z=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),L=Z.length>0,B=(0,e.useCallback)(()=>{L&&v(H=>H===s?null:s)},[L,s]),ne=({target:{value:H}})=>{W(l,d,s,H)},{hasAllActionsSelected:U,hasSomeActionsSelected:J}=(0,e.useMemo)(()=>an(c,O,l,d,s),[c,O,l,d,s]);return e.createElement(e.Fragment,null,e.createElement(ln,{alignItems:"center",isCollapsable:L,isActive:f,background:p?"neutral100":"neutral0"},e.createElement(T.k,null,e.createElement(ot,{onChange:ne,onClick:B,isCollapsable:L,isFormDisabled:a,label:n,someChecked:J,value:U,isActive:f},i&&e.createElement(pt,null),e.createElement(Fe,{$isActive:f})),e.createElement(T.k,null,c.map(({label:H,isActionRelatedToCurrentProperty:ge,actionId:ke})=>{if(!ge)return e.createElement(Ge,{key:H});const oe=[...l.split(".."),ke,"properties",d,s];if(!L){const Te=h()(O,oe,!1);return e.createElement(ht,{key:ke,justifyContent:"center",alignItems:"center"},e.createElement(X.C,{disabled:a,name:oe.join(".."),"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),onValueChange:es=>{b({target:{name:oe.join(".."),value:es}})},value:Te}))}const be=h()(O,oe,{}),{hasAllActionsSelected:We,hasSomeActionsSelected:Ae}=Pe(be);return e.createElement(ht,{key:H,justifyContent:"center",alignItems:"center"},e.createElement(X.C,{disabled:a,name:oe.join(".."),onValueChange:Te=>{$({target:{name:oe.join(".."),value:Te}})},"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),value:We,indeterminate:Ae}))})))),f&&e.createElement(on,{childrenForm:Z,isFormDisabled:a,parentName:s,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};we.defaultProps={childrenForm:[],required:!1},we.propTypes={childrenForm:o().array,label:o().string.isRequired,isFormDisabled:o().bool.isRequired,name:o().string.isRequired,pathToData:o().string.isRequired,propertyActions:o().array.isRequired,propertyName:o().string.isRequired,required:o().bool,isOdd:o().bool.isRequired};const cn=(0,e.memo)(we),dn=u.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,ft=({availableActions:t,childrenForm:n,isFormDisabled:a,label:s,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>Ut(t,l),[t,l]);return e.createElement(dn,null,e.createElement(Xt,{label:s,headers:c}),e.createElement(y.x,null,n.map(({children:d,label:p,value:m,required:g},v)=>e.createElement(cn,{childrenForm:d,key:m,label:p,isFormDisabled:a,name:m,required:g,propertyActions:c,pathToData:i,propertyName:l,isOdd:v%2===0}))))};ft.propTypes={childrenForm:o().array.isRequired,availableActions:o().array.isRequired,isFormDisabled:o().bool.isRequired,label:o().string.isRequired,pathToData:o().string.isRequired,propertyName:o().string.isRequired};const un=ft,mn=u.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,yt=({allActions:t,contentTypeName:n,label:a,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:p})=>{const m=(0,e.useCallback)(()=>{c(n)},[n,c]),g=(0,e.useMemo)(()=>wt(t,n),[t,n]);return e.createElement(mn,{isActive:i},e.createElement(Kt,{availableActions:g,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:a,onClickToggle:m,pathToData:d}),i&&p.map(({label:v,value:O,children:W})=>e.createElement(un,{availableActions:g,childrenForm:W,isFormDisabled:l,label:v,pathToData:d,propertyName:O,key:O})))};yt.propTypes={allActions:o().array.isRequired,contentTypeName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool.isRequired,isFormDisabled:o().bool.isRequired,label:o().string.isRequired,onClickToggleCollapse:o().func.isRequired,pathToData:o().string.isRequired,properties:o().array.isRequired};const pn=yt,Je=({actions:t,isFormDisabled:n,pathToData:a,subjects:s})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return s.map(({uid:d,label:p,properties:m},g)=>e.createElement(pn,{allActions:t,key:d,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:n,index:g,onClickToggleCollapse:c,pathToData:`${a}..${d}`,properties:m}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:o().array.isRequired,isFormDisabled:o().bool.isRequired,pathToData:o().string.isRequired,subjects:o().arrayOf(o().shape({uid:o().string.isRequired,label:o().string.isRequired,properties:o().array.isRequired}))};const gn=(0,e.memo)(Je),hn=t=>t.filter(({subjects:n})=>n&&n.length),fn=t=>t.map(({actionId:n})=>n),yn=(t,n)=>t.reduce((a,s)=>(Object.keys(n).forEach(i=>{const l=h()(n,[i,s],{}),c={[i]:Ue(l)};a[s]?a[s]={...a[s],...c}:a[s]=c}),a),{}),Cn=(t,n)=>{const a=fn(t),s=yn(a,n);return Object.keys(s).reduce((l,c)=>(l[c]=Pe(s[c]),l),{})},En=(0,u.ZP)(T.k)`
  width: ${K};
  flex-shrink: 0;
`,Qe=({actions:t,isFormDisabled:n,kind:a})=>{const{formatMessage:s}=(0,I.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,ee.$_)(),c=(0,e.useMemo)(()=>hn(t),[t]),d=(0,e.useMemo)(()=>Cn(c,i[a]),[i,c,a]);return e.createElement(y.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Ee}},e.createElement(T.k,{gap:0},c.map(({label:p,actionId:m})=>e.createElement(En,{direction:"column",alignItems:"center",justifyContent:"center",key:m,gap:3},e.createElement(j.Z,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(X.C,{disabled:n,onValueChange:g=>{l(a,m,g)},name:m,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:h()(d,[m,"hasAllActionsSelected"],!1),indeterminate:h()(d,[m,"hasSomeActionsSelected"],!1)})))))};Qe.defaultProps={actions:[]},Qe.propTypes={actions:o().arrayOf(o().shape({label:o().string.isRequired,actionId:o().string.isRequired,subjects:o().array.isRequired})),isFormDisabled:o().bool.isRequired,kind:o().string.isRequired};const vn=(0,e.memo)(Qe),bn=(0,u.ZP)(y.x)`
  overflow-x: auto;
`,Ct=({isFormDisabled:t,kind:n,layout:{actions:a,subjects:s}})=>{const i=Q()([...s],"label");return e.createElement(bn,{background:"neutral0"},e.createElement(vn,{actions:a,kind:n,isFormDisabled:t}),e.createElement(gn,{actions:a,isFormDisabled:t,pathToData:n,subjects:i}))};Ct.propTypes={isFormDisabled:o().bool.isRequired,kind:o().string.isRequired,layout:o().shape({actions:o().array,subjects:o().arrayOf(o().shape({uid:o().string.isRequired,label:o().string.isRequired,properties:o().array.isRequired}))}).isRequired};const Et=(0,e.memo)(Ct);var xn=r(47713);const vt=({children:t,value:n})=>e.createElement(xn.$l.Provider,{value:n},t);vt.propTypes={children:o().node.isRequired,value:o().exact({availableConditions:o().array.isRequired,modifiedData:o().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:o().func.isRequired,onChangeConditions:o().func.isRequired,onChangeSimpleCheckbox:o().func.isRequired,onChangeParentCheckbox:o().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:o().func.isRequired}).isRequired};const Rn=vt;var Pn=r(48734),An=r(74756),Tn=r(63081),bt=r(36213),Sn=r(11276),On=r(74571);const $n=(t,n,a)=>t.map(s=>{const i=[...a,s.action,"properties","enabled"],l=h()(n,i,!1),c=h()(n,[...a,s.action,"conditions"],{}),d=Le(c).some(p=>p);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:s.displayName,actionId:s.action,pathToConditionsObject:[...a,s.action]}}),Mn=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:c}]=i;return s[l]=c,s},{});return Le(n).some(s=>s)},jn=u.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,Dn=u.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:a})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?a.colors.neutral100:a.colors.primary600};
    }
  `}
`,xt=({categoryName:t,isFormDisabled:n,subCategoryName:a,actions:s,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:m}=(0,ee.$_)(),{formatMessage:g}=(0,I.Z)(),v=h()(d,i,{}),O=(0,e.useMemo)(()=>Object.keys(v).reduce((B,ne)=>(B[ne]=Ue(v[ne]),B),{}),[v]),{hasAllActionsSelected:W,hasSomeActionsSelected:$}=Pe(O),b=()=>{c(B=>!B)},f=()=>{c(!1)},Z=$n(s,d,i),L=Mn(h()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(y.x,null,e.createElement(T.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(y.x,{paddingRight:4},e.createElement(j.Z,{variant:"sigma",textColor:"neutral600"},a)),e.createElement(jn,null),e.createElement(y.x,{paddingLeft:4},e.createElement(bt.X,{name:i.join(".."),disabled:n,onValueChange:B=>{p({target:{name:i.join(".."),value:B}})},indeterminate:$,value:W},g({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(T.k,{paddingTop:6,paddingBottom:6},e.createElement(Sn.r,{gap:2,style:{flex:1}},Z.map(({checkboxName:B,value:ne,action:U,displayName:J,hasConditions:H})=>e.createElement(On.P,{col:3,key:U},e.createElement(Dn,{disabled:n,hasConditions:H},e.createElement(bt.X,{name:B,disabled:n,onValueChange:ge=>{m({target:{name:B,value:ge}})},value:ne},J))))),e.createElement(ce,{hasConditions:L,onClick:b}))),l&&e.createElement(V,{headerBreadCrumbs:[t,a],actions:Z,isFormDisabled:n,onClosed:f,onToggle:b}))};xt.propTypes={actions:o().array.isRequired,categoryName:o().string.isRequired,isFormDisabled:o().bool.isRequired,subCategoryName:o().string.isRequired,pathToData:o().array.isRequired};const Ln=xt,qe=({childrenForm:t,kind:n,name:a,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:p}=(0,I.Z)(),m=()=>{c(a)},g=(0,e.useMemo)(()=>a.split("::").pop(),[a]);return e.createElement(Pn.U,{expanded:s,onToggle:m,id:`accordion-${a}`,variant:l?"primary":"secondary"},e.createElement(An.B,{title:ue()(g),description:`${p({id:"Settings.permissions.category"},{category:g})} ${n==="plugins"?"plugin":n}`}),e.createElement(Tn.v,null,e.createElement(y.x,{padding:6},t.map(({actions:v,subCategoryName:O,subCategoryId:W})=>e.createElement(Ln,{key:O,actions:v,categoryName:g,isFormDisabled:i,subCategoryName:O,pathToData:[...d,W]})))))};qe.defaultProps={},qe.propTypes={childrenForm:o().array.isRequired,isOpen:o().bool.isRequired,isFormDisabled:o().bool.isRequired,isWhite:o().bool.isRequired,kind:o().string.isRequired,name:o().string.isRequired,onOpenCategory:o().func.isRequired,pathToData:o().array.isRequired};const kn=qe,Rt=({isFormDisabled:t,kind:n,layout:a})=>{const[s,i]=(0,e.useState)(null),l=c=>{i(c===s?null:c)};return e.createElement(y.x,{padding:6,background:"neutral0"},a.map(({category:c,categoryId:d,childrenForm:p},m)=>e.createElement(kn,{key:c,childrenForm:p,kind:n,isFormDisabled:t,isOpen:s===c,isWhite:m%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};Rt.propTypes={isFormDisabled:o().bool.isRequired,kind:o().string.isRequired,layout:o().arrayOf(o().shape({category:o().string.isRequired,categoryId:o().string.isRequired,childrenForm:o().arrayOf(o().shape({actions:o().array.isRequired})).isRequired}).isRequired).isRequired};const Pt=Rt;var In=r(82492),Zn=r.n(In),Bn=r(36968),pe=r.n(Bn);const At=(t,n,a)=>t.find(s=>s.action===n&&s.subject===a),Tt=(t,n=[])=>t.reduce((a,s)=>(a[s.id]=n.indexOf(s.id)!==-1,a),{}),St=({children:t},n,a="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:St(i,n,`${a}${i.value}.`)};const l=n.indexOf(`${a}${i.value}`)!==-1;return s[i.value]=l,s},{}),Fn=(t,n,a)=>t.reduce((s,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=h()(a,["properties",l.value],[]),d=St(l,c);s.properties[i]=d}return s},{properties:{}}),Nn=(t,n)=>n.reduce((a,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(a[s]=i),a},{}),Ot=({subjects:t},n,a,s=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Nn(t,c);if(A()(d))return i;const p=Object.keys(d).reduce((m,g)=>{const{actionId:v,applyToProperties:O}=l,b=d[g].properties.map(({value:B})=>B).every(B=>(O||[]).indexOf(B)===-1),f=At(s,v,g),Z=Tt(a,h()(f,"conditions",[]));if(A()(O)||b)return pe()(m,[g,v],{properties:{enabled:f!==void 0},conditions:Z}),m;const L=Fn(O,d[g],f);return pe()(m,[g,v],{...L,conditions:Z}),m},{});return Zn()(i,p)},{}),Wn=(t,n,a)=>t.reduce((s,i)=>{const l=At(a,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:Tt(n,l?.conditions??[])},s},{}),Vn=(t,n,a)=>t.reduce((s,i)=>(s[i.subCategoryId]=Wn(i.actions,n,a),s),{}),$t=(t,n,a=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const c=Vn(l,n,a);return s[i]=c,s},{}),Mt=t=>t.split(" ").join("-"),jt=(t,n)=>Object.entries(de()(t,n)).map(([a,s])=>({category:a,categoryId:Mt(a),childrenForm:Object.entries(de()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Mt(i),actions:l}))})),Hn=(t,n)=>{const{conditions:a,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:s,singleTypes:i,plugins:jt(l,"plugin"),settings:jt(c,"category")},p={collectionTypes:Ot(s,s.actions||[],a,n),singleTypes:Ot(i,i.actions||[],a,n),plugins:$t(d.plugins,a,n),settings:$t(d.settings,a,n)};return{initialData:p,modifiedData:p,layouts:d}};var Gn=r(50361),_e=r.n(Gn);const Dt=t=>Object.keys(t).reduce((n,a)=>{const s=t[a];if(xe()(s)&&!P()(s,"conditions"))return{...n,[a]:Dt(s)};if(xe()(s)&&P()(s,"conditions")&&!Le(Y()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[a]:{...s,conditions:l}}}return n[a]=s,n},{}),et=Dt,Lt=(t,n,a=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!a?(s[i]=l,s):xe()(l)?{...s,[i]:Lt(l,n,i==="fields")}:(s[i]=n,s)},{}),He=Lt,Kn={initialData:{},modifiedData:{},layouts:{}},Un=(t,n)=>(0,_.ZP)(t,a=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,c=["modifiedData",s];Object.keys(h()(t,c)).forEach(d=>{const p=h()(t,[...c,d,i],void 0);if(p){let m=He(p,l);if(!l&&m.conditions){const g=He(m.conditions,!1);m={...m,conditions:g}}pe()(a,[...c,d,i],m)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:c}=n;let d=_e()(t.modifiedData);const p=s.split(".."),m=h()(d,p,{});Object.keys(m).forEach(g=>{if(P()(m[g],`properties.${i}`)){const v=h()(m,[g,"properties",i,l]),O=[...p,g,"properties",i,l];if(!xe()(v))pe()(d,O,c);else{const W=He(v,c);pe()(d,O,W)}}}),c||(d=et(d)),pe()(a,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;pe()(a,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=_e()(t.modifiedData);pe()(s,[...n.keys.split("..")],n.value),n.value||(s=et(s)),pe()(a,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let c=_e()(t.modifiedData);const d=h()(c,l,{}),p=He(d,i);pe()(c,l,p),i||(c=et(c)),pe()(a,["modifiedData"],c);break}case"RESET_FORM":{a.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{a.initialData=t.modifiedData;break}default:return a}}),tt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),zn=t=>{const[n,{conditions:a}]=t;return{action:n,subject:null,conditions:tt(a),properties:{}}},Xn=t=>Object.values(t).reduce((n,a)=>{const s=Object.entries(a).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=zn(l);return i.push(d),i},[]);return[...n,...s]},[]),kt=t=>Object.values(t).reduce((n,a)=>{const s=Xn(a);return[...n,...s]},[]),It=(t,n="")=>Object.entries(t).reduce((a,s)=>{const[i,l]=s;return xe()(l)?[...a,...It(l,`${n}${i}.`)]:(l&&!xe()(l)&&a.push(`${n}${i}`),a)},[]),Yn=(t,n,{conditions:a,properties:s})=>Object.entries(s).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=It(d),i},{action:t,subject:n,conditions:tt(a),properties:{}}),wn=(t,n,{conditions:a})=>({action:t,subject:n,properties:{},conditions:tt(a)}),Jn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,c]=i;if(!Le(c).some(m=>m))return s;if(!c?.properties?.enabled){const m=Yn(l,t,c);return[...s,m]}if(!c.properties.enabled)return s;const p=wn(l,t,c);return s.push(p),s},[]),Zt=t=>Object.entries(t).reduce((a,s)=>{const[i,l]=s,c=Jn(i,l);return[...a,...c]},[]),Qn=t=>{const n=kt(t.plugins),a=kt(t.settings),s=Zt(t.collectionTypes),i=Zt(t.singleTypes);return[...n,...a,...s,...i]},qn=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],nt=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:a},s)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(Un,Kn,()=>Hn(t,a)),{formatMessage:p}=(0,I.Z)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const $=(0,x.e5)(i.collectionTypes,c.collectionTypes),b=(0,x.e5)(i.singleTypes,c.singleTypes),f={...$,...b};let Z;return A()(f)?Z=!1:Z=Object.values(f).some(L=>Object.values(L).some(B=>P()(B,"conditions"))),{permissionsToSend:Qn(c),didUpdateConditions:Z}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const m=($,b,f,Z)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:$,propertyName:b,rowName:f,value:Z})},g=($,b,f)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:$,actionId:b,value:f})},v=$=>{d({type:"ON_CHANGE_CONDITIONS",conditions:$})},O=(0,e.useCallback)(({target:{name:$,value:b}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:$,value:b})},[]),W=(0,e.useCallback)(({target:{name:$,value:b}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:$,value:b})},[]);return e.createElement(Rn,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:v,onChangeSimpleCheckbox:O,onChangeParentCheckbox:W,onChangeCollectionTypeLeftActionRowCheckbox:m,onChangeCollectionTypeGlobalActionCheckbox:g}},e.createElement(k.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(R.m,null,qn.map($=>e.createElement(R.O,{key:$.id},p({id:$.labelId,defaultMessage:$.defaultMessage})))),e.createElement(E.n,{style:{position:"relative"}},e.createElement(E.x,null,e.createElement(Et,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(E.x,null,e.createElement(Et,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(E.x,null,e.createElement(Pt,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(E.x,null,e.createElement(Pt,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});nt.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},nt.propTypes={layout:o().object,isFormDisabled:o().bool.isRequired,permissions:o().array};const _n=(0,e.memo)(nt)},92100:(w,F,r)=>{"use strict";r.r(F),r.d(F,{default:()=>G});var e=r(67294),C=r(73599),o=r(16550),x=r(87751),k=r(185),R=r(53979),E=r(11047),S=r(29728),P=r(49066),M=r(41580),A=r(41054),I=r(67109),y=r(27361),u=r.n(y),N=r(86896),Q=r(18280),z=r(75515),he=r(11276),T=r(74571),X=r(16364),me=r(64256),h=r(45697),q=r.n(h);const Y=({disabled:re,role:j,values:D,errors:_,onChange:se,onBlur:de})=>{const{formatMessage:te}=(0,N.Z)();return e.createElement(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.k,{justifyContent:"space-between"},e.createElement(M.x,null,e.createElement(M.x,null,e.createElement(z.Z,{fontWeight:"bold"},j?j.name:te({id:"global.details",defaultMessage:"Details"}))),e.createElement(M.x,null,e.createElement(z.Z,{textColor:"neutral500",variant:"pi"},j?j.description:te({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(S.z,{disabled:!0,variant:"secondary"},te({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:j.usersCount}))),e.createElement(he.r,{gap:4},e.createElement(T.P,{col:6},e.createElement(X.o,{disabled:re,name:"name",error:_.name&&te({id:_.name}),label:te({id:"global.name",defaultMessage:"Name"}),onChange:se,onBlur:de,value:D.name||""})),e.createElement(T.P,{col:6},e.createElement(me.g,{disabled:re,label:te({id:"global.description",defaultMessage:"Description"}),name:"description",error:_.name&&te({id:_.name}),onChange:se,onBlur:de},D.description||"")))))};Y.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},Y.propTypes={disabled:q().bool,errors:q().object.isRequired,onBlur:q().func.isRequired,onChange:q().func.isRequired,role:q().object,values:q().object};const ee=Y;var ie=r(48474),le=r(87561);const ye=le.Ry().shape({name:le.Z_().required(C.I0.required)}),Ce=()=>{const re=(0,C.lm)(),{formatMessage:j}=(0,N.Z)(),{params:{id:D}}=(0,o.$B)("/settings/roles/:id"),[_,se]=(0,e.useState)(!1),de=(0,e.useRef)(),{lockApp:te,unlockApp:ue}=(0,C.o1)(),{trackUsage:Ie}=(0,C.rS)(),{isLoading:Re,data:Ze}=(0,ie.U_)(D),{role:fe,permissions:$e,isLoading:Me,onSubmitSucceeded:Be}=(0,ie.Dq)(D),{put:je}=(0,C.kY)(),Ve=async ae=>{try{te(),se(!0);const{permissionsToSend:V,didUpdateConditions:K}=de.current.getPermissions();await je(`/admin/roles/${D}`,ae),fe.code!=="strapi-super-admin"&&(await je(`/admin/roles/${D}/permissions`,{permissions:V}),K&&Ie("didUpdateConditions")),de.current.setFormAfterSubmit(),Be({name:ae.name,description:ae.description}),re({type:"success",message:{id:"notification.success.saved"}})}catch(V){console.error(V.response);const K=u()(V,"response.payload.message","An error occured"),Ee=u()(V,"response.payload.data.permissions[0]",K);re({type:"warning",message:Ee})}finally{se(!1),ue()}},De=fe.code==="strapi-super-admin";return e.createElement(k.o,null,e.createElement(C.SL,{name:"Roles"}),e.createElement(A.J9,{enableReinitialize:!0,initialValues:{name:fe.name,description:fe.description},onSubmit:Ve,validationSchema:ye,validateOnChange:!1},({handleSubmit:ae,values:V,errors:K,handleChange:Ee,handleBlur:ve})=>e.createElement("form",{onSubmit:ae},e.createElement(R.T,{primaryAction:e.createElement(E.k,{gap:2},e.createElement(S.z,{disabled:fe.code==="strapi-super-admin",onClick:ae,loading:_,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(C.rU,{startIcon:e.createElement(I.Z,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(P.D,null,e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(ee,{isLoading:Me,disabled:De,errors:K,values:V,onChange:Ee,onBlur:ve,role:fe}),!Re&&!Me?e.createElement(M.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(Q.Z,{isFormDisabled:De,permissions:$e,ref:de,layout:Ze})):e.createElement(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(C.dO,null)))))))},G=()=>{const re=(0,e.useMemo)(()=>({read:x.Z.settings.roles.read,update:x.Z.settings.roles.update}),[]),{isLoading:j,allowedActions:{canRead:D,canUpdate:_}}=(0,C.ss)(re);return j?e.createElement(C.dO,null):!D&&!_?e.createElement(o.l_,{to:"/"}):e.createElement(Ce,null)}},44174:w=>{function F(r,e,C,o){for(var x=-1,k=r==null?0:r.length;++x<k;){var R=r[x];e(o,R,C(R),r)}return o}w.exports=F},81119:(w,F,r)=>{var e=r(89881);function C(o,x,k,R){return e(o,function(E,S,P){x(R,E,k(E),P)}),R}w.exports=C},55189:(w,F,r)=>{var e=r(44174),C=r(81119),o=r(67206),x=r(1469);function k(R,E){return function(S,P){var M=x(S)?e:C,A=E?E():{};return M(S,R,o(P,2),A)}}w.exports=k},42348:(w,F,r)=>{var e=r(21078),C=1/0;function o(x){var k=x==null?0:x.length;return k?e(x,C):[]}w.exports=o},7739:(w,F,r)=>{var e=r(89465),C=r(55189),o=Object.prototype,x=o.hasOwnProperty,k=C(function(R,E,S){x.call(R,S)?R[S].push(E):e(R,S,[E])});w.exports=k},48734:(w,F,r)=>{"use strict";r.d(F,{U:()=>I,y:()=>M});var e=r(85893),C=r(67294),o=r(1565),x=r(13819),k=r(41580),R=r(11047),E=r(2504),S=r(75515);const P=({theme:y,expanded:u,variant:N,disabled:Q,error:z})=>z?`1px solid ${y.colors.danger600} !important`:Q?`1px solid ${y.colors.neutral150}`:u?`1px solid ${y.colors.primary600}`:N==="primary"?`1px solid ${y.colors.neutral0}`:`1px solid ${y.colors.neutral100}`,M=(0,o.ZP)(S.Z)``,A=(0,o.ZP)(k.x)`
  border: ${P};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:y})=>y.colors.primary600};

    ${M} {
      color: ${({theme:y,expanded:u})=>u?void 0:y.colors.primary700};
    }

    ${S.Z} {
      color: ${({theme:y,expanded:u})=>u?void 0:y.colors.primary600};
    }

    & > ${R.k} {
      background: ${({theme:y})=>y.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:y})=>y.colors.primary200};
    }
  }
`,I=({children:y,disabled:u=!1,error:N,expanded:Q=!1,hasErrorMessage:z=!0,id:he,onToggle:T,toggle:X,size:me="M",variant:h="primary",shadow:q})=>{const Y=(0,E.M)(he),ee=C.useMemo(()=>({expanded:Q,onToggle:T,toggle:X,id:Y,size:me,variant:h,disabled:u}),[u,Q,Y,T,me,X,h]);return(0,e.jsxs)(x.S.Provider,{value:ee,children:[(0,e.jsx)(A,{"data-strapi-expanded":Q,disabled:u,"aria-disabled":u,expanded:Q,hasRadius:!0,variant:h,error:N,shadow:q,children:y}),N&&z&&(0,e.jsx)(k.x,{paddingTop:1,children:(0,e.jsx)(S.Z,{variant:"pi",textColor:"danger600",children:N})})]})}},63081:(w,F,r)=>{"use strict";r.d(F,{v:()=>x});var e=r(85893),C=r(13819),o=r(41580);const x=({children:k,...R})=>{const{expanded:E,id:S}=(0,C.A)();if(!E)return null;const P=`accordion-content-${S}`,M=`accordion-label-${S}`,A=`accordion-desc-${S}`;return(0,e.jsx)(o.x,{role:"region",id:P,"aria-labelledby":M,"aria-describedby":A,...R,children:k})}},13819:(w,F,r)=>{"use strict";r.d(F,{A:()=>o,S:()=>C});var e=r(67294);const C=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),o=()=>(0,e.useContext)(C)},74756:(w,F,r)=>{"use strict";r.d(F,{B:()=>y});var e=r(85893),C=r(12645),o=r(1565),x=r(48734),k=r(13819);const R=({expanded:u,disabled:N,variant:Q})=>{let z="neutral100";return u?z="primary100":N?z="neutral150":Q==="primary"&&(z="neutral0"),z};var E=r(11047),S=r(52624),P=r(39785),M=r(75515);const A=(0,o.ZP)(P.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:u,expanded:N})=>N?u.colors.primary600:u.colors.neutral500};
    }
  }
`,I=(0,o.ZP)(E.k)`
  min-height: ${({theme:u,size:N})=>u.sizes.accordions[N]};
  border-radius: ${({theme:u,expanded:N})=>N?`${u.borderRadius} ${u.borderRadius} 0 0`:u.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.primary600};
      }
    }
  }
`,y=({title:u,description:N,as:Q="span",togglePosition:z="right",action:he,...T})=>{const{onToggle:X,toggle:me,expanded:h,id:q,size:Y,variant:ee,disabled:ie}=(0,k.A)(),le=`accordion-content-${q}`,Se=`accordion-label-${q}`,ye=`accordion-desc-${q}`,ce=Y==="M"?6:4,Ce=Y==="M"?ce:ce-2,Oe=R({expanded:h,disabled:ie,variant:ee}),G={as:Q,fontWeight:Y==="S"?"bold":void 0,id:Se,textColor:h?"primary600":"neutral700",ellipsis:!0,variant:Y==="M"?"delta":void 0},re=h?"primary600":"neutral600",j=h?"primary200":"neutral200",D=Y==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{ie||(me&&!X?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),me()):X&&X())},se=(0,e.jsx)(E.k,{justifyContent:"center",borderRadius:"50%",height:D,width:D,transform:h?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:j,cursor:ie?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(S.J,{as:C.Z,width:Y==="M"?`${11/16}rem`:`${8/16}rem`,color:h?"primary600":"neutral600"})});return(0,e.jsx)(I,{paddingBottom:Ce,paddingLeft:ce,paddingRight:ce,paddingTop:Ce,background:Oe,expanded:h,size:Y,justifyContent:"space-between",cursor:ie?"not-allowed":"",children:(0,e.jsxs)(E.k,{gap:3,flex:1,maxWidth:"100%",children:[z==="left"&&se,(0,e.jsx)(A,{onClick:_,"aria-disabled":ie,"aria-expanded":h,"aria-controls":le,"aria-labelledby":Se,"data-strapi-accordion-toggle":!0,expanded:h,type:"button",flex:1,minWidth:0,...T,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.y,{...G,children:u}),N&&(0,e.jsx)(M.Z,{as:"p",id:ye,textColor:re,children:N})]})}),z==="right"&&(0,e.jsxs)(E.k,{gap:3,children:[se,he]}),z==="left"&&he]})})}},2407:(w,F,r)=>{"use strict";r.d(F,{$:()=>P,O:()=>M});var e=r(85893),C=r(16405),o=r(1565),x=r(41580),k=r(11047),R=r(75515),E=r(63237);const S=(0,o.ZP)(k.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:A})=>A.colors.neutral500};
    }
  }
  :last-of-type ${x.x} {
    display: none;
  }
  :last-of-type ${R.Z} {
    color: ${({theme:A})=>A.colors.neutral800};
    font-weight: ${({theme:A})=>A.fontWeights.bold};
  }
`,P=({children:A})=>(0,e.jsxs)(S,{inline:!0,as:"li",children:[(0,e.jsx)(R.Z,{variant:"pi",textColor:"neutral600",children:A}),(0,e.jsx)(x.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(C.Z,{})})]});P.displayName="Crumb";const M=({children:A,label:I,...y})=>(0,e.jsxs)(k.k,{...y,children:[(0,e.jsx)(E.T,{children:I}),(0,e.jsx)("ol",{"aria-hidden":!0,children:A})]});M.displayName="Breadcrumbs"},17603:(w,F,r)=>{"use strict";r.d(F,{Q:()=>R});var e=r(67294),C=r(45697),o=r(82562);const x=({children:E,label:S,...P})=>{const M=E.map(A=>A.props.value);return e.createElement(e.Fragment,null,e.createElement(o.W,{"data-opt-group":!0,"data-opt-group-children":M,"aria-label":`${S}, ${E.length} items`,...P},S),E)};x.propTypes={children:C.arrayOf(C.node).isRequired,label:C.string.isRequired},x.displayName="OptGroup";var k=r(48302);const R=({options:E,...S})=>e.createElement(k.P,{multi:!0,...S},E.map(({label:P,value:M,children:A})=>A?e.createElement(x,{key:P,label:P},A?.map(I=>e.createElement(o.W,{key:I.value,value:I.value},I.label))):e.createElement(o.W,{key:M,value:M},P)));R.propTypes={options:C.arrayOf(C.object).isRequired}}}]);
