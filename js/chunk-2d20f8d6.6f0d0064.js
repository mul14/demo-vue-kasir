(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f8d6"],{b3b1:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.cartList.length?i("div",[i("div",{staticClass:"text-right"},[i("button",{staticClass:"w-full bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded",on:{click:t.checkout}},[t._v(" Checkout ")]),i("h1",{staticClass:"text-2xl mt-5 flex justify-between"},[i("div",{staticClass:"text-gray-600"},[t._v("Total")]),i("div",{staticClass:"text-white text-bold"},[t._v(t._s(t._f("money")(t.totalAmount)))])])]),t._l(t.cartList,(function(e,n){return i("div",{key:n,staticClass:"my-4"},[i("div",{staticClass:"text-white p-4 bg-black flex justify-between rounded-t"},[i("div",[t._v(" "+t._s(e.name)+" ")])]),i("div",{staticClass:"text-black bg-white font-bold py-2 px-4 flex justify-between"},[i("div",[i("span",{staticClass:"text-gray-600"},[t._v(t._s(t._f("money")(e.price)))]),t._v(" × "+t._s(e.qty)+" ")]),i("div",[t._v(" "+t._s(t._f("money")(e.price*e.qty))+" ")])]),i("div",{staticClass:"flex justify-between bg-indigo-900 p-4 rounded-b"},[i("button",{staticClass:"text-white hover:bg-indigo-600 rounded px-4 py-2",on:{click:function(i){return t.removeFromCart(e)}}},[t._v("Remove")]),i("div",[i("button",{staticClass:"text-white bg-indigo-700 hover:bg-indigo-600 rounded px-4 text-2xl mr-4",on:{click:function(i){return t.increaseItem(e)}}},[t._v("+")]),i("button",{staticClass:"text-white bg-indigo-700 hover:bg-indigo-600 rounded px-4 text-2xl",on:{click:function(i){return t.decreaseItem(e)}}},[t._v("-")])])])])}))],2):t._e(),t.cartList.length?t._e():i("div",{staticClass:"text-center text-white"},[t._v(" There's no item in the cart ")])])},s=[],c=(i("d3b7"),i("5530")),o=i("2f62"),a={name:"Cart.vue",components:{Product:function(){return i.e("chunk-2d21af69").then(i.bind(null,"be6f"))}},props:{carts:{type:Array}},computed:Object(c["a"])({},Object(o["d"])(["cartList"]),{},Object(o["c"])(["totalAmount"])),methods:Object(c["a"])({},Object(o["b"])(["increaseItem","decreaseItem","removeFromCart"]),{checkout:function(){this.$router.push("/checkout")}})},r=a,d=i("2877"),u=Object(d["a"])(r,n,s,!1,null,"305ab428",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20f8d6.6f0d0064.js.map