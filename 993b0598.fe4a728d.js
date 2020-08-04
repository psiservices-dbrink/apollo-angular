(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(7),a=(n(0),n(130)),i={title:"Server Side Rendering"},l={unversionedId:"performance/server-side-rendering",id:"performance/server-side-rendering",isDocsHomePage:!1,title:"Server Side Rendering",description:"Apollo provides two techniques to allow your applications to load quickly, avoiding unnecessary delays to users:",source:"@site/docs/performance/server-side-rendering.md",permalink:"/docs/performance/server-side-rendering",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/performance/server-side-rendering.md",version:"next",sidebar:"docs",previous:{title:"Optimistic UI",permalink:"/docs/performance/optimistic-ui"},next:{title:"Simple Example",permalink:"/docs/recipes/simple-example"}},c=[{value:"Server-side rendering",id:"server-side-rendering",children:[]},{value:"Store rehydration",id:"store-rehydration",children:[]},{value:"Http Caching",id:"http-caching",children:[]},{value:"Best Practices",id:"best-practices",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Apollo provides two techniques to allow your applications to load quickly, avoiding unnecessary delays to users:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Store rehydration, which allows your initial set of queries to return data immediately without a server roundtrip."),Object(a.b)("li",{parentName:"ul"},"Server side rendering, which renders the initial HTML view on the server before sending it to the client.")),Object(a.b)("p",null,"You can use one or both of these techniques to provide a better user experience."),Object(a.b)("h4",{id:"creating-a-client"},"Creating a client"),Object(a.b)("p",null,"Before we dive more into SSR, let's create an example to work on."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// Angular\nimport {NgModule, InjectionToken} from '@angular/core';\nimport {BrowserModule} from '@angular/platform-browser';\nimport {HttpClientModule} from '@angular/common/http';\n// Apollo\nimport {Apollo, APOLLO_OPTIONS} from 'apollo-angular';\nimport {HttpLink} from 'apollo-angular/http';\nimport {InMemoryCache} from '@apollo/client/core';\n\nconst APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');\n\n@NgModule({\n  imports: [\n    // ...\n    BrowserModule,\n    HttpClientModule,\n  ],\n  providers: [\n    {\n      provide: APOLLO_CACHE,\n      useValue: new InMemoryCache(),\n    },\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink, cache: InMemoryCache) {\n        return {\n          link: httpLink.create({uri: '/graphql'}),\n          cache,\n        };\n      },\n      deps: [HttpLink, APOLLO_CACHE],\n    },\n  ],\n  // ...\n})\nclass AppModule {}\n")),Object(a.b)("h2",{id:"server-side-rendering"},"Server-side rendering"),Object(a.b)("p",null,"You can render your entire Angular-based Apollo application on a Node server the same way as you would normally do with an Angular app."),Object(a.b)("p",null,"No changes are required to client queries to support this, so your Apollo-based Angular UI should support SSR out of the box."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"SSR works out of the box when using ",Object(a.b)("inlineCode",{parentName:"p"},"HttpLink")," from ",Object(a.b)("inlineCode",{parentName:"p"},"apollo-angular/http")," because it uses Angular's ",Object(a.b)("inlineCode",{parentName:"p"},"HttpClient")," internally.\nThis would't be that easy with ",Object(a.b)("inlineCode",{parentName:"p"},"apollo-link-http"),". That non-angular Link uses Fetch API which would have to schedule a macroTask (Zone.js) so Angular could wait for the request to finish.")),Object(a.b)("h2",{id:"store-rehydration"},"Store rehydration"),Object(a.b)("p",null,'For applications that can perform some queries on the server prior to rendering the UI on the client, Apollo allows for setting the initial state of data. This is sometimes called rehydration, since the data is "dehydrated" when it is serialized and included in the initial HTML payload.'),Object(a.b)("p",null,"For example, a typical approach is to use ",Object(a.b)("inlineCode",{parentName:"p"},"TransferState")," and ",Object(a.b)("inlineCode",{parentName:"p"},"BrowserTransferStateModule")," so you can then rehydrate the client using the initial state passed from the server:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// Angular\nimport {NgModule, InjectionToken} from '@angular/core';\nimport {\n  BrowserModule,\n  BrowserTransferStateModule,\n  TransferState,\n  makeStateKey,\n} from '@angular/platform-browser';\nimport {HttpClientModule} from '@angular/common/http';\n// Apollo\nimport {Apollo, APOLLO_OPTIONS} from 'apollo-angular';\nimport {HttpLink} from 'apollo-angular/http';\nimport {InMemoryCache} from '@apollo/client/core';\n\nconst APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');\nconst STATE_KEY = makeStateKey<any>('apollo.state');\n\n@NgModule({\n  imports: [\n    // ...\n    BrowserModule,\n    HttpClientModule,\n  ],\n  providers: [\n    {\n      provide: APOLLO_CACHE,\n      useValue: new InMemoryCache(),\n    },\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(\n        httpLink: HttpLink,\n        cache: InMemoryCache,\n        transferState: TransferState,\n      ) {\n        const isBrowser = transferState.hasKey<any>(STATE_KEY);\n\n        if (isBrowser) {\n          const state = transferState.get<any>(STATE_KEY, null);\n          cache.restore(state);\n        } else {\n          transferState.onSerialize(STATE_KEY, () => {\n            return cache.extract();\n          });\n        }\n\n        return {\n          link: httpLink.create({uri: '/graphql'}),\n          cache,\n        };\n      },\n      deps: [HttpLink, APOLLO_CACHE, TransferState],\n    },\n  ],\n  // ...\n})\nclass AppModule {}\n")),Object(a.b)("p",null,"Adding store rehydration to your app is straightforward since Angular itself has a mechanism to transfer data from server to client."),Object(a.b)("p",null,"On ",Object(a.b)("inlineCode",{parentName:"p"},"server")," we extract data from cache when TransferState says it is ready to save and serialize data.\nOn ",Object(a.b)("inlineCode",{parentName:"p"},"browser")," we do opposite thing, we receive transfered data to restore cache."),Object(a.b)("p",null,"Super easy and clean!"),Object(a.b)("p",null,"With all this when the client runs the first set of queries, the data will be returned instantly because it is already in the store!"),Object(a.b)("p",null,"If you are using ",Object(a.b)("inlineCode",{parentName:"p"},"forceFetch")," on some of the initial queries, you can pass the ",Object(a.b)("inlineCode",{parentName:"p"},"ssrForceFetchDelay")," option to skip force fetching during initialization, so that even those queries run using the cache:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// to use it create two Apollo Clients\nconst cache = new InMemoryCache();\n\n// one for client side\napollo.create({\n  cache: cache.restore(window.__APOLLO_STATE__),\n  link,\n  ssrForceFetchDelay: 100,\n});\n\n// and second one for server\napollo.create({\n  cache,\n  link,\n});\n")),Object(a.b)("h2",{id:"http-caching"},"Http Caching"),Object(a.b)("p",null,"As you know, ",Object(a.b)("inlineCode",{parentName:"p"},"HttpLink")," from ",Object(a.b)("inlineCode",{parentName:"p"},"apollo-angular/http")," package uses Angular's ",Object(a.b)("inlineCode",{parentName:"p"},"HttpClient")," to make requests. Thanks to that and ",Object(a.b)("inlineCode",{parentName:"p"},"@nguniversal/common")," it is super easy to make SSR working without even writing a single line of code."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"TransferHttpCacheModule"),", which is a part of ",Object(a.b)("inlineCode",{parentName:"p"},"@nguniversal/common"),", intercepts ",Object(a.b)("inlineCode",{parentName:"p"},"HttpClient")," requests on the server and store the response in the ",Object(a.b)("inlineCode",{parentName:"p"},"TransferState")," key-value store. This is transferred to the client, which then uses it to respond to the same ",Object(a.b)("inlineCode",{parentName:"p"},"HttpClient")," requests on the client."),Object(a.b)("p",null,"Here you can see how simple is that:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import {NgModule} from '@angular/core';\nimport {BrowserModule} from '@angular/platform-browser';\nimport {HttpClientModule} from '@angular/common/http';\n// SSR\nimport {TransferHttpCacheModule} from '@nguniversal/common';\nimport {Apollo} from 'apollo-angular';\nimport {HttpLink} from 'apollo-angular/http';\nimport {InMemoryCache} from 'apollo-cache-inmemory';\n\n@NgModule({\n  imports: [\n    // ...\n    BrowserModule,\n    TransferHttpCacheModule,\n    HttpClientModule,\n  ],\n  // ...\n})\nclass AppModule {\n  constructor(apollo: Apollo, httpLink: HttpLink) {\n    apollo.create({\n      link: httpLink.create({uri: '/graphql'}),\n      cache: new InMemoryCache(),\n    });\n  }\n}\n")),Object(a.b)("h2",{id:"best-practices"},"Best Practices"),Object(a.b)("p",null,"You saw how to use Server-Side Rendering and Store Rehydration in your application, but you will need to be a little careful in how you create Apollo on the server to ensure everything works there as well:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/get-started"}),"creating Apollo")," (",Object(a.b)("inlineCode",{parentName:"p"},"Apollo.create"),") on the server, you'll need to set up your HttpLink to connect to the API server correctly. This might look different to how you do it on the client, since you'll probably have to use an absolute URL to the server if you were using a relative URL on the client.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Since you only want to fetch each query result once, pass the ",Object(a.b)("inlineCode",{parentName:"p"},"ssrMode: true")," option to the ",Object(a.b)("inlineCode",{parentName:"p"},"Apollo.create")," to avoid repeated force-fetching.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"You need to ensure that you create a new client or store instance for each request, rather than re-using the same client for multiple requests. Otherwise the UI will be getting stale data and you'll have problems with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/recipes/authentication"}),"authentication"),"."))),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"You can ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kamilkisiela/apollo-angular-ssr"}),"take a look")," on a simple example with the implementation we talked about."))}s.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,b=u["".concat(i,".").concat(h)]||u[h]||d[h]||a;return n?o.a.createElement(b,l(l({ref:t},p),{},{components:n})):o.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);