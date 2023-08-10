"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[8822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:8,title:"Outils de d\xe9tection"},o="Outils de d\xe9tection",l={unversionedId:"theorie/composante/outil_detection",id:"theorie/composante/outil_detection",title:"Outils de d\xe9tection",description:"Pour connaitre la configuration mat\xe9rielle d'un ordinateur, il n'est pas n\xe9cessaire d'ouvrir le boitier.",source:"@site/docs/theorie/composante/08_outil_detection.md",sourceDirName:"theorie/composante",slug:"/theorie/composante/outil_detection",permalink:"/a23-1r1/theorie/composante/outil_detection",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Outils de d\xe9tection"},sidebar:"tutorialSidebar",previous:{title:"Unite de stockage",permalink:"/a23-1r1/theorie/composante/memoire/stockage"},next:{title:"La loi du plus faible",permalink:"/a23-1r1/theorie/composante/loi_faible"}},s={},p=[{value:"\xc0 propos de, des param\xe8tres Windows",id:"\xe0-propos-de-des-param\xe8tres-windows",level:2},{value:"Application information syst\xe8me de Windows",id:"application-information-syst\xe8me-de-windows",level:2},{value:"WMIC",id:"wmic",level:2},{value:"HWiNFO",id:"hwinfo",level:2},{value:"Speccy",id:"speccy",level:2},{value:"CPU-Z",id:"cpu-z",level:2},{value:"BIOS",id:"bios",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"outils-de-d\xe9tection"},"Outils de d\xe9tection"),(0,i.kt)("p",null,"Pour connaitre la configuration mat\xe9rielle d'un ordinateur, il n'est pas n\xe9cessaire d'ouvrir le boitier."),(0,i.kt)("p",null,"Il est possible d'obtenir de l'information sur le mat\xe9riel \xe0 partir de ",(0,i.kt)("strong",{parentName:"p"},"Windows"),". Il existe \xe9galement des outils sp\xe9cialis\xe9s pour obtenir plus d'information."),(0,i.kt)("p",null,"Dans ce cours, l'outil ",(0,i.kt)("strong",{parentName:"p"},"HWInfo")," sera utilis\xe9 pour v\xe9rifier les configurations."),(0,i.kt)("h2",{id:"\xe0-propos-de-des-param\xe8tres-windows"},"\xc0 propos de, des param\xe8tres Windows"),(0,i.kt)("p",null,"Pour acc\xe9der \xe0 la page \xe0 propos, il faut aller dans ",(0,i.kt)("strong",{parentName:"p"},"Param\xe8tres -> Syst\xe8me -> \xc0 propos de"),"."),(0,i.kt)("p",null,"Voici un aper\xe7u de ",(0,i.kt)("strong",{parentName:"p"},"Windows 10"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(5002).Z,width:"1105",height:"879"})),(0,i.kt)("p",null,"Voici un aper\xe7u de ",(0,i.kt)("strong",{parentName:"p"},"Windows 11"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(1854).Z,width:"1275",height:"516"})),(0,i.kt)("p",null,"L'information est minimaliste, mais parfois obtenir la quantit\xe9 de m\xe9moire vive et le mod\xe8le du processeur est suffisant."),(0,i.kt)("h2",{id:"application-information-syst\xe8me-de-windows"},"Application information syst\xe8me de Windows"),(0,i.kt)("p",null,"Dans le menu d\xe9marrer, inscrivez ",(0,i.kt)("strong",{parentName:"p"},"informations syst\xe8me"),". Le chemin de l'ex\xe9cutable du logiciel se retrouve : ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"%windir%\\system32\\msinfo32.exe"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(1056).Z,width:"783",height:"642"})),(0,i.kt)("p",null,"Le logiciel permet de voir plus d'information, mais le niveau de d\xe9tail n'est pas parfait. \xc9galement, il peut \xeatre difficile de s'y retrouver."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(6e3).Z,width:"1176",height:"939"})),(0,i.kt)("h2",{id:"wmic"},"WMIC"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WMIC")," est un logiciel en invite de commandes qui permet de faire des requ\xeates au syst\xe8me d'exploitation par le ",(0,i.kt)("strong",{parentName:"p"},"Windows Management Infrastructure (WMI)"),". Il est possible d'obtenir de l'information sur le mat\xe9riel, les logiciels install\xe9s, la configuration de ",(0,i.kt)("strong",{parentName:"p"},"Windows"),"..."),(0,i.kt)("p",null,"Voici un exemple de requ\xeate pour obtenir de l'information sur la m\xe9moire vive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\> wmic MEMORYCHIP get BankLabel, DeviceLocator, Capacity, Speed\n\nBankLabel  Capacity     DeviceLocator  Speed\nBANK 0     17179869184  DIMM 1         3200\n")),(0,i.kt)("p",null,"Il est possible d'obtenir l'emplacement de la m\xe9moire vive sur la carte-m\xe8re et sa vitesse."),(0,i.kt)("p",null,"Par contre, il peut \xeatre difficile de s'y retrouver dans les requ\xeates. Mais il s'agit d'un outil tr\xe8s puissant. Il est possible d'interagir avec ",(0,i.kt)("strong",{parentName:"p"},"WMI")," par programmation."),(0,i.kt)("p",null,"Pour plus d'information sur ",(0,i.kt)("strong",{parentName:"p"},"WMI")," : ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-ca/windows/win32/wmisdk/wmi-start-page"},"https://docs.microsoft.com/fr-ca/windows/win32/wmisdk/wmi-start-page")),(0,i.kt)("h2",{id:"hwinfo"},"HWiNFO"),(0,i.kt)("p",null,"Ce logiciel est tr\xe8s complet. Il permet d'obtenir un rapport sommaire et un rapport d\xe9taill\xe9 de la configuration de l'ordinateur."),(0,i.kt)("p",null,"Par contre, ce logiciel est gratuit uniquement pour ",(0,i.kt)("strong",{parentName:"p"},"une utilisation personnelle"),". Il faut acheter une licence pour une utilisation en entreprise."),(0,i.kt)("p",null,"Pour t\xe9l\xe9charger le logiciel : ",(0,i.kt)("a",{parentName:"p",href:"https://www.hwinfo.com/download/"},"https://www.hwinfo.com/download/")),(0,i.kt)("p",null,"Lors du d\xe9marrage de l'application, ne cochez aucune option et appuyez sur le bouton ",(0,i.kt)("strong",{parentName:"p"},"D\xe9marrer"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8549).Z,width:"335",height:"168"})),(0,i.kt)("p",null,"Ensuite, il y aura 2 fen\xeatres. Le rapport r\xe9sum\xe9 et d\xe9taill\xe9."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3267).Z,width:"1424",height:"746"})),(0,i.kt)("p",null,"Le rapport r\xe9sum\xe9 permet de voir \xe9norm\xe9ment d'information sur une seule page. Il est plus facile de s'y retrouver dans le rapport d\xe9taill\xe9."),(0,i.kt)("p",null,"Ce sera le logiciel utilis\xe9 en classe pour faire les exercices de d\xe9tection. "),(0,i.kt)("h2",{id:"speccy"},"Speccy"),(0,i.kt)("p",null,"L'interface graphique de ",(0,i.kt)("strong",{parentName:"p"},"Speccy")," est plus simple \xe0 comprendre, mais l'information y est moins d\xe9taill\xe9e que ",(0,i.kt)("strong",{parentName:"p"},"HWiNFO"),"."),(0,i.kt)("p",null,"Par contre, ce logiciel est gratuit uniquement pour ",(0,i.kt)("strong",{parentName:"p"},"une utilisation personnelle"),". Il faut acheter une licence pour une utilisation en entreprise."),(0,i.kt)("p",null,"Version installable : ",(0,i.kt)("a",{parentName:"p",href:"https://www.ccleaner.com/fr-fr/speccy/download"},"https://www.ccleaner.com/fr-fr/speccy/download")),(0,i.kt)("p",null,"Version portable non officielle : ",(0,i.kt)("a",{parentName:"p",href:"https://portableapps.com/apps/utilities/specportable"},"https://portableapps.com/apps/utilities/specportable")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(4974).Z,width:"661",height:"526"})),(0,i.kt)("h2",{id:"cpu-z"},"CPU-Z"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CPU-Z")," est un logiciel enti\xe8rement gratuit. Il peut \xeatre utilis\xe9 en entreprise gratuitement."),(0,i.kt)("p",null,"Le logiciel fournit l'information sur le processeur, la carte-m\xe8re, la m\xe9moire vive et la carte graphique. Il est beaucoup plus limit\xe9 que les 2 autres logiciels, mais il a l'avantage d'\xeatre enti\xe8rement gratuit."),(0,i.kt)("p",null,"Pour t\xe9l\xe9charger. La version ",(0,i.kt)("strong",{parentName:"p"},"ZIP")," est une version portable : ",(0,i.kt)("a",{parentName:"p",href:"https://www.cpuid.com/softwares/cpu-z.html"},"https://www.cpuid.com/softwares/cpu-z.html")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3917).Z,width:"404",height:"400"})),(0,i.kt)("h2",{id:"bios"},"BIOS"),(0,i.kt)("p",null,"Le ",(0,i.kt)("strong",{parentName:"p"},"BIOS")," permet d'obtenir de l'information sur la configuration mat\xe9rielle. "),(0,i.kt)("p",null,"Chaque carte-m\xe8re a son propre ",(0,i.kt)("strong",{parentName:"p"},"BIOS"),", donc il est possible d'avoir beaucoup d'information ou tr\xe8s peu selon la carte-m\xe8re."))}d.isMDXComponent=!0},5002:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardwareinfo_1-3e2e897c72f137e7ff5735413c12816a.png"},1854:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardwareinfo_2-596d495c0fedf21b32e3dfe44355ae05.png"},1056:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardwareinfo_3-cd671eaafdfd6fd3852309a25f4dcc8b.png"},6e3:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardwareinfo_5-b6d5fd7796097e43c3ae01c57732d648.png"},8549:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardwareinfo_6-1b68c468dda9ab4e85eefad6934da703.png"},3267:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardwareinfo_7-dd17111ab675366e41ba1a278d0428ba.png"},4974:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardwareinfo_8-78df7c5a5332614af09c8a3892a64af9.png"},3917:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardwareinfo_9-2b59e740001c6a72ab59d6172e91a24f.png"}}]);