(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{164:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return p})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(1),o=n(8),a=(n(0),n(251)),i=["components"],c={title:"Angular CLI"},p={unversionedId:"recipes/angular-cli",id:"version-2.0/recipes/angular-cli",isDocsHomePage:!1,title:"Angular CLI",description:"To get started with Apollo and Angular run:",source:"@site/versioned_docs/version-2.0/recipes/angular-cli.md",slug:"/recipes/angular-cli",permalink:"/docs/2.0/recipes/angular-cli",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-2.0/recipes/angular-cli.md",version:"2.0",sidebar:"version-2.0/docs",previous:{title:"Automatic Persisted Queries",permalink:"/docs/2.0/recipes/automatic-persisted-queries"},next:{title:"Webpack loader",permalink:"/docs/2.0/recipes/webpack"}},l=[{value:"Proxy",id:"proxy",children:[]}],u={toc:l};function s(e){var r=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To get started with Apollo and Angular run:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ng add apollo-angular\n")),Object(a.b)("h2",{id:"proxy"},"Proxy"),Object(a.b)("p",null,"If your GraphQL endpoint lives under different host with Angular CLI you can easily define proxy configuration."),Object(a.b)("p",null,"Take for example ",Object(a.b)("inlineCode",{parentName:"p"},"api.example.com/graphql"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescripton"},'{\n  "/graphql": {\n    "target": "http://api.example.com"\n  }\n}\n')),Object(a.b)("p",null,"Create a json file (",Object(a.b)("inlineCode",{parentName:"p"},"proxy.config.json")," for example) with that configuration."),Object(a.b)("p",null,"To run server use ",Object(a.b)("inlineCode",{parentName:"p"},"--proxy-config")," option:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ng serve --proxy-config <path to file>\n")),Object(a.b)("p",null,"An example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ng serve --proxy-config proxy.config.json\n")))}s.isMDXComponent=!0},251:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=t,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:r},l),{},{components:n})):o.a.createElement(f,c({ref:r},l))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);