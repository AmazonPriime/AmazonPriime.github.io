import{u as s,a as n,j as e,c as r,b as u,d as a,C as i,T as c,R as l}from"./index-CVANUoUD.js";async function d(){console.log("TODO: implement logout endpoint to remove session id from db")}function m(){const o=s(),t=n({mutationFn:d,onSuccess:()=>{r(),o.resetQueries({queryKey:["user"]})}});return e.jsx("button",{className:"border-2 rounded-md py-1 px-2 font-medium bg-slate-200 hover:bg-gray-200 transition duration-250",onClick:()=>t.mutate(),children:"Logout"})}const j=u("/")({component:x});function x(){const{user:o}=a();return e.jsxs(e.Fragment,{children:[o?e.jsxs("h1",{className:"text-xl text-center",children:["Welcome back, ",e.jsx("strong",{children:o.handle}),"! 👋"]}):null,e.jsx(i,{}),e.jsx(c,{}),e.jsx(l,{}),e.jsx(m,{})]})}export{j as Route};
