"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[128],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(n),g=a,f=l["".concat(c,".").concat(g)]||l[g]||m[g]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},88495:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"",sidebar_position:1},c=void 0,p={unversionedId:"introduction",id:"introduction",title:"",description:"Latest Version on Packagist",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/./introduction",editUrl:"https://github.com/nutgram/docs/tree/master/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"",sidebar_position:1},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/./category/getting-started"}},u={},m=[],l={toc:m};function g(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://i.imgur.com/0KjYtTJ.png",width:"400px"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://packagist.org/packages/nutgram/nutgram"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/packagist/v/nutgram/nutgram.svg?style=flat-square",alt:"Latest Version on Packagist"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SergiX44/Nutgram/actions/workflows/php.yml"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/SergiX44/Nutgram/actions/workflows/php.yml/badge.svg",alt:"Test Suite"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://packagist.org/packages/nutgram/nutgram"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/packagist/dt/nutgram/nutgram.svg?style=flat-square",alt:"Total Downloads"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/api"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Telegram%20Bot%20API-5.7%09--%20January%2031,%202022-blue.svg",alt:"API"})),"\n",(0,o.kt)("a",{parentName:"p",href:"//packagist.org/packages/nutgram/nutgram"},(0,o.kt)("img",{parentName:"a",src:"https://poser.pugx.org/nutgram/nutgram/license",alt:"License"})))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Telegram bot library that doesn't drive you nuts")),(0,o.kt)("p",null,"Taking advantage of the ",(0,o.kt)("strong",{parentName:"p"},"PHP8")," features, thi framework and tries to make the ",(0,o.kt)("strong",{parentName:"p"},"speed"),", ",(0,o.kt)("strong",{parentName:"p"},"scalability")," and ",(0,o.kt)("strong",{parentName:"p"},"flexibility")," of use its strength, allowing to quickly make simple bots, but at the same time, it provides\nmore ",(0,o.kt)("strong",{parentName:"p"},"advanced features")," to handle even the most complicated flows. Some architectural concepts on which\nNutgram is based are heavily influenced by other open source projects such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/botman/botman"},"Botman"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/badfarm/zanzara"},"Zanzara"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', fn(Nutgram $bot) => $bot->sendMessage('Ciao!'));\n\n$bot->onText('My name is {name}', fn(Nutgram $bot, $name) => $bot->sendMessage(\"Hi {$name}\"));\n\n$bot->run();\n\n")))}g.isMDXComponent=!0}}]);