import{j as e,q as E,s as h,t as N,w as p,aK as R,ao as F,ap as L,R as o,k as M,u as b,V as P,a as c,d3 as D,d4 as q,d5 as k,d6 as U,d7 as Q,d8 as z,A as w,d9 as G,da as V,G as d,L as B,d as f,o as H,v as $,db as K,dc as v}from"./index-cc58a329.js";import{C as J}from"./Container-c6f384ce.js";import{B as W}from"./Breadcrumbs-27f8f572.js";import{S as n}from"./Skeleton-861e561d.js";import{I as X}from"./InfiniteScroll-321153e4.js";import{C as Y}from"./react-time-ago-5fee5104.js";import"./index-a79bf066.js";function Z(){return e.jsxs(E,{sx:{bgcolor:"background.paper"},children:[[0,1,2,4].map(s=>e.jsxs("div",{children:[e.jsxs(h,{button:!0,children:[e.jsx(N,{children:e.jsx(n,{variant:"circular",width:40,height:40})}),e.jsx(p,{primary:e.jsx(n,{variant:"text",height:40}),secondary:e.jsx(n,{variant:"text",height:20})})]}),e.jsx(R,{variant:"inset",component:"li"})]},s)),e.jsxs(h,{button:!0,children:[e.jsx(N,{children:e.jsx(n,{variant:"circular",width:40,height:40})}),e.jsx(p,{primary:e.jsx(n,{variant:"text",height:40}),secondary:e.jsx(n,{variant:"text",height:20})})]})]})}var j={},ee=L;Object.defineProperty(j,"__esModule",{value:!0});var O=j.default=void 0,te=ee(F()),se=e,ae=(0,te.default)((0,se.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5zm5-2.5H7v-1l1-1v-2.61C8 9.27 9.03 7.47 11 7v-.5c0-.57.43-1 1-1s1 .43 1 1V7c1.97.47 3 2.28 3 4.39V14l1 1v1z"}),"CircleNotifications");O=j.default=ae;var u=(s=>(s.ADMIN_NOTIFICATION="AdminNotification",s.OFFER_NOTIfICATION="OfferNotification",s.COMMENT_OFFER_NOTIFICATION="CommentOfferNotification",s.RENT_REQUEST_NOTIFICATION="RentRequestNotification",s.SELL_REQUEST_NOTIFICATION="SellRequestNotification",s))(u||{});function fe(){const[s,T]=o.useState(!0),m=[],{t:S}=M(),x=b(),i=P(),I=c(D)??!1,a=c(q)??[],_=c(k)??0,r=c(U)??0,g=c(Q)??!1,y=()=>{i(K({})),i(v(0))};o.useEffect(()=>{s&&a.length===0&&(T(!1),y())},[s]),o.useEffect(()=>{r>=0&&!s&&i(z({page:r,size:w.OFFERS_PER_PAGE,queryParams:""}))},[r,s]),o.useEffect(()=>{if((a==null?void 0:a.length)>0){for(let t=0;t<a.length;t++)a[t].isRead||m.push({id:a[t].id});m.length>0&&i(G(m))}},[a]),o.useEffect(()=>{g&&i(V({}))},[g]);const C=()=>{T(!1),i(v(r+1))},A=t=>{t.module===u.COMMENT_OFFER_NOTIFICATION?setTimeout(()=>{var l;x(f.DETAILS_OFFER+"/"+((l=t==null?void 0:t.offer)==null?void 0:l.id))},300):t.module===u.RENT_REQUEST_NOTIFICATION?setTimeout(()=>{x(f.RENT_REQUEST.LIST)},300):t.module===u.SELL_REQUEST_NOTIFICATION&&setTimeout(()=>{x(f.ORDER.LIST)},300)};return e.jsxs(J,{children:[e.jsx(d,{container:!0,style:{paddingTop:10},children:e.jsx(d,{item:!0,xs:12,sm:6,children:e.jsxs(W,{"aria-label":"breadcrumb",children:[e.jsx(B,{color:"inherit",to:f.HOME,children:"SRF"}),e.jsx(H,{color:"text.primary",children:S("notification.title_page")})]})})}),e.jsxs(d,{container:!0,spacing:6,style:{paddingTop:50},children:[e.jsx(d,{item:!0,xs:12,sm:6,md:3}),e.jsx(d,{item:!0,xs:12,sm:6,md:6,className:"my-container",children:e.jsx(X,{pageStart:r,loadMore:C,hasMore:_-1>r&&!I,loader:e.jsx("div",{className:"loader"},0),threshold:0,initialLoad:!1,children:e.jsxs(E,{children:[a.map((t,l)=>e.jsxs(o.Fragment,{children:[e.jsxs(h,{button:!0,sx:{bgcolor:t.isRead?"":"background.paper"},onClick:()=>A(t),children:[e.jsx(N,{children:e.jsx($,{children:e.jsx(O,{})})}),e.jsx(p,{primary:e.jsx(Y,{convertDate:t.dateCreated}),secondary:t.content})]}),e.jsx(R,{variant:"inset",component:"li"})]},`notification-${t.id}-${l}`)),I?e.jsx(Z,{}):null]})})})]})]})}export{fe as default};