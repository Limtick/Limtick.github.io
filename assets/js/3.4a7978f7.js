(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{291:function(t,e,c){},313:function(t,e,c){"use strict";var i=c(291);c.n(i).a},345:function(t,e,c){"use strict";c.r(e);var i={name:"List",model:{prop:"checked",event:"item-click"},props:{data:Array,checked:String},data:function(){return{activeName:this.checked}},watch:{checked:function(t){this.activeName=t}},methods:{handleClick:function(t){this.activeName=t,this.$emit("item-click",this.activeName)}}},a=(c(313),c(1)),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ul",{staticClass:"demo-list"},t._l(t.data,function(e){return c("li",{key:e,class:{active:e===t.activeName},on:{click:function(c){t.handleClick(e)}}},[t._v(t._s(e))])}))},[],!1,null,"adb5a120",null);n.options.__file="List.vue";e.default=n.exports}}]);