(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d746"],{f820:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("Navigation"),a("div",{staticClass:"row mx-2"},[a("div",{staticClass:"col-12 col-md-4 px-4 py-3"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addCategory(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.category.categoryName,expression:"category.categoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Category Name"},domProps:{value:t.category.categoryName},on:{input:function(e){e.target.composing||t.$set(t.category,"categoryName",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.category.categoryDescription,expression:"category.categoryDescription"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Category Description"},domProps:{value:t.category.categoryDescription},on:{input:function(e){e.target.composing||t.$set(t.category,"categoryDescription",e.target.value)}}})]),a("div",{staticClass:"input-group"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"img","aria-describedby":"inputGroupFileAddon01"},on:{change:t.onFileImg}}),a("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v("Choose Image")])])]),t._m(1)])])])]),a("div",{staticClass:"col-12 col-md-8 px-4 py-3 table-responsive"},[a("table",{staticClass:"table table-bordered"},[t._m(2),a("tbody",t._l(t.categories,function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e._id))]),a("td",[t._v(t._s(e.categoryName))]),a("td",[t._v(t._s(e.categoryDescription))]),a("td",[t._v(t._s(e.imagePath))]),a("td",{staticClass:"p-2"},[a("button",{staticClass:"btn btn-danger mt-1",attrs:{type:"button"},on:{click:function(a){return t.deleteCategory(e._id)}}},[t._v("\n                Delete\n              ")]),a("button",{staticClass:"btn btn-success mt-1",attrs:{type:"button"}},[t._v("\n                Update\n              ")])])])}),0)])])]),a("Footer")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header bg-primary text-white text-center"},[a("h3",[t._v("Add Product")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group mt-2"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("\n                Add Product\n              ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"bg-primary text-center text-white"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#ID")]),a("th",{attrs:{scope:"col"}},[t._v("Product Name")]),a("th",{attrs:{scope:"col"}},[t._v("Product Category")]),a("th",{attrs:{scope:"col"}},[t._v("Url Img")]),a("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],o=(a("96cf"),a("3b8d")),s=a("d225"),i=a("f4dd"),c=a("fd2d"),u=a("d899"),l=function t(e,a){Object(s["a"])(this,t),this.categoryName=e,this.categoryDescription=a},g={components:{Navigation:i["a"],Footer:c["a"]},data:function(){return{category:{categoryName:"",categoryDescription:"",image:null},categories:[]}},created:function(){this.getCategories()},methods:{getCategories:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].getCategories();case 2:e=t.sent,this.categories=e;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addCategory:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("categoryName",this.category.categoryName),e.append("categoryDescription",this.category.categoryDescription),e.append("image",this.category.image),t.next=6,u["a"].addCategory(e);case 6:this.getCategories(),this.category=new l;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),deleteCategory:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].deleteCategory(e);case 2:this.getCategories();case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onFileImg:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.category.image=e.target.files[0];case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},p=g,d=a("2877"),m=Object(d["a"])(p,r,n,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d22d746.bcc41bb5.js.map