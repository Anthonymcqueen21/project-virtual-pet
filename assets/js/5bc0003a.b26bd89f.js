"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="System Block Diagram",s={unversionedId:"requirements/system-block-diagram",id:"requirements/system-block-diagram",title:"System Block Diagram",description:"Figure 1.",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-virtual-pet/docs/requirements/system-block-diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"Alexander-Russakoff",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-virtual-pet/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-virtual-pet/docs/requirements/general-requirements"}},c={},l=[{value:"Description",id:"description",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-block-diagram"},"System Block Diagram"),(0,a.kt)("img",{src:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/blob/main/documentation/resources/block-diagram31.jpg?raw=true",alt:"System Block Diagram"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Figure 1."),"\nHigh level design of the Virtual Pet Study Buddy application."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Our project stack will be composed of the following components: React for the front-end, Django for the back-end, and a combination of a SQLite Database with a schema defined and managed by Django and a Static File store for hosting images and other large files. "),(0,a.kt)("p",null,"These applications will be Dockerized and hosted on an Ubuntu Server instance, likely in the cloud. Our back-end will need to manage User Profiles, Avatars, Schedules, and required application state data. In addition, it will be responsible for managing communications with our Static File store and with external APIs such as Canvas LMS. Our middleware API will be specified in Django and exposed to our Front-end."),(0,a.kt)("p",null,"Our front-end will be responsible for presenting the graphical interface to our Users, and provide a portal for managing Profiles, Avatars, Assets, and SSO Authentications. This graphical interface will be served in-browser as a React website, combining HTML, CSS, and Javascript/Typescript to create a beautiful and intuitive environment that Users will be naturally attracted to."))}u.isMDXComponent=!0}}]);