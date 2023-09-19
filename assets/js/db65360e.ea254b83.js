"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[2833],{3905:(A,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>d});var r=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},i=Object.keys(A);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var o=r.createContext({}),u=function(A){var e=r.useContext(o),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},l=function(A){var e=u(A.components);return r.createElement(o.Provider,{value:e},A.children)},p="mdxType",g={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(A,e){var t=A.components,n=A.mdxType,i=A.originalType,o=A.parentName,l=s(A,["components","mdxType","originalType","parentName"]),p=u(t),f=n,d=p["".concat(o,".").concat(f)]||p[f]||g[f]||i;return t?r.createElement(d,a(a({ref:e},l),{},{components:t})):r.createElement(d,a({ref:e},l))}));function d(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=A,s[p]="string"==typeof A?A:n,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},38486:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(87462),n=(t(67294),t(3905));const i={sidebar_position:5,title:"Initialiser une unit\xe9 de stockage"},a="Initialiser une unit\xe9 de stockage",s={unversionedId:"procedures/windows/gestion_disque/initialiser_unite",id:"procedures/windows/gestion_disque/initialiser_unite",title:"Initialiser une unit\xe9 de stockage",description:"Pour \xeatre en mesure de cr\xe9er des partitions, il faut initialement initialiser l'unit\xe9 de stockage en MBR ou GPT.",source:"@site/docs/procedures/windows/gestion_disque/05_initialiser_unite.md",sourceDirName:"procedures/windows/gestion_disque",slug:"/procedures/windows/gestion_disque/initialiser_unite",permalink:"/a23-1r1/procedures/windows/gestion_disque/initialiser_unite",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Initialiser une unit\xe9 de stockage"},sidebar:"tutorialSidebar",previous:{title:"Identification de l'unit\xe9 de stockage",permalink:"/a23-1r1/procedures/windows/gestion_disque/identifier_style_partition"},next:{title:"Cr\xe9er une partition",permalink:"/a23-1r1/procedures/windows/gestion_disque/creer_partition"}},o={},u=[],l={toc:u},p="wrapper";function g(A){let{components:e,...i}=A;return(0,n.kt)(p,(0,r.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"initialiser-une-unit\xe9-de-stockage"},"Initialiser une unit\xe9 de stockage"),(0,n.kt)("p",null,"Pour \xeatre en mesure de cr\xe9er des partitions, il faut initialement initialiser l'unit\xe9 de stockage en ",(0,n.kt)("strong",{parentName:"p"},"MBR")," ou ",(0,n.kt)("strong",{parentName:"p"},"GPT"),"."),(0,n.kt)("p",null,"L'image ci-dessous repr\xe9sente une unit\xe9 non initialis\xe9e."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(68290).Z,width:"906",height:"711"})),(0,n.kt)("p",null,"Effectuez un clic-droit sur le num\xe9ro de disque. S\xe9lectionnez l'item ",(0,n.kt)("strong",{parentName:"p"},"Initialiser le disque"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(3376).Z,width:"898",height:"200"})),(0,n.kt)("p",null,"S\xe9lectionnez le style de partition (",(0,n.kt)("strong",{parentName:"p"},"GPT")," ou ",(0,n.kt)("strong",{parentName:"p"},"MBR"),") et appuyez sur le bouton ",(0,n.kt)("strong",{parentName:"p"},"OK"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(93707).Z,width:"400",height:"310"})),(0,n.kt)("p",null,"L'unit\xe9 de stockage est enti\xe8rement ",(0,n.kt)("strong",{parentName:"p"},"non allou\xe9e")," et il est en ligne. Ceci signifie que le disque est actuellement."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(36795).Z,width:"896",height:"110"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Si le disque est d\xe9j\xe0 initialis\xe9, il n'est pas possible de le r\xe9initialiser de nouveau \xe0 partir de ",(0,n.kt)("strong",{parentName:"p"},"Gestion du disque"),". Il faut supprimer chacune des partitions."),(0,n.kt)("p",{parentName:"admonition"},"Il arrive parfois que l'utilitaire ne soit pas en mesure de supprimer une partition."),(0,n.kt)("p",{parentName:"admonition"},"Il faut donc utiliser l'utilitaire en invite de commandes ",(0,n.kt)("strong",{parentName:"p"},"DiskPart")," pour r\xe9initialiser le disque.")))}g.isMDXComponent=!0},68290:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/init_disk_1-4e12dec79172dcb79d429f8bf858560d.png"},3376:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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i5Jgd5y/fDQuHq6MHL4dh+amhqZtt09H1IwsLvomIQAA0BQ2lUqlR11dXfllxczMTIyOjkZ/f39eQ63x8fHYsWNHdv7w4cPs+Kw895zszrNx7969GB4ejm3btkVbW1t23LJlS2zevDnvAQBAo5IqAAAACkYQBAAAKBhBEAAAoGAEwQaTrklUlPUsAAA0P0EQAACgYARBAACAghEEn1L6OQdFaaYCAEDz8199AAAABeOD8k8g/aA8FIEPygMANCdBcI386le/io8//jgmJibik08+ic8++8wOjDS8F198MV599dVobW2Nr3/961kQNH0UAKDxCYJr5De/+U388pe/jI8++ig7/va3v41Hjx7lrdCYvvrVr8Yrr7ySjQZ+7Wtfi+eff14QBABoAoLgGvn888+zMPjpp59mo4G/+93v8hZoXF/5yleyUcCXXnopC4Xp9aZNm/JWAAAalSC4RtJpoF988UUWANOj0UCaQRr60vCXrgtMS3otCAIAND5BcI1Ug9/CIzSyauhbeAQAoLEJggAAAAVj1wcAAICCEQQBAAAKRhAEAAAoGEEQAACgYARBAACAghEEAQAACkYQBAAAKBhBEAAAoGAEQQAAgIIRBAEAAApGEAQAACgYQRAAAKBgBEEAAICCEQQBAAAKRhAEAAAoGEEQAACgYARBAACAghEEAQAACkYQBAAAKBhBEAAAoGAEQQAAgIIRBAEAAApGEAQAACgYQRAAAKBgBEEAAICCEQQBAAAKRhAEAAAoGEEQAACgYARBAACAghEEAQAACkYQBAAAKBhBEAAAoFAi/j/C8semo1DkAQAAAABJRU5ErkJggg=="},93707:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/init_disk_3-cba5a9ab33727ad94cc7889082a6076b.png"},36795:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);