(self.webpackChunkoriginal=self.webpackChunkoriginal||[]).push([[3085],{14247:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>j});var t=s(67294),a=s(86010),l=s(1944),r=s(35281),i=s(16963),c=s(40319),o=s(39407);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};function j(e){const{content:n}=e,{metadata:{title:s,description:j,frontMatter:d}}=n,{wrapperClassName:u,hide_table_of_contents:f}=d;return t.createElement(l.FG,{className:(0,a.Z)(u??r.k.wrapper.mdxPages,r.k.page.mdxPage)},t.createElement(l.d,{title:s,description:j}),t.createElement(i.Z,null,t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,a.Z)("row",m.mdxPageWrapper)},t.createElement("div",{className:(0,a.Z)("col",!f&&"col--8")},t.createElement("article",null,t.createElement(c.Z,null,t.createElement(n,null)))),!f&&n.toc.length>0&&t.createElement("div",{className:"col col--2"},t.createElement(o.Z,{toc:n.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},39407:(e,n,s)=>{"use strict";s.d(n,{Z:()=>m});var t=s(87462),a=s(67294),l=s(86010),r=s(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function m(e){let{className:n,...s}=e;return a.createElement("div",{className:(0,l.Z)(i.tableOfContents,"thin-scrollbar",n)},a.createElement(r.Z,(0,t.Z)({},s,{linkClassName:c,linkActiveClassName:o})))}},93743:(e,n,s)=>{"use strict";s.d(n,{Z:()=>f});var t=s(87462),a=s(67294),l=s(86668);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),s=Array(7).fill(-1);n.forEach(((e,n)=>{const t=s.slice(2,e.level);e.parentIndex=Math.max(...t),s[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:s,...a}=e;s>=0?n[s].children.push(a):t.push(a)})),t}function i(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:s,maxHeadingLevel:t});return function(e){return e.level>=s&&e.level<=t}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function o(e,n){let{anchorTopOffset:s}=n;const t=e.find((e=>c(e).top>=s));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function j(e){const n=(0,a.useRef)(void 0),s=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:s}=e;const t=[];for(let a=n;a<=s;a+=1)t.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),c=o(i,{anchorTopOffset:s.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,s){s?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,s])}function d(e){let{toc:n,className:s,linkClassName:t,isChild:l}=e;return n.length?a.createElement("ul",{className:l?void 0:s},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:s,linkClassName:t}))))):null}const u=a.memo(d);function f(e){let{toc:n,className:s="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const v=(0,l.L)(),h=m??v.tableOfContents.minHeadingLevel,g=d??v.tableOfContents.maxHeadingLevel,k=function(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:t}=e;return(0,a.useMemo)((()=>i({toc:r(n),minHeadingLevel:s,maxHeadingLevel:t})),[n,s,t])}({toc:n,minHeadingLevel:h,maxHeadingLevel:g});return j((0,a.useMemo)((()=>{if(c&&o)return{linkClassName:c,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:g}}),[c,o,h,g])),a.createElement(u,(0,t.Z)({toc:k,className:s,linkClassName:c},f))}},46700:(e,n,s)=>{var t={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){var n=l(e);return s(n)}function l(e){if(!s.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=l,e.exports=a,a.id=46700}}]);