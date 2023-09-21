"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[7977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),o=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=o(n),k=r,c=d["".concat(s,".").concat(k)]||d[k]||m[k]||a;return n?l.createElement(c,i(i({ref:t},p),{},{components:n})):l.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<a;o++)i[o]=n[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},49641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var l=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5,title:"Semaine 5 - Gestion du disque"},i="Exercice de la semaine 5 - Cours th\xe9orique",u={unversionedId:"exercices/semaine5_diskmgmt",id:"exercices/semaine5_diskmgmt",title:"Semaine 5 - Gestion du disque",description:"Vous devez ins\xe9rer le disque SSD dans le tiroir de l'ordinateur du laboratoire.",source:"@site/docs/exercices/01_semaine5_diskmgmt.md",sourceDirName:"exercices",slug:"/exercices/semaine5_diskmgmt",permalink:"/a23-1r1/exercices/semaine5_diskmgmt",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Semaine 5 - Gestion du disque"},sidebar:"tutorialSidebar",previous:{title:"Semaine 5",permalink:"/a23-1r1/laboratoires/semaine5"}},s={},o=[{value:"1. Acc\xe8s \xe0 Gestion du disque",id:"1-acc\xe8s-\xe0-gestion-du-disque",level:2},{value:"2. Cr\xe9ation des disques virtuels",id:"2-cr\xe9ation-des-disques-virtuels",level:2},{value:"3. Exercices",id:"3-exercices",level:2},{value:"3.1 Identification de la taille des disques",id:"31-identification-de-la-taille-des-disques",level:3},{value:"3.2 Identification des syst\xe8mes de fichiers",id:"32-identification-des-syst\xe8mes-de-fichiers",level:3},{value:"3.3 Espace non allou\xe9",id:"33-espace-non-allou\xe9",level:3},{value:"3.4 Identifiez le style de partition",id:"34-identifiez-le-style-de-partition",level:3},{value:"3.5 Renommer une partition",id:"35-renommer-une-partition",level:3},{value:"3.6 Modifier une lettre",id:"36-modifier-une-lettre",level:3},{value:"3.7 Retirer une lettre",id:"37-retirer-une-lettre",level:3},{value:"3.8 Cr\xe9er des partitions",id:"38-cr\xe9er-des-partitions",level:3},{value:"3.9 Supprimer une partition",id:"39-supprimer-une-partition",level:3},{value:"3.10 Augmenter la taille d&#39;une partition",id:"310-augmenter-la-taille-dune-partition",level:3},{value:"3.11 Initialiser un disque",id:"311-initialiser-un-disque",level:3},{value:"3.12 Cr\xe9ation des partitions en mode MBR",id:"312-cr\xe9ation-des-partitions-en-mode-mbr",level:3},{value:"3.13 Cr\xe9ation des partitions en mode GPT",id:"313-cr\xe9ation-des-partitions-en-mode-gpt",level:3},{value:"3.14 Cr\xe9ation d&#39;une partition en FAT32",id:"314-cr\xe9ation-dune-partition-en-fat32",level:3}],p={toc:o},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercice-de-la-semaine-5---cours-th\xe9orique"},"Exercice de la semaine 5 - Cours th\xe9orique"),(0,r.kt)("p",null,"Vous devez ins\xe9rer le disque SSD dans le tiroir de l'ordinateur du laboratoire."),(0,r.kt)("p",null,"Dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Ventoy"),", vous devez prendre ",(0,r.kt)("strong",{parentName:"p"},"W11_1R1_A23_1.vhd"),"."),(0,r.kt)("p",null,"Il s'agit d'une image d'une unit\xe9 de stockage qui a ",(0,r.kt)("strong",{parentName:"p"},"Windows 11"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ventoy")," est en mesure d'ex\xe9cuter un syst\xe8me d'exploitation \xe0 partir d'un fichier ",(0,r.kt)("strong",{parentName:"p"},"VHD"),". Le fichier ",(0,r.kt)("strong",{parentName:"p"},"VHD")," est consid\xe9r\xe9 comme un disque virtuel."),(0,r.kt)("p",null,"Pour vous aider \xe0 faire les exercices, r\xe9f\xe9rez-vous \xe0 la section ",(0,r.kt)("strong",{parentName:"p"},"Proc\xe9dures -> Windows -> Gestion des disques")," des notes de cours."),(0,r.kt)("admonition",{title:"Avertissement",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"L'ordinateur du laboratoire n'a pas acc\xe8s \xe0 internet. "),(0,r.kt)("p",{parentName:"admonition"},"Utilisez votre portable pour acc\xe9der aux notes de cours.")),(0,r.kt)("h2",{id:"1-acc\xe8s-\xe0-gestion-du-disque"},"1. Acc\xe8s \xe0 Gestion du disque"),(0,r.kt)("p",null,"Dans ",(0,r.kt)("strong",{parentName:"p"},"Windows"),", acc\xe9dez \xe0 ",(0,r.kt)("strong",{parentName:"p"},"Gestion du disque"),"."),(0,r.kt)("p",null,"Vous allez voir cette section."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3363).Z,width:"1587",height:"205"})),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Il est important de ne faire aucune manipulation sur le ",(0,r.kt)("strong",{parentName:"p"},"Disque 0")," et le ",(0,r.kt)("strong",{parentName:"p"},"Disque 1"),", car ce sont les disques qui contient ",(0,r.kt)("strong",{parentName:"p"},"Ventoy")," et ",(0,r.kt)("strong",{parentName:"p"},"Windows"),".")),(0,r.kt)("h2",{id:"2-cr\xe9ation-des-disques-virtuels"},"2. Cr\xe9ation des disques virtuels"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ne fermez pas")," la fen\xeatre de ",(0,r.kt)("strong",{parentName:"p"},"Gestion du disque"),"."),(0,r.kt)("p",null,"Vous devez ex\xe9cuter, ",(0,r.kt)("strong",{parentName:"p"},"en tant qu'administrateur"),", le script ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"c:\\exercices\\cours5\\Depart.bat"))," pour cr\xe9er les disques virtuels."),(0,r.kt)("p",null,"Dans la fen\xeatre de ",(0,r.kt)("strong",{parentName:"p"},"Gestion du disque"),", vous allez voir 6  nouveaux disques. Les disques ",(0,r.kt)("strong",{parentName:"p"},"2 \xe0 7")," sont ajout\xe9s comme dans l'image ci-dessous."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(83852).Z,width:"1552",height:"607"})),(0,r.kt)("h2",{id:"3-exercices"},"3. Exercices"),(0,r.kt)("h3",{id:"31-identification-de-la-taille-des-disques"},"3.1 Identification de la taille des disques"),(0,r.kt)("p",null,"Identifiez la taille des disques #2 \xe0 #7."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"Disque 2 : 100.00 Go",(0,r.kt)("br",null),"Disque 3 : 49.98 Go",(0,r.kt)("br",null),"Disque 4 : 34.98 Go",(0,r.kt)("br",null),"Disque 5 : 80.00 Go",(0,r.kt)("br",null),"Disque 6 : 40.00 Go",(0,r.kt)("br",null),"Disque 7 : 40.00 Go",(0,r.kt)("br",null)),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_31.png"}))),(0,r.kt)("h3",{id:"32-identification-des-syst\xe8mes-de-fichiers"},"3.2 Identification des syst\xe8mes de fichiers"),(0,r.kt)("p",null,"Pour les disques #2 et #3, trouvez le nom des partitions pour chacun des types de syst\xe8me de fichiers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"NTFS")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"PART3",(0,r.kt)("br",null),"PART4",(0,r.kt)("br",null),"PART5 ",(0,r.kt)("br",null)),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_32_ntfs.png"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FAT32")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"PART1",(0,r.kt)("br",null),"PART6",(0,r.kt)("br",null)),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_32_fat32.png"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"exFAT")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"PART2",(0,r.kt)("br",null)),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_32_exfat.png"}))))),(0,r.kt)("h3",{id:"33-espace-non-allou\xe9"},"3.3 Espace non allou\xe9"),(0,r.kt)("p",null,"Pour les disques #2 et #3, d\xe9terminez l'espace qui n'est pas allou\xe9."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Disque 2")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"36.00 Go"),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_33_d2.png"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Disque 3")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"24.98 Go"),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_33_d3.png"}))))),(0,r.kt)("h3",{id:"34-identifiez-le-style-de-partition"},"3.4 Identifiez le style de partition"),(0,r.kt)("p",null,"Pour les disques #2 \xe0 #5, trouvez le style de partition."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Disque 2")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"MBR (Enregistrement de d\xe9marrage principal)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Disque 3")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"GPT"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Disque 4")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"GPT"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Disque 5")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"MBR (Enregistrement de d\xe9marrage principal)")))),(0,r.kt)("h3",{id:"35-renommer-une-partition"},"3.5 Renommer une partition"),(0,r.kt)("p",null,"Renommez les partitions du disque #3."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PART5")," doit devenir ",(0,r.kt)("strong",{parentName:"li"},"ZONE5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PART6")," doit devenir ",(0,r.kt)("strong",{parentName:"li"},"ZONE6"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_35.png"}))),(0,r.kt)("h3",{id:"36-modifier-une-lettre"},"3.6 Modifier une lettre"),(0,r.kt)("p",null,"Modifiez la lettre de la partition ",(0,r.kt)("strong",{parentName:"p"},"PART3")," pour la lettre ",(0,r.kt)("strong",{parentName:"p"},"G"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_36.png"}))),(0,r.kt)("h3",{id:"37-retirer-une-lettre"},"3.7 Retirer une lettre"),(0,r.kt)("p",null,"Retirez la lettre de la partition ",(0,r.kt)("strong",{parentName:"p"},"PART1"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_37.png"}))),(0,r.kt)("h3",{id:"38-cr\xe9er-des-partitions"},"3.8 Cr\xe9er des partitions"),(0,r.kt)("p",null,"Pensez \xe0 convertir les ",(0,r.kt)("strong",{parentName:"p"},"Go")," en ",(0,r.kt)("strong",{parentName:"p"},"Mo")," avec le facteur 1024, car c'est ",(0,r.kt)("strong",{parentName:"p"},"Windows"),"."),(0,r.kt)("p",null,"Sur le disque #4, cr\xe9ez les partitions ci-dessous."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Syst\xe8me de fichiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Taille"),(0,r.kt)("th",{parentName:"tr",align:null},"Lettre"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INFO"),(0,r.kt)("td",{parentName:"tr",align:null},"FAT32"),(0,r.kt)("td",{parentName:"tr",align:null},"1,5 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATA"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"17 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BACKUP"),(0,r.kt)("td",{parentName:"tr",align:null},"FAT32"),(0,r.kt)("td",{parentName:"tr",align:null},"Espace restant"),(0,r.kt)("td",{parentName:"tr",align:null},"O")))),(0,r.kt)("p",null,"Vous devez voir la m\xeame chose que l'image ci-dessous."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_38.png"}))),(0,r.kt)("h3",{id:"39-supprimer-une-partition"},"3.9 Supprimer une partition"),(0,r.kt)("p",null,"Supprimez la partition ",(0,r.kt)("strong",{parentName:"p"},"PART4")," du disque #2."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_39.png"}))),(0,r.kt)("h3",{id:"310-augmenter-la-taille-dune-partition"},"3.10 Augmenter la taille d'une partition"),(0,r.kt)("p",null,"Augmentez la taille de la partition ",(0,r.kt)("strong",{parentName:"p"},"PART3")," du disque #2 pour avoir uniquement ",(0,r.kt)("strong",{parentName:"p"},"1 Go")," de non allou\xe9."),(0,r.kt)("p",null,"D\xe9terminez la quantit\xe9 \xe0 ajouter."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Il reste 47 101 Mo de disponible pour augmenter la partition."),(0,r.kt)("p",null,"Pour avoir 1 Go de non allou\xe9, il faut soustraire 1024."),(0,r.kt)("p",null,"47 101 - 1 024 = 46 077 Mo")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_310.png"}))),(0,r.kt)("h3",{id:"311-initialiser-un-disque"},"3.11 Initialiser un disque"),(0,r.kt)("p",null,"Les disques #6 et #7 ont 40 Go."),(0,r.kt)("p",null,"Initialisez le disque #6 en ",(0,r.kt)("strong",{parentName:"p"},"MBR"),"."),(0,r.kt)("p",null,"Initialisez le disque #7 en ",(0,r.kt)("strong",{parentName:"p"},"GPT"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_311.png"}))),(0,r.kt)("h3",{id:"312-cr\xe9ation-des-partitions-en-mode-mbr"},"3.12 Cr\xe9ation des partitions en mode MBR"),(0,r.kt)("p",null,"Cr\xe9ez les partitions ci-dessous sur le disque #6."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Syst\xe8me de fichiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Taille"),(0,r.kt)("th",{parentName:"tr",align:null},"Lettre"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P1"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"Z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P2"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P3"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P4"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P5"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"Espace restant"),(0,r.kt)("td",{parentName:"tr",align:null},"T")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_312.png"})),(0,r.kt)("p",null,"Pourquoi les partitions ",(0,r.kt)("b",null,"P4")," et ",(0,r.kt)("b",null,"P5")," ont une couleur diff\xe9rente ? En mode ",(0,r.kt)("b",null,"MBR"),", c'est un maximum de 4 partitions primaires. Dans le cas qu'une 5e partition est n\xe9cessaire en mode ",(0,r.kt)("b",null,"MBR"),", il faut cr\xe9er une partition ",(0,r.kt)("b",null,"\xe9tendue"),". Windows est en mesure de travailler avec des partitions ",(0,r.kt)("b",null,"\xe9tendues"),", mais il est pr\xe9f\xe9rable d'utiliser le mode ",(0,r.kt)("b",null,"GTP")," lorsqu'il y a plus de 4 partitions \xe0 cr\xe9er.")),(0,r.kt)("h3",{id:"313-cr\xe9ation-des-partitions-en-mode-gpt"},"3.13 Cr\xe9ation des partitions en mode GPT"),(0,r.kt)("p",null,"Retirez les lettres de lecteurs pour chacune des partitions du disque #6."),(0,r.kt)("p",null,"Cr\xe9ez les partitions ci-dessous sur le disque #7."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Syst\xe8me de fichiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Taille"),(0,r.kt)("th",{parentName:"tr",align:null},"Lettre"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P1"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"Z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P2"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P3"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P4"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"8 Go"),(0,r.kt)("td",{parentName:"tr",align:null},"W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P5"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"Espace restant"),(0,r.kt)("td",{parentName:"tr",align:null},"T")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"../img/exercices/cours5/cours5_rep_313.png"})),(0,r.kt)("p",null,"Le mode ",(0,r.kt)("b",null,"GPT")," permet de cr\xe9er jusqu'\xe0 128 partitions.")),(0,r.kt)("h3",{id:"314-cr\xe9ation-dune-partition-en-fat32"},"3.14 Cr\xe9ation d'une partition en FAT32"),(0,r.kt)("p",null,"Cr\xe9ez une seule partition en ",(0,r.kt)("strong",{parentName:"p"},"FAT32")," sur le disque #5. La partition doit avoir ",(0,r.kt)("strong",{parentName:"p"},"80 Go"),"."),(0,r.kt)("p",null,"Seulement ",(0,r.kt)("strong",{parentName:"p"},"NTFS")," et ",(0,r.kt)("strong",{parentName:"p"},"exFAT")," sont disponibles. Pourquoi ?"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,(0,r.kt)("p",null,"La taille maximale d'une partition ",(0,r.kt)("b",null,"FAT32")," est de ",(0,r.kt)("b",null,"32 Go"),"."),(0,r.kt)("p",null,"Essayez avec une taille de ",(0,r.kt)("b",null,"32769 Mo (32,001 Go)"),". Le ",(0,r.kt)("b",null,"FAT32")," n'est pas disponible."),(0,r.kt)("p",null,"Essayez avec une taille de ",(0,r.kt)("b",null,"32768 Mo (32 Go)"),". Le ",(0,r.kt)("b",null,"FAT32")," est disponible."))))}m.isMDXComponent=!0},3363:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/cours5_1-46e5ae507d6ef128b9891a2d88942ff1.png"},83852:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/cours5_2-5e6302ee896f4093ada0304fae762244.png"}}]);