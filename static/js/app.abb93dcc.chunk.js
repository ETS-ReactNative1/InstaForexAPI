(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{218:function(e,t,r){e.exports=r.p+"./fonts/Roboto-Regular.ttf"},219:function(e,t,r){e.exports=r.p+"./fonts/Roboto-Bold.ttf"},220:function(e,t,r){e.exports=r.p+"static/media/no-items.271b27cb.png"},232:function(e,t,r){"use strict";var n=r(17),a=r.n(n),o=(r(42),r(0)),c=r.n(o),i=r(233),s=r(399),l=r(218),u=r.n(l),p=r(219),f=r.n(p),d=r(220),g=r.n(d),b={"roboto-regular":u.a,"roboto-bold":f.a},m={noItems:g.a},y=r(1),v=r.n(y),h=r(6),E=r.n(h);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){var t=e.join();return encodeURIComponent(t)},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(!t)return e;var r=t.symbol,n=t.description,a=t.digits,o=t.ask,c=t.bid,i=t.change,s=t.change24h;return e.map((function(e){switch(e.title){case"Symbol":return P({},e,{value:r});case"Description":return P({},e,{value:n});case"Digits":return P({},e,{value:a});case"Ask":return P({},e,{value:o});case"Bid":return P({},e,{value:c});case"Change":return P({},e,{value:i});case"Change 24h":return P({},e,{value:s});default:return e}}))},C=r(45),k=C.a.get("window"),x=k.width,T=k.height,D=x-20,S=Math.round(T),R=Math.floor((S-280)/72);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={isLoading:!1,isError:!1,data:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.data;switch(r){case"FETCH_INIT":return L({},e,{isLoading:!0,isError:!1});case"FETCH_SUCCESS":return L({},e,{isLoading:!1,isError:!1,data:n});case"FETCH_FAILURE":return L({},e,{isLoading:!1,isError:!0});default:return e}},q=r(16),B=r.n(q),H="https://quotes.instaforex.com/api",U=function(e){return{type:"FETCH_SUCCESS",data:e}},_=function(){var e=Object(o.useReducer)(F,z),t=a()(e,2),r=t[0],n=t[1],c=Object(o.useCallback)((function(){var e,t,r,a,o;return B.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n({type:"FETCH_INIT"}),c.prev=1,e=j(["symbol","description","digits"]),c.next=6,B.a.awrap(fetch(H+"/quotesList?f="+e));case 6:return t=c.sent,c.next=9,B.a.awrap(t.json());case 9:r=c.sent,a=r.quotesList,o=(void 0===a?[]:a).sort((function(e,t){return e.symbol.localeCompare(t.symbol)})),n(U(o)),c.next=18;break;case 15:c.prev=15,c.t0=c.catch(1),n({type:"FETCH_FAILURE"});case 18:case"end":return c.stop()}}),null,null,[[1,15]],Promise)}),[]);return Object(o.useEffect)((function(){c()}),[c]),[r,c]},A=function(e){var t=Object(o.useState)(e),r=a()(t,2),n=r[0],c=r[1];return[n,function(e){c(e)}]},W=function(e){var t=Object(o.useState)(e),r=a()(t,2),n=r[0],c=r[1];return[n,function(e){switch(e){case"next":c(n+1);break;case"prev":c(n-1);break;case"goToFirstPage":c(1)}}]};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var M=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},z,{currentPage:1,totalPages:1,search:"",updateSearch:function(){},fetchData:function(){},paginate:function(){}}),J=Object(o.createContext)(M),Q=function(e){var t=e.children,r=M.currentPage,n=M.search,o=_(),i=a()(o,2),s=i[0],l=s.data,u=s.isLoading,p=s.isError,f=i[1],d=A(n),g=a()(d,2),b=g[0],m=g[1],y=function(e,t){return t.filter((function(t){var r=t.symbol.toUpperCase(),n=e.toUpperCase();return r.match(n)}))}(b,l),v=b?y:l,h=W(r),E=a()(h,2),O=E[0],P=E[1],j=function(e,t,r){var n=e*r,a=n-r;return[Math.ceil(t.length/r),t.slice(a,n)]}(O,v,R),w=a()(j,2),C=w[0],k={data:w[1],isLoading:u,isError:p,currentPage:O,totalPages:C,search:b,updateSearch:m,fetchData:f,paginate:P};return c.a.createElement(J.Provider,{value:k},t)};Q.propTypes={children:v.a.node.isRequired};var V=function(){var e=Object(o.useReducer)(F,z),t=a()(e,2),r=t[0],n=t[1];return[r,Object(o.useCallback)((function(e){var t,r,a,o;return B.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n({type:"FETCH_INIT"}),c.prev=1,t=encodeURIComponent(e),r=j(["ask","bid","change","change24h"]),c.next=7,B.a.awrap(fetch(H+"/quotesTick?f="+r+"&q="+t));case 7:return a=c.sent,c.next=10,B.a.awrap(a.json());case 10:o=c.sent,n(U(o)),c.next=17;break;case 14:c.prev=14,c.t0=c.catch(1),n({type:"FETCH_FAILURE"});case 17:case"end":return c.stop()}}),null,null,[[1,14]],Promise)}),[])]};function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var K=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},z,{fetchData:function(){}}),X=Object(o.createContext)(K),Y=function(e){var t=e.children,r=V(),n=a()(r,2),o=n[0],i=o.data,s=void 0===i?[]:i,l=o.isLoading,u={data:s,isError:o.isError,isLoading:l,fetchData:n[1]};return c.a.createElement(X.Provider,{value:u},t)};Y.propTypes={children:v.a.node.isRequired};var Z=function(e){var t=e.children;return c.a.createElement(Q,null,c.a.createElement(Y,null,t))};Z.propTypes={children:v.a.node.isRequired};var $=Z,ee=r(4),te=r(12).a.OS,re="android"===te,ne="ios"===te,ae=r(196),oe=r(400),ce={title:"InstaForex"},ie=function(e){return{title:e.route.params.symbol}},se=r(127),le=r(14),ue=r.n(le),pe=r(18),fe=r.n(pe),de=r(36),ge=function(e){var t=e.style,r=e.children,n=e.bold,a=fe()(e,["style","children","bold"]),o={fontFamily:n?"roboto-bold":"roboto-regular"};return c.a.createElement(de.a,ue()({style:[o,t]},a),r)};ge.propTypes={children:v.a.node.isRequired,bold:v.a.bool,style:de.a.propTypes.style},ge.defaultProps={bold:!1,style:{}};var be=ge,me=r(3),ye=me.a.create({error:{alignItems:"center",flex:1,justifyContent:"center"},text:{color:"#e53935",fontSize:20,marginBottom:20}}),ve=function(e){var t=e.children;return c.a.createElement(ee.a,{style:ye.error},c.a.createElement(be,{style:ye.text},"Something went wrong!"),t)};ve.propTypes={children:v.a.node},ve.defaultProps={children:null};var he=ve,Ee=r(64),Oe=r(51),Pe=me.a.create({button:{alignItems:"center",borderRadius:5,flexDirection:"row",justifyContent:"center",paddingHorizontal:10,paddingVertical:10},text:{color:"#fff"}}),je=function(e){var t=e.children,r=e.onPress,n=e.backgroundColor,a=e.activeOpacity,o=fe()(e,["children","onPress","backgroundColor","activeOpacity"]),i=re?Oe.a:Ee.a,s={backgroundColor:n};return c.a.createElement(i,ue()({onPress:r,activeOpacity:a},o),c.a.createElement(ee.a,{style:[Pe.button,s]},c.a.createElement(be,{bold:!0,style:Pe.text},t)))};je.propTypes={children:v.a.node.isRequired,onPress:v.a.func,backgroundColor:v.a.string,activeOpacity:v.a.number},je.defaultProps={onPress:function(){},backgroundColor:"#434343",activeOpacity:.7};var we=je,Ce=r(221),ke=me.a.create({loader:{alignItems:"center",flex:1,justifyContent:"center"}}),xe=function(e){var t=e.size,r=e.color,n=fe()(e,["size","color"]);return c.a.createElement(ee.a,{style:ke.loader},c.a.createElement(Ce.a,ue()({size:t,color:r},n)))};xe.propTypes={size:v.a.string,color:v.a.string},xe.defaultProps={size:"large",color:"#434343"};var Te=xe,De=r(72),Se=me.a.create({image:{height:"100%",resizeMode:"contain",width:"100%"},wrapper:{alignItems:"center",height:300,justifyContent:"center",padding:10}}),Re=function(){return c.a.createElement(ee.a,{style:Se.wrapper},c.a.createElement(De.a,{style:Se.image,source:m.noItems}))},Ie=r(52),Le=me.a.create({input:{alignItems:"center",backgroundColor:"#fff",borderColor:"#808080",borderRadius:5,borderWidth:1,flexDirection:"row",fontSize:26,justifyContent:"space-between",marginBottom:10,padding:10,width:D}}),ze=function(e){var t=e.onChangeText,r=e.value;return c.a.createElement(Ie.a,{style:Le.input,onChangeText:function(e){return t(e)},placeholder:"Search...",value:r})};ze.propTypes={value:v.a.string,onChangeText:v.a.func},ze.defaultProps={value:"",onChangeText:function(){}};var Fe=ze,qe=r(401),Be=me.a.create({body:{width:D-150},container:{marginTop:20,width:D-30},pagination:{alignItems:"center",flexDirection:"row",justifyContent:"center"},text:{fontSize:25}}),He=function(e){var t=e.totalPages,r=e.currentPage,n=e.onPress,a=e.iconsSize,o=e.activeOpacity;if(t<=1)return null;var i=re?Oe.a:Ee.a,s=1===r,l=r===t;return c.a.createElement(ee.a,{style:[Be.pagination,Be.container]},c.a.createElement(i,{onPress:function(){return!s&&n("prev")},activeOpacity:o,disabled:s},c.a.createElement(qe.a,{name:"caretleft",size:a})),c.a.createElement(ee.a,{style:[Be.pagination,Be.body]},c.a.createElement(be,{style:Be.text},r," of ",t)),c.a.createElement(i,{onPress:function(){return!l&&n("next")},activeOpacity:o,disabled:l},c.a.createElement(qe.a,{name:"caretright",size:a})))};He.propTypes={currentPage:v.a.number,totalPages:v.a.number,onPress:v.a.func,iconsSize:v.a.number,activeOpacity:v.a.number},He.defaultProps={currentPage:1,totalPages:1,onPress:function(){},iconsSize:40,activeOpacity:.7};var Ue=He,_e=me.a.create({quote:{alignItems:"center",borderColor:"#434343",borderRadius:5,borderWidth:1,flexDirection:"row",flex:1,justifyContent:"center",marginBottom:10,padding:15},text:{fontSize:26}}),Ae=function(e){var t=e.item,r=e.onPress;return c.a.createElement(Ee.a,{onPress:function(){return r(t)}},c.a.createElement(ee.a,{style:_e.quote},c.a.createElement(be,{bold:!0,style:_e.text},t.symbol)))};Ae.propTypes={item:v.a.shape({symbol:v.a.string,description:v.a.string,digits:v.a.number}),onPress:v.a.func},Ae.defaultProps={item:{symbol:"",description:"Here should be a description",digits:0},onPress:function(){}};var We=Ae,Ne=me.a.create({container:{alignItems:"center",flex:1,marginTop:10},quotes:{backgroundColor:"#fff",borderColor:"#808080",borderRadius:5,borderWidth:1,height:S-270,padding:10,width:D}}),Me=function(e){var t=e.navigation,r=Object(o.useContext)(J),n=r.data,a=r.isError,i=r.isLoading,s=r.currentPage,l=r.totalPages,u=r.search,p=r.updateSearch,f=r.fetchData,d=r.paginate,g=function(e){return t.navigate("Details",e)};return a?c.a.createElement(he,null,c.a.createElement(we,{backgroundColor:"#e53935",onPress:f},"Try again")):i?c.a.createElement(Te,null):c.a.createElement(ee.a,{style:Ne.container},c.a.createElement(Fe,{onChangeText:function(e){p(e),1!==s&&d("goToFirstPage")},value:u}),c.a.createElement(ee.a,{style:Ne.quotes},c.a.createElement(se.a,{data:n,onRefresh:f,refreshing:i,renderItem:function(e){var t=e.item;return c.a.createElement(We,{item:t,onPress:g})},keyExtractor:function(e){return e.symbol},ListEmptyComponent:function(){return c.a.createElement(Re,null)}})),c.a.createElement(Ue,{totalPages:l,currentPage:s,onPress:d}))};Me.propTypes={navigation:v.a.shape({navigate:v.a.func})},Me.defaultProps={navigation:{navigate:function(){}}};var Je=Me,Qe=[{title:"Ask"},{title:"Bid"},{title:"Change"},{title:"Change 24h"}],Ve=[{title:"Symbol"},{title:"Description"},{title:"Digits"}],Ge=function(e,t){var r=w(Ve,e),n=w(Qe,t);return r.concat(n)},Ke=me.a.create({block:{alignItems:"center",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",marginBottom:10,width:"95%"},header:{fontFamily:"roboto-bold"},text:{fontSize:26}}),Xe=function(e){var t=e.title,r=e.value;return c.a.createElement(ee.a,{style:Ke.block},c.a.createElement(be,{style:Ke.text},c.a.createElement(de.a,{style:Ke.header},t,":")," ",r))};Xe.propTypes={title:v.a.string.isRequired,value:v.a.oneOfType([v.a.number,v.a.string])},Xe.defaultProps={value:"Unknown"};var Ye=Xe,Ze=me.a.create({button:{marginTop:50,width:100},container:{alignItems:"center",flex:1,paddingTop:20}}),$e=function(e){var t=e.route,r=e.navigation,n=Object(o.useContext)(X),a=n.data,i=n.isError,s=n.isLoading,l=n.fetchData,u=t.params.symbol;Object(o.useEffect)((function(){l(u)}),[l,u]);var p=Ge(t.params,a[0]);return i?c.a.createElement(he,null,c.a.createElement(we,{backgroundColor:"#e53935",onPress:function(){return l(u)}},"Try again")):s?c.a.createElement(Te,null):c.a.createElement(ee.a,{style:Ze.container},p.map((function(e){var t=e.title,r=e.value;return c.a.createElement(Ye,{key:t,title:t,value:r})})),c.a.createElement(ee.a,{style:Ze.button},c.a.createElement(we,{backgroundColor:"#757575",onPress:function(){return r.goBack()}},c.a.createElement(qe.a,{name:"back",size:40}))))};$e.propTypes={route:v.a.shape({params:v.a.shape({symbol:v.a.string,description:v.a.string,digits:v.a.number})}),navigation:v.a.shape({goBack:v.a.func})},$e.defaultProps={route:{params:{symbol:"",description:"Here should be a description",digits:0}},navigation:{goBack:function(){}}};var et=$e,tt=Object(oe.a)(),rt=tt.Navigator,nt=tt.Screen,at=function(){return c.a.createElement(ae.a,null,c.a.createElement(rt,{initialRouteName:"QuotesList"},c.a.createElement(nt,{name:"QuotesList",component:Je,options:ce}),c.a.createElement(nt,{name:"Details",component:et,options:ie})))},ot=r(71),ct=r(234),it=me.a.create({statusBar:{height:ct.a.statusBarHeight}}),st=function(e){var t=e.backgroundColor,r=e.translucent,n=fe()(e,["backgroundColor","translucent"]),a={backgroundColor:t};return c.a.createElement(ee.a,{style:[it.statusBar,a]},c.a.createElement(ot.a,ue()({translucent:r,backgroundColor:t},n)))};st.propTypes={backgroundColor:v.a.string,translucent:v.a.bool},st.defaultProps={backgroundColor:"#434343",translucent:!0};var lt=st,ut=me.a.create({container:{flex:1}}),pt=function(){return c.a.createElement(ee.a,{style:ut.container},c.a.createElement(lt,{backgroundColor:ne?"#fff":"#434343",barStyle:ne?"dark-content":"light-content"}),c.a.createElement(ee.a,{style:ut.container},c.a.createElement(at,null)))},ft=r(7),dt=r.n(ft),gt=r(10),bt=r.n(gt),mt=r(9),yt=r.n(mt),vt=r(11),ht=r.n(vt),Et=r(2),Ot=r.n(Et);function Pt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var jt=function(e){yt()(n,e);var t,r=(t=n,function(){var e,r=Ot()(t);if(Pt()){var n=Ot()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return ht()(this,e)});function n(){var e;dt()(this,n);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=r.call.apply(r,[this].concat(a))).state={hasError:!1},e}return bt()(n,[{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?c.a.createElement(he,null):t}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(o.Component);jt.propTypes={children:v.a.node.isRequired};var wt=jt;t.a=function(){var e=Object(i.a)(b);return a()(e,1)[0]?c.a.createElement(wt,null,c.a.createElement($,null,c.a.createElement(pt,null))):c.a.createElement(s.a,null)}},241:function(e,t,r){r(242),e.exports=r(388)},242:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[241,1,2]]]);
//# sourceMappingURL=app.abb93dcc.chunk.js.map