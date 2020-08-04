(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{101:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(2),a=r(7),o=(r(0),r(130)),l={title:"Webpack loader"},c={unversionedId:"recipes/webpack",id:"recipes/webpack",isDocsHomePage:!1,title:"Webpack loader",description:"You can load GraphQL queries over .graphql files using Webpack. The package @graphql-tools/webpack-loader comes with a loader easy to setup and with some benefits:",source:"@site/docs/recipes/webpack.md",permalink:"/docs/recipes/webpack",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/recipes/webpack.md",version:"next",sidebar:"docs",previous:{title:"Angular CLI",permalink:"/docs/recipes/angular-cli"},next:{title:"Authentication",permalink:"/docs/recipes/authentication"}},p=[{value:"Jest",id:"jest",children:[]},{value:"Fragments",id:"fragments",children:[]}],i={rightToc:p};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can load GraphQL queries over ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files using Webpack. The package ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphql-tools/webpack-loader"}),Object(o.b)("inlineCode",{parentName:"a"},"@graphql-tools/webpack-loader"))," comes with a loader easy to setup and with some benefits:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Do not process GraphQL ASTs on client-side"),Object(o.b)("li",{parentName:"ol"},"Enable queries to be separated from logic")),Object(o.b)("p",null,"In the example below, we create a new file called ",Object(o.b)("inlineCode",{parentName:"p"},"currentUser.graphql"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),"query CurrentUserForLayout {\n  currentUser {\n    login\n    avatar_url\n  }\n}\n")),Object(o.b)("p",null,"You can load this file adding a rule in your webpack config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"loaders: [\n  {\n    test: /\\.(graphql|gql)$/,\n    exclude: /node_modules/,\n    loader: '@graphql-tools/webpack-loader'\n  }\n]\n")),Object(o.b)("p",null,"As you can see, ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," or ",Object(o.b)("inlineCode",{parentName:"p"},".gql")," files will be parsed whenever imported:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@angular/core';\nimport { Apollo } from 'apollo-angular';\n\nimport currentUserQuery from './currentUser.graphql';\n\n@Component({ ... })\nclass ProfileComponent {\n  constructor(\n    apollo: Apollo\n  ) {\n    apollo.query({ query: currentUserQuery })\n      .subscribe(result => { ... });\n  }\n}\n")),Object(o.b)("h3",{id:"jest"},"Jest"),Object(o.b)("p",null,Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://facebook.github.io/jest/"}),"Jest")," can't use the Webpack loaders. To make the same transformation work in Jest, use ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphql-tools/jest-transform"}),Object(o.b)("inlineCode",{parentName:"a"},"@graphql-tools/jest-transform")),"."),Object(o.b)("h2",{id:"fragments"},"Fragments"),Object(o.b)("p",null,"You can use and include fragments in ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," files and have webpack include those dependencies for you, similar to how you would use fragments and queries with the gql tag in plain JS."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),'#import "./UserInfoFragment.graphql"\n\nquery CurrentUserForLayout {\n  currentUser {\n    ...UserInfo\n  }\n}\n')),Object(o.b)("p",null,"See how we import the UserInfo fragment from another ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file (same way you'd import modules in JS)."),Object(o.b)("p",null,"And here's an example of defining the fragment in another ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),"fragment UserInfo on User {\n  login\n  avatar_url\n}\n")))}s.isMDXComponent=!0},130:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var n=a.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=t,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:n},i),{},{components:r})):a.a.createElement(d,c({ref:n},i))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);