"use strict";(self.webpackChunkexle_docs=self.webpackChunkexle_docs||[]).push([[3495],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"slt-loan-tx-flow",title:"SLT Tx Flow",sidebar_position:2},u="SLT Tx Flow",p={unversionedId:"features/slt/slt-loan-tx-flow",id:"features/slt/slt-loan-tx-flow",title:"SLT Tx Flow",description:"This document describes the Tx flow for the SLT (Single Lender Token) implementation.",source:"@site/docs/features/slt/slt-tx-flow.md",sourceDirName:"features/slt",slug:"/features/slt/slt-loan-tx-flow",permalink:"/exle-docs/docs/features/slt/slt-loan-tx-flow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/slt/slt-tx-flow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"slt-loan-tx-flow",title:"SLT Tx Flow",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SLT Loans",permalink:"/exle-docs/docs/features/slt/"},next:{title:"System Architecture",permalink:"/exle-docs/docs/category/system-architecture"}},s={},c=[{value:"SLT Loan Creation",id:"sltloancreation",level:3},{value:"SLT Loan Funding",id:"sltloanfunding",level:3},{value:"SLT Loan Funded to Repayment",id:"sltloandunded",level:3},{value:"SLT Repayment Funding",id:"sltrepaymentfunding",level:3},{value:"SLT Repayment Payment to Lender",id:"sltrepaymenttolender",level:3},{value:"SLT Repayment Funded and Absorption",id:"sltrepaymentabsorption",level:3},{value:"SLT Loan Cancellation/Absorption",id:"sltloancancellation",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slt-tx-flow"},"SLT Tx Flow"),(0,a.kt)("p",null,"This document describes the Tx flow for the SLT (Single Lender Token) implementation."),(0,a.kt)("p",null,"To start off, these are the list of flow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"SLT Loan Creation"),(0,a.kt)("li",{parentName:"ol"},"SLT Loan Funding"),(0,a.kt)("li",{parentName:"ol"},"SLT Loan Funded to Repayment"),(0,a.kt)("li",{parentName:"ol"},"SLT Repayment Funding"),(0,a.kt)("li",{parentName:"ol"},"SLT Repayment Payment to Lender"),(0,a.kt)("li",{parentName:"ol"},"SLT Repayment Funded and Absorption"),(0,a.kt)("li",{parentName:"ol"},"SLT Loan Cancellation/Absorption")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sltloancreation"},"SLT Loan Creation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input Boxes                         Output Boxes\n----------------------------------------------------------\n1. SLT Service Box                  1. SLT Service Box\n2. Creation Proxy Contract          2. SLT Loan Box\n                                    3. Exle Service Fee\n")),(0,a.kt)("h3",{id:"sltloanfunding"},"SLT Loan Funding"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input Boxes                         Output Boxes\n----------------------------------------------------------\n1. SLT Loan Box                     1. SLT Loan Box\n2. Fund Loan Proxy Contract         \n")),(0,a.kt)("h3",{id:"sltloandunded"},"SLT Loan Funded to Repayment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input Boxes                         Output Boxes\n----------------------------------------------------------\n1. SLT Service Box                  1. SLT Service Box\n2. SLT Loan Box                     2. SLT Repayment Box\n                                    3. Funds to Borrower\n")),(0,a.kt)("h3",{id:"sltrepaymentfunding"},"SLT Repayment Funding"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input Boxes                         Output Boxes\n----------------------------------------------------------\n1. SLT Repayment Box                1. SLT Repayment Box\n2. Fund Repayment Proxy Contract         \n")),(0,a.kt)("h3",{id:"sltrepaymenttolender"},"SLT Repayment Payment to Lender"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input Boxes                         Output Boxes\n----------------------------------------------------------\n1. SLT Repayment Box                1. SLT Repayment Box\n2. Lender Extract Fee               2. Repayment to Lender\n                                    3. Exle Profit Sharing\n")),(0,a.kt)("h3",{id:"sltrepaymentabsorption"},"SLT Repayment Funded and Absorption"),(0,a.kt)("p",null,"When there is one last repayment left, we absorb the repayment box, repay the lender and distribute exle's profit sharing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input Boxes                         Output Boxes\n----------------------------------------------------------\n1. SLT Service Box                  1. SLT Service Box\n2. SLT Repayment Box                2. Repayment to Lender\n                                    3. Exle Profit Sharing\n")),(0,a.kt)("h3",{id:"sltloancancellation"},"SLT Loan Cancellation/Absorption"),(0,a.kt)("p",null,"If the loan box is never funded and its past the funding deadline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input Boxes                         Output Boxes\n----------------------------------------------------------\n1. SLT Service Box                  1. SLT Service Box\n2. SLT Loan Box\n")))}m.isMDXComponent=!0}}]);