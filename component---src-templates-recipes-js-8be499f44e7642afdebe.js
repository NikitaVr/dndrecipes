(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{BdGD:function(e,t,a){"use strict";a.r(t);a("pJf4"),a("gu/5"),a("eoYm");var n=a("q1tI"),c=a.n(n),r=a("Wbzz"),l=a("e4VM"),u=a("O8qb"),o=a("At4Z"),m=a("zUrK"),i=a("jDKy"),s=a("sjrs"),d=a("DQUT");t.default=function(e){var t=e.pageContext.recipes,a=Object(n.useState)(),p=a[0],b=a[1],E=t.filter((function(e){return!p||p&&e.name.toLowerCase().includes(p.toLowerCase())}));return c.a.createElement(u.a,null,c.a.createElement(o.a,{title:"Recipes"},c.a.createElement("div",null,c.a.createElement(m.a,{className:"mb-3"},c.a.createElement(m.a.Prepend,null,c.a.createElement(m.a.Text,{id:"basic-addon1"},"🔍")),c.a.createElement(d.DebounceInput,{element:i.a,minLength:1,debounceTimeout:300,value:p,onChange:function(e){return b(e.target.value)}})),c.a.createElement(s.a,null,E.map((function(e,t){return c.a.createElement(r.Link,{to:"/recipes/"+Object(l.convertToSlug)(e.name)},c.a.createElement(s.a.Item,{action:!0},c.a.createElement("div",{class:"d-flex w-100 justify-content-between"},c.a.createElement("h5",{class:"mb-1"},e.name))))}))))))}}}]);
//# sourceMappingURL=component---src-templates-recipes-js-8be499f44e7642afdebe.js.map