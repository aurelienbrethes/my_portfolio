(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],[,,,,,,,,,function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},,function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){"use strict";t.r(o);var i=t(1),n=t.n(i),s=t(4),a=t.n(s),c=(t(9),t(2)),r=(t(10),t(11),t.p+"static/media/logo_homepage.3f63b274.gif"),A=(t(12),t(0));var q=function(e){var o=e.labelButton;return Object(A.jsx)("div",{children:Object(A.jsx)("button",{className:"homeButton",type:"button",children:o})})};var l=function(){return Object(A.jsxs)("div",{className:"home_container",id:"home",children:[Object(A.jsx)("img",{src:r,alt:"aurelien brethes logo"}),Object(A.jsx)("nav",{className:"buttons_container",children:[{id:1,labelButton:"A Propos",buttonLink:"#about"},{id:2,labelButton:"Mes Projets",buttonLink:"#projects"},{id:3,labelButton:"Mes Skills",buttonLink:"#skills"},{id:4,labelButton:"Contactez-moi",buttonLink:"#contact"}].map((function(e){return Object(A.jsx)("a",{href:e.buttonLink,children:Object(A.jsx)(q,{labelButton:e.labelButton},e.id)},e.id)}))})]})},m=(t(14),t(15),t(16),t.p+"static/media/cross.0be76b16.png"),j=function(e){var o=e.titre,t=e.image,i=e.description,n=e.tech,s=e.setShowModal,a=e.link,c="displayNone";return"Blind Crash Test"===o&&(c=""),Object(A.jsx)("div",{className:"close_modal",role:"button",onClick:function(){s(!1)},children:Object(A.jsxs)("div",{className:"modal_container",onClick:function(e){var o;(o=e).stopPropagation(o)},children:[Object(A.jsx)("h3",{children:o}),Object(A.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:Object(A.jsx)("img",{src:t,id:"logo_project",alt:"logo du projet"})}),Object(A.jsx)("p",{children:i}),Object(A.jsx)("div",{className:c,children:Object(A.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://cors-anywhere.herokuapp.com/corsdemo",children:"Lien d'activation"})}),Object(A.jsx)("h3",{children:"Tech utilis\xe9es"}),Object(A.jsx)("p",{children:n}),Object(A.jsx)("img",{src:m,alt:"cross",id:"cross",onClick:function(){return s(!1)}})]})})};var d=function(e){var o=e.titre,t=e.tech,n=e.image,s=e.description,a=e.link,r=Object(i.useState)(!1),q=Object(c.a)(r,2),l=q[0],m=q[1];return Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"mini_card",children:[Object(A.jsx)("h3",{children:o}),Object(A.jsx)("img",{src:n,alt:"logo du projet"}),Object(A.jsx)("button",{type:"button",onClick:function(){l||m(!0)},children:"En savoir plus"})]}),Object(A.jsx)("div",{className:l?"modal":"displayNone",children:Object(A.jsx)(j,{titre:o,image:n,tech:t,description:s,setShowModal:m,link:a})})]})},g=(t.p,t.p+"static/media/liveup_logo.29deb507.png"),b=t.p+"static/media/cogebois_logo.1f2a3d3b.png",u=t.p+"static/media/bct_logo.ffa44ea0.png";var h=function(){var e=Object(i.useState)(!1),o=Object(c.a)(e,2),t=o[0],n=o[1],s=[{titre:"Cogebois",image:b,link:"https://cogebois.com/",tech:"No-code, Wordpress",description:"Site vitrine pour une entreprise de construction de maisons bois. R\xe9alis\xe9 en no-code avec Wordpress ( et le template Avada ). Optimis\xe9 SEO \xe0 la demande du client"},{titre:"Blind Crash Test",image:u,link:"https://marie5060.github.io/Blind-Crash-Test/",tech:"React.js",description:"Premi\xe8re exp\xe9rience avec React.js, le but \xe9tait de cr\xe9er un site en utilisant l'appel \xe0 un API. Nous avons choisi celui de Deezer et avons cod\xe9 notre propre Blind-test."},{titre:"Live Up",image:g,link:"https://aurelienbrethes.github.io/Liveup/",tech:"React.js, mySQL",description:"Live Up est le fruit de notre premier Hackathon. En groupe de 6, nous devions cr\xe9er un site sur le th\xe8me de la musique en seulement 30h (sans sommeil \xe9videmment). Nous avons con\xe7u ce projet pour permettre \xe0 des utilisateurs en qu\xeate d'\xe9v\xe8nements musicaux proches de chez eux de trouver rapidement ce que proposent organisateurs les plus proches. Site r\xe9alis\xe9 avec React.js avec cr\xe9ation de notre propre API. La limite de temps impos\xe9e explique que le site n'est pas termin\xe9, et que la propret\xe9 du code laisse \xe0 d\xe9sirer sur certaines parties. Nous feront mieux au prochain ! "}];return Object(A.jsxs)("div",{className:"carousel_container",id:"projects",onClick:function(){return n(!0)},children:[Object(A.jsx)("h1",{children:"Mes Projets"}),Object(A.jsx)("div",{className:"cards_container",children:s.map((function(e,o){return Object(A.jsx)("div",{children:Object(A.jsx)(d,{titre:e.titre,image:e.image,tech:e.tech,description:e.description,close:t,link:e.link,setClose:n})},o)}))})]})},C=(t(17),t.p+"static/media/fleche.1ab2a6e0.gif");var p=function(){return Object(A.jsxs)("div",{className:"about_container",id:"about",children:[Object(A.jsx)("h1",{children:"Bienvenue sur mon Portfolio"}),Object(A.jsxs)("section",{className:"card_container",children:[Object(A.jsxs)("p",{children:["Ce site a pour but de me pr\xe9senter bri\xe8vement et de r\xe9f\xe9rencer tous mes projets. Il sera r\xe9guli\xe8rement mis \xe0 jour, et \xe9voluera au rythme de mon acquisition de comp\xe9tences. ",Object(A.jsx)("br",{}),"Je m'appelle Aur\xe9lien Brethes, j'ai 29 ans, et je suis actuellement une formation de d\xe9veloppeur web et web mobile au sein de la ",Object(A.jsx)("a",{href:"https://www.wildcodeschool.com/fr-FR",children:"Wild Code School de Biarritz"}),". De technicien en \xe9lectronique \xe0 technico-commercial, j'ai pass\xe9 10 ans \xe0 chercher ma voie, accumulant les exp\xe9riences, aussi vari\xe9es que formatrices. Attir\xe9 depuis toujours par le num\xe9rique et les nouvelles technologies, et apr\xe8s un an de travail en autodidacte, j'ai d\xe9cid\xe9 de rejoindre une formation s\xe9rieuse dans une \xe9cole renomm\xe9e afin de faire de ma nouvelle passion mon futur m\xe9tier."]}),Object(A.jsx)("a",{href:"#stage",children:Object(A.jsx)("img",{src:C,alt:"fleche vers le bas"})})]}),Object(A.jsx)("span",{className:"card_container",id:"stage",children:"Dans le cadre de mon \xe9volution professionnelle, je suis actuellement \xe0 la recherche d'un stage \xe0 partir de Mars 2022 en remote, ou en pr\xe9sentiel sur le secteur 40/64."})]})},K=(t(18),t.p+"static/media/js.5f349f8b.png"),O=t.p+"static/media/vanilla.bb166d19.png",f=t.p+"static/media/react.c46a6334.png",v=t.p+"static/media/nodejs.17c6df3f.png",J=t.p+"static/media/github.0e1fa1cf.png",V=t.p+"static/media/vscode.b90918d2.png",N=t.p+"static/media/postman.3dcc1a41.png";var x=function(){return Object(A.jsxs)("div",{className:"skills_container",id:"skills",children:[Object(A.jsx)("h1",{children:"Technologies utilis\xe9es"}),Object(A.jsxs)("div",{className:"column_container",children:[Object(A.jsxs)("aside",{className:"aside_container",children:[Object(A.jsx)("h2",{children:"Front-end"}),Object(A.jsxs)("div",{className:"logo_container",children:[Object(A.jsx)("img",{src:O,id:"vanilla",alt:"vanilla"}),Object(A.jsx)("img",{src:f,alt:"react"})]})]}),Object(A.jsxs)("aside",{className:"aside_container",children:[Object(A.jsx)("h2",{children:"Back-end"}),Object(A.jsxs)("div",{className:"logo_container",children:[Object(A.jsx)("img",{src:K,alt:"js"}),Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"mysql"}),Object(A.jsx)("img",{src:v,alt:"node js",id:"nodejs"})]})]}),Object(A.jsxs)("aside",{className:"aside_container",children:[Object(A.jsx)("h2",{children:"Outils"}),Object(A.jsxs)("div",{className:"logo_container",children:[Object(A.jsx)("img",{src:V,alt:"vscode"}),Object(A.jsx)("img",{src:N,alt:"postman"}),Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"trello"}),Object(A.jsx)("img",{src:J,alt:"github"})]})]})]})]})},Z=(t(19),t.p+"static/media/ab_cv.58798177.pdf");var k=function(){return Object(A.jsxs)("div",{className:"contact_container",id:"contact",children:[Object(A.jsx)("h1",{children:"Contactez-moi !"}),Object(A.jsx)("section",{className:"card_container",id:"contact_card",children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)("li",{children:["email : ",Object(A.jsx)("a",{href:"mailto:aurelienbrethes@gmail.com ",children:" aurelienbrethes@gmail.com"})]}),Object(A.jsxs)("li",{children:["tel : ",Object(A.jsx)("a",{href:"tel:+0752668535",children:" 07 52 66 85 35"})]}),Object(A.jsxs)("li",{children:["GitHub : ",Object(A.jsx)("a",{target:"_blank",className:"contact_link",href:" https://github.com/aurelienbrethes",children:"Lien Github"})]}),Object(A.jsxs)("li",{children:["LinkedIn : ",Object(A.jsx)("a",{target:"_blank",className:"contact_link",href:" https://www.linkedin.com/in/aur%C3%A9lien-brethes-134178169/",children:"Lien LinkedIn"})]}),Object(A.jsxs)("li",{children:["Mon CV : ",Object(A.jsx)("a",{href:Z,download:!0,children:"Cliquez ici pour t\xe9l\xe9charger"})]})]})})]})},z=(t(20),t.p+"static/media/logo_header.79166b4f.gif");t(21);var G=function(e){var o=e.showLinks,t=e.setShowLinks,i="burger-line";return o&&(i+=" active"),Object(A.jsx)("div",{className:"navbar-burger",children:Object(A.jsx)("button",{type:"button",onClick:function(){return t(!o)},children:Object(A.jsx)("span",{className:i})})})};t(22);var y=function(e){var o=e.showLinks;return Object(A.jsxs)("ul",{className:o?"navlist":"navbar",children:[Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#home",children:"Accueil"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#about",children:"A propos"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#projects",children:"Mes Projets"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#skills",children:"Mes Skills"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#contact",children:"Contactez-moi"})})]})};var w=function(e){var o=e.wheel,t=Object(i.useState)(!1),n=Object(c.a)(t,2),s=n[0],a=n[1];return Object(A.jsxs)("div",{className:o?"header_container":"header_hide",children:[Object(A.jsx)("a",{href:"#home",children:Object(A.jsx)("img",{src:z,alt:"aurelien brethes logo",id:"logo_header"})}),Object(A.jsx)(y,{className:"navigation_component",showLinks:s}),Object(A.jsx)(G,{showLinks:s,setShowLinks:a,className:"burger_component"})]})};var I=function(){var e=Object(i.useState)(!1),o=Object(c.a)(e,2),t=o[0],n=o[1];return Object(A.jsxs)("div",{className:"App",onWheel:function(e){return function(e){e.deltaY<0?n(!0):e.deltaY>0&&n(!1)}(e)},children:[Object(A.jsx)("header",{children:Object(A.jsx)(w,{wheel:t})}),Object(A.jsxs)("main",{children:[Object(A.jsx)(l,{}),Object(A.jsx)(p,{}),Object(A.jsx)(h,{}),Object(A.jsx)(x,{}),Object(A.jsx)(k,{})]})]})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(o){var t=o.getCLS,i=o.getFID,n=o.getFCP,s=o.getLCP,a=o.getTTFB;t(e),i(e),n(e),s(e),a(e)}))};a.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(I,{})}),document.getElementById("root")),L()}],[[23,1,2]]]);
//# sourceMappingURL=main.856fc0f8.chunk.js.map