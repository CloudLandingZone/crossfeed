(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{no7C:function(n,e){n.exports=function(n){var e={literal:"true false null"},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],a=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],l={end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:e},t={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(l,{begin:/:/})].concat(i),illegal:"\\S"},o={begin:"\\[",end:"\\]",contains:[n.inherit(l)],illegal:"\\S"};return a.push(t,o),i.forEach((function(n){a.push(n)})),{name:"JSON",contains:a,keywords:e,illegal:"\\S"}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_json-68c4d2e9ee1388c17321.js.map