(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(7),r=(n(0),n(130)),i={title:"Updating the Store"},l={unversionedId:"features/cache-updates",id:"version-1.0/features/cache-updates",isDocsHomePage:!1,title:"Updating the Store",description:"Apollo performs two important core tasks: Executing queries and mutations, and caching the results.",source:"@site/versioned_docs/version-1.0/features/cache-updates.md",permalink:"/docs/1.0/features/cache-updates",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/features/cache-updates.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Optimistic UI",permalink:"/docs/1.0/features/optimistic-ui"},next:{title:"Using Fragments",permalink:"/docs/1.0/features/fragments"}},s=[{value:"Normalization with <code>dataIdFromObject</code>",id:"normalization-with-dataidfromobject",children:[{value:"Automatic store updates",id:"automatic-store-updates",children:[]}]},{value:"Updating after a mutation",id:"updating-after-a-mutation",children:[{value:"<code>refetchQueries</code>",id:"refetchqueries",children:[]},{value:"<code>update</code>",id:"update",children:[]},{value:"<code>updateQueries</code>",id:"updatequeries",children:[]}]},{value:"Incremental loading: <code>fetchMore</code>",id:"incremental-loading-fetchmore",children:[]},{value:"Cache redirects with <code>cacheRedirects</code>",id:"cache-redirects-with-cacheredirects",children:[]}],c={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Apollo performs two important core tasks: Executing queries and mutations, and caching the results."),Object(r.b)("p",null,"Thanks to Apollo's store design, it's possible for the results of a query or mutation to update your UI in all the right places. In many cases it's possible for that to happen automatically, whereas in others you need to help the client out a little in doing so."),Object(r.b)("h2",{id:"normalization-with-dataidfromobject"},"Normalization with ",Object(r.b)("inlineCode",{parentName:"h2"},"dataIdFromObject")),Object(r.b)("p",null,"Apollo does result caching based on two things:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The shape of GraphQL queries and their results."),Object(r.b)("li",{parentName:"ol"},"The identities of the objects returned from the server.")),Object(r.b)("p",null,"Flattening out the cache based on object identity is referred to as cache normalization. You can read about our caching model in detail in our blog post, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/apollo-stack/the-concepts-of-graphql-bc68bd819be3"}),'"GraphQL Concepts Visualized"'),"."),Object(r.b)("p",null,"By default, Apollo identifies objects based on two properties: The ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," and an ID field, either ",Object(r.b)("inlineCode",{parentName:"p"},"id")," or ",Object(r.b)("inlineCode",{parentName:"p"},"_id"),". The client automatically adds the ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to your queries, so you just have to make sure to fetch the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," field if you have one."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// This result\n{\n  __typename: 'Person',\n  id: '1234',\n  name: 'Jonas',\n}\n\n// Will get the following ID\n'Person:1234'\n")),Object(r.b)("p",null,"You can also specify a custom function to generate IDs from each object, and supply it as the ",Object(r.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0/basics/caching#normalization"}),Object(r.b)("inlineCode",{parentName:"a"},"InMemoryCache"))," options, if you want to specify how Apollo will identify and de-duplicate the objects returned from the server."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { InMemoryCache } from 'apollo-cache-inmemory';\n\n// If your database has unique IDs across all types of objects, you can use\n// a very simple function!\nconst cache = new InMemoryCache({\n  dataIdFromObject: o => o.id\n});\n")),Object(r.b)("p",null,"These IDs allow Apollo Client to reactively tell all queries that fetched a particular object about updates to that part of the store."),Object(r.b)("p",null,"If you want to get the dataIdFromObjectFunction (for instance when using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0/basics/caching#readfragment"}),Object(r.b)("inlineCode",{parentName:"a"},"readFragment")," function"),"), you can import it from the InMemoryCache package;"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { defaultDataIdFromObject } from 'apollo-cache-inmemory';\nconst person = {\n  __typename: 'Person',\n  id: '1234',\n};\n\ndefaultDataIdFromObject(person); // 'Person:1234'\n")),Object(r.b)("h3",{id:"automatic-store-updates"},"Automatic store updates"),Object(r.b)("p",null,"Let's look at a case where just using the cache normalization results in the correct update to our store. Let's say we do the following query:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  post(id: '5') {\n    id\n    score\n  }\n}\n")),Object(r.b)("p",null,"Then, we do the following mutation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  upvotePost(id: '5') {\n    id\n    score\n  }\n}\n")),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," field on both results matches up, then the ",Object(r.b)("inlineCode",{parentName:"p"},"score")," field everywhere in our UI will be updated automatically! One nice way to take advantage of this property as much as possible is to make your mutation results have all of the data necessary to update the queries previously fetched. A simple trick for this is to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0/features/fragments"}),"fragments")," to share fields between the query and the mutation that affects it."),Object(r.b)("h2",{id:"updating-after-a-mutation"},"Updating after a mutation"),Object(r.b)("p",null,"In some cases, just using ",Object(r.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," is not enough for your application UI to update correctly. For example, if you want to add something to a list of objects without refetching the entire list, or if there are some objects that to which you can't assign an object identifier, Apollo Client cannot update existing queries for you. Read on to learn about the other tools at your disposal."),Object(r.b)("h3",{id:"refetchqueries"},Object(r.b)("inlineCode",{parentName:"h3"},"refetchQueries")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"refetchQueries")," is the simplest way of updating the cache. With ",Object(r.b)("inlineCode",{parentName:"p"},"refetchQueries")," you can specify one or more queries that you want to run after a mutation is completed in order to refetch the parts of the store that may have been affected by the mutation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Component({ ... })\nclass AppComponent {\n  addComment() {\n    this.apollo.mutate({\n      ..., // insert comment mutation\n      refetchQueries: [{\n        query: gql`\n          query updateCache($repoName: String!) {\n            entry(repoFullName: $repoName) {\n              id\n              comments {\n                postedBy {\n                  login\n                  html_url\n                }\n                createdAt\n                content\n              }\n            }\n          }\n        `,\n        variables: { repoName: 'apollographql/apollo-client' },\n      }]\n    }).subscribe();\n  }\n}\n")),Object(r.b)("p",null,"A very common way of using ",Object(r.b)("inlineCode",{parentName:"p"},"refetchQueries")," is to import queries defined for other components to make sure that those components will be updated:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import RepoCommentsQuery from '../queries/RepoCommentsQuery';\n\n@Component({ ... })\nclass AppComponent {\n  addComment() {\n    this.apollo.mutate({\n      //... insert comment mutation\n      refetchQueries: [{\n        query: RepoCommentsQuery,\n        variables: { repoFullName: 'apollographql/apollo-client' },\n      }],\n    }).subscribe();\n  }\n}\n")),Object(r.b)("h3",{id:"update"},Object(r.b)("inlineCode",{parentName:"h3"},"update")),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"update")," gives you full control over the cache, allowing you to make changes to your data model in response to a mutation in any way you like. ",Object(r.b)("inlineCode",{parentName:"p"},"update")," is the recommended way of updating the cache after a query."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import CommentAppQuery from '../queries/CommentAppQuery';\n\nconst SUBMIT_COMMENT_MUTATION = gql`\n  mutation submitComment($repoFullName: String!, $commentContent: String!) {\n    submitComment(repoFullName: $repoFullName, commentContent: $commentContent) {\n      postedBy {\n        login\n        html_url\n      }\n      createdAt\n      content\n    }\n  }\n`;\n\n@Component({ ... })\nclass AppComponent {\n  submit({ repoFullName, commentContent }) {\n    this.apollo.mutate({\n      variables: { repoFullName, commentContent },\n\n      update: (store, { data: { submitComment } }) => {\n        // Read the data from our cache for this query.\n        const data = store.readQuery({ query: CommentAppQuery });\n        // Add our comment from the mutation to the end.\n        data.comments = [ ...data.comments, submitComment];\n        // Write our data back to the cache.\n        store.writeQuery({ query: CommentAppQuery, data });\n      },\n    }).subscribe();\n  }\n}\n")),Object(r.b)("h3",{id:"updatequeries"},Object(r.b)("inlineCode",{parentName:"h3"},"updateQueries")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE: We recommend using the more flexible ",Object(r.b)("inlineCode",{parentName:"strong"},"update")," API instead of ",Object(r.b)("inlineCode",{parentName:"strong"},"updateQueries"),". The ",Object(r.b)("inlineCode",{parentName:"strong"},"updateQueries")," API may be deprecated in the future.")),Object(r.b)("p",null,"As its name suggests, ",Object(r.b)("inlineCode",{parentName:"p"},"updateQueries")," lets you update your UI based on the result of a mutation. To re-emphasize: most of the time, your UI will update automatically based on mutation results, as long as the object IDs in the result match up with the IDs you already have in your store. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#normalization-with-dataidfromobject"}),Object(r.b)("inlineCode",{parentName:"a"},"normalization"))," documentation above for more information about how to take advantage of this feature."),Object(r.b)("p",null,"However, if you are removing or adding items to a list with a mutation or can't assign object identifiers to the relevant objects, you'll have to use ",Object(r.b)("inlineCode",{parentName:"p"},"updateQueries")," to make sure that your UI reflects the change correctly."),Object(r.b)("p",null,'We\'ll take the comments page within GitHunt as our example. When we submit a new comment, the "submit" button fires a mutation which adds a new comment to the "list" of the comments held on the server. In reality, the server doesn\'t know there\'s a list--it just knows that something is added to the ',Object(r.b)("inlineCode",{parentName:"p"},"comments")," table in SQL--so the server can't really tell us exactly where to put the result. The original query that fetched the comments for the list also doesn't know about this new comment yet, so Apollo can't automatically add it to the list for us."),Object(r.b)("p",null,"In this case, we can use ",Object(r.b)("inlineCode",{parentName:"p"},"updateQueries")," to make sure that query result is updated, which will also update Apollo's normalized store to make everything remain consistent."),Object(r.b)("p",null,"If you're familiar with Redux, think of the ",Object(r.b)("inlineCode",{parentName:"p"},"updateQueries")," option as a reducer, except instead of updating the store directly we're updating the query result shape, which means we don't have to worry about how the store internals work."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const SUBMIT_COMMENT_MUTATION = gql`\n  mutation submitComment($repoFullName: String!, $commentContent: String!) {\n    submitComment(repoFullName: $repoFullName, commentContent: $commentContent) {\n      postedBy {\n        login\n        html_url\n      }\n      createdAt\n      content\n    }\n  }\n`;\n\n@Component({ ... })\nclass AppComponent {\n  submit({ repoFullName, commentContent }) {\n    this.apollo.mutate({\n      // options\n      variables: { repoFullName, commentContent },\n\n      updateQueries: {\n        Comment: (prev, { mutationResult }) => {\n          const newComment = mutationResult.data.submitComment;\n\n          return pushComment(prev, newComment);\n        }\n      }\n    }).subscribe()\n  }\n}\n")),Object(r.b)("p",null,"If we were to look carefully at the server schema, we'd see that the mutation actually returns information about the single new comment that was added. It does not refetch the whole list of comments. This makes a lot of sense: if we have a thousand comments on a page, we don't want to refetch all of them if we add a single new comment."),Object(r.b)("p",null,"The comments page itself is rendered with the following query:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const COMMENT_QUERY = gql`\n  query Comment($repoName: String!) {\n    currentUser {\n      login\n      html_url\n    }\n\n    entry(repoFullName: $repoName) {\n      id\n      postedBy {\n        login\n        html_url\n      }\n      createdAt\n      comments {\n        postedBy {\n          login\n          html_url\n        }\n        createdAt\n        content\n      }\n      repository {\n        full_name\n        html_url\n        description\n        open_issues_count\n        stargazers_count\n      }\n    }\n  }`;\n")),Object(r.b)("p",null,"Now, we have to incorporate the newly added comment returned by the mutation into the information that was already returned by the ",Object(r.b)("inlineCode",{parentName:"p"},"COMMENT_QUERY")," that was fired when the page was loaded. We accomplish this through ",Object(r.b)("inlineCode",{parentName:"p"},"updateQueries"),". Zooming in on that portion of the code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Component({ ... })\nclass AppComponent {\n  submit() {\n    this.apollo.mutate({\n      // ...\n      updateQueries: {\n        Comment: (prev, { mutationResult }) => {\n          const newComment = mutationResult.data.submitComment;\n          return pushComment(prev, newComment);\n        },\n      },\n    })\n  }\n}\n")),Object(r.b)("p",null,"Fundamentally, ",Object(r.b)("inlineCode",{parentName:"p"},"updateQueries")," is a map going from the name of a query (in our case, ",Object(r.b)("inlineCode",{parentName:"p"},"Comment"),") to a function that receives the previous result that this query received as well as the result returned by the mutation. In our case, the mutation returns information about the new comment. This function should then incorporate the mutation result into a new object containing the result previously received by the query (",Object(r.b)("inlineCode",{parentName:"p"},"prev"),") and return that new object."),Object(r.b)("p",null,"Note that the function must not alter the ",Object(r.b)("inlineCode",{parentName:"p"},"prev")," object (because ",Object(r.b)("inlineCode",{parentName:"p"},"prev")," is compared with the new object returned to see what changes the function made and hence what prop updates are needed)."),Object(r.b)("p",null,"In our ",Object(r.b)("inlineCode",{parentName:"p"},"updateQueries")," function for the ",Object(r.b)("inlineCode",{parentName:"p"},"Comment")," query, we're doing something really simple: just adding the comment we just submitted to the list of comments that the query asks for. We're doing that using the ",Object(r.b)("inlineCode",{parentName:"p"},"pushComment")," function to add the comment to the list."),Object(r.b)("p",null,"Once the mutation fires and the result arrives from the server (or, a result is provided through optimistic UI), our ",Object(r.b)("inlineCode",{parentName:"p"},"updateQueries")," function for the ",Object(r.b)("inlineCode",{parentName:"p"},"Comment")," query will be called and the ",Object(r.b)("inlineCode",{parentName:"p"},"Comment")," query will be updated accordingly. Our UI will update with the new information!"),Object(r.b)("h2",{id:"incremental-loading-fetchmore"},"Incremental loading: ",Object(r.b)("inlineCode",{parentName:"h2"},"fetchMore")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fetchMore")," can be used to update the result of a query based on the data returned by another query. Most often, it is used to handle infinite-scroll pagination or other situations where you are loading more data when you already have some."),Object(r.b)("p",null,'In our GitHunt example, we have a paginated feed that displays a list of GitHub repositories. When we hit the "Load More" button, we don\'t want Apollo Client to throw away the repository information it has already loaded. Instead, it should just append the newly loaded repositories to the list that Apollo Client already has in the store. With this update, our UI component should re-render and show us all of the available repositories.'),Object(r.b)("p",null,"Let's see how to do that with the ",Object(r.b)("inlineCode",{parentName:"p"},"fetchMore")," method on a query:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryRef } from 'apollo-angular';\n\nconst FeedQuery = gql`\n  query Feed($type: FeedType!, $offset: Int, $limit: Int) {\n    # ...\n  }\n`;\n\n@Component({ ... })\nclass AppComponent {\n  feed: any[];\n  feedQuery: QueryRef<any>;\n\n  loadMore() {\n    return this.feedQuery.fetchMore({\n      variables: {\n        offset: this.feed.length\n      },\n\n      updateQuery: (previousResult, { fetchMoreResult }) => {\n        if (!fetchMoreResult) { return previousResult; }\n\n        return Object.assign({}, previousResult, {\n          feed: [...previousResult.feed, ...fetchMoreResult.feed],\n        });\n      }\n    });\n  }\n}\n")),Object(r.b)("p",null,"We are creating the ",Object(r.b)("inlineCode",{parentName:"p"},"loadMore")," method to do the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"return this.feedQuery.fetchMore({\n  variables: {\n    offset: this.feed.length,\n  },\n  updateQuery: (prev, { fetchMoreResult }) => {\n    if (!fetchMoreResult.data) { return prev; }\n    return Object.assign({}, prev, {\n      feed: [...prev.feed, ...fetchMoreResult.feed],\n    });\n  },\n});\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"fetchMore")," method takes a map of ",Object(r.b)("inlineCode",{parentName:"p"},"variables")," to be sent with the new query. Here, we're setting the offset to ",Object(r.b)("inlineCode",{parentName:"p"},"feed.length")," so that we fetch items that aren't already displayed on the feed. This variable map is merged with the one that's been specified for the query associated with the component. This means that other variables, e.g. the ",Object(r.b)("inlineCode",{parentName:"p"},"limit")," variable, will have the same value as they do within the component query."),Object(r.b)("p",null,"It can also take a ",Object(r.b)("inlineCode",{parentName:"p"},"query")," named argument, which can be a GraphQL document containing a query that will be fetched in order to fetch more information."),Object(r.b)("p",null,"When we call ",Object(r.b)("inlineCode",{parentName:"p"},"QueryRef.fetchMore"),", Apollo will fire the ",Object(r.b)("inlineCode",{parentName:"p"},"fetchMore")," query and use the logic in the ",Object(r.b)("inlineCode",{parentName:"p"},"updateQuery")," option to incorporate that into the original result. The named argument ",Object(r.b)("inlineCode",{parentName:"p"},"updateQuery")," should be a function that takes the previous result of the query associated with your component and the information returned by the ",Object(r.b)("inlineCode",{parentName:"p"},"fetchMore")," query and return a combination of the two."),Object(r.b)("p",null,"Here, the ",Object(r.b)("inlineCode",{parentName:"p"},"fetchMore")," query is the same as the query associated with the component. Our ",Object(r.b)("inlineCode",{parentName:"p"},"updateQuery")," takes the new feed items returned and just appends them onto the feed items that we'd asked for previously. With this, the UI will update and the feed will contain the next page of items!"),Object(r.b)("p",null,"Although ",Object(r.b)("inlineCode",{parentName:"p"},"fetchMore")," is often used for pagination, there are many other cases in which it is applicable. For example, suppose you have a list of items (say, a collaborative todo list) and you have a way to fetch items that have been updated after a certain time. Then, you don't have to refetch the whole todo list to get updates: you can just incorporate the newly added items with ",Object(r.b)("inlineCode",{parentName:"p"},"fetchMore"),", as long as your ",Object(r.b)("inlineCode",{parentName:"p"},"updateQuery")," function correctly merges the new results."),Object(r.b)("h2",{id:"cache-redirects-with-cacheredirects"},"Cache redirects with ",Object(r.b)("inlineCode",{parentName:"h2"},"cacheRedirects")),Object(r.b)("p",null,"In some cases, a query requests data that already exists in the client store under a different key. A very common example of this is when your UI has a list view and a detail view that both use the same data. The list view might run the following query:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query ListView {\n  books {\n    id\n    title\n    abstract\n  }\n}\n")),Object(r.b)("p",null,"When a specific book is selected, the detail view displays an individual item using this query:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query DetailView {\n  book(id: $id) {\n    id\n    title\n    abstract\n  }\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: The data returned by the list query has to include all the data the specific query needs. If the specific book query fetches a field that the list query doesn't return Apollo Client cannot return the data from the cache.")),Object(r.b)("p",null,"We know that the data is most likely already in the client cache, but because it's requested with a different query, Apollo Client doesn't know that. In order to tell Apollo Client where to look for the data, we can define custom resolvers:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"import { InMemoryCache } from 'apollo-cache-inmemory';\n\nconst cache = new InMemoryCache({\n  cacheRedirects: {\n    Query: {\n      book: (_, args, { getCacheKey }) =>\n        getCacheKey({ __typename: 'Book', id: args.id })\n    },\n  },\n});\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: This'll also work with custom ",Object(r.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," methods as long as you use the same one.")),Object(r.b)("p",null,"Apollo Client will use the ID returned by the custom resolver to look up the item in its cache. ",Object(r.b)("inlineCode",{parentName:"p"},"getCacheKey")," is passed inside the third argument to the resolver to generate the key of the object based on its ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," and ",Object(r.b)("inlineCode",{parentName:"p"},"id"),"."),Object(r.b)("p",null,"To figure out what you should put in the ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," property run one of the queries in GraphiQL and get the ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query ListView {\n  books {\n    __typename\n  }\n}\n\n# or\n\nquery DetailView {\n  book(id: $id) {\n    __typename\n  }\n}\n")),Object(r.b)("p",null,"The value that's returned (the name of your type) is what you need to put into the ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," property."),Object(r.b)("p",null,"It is also possible to return a list of IDs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"cacheRedirects: {\n  Query: {\n    books: (_, args, { getCacheKey }) =>\n      args.ids.map(id =>\n        getCacheKey({ __typename: 'Book', id: id }))\n  },\n},\n")))}u.isMDXComponent=!0}}]);