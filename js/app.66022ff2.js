(function(){"use strict";var t={484:function(t,e,a){var s=a(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],r=a(1001),i={},c=(0,r.Z)(i,n,o,!1,null,null,null),l=c.exports,u=a(2631),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("my-title",[t._v("ToDo List")]),e("my-card",[e("my-input",{on:{newTask:t.addNewTask}}),e("post-list",{attrs:{tasks:t.$tasksFiltered},on:{remove:t.removeItem,checkIt:t.checkIt}}),e("my-footer",{attrs:{total:t.$tasks[t.$currentTabIndex].length}})],1)],1)},m=[],p=function(){var t=this,e=t._self._c;return t.tasks?e("div",t._l(t.tasks,(function(a){return e("post-item",{key:a.id,attrs:{task:a,checked:a.complete},on:{remove:function(e){return t.$emit("remove",a.id)},checkIt:function(e){return t.checkIt(a.id)}}})})),1):t._e()},b=[],h=a(3822),k=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.task,expression:"task"}],staticClass:"item_container"},[e("div",{staticClass:"mdi checkbox mdi-checkbox-blank-circle-outline checkbox",class:{"mdi-checkbox-marked-circle":t.checked},on:{click:function(e){return t.$emit("checkIt",t.checked)}}}),e("div",{staticClass:"task__textarea"},[e("MyTextArea",{on:{input:t.updateTask},model:{value:t.task.text,callback:function(e){t.$set(t.task,"text",e)},expression:"task.text"}})],1),e("div",{staticClass:"mdi mdi-delete trash",on:{click:function(e){return t.$emit("remove")}}})])},v=[],f=function(){var t=this,e=t._self._c;return e("textarea",{ref:"textarea",staticClass:"textarea",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})},T=[],_={data(){return{}},props:{value:{required:!1}},methods:{calcHeight(){this.$nextTick((()=>{this.$el.style.height="0px",this.$el.style.height=this.$el.scrollHeight+"px"}))}},watch:{value(){this.calcHeight()}},mounted(){document.fonts.ready.then((()=>{this.calcHeight()})),window.addEventListener("resize",this.calcHeight)},destroyed(){window.removeEventListener("resize",this.calcHeight)}},x=_,g=(0,r.Z)(x,f,T,!1,null,"4a423de6",null),I=g.exports,w={data(){return{}},props:{task:Object,checked:Boolean},methods:{...(0,h.OI)({updateTaskTextById:"task/updateTaskTextById"}),...(0,h.nv)({updateLocalStorage:"task/updateLocalStorage"}),updateTask(){this.updateTaskTextById({id:this.task.id,newText:this.task.text})}},components:{MyTextArea:I}},C=w,y=(0,r.Z)(C,k,v,!1,null,"0628ffc8",null),N=y.exports,S={props:{tasks:Array},components:{postItem:N},methods:{...(0,h.nv)({checkIt:"task/checkIt"})},computed:{}},A=S,$=(0,r.Z)(A,p,b,!1,null,"2984a25c",null),P=$.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("span",[t._t("default")],2)])},Z=[],L={name:"my-title"},F=L,M=(0,r.Z)(F,O,Z,!1,null,"2456af9c",null),B=M.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper"},[e("my-tabs"),e("div",{staticClass:"card"},[t._t("default")],2)],1)])},J=[],H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabs__block"},[e("div",{staticClass:"tabs__tab",class:{"tabs__tab-active":0==t.$currentTabIndex},on:{click:function(e){return t.onTabClickAction(0)}}},[e("span",[t._v(t._s(t.$tabsNames[0]))])]),t.$tabsCount>1?e("div",{staticClass:"tabs__tab",class:{"tabs__tab-active":1==t.$currentTabIndex},on:{click:function(e){return t.onTabClickAction(1)}}},[e("span",[t._v(t._s(t.$tabsNames[1]))]),e("div",{staticClass:"tabs__tab-delete",class:{"tabs__tab-delete-disabled":2!=t.$tabsCount},on:{click:function(e){return e.stopPropagation(),t.onTabRemoveAction.apply(null,arguments)}}},[t._v("-")])]):t._e(),t.$tabsCount>2?e("div",{staticClass:"tabs__tab",class:{"tabs__tab-active":2==t.$currentTabIndex},on:{click:function(e){return t.onTabClickAction(2)}}},[e("span",[t._v(t._s(t.$tabsNames[2]))]),e("div",{staticClass:"tabs__tab-delete",on:{click:function(e){return e.stopPropagation(),t.onTabRemoveAction.apply(null,arguments)}}},[t._v("-")])]):t._e(),t.$tabsCount<3?e("div",{staticClass:"tabs__plus",on:{click:t.onTabsAddAction}},[t._v(" + ")]):t._e()])},D=[],E={name:"MyTabs",data(){return{tabsCount:1}},methods:{...(0,h.OI)({setCurrentTab:"task/setCurrentTab",addTab:"task/addTab",removeTab:"task/removeTab"}),...(0,h.nv)({updateLocalStorage:"task/updateLocalStorage"}),onTabsAddAction(){this.$tabsCount<3&&(this.addTab(),this.updateLocalStorage())},onTabRemoveAction(){this.$tabsCount>1&&(this.removeTab(),this.updateLocalStorage())},onTabClickAction(t){this.setCurrentTab(t),this.updateLocalStorage()}},computed:{...(0,h.rn)("task",{$tabsCount:"tabsCount",$currentTabIndex:"currentTabIndex",$tabsNames:"tabsNames"})}},R=E,z=(0,r.Z)(R,H,D,!1,null,"915af3c2",null),q=z.exports,W={components:{MyTabs:q}},G=W,K=(0,r.Z)(G,j,J,!1,null,"72ab6043",null),Q=K.exports,U=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.addNewTask.apply(null,arguments)}}},[e("div",{staticClass:"input_container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],attrs:{type:"text",placeholder:"Write..."},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}})])])},V=[],X={name:"my-input",data(){return{task:""}},methods:{addNewTask(){this.$emit("newTask",this.task),this.task=""}}},Y=X,tt=(0,r.Z)(Y,U,V,!1,null,"620fdc32",null),et=tt.exports,at=function(){var t=this,e=t._self._c;return e("button",{class:{active:t.isActive},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},st=[],nt={props:{isActive:Boolean}},ot=nt,rt=(0,r.Z)(ot,at,st,!1,null,"0d88e185",null),it=rt.exports,ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer_container"},[e("div",{staticClass:"items_left"},[t._v(" "+t._s(t.total)+" items left ")]),e("div",{staticClass:"btns"},t._l(t.btnItems,(function(a){return e("my-button",{key:t.btnItems.indexOf(a),attrs:{isActive:t.btnActives[t.btnItems.indexOf(a)]},on:{click:function(e){t.btnPressed(t.btnItems.indexOf(a))}}},[t._v(" "+t._s(a)+" ")])})),1),e("div",[e("a",{staticClass:"changeTabName",on:{click:t.popupShowChangeAction}},[t._v("Change tab name")]),e("popup",{attrs:{show:t.changeTabNamePopupShow},on:{closePopup:t.popupShowChangeAction}},[e("tab-name-card",{on:{closePopup:t.popupShowChangeAction}},[t._v(" New tab name ")])],1)],1)])},lt=[],ut=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"container__inner"},[e("div",{staticClass:"container__inner-title"},[t._t("default")],2),e("form",{staticClass:"container__inner-body",on:{submit:function(e){return e.preventDefault(),t.changeTabNameAction.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTabName,expression:"newTabName"}],staticClass:"container__inner-input",attrs:{type:"text",name:"",id:""},domProps:{value:t.newTabName},on:{input:function(e){e.target.composing||(t.newTabName=e.target.value)}}}),e("button",{staticClass:"container__inner-btn",attrs:{type:"submit"}},[t._v(" Change ")])]),t.attention?e("span",{staticClass:"container__inner-attention"},[t._v(" Max 8 symbols ")]):t._e()])])},dt=[],mt={data(){return{newTabName:"",attention:!1}},methods:{...(0,h.OI)({changeCurrentTabName:"task/changeCurrentTabName"}),changeTabNameAction(){this.newTabName&&(this.changeCurrentTabName({newTabName:this.newTabName}),this.$emit("closePopup"))}},watch:{newTabName(t,e){t.length>8&&(this.newTabName=e,this.attention=!0,setTimeout((()=>{this.attention=!1}),3e3))}}},pt=mt,bt=(0,r.Z)(pt,ut,dt,!1,null,"07b559dc",null),ht=bt.exports,kt=function(){var t=this,e=t._self._c;return t.show?e("div",{staticClass:"popup",on:{click:t.closePopupAction}},[t._t("default")],2):t._e()},vt=[],ft={components:{},props:{show:!1},methods:{closePopupAction(t){"popup"==t.target.className&&this.$emit("closePopup")}}},Tt=ft,_t=(0,r.Z)(Tt,kt,vt,!1,null,"7e677d69",null),xt=_t.exports,gt={name:"my-footer",data(){return{btnActives:[!0,!1,!1],btnItems:["All","Active","Completed"],changeTabNamePopupShow:!1}},props:{total:Number},components:{MyButton:it,Popup:xt,TabNameCard:ht},methods:{...(0,h.OI)({filterChanged:"task/filterChanged"}),btnPressed(t){this.btnActives=[!1,!1,!1],this.filterChanged(t),this.btnActives[t]=!0},popupShowChangeAction(){this.changeTabNamePopupShow=!this.changeTabNamePopupShow}}},It=gt,wt=(0,r.Z)(It,ct,lt,!1,null,"175590e8",null),Ct=wt.exports,yt={name:"Home",data(){return{value:!0}},components:{MyTitle:B,MyCard:Q,MyInput:et,MyFooter:Ct,PostList:P,MyTabs:q},computed:{...(0,h.rn)("task",{$tasks:"tasks",$filter:"filter",$currentTabIndex:"currentTabIndex"}),...(0,h.Se)({$tasksFiltered:"task/tasksFiltered"})},methods:{...(0,h.OI)({setTasks:"task/setTasks",filterChanged:"task/filterChanged",setItemsFromLocalstorage:"task/setItemsFromLocalstorage"}),...(0,h.nv)({addNewTask:"task/addNewTask",removeItem:"task/removeItem",checkIt:"task/checkIt",updateLocalStorage:"task/updateLocalStorage"})},mounted(){window.localStorage.getItem("tasks")&&this.setItemsFromLocalstorage()}},Nt=yt,St=(0,r.Z)(Nt,d,m,!1,null,"3d32c7e5",null),At=St.exports;s.ZP.use(u.ZP);const $t=[{path:"/",name:"home",component:At}],Pt=new u.ZP({mode:"history",base:"/To-Do-List/",routes:$t});var Ot=Pt;const Zt={state:()=>({tabsCount:1,currentTabIndex:0,tabsNames:["First tab","Second tab","Third tab"],tasks:[[{id:1,text:"First tab 1",complete:!1},{id:5,text:"Fitst tab 2",complete:!0}],[{id:1,text:"Second tab 1",complete:!1},{id:24,text:"Second tab 2",complete:!0}],[{id:1,text:"Third tab 1",complete:!1},{id:3,text:"Third tab 2",complete:!0}]],filter:0}),getters:{newIdInCurrentTab(t){return Math.max(...t.tasks[t.currentTabIndex].map((t=>t.id)))+1},tasksFiltered(t){switch(t.filter){case 0:return t.tasks[t.currentTabIndex];case 1:return t.tasks[t.currentTabIndex].filter((t=>0==t.complete));case 2:return t.tasks[t.currentTabIndex].filter((t=>1==t.complete))}}},mutations:{setTasks(t,e){s.ZP.set(t.tasks,t.currentTabIndex,e)},filterChanged(t,e){t.filter=e},setTaskCompleteById(t,{id:e,value:a}){let n=t.tasks[t.currentTabIndex].map((t=>t.id==e?(t.complete=a,t):t));s.ZP.set(t.tasks,t.currentTabIndex,n)},setItemsFromLocalstorage(t){const e=JSON.parse(window.localStorage.getItem("tasks")),a=JSON.parse(window.localStorage.getItem("tabsNames"));Array.isArray(e[0])?t.tasks=e:s.ZP.set(t.tasks,0,e),Array.isArray(a)?t.tabsNames=a:t.tabsNames=Object.values(a),t.tabsCount=JSON.parse(window.localStorage.getItem("tabsCount")),t.currentTabIndex=JSON.parse(window.localStorage.getItem("currentTabIndex"))},removeTaskById(t,e){t.tasks[t.currentTabIndex].splice(t.tasks[t.currentTabIndex].findIndex((t=>e==t.id)),1)},setTaskAboweIndex(t,{task:e,index:a}){a<0&&(a=t.tasks[t.currentTabIndex].length),t.tasks[t.currentTabIndex].splice(a,0,e)},updateTaskTextById(t,{id:e,newText:a}){t.tasks=t.tasks.map((t=>t.id==e?(t.text=a,t):t)),window.localStorage.setItem("tasks",JSON.stringify(t.tasks))},setCurrentTab(t,e){t.currentTabIndex=e},addTab(t){t.tabsCount++},removeTab(t){t.currentTabIndex==t.tabsCount-1&&t.currentTabIndex--,t.tabsCount--},changeCurrentTabName(t,{newTabName:e}){s.ZP.set(t.tabsNames,t.currentTabIndex,e),window.localStorage.setItem("tabsNames",JSON.stringify(t.tabsNames))}},actions:{addNewTask({commit:t,state:e,getters:a,dispatch:s},n){t("setTasks",[{id:a.newIdInCurrentTab,text:n,complete:!1},...e.tasks[e.currentTabIndex]]),s("updateLocalStorage")},removeItem({commit:t,state:e,dispatch:a},s){t("setTasks",e.tasks[e.currentTabIndex].filter((t=>t.id!==s))),a("updateLocalStorage")},checkIt({commit:t,state:e,dispatch:a},s){const n=!e.tasks[e.currentTabIndex].find((t=>s==t.id)).complete,o=e.tasks[e.currentTabIndex].find((t=>s==t.id));t("removeTaskById",s),t("setTaskAboweIndex",{task:o,index:e.tasks[e.currentTabIndex].findIndex((t=>1==t.complete))}),t("setTaskCompleteById",{id:s,value:n}),a("updateLocalStorage")},updateLocalStorage({state:t}){window.localStorage.setItem("tasks",JSON.stringify(t.tasks)),window.localStorage.setItem("tabsCount",JSON.stringify(t.tabsCount)),window.localStorage.setItem("currentTabIndex",JSON.stringify(t.currentTabIndex)),window.localStorage.setItem("tabsNames",JSON.stringify(t.tabsNames))}},namespaced:!0};s.ZP.use(h.ZP);var Lt=new h.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{task:Zt}});s.ZP.config.productionTip=!1,new s.ZP({router:Ot,store:Lt,render:t=>t(l)}).$mount("#app")}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,o){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],o=t[u][2];for(var i=!0,c=0;c<s.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[c])}))?s.splice(c--,1):(i=!1,o<r&&(r=o));if(i){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,n,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,o,r=s[0],i=s[1],c=s[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var u=c(a)}for(e&&e(s);l<r.length;l++)o=r[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},s=self["webpackChunkproject"]=self["webpackChunkproject"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(484)}));s=a.O(s)})();
//# sourceMappingURL=app.66022ff2.js.map