(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[7692],{76539:(M,p,e)=>{"use strict";e.d(p,{Z:()=>s});var t=e(67294),o=e(86896),n=e(45697),a=e.n(n),g=e(73599),l=e(85018),f=e(67109),y=e(53979),u=e(11047),A=e(29728),v=e(30815),P=e(48474);const i=({onRegenerate:h,idToRegenerate:R,backUrl:K,onError:U})=>{const{formatMessage:b}=(0,o.Z)(),[D,N]=(0,t.useState)(!1),{regenerateData:S,isLoadingConfirmation:_}=(0,P.rW)(K,R,h,U),Z=async()=>{S(),N(!1)};return t.createElement(t.Fragment,null,t.createElement(A.z,{startIcon:t.createElement(v.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>N(!0),name:"regenerate"},b({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(g.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(v.Z,null),isConfirmButtonLoading:_,isOpen:D,onToggleDialog:()=>N(!1),onConfirm:Z,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};i.defaultProps={onRegenerate(){},onError:void 0},i.propTypes={onRegenerate:a().func,idToRegenerate:a().oneOfType([a().number,a().string]).isRequired,backUrl:a().string.isRequired,onError:a().func};const r=i,c=({title:h,token:R,setToken:K,canEditInputs:U,canRegenerate:b,isSubmitting:D,backUrl:N,regenerateUrl:S,onErrorRegenerate:_})=>{const{formatMessage:Z}=(0,o.Z)(),G=Q=>{K({...R,accessKey:Q})};return t.createElement(y.T,{title:R?.name||Z(h),primaryAction:U?t.createElement(u.k,{gap:2},b&&R?.id&&t.createElement(r,{backUrl:S,onRegenerate:G,idToRegenerate:R?.id,onError:_}),t.createElement(A.z,{disabled:D,loading:D,startIcon:t.createElement(l.Z,null),type:"submit",size:"S"},Z({id:"global.save",defaultMessage:"Save"}))):b&&R?.id&&t.createElement(r,{onRegenerate:G,idToRegenerate:R?.id,backUrl:S}),navigationAction:t.createElement(g.rU,{startIcon:t.createElement(f.Z,null),to:N},Z({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};c.propTypes={token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().oneOfType([a().number,a().string]),name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string}),canEditInputs:a().bool.isRequired,canRegenerate:a().bool.isRequired,setToken:a().func.isRequired,isSubmitting:a().bool.isRequired,backUrl:a().string.isRequired,title:a().shape({id:a().string,label:a().string}).isRequired,regenerateUrl:a().string.isRequired,onErrorRegenerate:a().func},c.defaultProps={token:void 0,onErrorRegenerate:void 0};const s=c},60401:(M,p,e)=>{"use strict";e.d(p,{Z:()=>A});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),g=e(48302),l=e(82562),f=e(75515),y=e(75056);const u=({token:v,errors:P,values:i,onChange:r,isCreating:c})=>{const{formatMessage:s}=(0,a.Z)();return t.createElement(t.Fragment,null,t.createElement(g.P,{name:"lifespan",label:s({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:i.lifespan!==null?i.lifespan:"0",error:P.lifespan?s(P.lifespan?.id?P.lifespan:{id:P.lifespan,defaultMessage:P.lifespan}):null,onChange:h=>{r({target:{name:"lifespan",value:h}})},required:!0,disabled:!c,placeholder:"Select"},t.createElement(l.W,{value:"604800000"},s({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(l.W,{value:"2592000000"},s({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(l.W,{value:"7776000000"},s({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(l.W,{value:"0"},s({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(f.Z,{variant:"pi",textColor:"neutral600"},!c&&`${s({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,y.IX)(v?.createdAt,parseInt(i.lifespan,10))}`))};u.propTypes={errors:n().shape({lifespan:n().string}),onChange:n().func.isRequired,values:n().shape({lifespan:n().oneOfType([n().number,n().string])}).isRequired,isCreating:n().bool.isRequired,token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string})},u.defaultProps={errors:{},token:{}};const A=u},24122:(M,p,e)=>{"use strict";e.d(p,{Z:()=>P});var t=e(67294),o=e(86896),n=e(73599),a=e(12028),g=e(65186),l=e(69427),f=e(45697),y=e.n(f),u=e(74855),A=e.n(u);const v=({token:i,tokenType:r})=>{const{formatMessage:c}=(0,o.Z)(),s=(0,n.lm)(),{trackUsage:h}=(0,n.rS)(),R=(0,t.useRef)(h);return t.createElement(n.Y_,{endAction:i&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(u.CopyToClipboard,{onCopy:()=>{R.current("didCopyTokenKey",{tokenType:r}),s({type:"success",message:{id:"Settings.tokens.notification.copied"}})},text:i},t.createElement(a.h,{label:c({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:t.createElement(g.Z,null),style:{padding:0,height:"1rem"}}))),title:i||c({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:c(i?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(l.Z,null),iconBackground:"neutral100"})};v.defaultProps={token:null},v.propTypes={token:y().string,tokenType:y().string.isRequired};const P=v},40695:(M,p,e)=>{"use strict";e.d(p,{Z:()=>f});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),g=e(64256);const l=({errors:y,values:u,onChange:A,canEditInputs:v})=>{const{formatMessage:P}=(0,a.Z)();return t.createElement(g.g,{label:P({id:"Settings.tokens.form.description",defaultMessage:"Description"}),name:"description",error:y.description?P(y.description?.id?y.description:{id:y.description,defaultMessage:y.description}):null,onChange:A,disabled:!v},u.description)};l.propTypes={errors:n().shape({description:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({description:n().string}).isRequired},l.defaultProps={errors:{}};const f=l},61053:(M,p,e)=>{"use strict";e.d(p,{Z:()=>f});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),g=e(16364);const l=({errors:y,values:u,onChange:A,canEditInputs:v})=>{const{formatMessage:P}=(0,a.Z)();return t.createElement(g.o,{name:"name",error:y.name?P(y.name?.id?y.name:{id:y.name,defaultMessage:y.name}):null,label:P({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:A,value:u.name,disabled:!v,required:!0})};l.propTypes={errors:n().shape({name:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string}).isRequired},l.defaultProps={errors:{}};const f=l},31065:(M,p,e)=>{"use strict";e.d(p,{Z:()=>y});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),g=e(48302),l=e(82562);const f=({name:u,errors:A,values:v,onChange:P,canEditInputs:i,options:r,label:c})=>{const{formatMessage:s}=(0,a.Z)();return t.createElement(g.P,{name:u,label:s({id:c.id,defaultMessage:c.defaultMessage}),value:v&&v[u],error:A[u]?s(A[u]?.id?A[u]:{id:A[u],defaultMessage:A[u]}):null,onChange:P,placeholder:"Select",required:!0,disabled:!i},r&&r.map(({value:h,label:R})=>t.createElement(l.W,{key:h,value:h},s(R))))};f.propTypes={name:n().string,options:n().arrayOf(n().shape({label:n().shape({id:n().string,defaultMessage:n().string}),value:n().string})),errors:n().shape({type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({type:n().string}).isRequired,label:n().shape({id:n().string,defaultMessage:n().string}).isRequired},f.defaultProps={name:"type",errors:{},options:[]};const y=f},47670:(M,p,e)=>{"use strict";e.d(p,{Z:()=>t,f:()=>o});const t="api-token",o="transfer-token"},57692:(M,p,e)=>{"use strict";e.d(p,{Z:()=>Ve});var t=e(67294),o=e(86896),n=e(73599),a=e(185),g=e(49066),l=e(11047),f=e(41054),y=e(16550),u=e(88767),A=e(19631),v=e(75056),P=e(53979),i=e(29728),r=e(85018),c=e(45697),s=e.n(c);const h=({apiTokenName:d})=>{const{formatMessage:m}=(0,o.Z)();return(0,n.go)(),t.createElement(a.o,{"aria-busy":"true"},t.createElement(n.SL,{name:"API Tokens"}),t.createElement(P.T,{primaryAction:t.createElement(i.z,{disabled:!0,startIcon:t.createElement(r.Z,null),type:"button",size:"L"},m({id:"global.save",defaultMessage:"Save"})),title:d||m({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(g.D,null,t.createElement(n.dO,null)))};h.defaultProps={apiTokenName:null},h.propTypes={apiTokenName:s().string};const R=h;var K=e(87751);const U=(0,t.createContext)({}),b=({children:d,...m})=>t.createElement(U.Provider,{value:m},d),D=()=>(0,t.useContext)(U);b.propTypes={children:s().node.isRequired};const S=(d,m=[])=>({...d,selectedAction:null,routes:[],selectedActions:[],data:(0,v.mk)(m)});var _=e(18172),Z=e(97019),G=e.n(Z);const Q={data:{},selectedActions:[]},J=(d,m)=>(0,_.ZP)(d,E=>{switch(m.type){case"ON_CHANGE":{E.selectedActions.includes(m.value)?G()(E.selectedActions,m.value):E.selectedActions.push(m.value);break}case"SELECT_ALL_IN_PERMISSION":{m.value.every(x=>E.selectedActions.includes(x.actionId))?m.value.forEach(x=>{G()(E.selectedActions,x.actionId)}):m.value.forEach(x=>{E.selectedActions.push(x.actionId)});break}case"SELECT_ALL_ACTIONS":{E.selectedActions=[...E.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const I=E.data.allActionsIds.filter(x=>x.includes("find")||x.includes("findOne"));E.selectedActions=[...I];break}case"UPDATE_PERMISSIONS_LAYOUT":{E.data=(0,v.mk)(m.value);break}case"UPDATE_ROUTES":{E.routes={...m.value};break}case"UPDATE_PERMISSIONS":{E.selectedActions=[...m.value];break}case"SET_SELECTED_ACTION":{E.selectedAction=m.value;break}default:return E}});var w=e(11276),H=e(74571),$=e(75515),z=e(41580),ce=e(48403),se=e.n(ce),ae=e(48734),oe=e(74756),Ae=e(63081),ve=e(36213),Ce=e(78114),re=e(1565);const Pe=re.iv`
  background: ${d=>d.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Me=(0,re.ZP)(z.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${d=>d.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${d=>d.isActive&&Pe}
  &:hover {
    ${Pe}
  }
`,xe=re.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:d})=>d.colors.neutral150};
`,pe=({controllers:d,label:m,orderNumber:E,disabled:I,onExpanded:x,indexExpandendCollapsedContent:T})=>{const{value:{onChangeSelectAll:j,onChange:Y,selectedActions:W,setSelectedAction:V,selectedAction:ee}}=D(),[F,le]=(0,t.useState)(!1),{formatMessage:te}=(0,o.Z)(),k=()=>{le(B=>!B),x(E)};(0,t.useEffect)(()=>{T!==null&&T!==E&&F&&le(!1)},[T,E,F]);const q=B=>B===ee;return t.createElement(ae.U,{expanded:F,onToggle:k,variant:E%2?"primary":"secondary"},t.createElement(oe.B,{title:se()(m)}),t.createElement(Ae.v,null,d?.map(B=>{const de=B.actions.every(O=>W.includes(O.actionId)),Ee=B.actions.some(O=>W.includes(O.actionId));return t.createElement(z.x,{key:`${m}.${B?.controller}`},t.createElement(l.k,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(z.x,{paddingRight:4},t.createElement($.Z,{variant:"sigma",textColor:"neutral600"},B?.controller)),t.createElement(xe,null),t.createElement(z.x,{paddingLeft:4},t.createElement(ve.X,{value:de,indeterminate:!de&&Ee,onValueChange:()=>{j({target:{value:[...B.actions]}})},disabled:I},te({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(w.r,{gap:4,padding:4},B?.actions&&B?.actions.map(O=>t.createElement(H.P,{col:6,key:O.actionId},t.createElement(Me,{isActive:q(O.actionId),padding:2,hasRadius:!0},t.createElement(ve.X,{value:W.includes(O.actionId),name:O.actionId,onValueChange:()=>{Y({target:{value:O.actionId}})},disabled:I},O.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>V({target:{value:O.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(Ce.Z,null)))))))})))};pe.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},pe.propTypes={controllers:s().array,orderNumber:s().number,label:s().string.isRequired,disabled:s().bool,onExpanded:s().func,indexExpandendCollapsedContent:s().number};const Oe=pe,ue=({section:d,...m})=>{const[E,I]=(0,t.useState)(null),x=T=>I(T);return t.createElement(z.x,{padding:4,background:"neutral0"},d&&d.map((T,j)=>t.createElement(Oe,{key:T.apiId,label:T.label,controllers:T.controllers,orderNumber:j,indexExpandendCollapsedContent:E,onExpanded:x,name:T.apiId,...m})))};ue.defaultProps={section:null},ue.propTypes={section:s().arrayOf(s().object)};const Re=ue;var De=e(35161),Ie=e.n(De),Se=e(13217),Le=e.n(Se);const ke=d=>{switch(d){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Be=(0,re.ZP)(z.x)`
  margin: -1px;
  border-radius: ${({theme:d})=>d.spaces[1]} 0 0 ${({theme:d})=>d.spaces[1]};
`;function ge({route:d}){const{formatMessage:m}=(0,o.Z)(),{method:E,handler:I,path:x}=d,T=x?Le()(x.split("/")):[],[j="",Y=""]=I?I.split("."):[],W=ke(d.method);return t.createElement(l.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h3"},m({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,j),t.createElement($.Z,{variant:"delta",textColor:"primary600"},".",Y)),t.createElement(l.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(Be,{background:W.background,borderColor:W.border,padding:2},t.createElement($.Z,{fontWeight:"bold",textColor:W.text},E)),t.createElement(z.x,{paddingLeft:2,paddingRight:2},Ie()(T,V=>t.createElement($.Z,{key:V,textColor:V.includes(":")?"neutral600":"neutral900"},"/",V)))))}ge.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},ge.propTypes={route:s().shape({handler:s().string,method:s().string,path:s().string})};const Ue=ge,be=()=>{const{value:{selectedAction:d,routes:m}}=D(),{formatMessage:E}=(0,o.Z)(),I=d?.split(".")[0];return t.createElement(H.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},d?t.createElement(l.k,{direction:"column",alignItems:"stretch",gap:2},m[I]?.map(x=>x.config.auth?.scope?.includes(d)||x.handler===d?t.createElement(Ue,{key:x.handler,route:x}):null)):t.createElement(l.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h3"},E({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement($.Z,{as:"p",textColor:"neutral600"},E({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},Ze=({...d})=>{const{value:{data:m}}=D(),{formatMessage:E}=(0,o.Z)();return t.createElement(w.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(H.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(l.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h2"},E({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement($.Z,{as:"p",textColor:"neutral600"},E({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),m?.permissions&&t.createElement(Re,{section:m?.permissions,...d})),t.createElement(be,null))},We=(0,t.memo)(Ze);var Ke=e(60401),Ne=e(61053),$e=e(40695),je=e(31065);const me=({errors:d,onChange:m,canEditInputs:E,isCreating:I,values:x,apiToken:T,onDispatch:j,setHasChangedPermissions:Y})=>{const{formatMessage:W}=(0,o.Z)(),V=({target:{value:F}})=>{Y(!1),F==="full-access"&&j({type:"SELECT_ALL_ACTIONS"}),F==="read-only"&&j({type:"ON_CHANGE_READ_ONLY"})},ee=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(l.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement($.Z,{variant:"delta",as:"h2"},W({id:"global.details",defaultMessage:"Details"})),t.createElement(w.r,{gap:5},t.createElement(H.P,{key:"name",col:6,xs:12},t.createElement(Ne.Z,{errors:d,values:x,canEditInputs:E,onChange:m})),t.createElement(H.P,{key:"description",col:6,xs:12},t.createElement($e.Z,{errors:d,values:x,canEditInputs:E,onChange:m})),t.createElement(H.P,{key:"lifespan",col:6,xs:12},t.createElement(Ke.Z,{isCreating:I,errors:d,values:x,onChange:m,token:T})),t.createElement(H.P,{key:"type",col:6,xs:12},t.createElement(je.Z,{values:x,errors:d,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:F=>{V({target:{value:F}}),m({target:{name:"type",value:F}})},options:ee,canEditInputs:E})))))};me.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().oneOfType([s().number,s().string]),type:s().string}).isRequired,isCreating:s().bool.isRequired,apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().string,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},me.defaultProps={errors:{},apiToken:{}};const Fe=me;var ze=e(24122),_e=e(76539),ie=e(47670);const He="Name already taken",Ve=()=>{(0,n.go)();const{formatMessage:d}=(0,o.Z)(),{lockApp:m,unlockApp:E}=(0,n.o1)(),I=(0,n.lm)(),x=(0,y.k6)(),[T,j]=(0,t.useState)(x.location.state?.apiToken.accessKey?{...x.location.state.apiToken}:null),{trackUsage:Y}=(0,n.rS)(),W=(0,t.useRef)(Y),{setCurrentStep:V}=(0,n.c1)(),{allowedActions:{canCreate:ee,canUpdate:F,canRegenerate:le}}=(0,n.ss)(K.Z.settings["api-tokens"]),[te,k]=(0,t.useReducer)(J,Q,C=>S(C,{})),{params:{id:q}}=(0,y.$B)("/settings/api-tokens/:id"),{get:B,post:de,put:Ee}=(0,n.kY)(),O=q==="create";(0,u.useQuery)("content-api-permissions",async()=>{const[C,X]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async ne=>{const{data:L}=await B(ne);return L.data}));k({type:"UPDATE_PERMISSIONS_LAYOUT",value:C}),k({type:"UPDATE_ROUTES",value:X}),T&&(T?.type==="read-only"&&k({type:"ON_CHANGE_READ_ONLY"}),T?.type==="full-access"&&k({type:"SELECT_ALL_ACTIONS"}),T?.type==="custom"&&k({type:"UPDATE_PERMISSIONS",value:T?.permissions}))},{onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{W.current(O?"didAddTokenFromList":"didEditTokenFromList",{tokenType:ie.Z})},[O]);const{status:Ge}=(0,u.useQuery)(["api-token",q],async()=>{const{data:{data:C}}=await B(`/admin/api-tokens/${q}`);return j({...C}),C?.type==="read-only"&&k({type:"ON_CHANGE_READ_ONLY"}),C?.type==="full-access"&&k({type:"SELECT_ALL_ACTIONS"}),C?.type==="custom"&&k({type:"UPDATE_PERMISSIONS",value:C?.permissions}),C},{enabled:!O&&!T,onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ye=async(C,X)=>{W.current(O?"willCreateToken":"willEditToken",{tokenType:ie.Z}),m();const ne=C.lifespan&&parseInt(C.lifespan,10)&&C.lifespan!=="0"?parseInt(C.lifespan,10):null;try{const{data:{data:L}}=O?await de("/admin/api-tokens",{...C,lifespan:ne,permissions:C.type==="custom"?te.selectedActions:null}):await Ee(`/admin/api-tokens/${q}`,{name:C.name,description:C.description,type:C.type,permissions:C.type==="custom"?te.selectedActions:null});O&&(x.replace(`/settings/api-tokens/${L.id}`,{apiToken:L}),V("apiTokens.success")),E(),j({...L}),I({type:"success",message:d(O?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),W.current(O?"didCreateToken":"didEditToken",{type:T.type,tokenType:ie.Z})}catch(L){const he=(0,A.Iz)(L.response.data);X.setErrors(he),L?.response?.data?.error?.message===He?I({type:"warning",message:L.response.data.message||"notification.error.tokennamenotunique"}):I({type:"warning",message:L?.response?.data?.message||"notification.error"}),E()}},[Xe,fe]=(0,t.useState)(!1),Qe={...te,onChange:({target:{value:C}})=>{fe(!0),k({type:"ON_CHANGE",value:C})},onChangeSelectAll:({target:{value:C}})=>{fe(!0),k({type:"SELECT_ALL_IN_PERMISSION",value:C})},setSelectedAction:({target:{value:C}})=>{k({type:"SET_SELECTED_ACTION",value:C})}},ye=F&&!O||ee&&O;return!O&&!T&&Ge!=="success"?t.createElement(R,{apiTokenName:T?.name}):t.createElement(b,{value:Qe},t.createElement(a.o,null,t.createElement(n.SL,{name:"API Tokens"}),t.createElement(f.J9,{validationSchema:v.fK,validateOnChange:!1,initialValues:{name:T?.name||"",description:T?.description||"",type:T?.type,lifespan:T?.lifespan?T.lifespan.toString():T?.lifespan},enableReinitialize:!0,onSubmit:(C,X)=>Ye(C,X)},({errors:C,handleChange:X,isSubmitting:ne,values:L,setFieldValue:he})=>(Xe&&L?.type!=="custom"&&he("type","custom"),t.createElement(n.l0,null,t.createElement(_e.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:T,setToken:j,canEditInputs:ye,canRegenerate:le,isSubmitting:ne,regenerateUrl:"/admin/api-tokens/"}),t.createElement(g.D,null,t.createElement(l.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(T?.name)&&t.createElement(ze.Z,{token:T?.accessKey,tokenType:ie.Z}),t.createElement(Fe,{errors:C,onChange:X,canEditInputs:ye,isCreating:O,values:L,apiToken:T,onDispatch:k,setHasChangedPermissions:fe}),t.createElement(We,{disabled:!ye||L?.type==="read-only"||L?.type==="full-access"}))))))))}},75056:(M,p,e)=>{"use strict";e.d(p,{IX:()=>g,fK:()=>u,mk:()=>v});var t=e(66115),o=e(77349),n=e(51991);const g=(P,i,r="en")=>{if(i&&typeof i=="number"){const c=i/24/60/60/1e3;return(0,t.Z)((0,o.Z)(new Date(P),c),"PPP",{locale:n[r]})}return"Unlimited"};var l=e(87561),f=e(73599);const u=l.Ry().shape({name:l.Z_(f.I0.string).max(100).required(f.I0.required),type:l.Z_(f.I0.string).oneOf(["read-only","full-access","custom"]).required(f.I0.required),description:l.Z_().nullable(),lifespan:l.Rx().integer().min(0).nullable().defined(f.I0.required)}),v=P=>{const i={allActionsIds:[],permissions:[]};return i.permissions=Object.keys(P).map(r=>({apiId:r,label:r.split("::")[1],controllers:Object.keys(P[r].controllers).map(c=>({controller:c,actions:P[r].controllers[c].map(s=>{const h=`${r}.${c}.${s}`;return r.includes("api::")&&i.allActionsIds.push(h),{action:s,actionId:h}}).flat()})).flat()})),i}},41848:M=>{function p(e,t,o,n){for(var a=e.length,g=o+(n?1:-1);n?g--:++g<a;)if(t(e[g],g,e))return g;return-1}M.exports=p},42118:(M,p,e)=>{var t=e(41848),o=e(62722),n=e(42351);function a(g,l,f){return l===l?n(g,l,f):t(g,o,f)}M.exports=a},74221:M=>{function p(e,t,o,n){for(var a=o-1,g=e.length;++a<g;)if(n(e[a],t))return a;return-1}M.exports=p},62722:M=>{function p(e){return e!==e}M.exports=p},65464:(M,p,e)=>{var t=e(29932),o=e(42118),n=e(74221),a=e(7518),g=e(278),l=Array.prototype,f=l.splice;function y(u,A,v,P){var i=P?n:o,r=-1,c=A.length,s=u;for(u===A&&(A=g(A)),v&&(s=t(u,a(v)));++r<c;)for(var h=0,R=A[r],K=v?v(R):R;(h=i(s,K,h,P))>-1;)s!==u&&f.call(s,h,1),f.call(u,h,1);return u}M.exports=y},42351:M=>{function p(e,t,o){for(var n=o-1,a=e.length;++n<a;)if(e[n]===t)return n;return-1}M.exports=p},97019:(M,p,e)=>{var t=e(5976),o=e(45604),n=t(o);M.exports=n},45604:(M,p,e)=>{var t=e(65464);function o(n,a){return n&&n.length&&a&&a.length?t(n,a):n}M.exports=o},13217:(M,p,e)=>{var t=e(14259);function o(n){var a=n==null?0:n.length;return a?t(n,1,a):[]}M.exports=o},48734:(M,p,e)=>{"use strict";e.d(p,{U:()=>P,y:()=>A});var t=e(85893),o=e(67294),n=e(1565),a=e(13819),g=e(41580),l=e(11047),f=e(2504),y=e(75515);const u=({theme:i,expanded:r,variant:c,disabled:s,error:h})=>h?`1px solid ${i.colors.danger600} !important`:s?`1px solid ${i.colors.neutral150}`:r?`1px solid ${i.colors.primary600}`:c==="primary"?`1px solid ${i.colors.neutral0}`:`1px solid ${i.colors.neutral100}`,A=(0,n.ZP)(y.Z)``,v=(0,n.ZP)(g.x)`
  border: ${u};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:i})=>i.colors.primary600};

    ${A} {
      color: ${({theme:i,expanded:r})=>r?void 0:i.colors.primary700};
    }

    ${y.Z} {
      color: ${({theme:i,expanded:r})=>r?void 0:i.colors.primary600};
    }

    & > ${l.k} {
      background: ${({theme:i})=>i.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:i})=>i.colors.primary200};
    }
  }
`,P=({children:i,disabled:r=!1,error:c,expanded:s=!1,hasErrorMessage:h=!0,id:R,onToggle:K,toggle:U,size:b="M",variant:D="primary",shadow:N})=>{const S=(0,f.M)(R),_=o.useMemo(()=>({expanded:s,onToggle:K,toggle:U,id:S,size:b,variant:D,disabled:r}),[r,s,S,K,b,U,D]);return(0,t.jsxs)(a.S.Provider,{value:_,children:[(0,t.jsx)(v,{"data-strapi-expanded":s,disabled:r,"aria-disabled":r,expanded:s,hasRadius:!0,variant:D,error:c,shadow:N,children:i}),c&&h&&(0,t.jsx)(g.x,{paddingTop:1,children:(0,t.jsx)(y.Z,{variant:"pi",textColor:"danger600",children:c})})]})}},63081:(M,p,e)=>{"use strict";e.d(p,{v:()=>a});var t=e(85893),o=e(13819),n=e(41580);const a=({children:g,...l})=>{const{expanded:f,id:y}=(0,o.A)();if(!f)return null;const u=`accordion-content-${y}`,A=`accordion-label-${y}`,v=`accordion-desc-${y}`;return(0,t.jsx)(n.x,{role:"region",id:u,"aria-labelledby":A,"aria-describedby":v,...l,children:g})}},13819:(M,p,e)=>{"use strict";e.d(p,{A:()=>n,S:()=>o});var t=e(67294);const o=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,t.useContext)(o)},74756:(M,p,e)=>{"use strict";e.d(p,{B:()=>i});var t=e(85893),o=e(12645),n=e(1565),a=e(48734),g=e(13819);const l=({expanded:r,disabled:c,variant:s})=>{let h="neutral100";return r?h="primary100":c?h="neutral150":s==="primary"&&(h="neutral0"),h};var f=e(11047),y=e(52624),u=e(39785),A=e(75515);const v=(0,n.ZP)(u.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:r,expanded:c})=>c?r.colors.primary600:r.colors.neutral500};
    }
  }
`,P=(0,n.ZP)(f.k)`
  min-height: ${({theme:r,size:c})=>r.sizes.accordions[c]};
  border-radius: ${({theme:r,expanded:c})=>c?`${r.borderRadius} ${r.borderRadius} 0 0`:r.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }
`,i=({title:r,description:c,as:s="span",togglePosition:h="right",action:R,...K})=>{const{onToggle:U,toggle:b,expanded:D,id:N,size:S,variant:_,disabled:Z}=(0,g.A)(),G=`accordion-content-${N}`,Q=`accordion-label-${N}`,Te=`accordion-desc-${N}`,J=S==="M"?6:4,w=S==="M"?J:J-2,H=l({expanded:D,disabled:Z,variant:_}),$={as:s,fontWeight:S==="S"?"bold":void 0,id:Q,textColor:D?"primary600":"neutral700",ellipsis:!0,variant:S==="M"?"delta":void 0},z=D?"primary600":"neutral600",ce=D?"primary200":"neutral200",se=S==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{Z||(b&&!U?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),b()):U&&U())},oe=(0,t.jsx)(f.k,{justifyContent:"center",borderRadius:"50%",height:se,width:se,transform:D?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ce,cursor:Z?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,t.jsx)(y.J,{as:o.Z,width:S==="M"?`${11/16}rem`:`${8/16}rem`,color:D?"primary600":"neutral600"})});return(0,t.jsx)(P,{paddingBottom:w,paddingLeft:J,paddingRight:J,paddingTop:w,background:H,expanded:D,size:S,justifyContent:"space-between",cursor:Z?"not-allowed":"",children:(0,t.jsxs)(f.k,{gap:3,flex:1,maxWidth:"100%",children:[h==="left"&&oe,(0,t.jsx)(v,{onClick:ae,"aria-disabled":Z,"aria-expanded":D,"aria-controls":G,"aria-labelledby":Q,"data-strapi-accordion-toggle":!0,expanded:D,type:"button",flex:1,minWidth:0,...K,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.y,{...$,children:r}),c&&(0,t.jsx)(A.Z,{as:"p",id:Te,textColor:z,children:c})]})}),h==="right"&&(0,t.jsxs)(f.k,{gap:3,children:[oe,R]}),h==="left"&&R]})})}}}]);
