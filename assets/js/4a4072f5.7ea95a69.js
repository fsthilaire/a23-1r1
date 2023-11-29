"use strict";(self.webpackChunk_1_r_1=self.webpackChunk_1_r_1||[]).push([[546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:13,title:"Semaine 13 (Groupe 5)"},l="Laboratoire de la semaine 13 (Groupe 5)",o={unversionedId:"laboratoires/semaine13_Gr5",id:"laboratoires/semaine13_Gr5",title:"Semaine 13 (Groupe 5)",description:"Dans ce laboratoire, vous allez faire des manipulations dans Ubuntu.",source:"@site/docs/laboratoires/13_semaine13_Gr5.md",sourceDirName:"laboratoires",slug:"/laboratoires/semaine13_Gr5",permalink:"/a23-1r1/laboratoires/semaine13_Gr5",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Semaine 13 (Groupe 5)"},sidebar:"tutorialSidebar",previous:{title:"Semaine 13 (Groupe 1, 2, 3 et 4)",permalink:"/a23-1r1/laboratoires/semaine13"},next:{title:"Semaine 5 - Gestion du disque",permalink:"/a23-1r1/exercices/semaine5_diskmgmt"}},s={},p=[{value:"1. D\xe9marrer Ubuntu",id:"1-d\xe9marrer-ubuntu",level:2},{value:"2. Ubuntu Software",id:"2-ubuntu-software",level:2},{value:"3. Snap",id:"3-snap",level:2},{value:"4. Apt",id:"4-apt",level:2},{value:"4.1. ifconfig",id:"41-ifconfig",level:3},{value:"4.2. hardinfo",id:"42-hardinfo",level:3},{value:"4.3. Libre Office",id:"43-libre-office",level:3},{value:"4.4. nautilus-admin",id:"44-nautilus-admin",level:3},{value:"5. GParted",id:"5-gparted",level:2},{value:"6. Utilitaire Disques",id:"6-utilitaire-disques",level:2},{value:"6.1. Partition TRAVAIL",id:"61-partition-travail",level:3},{value:"6.2. Partition BACKUP",id:"62-partition-backup",level:3},{value:"6.3. Partition SUPER",id:"63-partition-super",level:3},{value:"7. Terminal",id:"7-terminal",level:2},{value:"7.1. Partition TRAVAIL",id:"71-partition-travail",level:3},{value:"7.2. Partition BACKUP",id:"72-partition-backup",level:3},{value:"7.3. Partition SUPER",id:"73-partition-super",level:3},{value:"8. Nom de l&#39;ordinateur",id:"8-nom-de-lordinateur",level:2},{value:"8.1. Identification du nom de l&#39;ordinateur",id:"81-identification-du-nom-de-lordinateur",level:3},{value:"8.2. Renommer l&#39;ordinateur",id:"82-renommer-lordinateur",level:3},{value:"9. Monter une partition en ligne de commandes",id:"9-monter-une-partition-en-ligne-de-commandes",level:2},{value:"9.1 Obtenir l&#39;identifiant de la partition",id:"91-obtenir-lidentifiant-de-la-partition",level:3},{value:"9.2. Monter la partition",id:"92-monter-la-partition",level:3},{value:"10. R\xe9initialisation des disques",id:"10-r\xe9initialisation-des-disques",level:2},{value:"11. Installer Ubuntu",id:"11-installer-ubuntu",level:2},{value:"11.1. Installation",id:"111-installation",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"laboratoire-de-la-semaine-13-groupe-5"},"Laboratoire de la semaine 13 (Groupe 5)"),(0,r.kt)("p",null,"Dans ce laboratoire, vous allez faire des manipulations dans ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu"),"."),(0,r.kt)("p",null,"Une installation de base de ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu")," vous sera fournie."),(0,r.kt)("h2",{id:"1-d\xe9marrer-ubuntu"},"1. D\xe9marrer Ubuntu"),(0,r.kt)("p",null,"Ins\xe9rez le disque ",(0,r.kt)("strong",{parentName:"p"},'Samsung 250 Go SSD 2.5"')," dans le tiroir SATA."),(0,r.kt)("p",null,"Allez dans le ",(0,r.kt)("strong",{parentName:"p"},"BIOS"),"."),(0,r.kt)("p",null,"Dans la section ",(0,r.kt)("strong",{parentName:"p"},"System Configuration -> Drives")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\xe9rifiez que les ports ",(0,r.kt)("strong",{parentName:"li"},"M.2")," sont d\xe9sactiv\xe9s."),(0,r.kt)("li",{parentName:"ul"},"V\xe9rifiez que les ports ",(0,r.kt)("strong",{parentName:"li"},"SATA")," sont activ\xe9s."),(0,r.kt)("li",{parentName:"ul"},"V\xe9rifiez que le disque ",(0,r.kt)("strong",{parentName:"li"},'Samsung 250 Go SSD 2.5"')," est bien d\xe9tect\xe9.")),(0,r.kt)("p",null,"Dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Secure Boot -> Secure Boot Enable"),", v\xe9rifiez que la case ",(0,r.kt)("strong",{parentName:"p"},"Secure Boot Enable")," est d\xe9coch\xe9e."),(0,r.kt)("p",null,"Le compte utilisateur \xe0 utiliser est ",(0,r.kt)("strong",{parentName:"p"},"etudiant"),"."),(0,r.kt)("p",null,"Le mot de passe est ",(0,r.kt)("strong",{parentName:"p"},"Labo13!")),(0,r.kt)("h2",{id:"2-ubuntu-software"},"2. Ubuntu Software"),(0,r.kt)("p",null,"Utilisez le logiciel ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu Software")," pour installer les 2 logiciels ci-dessous."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GParted"),(0,r.kt)("li",{parentName:"ul"},"Discord")),(0,r.kt)("p",null,"V\xe9rifiez dans le menu que les logiciels sont bien pr\xe9sents."),(0,r.kt)("h2",{id:"3-snap"},"3. Snap"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Snap")," est un autre d\xe9p\xf4t en ligne. Pour acc\xe9der au catalogue de snap, il faut aller sur le site ",(0,r.kt)("a",{parentName:"p",href:"https://snapcraft.io/"},"https://snapcraft.io/")),(0,r.kt)("p",null,"Recherchez le logiciel \xe0 partir de l'outil de recherche."),(0,r.kt)("p",null,"Dans la fiche du logiciel, la commande ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"snap"))," \xe0 utiliser sera indiqu\xe9e."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vscode"),(0,r.kt)("li",{parentName:"ul"},"Notepad++")),(0,r.kt)("p",null,"V\xe9rifiez dans le menu que les logiciels sont bien pr\xe9sents."),(0,r.kt)("h2",{id:"4-apt"},"4. Apt"),(0,r.kt)("p",null,"L'utilitaire ",(0,r.kt)("strong",{parentName:"p"},"apt")," permet d'installer des logiciels \xe0 partir du ",(0,r.kt)("strong",{parentName:"p"},"terminal"),"."),(0,r.kt)("p",null,"Pour mettre \xe0 jour la liste des \xe9l\xe9ments disponibles dans le r\xe9pertoire ",(0,r.kt)("strong",{parentName:"p"},"apt"),", il faut faire la commande ci-dessous."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get update\n")),(0,r.kt)("h3",{id:"41-ifconfig"},"4.1. ifconfig"),(0,r.kt)("p",null,"Le premier logiciel \xe0 installer est ",(0,r.kt)("strong",{parentName:"p"},"ifconfig"),". Ce logiciel permet de voir l'information des cartes r\xe9seau. "),(0,r.kt)("p",null,"Pour installer le logiciel, tapez simplement ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ifconfig"))," pour obtenir la commande d'installation."),(0,r.kt)("p",null,"Une fois le programme install\xe9, tapez de nouveau ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ifconfig")),". "),(0,r.kt)("p",null,"Essayez de trouver l'adresse IP. L'adresse IP est une s\xe9rie de chiffres et s\xe9par\xe9e par des points. Ex :  127.0.0.1"),(0,r.kt)("h3",{id:"42-hardinfo"},"4.2. hardinfo"),(0,r.kt)("p",null,"Le logiciel ",(0,r.kt)("strong",{parentName:"p"},"hardinfo")," permet de voir l'information du mat\xe9riel de l'ordinateur. Il n'est pas aussi complet que ",(0,r.kt)("strong",{parentName:"p"},"hwinfo"),"."),(0,r.kt)("p",null,"Pour installer le logiciel, tapez simplement ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"hardinfo"))," pour obtenir la commande d'installation."),(0,r.kt)("p",null,"Le logiciel sera pr\xe9sent dans le menu d\xe9marrer sous le nom : ",(0,r.kt)("strong",{parentName:"p"},"Information du syst\xe8me"),". Il est possible d'y acc\xe9der directement du terminal en inscrivant : ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"hardinfo")),"."),(0,r.kt)("p",null,"Lorsque le logiciel est install\xe9, tapez de nouveau la commande ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"hardinfo"))," pour lancer le logiciel."),(0,r.kt)("p",null,"Testez ensuite la d\xe9sinstallation du logiciel."),(0,r.kt)("p",null,"Il faut taper la commande ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo apt remove --purge [nompackage]"))," pour faire la d\xe9sinstallation."),(0,r.kt)("p",null,"Lorsque le logiciel sera d\xe9sinstall\xe9, la commande ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"hardinfo"))," ne fonctionnera plus."),(0,r.kt)("h3",{id:"43-libre-office"},"4.3. Libre Office"),(0,r.kt)("p",null,"Le logiciel ",(0,r.kt)("strong",{parentName:"p"},"LibreOffice")," est une suite bureautique multi-plateforme gratuite."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install libreoffice\n")),(0,r.kt)("p",null,"V\xe9rifiez dans le menu que LibreOffice est bien pr\xe9sent."),(0,r.kt)("h3",{id:"44-nautilus-admin"},"4.4. nautilus-admin"),(0,r.kt)("p",null,"Le composant ",(0,r.kt)("strong",{parentName:"p"},"nautilus-admin")," permet d'avoir l'option d'ex\xe9cuter en tant qu'administrateur dans l'Explorateur de fichiers."),(0,r.kt)("p",null,"Ce composant d'installe \xe0 partir de ",(0,r.kt)("strong",{parentName:"p"},"apt"),"."),(0,r.kt)("p",null,"R\xe9f\xe9rez-vous \xe0 la proc\xe9dure dans les notes de cours ",(0,r.kt)("strong",{parentName:"p"},"Proc\xe9dures -> Ubuntu -> Explorateur de fichiers -> Mode administrateur -> Section 2"),"."),(0,r.kt)("h2",{id:"5-gparted"},"5. GParted"),(0,r.kt)("p",null,"\xc0 partir de ",(0,r.kt)("strong",{parentName:"p"},"GParted"),", cr\xe9ez les partitions ci-dessous sur l'espace restant du ",(0,r.kt)("strong",{parentName:"p"},'Samsung 250 Go SSD 2.5"'),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taille"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"\xc9tiquette"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15 Gio"),(0,r.kt)("td",{parentName:"tr",align:null},"FAT32"),(0,r.kt)("td",{parentName:"tr",align:null},"TRAVAIL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"55 Gio"),(0,r.kt)("td",{parentName:"tr",align:null},"NTFS"),(0,r.kt)("td",{parentName:"tr",align:null},"BACKUP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17 Gio"),(0,r.kt)("td",{parentName:"tr",align:null},"ext4"),(0,r.kt)("td",{parentName:"tr",align:null},"SUPER")))),(0,r.kt)("h2",{id:"6-utilitaire-disques"},"6. Utilitaire Disques"),(0,r.kt)("h3",{id:"61-partition-travail"},"6.1. Partition TRAVAIL"),(0,r.kt)("p",null,"Montez la partition ",(0,r.kt)("strong",{parentName:"p"},"TRAVAIL")," \xe0 partir de l'utilitaire ",(0,r.kt)("strong",{parentName:"p"},"Disques"),"."),(0,r.kt)("p",null,"\xc0 partir de l'Explorateur de fichiers, cr\xe9ez les dossiers ci-dessous \xe0 la racine de la partition ",(0,r.kt)("strong",{parentName:"p"},"TRAVAIL"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"1r1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"web1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"prog1")))),(0,r.kt)("p",null,"\xc0 partir du logiciel ",(0,r.kt)("strong",{parentName:"p"},"Editeur de texte"),", cr\xe9ez les fichiers ci-dessous \xe0 partir de la racine de la partition ",(0,r.kt)("strong",{parentName:"p"},"TRAVAIL"),". Veuillez mettre du texte dans chacun des documents."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"1r1/etudiant.txt"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"1r1/infopc.txt"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"web1/site.txt"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"prog1/java.log")))),(0,r.kt)("h3",{id:"62-partition-backup"},"6.2. Partition BACKUP"),(0,r.kt)("p",null,"Montez la partition ",(0,r.kt)("strong",{parentName:"p"},"BACKUP")," \xe0 partir de l'utilitaire ",(0,r.kt)("strong",{parentName:"p"},"Disques"),"."),(0,r.kt)("p",null,"\xc0 partir de l'Explorateur de fichiers, cr\xe9ez les dossiers ci-dessous \xe0 la racine de la partition ",(0,r.kt)("strong",{parentName:"p"},"BACKUP"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"documents/cegep"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"documents/perso/impot"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"document/perso/factures")))),(0,r.kt)("p",null,"\xc0 partir du logiciel ",(0,r.kt)("strong",{parentName:"p"},"Editeur de texte"),",  cr\xe9ez les fichiers ci-dessous \xe0 partir de la racine de la partition ",(0,r.kt)("strong",{parentName:"p"},"BACKUP"),". Veuillez mettre du texte dans chacun des documents."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"documents/cegep/notes.txt"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"documents/perso/impot/2021.tax"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"documents/perso/impot/2022.tax"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"document/perso/factures/steam_2023.lst"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"document/perso/factures/steam_2024.lst")))),(0,r.kt)("h3",{id:"63-partition-super"},"6.3. Partition SUPER"),(0,r.kt)("p",null,"Montez la partition ",(0,r.kt)("strong",{parentName:"p"},"SUPER")," \xe0 partir de l'utilitaire ",(0,r.kt)("strong",{parentName:"p"},"Disques"),"."),(0,r.kt)("p",null,"\xc0 partir de l'Explorateur de fichiers, cr\xe9ez les dossiers ci-dessous \xe0 la racine de la partition ",(0,r.kt)("strong",{parentName:"p"},"SUPER"),"."),(0,r.kt)("p",null,"Utilisez ",(0,r.kt)("strong",{parentName:"p"},"nautilus")," en mode administrateur."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"IMPOSSIBLE")))),(0,r.kt)("p",null,"\xc0 partir du logiciel ",(0,r.kt)("strong",{parentName:"p"},"Editeur de texte"),",  cr\xe9ez le fichier ci-dessous \xe0 partir de la racine de la partition ",(0,r.kt)("strong",{parentName:"p"},"SUPER"),". Veuillez mettre du texte dans le document."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"reussir.txt")))),(0,r.kt)("p",null,"Copiez les fichiers ci-dessous dans le dossier ",(0,r.kt)("strong",{parentName:"p"},"IMPOSIBLE"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"/etc/fstab"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"/etc/hosts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"etc/passwd")))),(0,r.kt)("h2",{id:"7-terminal"},"7. Terminal"),(0,r.kt)("p",null,"Pour les actions ci-dessous, utilisez le terminal."),(0,r.kt)("h3",{id:"71-partition-travail"},"7.1. Partition TRAVAIL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Changez le dossier de travail pour la partition ",(0,r.kt)("strong",{parentName:"p"},"TRAVAIL"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Affichez le contenu de la racine de la partition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez le dossier ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ordi"))," \xe0 la racine de la partition ",(0,r.kt)("strong",{parentName:"p"},"TRAVAIL"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copiez le fichier ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"1r1/etudiant.txt"))," dans le dossier ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ordi")),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Renommez le fichier ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"1r1/etudiant.txt"))," pour ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"1r1/student.txt")),"."))),(0,r.kt)("h3",{id:"72-partition-backup"},"7.2. Partition BACKUP"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Changez le dossier de travail pour la partition ",(0,r.kt)("strong",{parentName:"li"},"BACKUP"),"."),(0,r.kt)("li",{parentName:"ol"},"Affichez le contenu de la racine de la partition."),(0,r.kt)("li",{parentName:"ol"},"Cr\xe9ez le dossier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Important"))," \xe0 la racine de la partition ",(0,r.kt)("strong",{parentName:"li"},"BACKUP"),"."),(0,r.kt)("li",{parentName:"ol"},"Copiez le fichier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"1r1/student.txt"))," de la partition ",(0,r.kt)("strong",{parentName:"li"},"TRAVAIL")," dans le dossier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Important"))," de la partition ",(0,r.kt)("strong",{parentName:"li"},"BACKUP"),"."),(0,r.kt)("li",{parentName:"ol"},"Supprimez le fichier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"documents/cegep/notes.txt"))," "),(0,r.kt)("li",{parentName:"ol"},"Supprimez le dossier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"documents")))),(0,r.kt)("h3",{id:"73-partition-super"},"7.3. Partition SUPER"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Changez le dossier de travail pour la partition ",(0,r.kt)("strong",{parentName:"li"},"SUPER"),"."),(0,r.kt)("li",{parentName:"ol"},"Cr\xe9ez le dossier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"cmd")),"."),(0,r.kt)("li",{parentName:"ol"},"Copiez le fichier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"/etc/fstab"))," dans le dossier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"cmd")),".")),(0,r.kt)("h2",{id:"8-nom-de-lordinateur"},"8. Nom de l'ordinateur"),(0,r.kt)("h3",{id:"81-identification-du-nom-de-lordinateur"},"8.1. Identification du nom de l'ordinateur"),(0,r.kt)("p",null,"\xc0 l'aide du terminal, d\xe9terminez le nom de l'ordinateur."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"R\xe9ponse")),(0,r.kt)("div",null,"Le nom de l'ordinateur est : etudiant-Optiplex-7080")),(0,r.kt)("h3",{id:"82-renommer-lordinateur"},"8.2. Renommer l'ordinateur"),(0,r.kt)("p",null,"Vous devez renommer l'ordinateur pour ",(0,r.kt)("strong",{parentName:"p"},"PC-Tb#"),". Remplacez le ",(0,r.kt)("strong",{parentName:"p"},"#")," par le num\xe9ro de votre table."),(0,r.kt)("p",null,"Pour renommer l'ordinateur, vous devez modifier le fichier ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"/etc/hostname"))," en mode administrateur."),(0,r.kt)("p",null,"Utilisez l'",(0,r.kt)("strong",{parentName:"p"},"\xc9diteur de texte")," en mode administrateur."),(0,r.kt)("p",null,"Red\xe9marrez l'ordinateur et retournez dans le terminal pour v\xe9rifier la modification."),(0,r.kt)("h2",{id:"9-monter-une-partition-en-ligne-de-commandes"},"9. Monter une partition en ligne de commandes"),(0,r.kt)("p",null,"Avant de proc\xe9der, d\xe9montez les partitions ",(0,r.kt)("strong",{parentName:"p"},"TRAVAIL"),", ",(0,r.kt)("strong",{parentName:"p"},"BACKUP")," et ",(0,r.kt)("strong",{parentName:"p"},"SUPER")," \xe0 partir de l'utilitaire ",(0,r.kt)("strong",{parentName:"p"},"Disques"),"."),(0,r.kt)("p",null,"Pour \xeatre en mesure de monter les partitions, il faut connaitre le nom syst\xe8me qui repr\xe9sente la partition. Le nom d\xe9bute par ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"/dev/sd")),"."),(0,r.kt)("p",null,"Cr\xe9ez les dossiers ci-dessous dans le profil utilisateur."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"~/acces/TRAVAIL"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"~/acces/BACKUP"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"~/acces/SUPER")))),(0,r.kt)("p",null,"Il est possible d'avoir l'identifiant de la partition \xe0 partir de ",(0,r.kt)("strong",{parentName:"p"},"GParted "),"ou de ",(0,r.kt)("strong",{parentName:"p"},"Disques"),", mais voici comment le faire en ligne de commandes."),(0,r.kt)("p",null,"La premi\xe8re \xe9tape est de trouver l'identifiant pour les partitions ",(0,r.kt)("strong",{parentName:"p"},"TRAVAIL"),", ",(0,r.kt)("strong",{parentName:"p"},"BACKUP")," et ",(0,r.kt)("strong",{parentName:"p"},"SUPER"),". (Explication \xe0 la section 9.1)"),(0,r.kt)("p",null,"Vous devez monter les partitions vers les dossiers suivants. (Explication \xe0 la section 9.2)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Partition ",(0,r.kt)("strong",{parentName:"li"},"TRAVAIL")," vers le dossier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"~/acces/TRAVAIL"))),(0,r.kt)("li",{parentName:"ul"},"Partition ",(0,r.kt)("strong",{parentName:"li"},"BACKUP")," vers le dossier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"~/acces/BACKUP"))),(0,r.kt)("li",{parentName:"ul"},"Partition ",(0,r.kt)("strong",{parentName:"li"},"SUPER")," vers le dossier ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"~/acces/SUPER")))),(0,r.kt)("h3",{id:"91-obtenir-lidentifiant-de-la-partition"},"9.1 Obtenir l'identifiant de la partition"),(0,r.kt)("p",null,"Les identifiants des disques internes d\xe9butent par ",(0,r.kt)("strong",{parentName:"p"},"sd"),"."),(0,r.kt)("p",null,"Pour le voir en ligne de commandes, vous devez utiliser la commande ci-dessous. Le visuel est un peu moins convivial. Le param\xe8tre ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"-f"))," permet d'obtenir le ",(0,r.kt)("strong",{parentName:"p"},"syst\xe8me de fichiers")," et le ",(0,r.kt)("strong",{parentName:"p"},"nom de la partition"),", mais la taille n'est pas indiqu\xe9e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lsblk -f\n")),(0,r.kt)("p",null,"Voici un exemple de r\xe9sultat. La partition qui nous int\xe9resse dans cet exemple est la partition ",(0,r.kt)("strong",{parentName:"p"},"DEVOIR")," de ",(0,r.kt)("strong",{parentName:"p"},"10 Gio")," et qui utilise ",(0,r.kt)("strong",{parentName:"p"},"NTFS")," comme syst\xe8me de fichiers. L'identifiant de la partition est ",(0,r.kt)("strong",{parentName:"p"},"sdb1")," (ligne 18), mais il n'est pas possible de confirmer la taille avec le param\xe8tre ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"-f")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex",metastring:"showLineNumbers",showLineNumbers:!0},"NAME   FSTYPE   LABEL   UUID                                 FSAVAIL FSUSE% MOUNTPOINT\nloop0  squashfs                                                    0   100% /snap/bare/5\nloop1  squashfs                                                    0   100% /snap/core20/2015\nloop2  squashfs                                                    0   100% /snap/core22/864\nloop3  squashfs                                                    0   100% /snap/gnome-3-38-2004/115\nloop4  squashfs                                                    0   100% /snap/core20/1611\nloop5  squashfs                                                    0   100% /snap/gnome-3-38-2004/143\nloop6  squashfs                                                    0   100% /snap/gtk-common-themes/1535\nloop7  squashfs                                                    0   100% /snap/snap-store/558\nloop8  squashfs                                                    0   100% /snap/snap-store/959\nloop9  squashfs                                                    0   100% /snap/snapd/20092\nloop10 squashfs                                                    0   100% /snap/gnome-42-2204/141\nloop11                                                             0   100% /snap/snapd/20290\nsda                                                                         \n\u251c\u2500sda1 vfat             9B1D-4D61                             504,9M     1% /boot/efi\n\u2514\u2500sda2 ext4             267d4d32-25b6-4e73-96a2-a1aa9ceca3d5   26,5G    26% /\nsdb                                                                         \n// highlight-next-line\n\u2514\u2500sdb1 ntfs     DEVOIR  46BD52C51A7A57D5                                    \nsr0    udf      DVD_ROM 112a00004d532055                           0   100% /media/admin1r1/DVD_ROM1\n")),(0,r.kt)("p",null," Le param\xe8tre ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"-a"))," permet d'obtenir la ",(0,r.kt)("strong",{parentName:"p"},"taille"),", mais le ",(0,r.kt)("strong",{parentName:"p"},"nom de la partition")," et le ",(0,r.kt)("strong",{parentName:"p"},"syst\xe8me de fichiers")," ne sont pas indiqu\xe9s."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lsblk -a\n")),(0,r.kt)("p",null,"Voici un exemple de r\xe9sultat. La partition qui nous int\xe9resse dans cet exemple est la partition ",(0,r.kt)("strong",{parentName:"p"},"DEVOIR")," de ",(0,r.kt)("strong",{parentName:"p"},"10 Gio")," et qui utilise ",(0,r.kt)("strong",{parentName:"p"},"NTFS")," comme syst\xe8me de fichiers. L'identifiant de la partition est ",(0,r.kt)("strong",{parentName:"p"},"sdb1")," (ligne 19), mais il n'est pas possible de confirmer le syst\xe8me de fichiers et le nom de la partition avec le param\xe8tre ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"-a")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex",metastring:"showLineNumbers",showLineNumbers:!0},"NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nloop0    7:0    0     4K  1 loop /snap/bare/5\nloop1    7:1    0  63,5M  1 loop /snap/core20/2015\nloop2    7:2    0  73,9M  1 loop /snap/core22/864\nloop3    7:3    0 346,3M  1 loop /snap/gnome-3-38-2004/115\nloop4    7:4    0    62M  1 loop /snap/core20/1611\nloop5    7:5    0 349,7M  1 loop /snap/gnome-3-38-2004/143\nloop6    7:6    0  91,7M  1 loop /snap/gtk-common-themes/1535\nloop7    7:7    0  54,2M  1 loop /snap/snap-store/558\nloop8    7:8    0  12,3M  1 loop /snap/snap-store/959\nloop9    7:9    0  40,9M  1 loop /snap/snapd/20092\nloop10   7:10   0   497M  1 loop /snap/gnome-42-2204/141\nloop11   7:11   0  40,9M  1 loop /snap/snapd/20290\nloop12   7:12   0         0 loop \nsda      8:0    0    40G  0 disk \n\u251c\u2500sda1   8:1    0   512M  0 part /boot/efi\n\u2514\u2500sda2   8:2    0  39,5G  0 part /\nsdb      8:16   0    25G  0 disk \n// highlight-next-line\n\u2514\u2500sdb1   8:17   0    10G  0 part \nsr0     11:0    1 515,8M  0 rom  /media/admin1r1/DVD_ROM1\n")),(0,r.kt)("p",null,"Il est possible de faire un filtre en utilisant la commande ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"grep"))," pour afficher uniquement les lignes qui contiennent ",(0,r.kt)("strong",{parentName:"p"},"sd"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lsblk -f | grep sd\nlsblk -a | grep sd\n")),(0,r.kt)("h3",{id:"92-monter-la-partition"},"9.2. Monter la partition"),(0,r.kt)("p",null,"La commande ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo mount")),". Comme premier param\xe8tre, il faut mettre le nom syst\xe8me de la partition et comme deuxi\xe8me param\xe8tre le dossier de montage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo mount [id partition] [dossier montage]\n")),(0,r.kt)("p",null,"Dans le cas de la partition en exemple ",(0,r.kt)("strong",{parentName:"p"},"DEVOIR"),", il faudrait utiliser la commande ci-dessous. Il faudrait que le dossier ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"~/acces/DEVOIR"))," soit cr\xe9\xe9 avant de proc\xe9der."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo mount /dev/sdb1 /home/etudiant/acces/DEVOIR\n")),(0,r.kt)("p",null,"Pour d\xe9monter une partition, il faut utiliser la commande ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo umount")),". Le premier param\xe8tre est le nom syst\xe8me de la partition."),(0,r.kt)("p",null,"Exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo umount [id partition]\n")),(0,r.kt)("h2",{id:"10-r\xe9initialisation-des-disques"},"10. R\xe9initialisation des disques"),(0,r.kt)("p",null,"D\xe9marrez l'ordinateur avec ",(0,r.kt)("strong",{parentName:"p"},"Windows PE"),"."),(0,r.kt)("p",null,"Utilisez ",(0,r.kt)("strong",{parentName:"p"},"diskpart")," pour r\xe9initialiser le disque ",(0,r.kt)("strong",{parentName:"p"},'Samsung 250 Go SSD 2.5"')," en ",(0,r.kt)("strong",{parentName:"p"},"GPT"),"."),(0,r.kt)("h2",{id:"11-installer-ubuntu"},"11. Installer Ubuntu"),(0,r.kt)("p",null,"Si le temps vous le permet, installez ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu")," le disque ",(0,r.kt)("strong",{parentName:"p"},'Samsung 250 Go SSD 2.5"')," en ",(0,r.kt)("strong",{parentName:"p"},"GPT"),"."),(0,r.kt)("h3",{id:"111-installation"},"11.1. Installation"),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"R\xe9f\xe9rez-vous \xe0 la proc\xe9dure qui se retrouve dans la section ",(0,r.kt)("strong",{parentName:"p"},"Proc\xe9dures -> Installation de syst\xe8me d'exploitation -> Ubuntu 22.04"),".")),(0,r.kt)("p",null,"D\xe9marrez l'ordinateur avec le ",(0,r.kt)("strong",{parentName:"p"},"ISO")," de ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu"),"."),(0,r.kt)("p",null,"Vous devez installer le syst\xe8me d'exploitation en fonction des \xe9l\xe9ments ci-dessous."),(0,r.kt)("p",null,"S\xe9lectionnez l'option ",(0,r.kt)("strong",{parentName:"p"},"Installation minimale")," et ne t\xe9l\xe9chargez pas les mises \xe0 jour pendant l'installation."),(0,r.kt)("p",null,"Voici les param\xe8tres pour l'installation. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nom de l'ordinateur")," : LinuxTb#\t\t\tRemplacez le # par le num\xe9ro de table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Votre nom")," : Inscrivez votre nom. Pour les \xe9quipes, inscrivez seulement un seul nom."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nom d'utilisateur")," : admin1r1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mot de passe")," : Labo13!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Langue")," : Fran\xe7ais"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disposition du clavier : ")," Fran\xe7ais (Canada)"))}d.isMDXComponent=!0}}]);