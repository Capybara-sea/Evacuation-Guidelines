import{f as m,ab as y,j as u,u as h,m as b,o as a,c as i,P as r,Q as v,a2 as E,A as o,a1 as C,O as t,z as c,y as d,D as _,E as g}from"./main.ecb0876a.js";const B=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:y}}),w={click:l=>l instanceof MouseEvent},L=["href"],P=u({name:"ElLink"}),$=u({...P,props:B,emits:w,setup(l,{emit:f}){const s=l,n=h("link"),p=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||f("click",e)}return(e,z)=>(a(),i("a",{class:c(o(p)),href:e.disabled||!e.href?void 0:e.href,onClick:k},[e.icon?(a(),r(o(C),{key:0},{default:v(()=>[(a(),r(E(e.icon)))]),_:1})):t("v-if",!0),e.$slots.default?(a(),i("span",{key:1,class:c(o(n).e("inner"))},[d(e.$slots,"default")],2)):t("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):t("v-if",!0)],10,L))}});var S=_($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const I=g(S);export{I as E};
