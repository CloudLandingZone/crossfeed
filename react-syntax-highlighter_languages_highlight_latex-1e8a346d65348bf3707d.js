(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{MPSR:function(e,n,a){var t=a("+YAX");function r(e){return e?"string"==typeof e?e:e.source:null}function i(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var t="("+n.map((function(e){return r(e)})).join("|")+")";return t}e.exports=function(e){var n,a=[{begin:/\^{6}[0-9a-f]{6}/},{begin:/\^{5}[0-9a-f]{5}/},{begin:/\^{4}[0-9a-f]{4}/},{begin:/\^{3}[0-9a-f]{3}/},{begin:/\^{2}[0-9a-f]{2}/},{begin:/\^{2}[\u0000-\u007f]/}],r=[{className:"keyword",begin:/\\/,relevance:0,contains:[{endsParent:!0,begin:i.apply(void 0,t(["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)","Provides(?:Expl)?(?:Package|Class|File)","(?:DeclareOption|ProcessOptions)","(?:documentclass|usepackage|input|include)","makeat(?:letter|other)","ExplSyntax(?:On|Off)","(?:new|renew|provide)?command","(?:re)newenvironment","(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand","(?:New|Renew|Provide|Declare)DocumentEnvironment","(?:(?:e|g|x)?def|let)","(?:begin|end)","(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)","caption","(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)","(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)","(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)","(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)","(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)","(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map((function(e){return e+"(?![a-zA-Z@:_])"}))))},{endsParent:!0,begin:new RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*","[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}","[qs]__?[a-zA-Z](?:_?[a-zA-Z])+","use(?:_i)?:[a-zA-Z]*","(?:else|fi|or):","(?:if|cs|exp):w","(?:hbox|vbox):n","::[a-zA-Z]_unbraced","::[a-zA-Z:]"].map((function(e){return e+"(?![a-zA-Z:_])"})).join("|"))},{endsParent:!0,variants:a},{endsParent:!0,relevance:0,variants:[{begin:/[a-zA-Z@]+/},{begin:/[^a-zA-Z@]?/}]}]},{className:"params",relevance:0,begin:/#+\d?/},{variants:a},{className:"built_in",relevance:0,begin:/[$&^_]/},{className:"meta",begin:"% !TeX",end:"$",relevance:10},e.COMMENT("%","$",{relevance:0})],s={begin:/\{/,end:/\}/,relevance:0,contains:["self"].concat(r)},c=e.inherit(s,{relevance:0,endsParent:!0,contains:[s].concat(r)}),o={begin:/\[/,end:/\]/,endsParent:!0,relevance:0,contains:[s].concat(r)},l={begin:/\s+/,relevance:0},d=[c],u=[o],g=function(e,n){return{contains:[l],starts:{relevance:0,contains:e,starts:n}}},p=function(e,n){return{begin:"\\\\"+e+"(?![a-zA-Z@:_])",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\"+e},relevance:0,contains:[l],starts:n}},m=function(n,a){return e.inherit({begin:"\\\\begin(?=\\s*\\r?\\n?\\s*\\{"+n+"\\})",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\begin"},relevance:0},g(d,a))},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"string";return e.END_SAME_AS_BEGIN({className:n,begin:/(.|\r?\n)/,end:/(.|\r?\n)/,excludeBegin:!0,excludeEnd:!0,endsParent:!0})},b=function(e){return{className:"string",end:"(?=\\\\end\\{"+e+"\\})"}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"string";return{relevance:0,begin:/\{/,starts:{endsParent:!0,contains:[{className:e,end:/(?=\})/,endsParent:!0,contains:[{begin:/\{/,end:/\}/,relevance:0,contains:["self"]}]}]}}},A=[].concat(t(["verb","lstinline"].map((function(e){return p(e,{contains:[v()]})}))),[p("mint",g(d,{contains:[v()]})),p("mintinline",g(d,{contains:[f(),v()]})),p("url",{contains:[f("link"),f("link")]}),p("hyperref",{contains:[f("link")]}),p("href",g(u,{contains:[f("link")]}))],t((n=[]).concat.apply(n,t(["","\\*"].map((function(e){return[m("verbatim"+e,b("verbatim"+e)),m("filecontents"+e,g(d,b("filecontents"+e)))].concat(t(["","B","L"].map((function(n){return m(n+"Verbatim"+e,g(u,b(n+"Verbatim"+e)))}))))}))))),[m("minted",g(u,g(d,b("minted"))))]);return{name:"LaTeX",aliases:["TeX"],contains:[].concat(t(A),r)}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_latex-1e8a346d65348bf3707d.js.map