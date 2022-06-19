"use strict";(self.webpackChunkexle_docs=self.webpackChunkexle_docs||[]).push([[129],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=u(r),d=a,m=y["".concat(i,".").concat(d)]||y[d]||p[d]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3590:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],s={id:"proxy-contract-payment-system",title:"Proxy Contract Payment System",sidebar_position:1},i="Proxy Contract Payment System",u={unversionedId:"system-architecture/backend/offchain/proxy-contract-payment-system",id:"system-architecture/backend/offchain/proxy-contract-payment-system",title:"Proxy Contract Payment System",description:"Proxy contracts are widely used in the ergo ecosystem. The system helps facilitates and ensures a transaction is performed based on the contract that is written.",source:"@site/docs/system-architecture/backend/offchain/proxy-contract-payment-system.mdx",sourceDirName:"system-architecture/backend/offchain",slug:"/system-architecture/backend/offchain/proxy-contract-payment-system",permalink:"/exle-docs/docs/system-architecture/backend/offchain/proxy-contract-payment-system",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/system-architecture/backend/offchain/proxy-contract-payment-system.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"proxy-contract-payment-system",title:"Proxy Contract Payment System",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Off-Chain",permalink:"/exle-docs/docs/category/off-chain"},next:{title:"Exle Tx Bot",permalink:"/exle-docs/docs/system-architecture/backend/offchain/exle-tx-bot"}},l={},p=[{value:"Integration with ErgoPay",id:"integration-with-ergopay",level:2},{value:"System Architecture",id:"system-architecture",level:2}],y={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proxy-contract-payment-system"},"Proxy Contract Payment System"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Development Status"',title:'"Development','Status"':!0},"IsImplemented: true\nCurrentStatus: SLT Integration\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ergoplatform/eips/blob/master/eip-0017.md"},"Proxy contracts")," are widely used in the ergo ecosystem. The system helps facilitates and ensures a transaction is performed based on the contract that is written."),(0,o.kt)("p",null,"Within Exle, proxy contracts are heavily used in the process of funding loans, repayments and also in the creation of loans."),(0,o.kt)("h2",{id:"integration-with-ergopay"},"Integration with ErgoPay"),(0,o.kt)("p",null,"The backend system is designed to integrate proxy contract alongside ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Jb6Amjai0Bc"},"ErgoPay"),". This heavily improve the user experience as users who connected their wallet with our dApp can send the right amount of payment to the right proxy contract by just clicking sign on the Nautilus dApp. This reduces room for error when sending funds to the proxy contract."),(0,o.kt)("h2",{id:"system-architecture"},"System Architecture"),(0,o.kt)("p",null,"When a user makes a loan funding/creation request. It calls the backend and use the details to generate a proxy contract. The details, including the proxy contract are then stored in a database."),(0,o.kt)("p",null,"After that, the details are put into an ErgoPay Converter that generates the bytes of the UnsignedReducedTx and include it alongside other details to be sent to the client."),(0,o.kt)("p",null,"Exle's client-side would have connected the users wallet to the dApp. The bytes are then sent to the wallet to process and generates a tx that is ready for the user to sign and send the funds over."),(0,o.kt)("p",null,"The figure below shows the architecture of the Proxy Contract Payment System."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Proxy Contract Payment System Architecture",src:r(2102).Z,width:"1035",height:"425"})))}d.isMDXComponent=!0},2102:function(e,t,r){t.Z=r.p+"assets/images/proxy-contract-payment-system-f31df626c770d1bbff789102c52152da.png"}}]);