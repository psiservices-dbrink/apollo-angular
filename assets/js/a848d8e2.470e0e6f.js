(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(8),r=(n(0),n(251)),i=["components"],c={title:"Direct Cache Access",description:"Read and write functions for fine-grained cache access."},l={unversionedId:"features/caching",id:"version-1.0/features/caching",isDocsHomePage:!1,title:"Direct Cache Access",description:"Read and write functions for fine-grained cache access.",source:"@site/versioned_docs/version-1.0/features/caching.md",slug:"/features/caching",permalink:"/docs/1.0/features/caching",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/features/caching.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Error Handling",permalink:"/docs/1.0/features/error-handling"},next:{title:"Optimistic UI",permalink:"/docs/1.0/features/optimistic-ui"}},p=[{value:"Updating the cache after a mutation",id:"updating-the-cache-after-a-mutation",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Apollo Client normalizes all of your data so that if any data you previously fetched from your GraphQL server is updated in a later data fetch from your server then your data will be updated with the latest truth from your server."),Object(r.b)("p",null,"This normalization process is constantly happening behind the scenes when you call ",Object(r.b)("inlineCode",{parentName:"p"},"watchQuery")," but this process is often not enough to describe the updates to your data model as the result of a mutation. For example, if you wanted to add an item to the end of an array fetched by one of your queries. You also might want to read data from the normalized Apollo Client store at a specific id without making another GraphQL server fetch."),Object(r.b)("p",null,"To interact directly with your data in the Apollo Client store you may use the methods ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery"),", ",Object(r.b)("inlineCode",{parentName:"p"},"readFragment"),", ",Object(r.b)("inlineCode",{parentName:"p"},"writeQuery"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"writeFragment")," that are accessible from the ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloClient")," class. This article will teach you how to use these methods to control your data."),Object(r.b)("p",null,"If you would like a better understanding of the data normalization process then we recommend reading the ",Object(r.b)("a",{parentName:"p",href:"/docs/1.0/basics/caching#direct-cache-access"},"'How it works'")," documentation article. Knowledge around how Apollo Client works is not a prerequisite for using the methods described here, but it may be helpful."),Object(r.b)("p",null,"All of the methods we will discuss can be called from the ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloClient")," class. Any code demonstration in this article will assume that we have already initialized an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloClient")," and that we have imported the ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," tag from ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag"),"."),Object(r.b)("p",null,"You can read more about Caching ",Object(r.b)("a",{parentName:"p",href:"/docs/1.0/basics/caching"},"here")),Object(r.b)("h2",{id:"updating-the-cache-after-a-mutation"},"Updating the cache after a mutation"),Object(r.b)("p",null,"Being able to read and write to the Apollo cache from anywhere in your application gives you a lot of power over your data. However, there is one place where we most often want to update our cached data: after a mutation. As such, Apollo Client has optimized the experience for updating your cache with the read and write methods after a mutation with the ",Object(r.b)("inlineCode",{parentName:"p"},"update")," function. Let us say that we have the following GraphQL mutation:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"mutation TodoCreateMutation($text: String!) {\n  createTodo(text: $text) {\n    id\n    text\n    completed\n  }\n}\n")),Object(r.b)("p",null,"We may also have the following GraphQL query:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"query TodoAppQuery {\n  todos {\n    id\n    text\n    completed\n  }\n}\n")),Object(r.b)("p",null,"At the end of our mutation we want our query to include the new todo like we had sent our ",Object(r.b)("inlineCode",{parentName:"p"},"TodoAppQuery")," a second time after the mutation finished without actually sending the query. To do this we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"update")," function provided as an option of the ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo.mutate")," method. To update your cache with the mutation just write code that looks like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"// We assume that the GraphQL operations `TodoCreateMutation` and\n// `TodoAppQuery` have already been defined using the `gql` tag.\n\nconst text = 'Hello, world!';\n\n@Component({ ... })\nclass AppComponent {\n  createTodo() {\n    this.apollo.mutate({\n      mutation: TodoCreateMutation,\n      variables: {\n        text,\n      },\n      update: (proxy, { data: { createTodo } }) => {\n        // Read the data from our cache for this query.\n        const data = proxy.readQuery({ query: TodoAppQuery });\n\n        // If you are using the Query service (TodoAppGQL) instead of defining your GQL as a constant, you can reference the query as:\n        // const data = proxy.readQuery({ query: this.todoAppGQL.document });\n\n        // Add our todo from the mutation to the end.\n        data.todos.push(createTodo);\n\n        // Write our data back to the cache.\n        proxy.writeQuery({ query: TodoAppQuery, data });\n\n        // alternatively when using Query service:\n        // proxy.writeQuery({ query: this.todoAppGQL.document, data });\n      },\n    }).subscribe();\n  }\n}\n")),Object(r.b)("p",null,"The first ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," argument is an instance of ",Object(r.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/api/apollo-client/#ApolloClient.mutate"},Object(r.b)("inlineCode",{parentName:"a"},"DataProxy"))," has the same for methods that we just learned exist on the Apollo Client: ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery"),", ",Object(r.b)("inlineCode",{parentName:"p"},"readFragment"),", ",Object(r.b)("inlineCode",{parentName:"p"},"writeQuery"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"writeFragment"),". The reason we call them on a ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," object here instead of on our ",Object(r.b)("inlineCode",{parentName:"p"},"client")," instance is that we can easily apply optimistic updates (which we will demonstrate in a bit). The ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," object also provides an isolated transaction which shields you from any other mutations going on at the same time, and the ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," object also batches writes together until the very end."),Object(r.b)("p",null,"If you provide an ",Object(r.b)("inlineCode",{parentName:"p"},"optimisticResponse")," option to the mutation then the ",Object(r.b)("inlineCode",{parentName:"p"},"update")," function will be run twice. Once immediately after you call ",Object(r.b)("inlineCode",{parentName:"p"},"apollo.mutate")," with the data from ",Object(r.b)("inlineCode",{parentName:"p"},"optimisticResponse"),". After the mutation successfully executes against the server the changes made in the first call to ",Object(r.b)("inlineCode",{parentName:"p"},"update")," will be rolled back and ",Object(r.b)("inlineCode",{parentName:"p"},"update")," will be called with the ",Object(r.b)("em",{parentName:"p"},"actual")," data returned by the mutation and not just the optimistic response."),Object(r.b)("p",null,"Putting it all together:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const text = 'Hello, world!';\n\n@Component({ ... })\nclass AppComponent {\n  createTodo() {\n    this.apollo.mutate({\n      mutation: TodoCreateMutation,\n      variables: {\n        text,\n      },\n      optimisticResponse: {\n        id: -1, // -1 is a temporary id for the optimistic response.\n        text,\n        completed: false,\n      },\n      update: (proxy, { data: { createTodo } }) => {\n        const data = proxy.readQuery({ query: TodoAppQuery });\n        data.todos.push(createTodo);\n        proxy.writeQuery({ query: TodoAppQuery, data });\n      },\n    });\n  }\n}\n")),Object(r.b)("p",null,"As you can see the ",Object(r.b)("inlineCode",{parentName:"p"},"update")," function on ",Object(r.b)("inlineCode",{parentName:"p"},"apollo.mutate")," provides extra change management functionality specific to the use case of a mutation while still providing you the powerful data control APIs that are available on ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"update")," function is not a good place for side-effects as it may be called multiple times. Also, you may not call any of the methods on ",Object(r.b)("inlineCode",{parentName:"p"},"proxy")," asynchronously."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Resources:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.apollographql.com/docs/react/api/apollo-client/#ApolloClient.mutate"},Object(r.b)("inlineCode",{parentName:"a"},"ApolloClient#mutate")," API documentation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.apollographql.com/docs/react/api/apollo-client/#ApolloClient.mutate"},Object(r.b)("inlineCode",{parentName:"a"},"DataProxy")," API documentation"))))}u.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,b=u["".concat(i,".").concat(h)]||u[h]||d[h]||r;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);