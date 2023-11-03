import{dW as yt,r as P,bL as Je,dX as St,bP as Fe,dY as vt,aR as c,aP as bt,aQ as ht,y as M,bR as Me,aS as mt,aT as xt,j as I,aU as fe,aV as It,dZ as ae,I as Ot,d_ as Pt,P as Ct,bU as et}from"./index-cc58a329.js";import{i as tt,f as de,A as At}from"./TextField-727dca04.js";import{o as ut}from"./OutlinedInput-400299d2.js";import{C as Lt}from"./Close-751101d2.js";import{C as kt}from"./Chip-202c59ef.js";function ct(o){return typeof o.normalize<"u"?o.normalize("NFD").replace(/[\u0300-\u036f]/g,""):o}function Rt(o={}){const{ignoreAccents:n=!0,ignoreCase:i=!0,limit:m,matchFrom:L="any",stringify:v,trim:C=!1}=o;return(b,{inputValue:U,getOptionLabel:j})=>{let k=C?U.trim():U;i&&(k=k.toLowerCase()),n&&(k=ct(k));const Y=k?b.filter(ne=>{let H=(v||j)(ne);return i&&(H=H.toLowerCase()),n&&(H=ct(H)),L==="start"?H.indexOf(k)===0:H.indexOf(k)>-1}):b;return typeof m=="number"?Y.slice(0,m):Y}}function ot(o,n){for(let i=0;i<o.length;i+=1)if(n(o[i]))return i;return-1}const wt=Rt(),dt=5,Tt=o=>{var n;return o.current!==null&&((n=o.current.parentElement)==null?void 0:n.contains(document.activeElement))};function Dt(o){const{unstable_isActiveElementInListbox:n=Tt,unstable_classNamePrefix:i="Mui",autoComplete:m=!1,autoHighlight:L=!1,autoSelect:v=!1,blurOnSelect:C=!1,clearOnBlur:b=!o.freeSolo,clearOnEscape:U=!1,componentName:j="useAutocomplete",defaultValue:k=o.multiple?[]:null,disableClearable:Y=!1,disableCloseOnSelect:ne=!1,disabled:H,disabledItemsFocusable:He=!1,disableListWrap:ze=!1,filterOptions:nt=wt,filterSelectedOptions:ge=!1,freeSolo:Z=!1,getOptionDisabled:G,getOptionLabel:Ve=t=>{var e;return(e=t.label)!=null?e:t},groupBy:le,handleHomeEndKeys:je=!o.freeSolo,id:re,includeInputInList:We=!1,inputValue:rt,isOptionEqualToValue:J=(t,e)=>t===e,multiple:d=!1,onChange:be,onClose:he,onHighlightChange:Le,onInputChange:_,onOpen:me,open:Be,openOnFocus:at=!1,options:lt,readOnly:K=!1,selectOnFocus:Ue=!o.freeSolo,value:Ge}=o,R=yt(re);let A=Ve;A=t=>{const e=Ve(t);return typeof e!="string"?String(e):e};const xe=P.useRef(!1),Ie=P.useRef(!0),$=P.useRef(null),N=P.useRef(null),[Oe,_e]=P.useState(null),[T,se]=P.useState(-1),ke=L?0:-1,w=P.useRef(ke),[l,Re]=Je({controlled:Ge,default:k,name:j}),[f,ee]=Je({controlled:rt,default:"",name:j,state:"inputValue"}),[q,we]=P.useState(!1),ie=P.useCallback((t,e)=>{if(!(d?l.length<e.length:e!==null)&&!b)return;let a;if(d)a="";else if(e==null)a="";else{const u=A(e);a=typeof u=="string"?u:""}f!==a&&(ee(a),_&&_(t,a,"reset"))},[A,f,d,_,ee,b,l]),[te,Te]=Je({controlled:Be,default:!1,name:j,state:"open"}),[Ke,De]=P.useState(!0),Ne=!d&&l!=null&&f===A(l),D=te&&!K,h=D?nt(lt.filter(t=>!(ge&&(d?l:[l]).some(e=>e!==null&&J(t,e)))),{inputValue:Ne&&Ke?"":f,getOptionLabel:A}):[],E=St({filteredOptions:h,value:l});P.useEffect(()=>{const t=l!==E.value;q&&!t||Z&&!t||ie(null,l)},[l,ie,q,E.value,Z]);const Pe=te&&h.length>0&&!K,pe=Fe(t=>{t===-1?$.current.focus():Oe.querySelector(`[data-tag-index="${t}"]`).focus()});P.useEffect(()=>{d&&T>l.length-1&&(se(-1),pe(-1))},[l,d,T,pe]);function ue(t,e){if(!N.current||t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===h.length||e==="previous"&&r===-1)return-1;const a=N.current.querySelector(`[data-option-index="${r}"]`),u=He?!1:!a||a.disabled||a.getAttribute("aria-disabled")==="true";if(a&&!a.hasAttribute("tabindex")||u)r+=e==="next"?1:-1;else return r}}const Q=Fe(({event:t,index:e,reason:r="auto"})=>{if(w.current=e,e===-1?$.current.removeAttribute("aria-activedescendant"):$.current.setAttribute("aria-activedescendant",`${R}-option-${e}`),Le&&Le(t,e===-1?null:h[e],r),!N.current)return;const a=N.current.querySelector(`[role="option"].${i}-focused`);a&&(a.classList.remove(`${i}-focused`),a.classList.remove(`${i}-focusVisible`));const u=N.current.parentElement.querySelector('[role="listbox"]');if(!u)return;if(e===-1){u.scrollTop=0;return}const y=N.current.querySelector(`[data-option-index="${e}"]`);if(y&&(y.classList.add(`${i}-focused`),r==="keyboard"&&y.classList.add(`${i}-focusVisible`),u.scrollHeight>u.clientHeight&&r!=="mouse")){const x=y,B=u.clientHeight+u.scrollTop,pt=x.offsetTop+x.offsetHeight;pt>B?u.scrollTop=pt-u.clientHeight:x.offsetTop-x.offsetHeight*(le?1.3:0)<u.scrollTop&&(u.scrollTop=x.offsetTop-x.offsetHeight*(le?1.3:0))}}),z=Fe(({event:t,diff:e,direction:r="next",reason:a="auto"})=>{if(!D)return;const y=ue((()=>{const x=h.length-1;if(e==="reset")return ke;if(e==="start")return 0;if(e==="end")return x;const B=w.current+e;return B<0?B===-1&&We?-1:ze&&w.current!==-1||Math.abs(e)>1?0:x:B>x?B===x+1&&We?-1:ze||Math.abs(e)>1?x:0:B})(),r);if(Q({index:y,reason:a,event:t}),m&&e!=="reset")if(y===-1)$.current.value=f;else{const x=A(h[y]);$.current.value=x,x.toLowerCase().indexOf(f.toLowerCase())===0&&f.length>0&&$.current.setSelectionRange(f.length,x.length)}}),ce=()=>{const t=(e,r)=>{const a=e?A(e):"",u=r?A(r):"";return a===u};if(w.current!==-1&&E.filteredOptions&&E.filteredOptions.length!==h.length&&(d?l.length===E.value.length&&E.value.every((e,r)=>A(l[r])===A(e)):t(E.value,l))){const e=E.filteredOptions[w.current];if(e&&h.some(a=>A(a)===A(e)))return!0}return!1},Ce=P.useCallback(()=>{if(!D||ce())return;const t=d?l[0]:l;if(h.length===0||t==null){z({diff:"reset"});return}if(N.current){if(t!=null){const e=h[w.current];if(d&&e&&ot(l,a=>J(e,a))!==-1)return;const r=ot(h,a=>J(a,t));r===-1?z({diff:"reset"}):Q({index:r});return}if(w.current>=h.length-1){Q({index:h.length-1});return}Q({index:w.current})}},[h.length,d?!1:l,ge,z,Q,D,f,d]),qe=Fe(t=>{vt(N,t),t&&Ce()});P.useEffect(()=>{Ce()},[Ce]);const F=t=>{te||(Te(!0),De(!0),me&&me(t))},X=(t,e)=>{te&&(Te(!1),he&&he(t,e))},W=(t,e,r,a)=>{if(d){if(l.length===e.length&&l.every((u,y)=>u===e[y]))return}else if(l===e)return;be&&be(t,e,r,a),Re(e)},O=P.useRef(!1),g=(t,e,r="selectOption",a="options")=>{let u=r,y=e;if(d){y=Array.isArray(l)?l.slice():[];const x=ot(y,B=>J(e,B));x===-1?y.push(e):a!=="freeSolo"&&(y.splice(x,1),u="removeOption")}ie(t,y),W(t,y,u,{option:e}),!ne&&(!t||!t.ctrlKey&&!t.metaKey)&&X(t,u),(C===!0||C==="touch"&&O.current||C==="mouse"&&!O.current)&&$.current.blur()};function V(t,e){if(t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===l.length||e==="previous"&&r===-1)return-1;const a=Oe.querySelector(`[data-tag-index="${r}"]`);if(!a||!a.hasAttribute("tabindex")||a.disabled||a.getAttribute("aria-disabled")==="true")r+=e==="next"?1:-1;else return r}}const Qe=(t,e)=>{if(!d)return;f===""&&X(t,"toggleInput");let r=T;T===-1?f===""&&e==="previous"&&(r=l.length-1):(r+=e==="next"?1:-1,r<0&&(r=0),r===l.length&&(r=-1)),r=V(r,e),se(r),pe(r)},Ee=t=>{xe.current=!0,ee(""),_&&_(t,"","clear"),W(t,d?[]:null,"clear")},st=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(T!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(se(-1),pe(-1)),e.which!==229))switch(e.key){case"Home":D&&je&&(e.preventDefault(),z({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":D&&je&&(e.preventDefault(),z({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),z({diff:-dt,direction:"previous",reason:"keyboard",event:e}),F(e);break;case"PageDown":e.preventDefault(),z({diff:dt,direction:"next",reason:"keyboard",event:e}),F(e);break;case"ArrowDown":e.preventDefault(),z({diff:1,direction:"next",reason:"keyboard",event:e}),F(e);break;case"ArrowUp":e.preventDefault(),z({diff:-1,direction:"previous",reason:"keyboard",event:e}),F(e);break;case"ArrowLeft":Qe(e,"previous");break;case"ArrowRight":Qe(e,"next");break;case"Enter":if(w.current!==-1&&D){const r=h[w.current],a=G?G(r):!1;if(e.preventDefault(),a)return;g(e,r,"selectOption"),m&&$.current.setSelectionRange($.current.value.length,$.current.value.length)}else Z&&f!==""&&Ne===!1&&(d&&e.preventDefault(),g(e,f,"createOption","freeSolo"));break;case"Escape":D?(e.preventDefault(),e.stopPropagation(),X(e,"escape")):U&&(f!==""||d&&l.length>0)&&(e.preventDefault(),e.stopPropagation(),Ee(e));break;case"Backspace":if(d&&!K&&f===""&&l.length>0){const r=T===-1?l.length-1:T,a=l.slice();a.splice(r,1),W(e,a,"removeOption",{option:l[r]})}break;case"Delete":if(d&&!K&&f===""&&l.length>0&&T!==-1){const r=T,a=l.slice();a.splice(r,1),W(e,a,"removeOption",{option:l[r]})}break}},Xe=t=>{we(!0),at&&!xe.current&&F(t)},$e=t=>{if(n(N)){$.current.focus();return}we(!1),Ie.current=!0,xe.current=!1,v&&w.current!==-1&&D?g(t,h[w.current],"blur"):v&&Z&&f!==""?g(t,f,"blur","freeSolo"):b&&ie(t,l),X(t,"blur")},ye=t=>{const e=t.target.value;f!==e&&(ee(e),De(!1),_&&_(t,e,"input")),e===""?!Y&&!d&&W(t,null,"clear"):F(t)},Se=t=>{Q({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},ve=()=>{O.current=!0},Ae=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));g(t,h[e],"selectOption"),O.current=!1},p=t=>e=>{const r=l.slice();r.splice(t,1),W(e,r,"removeOption",{option:l[t]})},S=t=>{te?X(t,"toggleInput"):F(t)},oe=t=>{t.target.getAttribute("id")!==R&&t.preventDefault()},Ye=()=>{$.current.focus(),Ue&&Ie.current&&$.current.selectionEnd-$.current.selectionStart===0&&$.current.select(),Ie.current=!1},$t=t=>{(f===""||!te)&&S(t)};let Ze=Z&&f.length>0;Ze=Ze||(d?l.length>0:l!==null);let it=h;return le&&(it=h.reduce((t,e,r)=>{const a=le(e);return t.length>0&&t[t.length-1].group===a?t[t.length-1].options.push(e):t.push({key:r,index:r,group:a,options:[e]}),t},[])),H&&q&&$e(),{getRootProps:(t={})=>c({"aria-owns":Pe?`${R}-listbox`:null},t,{onKeyDown:st(t),onMouseDown:oe,onClick:Ye}),getInputLabelProps:()=>({id:`${R}-label`,htmlFor:R}),getInputProps:()=>({id:R,value:f,onBlur:$e,onFocus:Xe,onChange:ye,onMouseDown:$t,"aria-activedescendant":D?"":null,"aria-autocomplete":m?"both":"list","aria-controls":Pe?`${R}-listbox`:void 0,"aria-expanded":Pe,autoComplete:"off",ref:$,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:H}),getClearProps:()=>({tabIndex:-1,onClick:Ee}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:S}),getTagProps:({index:t})=>c({key:t,"data-tag-index":t,tabIndex:-1},!K&&{onDelete:p(t)}),getListboxProps:()=>({role:"listbox",id:`${R}-listbox`,"aria-labelledby":`${R}-label`,ref:qe,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const r=(d?l:[l]).some(u=>u!=null&&J(e,u)),a=G?G(e):!1;return{key:A(e),tabIndex:-1,role:"option",id:`${R}-option-${t}`,onMouseOver:Se,onClick:Ae,onTouchStart:ve,"data-option-index":t,"aria-disabled":a,"aria-selected":r}},id:R,inputValue:f,value:l,dirty:Ze,popupOpen:D,focused:q||T!==-1,anchorEl:Oe,setAnchorEl:_e,focusedTag:T,groupedOptions:it}}function Nt(o){return bt("MuiListSubheader",o)}ht("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Et=["className","color","component","disableGutters","disableSticky","inset"],Ft=o=>{const{classes:n,color:i,disableGutters:m,inset:L,disableSticky:v}=o,C={root:["root",i!=="default"&&`color${Me(i)}`,!m&&"gutters",L&&"inset",!v&&"sticky"]};return It(C,Nt,n)},Mt=M("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:i}=o;return[n.root,i.color!=="default"&&n[`color${Me(i.color)}`],!i.disableGutters&&n.gutters,i.inset&&n.inset,!i.disableSticky&&n.sticky]}})(({theme:o,ownerState:n})=>c({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(o.vars||o).palette.text.secondary,fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(14)},n.color==="primary"&&{color:(o.vars||o).palette.primary.main},n.color==="inherit"&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(o.vars||o).palette.background.paper})),Ht=P.forwardRef(function(n,i){const m=mt({props:n,name:"MuiListSubheader"}),{className:L,color:v="default",component:C="li",disableGutters:b=!1,disableSticky:U=!1,inset:j=!1}=m,k=xt(m,Et),Y=c({},m,{color:v,component:C,disableGutters:b,disableSticky:U,inset:j}),ne=Ft(Y);return I.jsx(Mt,c({as:C,className:fe(ne.root,L),ref:i,ownerState:Y},k))}),zt=Ht;function Vt(o){return bt("MuiAutocomplete",o)}const jt=ht("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),s=jt;var ft,gt;const Wt=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],Bt=o=>{const{classes:n,disablePortal:i,focused:m,fullWidth:L,hasClearIcon:v,hasPopupIcon:C,inputFocused:b,popupOpen:U,size:j}=o,k={root:["root",m&&"focused",L&&"fullWidth",v&&"hasClearIcon",C&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",b&&"inputFocused"],tag:["tag",`tagSize${Me(j)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",U&&"popupIndicatorOpen"],popper:["popper",i&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return It(k,Vt,n)},Ut=M("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:i}=o,{fullWidth:m,hasClearIcon:L,hasPopupIcon:v,inputFocused:C,size:b}=i;return[{[`& .${s.tag}`]:n.tag},{[`& .${s.tag}`]:n[`tagSize${Me(b)}`]},{[`& .${s.inputRoot}`]:n.inputRoot},{[`& .${s.input}`]:n.input},{[`& .${s.input}`]:C&&n.inputFocused},n.root,m&&n.fullWidth,v&&n.hasPopupIcon,L&&n.hasClearIcon]}})(({ownerState:o})=>c({[`&.${s.focused} .${s.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${s.clearIndicator}`]:{visibility:"visible"}}},o.fullWidth&&{width:"100%"},{[`& .${s.tag}`]:c({margin:3,maxWidth:"calc(100% - 6px)"},o.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${s.inputRoot}`]:{flexWrap:"wrap",[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4},[`& .${s.input}`]:{width:0,minWidth:30}},[`& .${tt.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${tt.root}.${ae.sizeSmall}`]:{[`& .${tt.input}`]:{padding:"2px 4px 3px 0"}},[`& .${ut.root}`]:{padding:9,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${s.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${ut.root}.${ae.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${s.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${de.root}`]:{paddingTop:19,paddingLeft:8,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${de.input}`]:{padding:"7px 4px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${de.root}.${ae.sizeSmall}`]:{paddingBottom:1,[`& .${de.input}`]:{padding:"2.5px 4px"}},[`& .${ae.hiddenLabel}`]:{paddingTop:8},[`& .${de.root}.${ae.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${s.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${de.root}.${ae.hiddenLabel}.${ae.sizeSmall}`]:{[`& .${s.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${s.input}`]:c({flexGrow:1,textOverflow:"ellipsis",opacity:0},o.inputFocused&&{opacity:1})})),Gt=M("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(o,n)=>n.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),_t=M(Ot,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(o,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Kt=M(Ot,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:o},n)=>c({},n.popupIndicator,o.popupOpen&&n.popupIndicatorOpen)})(({ownerState:o})=>c({padding:2,marginRight:-2},o.popupOpen&&{transform:"rotate(180deg)"})),qt=M(Pt,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,n)=>{const{ownerState:i}=o;return[{[`& .${s.option}`]:n.option},n.popper,i.disablePortal&&n.popperDisablePortal]}})(({theme:o,ownerState:n})=>c({zIndex:(o.vars||o).zIndex.modal},n.disablePortal&&{position:"absolute"})),Qt=M(Ct,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(o,n)=>n.paper})(({theme:o})=>c({},o.typography.body1,{overflow:"auto"})),Xt=M("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(o,n)=>n.loading})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),Yt=M("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(o,n)=>n.noOptions})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),Zt=M("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(o,n)=>n.listbox})(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${s.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${s.focused}`]:{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${s.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:et(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${s.focused}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:et(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}},[`&.${s.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:et(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}}})),Jt=M(zt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(o,n)=>n.groupLabel})(({theme:o})=>({backgroundColor:(o.vars||o).palette.background.paper,top:-8})),eo=M("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(o,n)=>n.groupUl})({padding:0,[`& .${s.option}`]:{paddingLeft:24}}),to=P.forwardRef(function(n,i){var m,L,v,C;const b=mt({props:n,name:"MuiAutocomplete"}),{autoComplete:U=!1,autoHighlight:j=!1,autoSelect:k=!1,blurOnSelect:Y=!1,ChipProps:ne,className:H,clearIcon:He=ft||(ft=I.jsx(Lt,{fontSize:"small"})),clearOnBlur:ze=!b.freeSolo,clearOnEscape:nt=!1,clearText:ge="Clear",closeText:Z="Close",componentsProps:G={},defaultValue:Ve=b.multiple?[]:null,disableClearable:le=!1,disableCloseOnSelect:je=!1,disabled:re=!1,disabledItemsFocusable:We=!1,disableListWrap:rt=!1,disablePortal:J=!1,filterSelectedOptions:d=!1,forcePopupIcon:be="auto",freeSolo:he=!1,fullWidth:Le=!1,getLimitTagsText:_=p=>`+${p}`,getOptionLabel:me=p=>{var S;return(S=p.label)!=null?S:p},groupBy:Be,handleHomeEndKeys:at=!b.freeSolo,includeInputInList:lt=!1,limitTags:K=-1,ListboxComponent:Ue="ul",ListboxProps:Ge,loading:R=!1,loadingText:A="Loading…",multiple:xe=!1,noOptionsText:Ie="No options",openOnFocus:$=!1,openText:N="Open",PaperComponent:Oe=Ct,PopperComponent:_e=Pt,popupIcon:T=gt||(gt=I.jsx(At,{})),readOnly:se=!1,renderGroup:ke,renderInput:w,renderOption:l,renderTags:Re,selectOnFocus:f=!b.freeSolo,size:ee="medium",slotProps:q={}}=b,we=xt(b,Wt),{getRootProps:ie,getInputProps:te,getInputLabelProps:Te,getPopupIndicatorProps:Ke,getClearProps:De,getTagProps:Ne,getListboxProps:D,getOptionProps:h,value:E,dirty:Pe,id:pe,popupOpen:ue,focused:Q,focusedTag:z,anchorEl:ce,setAnchorEl:Ce,inputValue:qe,groupedOptions:F}=Dt(c({},b,{componentName:"Autocomplete"})),X=!le&&!re&&Pe&&!se,W=(!he||be===!0)&&be!==!1,O=c({},b,{disablePortal:J,focused:Q,fullWidth:Le,hasClearIcon:X,hasPopupIcon:W,inputFocused:z===-1,popupOpen:ue,size:ee}),g=Bt(O);let V;if(xe&&E.length>0){const p=S=>c({className:g.tag,disabled:re},Ne(S));Re?V=Re(E,p,O):V=E.map((S,oe)=>I.jsx(kt,c({label:me(S),size:ee},p({index:oe}),ne)))}if(K>-1&&Array.isArray(V)){const p=V.length-K;!Q&&p>0&&(V=V.splice(0,K),V.push(I.jsx("span",{className:g.tag,children:_(p)},V.length)))}const Ee=ke||(p=>I.jsxs("li",{children:[I.jsx(Jt,{className:g.groupLabel,ownerState:O,component:"div",children:p.group}),I.jsx(eo,{className:g.groupUl,ownerState:O,children:p.children})]},p.key)),Xe=l||((p,S)=>I.jsx("li",c({},p,{children:me(S)}))),$e=(p,S)=>{const oe=h({option:p,index:S});return Xe(c({},oe,{className:g.option}),p,{selected:oe["aria-selected"],index:S,inputValue:qe})},ye=(m=q.clearIndicator)!=null?m:G.clearIndicator,Se=(L=q.paper)!=null?L:G.paper,ve=(v=q.popper)!=null?v:G.popper,Ae=(C=q.popupIndicator)!=null?C:G.popupIndicator;return I.jsxs(P.Fragment,{children:[I.jsx(Ut,c({ref:i,className:fe(g.root,H),ownerState:O},ie(we),{children:w({id:pe,disabled:re,fullWidth:!0,size:ee==="small"?"small":void 0,InputLabelProps:Te(),InputProps:c({ref:Ce,className:g.inputRoot,startAdornment:V},(X||W)&&{endAdornment:I.jsxs(Gt,{className:g.endAdornment,ownerState:O,children:[X?I.jsx(_t,c({},De(),{"aria-label":ge,title:ge,ownerState:O},ye,{className:fe(g.clearIndicator,ye==null?void 0:ye.className),children:He})):null,W?I.jsx(Kt,c({},Ke(),{disabled:re,"aria-label":ue?Z:N,title:ue?Z:N,ownerState:O},Ae,{className:fe(g.popupIndicator,Ae==null?void 0:Ae.className),children:T})):null]})}),inputProps:c({className:g.input,disabled:re,readOnly:se},te())})})),ce?I.jsx(qt,c({as:_e,disablePortal:J,style:{width:ce?ce.clientWidth:null},ownerState:O,role:"presentation",anchorEl:ce,open:ue},ve,{className:fe(g.popper,ve==null?void 0:ve.className),children:I.jsxs(Qt,c({ownerState:O,as:Oe},Se,{className:fe(g.paper,Se==null?void 0:Se.className),children:[R&&F.length===0?I.jsx(Xt,{className:g.loading,ownerState:O,children:A}):null,F.length===0&&!he&&!R?I.jsx(Yt,{className:g.noOptions,ownerState:O,role:"presentation",onMouseDown:p=>{p.preventDefault()},children:Ie}):null,F.length>0?I.jsx(Zt,c({as:Ue,className:g.listbox,ownerState:O},D(),Ge,{children:F.map((p,S)=>Be?Ee({key:p.key,group:p.group,children:p.options.map((oe,Ye)=>$e(oe,p.index+Ye))}):$e(p,S))})):null]}))})):null]})}),so=to;export{so as A,zt as L};