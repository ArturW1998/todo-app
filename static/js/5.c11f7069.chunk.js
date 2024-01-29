(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[5],{166:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return g})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return i}));var s={};n.r(s),n.d(s,"getTasksList",(function(){return S})),n.d(s,"getTaskById",(function(){return E}));var c={};n.r(c);var o={};n.r(o),n.d(o,"tasks",(function(){return s})),n.d(o,"models",(function(){return c}));var r={};n.r(r),n.d(r,"taskSchema",(function(){return w})),n.d(r,"normalizeTask",(function(){return F})),n.d(r,"normalizeTasks",(function(){return N})),n.d(r,"tasksInitialState",(function(){return D})),n.d(r,"$tasks",(function(){return B})),n.d(r,"$queryConfig",(function(){return z})),n.d(r,"$tasksListLoading",(function(){return H})),n.d(r,"$taskDetailsLoading",(function(){return J})),n.d(r,"$tasksList",(function(){return G})),n.d(r,"$tasksFiltered",(function(){return M})),n.d(r,"$tasksListEmpty",(function(){return P})),n.d(r,"events",(function(){return Q})),n.d(r,"effects",(function(){return R})),n.d(r,"selectors",(function(){return q}));var i={};n.r(i),n.d(i,"getTaskStatus",(function(){return A}));var a=n(75),d=n(83),l=n(169),u=n.n(l),j=n(26);const f=t=>{let{data:e,titleHref:n,children:s,...c}=t;return e||c.loading?Object(j.jsxs)(d.b,{title:"Task#".concat(c.loading?"":null===e||void 0===e?void 0:e.id),className:u.a.root,...c,children:[n?Object(j.jsx)(a.b,{to:n,children:null===e||void 0===e?void 0:e.title}):null===e||void 0===e?void 0:e.title,s]}):null};var b=n(5),k=n.n(b),p=n(170),O=n.n(p);const g=t=>{let{data:e,before:n,titleHref:s}=t;const c=s?Object(j.jsx)(a.b,{to:s,children:e.title}):e.title;return Object(j.jsxs)(d.i,{className:k()(O.a.root,{[O.a.completed]:e.completed}),children:[n,c]})};var m=n(165),v=n(168),x=n(182),h=n(173),y=n.n(h),L=n(84);const T=y.a.create({baseURL:L.a}),_="/todos",S=t=>T.get(_,{params:t}),E=t=>{let{taskId:e,...n}=t;return T.get("".concat(_,"/").concat(e),{params:n})},$=Object(m.createEvent)(),C=Object(m.createEffect)((t=>o.tasks.getTasksList(t))),I=Object(m.createEffect)((t=>o.tasks.getTaskById(t))),w=new x.b.Entity("tasks"),F=t=>Object(x.a)(t,w),N=t=>Object(x.a)(t,[w]),D={},B=Object(m.createStore)(D).on(C.doneData,((t,e)=>N(e.data).entities.tasks)).on(I.doneData,((t,e)=>({...t,...F(e.data).entities.tasks}))),z=Object(m.createStore)({}).on($,((t,e)=>e)),H=C.pending,J=I.pending,G=Object(m.combine)(B,(t=>Object.values(t))),M=Object(m.combine)(G,z,((t,e)=>t.filter((t=>void 0===e.completed||t.completed===e.completed)))),P=M.map((t=>0===t.length)),Q={setQueryConfig:$},R={getTaskByIdFx:I,getTasksListFx:C},q={useTask:t=>Object(v.useStore)(B)[t]},A=t=>t.completed?"CLOSED":"OPENED"},169:function(t,e,n){t.exports={root:"styles_root__1Slir"}},170:function(t,e,n){t.exports={root:"styles_root__fGMdR",completed:"styles_completed__2aSOy"}},172:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var s=n(83),c=n(166),o=n(165),r=n(183);const i=Object(o.createEvent)();c.d.$tasks.on(i,((t,e)=>Object(r.a)(t,(t=>{const n=t[e];n.completed=!n.completed}))));const a={toggleTask:i};var d=n(26);const l=t=>{let{taskId:e,withStatus:n=!0}=t;const o=c.d.selectors.useTask(e);if(!o)return null;const r=c.c.getTaskStatus(o);return Object(d.jsx)(s.c,{onClick:()=>a.toggleTask(e),checked:o.completed,children:n&&r})}},204:function(t,e,n){t.exports={root:"styles_root__3vhW2",toolbar:"styles_toolbar__2OJM3",content:"styles_content__1K7j8"}},208:function(t,e,n){"use strict";n.r(e),n.d(e,"TasksListPage",(function(){return b}));var s=n(167),c=n(165),o=n(83),r=n(166);const i={1:{id:1,title:"All",config:{}},2:{id:2,title:"Opened",config:{completed:!1}},3:{id:3,title:"Closed",config:{completed:!0}}},a=Object.values(i);var d=n(26);const l=Object(s.reflect)({view:t=>{let{loading:e,onFilterClick:n}=t;return Object(d.jsx)(o.g.Group,{defaultValue:1,buttonStyle:"solid",children:a.map((t=>{let{title:s,id:c}=t;return Object(d.jsx)(o.g.Button,{onClick:()=>n((t=>i[t])(c).config),value:c,disabled:e,children:s},c)}))})},bind:{loading:r.d.$tasksListLoading,onFilterClick:r.d.events.setQueryConfig}});var u=n(172),j=n(204),f=n.n(j);const b=()=>Object(d.jsxs)(o.f,{className:f.a.root,children:[Object(d.jsxs)(o.f,{className:f.a.toolbar,children:[Object(d.jsx)(o.i,{justify:"center",children:Object(d.jsx)(o.k.Title,{level:1,children:"Tasks List"})}),Object(d.jsx)(o.i,{justify:"center",children:Object(d.jsx)(l,{})})]}),Object(d.jsx)(o.f.Content,{className:f.a.content,children:Object(d.jsx)(o.i,{gutter:[0,20],justify:"center",children:Object(d.jsx)(p,{})})})]}),k=Object(s.list)({view:t=>{let{task:e}=t;return Object(d.jsx)(o.d,{span:24,children:Object(d.jsx)(r.b,{data:e,titleHref:"/".concat(e.id),before:Object(d.jsx)(u.a,{taskId:e.id,withStatus:!1})})},e.id)},source:r.d.$tasksFiltered,bind:{},mapItem:{task:t=>t}}),p=Object(s.variant)({source:Object(c.combine)({isLoading:r.d.$tasksListLoading,isEmpty:r.d.$tasksListEmpty},(t=>{let{isLoading:e,isEmpty:n}=t;return e?"loading":n?"empty":"ready"})),cases:{loading:()=>Object(d.jsx)(o.j,{size:"large"}),empty:()=>Object(d.jsx)(o.e,{description:"No tasks found"}),ready:k},hooks:{mounted:r.d.effects.getTasksListFx.prepend((()=>{}))}})}}]);
//# sourceMappingURL=5.c11f7069.chunk.js.map