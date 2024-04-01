!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");let t=0;const n=e=>{const n=(new Date).getTime(),a=Math.floor(1e9*Math.random());return t++,e+"_"+a+t+String(n)},a=e=>t=>t.options.get(e),r=a("help_tabs"),o=a("forced_plugins"),i=(s="string",e=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=a=e,(r=String).prototype.isPrototypeOf(n)||(null===(o=a.constructor)||void 0===o?void 0:o.name)===r.name)?"string":t;var n,a,r,o})(e)===s);var s;const l=(c=void 0,e=>c===e);var c;const m=(e=>t=>typeof t===e)("function"),u=(p=!1,()=>p);var p;class y{constructor(e,t){this.tag=e,this.value=t}static some(e){return new y(!0,e)}static none(){return y.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?y.some(e(this.value)):y.none()}bind(e){return this.tag?e(this.value):y.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:y.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return(e=>null==e)(e)?y.none():y.some(e)}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}y.singletonNone=new y(!1);const h=Array.prototype.slice,d=Array.prototype.indexOf,g=(e,t)=>((e,t)=>d.call(e,t))(e,t)>-1,k=(e,t)=>{const n=e.length,a=new Array(n);for(let r=0;r<n;r++){const n=e[r];a[r]=t(n,r)}return a},v=(e,t)=>{const n=[];for(let a=0,r=e.length;a<r;a++){const r=e[a];t(r,a)&&n.push(r)}return n},b=(e,t)=>((e,t,n)=>{for(let a=0,r=e.length;a<r;a++){const r=e[a];if(t(r,a))return y.some(r);if(n(r,a))break}return y.none()})(e,t,u),f=(e,t)=>{const n=h.call(e,0);return n.sort(t),n},A=Object.keys,C=Object.hasOwnProperty,w=(e,t)=>C.call(e,t);var S=tinymce.util.Tools.resolve("tinymce.Resource"),_=tinymce.util.Tools.resolve("tinymce.util.I18n");const M=(e,t)=>S.load(`tinymce.html-i18n.help-keynav.${t}`,`${e}/js/i18n/keynav/${t}.js`),T=e=>M(e,_.getCode()).catch((()=>M(e,"en")));var x=tinymce.util.Tools.resolve("tinymce.Env");const O=e=>{const t=x.os.isMacOS()||x.os.isiOS(),n=t?{alt:"&#x2325;",ctrl:"&#x2303;",shift:"&#x21E7;",meta:"&#x2318;",access:"&#x2303;&#x2325;"}:{meta:"Ctrl ",access:"Shift + Alt "},a=e.split("+"),r=k(a,(e=>{const t=e.toLowerCase().trim();return w(n,t)?n[t]:e}));return t?r.join("").replace(/\s/,""):r.join("+")},P=[{shortcuts:["Meta + B"],action:"Bold"},{shortcuts:["Meta + I"],action:"Italic"},{shortcuts:["Meta + U"],action:"Underline"},{shortcuts:["Meta + A"],action:"Select all"},{shortcuts:["Meta + Y","Meta + Shift + Z"],action:"Redo"},{shortcuts:["Meta + Z"],action:"Undo"},{shortcuts:["Access + 1"],action:"Heading 1"},{shortcuts:["Access + 2"],action:"Heading 2"},{shortcuts:["Access + 3"],action:"Heading 3"},{shortcuts:["Access + 4"],action:"Heading 4"},{shortcuts:["Access + 5"],action:"Heading 5"},{shortcuts:["Access + 6"],action:"Heading 6"},{shortcuts:["Access + 7"],action:"Paragraph"},{shortcuts:["Access + 8"],action:"Div"},{shortcuts:["Access + 9"],action:"Address"},{shortcuts:["Alt + 0"],action:"Open help dialog"},{shortcuts:["Alt + F9"],action:"Focus to menubar"},{shortcuts:["Alt + F10"],action:"Focus to toolbar"},{shortcuts:["Alt + F11"],action:"Focus to element path"},{shortcuts:["Ctrl + F9"],action:"Focus to contextual toolbar"},{shortcuts:["Shift + Enter"],action:"Open popup menu for split buttons"},{shortcuts:["Meta + K"],action:"Insert link (if link plugin activated)"},{shortcuts:["Meta + S"],action:"Save (if save plugin activated)"},{shortcuts:["Meta + F"],action:"Find (if searchreplace plugin activated)"},{shortcuts:["Meta + Shift + F"],action:"Switch to or from fullscreen mode"}],E=()=>({name:"shortcuts",title:"Handy Shortcuts",items:[{type:"table",header:["Action","Shortcut"],cells:k(P,(e=>{const t=k(e.shortcuts,O).join(" or ");return[e.action,t]}))}]}),F=k([{key:"accordion",name:"Accordion"},{key:"advlist",name:"Advanced List"},{key:"anchor",name:"Anchor"},{key:"autolink",name:"Autolink"},{key:"autoresize",name:"Autoresize"},{key:"autosave",name:"Autosave"},{key:"charmap",name:"Character Map"},{key:"code",name:"Code"},{key:"codesample",name:"Code Sample"},{key:"colorpicker",name:"Color Picker"},{key:"directionality",name:"Directionality"},{key:"emoticons",name:"Emoticons"},{key:"fullscreen",name:"Full Screen"},{key:"help",name:"Help"},{key:"image",name:"Image"},{key:"importcss",name:"Import CSS"},{key:"insertdatetime",name:"Insert Date/Time"},{key:"link",name:"Link"},{key:"lists",name:"Lists"},{key:"media",name:"Media"},{key:"nonbreaking",name:"Nonbreaking"},{key:"pagebreak",name:"Page Break"},{key:"preview",name:"Preview"},{key:"quickbars",name:"Quick Toolbars"},{key:"save",name:"Save"},{key:"searchreplace",name:"Search and Replace"},{key:"table",name:"Table"},{key:"template",name:"Template"},{key:"textcolor",name:"Text Color"},{key:"visualblocks",name:"Visual Blocks"},{key:"visualchars",name:"Visual Characters"},{key:"wordcount",name:"Word Count"},{key:"a11ychecker",name:"Accessibility Checker",type:"premium"},{key:"advcode",name:"Advanced Code Editor",type:"premium"},{key:"advtable",name:"Advanced Tables",type:"premium"},{key:"advtemplate",name:"Advanced Templates",type:"premium",slug:"advanced-templates"},{key:"ai",name:"AI Assistant",type:"premium"},{key:"casechange",name:"Case Change",type:"premium"},{key:"checklist",name:"Checklist",type:"premium"},{key:"editimage",name:"Enhanced Image Editing",type:"premium"},{key:"footnotes",name:"Footnotes",type:"premium"},{key:"typography",name:"Advanced Typography",type:"premium",slug:"advanced-typography"},{key:"mediaembed",name:"Enhanced Media Embed",type:"premium",slug:"introduction-to-mediaembed"},{key:"export",name:"Export",type:"premium"},{key:"formatpainter",name:"Format Painter",type:"premium"},{key:"inlinecss",name:"Inline CSS",type:"premium",slug:"inline-css"},{key:"linkchecker",name:"Link Checker",type:"premium"},{key:"mentions",name:"Mentions",type:"premium"},{key:"mergetags",name:"Merge Tags",type:"premium"},{key:"pageembed",name:"Page Embed",type:"premium"},{key:"permanentpen",name:"Permanent Pen",type:"premium"},{key:"powerpaste",name:"PowerPaste",type:"premium",slug:"introduction-to-powerpaste"},{key:"rtc",name:"Real-Time Collaboration",type:"premium",slug:"rtc-introduction"},{key:"tinymcespellchecker",name:"Spell Checker Pro",type:"premium",slug:"introduction-to-tiny-spellchecker"},{key:"autocorrect",name:"Spelling Autocorrect",type:"premium"},{key:"tableofcontents",name:"Table of Contents",type:"premium"},{key:"tinycomments",name:"Tiny Comments",type:"premium",slug:"introduction-to-tiny-comments"},{key:"tinydrive",name:"Tiny Drive",type:"premium",slug:"tinydrive-introduction"}],(e=>({...e,type:e.type||"opensource",slug:e.slug||e.key}))),j=e=>{const t=e=>`<a data-alloy-tabstop="true" tabindex="-1" href="${e.url}" target="_blank" rel="noopener">${e.name}</a>`,n=(e,n)=>b(F,(e=>e.key===n)).fold((()=>((e,n)=>{const a=e.plugins[n].getMetadata;if(m(a)){const e=a();return{name:e.name,html:t(e)}}return{name:n,html:n}})(e,n)),(e=>{const n="premium"===e.type?`${e.name}*`:e.name;return{name:n,html:t({name:n,url:`https://www.tiny.cloud/docs/tinymce/6/${e.slug}/`})}})),a=e=>{const t=(e=>{const t=A(e.plugins),n=o(e);return l(n)?t:v(t,(e=>!g(n,e)))})(e),a=f(k(t,(t=>n(e,t))),((e,t)=>e.name.localeCompare(t.name))),r=k(a,(e=>"<li>"+e.html+"</li>")),i=r.length,s=r.join("");return"<p><b>"+_.translate(["Plugins installed ({0}):",i])+"</b></p><ul>"+s+"</ul>"},r={type:"htmlpanel",presets:"document",html:[(e=>null==e?"":"<div>"+a(e)+"</div>")(e),(()=>{const e=v(F,(({type:e})=>"premium"===e)),t=f(k(e,(e=>e.name)),((e,t)=>e.localeCompare(t))),n=k(t,(e=>`<li>${e}</li>`)).join("");return"<div><p><b>"+_.translate("Premium plugins:")+"</b></p><ul>"+n+'<li class="tox-help__more-link" "><a href="https://www.tiny.cloud/pricing/?utm_campaign=help_dialog_plugin_tab&utm_source=tiny&utm_medium=referral&utm_term=read_more&utm_content=premium_plugin_heading" rel="noopener" target="_blank" data-alloy-tabstop="true" tabindex="-1">'+_.translate("Learn more...")+"</a></li></ul></div>"})()].join("")};return{name:"plugins",title:"Plugins",items:[r]}};var H=tinymce.util.Tools.resolve("tinymce.EditorManager");const I=async(e,t,a)=>{const o=E(),s=await(async e=>({name:"keyboardnav",title:"Keyboard Navigation",items:[{type:"htmlpanel",presets:"document",html:await T(e)}]}))(a),l=j(e),c=(()=>{var e,t;const n='<a data-alloy-tabstop="true" tabindex="-1" href="https://www.tiny.cloud/docs/tinymce/6/changelog/?utm_campaign=help_dialog_version_tab&utm_source=tiny&utm_medium=referral" rel="noopener" target="_blank">TinyMCE '+(e=H.majorVersion,t=H.minorVersion,(0===e.indexOf("@")?"X.X.X":e+"."+t)+"</a>");return{name:"versions",title:"Version",items:[{type:"htmlpanel",html:"<p>"+_.translate(["You are using {0}",n])+"</p>",presets:"document"}]}})(),m={[o.name]:o,[s.name]:s,[l.name]:l,[c.name]:c,...t.get()};return y.from(r(e)).fold((()=>(e=>{const t=A(e),n=t.indexOf("versions");return-1!==n&&(t.splice(n,1),t.push("versions")),{tabs:e,names:t}})(m)),(e=>((e,t)=>{const a={},r=k(e,(e=>{var r;if(i(e))return w(t,e)&&(a[e]=t[e]),e;{const t=null!==(r=e.name)&&void 0!==r?r:n("tab-name");return a[t]=e,t}}));return{tabs:a,names:r}})(e,m)))},$=(e,t,n)=>()=>{I(e,t,n).then((({tabs:t,names:n})=>{const a={type:"tabpanel",tabs:(e=>{const t=[],n=e=>{t.push(e)};for(let t=0;t<e.length;t++)e[t].each(n);return t})(k(n,(e=>{return w(n=t,a=e)?y.from(n[a]):y.none();var n,a})))};e.windowManager.open({title:"Help",size:"medium",body:a,buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{}})}))};e.add("help",((e,t)=>{const a=(e=>{let t=e;return{get:()=>t,set:e=>{t=e}}})({}),r=(e=>({addTab:t=>{var a;const r=null!==(a=t.name)&&void 0!==a?a:n("tab-name"),o=e.get();o[r]=t,e.set(o)}}))(a);(e=>{(0,e.options.register)("help_tabs",{processor:"array"})})(e);const o=$(e,a,t);return((e,t)=>{e.ui.registry.addButton("help",{icon:"help",tooltip:"Help",onAction:t}),e.ui.registry.addMenuItem("help",{text:"Help",icon:"help",shortcut:"Alt+0",onAction:t})})(e,o),((e,t)=>{e.addCommand("mceHelp",t)})(e,o),e.shortcuts.add("Alt+0","Open help dialog","mceHelp"),((e,t)=>{e.on("init",(()=>{T(t)}))})(e,t),r}))}();