webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(14)(t(48),t(95),"data-v-40a436ee",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(14)(t(49),t(94),"data-v-3498393a",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(14)(t(46),t(93),"data-v-2d079afc",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(14)(t(47),t(96),"data-v-77efa097",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),d=t.n(l),c=t(41),m=t.n(c),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:d.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Hi, my name is HairuoLiu.\n* It is already December\n* I graduated in an instant\n* and I need to write a resume!\n*/\n\n/* First add transitions to all the elements */\n* {\n  transition: all .3s;\n}\n/* \n* The white background is too monotonous\n* I need to change the background color! \n*/\nhtml {\n  color: #dedede; \n  background: #1E88E5;\n  font-family: Verdana, Geneva, sans-serif;\n}\n/* The text is too close to the border */\n.styleEditor {\n    position: relative;\n    height: 90vh;\n    width: 45vw; \n    margin: .5em;\n    padding: .5em;\n    overflow: auto;\n    border: 3px solid;\n    border-radius: 5px;\n    box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.3);\n    font-family: initial;\n    background: #272822;\n}\n\n/* Highlighting the code  */\n.token.selector{ color: #a6e22e; }\n.token.property{ color: #f92672; }\n.token.punctuation{ color: #66d9ef; }\n.token.function{ color: #ae81ff; }\n\n/* add some 3D effects! */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* Now I need a editor */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* Well, now I can start writing my resumes */\n\n\n","\n/* 这个简历好像差点miss something \n * Yes，the resume is Markdown type\n * I need to change it more friendly format for HR.\n * easy,用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"HairuoLiu\n----\n\nComputer science & Engineering student at Ohio State University. \n\nInformation and Computation Assurance (CIA).\n\nCOMPUTER AND TECHNICAL SKILLS\n----\n\n*App Development\n\n*Game Development \n\n*Web Development\n\n*Security tools \n\n  [CIS-CAT Pro, SANS Checklist, OSSEC, Kippo, nmap, Nessus, Metasploit, Tcpdump, wireshark]\n\nACADEMIC COMPUTER SCIENCE ENGINEERING PROJECTS\n----\n\nINTERSHIP EXPERIENCE AND VOLUNTEER \n----\n\n1. Romproll Kindergarten(China, China, Beijing) -- Summer, 2017\n2. PICO organization(USA, Ohio) -- Fall, 2016\n3. Hylanda(China, Beijing) -- Summer, 2014\n\nACADEMIC COMPUTER SCIENCE ENGINEERING PROJECTS\n----\n\n* [GitHub](https://github.com/HairuoLiu?tab=repositories )\n* [Host Hardening Techniques](https://hairuoliu.gitbooks.io/host-hardening-techniques/content/)\n* [Network Security](https://hairuoliu.gitbooks.io/network-security/content/)\n\n> If you want to email me, Click [My Email Address](mailto:liu.3502@osu.edu), please contact me！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,d,c=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,d=r.substring(l,l+1)||" ",this.currentStyle+=d,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),d=t.n(l),c=t(41),m=t.n(c),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:d.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Hi, my name is HairuoLiu.\n* \n* Let me write a simple page \n* to introduce myself!\n*/\n\n/* \n* First add transitions \n* to all the elements \n*/\n* {\n  transition: all 1s;\n  -webkit-transition: all 1s;\n}\n/* \n* The white background is \n* too monotonous, I need to\n* change background color! \n*/\nhtml {\n  color: #dedede; \n  background: #1E88E5;\n}\n/* Text is too close to border */\n.styleEditor {\n    padding: .5em;\n    border: 3px solid;\n    overflow: auto;\n    width: 95vw; \n    margin: 2.5vh 2.5vw 0.5vh;\n    height: 95vh; \n    border-radius: 5px;\n    border-color:#272822;\n    box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.3);\n    font-family: initial;\n    background: #272822;\n}\n\n/* Too high */\n.styleEditor {\n  height: 45vh;\n}\n\n/* Highlighting the code  */\n.token.selector{ color: #a6e22e; }\n.token.property{ color: #f92672; }\n.token.punctuation{ color: #66d9ef; }\n.token.function{ color: #ae81ff; }\n\n/* add some 3D effects! */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* Now I need a editor */\n.resumeEditor{\n  position: fixed; \n  top: 47%; left: 0;\n  padding: .5em; margin:  2.5vw; \n  width: 95vw; height: 50vh;\n  border: 3px solid;\n  border-radius: 5px;\n  overflow: auto;\n  background: white; color: #222;\n}\n/* \n* Well, now I can start \n* writing my resumes !\n*/\n","\n/*\n * The resume miss something \n * Yes，the resume is Markdown type\n * I need to change it more friendly format for HR.\n */\n","\n/* Let's add some HTML style*/\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor h6{\n  font-family: 'Saira Extra Condensed', serif;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #343a40;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: '•';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, \".\") \" \";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n\n"],currentMarkdown:"",fullMarkdown:"HairuoLiu [GitHub](https://github.com/HairuoLiu?tab=repositories)\n----\n\nComputer science & Engineering student at Ohio State University. \nInformation and Computation Assurance (CIA).\n\nQUALIFICATIONS\n----\n\n*App Development:  \n Android studio, Xcode, Visual studio, Amazon Alexa, Amazon Lambda, WeChat develop tools\n\n*Web Development:  \n ASP.NET, Ruby on rails, Meteor, Middleman, Laravel, Vue, React, Bootstrap, materializecss\n\n*Game Development:  \n Unity, Visual studio, Monogame\n\n*Security tools:  \n CIS-CAT Pro, SANS Checklist, OSSEC, Kippo, nmap, Nessus, Metasploit, Tcpdump, wireshark\n\n*Database:  \n MySQL, SQLite, Mongo DB, DynamoDB\n\nINTERSHIP EXPERIENCE\n----\n\n1. Romp n' Roll Kindergarten China (China, Beijing) -- Summer, 2017\n* Full Stack Developer: Converted Photoshop designs to front-end code Used ASP.NET to build website with mysql database. (http://preschool.rompy.cn)\n2. Romp n' Roll China, Beijing -- Fall, 2016\n* Software Developer: Developed online booking application under WeChat platform.\n3. Hylanda (China, Beijing) -- Summer, 2014\n* Programmer: Wrote arithmetic analyzing big data with C language in team.\n\nSELECTED PROJECTS\n----\n\n\n* [Host Hardening Techniques](https://hairuoliu.gitbooks.io/host-hardening-techniques/content/)\n* [Network Security](https://hairuoliu.gitbooks.io/network-security/content/)\n\n> If you want to email me, Click [My Email Address](mailto:liu.3502@osu.edu), please contact me！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,d,c=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,d=r.substring(l,l+2)||" ",this.currentStyle+=d,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+2);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.011376aa732ca0f82e7e.js.map