"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[7550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=a,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5,title:"Compte d'acc\xe8s"},o="Compte d'acc\xe8s",s={unversionedId:"theorie/windows/execution_administrateur",id:"theorie/windows/execution_administrateur",title:"Compte d'acc\xe8s",description:"Pour acc\xe9der \xe0 Windows, il faut sp\xe9cifier un utilisateur et un mot de passe. Chaque utilisateur a un type de compte.",source:"@site/docs/theorie/windows/05_execution_administrateur.md",sourceDirName:"theorie/windows",slug:"/theorie/windows/execution_administrateur",permalink:"/a23-1r1/theorie/windows/execution_administrateur",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Compte d'acc\xe8s"},sidebar:"tutorialSidebar",previous:{title:"Gestion des logiciels",permalink:"/a23-1r1/theorie/windows/gestion_logiciel"},next:{title:"Disposition du clavier",permalink:"/a23-1r1/theorie/windows/disposition_clavier"}},u={},c=[{value:"Ex\xe9cuter en tant qu&#39;administrateur",id:"ex\xe9cuter-en-tant-quadministrateur",level:2}],p={toc:c},l="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(l,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compte-dacc\xe8s"},"Compte d'acc\xe8s"),(0,a.kt)("p",null,"Pour acc\xe9der \xe0 ",(0,a.kt)("strong",{parentName:"p"},"Windows"),", il faut sp\xe9cifier un utilisateur et un mot de passe. Chaque utilisateur a un type de compte."),(0,a.kt)("p",null,"Il existe 2 types de compte d'acc\xe8s sous ",(0,a.kt)("strong",{parentName:"p"},"Windows"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Administrateur")),(0,a.kt)("p",{parentName:"li"},"Le compte administrateur a un acc\xe8s complet aux fonctionnalit\xe9s de ",(0,a.kt)("strong",{parentName:"p"},"Windows"),"."),(0,a.kt)("p",{parentName:"li"},"Il a un acc\xe8s complet \xe0 ",(0,a.kt)("strong",{parentName:"p"},"Windows"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Utilisateur")),(0,a.kt)("p",{parentName:"li"},"Le compte utilisateur a un acc\xe8s limit\xe9. Il est en mesure d'ex\xe9cuter des applications, mais ne peut pas en installer. "),(0,a.kt)("p",{parentName:"li"},"Certaines configurations et fonctionnalit\xe9s de ",(0,a.kt)("strong",{parentName:"p"},"Windows")," sont accessibles uniquement par un administrateur."))),(0,a.kt)("h2",{id:"ex\xe9cuter-en-tant-quadministrateur"},"Ex\xe9cuter en tant qu'administrateur"),(0,a.kt)("p",null,"Pour effectuer certaines actions, il faut ex\xe9cuter le programme en tant qu'administrateur, m\xeame si l'utilisateur en cours est administrateur de l'ordinateur. Cette action autorise ",(0,a.kt)("strong",{parentName:"p"},"Windows")," a faire des modifications significatives dans la configuration de ",(0,a.kt)("strong",{parentName:"p"},"Windows"),"."),(0,a.kt)("p",null,"Les images ci-dessous sont de ",(0,a.kt)("strong",{parentName:"p"},"Windows 10"),", mais le principe est identique avec ",(0,a.kt)("strong",{parentName:"p"},"Windows 11"),"."),(0,a.kt)("p",null,"En effectuant un clic droit sur un fichier ",(0,a.kt)("strong",{parentName:"p"},"ex\xe9cutable")," ou son raccourci, ",(0,a.kt)("strong",{parentName:"p"},"Windows")," propose l'option ",(0,a.kt)("strong",{parentName:"p"},"Ex\xe9cuter en tant qu'administrateur"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6236).Z,width:"399",height:"133"})),(0,a.kt)("p",null,"Dans le menu d\xe9marrer, l'option se retrouve sous l'\xe9l\xe9ment ",(0,a.kt)("strong",{parentName:"p"},"Plus"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1386).Z,width:"679",height:"308"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows")," demandera une confirmation."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(803).Z,width:"453",height:"332"})))}d.isMDXComponent=!0},6236:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},1386:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/admin_2-67bd9d1f14d1891fa765ba6024013633.png"},803:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/admin_3-f49b8e42225bf057879fd6e1b8f0c74e.png"}}]);