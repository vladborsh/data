(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{rAEy:function(t,e,n){"use strict";n.r(e),n.d(e,"PersonModule",(function(){return m}));var c=n("SVse"),r=n("IheW"),s=n("iInd"),o=n("e1JD"),a=n("mrSG"),i=n("Fl1J"),p=n("jvVo"),b=n("vkgz"),u=n("lJxs"),l=n("8Y7J");let f=(()=>{class t{constructor(t){this.httpService=t}fetchAll(){return this.httpService.get("./app/json/person.json").pipe(Object(u.a)(t=>t.data))}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(r.a))},t.\u0275prov=l.Ib({token:t,factory:t.\u0275fac}),t})(),h=(()=>{let t=class extends p.c{constructor(t){super(),this.personService=t}getContent(){return this.personService.fetchAll().pipe(Object(b.a)(t=>this.setState(t)))}};return t.\u0275fac=function(e){return new(e||t)(l.Wb(f))},t.\u0275prov=l.Ib({token:t,factory:t.\u0275fac}),t=Object(a.a)([Object(i.g)(),Object(o.e)({name:"person",defaults:{title:null,description:null}})],t),t})();function d(t,e){if(1&t&&(l.Sb(0,"div"),l.tc(1,"\n    "),l.Sb(2,"h4"),l.tc(3),l.Rb(),l.tc(4,"\n    "),l.Sb(5,"p"),l.tc(6),l.Rb(),l.tc(7,"\n"),l.Rb()),2&t){const t=e.ngIf;l.Cb(3),l.uc(t.title),l.Cb(3),l.uc(t.description)}}let g=(()=>{class t{constructor(t){this.person=t}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(h))},t.\u0275cmp=l.Gb({type:t,selectors:[["person"]],decls:11,vars:3,consts:[["href","http://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Ftodo%2Ftodo.state.ts","target","_blank"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png","alt","stackblitz",1,"stackblitz"],[4,"ngIf"]],template:function(t,e){1&t&&(l.Sb(0,"a",0),l.tc(1,"\n    "),l.Nb(2,"img",1),l.tc(3,"\n"),l.Rb(),l.tc(4,"\n\n"),l.Sb(5,"h3"),l.tc(6,"Person state"),l.Rb(),l.tc(7,"\n\n"),l.sc(8,d,8,2,"div",2),l.cc(9,"async"),l.tc(10,"\n")),2&t&&(l.Cb(8),l.gc("ngIf",l.dc(9,1,e.person.state$)))},directives:[c.k],pipes:[c.b],encapsulation:2,changeDetection:0}),t})(),v=(()=>{class t{constructor(t){this.personState=t}resolve(){return this.personState.getContent()}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(h))},t.\u0275prov=l.Ib({token:t,factory:t.\u0275fac}),t})(),m=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},providers:[f,v],imports:[[c.c,r.b,o.c.forFeature([h]),s.b.forChild([{path:"",component:g,resolve:{content:v}}])]]}),t})()}}]);