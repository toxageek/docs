"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[2563],{3033:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return a},metadata:function(){return g},toc:function(){return l}});var o=t(83117),i=(t(67294),t(3905));t(56022);const a={sidebar_position:3},r="Logging",g={unversionedId:"configuration/logging",id:"version-3.x/configuration/logging",title:"Logging",description:"Nutgram accepts as a logger system any adapter that implements the PSR-3 LoggerInterface interface.",source:"@site/versioned_docs/version-3.x/configuration/logging.md",sourceDirName:"configuration",slug:"/configuration/logging",permalink:"/docs/configuration/logging",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/versioned_docs/version-3.x/configuration/logging.md",tags:[],version:"3.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Cache",permalink:"/docs/configuration/cache"},next:{title:"Laravel",permalink:"/docs/configuration/laravel"}},s={},l=[{value:"Configuration",id:"configuration",level:2}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Nutgram accepts as a logger system any adapter that implements the PSR-3 ",(0,i.kt)("inlineCode",{parentName:"p"},"LoggerInterface")," interface."),(0,i.kt)("p",null,"By default, it uses the internal ",(0,i.kt)("inlineCode",{parentName:"p"},"NullLogger"),' class,\nwhich is a fall-back "black hole" implementation if no logger is given to it.'),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are using Laravel or Symfony frameworks, you can skip this section, but take a look at the corresponding section\nfor your framework:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/configuration/laravel#logging"},"Laravel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/configuration/symfony#logging"},"Symfony")))),(0,i.kt)("p",null,"To specify a different logger adapter, you need to pass the instance at the bot instantiation. The following example, we\nare using the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"SergiX44\\Nutgram\\Logger\\ConsoleLogger"),", that can be used to log the requests to the console.\nUseful when used with Polling running mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Logger\\ConsoleLogger;\n\n$bot = new Nutgram('TOKEN', [\n    'logger' => ConsoleLogger::class\n]);\n")))}c.isMDXComponent=!0}}]);