(function(){"use strict";var t={6596:function(t,e,a){var s=a(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],o=a(1001),i={},c=(0,o.Z)(i,n,r,!1,null,null,null),l=c.exports,u=a(2631),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("my-title",[t._v("ToDo List")]),e("my-card",[e("my-input",{on:{newTask:t.addNewTask}}),e("post-list",{attrs:{tasks:t.$tasksFiltered},on:{remove:t.removeItem,checkIt:t.checkIt}}),e("my-footer",{attrs:{total:t.$tasks.length}})],1)],1)},m=[],b=function(){var t=this,e=t._self._c;return t.tasks?e("div",t._l(t.tasks,(function(a){return e("post-item",{key:a.id,attrs:{task:a,checked:a.complete},on:{remove:function(e){return t.$emit("remove",a.id)},checkIt:function(e){return t.checkIt(a.id)}}})})),1):t._e()},k=[],p=a(3822),f=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.task,expression:"task"}],staticClass:"item_container"},[e("div",{staticClass:"mdi checkbox mdi-checkbox-blank-circle-outline checkbox",class:{"mdi-checkbox-marked-circle":t.checked},on:{click:function(e){return t.$emit("checkIt",t.checked)}}}),e("div",{staticClass:"task__textarea"},[e("MyTextArea",{on:{input:t.updateTask},model:{value:t.task.text,callback:function(e){t.$set(t.task,"text",e)},expression:"task.text"}})],1),e("div",{staticClass:"mdi mdi-delete trash",on:{click:function(e){return t.$emit("remove")}}})])},h=[],v=function(){var t=this,e=t._self._c;return e("textarea",{ref:"textarea",staticClass:"textarea",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})},T=[],x={data(){return{}},props:{value:{required:!1}},methods:{calcHeight(){this.$nextTick((()=>{this.$el.style.height="0px",this.$el.style.height=this.$el.scrollHeight+"px"}))}},watch:{value(){this.calcHeight()}},mounted(){document.fonts.ready.then((()=>{this.calcHeight()})),window.addEventListener("resize",this.calcHeight)},destroyed(){window.removeEventListener("resize",this.calcHeight)}},I=x,_=(0,o.Z)(I,v,T,!1,null,"5fe2e591",null),C=_.exports,g={data(){return{}},props:{task:Object,checked:Boolean},methods:{...(0,p.OI)({updateTaskTextById:"task/updateTaskTextById"}),...(0,p.nv)({updateLocalStorage:"task/updateLocalStorage"}),updateTask(){this.updateTaskTextById({id:this.task.id,newText:this.task.text})}},components:{MyTextArea:C}},w=g,y=(0,o.Z)(w,f,h,!1,null,"0628ffc8",null),$=y.exports,A={props:{tasks:Array},components:{postItem:$},methods:{...(0,p.nv)({checkIt:"task/checkIt"})},computed:{}},S=A,O=(0,o.Z)(S,b,k,!1,null,"2984a25c",null),Z=O.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("span",[t._t("default")],2)])},P=[],L={name:"my-title"},F=L,M=(0,o.Z)(F,N,P,!1,null,"2456af9c",null),B=M.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper"},[e("my-tabs"),e("div",{staticClass:"card"},[t._t("default")],2)],1)])},H=[],J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabs__block"},[e("a",{staticClass:"tabs__tab",class:{"tabs__tab-active":0==t.$currentTabIndex},on:{click:function(e){return t.onTabClickAction(0)}}},[e("span",[t._v(t._s(t.$tabsNames.first))])]),t.$tabsCount>1?e("a",{staticClass:"tabs__tab",class:{"tabs__tab-active":1==t.$currentTabIndex},on:{click:function(e){return t.onTabClickAction(1)}}},[2==t.$tabsCount?e("a",{staticClass:"tabs__tab-delete",on:{click:t.onTabRemoveAction}},[t._v("-")]):t._e(),e("span",[t._v(t._s(t.$tabsNames.second))])]):t._e(),t.$tabsCount>2?e("a",{staticClass:"tabs__tab",class:{"tabs__tab-active":2==t.$currentTabIndex},on:{click:function(e){return t.onTabClickAction(2)}}},[e("a",{staticClass:"tabs__tab-delete",on:{click:t.onTabRemoveAction}},[t._v("-")]),e("span",[t._v(t._s(t.$tabsNames.third))])]):t._e(),t.$tabsCount<3?e("button",{staticClass:"tabs__plus",on:{click:t.onTabsAddAction}},[t._v(" + ")]):t._e()])},D=[],E={name:"MyTabs",data(){return{tabsCount:1,tabs:[]}},methods:{...(0,p.OI)({setCurrentTab:"task/setCurrentTab",addTab:"task/addTab",removeTab:"task/removeTab"}),onTabsAddAction(){this.$tabsCount<3&&this.addTab()},onTabRemoveAction(){this.$tabsCount>1&&this.removeTab()},onTabClickAction(t){this.setCurrentTab(t)}},computed:{...(0,p.rn)("task",{$tabsCount:"tabsCount",$currentTabIndex:"currentTabIndex",$tabsNames:"tabsNames"})}},R=E,z=(0,o.Z)(R,J,D,!1,null,"49eccf42",null),q=z.exports,W={components:{MyTabs:q}},G=W,K=(0,o.Z)(G,j,H,!1,null,"930ce22e",null),Q=K.exports,U=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.addNewTask.apply(null,arguments)}}},[e("div",{staticClass:"input_container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],attrs:{type:"text",placeholder:"Write..."},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}})])])},V=[],X={name:"my-input",data(){return{task:""}},methods:{addNewTask(){this.$emit("newTask",this.task),this.task=""}}},Y=X,tt=(0,o.Z)(Y,U,V,!1,null,"620fdc32",null),et=tt.exports,at=function(){var t=this,e=t._self._c;return e("button",{class:{active:t.isActive},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},st=[],nt={props:{isActive:Boolean}},rt=nt,ot=(0,o.Z)(rt,at,st,!1,null,"0d88e185",null),it=ot.exports,ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer_container"},[e("div",{staticClass:"items_left"},[t._v(" "+t._s(t.total)+" items left ")]),e("div",{staticClass:"btns"},t._l(t.btnItems,(function(a){return e("my-button",{key:t.btnItems.indexOf(a),attrs:{isActive:t.btnActives[t.btnItems.indexOf(a)]},on:{click:function(e){t.btnPressed(t.btnItems.indexOf(a))}}},[t._v(" "+t._s(a)+" ")])})),1)])},lt=[],ut={name:"my-footer",data(){return{btnActives:[!0,!1,!1],btnItems:["All","Active","Completed"]}},props:{total:Number},components:{MyButton:it},methods:{...(0,p.OI)({filterChanged:"task/filterChanged"}),btnPressed(t){this.btnActives=[!1,!1,!1],this.filterChanged(t),this.btnActives[t]=!0}}},dt=ut,mt=(0,o.Z)(dt,ct,lt,!1,null,"03a3e40b",null),bt=mt.exports,kt={name:"Home",data(){return{value:!0}},components:{MyTitle:B,MyCard:Q,MyInput:et,MyFooter:bt,PostList:Z,MyTabs:q},computed:{...(0,p.rn)("task",{$tasks:"tasks",$filter:"filter"}),...(0,p.Se)({$tasksFiltered:"task/tasksFiltered"})},methods:{...(0,p.OI)({setTasks:"task/setTasks",filterChanged:"task/filterChanged",setItemsFromLocalstorage:"task/setItemsFromLocalstorage"}),...(0,p.nv)({addNewTask:"task/addNewTask",removeItem:"task/removeItem",checkIt:"task/checkIt",updateLocalStorage:"task/updateLocalStorage"})},mounted(){window.localStorage.getItem("tasks")&&this.setItemsFromLocalstorage()}},pt=kt,ft=(0,o.Z)(pt,d,m,!1,null,"3891662e",null),ht=ft.exports;s.ZP.use(u.ZP);const vt=[{path:"/",name:"home",component:ht}],Tt=new u.ZP({mode:"history",base:"/To-Do-List/",routes:vt});var xt=Tt;const It={state:()=>({tabsCount:1,currentTabIndex:0,tabsNames:{first:"First tab",second:"Second tab",third:"Third tab"},tasks:[[{id:1,text:"First tab 1",complete:!1},{id:5,text:"Fitst tab 2",complete:!0}],[{id:1,text:"Second tab 1",complete:!1},{id:24,text:"Second tab 2",complete:!0}],[{id:1,text:"Third tab 1",complete:!1},{id:3,text:"Third tab 2",complete:!0}]],filter:0}),getters:{newIdInCurrentTab(t){return Math.max(...t.tasks[t.currentTabIndex].map((t=>t.id)))+1},tasksFiltered(t){switch(t.filter){case 0:return t.tasks[t.currentTabIndex];case 1:return t.tasks[t.currentTabIndex].filter((t=>0==t.complete));case 2:return t.tasks[t.currentTabIndex].filter((t=>1==t.complete))}}},mutations:{setTasks(t,e){s.ZP.set(t.tasks,t.currentTabIndex,e)},filterChanged(t,e){t.filter=e},setTaskCompleteById(t,{id:e,value:a}){let n=t.tasks[t.currentTabIndex].map((t=>t.id==e?(t.complete=a,t):t));s.ZP.set(t.tasks,t.currentTabIndex,n)},setItemsFromLocalstorage(t){const e=JSON.parse(window.localStorage.getItem("tasks"));Array.isArray(e[0])?t.tasks=e:s.ZP.set(t.tasks,0,e),t.tabsCount=JSON.parse(window.localStorage.getItem("tabsCount")),t.currentTabIndex=JSON.parse(window.localStorage.getItem("currentTabIndex"))},removeTaskById(t,e){t.tasks[t.currentTabIndex].splice(t.tasks[t.currentTabIndex].findIndex((t=>e==t.id)),1)},setTaskAboweIndex(t,{task:e,index:a}){a<0&&(a=t.tasks[t.currentTabIndex].length),t.tasks[t.currentTabIndex].splice(a,0,e)},updateTaskTextById(t,{id:e,newText:a}){t.tasks=t.tasks.map((t=>t.id==e?(t.text=a,t):t))},setCurrentTab(t,e){t.currentTabIndex=e},addTab(t){t.tabsCount++},removeTab(t){t.currentTabIndex==t.tabsCount-1&&t.currentTabIndex--,t.tabsCount--}},actions:{addNewTask({commit:t,state:e,getters:a,dispatch:s},n){t("setTasks",[{id:a.newIdInCurrentTab,text:n,complete:!1},...e.tasks[e.currentTabIndex]]),s("updateLocalStorage")},removeItem({commit:t,state:e,dispatch:a},s){t("setTasks",e.tasks[e.currentTabIndex].filter((t=>t.id!==s))),a("updateLocalStorage")},checkIt({commit:t,state:e,dispatch:a},s){const n=!e.tasks[e.currentTabIndex].find((t=>s==t.id)).complete,r=e.tasks[e.currentTabIndex].find((t=>s==t.id));t("removeTaskById",s),t("setTaskAboweIndex",{task:r,index:e.tasks[e.currentTabIndex].findIndex((t=>1==t.complete))}),t("setTaskCompleteById",{id:s,value:n}),a("updateLocalStorage")},updateLocalStorage({state:t}){window.localStorage.setItem("tasks",JSON.stringify(t.tasks)),window.localStorage.setItem("tabsCount",JSON.stringify(t.tabsCount)),window.localStorage.setItem("currentTabIndex",JSON.stringify(t.currentTabIndex))}},namespaced:!0};s.ZP.use(p.ZP);var _t=new p.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{task:It}});s.ZP.config.productionTip=!1,new s.ZP({router:xt,store:_t,render:t=>t(l)}).$mount("#app")}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,r){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],r=t[u][2];for(var i=!0,c=0;c<s.length;c++)(!1&r||o>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[c])}))?s.splice(c--,1):(i=!1,r<o&&(o=r));if(i){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,o=s[0],i=s[1],c=s[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var u=c(a)}for(e&&e(s);l<o.length;l++)r=o[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},s=self["webpackChunkproject"]=self["webpackChunkproject"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6596)}));s=a.O(s)})();
//# sourceMappingURL=app.ac3920d1.js.map