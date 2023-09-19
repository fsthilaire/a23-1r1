"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[3140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:1,title:"Pr\xe9sentation de l'invite de commandes - Windows"},o="Pr\xe9sentation de l'invite de commandes - Windows",s={unversionedId:"theorie/cmd_windows/presentation",id:"theorie/cmd_windows/presentation",title:"Pr\xe9sentation de l'invite de commandes - Windows",description:"Introduction",source:"@site/docs/theorie/cmd_windows/01_presentation.md",sourceDirName:"theorie/cmd_windows",slug:"/theorie/cmd_windows/presentation",permalink:"/a23-1r1/theorie/cmd_windows/presentation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Pr\xe9sentation de l'invite de commandes - Windows"},sidebar:"tutorialSidebar",previous:{title:"Invite de commandes - Windows",permalink:"/a23-1r1/category/invite-de-commandes---windows"},next:{title:"Concepts de base",permalink:"/a23-1r1/theorie/cmd_windows/concept_base"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"1.1 Pourquoi avoir un Shell aujourd&#39;hui ?",id:"11-pourquoi-avoir-un-shell-aujourdhui-",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pr\xe9sentation-de-linvite-de-commandes---windows"},"Pr\xe9sentation de l'invite de commandes - Windows"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Tous les syst\xe8mes d'exploitation offrent un mode d'utilisation en invite de commandes. "),(0,i.kt)("p",null,"C'est un environnement de travail en mode texte uniquement. Les premiers syst\xe8mes d'exploitation n'avaient pas d'interface graphique."),(0,i.kt)("p",null,"Cet environnement de travail peut avoir plusieurs noms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shell")," en anglais. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CLI")," -> ",(0,i.kt)("strong",{parentName:"li"},"C"),"ommande ",(0,i.kt)("strong",{parentName:"li"},"L"),"ine ",(0,i.kt)("strong",{parentName:"li"},"I"),"nterface"),(0,i.kt)("li",{parentName:"ul"},"Terminal")),(0,i.kt)("p",null,"Sous ",(0,i.kt)("strong",{parentName:"p"},"Windows"),", le ",(0,i.kt)("strong",{parentName:"p"},"Shell")," se nomme ",(0,i.kt)("strong",{parentName:"p"},"Invite de commandes"),". Le programme pour y acc\xe9der est ",(0,i.kt)("strong",{parentName:"p"},"cmd.exe"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows")," r\xe9utilise la majorit\xe9 des commandes qui \xe9taient disponibles avec le syst\xe8me d'exploitation ",(0,i.kt)("strong",{parentName:"p"},"MS-DOS"),"."),(0,i.kt)("p",null,"Par d\xe9faut, l'invite de commandes s'ex\xe9cute en mode ",(0,i.kt)("strong",{parentName:"p"},"utilisateur"),". "),(0,i.kt)("p",null,"Si une action n\xe9cessite les droits administrateur, il faut d\xe9marrer le programme ",(0,i.kt)("strong",{parentName:"p"},"cmd.exe")," en tant qu'administrateur. Toutes les actions seront ex\xe9cut\xe9es avec les droits administrateur."),(0,i.kt)("p",null,"Il existe \xe9galement le logiciel ",(0,i.kt)("strong",{parentName:"p"},"PowerShell")," dans ",(0,i.kt)("strong",{parentName:"p"},"Windows")," qui permet l'utilisation des commandes. Toutes les commandes de base y sont pr\xe9sentes, mais il offre plus de possibilit\xe9s que le ",(0,i.kt)("strong",{parentName:"p"},"cmd.exe"),". Dans ce cours, seulement le ",(0,i.kt)("strong",{parentName:"p"},"cmd")," sera utilis\xe9."),(0,i.kt)("p",null,"L'image ci-dessous repr\xe9sente une fen\xeatre de l'invite de commandes."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(34010).Z,width:"820",height:"332"})),(0,i.kt)("h2",{id:"11-pourquoi-avoir-un-shell-aujourdhui-"},"1.1 Pourquoi avoir un Shell aujourd'hui ?"),(0,i.kt)("p",null,"Pour la majorit\xe9 des gens, l'utilisation du ",(0,i.kt)("strong",{parentName:"p"},"Shell")," n'est pas n\xe9cessaire."),(0,i.kt)("p",null,"Par contre, pour l'informaticien, il existe plusieurs avantages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Plus rapide")),(0,i.kt)("p",{parentName:"li"},"Il est possible de faire plusieurs actions plus rapidement par des commandes que par l'utilisation de l'interface graphique."),(0,i.kt)("p",{parentName:"li"},"L'utilisation de l'interface graphique demande l'ouverture de plusieurs fen\xeatres.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Automatiser des actions")),(0,i.kt)("p",{parentName:"li"},"Il est possible de regrouper plusieurs commandes et de les mettre dans un fichier script."),(0,i.kt)("p",{parentName:"li"},"Le fichier script est r\xe9utilisable."),(0,i.kt)("p",{parentName:"li"},"Le fichier script peut \xeatre utilis\xe9 par une personne ou par une t\xe2che automatis\xe9e.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cr\xe9ation de projets")),(0,i.kt)("p",{parentName:"li"},"Les cadriciels pour faire du d\xe9veloppement ont g\xe9n\xe9ralement des utilitaires en invite de commandes qui permettent la cr\xe9ation des coquilles des projets et des composants."))))}m.isMDXComponent=!0},34010:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cmd_intro-03ec3eee502c54b454772a75938d2e92.png"}}]);