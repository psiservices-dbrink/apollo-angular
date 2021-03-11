(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(r,".").concat(u)]||s[u]||d[u]||o;return n?i.a.createElement(m,c(c({ref:t},b),{},{components:n})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),o=(n(0),n(151)),r={title:"Configuring the cache",sidebar_title:"Configuration"},c={unversionedId:"caching/configuration",id:"caching/configuration",isDocsHomePage:!1,title:"Configuring the cache",description:"Apollo Client stores the results of its GraphQL queries in a normalized, in-memory cache. This enables your client to respond to future queries for the same data without sending unnecessary network requests.",source:"@site/docs/caching/configuration.md",slug:"/caching/configuration",permalink:"/docs/caching/configuration",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/caching/configuration.md",version:"current",sidebar:"docs",previous:{title:"Error handling",permalink:"/docs/data/error-handling"},next:{title:"Reading and writing data to the cache",permalink:"/docs/caching/interaction"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Configuration options",id:"configuration-options",children:[]},{value:"Data normalization",id:"data-normalization",children:[{value:"Generating unique identifiers",id:"generating-unique-identifiers",children:[]},{value:"Disabling normalization",id:"disabling-normalization",children:[]}]},{value:"<code>TypePolicy</code> fields",id:"typepolicy-fields",children:[{value:"Overriding root operation types (uncommon)",id:"overriding-root-operation-types-uncommon",children:[]},{value:"The <code>fields</code> property",id:"the-fields-property",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Apollo Client stores the results of its GraphQL queries in a normalized, in-memory cache. This enables your client to respond to future queries for the same data without sending unnecessary network requests."),Object(o.b)("p",null,"This article describes cache setup and configuration. To learn how to interact with cached data, see ",Object(o.b)("a",{parentName:"p",href:"/docs/caching/interaction"},"Reading and writing data to the cache"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"As of Apollo Client 3.0, the ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache")," class is provided by the ",Object(o.b)("inlineCode",{parentName:"p"},"@apollo/client")," package. No additional libraries are required."),Object(o.b)("h2",{id:"initialization"},"Initialization"),Object(o.b)("p",null,"Create an ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache")," object and provide it to the ",Object(o.b)("inlineCode",{parentName:"p"},"APOLLO_OPTIONS")," token, like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import {APOLLO_OPTIONS} from 'apollo-angular';\nimport {InMemoryCache} from '@apollo/client/core';\n\n@NgModule({\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory() {\n        return {\n          // ...other arguments...\n          cache: new InMemoryCache(options),\n        };\n      },\n    },\n  ],\n})\nclass AppModule {}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache")," constructor accepts a variety of ",Object(o.b)("a",{parentName:"p",href:"#configuration-options"},"configuration options"),"."),Object(o.b)("h2",{id:"configuration-options"},"Configuration options"),Object(o.b)("p",null,"Although the cache's default behavior is suitable for a wide variety of applications, you can configure its behavior to better suit your particular use case. In particular, you can:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Specify custom primary key fields"),Object(o.b)("li",{parentName:"ul"},"Customize the storage and retrieval of individual fields"),Object(o.b)("li",{parentName:"ul"},"Customize the interpretation of field arguments"),Object(o.b)("li",{parentName:"ul"},"Define supertype-subtype relationships for fragment matching"),Object(o.b)("li",{parentName:"ul"},"Define patterns for pagination"),Object(o.b)("li",{parentName:"ul"},"Manage client-side local state")),Object(o.b)("p",null,"To customize cache behavior, provide an ",Object(o.b)("inlineCode",{parentName:"p"},"options")," object to the ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache")," constructor. This object supports the following fields:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"addTypename")),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", the cache automatically adds ",Object(o.b)("inlineCode",{parentName:"td"},"__typename")," fields to all outgoing queries, removing the need to add them manually."),Object(o.b)("p",null,"Default: ",Object(o.b)("inlineCode",{parentName:"td"},"true")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"resultCaching")),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", the cache returns an identical (",Object(o.b)("inlineCode",{parentName:"td"},"==="),") response object for every execution of the same query, as long as the underlying data remains unchanged. This makes it easier to detect changes to a query's result."),Object(o.b)("p",null,"Default: ",Object(o.b)("inlineCode",{parentName:"td"},"true")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"possibleTypes")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"{ [supertype: string]: string[] }")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("p",null,"Include this object to define polymorphic relationships between your schema's types. Doing so enables you to look up cached data by interface or by union."),Object(o.b)("p",null,"The key for each entry is the ",Object(o.b)("inlineCode",{parentName:"td"},"__typename")," of an interface or union, and the value is an array of the ",Object(o.b)("inlineCode",{parentName:"td"},"__typename"),"s of the types that either belong to the corresponding union or implement the corresponding interface."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"typePolicies")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"{ [typename: string]: TypePolicy }")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("p",null,"Include this object to customize the cache's behavior on a type-by-type basis."),Object(o.b)("p",null,"The key for each entry is a type's ",Object(o.b)("inlineCode",{parentName:"td"},"__typename"),". For details, see ",Object(o.b)("a",{parentName:"td",href:"#typepolicy-fields"},Object(o.b)("inlineCode",{parentName:"a"},"TypePolicy")," fields"),"."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"dataIdFromObject")," ",Object(o.b)("strong",{parentName:"td"},"(deprecated)")),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("p",null,"A function that takes a response object and returns a unique identifier to be used when normalizing the data in the store."),Object(o.b)("p",null,"Deprecated in favor of the ",Object(o.b)("inlineCode",{parentName:"td"},"keyFields")," option of the ",Object(o.b)("inlineCode",{parentName:"td"},"TypePolicy")," object."))))),Object(o.b)("h2",{id:"data-normalization"},"Data normalization"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache")," ",Object(o.b)("strong",{parentName:"p"},"normalizes")," query response objects before it saves them to its internal data store. Normalization involves the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The cache ",Object(o.b)("a",{parentName:"li",href:"#generating-unique-identifiers"},"generates a unique ID")," for every identifiable object included in the response."),Object(o.b)("li",{parentName:"ol"},"The cache stores the objects by ID in a flat lookup table."),Object(o.b)("li",{parentName:"ol"},"Whenever an incoming object is stored with the same ID as an ",Object(o.b)("em",{parentName:"li"},"existing")," object, the fields of those objects are ",Object(o.b)("em",{parentName:"li"},"merged"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If the incoming object and the existing object share any fields, the incoming object ",Object(o.b)("em",{parentName:"li"},"overwrites")," the cached values for those fields."),Object(o.b)("li",{parentName:"ul"},"Fields that appear in ",Object(o.b)("em",{parentName:"li"},"only")," the existing object or ",Object(o.b)("em",{parentName:"li"},"only")," the incoming object are preserved.")))),Object(o.b)("p",null,"Normalization constructs a partial copy of your data graph on your client, in a format that's optimized for reading and updating the graph as your application changes state."),Object(o.b)("h3",{id:"generating-unique-identifiers"},"Generating unique identifiers"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In Apollo Client 3 and later, the ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache"),' never creates a fallback, "fake" identifier for an object when identifier generation fails or is disabled.')),Object(o.b)("h4",{id:"default-identifier-generation"},"Default identifier generation"),Object(o.b)("p",null,"By default, the ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache")," generates a unique identifier for any object that includes a ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," field. To do so, it combines the object's ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," with its ",Object(o.b)("inlineCode",{parentName:"p"},"id")," or ",Object(o.b)("inlineCode",{parentName:"p"},"_id")," field (whichever is defined). These two values are separated by a colon (",Object(o.b)("inlineCode",{parentName:"p"},":"),")."),Object(o.b)("p",null,"For example, an object with a ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," of ",Object(o.b)("inlineCode",{parentName:"p"},"Task")," and an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of ",Object(o.b)("inlineCode",{parentName:"p"},"14")," is assigned a default identifier of ",Object(o.b)("inlineCode",{parentName:"p"},"Task:14"),"."),Object(o.b)("h4",{id:"customizing-identifier-generation-by-type"},"Customizing identifier generation by type"),Object(o.b)("p",null,"If one of your types defines its primary key with a field ",Object(o.b)("em",{parentName:"p"},"besides")," ",Object(o.b)("inlineCode",{parentName:"p"},"id")," or ",Object(o.b)("inlineCode",{parentName:"p"},"_id"),", you can customize how the ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache")," generates unique identifiers for that type. To do so, you define ",Object(o.b)("inlineCode",{parentName:"p"},"TypePolicy")," for the type. You specify all of your cache's ",Object(o.b)("inlineCode",{parentName:"p"},"typePolicies")," in ",Object(o.b)("a",{parentName:"p",href:"#configuration-options"},"the ",Object(o.b)("inlineCode",{parentName:"a"},"options")," object you provide to the ",Object(o.b)("inlineCode",{parentName:"a"},"InMemoryCache")," constructor"),"."),Object(o.b)("p",null,"Include a ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields")," field in relevant ",Object(o.b)("inlineCode",{parentName:"p"},"TypePolicy")," objects, like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'const cache = new InMemoryCache({\n  typePolicies: {\n    Product: {\n      // In most inventory management systems, a single UPC code uniquely\n      // identifies any product.\n      keyFields: ["upc"],\n    },\n    Person: {\n      // In some user account systems, names or emails alone do not have to\n      // be unique, but the combination of a person\'s name and email is\n      // uniquely identifying.\n      keyFields: ["name", "email"],\n    },\n    Book: {\n      // If one of the keyFields is an object with fields of its own, you can\n      // include those nested keyFields by using a nested array of strings:\n      keyFields: ["title", "author", ["name"]],\n    },\n  },\n});\n')),Object(o.b)("p",null,"This example shows three ",Object(o.b)("inlineCode",{parentName:"p"},"typePolicies"),": one for a ",Object(o.b)("inlineCode",{parentName:"p"},"Product")," type, one for a ",Object(o.b)("inlineCode",{parentName:"p"},"Person")," type, and one for a ",Object(o.b)("inlineCode",{parentName:"p"},"Book")," type. Each ",Object(o.b)("inlineCode",{parentName:"p"},"TypePolicy"),"'s ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields")," array defines which fields on the type ",Object(o.b)("em",{parentName:"p"},"together")," represent the type's primary key."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Book")," type above uses a ",Object(o.b)("em",{parentName:"p"},"subfield")," as part of its primary key. The ",Object(o.b)("inlineCode",{parentName:"p"},'["name"]')," item indicates that the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," field of the ",Object(o.b)("em",{parentName:"p"},"previous")," field in the array (",Object(o.b)("inlineCode",{parentName:"p"},"author"),") is part of the primary key. The ",Object(o.b)("inlineCode",{parentName:"p"},"Book"),"'s ",Object(o.b)("inlineCode",{parentName:"p"},"author")," field must be an object that includes a ",Object(o.b)("inlineCode",{parentName:"p"},"name")," field for this to be valid."),Object(o.b)("p",null,"In the example above, the resulting identifier string for a ",Object(o.b)("inlineCode",{parentName:"p"},"Book")," object has the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'Book:{"title":"Fahrenheit 451","author":{"name":"Ray Bradbury"}}\n')),Object(o.b)("p",null,"An object's primary key fields are always listed in the same order to ensure uniqueness."),Object(o.b)("p",null,"Note that these ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields")," strings always refer to the actual field names as defined in your schema, meaning the ID computation is not sensitive to ",Object(o.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/resources/graphql-glossary/#alias"},"field aliases"),"."),Object(o.b)("h4",{id:"calculating-an-objects-identifier"},"Calculating an object's identifier"),Object(o.b)("p",null,"If you define a custom identifier that uses multiple fields, it can be challenging to calculate and provide that identifier to methods that require it (such as ",Object(o.b)("inlineCode",{parentName:"p"},"cache.readFragment"),")."),Object(o.b)("p",null,"To help with this, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"cache.identify")," method to calculate the identifier for any normalized object you fetch from your cache. See ",Object(o.b)("a",{parentName:"p",href:"/docs/caching/interaction#obtaining-an-objects-custom-id"},"Obtaining an object's custom ID"),"."),Object(o.b)("h4",{id:"customizing-identifier-generation-globally"},"Customizing identifier generation globally"),Object(o.b)("p",null,"If you need to define a single fallback ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields")," function that isn't specific to any particular ",Object(o.b)("inlineCode",{parentName:"p"},"__typename"),", you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," function that was introduced in Apollo Client 2.x:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { defaultDataIdFromObject } from '@apollo/client/core';\n\nconst cache = new InMemoryCache({\n  dataIdFromObject(responseObject) {\n    switch (responseObject.__typename) {\n      case 'Product': return `Product:${responseObject.upc}`;\n      case 'Person': return `Person:${responseObject.name}:${responseObject.email}`;\n      default: return defaultDataIdFromObject(responseObject);\n    }\n  }\n});\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," API is included in Apollo Client 3.0 to ease the transition from Apollo Client 2.x. The API might be removed in a future version of ",Object(o.b)("inlineCode",{parentName:"p"},"@apollo/client"),".")),Object(o.b)("p",null,"Notice that the above function still uses different logic to generate keys based on an object's ",Object(o.b)("inlineCode",{parentName:"p"},"__typename"),". In the above case, you might as well define ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields")," arrays for the ",Object(o.b)("inlineCode",{parentName:"p"},"Product")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Person")," types via ",Object(o.b)("inlineCode",{parentName:"p"},"typePolicies"),". Also, this code is sensitive to aliasing mistakes, it does nothing to protect against undefined ",Object(o.b)("inlineCode",{parentName:"p"},"object")," properties, and accidentally using different key fields at different times can cause inconsistencies in the cache."),Object(o.b)("h3",{id:"disabling-normalization"},"Disabling normalization"),Object(o.b)("p",null,"You can instruct the ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache")," ",Object(o.b)("em",{parentName:"p"},"not")," to normalize objects of a certain type. This can be useful for metrics and other transient data that's identified by a timestamp and never receives updates."),Object(o.b)("p",null,"To disable normalization for a type, define a ",Object(o.b)("inlineCode",{parentName:"p"},"TypePolicy")," for the type (as shown in ",Object(o.b)("a",{parentName:"p",href:"#customizing-identifier-generation-by-type"},"Customizing identifier generation by type"),") and set the policy's ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields")," field to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("p",null,"Objects that are not normalized are instead embedded within their ",Object(o.b)("em",{parentName:"p"},"parent")," object in the cache. You can't access these objects directly, but you can access them via their parent."),Object(o.b)("h2",{id:"typepolicy-fields"},Object(o.b)("inlineCode",{parentName:"h2"},"TypePolicy")," fields"),Object(o.b)("p",null,"To customize how the cache interacts with specific types in your schema, you can provide an object mapping ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," strings to ",Object(o.b)("inlineCode",{parentName:"p"},"TypePolicy")," objects when you create a new ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryCache")," object."),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"TypePolicy")," object can include the following fields:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"type TypePolicy = {\n  // Allows defining the primary key fields for this type, either using an\n  // array of field names, a function that returns an arbitrary string, or\n  // false to disable normalization for objects of this type.\n  keyFields?: KeySpecifier | KeyFieldsFunction | false;\n\n  // If your schema uses a custom __typename for any of the root Query,\n  // Mutation, and/or Subscription types (rare), set the corresponding\n  // field below to true to indicate that this type serves as that type.\n  queryType?: true,\n  mutationType?: true,\n  subscriptionType?: true,\n\n  fields?: {\n    [fieldName: string]:\n      | FieldPolicy<StoreValue>\n      | FieldReadFunction<StoreValue>;\n  }\n};\n\n// Recursive type aliases are coming in TypeScript 3.7, so this isn't the\n// actual type we use, but it's what it should be:\ntype KeySpecifier = (string | KeySpecifier)[];\n\ntype KeyFieldsFunction = (\n  object: Readonly<StoreObject>,\n  context: {\n    typename: string;\n    selectionSet?: SelectionSetNode;\n    fragmentMap?: FragmentMap;\n  },\n) => string | null | void;\n")),Object(o.b)("h3",{id:"overriding-root-operation-types-uncommon"},"Overriding root operation types (uncommon)"),Object(o.b)("p",null,"In addition to ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields"),", a ",Object(o.b)("inlineCode",{parentName:"p"},"TypePolicy")," can indicate that it represents the root query, mutation, or subscription type by setting ",Object(o.b)("inlineCode",{parentName:"p"},"queryType"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mutationType"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"subscriptionType")," as ",Object(o.b)("inlineCode",{parentName:"p"},"true"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const cache = new InMemoryCache({\n  typePolicies: {\n    UnconventionalRootQuery: {\n      // The RootQueryFragment can only match if the cache knows the __typename\n      // of the root query object.\n      queryType: true,\n    },\n  },\n});\n\nconst result = cache.readQuery({\n  query: gql`\n    query MyQuery {\n      ...RootQueryFragment\n    }\n    fragment RootQueryFragment on UnconventionalRootQuery {\n      field1\n      field2 {\n        subfield\n      }\n    }\n  `,\n});\n\nconst equivalentResult = cache.readQuery({\n  query: gql`\n    query MyQuery {\n      field1\n      field2 {\n        subfield\n      }\n    }\n  `,\n});\n")),Object(o.b)("p",null,"The cache normally obtains ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," information by adding the ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," field to every query selection set it sends to the server. It could technically use the same trick for the outermost selection set of every operation, but the ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," of the root query or mutation is almost always simply ",Object(o.b)("inlineCode",{parentName:"p"},'"Query"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'"Mutation"'),", so the cache assumes those common defaults unless instructed otherwise in a ",Object(o.b)("inlineCode",{parentName:"p"},"TypePolicy"),"."),Object(o.b)("p",null,"Compared to the ",Object(o.b)("inlineCode",{parentName:"p"},"__typename"),"s of entity objects like ",Object(o.b)("inlineCode",{parentName:"p"},"Book"),"s or ",Object(o.b)("inlineCode",{parentName:"p"},"Person"),"s, which are absolutely vital to proper identification and normalization, the ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," of the root query or mutation type is not nearly as useful or important, because those types are singletons with only one instance per client."),Object(o.b)("h3",{id:"the-fields-property"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"fields")," property"),Object(o.b)("p",null,"The final property within ",Object(o.b)("inlineCode",{parentName:"p"},"TypePolicy")," is the ",Object(o.b)("inlineCode",{parentName:"p"},"fields")," property, which is a map from string field names to ",Object(o.b)("inlineCode",{parentName:"p"},"FieldPolicy")," objects. For more information on this field, see ",Object(o.b)("a",{parentName:"p",href:"/docs/caching/field-behavior"},"Customizing the behavior of cached fields"),"."))}p.isMDXComponent=!0}}]);