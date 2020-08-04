(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(7),i=(n(0),n(130)),r={title:"Mutations",description:"Update data with the Apollo.mutate"},s={unversionedId:"data/mutations",id:"data/mutations",isDocsHomePage:!1,title:"Mutations",description:"Update data with the Apollo.mutate",source:"@site/docs/data/mutations.md",permalink:"/docs/data/mutations",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/data/mutations.md",version:"next",sidebar:"docs",previous:{title:"Queries",permalink:"/docs/data/queries"},next:{title:"Subscriptions",permalink:"/docs/data/subscriptions"}},l=[{value:"Basic Mutations",id:"basic-mutations",children:[{value:"Calling mutations",id:"calling-mutations",children:[]}]},{value:"Optimistic UI",id:"optimistic-ui",children:[]},{value:"Designing mutation results",id:"designing-mutation-results",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In addition to fetching data using queries, Apollo also handles GraphQL mutations. Mutations are identical to queries in syntax, the only difference being that you use the keyword ",Object(i.b)("inlineCode",{parentName:"p"},"mutation")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"query")," to indicate that the operation is used to change the dataset behind the schema."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"mutation upvotePost {\n  upvotePost(\n    postId: 12\n  ) {\n    id\n    votes\n  }\n}\n")),Object(i.b)("p",null,"GraphQL mutations consist of two parts:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The mutation name with arguments (",Object(i.b)("inlineCode",{parentName:"li"},"upvotePost"),"), which represents the actual operation to be done on the server"),Object(i.b)("li",{parentName:"ol"},"The fields you want back from the result of the mutation to update the client (",Object(i.b)("inlineCode",{parentName:"li"},"id")," and ",Object(i.b)("inlineCode",{parentName:"li"},"vote"),")")),Object(i.b)("p",null,"The result of the above mutation might be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescripton"}),'{\n  "data": {\n    "upvotePost": {\n      "id": 12,\n      "votes": 123\n    }\n  }\n}\n')),Object(i.b)("p",null,"When we use mutations in Apollo, the result is typically integrated into the cache automatically ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/caching/interaction#normalization-with-dataidfromobject"}),"based on the id of the result"),", which in turn updates UI automatically, so we don't explicitly handle the results ourselves. In order for the client to correctly do this, we need to ensure we select the correct fields (as in all the fields that we care about that may have changed)."),Object(i.b)("h2",{id:"basic-mutations"},"Basic Mutations"),Object(i.b)("p",null,"Using ",Object(i.b)("inlineCode",{parentName:"p"},"Apollo")," it's easy to call mutation. You can simply use ",Object(i.b)("inlineCode",{parentName:"p"},"mutate")," method."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@angular/core';\nimport { Apollo, gql } from 'apollo-angular';\n\nconst UPVOTE_POST = gql`\n  mutation UpvotePost {\n    upvotePost(postId: 12) {\n      id\n      votes\n    }\n  }\n`;\n\n@Component({ ... })\nclass UpvotePostComponent {\n  constructor(private apollo: Apollo) {}\n\n  newRepository() {\n    this.apollo.mutate({\n      mutation: UPVOTE_POST\n    }).subscribe();\n  }\n}\n")),Object(i.b)("h3",{id:"calling-mutations"},"Calling mutations"),Object(i.b)("p",null,"Most mutations will require arguments in the form of query variables, and you may wish to provide other options to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/apollo-client/#ApolloClient.mutate"}),"ApolloClient#mutate"),". You can directly pass options to ",Object(i.b)("inlineCode",{parentName:"p"},"mutate")," when you call it in the wrapped component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@angular/core';\n\nimport { Apollo, gql } from 'apollo-angular';\n\nconst UPVOTE_POST = gql`\n  mutation UpvotePost($postId: Int!) {\n    upvotePost(postId: $postId) {\n      id\n      votes\n    }\n  }\n`;\n\n@Component({ ... })\nclass UpvotePostComponent {\n  constructor(private apollo: Apollo) {}\n\n  upvote() {\n    this.apollo.mutate({\n      mutation: UPVOTE_POST,\n      variables: {\n        postId: 12\n      }\n    }).subscribe(({ data }) => {\n      console.log('got data', data);\n    },(error) => {\n      console.log('there was an error sending the query', error);\n    });\n  }\n}\n")),Object(i.b)("p",null,"As you can see, ",Object(i.b)("inlineCode",{parentName:"p"},"mutate")," method returns an ",Object(i.b)("inlineCode",{parentName:"p"},"Observable")," that resolves with ",Object(i.b)("inlineCode",{parentName:"p"},"ApolloQueryResult"),". It is the same result we get when we fetch queries."),Object(i.b)("p",null,"However, typically you'd want to keep the concern of understanding the mutation's structure out of your presentational component. The best way to do this is to use a service to bind your mutate function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import {Component, Injectable} from '@angular/core';\nimport {Apollo, gql} from 'apollo-angular';\n\nconst UPVOTE_POST = gql`\n  mutation UpvotePost($postId: Int!) {\n    upvotePost(postId: $postId) {\n      id\n      votes\n    }\n  }\n`;\n\n@Injectable({\n  providedIn: 'root'\n})\nclass UpvoteService {\n  constructor(private apollo: Apollo) {}\n\n  upvote(postId: string) {\n    return this.apollo.mutate({\n      mutation: UPVOTE_POST,\n      variables: {\n        postId\n      }\n    });\n  }\n}\n\n\n@Component({ ... })\nclass UpvoteComponent {\n  constructor(private upvoteService: UpvoteService) {}\n\n  newRepository() {\n    this.upvoteService.upvote(12)\n      .subscribe(({ data }) => {\n        console.log('got data', data);\n      }, (error) => {\n        console.log('there was an error sending the query', error);\n      });\n  }\n}\n\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that in general you shouldn't attempt to use the results from the mutation callback directly, instead you can rely on Apollo's id-based cache updating to take care of it for you, or if necessary passing an ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/caching/interaction#updatequeries"}),Object(i.b)("inlineCode",{parentName:"a"},"updateQueries"))," callback to update the result of relevant queries with your mutation results.")),Object(i.b)("h2",{id:"optimistic-ui"},"Optimistic UI"),Object(i.b)("p",null,"Sometimes your client code can easily predict the result of the mutation, if it succeeds, even before the server responds with the result. For instance, in GitHunt, when a user comments on a repository, we want to show the new comment in context immediately, without waiting on the latency of a round trip to the server, giving the user the experience of a snappy UI. This is what we call ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://info.meteor.com/blog/optimistic-ui-with-meteor-latency-compensation"}),"Optimistic UI"),". This is possible if the client can predict an ",Object(i.b)("em",{parentName:"p"},"Optimistic Response")," for the mutation."),Object(i.b)("p",null,"Apollo Client gives you a way to specify the ",Object(i.b)("inlineCode",{parentName:"p"},"optimisticResponse")," option, that will be used to update active queries immediately, in the same way that the server's mutation response will. Once the actual mutation response returns, the optimistic part will be thrown away and replaced with the real result."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@angular/core';\n\nimport { Apollo, gql } from 'apollo-angular';\n\nconst CHANGE_POST_TITLE = gql`\n  mutation ChangePostTitle($postId: Int!, $title: String!) {\n    changePostTitle(postId: $postId, title: $title) {\n      id\n      title\n    }\n  }\n`;\n\n@Component({ ... })\nclass PostComponent {\n  currentUser: User;\n\n  constructor(private apollo: Apollo) {}\n\n  upvote({ postId, title }) {\n    this.apollo.mutate({\n      mutation: CHANGE_POST_TITLE,\n      variables: { postId, title },\n      optimisticResponse: {\n        __typename: 'Mutation',\n        changePostTitle: {\n          __typename: 'Post',\n          id: postId,\n          title\n        },\n      },\n    }).subscribe();\n  }\n}\n")),Object(i.b)("p",null,"For the example above, it is easy to construct an optimistic response, since we know the shape of the new comment and can approximately predict the created date. The optimistic response doesn't have to be exactly correct because it will always will be replaced with the real result from the server, but it should be close enough to make users feel like there is no delay."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"As this comment is ",Object(i.b)("em",{parentName:"p"},"new")," and not visible in the UI before the mutation, it won't appear automatically on the screen as a result of the mutation. You can use ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/caching/interaction#updatequeries"}),Object(i.b)("inlineCode",{parentName:"a"},"updateQueries"))," to make it appear in this case.")),Object(i.b)("h2",{id:"designing-mutation-results"},"Designing mutation results"),Object(i.b)("p",null,"When people talk about GraphQL, they often focus on the data fetching side of things, because that's where GraphQL brings the most value. Mutations can be pretty nice if done well, but the principles of designing good mutations, and especially good mutation result types, are not yet well-understood in the open source community. So when you are working with mutations it might often feel like you need to make a lot of application-specific decisions."),Object(i.b)("p",null,"In GraphQL, mutations can return any type, and that type can be queried just like a regular GraphQL query. So the question is - what type should a particular mutation return?"),Object(i.b)("p",null,"In GraphQL itself, there isn't any specification about how this is supposed to work. In most cases, the data available from a mutation result should be the server developer's best guess of the data a client would need to understand what happened on the server. For example, a mutation that creates a new comment on a blog post might return the comment itself. A mutation that reorders an array might need to return the new array."))}p.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,b=u["".concat(r,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);