"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[2301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2,title:"Obtenir l'identifiant syst\xe8me d'une unit\xe9 de stockage"},s="Obtenir l'identifiant syst\xe8me d'une unit\xe9 de stockage",o={unversionedId:"procedures/ubuntu/disques/identifier_unite_stockage",id:"procedures/ubuntu/disques/identifier_unite_stockage",title:"Obtenir l'identifiant syst\xe8me d'une unit\xe9 de stockage",description:"Sous Linux, les unit\xe9s de stockage ont un identifiant syst\xe8me.",source:"@site/docs/procedures/ubuntu/disques/02_identifier_unite_stockage.md",sourceDirName:"procedures/ubuntu/disques",slug:"/procedures/ubuntu/disques/identifier_unite_stockage",permalink:"/a23-1r1/procedures/ubuntu/disques/identifier_unite_stockage",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Obtenir l'identifiant syst\xe8me d'une unit\xe9 de stockage"},sidebar:"tutorialSidebar",previous:{title:"Acc\xe9der \xe0 l'utilitaire Disques",permalink:"/a23-1r1/procedures/ubuntu/disques/acceder_disques"},next:{title:"Obtenir l'identifiant syst\xe8me d'une partition",permalink:"/a23-1r1/procedures/ubuntu/disques/identifier_partition"}},u={},c=[],l={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"obtenir-lidentifiant-syst\xe8me-dune-unit\xe9-de-stockage"},"Obtenir l'identifiant syst\xe8me d'une unit\xe9 de stockage"),(0,i.kt)("p",null,"Sous ",(0,i.kt)("strong",{parentName:"p"},"Linux"),", les unit\xe9s de stockage ont un identifiant syst\xe8me."),(0,i.kt)("p",null,"L'identifiant syst\xe8me est comme ceci : ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/dev/sd@")),". Le ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"@"))," correspond \xe0 une lettre."),(0,i.kt)("p",null,"Pour faire des actions sur les unit\xe9s de stockage, il est possible que seulement l'identifiant syst\xe8me soit affich\xe9 dans le logiciel."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Trouvez dans la liste de gauche l'unit\xe9 de stockage. Un aper\xe7u du nom du mod\xe8le est disponible dans la section de gauche."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(75989).Z,width:"1606",height:"488"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Vous pouvez avoir le nom au complet du mod\xe8le lorsque le disque est s\xe9lectionn\xe9."),(0,i.kt)("p",{parentName:"li"},"En ",(0,i.kt)("strong",{parentName:"p"},"jaune"),", c'est le mod\xe8le."),(0,i.kt)("p",{parentName:"li"},"En ",(0,i.kt)("strong",{parentName:"p"},"bleu"),", c'est sa taille."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(19400).Z,width:"1605",height:"485"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"L'identifiant du disque se retrouve dans la barre du haut de l'application."),(0,i.kt)("p",{parentName:"li"},"Dans cet exemple, le ",(0,i.kt)("strong",{parentName:"p"},"Micron")," a comme identifiant ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/dev/sdb")),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(94938).Z,width:"1605",height:"485"})))))}p.isMDXComponent=!0},75989:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disques_5-a7e4d8d4ece5f03370a33c6d8a04896f.png"},19400:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disques_6-ec49b2bf58993a300faf25d041ecaeb7.png"},94938:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disques_7-c143641caa07610593dc1f2fc93ab840.png"}}]);