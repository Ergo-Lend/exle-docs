"use strict";(self.webpackChunkexle_docs=self.webpackChunkexle_docs||[]).push([[651],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"exle-tx-bot",title:"Exle Tx Bot",sidebar_position:2},c="Exle Tx Bot",l={unversionedId:"system-architecture/backend/offchain/exle-tx-bot",id:"system-architecture/backend/offchain/exle-tx-bot",title:"Exle Tx Bot",description:"Within an eUTxO system, the boxes has to be processed in an off-chain manner. These are normally run in a CRON job manner that turns on every block (2 minutes).",source:"@site/docs/system-architecture/backend/offchain/exle-bot.md",sourceDirName:"system-architecture/backend/offchain",slug:"/system-architecture/backend/offchain/exle-tx-bot",permalink:"/exle-docs/docs/system-architecture/backend/offchain/exle-tx-bot",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/system-architecture/backend/offchain/exle-bot.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"exle-tx-bot",title:"Exle Tx Bot",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Proxy Contract Payment System",permalink:"/exle-docs/docs/system-architecture/backend/offchain/proxy-contract-payment-system"},next:{title:"Loan System",permalink:"/exle-docs/docs/category/loan-system"}},u={},p=[{value:"Input-Output",id:"inputoutput",level:2},{value:"System Architecture",id:"system-architecture",level:2},{value:"Chaining Transactions",id:"chaining-transactions",level:3},{value:"Signing Txs",id:"signing-txs",level:3}],h={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exle-tx-bot"},"Exle Tx Bot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Development Status"',title:'"Development','Status"':!0},"Version: 1st Draft\nIsImplemented: false\nCurrentStatus: Code Design\n")),(0,a.kt)("p",null,"Within an eUTxO system, the boxes has to be processed in an off-chain manner. These are normally run in a CRON job manner that turns on every block (2 minutes)."),(0,a.kt)("p",null,"Each bot would require the necessary information and instruction to properly process the box and send the correct txs to the blockchain."),(0,a.kt)("p",null,"As each dApp system is different, each dApp would require it's own bot to run the system and process the transactions. This article explains the architecture of our bot system both for our reference and for Ergo Developers to learn from."),(0,a.kt)("h2",{id:"inputoutput"},"Input-Output"),(0,a.kt)("p",null,"Most systems takes in an Input, runs through a black box and produces an output."),(0,a.kt)("p",null,"In a tx bot system, it takes in Unspent Input Boxes as inputs, and outputs transactions that are sent to the blockchain for confirmation, which would then proceed to generate outputs that will then be used as Unspent Input Boxes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bot Tx Example",src:n(4446).Z,width:"776",height:"525"})),(0,a.kt)("h2",{id:"system-architecture"},"System Architecture"),(0,a.kt)("p",null,"In Exle's On-Chain system, we use a singleton design that exists to distribute tokens to correctly identify lend boxes and repayment boxes. This design though common, can become a bottleneck when it comes to processing transactions. This is because each transaction that involves distribution or absorption of a token requires the singleton box."),(0,a.kt)("p",null,"To address scalability issues, Exle Bot will utilize Ergo's chained transaction system to chain transactions together when processing transactions."),(0,a.kt)("h3",{id:"chaining-transactions"},"Chaining Transactions"),(0,a.kt)("p",null,"To properly chain transactions, we will have to ensure that the transactions are all lined up in a ",(0,a.kt)("strong",{parentName:"p"},"queue"),". This allows us to process each transaction and produce the required output transaction id and output service box as an unspent input box for the next transaction to be chained."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First gather all transactions that interacts with the singleton box."),(0,a.kt)("li",{parentName:"ol"},"Line the transaction requests up in a queue."),(0,a.kt)("li",{parentName:"ol"},"Cache the Singleton Box Cache by grabbing the singleton Input Box from the Ergo Blockchain."),(0,a.kt)("li",{parentName:"ol"},"Process the first transaction from the queue with required input boxes retrieved from the Blockchain, alongside the cached singleton box."),(0,a.kt)("li",{parentName:"ol"},"Sign and send the tx, and retrieve the Singleton Unspent Output Box, and cache it into the Singleton Box Cache."),(0,a.kt)("li",{parentName:"ol"},"[Optional]"," Cache the request to keep track of the requests that are processed."),(0,a.kt)("li",{parentName:"ol"},"Repeat step 4 & 5 till queue is empty.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Singleton Tx Bot",src:n(3650).Z,width:"821",height:"486"})),(0,a.kt)("h3",{id:"signing-txs"},"Signing Txs"),(0,a.kt)("p",null,"There exist the question of whether we should sign and send the tx in bulk after we finish processing, or do we sign and send right after processing the request."),(0,a.kt)("p",null,"Both are valid, however it would be simpler if we were to just sign and send the tx right after we process it to avoid tracking errors."))}d.isMDXComponent=!0},4446:function(e,t,n){t.Z=n.p+"assets/images/bot-tx-example-accc448847d961efb122765654283c72.png"},3650:function(e,t,n){t.Z=n.p+"assets/images/singleton-tx-bot-f961e39213879134205c740130cca741.png"}}]);