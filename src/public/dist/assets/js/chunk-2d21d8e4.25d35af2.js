(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d8e4"],{d299:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navigation"),e("Carrousel"),e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-12 col-md-3 col-lg-3 col-xl-2 p-3 bg-light"},[e("div",{staticClass:"d-inline-block ml-1"},[e("button",{staticClass:"btn btn-success d-md-none mb-2 ml-3 collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#NavDashboard","aria-controls":"NavDashboard","aria-expanded":"true","aria-label":"Toggle Categories"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"}},[e("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2",d:"M4 7h22M4 15h22M4 23h22"}})])])]),t._m(0),e("nav",{staticClass:"bd-links collapse px-4",attrs:{id:"NavDashboard"}},t._l(t.categories,function(a){return e("ul",{key:a._id,staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:""+a.categoryUrl}},[t._v(t._s(a.categoryName))])],1)])}),0)]),e("main",{staticClass:"col-12 col-md-9 col-lg-9 col-xl-10 ml-sm-auto px-4 pb-5"},[t.loading?e("div",{staticStyle:{margin:"100px 0"}},[e("h2",{staticClass:"display-3 d-flex justify-content-center align-items-center"},[t._v("\n          Estan cargando los Productos...\n        ")])]):e("div",[e("h2",{staticClass:"h1 d-flex justify-content-center mt-3 text-center px-3"},[t._v("\n          Dulces y Snacks\n        ")]),e("div",{staticClass:"row mx-5"},t._l(t.products,function(a){return e("div",{key:a._id,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3 mt-3"},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/producto/"+a._id}},[e("div",{staticClass:"card shadow text-black"},[e("img",{staticClass:"img-fluid",attrs:{src:"http://localhost:3000"+a.imagePath}}),e("div",{staticClass:"card-body"},[e("p",[e("strong",[t._v(t._s(a.productDescription))])]),e("div",{staticClass:"d-flex justify-content-end"},[e("button",{staticClass:"btn btn-primary text-white px-2 py-1",staticStyle:{"border-radius":"50%"},attrs:{type:"button"}},[e("font-awesome-icon",{attrs:{icon:"search"}})],1)])])])])],1)}),0)])])]),e("Footer")],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-inline-block ml-2 mt-3"},[e("h4",[t._v("\n          Categorias\n        ")])])}],n=(e("96cf"),e("3b8d")),i=e("f4dd"),o=e("fd2d"),c=e("c738"),l=e("30a9"),d=e("d899"),u={components:{Navigation:i["a"],Footer:o["a"],Carrousel:c["a"]},data:function(){return{loading:!0,products:[],categories:[]}},created:function(){this.getProducts(),this.getCategories()},methods:{getProducts:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].getProductsCategoryDulcesSnacks();case 2:a=t.sent,this.loading=!1,this.products=a;case 5:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),getCategories:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].getCategories();case 2:a=t.sent,this.loading=!1,this.categories=a;case 5:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}()}},g=u,p=e("2877"),h=Object(p["a"])(g,s,r,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d21d8e4.25d35af2.js.map