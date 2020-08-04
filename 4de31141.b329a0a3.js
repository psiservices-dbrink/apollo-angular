(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(7),r=(n(0),n(130)),l={title:"Setup and options"},i={unversionedId:"basics/setup",id:"version-1.0/basics/setup",isDocsHomePage:!1,title:"Setup and options",description:"Installation",source:"@site/versioned_docs/version-1.0/basics/setup.md",permalink:"/docs/1.0/basics/setup",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/basics/setup.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Migration Guide",permalink:"/docs/1.0/migration"},next:{title:"Queries",permalink:"/docs/1.0/basics/queries"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Installation with Angular Schematics",id:"installation-with-angular-schematics",children:[]},{value:"Installation without Angular Schematics",id:"installation-without-angular-schematics",children:[]},{value:"Links and Cache",id:"links-and-cache",children:[]},{value:"Request data",id:"request-data",children:[{value:"Basic Operations",id:"basic-operations",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"The simplest way to get started with Apollo Angular is by running ",Object(r.b)("inlineCode",{parentName:"p"},"ng add apollo-angular")," command."),Object(r.b)("h2",{id:"installation-with-angular-schematics"},"Installation with Angular Schematics"),Object(r.b)("p",null,"We support ",Object(r.b)("inlineCode",{parentName:"p"},"ng-add")," command now."),Object(r.b)("p",null,"To start using Apollo Angular simply run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ng add apollo-angular\n")),Object(r.b)("p",null,"One thing you need to set is the URL of your GraphQL Server, so open ",Object(r.b)("inlineCode",{parentName:"p"},"src/app/graphql.module.ts")," and set ",Object(r.b)("inlineCode",{parentName:"p"},"uri")," variables:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const uri = 'https://o5x5jzoo7z.sse.codesandbox.io/graphql'; //our test Graphql Server which returns rates\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Done!")," You can now create your first query, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#request-data"}),Object(r.b)("strong",{parentName:"a"},"let's go through it together here"))),Object(r.b)("h2",{id:"installation-without-angular-schematics"},"Installation without Angular Schematics"),Object(r.b)("p",null,"If you want to setup Apollo without the help of Angular Schematics, first, let's install some packages:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save apollo-angular \\\n  apollo-angular-link-http \\\n  apollo-link \\\n  apollo-client \\\n  apollo-cache-inmemory \\\n  graphql-tag \\\n  graphql\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-client"),": Where the magic happens"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular"),": Bridge between Angular and Apollo Client"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-cache-inmemory"),": Our recommended cache"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular-link-http"),": An Apollo Link for remote data fetching"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"graphql"),": Second most important package"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"graphql-tag"),": Parses your strings to GraphQL documents")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-client")," package requires ",Object(r.b)("inlineCode",{parentName:"p"},"AsyncIterable")," so make sure your tsconfig.json includes ",Object(r.b)("inlineCode",{parentName:"p"},"esnext.asynciterable"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    // ...\n    "lib": [\n      "es2017",\n      "dom",\n      "esnext.asynciterable"\n    ]\n  }\n}\n')),Object(r.b)("p",null,"Great, now that you have all the dependencies you need, let's create your first Apollo Client."),Object(r.b)("p",null,"In our ",Object(r.b)("inlineCode",{parentName:"p"},"app.module.ts")," file use ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloModule")," and ",Object(r.b)("inlineCode",{parentName:"p"},"APOLLO_OPTIONS")," token to configure Apollo Client:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { HttpClientModule } from "@angular/common/http";\nimport { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";\nimport { HttpLinkModule, HttpLink } from "apollo-angular-link-http";\nimport { InMemoryCache } from "apollo-cache-inmemory";\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    HttpClientModule,\n    ApolloModule,\n    HttpLinkModule\n  ],\n  providers: [{\n    provide: APOLLO_OPTIONS,\n    useFactory: (httpLink: HttpLink) => {\n      return {\n        cache: new InMemoryCache(),\n        link: httpLink.create({\n          uri: "https://o5x5jzoo7z.sse.codesandbox.io/graphql"\n        })\n      }\n    },\n    deps: [HttpLink]\n  }],\n})\nexport class AppModule {}\n')),Object(r.b)("p",null,"Take a closer look what we did there:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"With ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular-link-http")," and ",Object(r.b)("inlineCode",{parentName:"li"},"HttpLink")," service we connect our client to an external GraphQL Server"),Object(r.b)("li",{parentName:"ol"},"Thanks to ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-cache-inmemory")," and ",Object(r.b)("inlineCode",{parentName:"li"},"InMemoryCache")," we have a place to store data in"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"APOLLO_OPTIONS")," provides options to Apollo Client")),Object(r.b)("p",null,"Apollo's HttpLink requires ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," so that's why we also used ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClientModule")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@angular/common/http"),"."),Object(r.b)("h2",{id:"links-and-cache"},"Links and Cache"),Object(r.b)("p",null,"Apollo Client has a pluggable network interface layer, which can let you configure how queries are sent over HTTP, or replace the whole network part with something completely custom, like a websocket transport, mocked server data, or anything else you can imagine."),Object(r.b)("p",null,"One Link that you already have in your application is called ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular-link-http")," which uses HTTP to send your queries."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"apollo-cache-inmemory")," is the default cache implementation for Apollo Client 2.0. InMemoryCache is a normalized data store that supports all of Apollo Client 1.0\u2019s features without the dependency on Redux."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.0/basics/network-layer"}),"Explore more the Network Layer of Apollo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.0/basics/caching"}),"Read more about caching"))),Object(r.b)("h2",{id:"request-data"},"Request data"),Object(r.b)("p",null,"Once all is hooked up, you're ready to start requesting data with ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service!"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," is an Angular service exported from ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular")," to share GraphQL data with your UI."),Object(r.b)("p",null,"First, pass your GraphQL query wrapped in the ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," function (from ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag"),") to the ",Object(r.b)("inlineCode",{parentName:"p"},"query")," property in the ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," method, in your component.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service is a regular angular service that you familiar with, data are being streamed through Observables. Same here."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"watchQuery")," method returns a ",Object(r.b)("inlineCode",{parentName:"p"},"QueryRef")," object which has the ",Object(r.b)("inlineCode",{parentName:"p"},"valueChanges"),"\nproperty that is an ",Object(r.b)("inlineCode",{parentName:"p"},"Observable"),"."),Object(r.b)("p",null,"An object passed through an Observable contains ",Object(r.b)("inlineCode",{parentName:"p"},"loading"),", ",Object(r.b)("inlineCode",{parentName:"p"},"error"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"data")," properties. Apollo Client tracks error and loading state for you, which will be reflected in the ",Object(r.b)("inlineCode",{parentName:"p"},"loading")," and ",Object(r.b)("inlineCode",{parentName:"p"},"error")," properties. Once the result of your query comes back, it will be attached to the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," property."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It's also possible to fetch data only once. The ",Object(r.b)("inlineCode",{parentName:"p"},"query")," method of ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service returns an ",Object(r.b)("inlineCode",{parentName:"p"},"Observable")," that also resolves with the same result as\nabove.")),Object(r.b)("p",null,"Let's create an ",Object(r.b)("inlineCode",{parentName:"p"},"ExchangeRates")," component to see the ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service in action!"),Object(r.b)("h3",{id:"basic-operations"},"Basic Operations"),Object(r.b)("p",null,"If you want to see how easy it is to fetch data from a GraphQL server with Apollo, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"query")," method. It is as easy as this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import {Component, OnInit} from \'@angular/core\';\nimport {Apollo} from \'apollo-angular\';\nimport gql from \'graphql-tag\';\n\n@Component({\n  selector: \'exchange-rates\',\n  template: `\n    <div *ngIf="loading">\n      Loading...\n    </div>\n    <div *ngIf="error">\n      Error :(\n    </div>\n    <div *ngIf="rates">\n      <div *ngFor="let rate of rates">\n        <p>{{rate.currency}}: {{rate.rate}}</p>\n      </div>\n    </div>\n  `,\n})\nexport class ExchangeRates implements OnInit {\n  rates: any[];\n  loading = true;\n  error: any;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    this.apollo\n      .watchQuery({\n        query: gql`\n          {\n            rates(currency: "USD") {\n              currency\n              rate\n            }\n          }\n        `,\n      })\n      .valueChanges.subscribe(result => {\n        this.rates = result.data && result.data.rates;\n        this.loading = result.loading;\n        this.error = result.error;\n      });\n  }\n}\n')),Object(r.b)("p",null,"Congrats, you just made your first query! \ud83c\udf89 If you render your ",Object(r.b)("inlineCode",{parentName:"p"},"ExchangeRates")," component within your ",Object(r.b)("inlineCode",{parentName:"p"},"App")," component from the previous example, you'll first see a loading indicator and then data on the page once it's ready. Apollo Client automatically caches this data when it comes back from the server, so you won't see a loading indicator if you run the same query twice."),Object(r.b)("p",null,"If you'd like to play around with the app we just built, you can view it on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackblitz.com/edit/basic-apollo-angular-app"}),"StackBlitz"),". Don't stop there! Try building more components with ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service and experimenting with the concepts you just learned."),Object(r.b)("h2",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Now that you've learned how to fetch data with Apollo Angular, you're ready to dive deeper into creating more complex queries and mutations. After this section, we recommend moving onto:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.0/basics/queries"}),"Queries"),": Learn how to fetch queries with arguments and dive deeper into configuration options.."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.0/basics/mutations"}),"Mutations"),": Learn how to update data with mutations and when you'll need to update the Apollo cache.")))}s.isMDXComponent=!0}}]);