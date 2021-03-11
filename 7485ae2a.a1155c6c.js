(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(9),r=(n(0),n(151)),l={title:"Get started",description:"Set up Apollo in your Angular app"},i={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Get started",description:"Set up Apollo in your Angular app",source:"@site/docs/get-started.md",slug:"/get-started",permalink:"/docs/get-started",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/get-started.md",version:"current",sidebar:"docs",previous:{title:"Migration Guide",permalink:"/docs/migration"},next:{title:"Queries",permalink:"/docs/data/queries"}},p=[{value:"Installation with Angular Schematics",id:"installation-with-angular-schematics",children:[]},{value:"Installation without Angular Schematics",id:"installation-without-angular-schematics",children:[]},{value:"Links and Cache",id:"links-and-cache",children:[]},{value:"Request data",id:"request-data",children:[{value:"Basic Operations",id:"basic-operations",children:[]}]},{value:"Named clients",id:"named-clients",children:[{value:"Basic usage",id:"basic-usage",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This short set of instructions gets you up and running with Apollo Angular."),Object(r.b)("h1",{id:"installation"},"Installation"),Object(r.b)("p",null,"The simplest way to get started with Apollo Angular is by running ",Object(r.b)("inlineCode",{parentName:"p"},"ng add apollo-angular")," command."),Object(r.b)("h2",{id:"installation-with-angular-schematics"},"Installation with Angular Schematics"),Object(r.b)("p",null,"We support ",Object(r.b)("inlineCode",{parentName:"p"},"ng-add")," command now."),Object(r.b)("p",null,"To start using Apollo Angular simply run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"ng add apollo-angular\n")),Object(r.b)("p",null,"One thing you need to set is the URL of your GraphQL Server, so open ",Object(r.b)("inlineCode",{parentName:"p"},"src/app/graphql.module.ts")," and set ",Object(r.b)("inlineCode",{parentName:"p"},"uri")," variables:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const uri = 'https://48p1r2roz4.sse.codesandbox.io'; // our GraphQL API\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Done!")," You can now create your first query, ",Object(r.b)("a",{parentName:"p",href:"#request-data"},Object(r.b)("strong",{parentName:"a"},"let's go through it together here"))),Object(r.b)("h2",{id:"installation-without-angular-schematics"},"Installation without Angular Schematics"),Object(r.b)("p",null,"If you want to setup Apollo without the help of Angular Schematics, first, let's install some packages:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm install apollo-angular @apollo/client graphql\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client"),": Where the magic happens"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular"),": Bridge between Angular and Apollo Client"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"graphql"),": Second most important package")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@apollo/client")," package requires ",Object(r.b)("inlineCode",{parentName:"p"},"AsyncIterable")," so make sure your tsconfig.json includes ",Object(r.b)("inlineCode",{parentName:"p"},"esnext.asynciterable"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescripton"},'{\n  "compilerOptions": {\n    // ...\n    "lib": [\n      "es2017",\n      "dom",\n      "esnext.asynciterable"\n    ]\n  }\n}\n')),Object(r.b)("p",null,"Great, now that you have all the dependencies you need, let's create your first Apollo Client."),Object(r.b)("p",null,"In our ",Object(r.b)("inlineCode",{parentName:"p"},"app.module.ts")," file use ",Object(r.b)("inlineCode",{parentName:"p"},"APOLLO_OPTIONS")," token to configure Apollo:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import {HttpClientModule} from '@angular/common/http';\nimport {APOLLO_OPTIONS} from 'apollo-angular';\nimport {HttpLink} from 'apollo-angular/http';\nimport {InMemoryCache} from '@apollo/client/core';\n\n@NgModule({\n  imports: [BrowserModule, HttpClientModule],\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory: (httpLink: HttpLink) => {\n        return {\n          cache: new InMemoryCache(),\n          link: httpLink.create({\n            uri: 'https://48p1r2roz4.sse.codesandbox.io',\n          }),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nexport class AppModule {}\n")),Object(r.b)("p",null,"Take a closer look what we did there:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"With ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular/http")," and ",Object(r.b)("inlineCode",{parentName:"li"},"HttpLink")," service we connect our client to an external GraphQL Server"),Object(r.b)("li",{parentName:"ol"},"Thanks to ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client/core")," and ",Object(r.b)("inlineCode",{parentName:"li"},"InMemoryCache")," we have a place to store data in"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"APOLLO_OPTIONS")," provides options to Apollo Client")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"HttpLink")," requires ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," so that's why we also used ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClientModule")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@angular/common/http"),"."),Object(r.b)("h2",{id:"links-and-cache"},"Links and Cache"),Object(r.b)("p",null,"Apollo Angular has a pluggable network interface layer, which can let you configure how queries are sent over HTTP, or replace the whole network part with something completely custom, like a websocket transport, mocked server data, or anything else you can imagine."),Object(r.b)("p",null,"One Link that you already have in your application is called ",Object(r.b)("inlineCode",{parentName:"p"},"HttpLink")," which uses HTTP to send your queries."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"InMemoryCache")," is the default cache implementation for Apollo Client 3.0."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/data/network"},"Explore more the Network Layer of Apollo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/caching/configuration"},"Read more about caching"))),Object(r.b)("h2",{id:"request-data"},"Request data"),Object(r.b)("p",null,"Once all is hooked up, you're ready to start requesting data with ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service!"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," is an Angular service exported from ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular")," to share GraphQL data with your UI."),Object(r.b)("p",null,"First, pass your GraphQL query wrapped in the ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," function (from ",Object(r.b)("inlineCode",{parentName:"p"},"@apollo/client/core"),") to the ",Object(r.b)("inlineCode",{parentName:"p"},"query")," property in the ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," method, in your component.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service is a regular angular service available to you, and your data is streamed through Observables."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"watchQuery")," method returns a ",Object(r.b)("inlineCode",{parentName:"p"},"QueryRef")," object which has the ",Object(r.b)("inlineCode",{parentName:"p"},"valueChanges"),"\nproperty that is an ",Object(r.b)("inlineCode",{parentName:"p"},"Observable"),"."),Object(r.b)("p",null,"An object passed through an Observable contains ",Object(r.b)("inlineCode",{parentName:"p"},"loading"),", ",Object(r.b)("inlineCode",{parentName:"p"},"error"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"data")," properties. Apollo Client tracks error and loading state for you, which will be reflected in the ",Object(r.b)("inlineCode",{parentName:"p"},"loading")," and ",Object(r.b)("inlineCode",{parentName:"p"},"error")," properties. Once the result of your query comes back, it will be attached to the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," property."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It's also possible to fetch data only once. The ",Object(r.b)("inlineCode",{parentName:"p"},"query")," method of ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service returns an ",Object(r.b)("inlineCode",{parentName:"p"},"Observable")," that also resolves with the same result as above.")),Object(r.b)("p",null,"Let's create an ",Object(r.b)("inlineCode",{parentName:"p"},"ExchangeRates")," component to see the ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service in action!"),Object(r.b)("h3",{id:"basic-operations"},"Basic Operations"),Object(r.b)("p",null,"If you want to see how easy it is to fetch data from a GraphQL server with Apollo, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"query")," method. It is as easy as this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'import {Component, OnInit} from \'@angular/core\';\nimport {Apollo, gql} from \'apollo-angular\';\n\n@Component({\n  selector: \'exchange-rates\',\n  template: `\n    <div *ngIf="loading">\n      Loading...\n    </div>\n    <div *ngIf="error">\n      Error :(\n    </div>\n    <div *ngIf="rates">\n      <div *ngFor="let rate of rates">\n        <p>{{ rate.currency }}: {{ rate.rate }}</p>\n      </div>\n    </div>\n  `,\n})\nexport class ExchangeRates implements OnInit {\n  rates: any[];\n  loading = true;\n  error: any;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    this.apollo\n      .watchQuery({\n        query: gql`\n          {\n            rates(currency: "USD") {\n              currency\n              rate\n            }\n          }\n        `,\n      })\n      .valueChanges.subscribe((result: any) => {\n        this.rates = result?.data?.rates;\n        this.loading = result.loading;\n        this.error = result.error;\n      });\n  }\n}\n')),Object(r.b)("p",null,"Congrats, you just made your first query! \ud83c\udf89 If you render your ",Object(r.b)("inlineCode",{parentName:"p"},"ExchangeRates")," component within your ",Object(r.b)("inlineCode",{parentName:"p"},"App")," component from the previous example, you'll first see a loading indicator and then data on the page once it's ready. Apollo Client automatically caches this data when it comes back from the server, so you won't see a loading indicator if you run the same query twice."),Object(r.b)("p",null,"If you'd like to play around with the app we just built, you can view it on ",Object(r.b)("a",{parentName:"p",href:"https://stackblitz.com/edit/basic-apollo-angular-app"},"StackBlitz"),". Don't stop there! Try building more components with ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service and experimenting with the concepts you just learned."),Object(r.b)("h2",{id:"named-clients"},"Named clients"),Object(r.b)("p",null,"It is possible to have several apollo clients in the application, for example pointing to different endpoints."),Object(r.b)("p",null,"In our ",Object(r.b)("inlineCode",{parentName:"p"},"app.module.ts")," file use ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloModule")," and ",Object(r.b)("inlineCode",{parentName:"p"},"APOLLO_OPTIONS")," token to configure Apollo Client:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import {HttpClientModule} from '@angular/common/http';\nimport {APOLLO_NAMED_OPTIONS, NamedOptions} from 'apollo-angular';\nimport {HttpLink} from 'apollo-angular/http';\nimport {InMemoryCache} from '@apollo/client/core';\n\n@NgModule({\n  imports: [BrowserModule, HttpClientModule],\n  providers: [\n    {\n      provide: APOLLO_NAMED_OPTIONS, // <-- Different from standard initialization\n      useFactory(httpLink: HttpLink): NamedOptions {\n        return {\n          newClientName: {\n            // <-- this settings will be saved by name: newClientName\n            cache: new InMemoryCache(),\n            link: httpLink.create({\n              uri: 'https://o5x5jzoo7z.sse.codesandbox.io/graphql',\n            }),\n          },\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nexport class AppModule {}\n")),Object(r.b)("h3",{id:"basic-usage"},"Basic usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import {Injectable} from '@angular/core';\nimport {Apollo, ApolloBase, gql} from 'apollo-angular';\n\n@Injectable()\nclass ApiService {\n  private apollo: ApolloBase;\n\n  constructor(private apolloProvider: Apollo) {\n    this.apollo = this.apolloProvider.use('newClientName');\n  }\n\n  getData(): Observable<ApolloQueryResult> {\n    return this.apollo.watchQuery({\n      query: gql`\n        {\n          rates(currency: \"USD\") {\n            currency\n            rate\n          }\n        }\n      `,\n    });\n  }\n}\n")),Object(r.b)("h2",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Now that you've learned how to fetch data with Apollo Angular, you're ready to dive deeper into creating more complex queries and mutations. After this section, we recommend moving onto:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/data/queries"},"Queries"),": Learn how to fetch queries with arguments and dive deeper into configuration options.."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/data/mutations"},"Mutations"),": Learn how to update data with mutations and when you'll need to update the Apollo cache."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.apollographql.com/docs/react/api/core/ApolloClient/"},"Apollo Client API"),": Sometimes, you'll need to access the client directly like we did in our plain JavaScript example above. Visit the API reference for a full list of options.")))}s.isMDXComponent=!0}}]);