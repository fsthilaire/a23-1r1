"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[9071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:1,title:"Syst\xe8me d'exploitation de type UNIX"},s="Syst\xe8me d'exploitation de type UNIX",o={unversionedId:"theorie/linux/unix_like",id:"theorie/linux/unix_like",title:"Syst\xe8me d'exploitation de type UNIX",description:"UNIX est un syst\xe8me d\u2019exploitation cr\xe9\xe9 par Bell Labs dans les ann\xe9es 1970.",source:"@site/docs/theorie/linux/01_unix_like.md",sourceDirName:"theorie/linux",slug:"/theorie/linux/unix_like",permalink:"/a23-1r1/theorie/linux/unix_like",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Syst\xe8me d'exploitation de type UNIX"},sidebar:"tutorialSidebar",previous:{title:"Linux",permalink:"/a23-1r1/category/linux"},next:{title:"Pr\xe9sentation de Linux",permalink:"/a23-1r1/theorie/linux/presentation"}},l={},p=[],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"syst\xe8me-dexploitation-de-type-unix"},"Syst\xe8me d'exploitation de type UNIX"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UNIX")," est un syst\xe8me d\u2019exploitation cr\xe9\xe9 par ",(0,i.kt)("strong",{parentName:"p"},"Bell Labs")," dans les ann\xe9es 1970."),(0,i.kt)("p",null,"C\u2019est un syst\xe8me d\u2019exploitation multi-t\xe2che et multi-utilisateur."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multi-t\xe2che permet d\u2019avoir plusieurs processus en ex\xe9cution en m\xeame temps.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multi-utilisateur permet d\u2019avoir plusieurs utilisateurs connect\xe9s simultan\xe9ment au syst\xe8me d\u2019exploitation par des terminaux.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Windows 10 et Windows 11")," ne sont pas multi-utilisateurs au sens de cette d\xe9finition. Il permet d\u2019avoir plusieurs environnements utilisateurs, mais un seul peut utiliser l\u2019ordinateur \xe0 la fois. Il permet une gestion efficace des ressources et des acc\xe8s entre plusieurs processus et utilisateur. Les versions ",(0,i.kt)("strong",{parentName:"p"},"Serveur")," de ",(0,i.kt)("strong",{parentName:"p"},"Windows")," sont multi-utilisateurs."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UNIX")," est un syst\xe8me d\u2019exploitation en ligne de commande."),(0,i.kt)("p",null,"En anglais, le terme ",(0,i.kt)("strong",{parentName:"p"},"UNIX like OS")," est utilis\xe9."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UNIX")," est la base de plusieurs syst\xe8mes d\u2019exploitation ou de famille de syst\xe8mes d\u2019exploitation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GNU/Linux"),(0,i.kt)("li",{parentName:"ul"},"macOS"),(0,i.kt)("li",{parentName:"ul"},"BSD"),(0,i.kt)("li",{parentName:"ul"},"Solaris"),(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS")),(0,i.kt)("p",null,"Les syst\xe8mes d'exploitation ",(0,i.kt)("strong",{parentName:"p"},"UNIX like")," ont \xe9t\xe9 longtemps associ\xe9s aux environnements serveurs."),(0,i.kt)("p",null,"Aujourd'hui, ",(0,i.kt)("strong",{parentName:"p"},"Android"),", ",(0,i.kt)("strong",{parentName:"p"},"iOS")," et ",(0,i.kt)("strong",{parentName:"p"},"macOS")," sont tr\xe8s populaires pour les utilisateurs normaux et ils sont sur une base ",(0,i.kt)("strong",{parentName:"p"},"Unix"),"."),(0,i.kt)("p",null,"Voici une ligne du temps des diff\xe9rents syst\xe8mes d'exploitation"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(44548).Z,width:"952",height:"665"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source de l\u2019image")," : ",(0,i.kt)("a",{parentName:"p",href:"https://commons.wikimedia.org/wiki/File:Unix_timeline.en.svg"},"https://commons.wikimedia.org/wiki/File:Unix_timeline.en.svg")),(0,i.kt)("p",null,"Pour plus d'information sur les syst\xe8mes : ",(0,i.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Type_Unix"},"https://fr.wikipedia.org/wiki/Type_Unix")))}c.isMDXComponent=!0},44548:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/unix_timeline.en-749f13a529e89dd1d4cbc036df11e6a9.svg"}}]);