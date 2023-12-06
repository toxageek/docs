"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[1778],{60096:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(83117),s=(n(67294),n(3905)),i=n(56022);const o={sidebar_position:2},r="Sending Requests",l={unversionedId:"usage/sending_requests",id:"usage/sending_requests",title:"Sending Requests",description:"The framework creates a 1:1 mapping of the methods Telegram provides that are directly accessible from the main",source:"@site/docs/usage/sending_requests.md",sourceDirName:"usage",slug:"/usage/sending_requests",permalink:"/docs/usage/sending_requests",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/docs/usage/sending_requests.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Getting Updates",permalink:"/docs/usage/getting_updates"},next:{title:"Handlers",permalink:"/docs/usage/handlers"}},d={},u=[{value:"Uploading media",id:"uploading-media",level:2},{value:"Downloading media",id:"downloading-media",level:2},{value:"Formatting options",id:"formatting-options",level:2},{value:"Available methods",id:"available-methods",level:2},{value:"Chunked methods",id:"chunked-methods",level:2},{value:"Reply directly to incoming updates",id:"reply-directly-to-incoming-updates",level:2},{value:"Warnings",id:"warnings",level:3},{value:"Flow",id:"flow",level:3},{value:"Usage",id:"usage",level:3}],m={toc:u};function g(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sending-requests"},"Sending Requests"),(0,s.kt)("p",null,"The framework creates a 1:1 mapping of the methods Telegram provides that are directly accessible from the main\ninstance. The parameters of these methods are organized to prioritize mandatory parameters, followed by optional ones.\nIf the ",(0,s.kt)("inlineCode",{parentName:"p"},"$clientOpt")," parameter is included, it will consistently be positioned at the end.\nWe recommend the use of named parameters, which allow the developer to explicitly specify the values for each parameter,\nmaking the code easier to read and maintain."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"\nuse SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Message\\Message;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Send a message to a specific user\n/** @var Message $message */\n$message = $bot->sendMessage(\n    text: 'Hi!',\n    chat_id: 111222333\n);\n\n// Send a message to a channel\n/** @var Message $message */\n$message = $bot->sendMessage(\n    text: 'Hi channel!',\n    chat_id: '@mychannel'\n);\n")),(0,s.kt)("h2",{id:"uploading-media"},"Uploading media"),(0,s.kt)("p",null,"For any method that require an ",(0,s.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/api#inputfile"},(0,s.kt)("inlineCode",{parentName:"a"},"InputFile")),", you can pass a resource file\ndescriptor to the right method, and the framework will take care of how uploading it, like in the following example."),(0,s.kt)("p",null,"If you already have the Telegram ",(0,s.kt)("inlineCode",{parentName:"p"},"file_id"),", you can simply specify it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Internal\\InputFile;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Message\\Message;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Send a photo to a specific user ***********************************************\n$photo = fopen('image.png', 'r+'); // open the file\n\n/** @var Message $message */\n$message = $bot->sendPhoto(\n    photo: InputFile::make($photo), // create the input file\n    chat_id: 111222333\n);\n\n\n// Send a video to a specific user ***********************************************\n$video = fopen('funnyvideo.mp4', 'r+'); // open the file\n\n/** @var Message $message */\n$message = $bot->sendVideo(\n    video: InputFile::make($video),\n    chat_id: 111222333\n);\n\n\n// send a sticker via file_id ****************************************************\n$fileId = $bot->message()->sticker->file_id;\n\n/** @var Message $message */\n$message = $bot->sendSticker(\n    sticker: $fileId,\n    chat_id: 111222333\n);\n")),(0,s.kt)("h2",{id:"downloading-media"},"Downloading media"),(0,s.kt)("p",null,"As opposed to uploading, there are some additional methods available that allow you to download files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Media\\File;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$fileId = $bot->message()->sticker->file_id;\n\n// get the File object\n/** @var File $message */\n$file = $bot->getFile($fileId);\n\n$bot->downloadFile($file, 'path/to/file');\n\n// OR, via helper method\n\n$bot->getFile($fileId)->save('file/or/directory');\n\n")),(0,s.kt)("h2",{id:"formatting-options"},"Formatting options"),(0,s.kt)("p",null,"The framework give you some helper constants to format your text messages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Properties\\ParseMode;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Message\\Message;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Send a message formatting in markdown\n/** @var Message $message */\n$message = $bot->sendMessage(\n    text: '*Hi!*',\n    chat_id: 111222333,\n    parse_mode: ParseMode::MARKDOWN,\n);\n\n// Send a message formatting in html\n/** @var Message $message */\n$message = $bot->sendMessage(\n    text: '<i>Hi!</i>',\n    chat_id: 111222333,\n    parse_mode: ParseMode::HTML,\n);\n")),(0,s.kt)("h2",{id:"available-methods"},"Available methods"),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/api#available-methods"},"Telegram Bot API")," for the available native methods."),(0,s.kt)("h2",{id:"chunked-methods"},"Chunked methods"),(0,s.kt)("p",null,"Nutgram helps manage character limits by splitting messages into smaller ones,\nmaking it easier to stay within the limits set by platforms or media.\nChunking methods allow users to transmit longer messages without exceeding the maximum character limits."),(0,s.kt)("p",null,"Available chunked methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"sendChunkedMessage"),(0,s.kt)("li",{parentName:"ul"},"sendChunkedPhoto"),(0,s.kt)("li",{parentName:"ul"},"sendChunkedAudio"),(0,s.kt)("li",{parentName:"ul"},"sendChunkedDocument"),(0,s.kt)("li",{parentName:"ul"},"sendChunkedVideo"),(0,s.kt)("li",{parentName:"ul"},"sendChunkedAnimation"),(0,s.kt)("li",{parentName:"ul"},"sendChunkedVoice")),(0,s.kt)("h2",{id:"reply-directly-to-incoming-updates"},"Reply directly to incoming updates"),(0,s.kt)("p",null,"Nutgram allows you to reply directly to incoming updates, without sending a new request to the Telegram API.\nThis feature will use the second method of\n",(0,s.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/faq#how-can-i-make-requests-in-response-to-updates"},"replying to a request"),",\nwhich is to reply directly and give the method as JSON payload in the reply."),(0,s.kt)("h3",{id:"warnings"},"Warnings"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You'll need ",(0,s.kt)("strong",{parentName:"li"},"PHP-FPM")," to use this feature."),(0,s.kt)("li",{parentName:"ul"},"This feature, if enabled, will be automatically used only ",(0,s.kt)("strong",{parentName:"li"},"once per update"),". "),(0,s.kt)("li",{parentName:"ul"},"You'll get ",(0,s.kt)("inlineCode",{parentName:"li"},"null")," if you try to use the return type on a method that has been used with this feature. "),(0,s.kt)("li",{parentName:"ul"},"You'll ",(0,s.kt)("strong",{parentName:"li"},"not get an exception")," if you try to enable this feature on a method that has already been used with this feature\nbecause the method may be called multiple times in the same update depending on the events that are triggered. "),(0,s.kt)("li",{parentName:"ul"},"This feature will be ",(0,s.kt)("strong",{parentName:"li"},"not used")," in multipart requests.")),(0,s.kt)("h3",{id:"flow"},"Flow"),(0,s.kt)(i.G,{chart:'flowchart LR\n\n  F{"asResponse()\\nenabled?"}\n  RD[Send another request]\n  E{PHP-FPM\\nenv?}\n  RF[Reply directly]\n  RS{Direct response\\nalready sent?}\n\n  F --\x3e |No| RD\n  F --\x3e |Yes| RS\n  RS --\x3e |Yes| RD\n  RS --\x3e |No| E\n  E --\x3e |No| RD\n  E --\x3e |Yes| RF',mdxType:"Mermaid"}),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$bot = new Nutgram('token');\n\n$bot->onCommand('start', function(Nutgram $bot){\n    $bot->asResponse()->sendMessage('hello'); // This will reply directly and give the method as JSON payload in the reply\n    \n    $bot->sendMessage('world'); // This will reply sending a request to the Telegram API\n});\n\n$bot->run();\n")))}g.isMDXComponent=!0}}]);