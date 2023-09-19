"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[9623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:9,title:"La loi du plus faible"},i="La loi du plus faible",l={unversionedId:"theorie/composante/loi_faible",id:"theorie/composante/loi_faible",title:"La loi du plus faible",description:"En \xe9lectronique, c'est toujours le plus faible qui gagne.",source:"@site/docs/theorie/composante/09_loi_faible.md",sourceDirName:"theorie/composante",slug:"/theorie/composante/loi_faible",permalink:"/a23-1r1/theorie/composante/loi_faible",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"La loi du plus faible"},sidebar:"tutorialSidebar",previous:{title:"Outils de d\xe9tection",permalink:"/a23-1r1/theorie/composante/outil_detection"},next:{title:"Partition et syst\xe8me de fichiers",permalink:"/a23-1r1/theorie/partition_sf"}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"la-loi-du-plus-faible"},"La loi du plus faible"),(0,a.kt)("p",null,"En \xe9lectronique, c'est toujours le plus faible qui gagne."),(0,a.kt)("p",null,"Les composantes doivent communiquer entre elles. Entre 2 composantes, il faut d\xe9terminer la vitesse de transfert. M\xeame si la premi\xe8re pi\xe8ce est ultra rapide, elle devra attendre la pi\xe8ce ultra lente, car cette derni\xe8re ne peut pas aller plus rapidement."),(0,a.kt)("p",null,"Prenez par exemple une cl\xe9 ",(0,a.kt)("strong",{parentName:"p"},"USB 3.0"),". Si elle est branch\xe9e dans un port ",(0,a.kt)("strong",{parentName:"p"},"USB 2.0"),", le port peut communiquer uniquement \xe0 60 Mo/s. M\xeame si la cl\xe9 \xe0 le potentiel d'atteindre une vitesse de 652 Mo/s, elle doit attendre."),(0,a.kt)("p",null,"\xc0 l'inverse, une cl\xe9 ",(0,a.kt)("strong",{parentName:"p"},"USB 2.0")," qui est connect\xe9e dans un port ",(0,a.kt)("strong",{parentName:"p"},"USB 3.0")," sera \xe9galement limit\xe9e \xe0 60 Mo/s, car la cl\xe9 ne peut pas aller plus vite."),(0,a.kt)("p",null,"Un autre exemple est le port ",(0,a.kt)("strong",{parentName:"p"},"SATA"),". Le disque dur ",(0,a.kt)("strong",{parentName:"p"},"HDD")," et le disque ",(0,a.kt)("strong",{parentName:"p"},"SSD")," utilisent le m\xeame port de communication. Mais le ",(0,a.kt)("strong",{parentName:"p"},"HDD")," est beaucoup plus lent par sa conception. Il n'est pas en mesure d'exploiter le plein potentiel du ",(0,a.kt)("strong",{parentName:"p"},"SATA"),". \xc0 l'inverse, la m\xe9moire ",(0,a.kt)("strong",{parentName:"p"},"Flash")," du ",(0,a.kt)("strong",{parentName:"p"},"SSD")," est souvent limit\xe9e par le ",(0,a.kt)("strong",{parentName:"p"},"SATA"),". Un disque ",(0,a.kt)("strong",{parentName:"p"},"NVMe")," est connect\xe9 dans un port ",(0,a.kt)("strong",{parentName:"p"},"PCI-E"),". La m\xe9moire flash n'est plus limit\xe9e par la vitesse du port."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Il arrive souvent qu'un ordinateur haute-performance utilise quelques pi\xe8ces bas de gamme par souci d'\xe9conomie."),(0,a.kt)("p",{parentName:"admonition"},"Il est important de s'assurer que la pi\xe8ce bas de gamme diminuera la performance de la pi\xe8ce haut de gamme. "),(0,a.kt)("p",{parentName:"admonition"},"Le cas classique est la m\xe9moire vive. Il y a 2 barrettes rapides et 2 plus lentes. Les 2 rapides iront \xe0 la vitesse la plus lente. Donc l'argent d\xe9pens\xe9 en plus pour les 2 barrettes rapides n'est pas r\xe9ellement bien investi.")))}m.isMDXComponent=!0}}]);