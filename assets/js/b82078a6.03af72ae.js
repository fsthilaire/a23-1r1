"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[2733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:4,title:"Monter une partition"},o="Monter une partition",s={unversionedId:"procedures/ubuntu/disques/monter_partition",id:"procedures/ubuntu/disques/monter_partition",title:"Monter une partition",description:"Sous Linux, pour que le contenue d'une partition soit accessible, elle doit \xeatre mont\xe9e vers un dossier.",source:"@site/docs/procedures/ubuntu/disques/04_monter_partition.md",sourceDirName:"procedures/ubuntu/disques",slug:"/procedures/ubuntu/disques/monter_partition",permalink:"/a23-1r1/procedures/ubuntu/disques/monter_partition",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Monter une partition"},sidebar:"tutorialSidebar",previous:{title:"Obtenir l'identifiant syst\xe8me d'une partition",permalink:"/a23-1r1/procedures/ubuntu/disques/identifier_partition"},next:{title:"GParted",permalink:"/a23-1r1/category/gparted"}},p={},u=[],l={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monter-une-partition"},"Monter une partition"),(0,i.kt)("p",null,"Sous ",(0,i.kt)("strong",{parentName:"p"},"Linux"),", pour que le contenue d'une partition soit accessible, elle doit \xeatre mont\xe9e vers un dossier."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"S\xe9lectionnez l'unit\xe9 de stockage qui contient la partition \xe0 monter dans la liste de gauche."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(24625).Z,width:"901",height:"246"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dans la section ",(0,i.kt)("strong",{parentName:"p"},"Volumes")," au centre, s\xe9lectionnez la partition \xe0 monter."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(10665).Z,width:"1217",height:"443"})))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"La partition s\xe9lectionn\xe9e est celle en orange."),(0,i.kt)("p",{parentName:"li"},"Dans l'exemple ci-dessous, c'est la partition ",(0,i.kt)("strong",{parentName:"p"},"Zone2")," qui est s\xe9lectionn\xe9e."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(28700).Z,width:"1217",height:"464"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Appuyez sur le bouton ",(0,i.kt)("strong",{parentName:"p"},"Triangle")," pour monter la partition."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(50527).Z,width:"1207",height:"464"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Le dossier de montage de la partition est indiqu\xe9 en jaune."),(0,i.kt)("p",{parentName:"li"},"Il est accessible par l'explorateur de fichiers ou en cliquant sur le lien."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(8088).Z,width:"1217",height:"440"})))))}d.isMDXComponent=!0},10665:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disques_10-0e6e51e61540d4e7648e3857b5bb50e5.png"},28700:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disques_11-32007209591aad38cf9e5cf397693198.png"},50527:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disques_12-5744c7d8eb2cc85ed2515543f88af76e.png"},8088:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disques_13-d6ad700a944698f13160d25971ad313e.png"},24625:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disques_9-4fbccebfd2410ed140eb0a659f11857c.png"}}]);