webpackJsonp([1], {
    40: function(n, e) {},
    41: function(n, e, t) {
        t(87);
        var r = t(14)(t(48), t(95), "data-v-40a436ee", null);
        n.exports = r.exports
    },
    42: function(n, e, t) {
        t(86);
        var r = t(14)(t(49), t(94), "data-v-3498393a", null);
        n.exports = r.exports
    },
    43: function(n, e, t) {
        t(85);
        var r = t(14)(t(46), t(93), "data-v-2d079afc", null);
        n.exports = r.exports
    },
    44: function(n, e, t) {
        t(88);
        var r = t(14)(t(47), t(96), "data-v-77efa097", null);
        n.exports = r.exports
    },
    46: function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = t(15),
            o = t.n(r),
            i = t(25),
            a = t.n(i),
            s = t(24),
            l = t.n(s),
            u = t(42),
            d = t.n(u),
            c = t(41),
            m = t.n(c),
            h = t(40);
        t.n(h);
        e.default = {
            name: "app",
            components: {
                StyleEditor: d.a,
                ResumeEditor: m.a
            },
            data: function() {
                return {
                    interval: 40,
                    currentStyle: "",
                    enableHtml: !1,
                    fullStyle: ["/*\n* Hi, my name is HairuoLiu.\n* It is already December\n* I graduated in an instant\n* and I need to write a resume!\n*/\n\n/* First add transitions to all the elements */\n* {\n  transition: all .3s;\n}\n/* \n* The white background is too monotonous\n* I need to change the background color! \n*/\nhtml {\n  color: #dedede; \n  background: #1E88E5;\n}\n/* The text is too close to the border */\n.styleEditor {\n    padding: .5em;\n    border: 3px solid;\n    overflow: auto;\n    height: 95vh;\n    width: 45vw; \n    margin: .5em;\n    border-radius: 5px;\n    border-color:#272822; \n    background: #272822;\n    box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.3);\n    font-family: initial; \n}\n\n/* Highlighting the code  */\n.token.comment { \n  color: #857F6B; \n  font-style: italic; \n  }\n.token.selector{ color: #a6e22e; }\n.token.property{ color: #f92672; }\n.token.punctuation{ color: #66d9ef; }\n.token.function{ color: #ae81ff; }\n\n/* add some 3D effects! */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* Now I need a editor */\n.resume-div{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 95vh;\n  border: 3px solid;\n  border-radius: 5px;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* Well, I can start writing my resumes */\n\n\n", "\n/*\n * Oh, The resume is Markdown type\n * I need to make it friendly to HR\n */\n", '\n/* Let\'s add some HTML style*/\n.resume-div{\n  padding: 2em;\n}\n.resume-div h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resume-div ul,.resume-div ol{\n  list-style: none;\n}\n.resume-div ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resume-div ol {\n  counter-reset: section;\n}\n.resume-div ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resume-div blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
                    currentMarkdown: "",
                    fullMarkdown: "\nHairuoLiu | [GitHub](https://github.com/HairuoLiu?tab=repositories) | [SELECTED PROJECTS](ProjectPage.html)\n=====\n\nEDUCATION\n----\n- The Ohio State University, Columbus, Ohio\n- B.S. Computer Science Engineering, December 2017\n\nACTIVITIES\n----\nACM Programming Contest, OSU ACM School Team Member  --  October 2015\n- Won the 2nd place in algorithm programming in OSU school contest.\n- Attended ACM East Center America Regional Programming Contest on behalf OSU.\n\nOBJECTIVE\n----\nNew graduate student, seeking to software develop, mobile applications in a full time position.\n\nQUALIFICATIONS\n----\n*Programming Language:  Java, C, JavaScript, C#, C++, Assembly language, Ruby, PHP\n\n*App Development:  Android studio, Xcode, Visual studio, Amazon Alexa, Amazon Lambda, WeChat develop tools\n\n*Web Development:  ASP.NET, Ruby on rails, Meteor, Middleman, Laravel, Vue, React, Bootstrap, materializecss\n\n*Game Development:  Unity, Visual studio, Monogame\n\n*Security tools:  CIS-CAT Pro, SANS Checklist, OSSEC, Kippo, nmap, Nessus, Metasploit, Tcpdump, wireshark\n\n*Database:  MySQL, SQLite, Mongo DB, DynamoDB\n\nINTERSHIP EXPERIENCE\n----\n\n Romp n' Roll Kindergarten China (http://preschool.rompy.cn) -- May - July 2017\n- Developed frontend with html, css and javascript based on Photoshop designs\n- Built backend with meteorJS, Materialize and mongoDB.\n- Implemented online booking application implement the WeChat platform.\n\nHylanda (China, Beijing) -- May - June 2014\n- Implemented trie tree based statistics algorithm analyzing big data in team.\n\n\n> If you want to email me, Click [My Email Address](mailto:liu.3502@osu.edu).\n\n"
                }
            },
            created: function() {
                this.makeResume()
            },
            methods: {
                makeResume: function() {
                    function n() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, this.progressivelyShowStyle(0);
                                case 2:
                                    return n.next = 4, this.progressivelyShowResume();
                                case 4:
                                    return n.next = 6, this.progressivelyShowStyle(1);
                                case 6:
                                    return n.next = 8, this.showHtml();
                                case 8:
                                    return n.next = 10, this.progressivelyShowStyle(2);
                                case 10:
                                case "end":
                                    return n.stop()
                            }
                        }, n, this)
                    }));
                    return n
                }(),
                showHtml: function() {
                    var n = this;
                    return new o.a(function(e, t) {
                        n.enableHtml = !0, n.$nextTick(function() {
                            n.$refs.resumeEditor.goTop()
                        }), e()
                    })
                },
                progressivelyShowStyle: function(n) {
                    var e = this;
                    return new o.a(function(t, r) {
                        var o = e.interval,
                            i = l()(a.a.mark(function e() {
                                var r, s, l, u, d, c = this;
                                return a.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = this.fullStyle[n]) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            s = this.fullStyle.filter(function(e, t) {
                                                return t <= n
                                            }).map(function(n) {
                                                return n.length
                                            }).reduce(function(n, e) {
                                                return n + e
                                            }, 0), l = s - r.length, this.currentStyle.length < s ? (u = this.currentStyle.length - l, d = r.substring(u, u + 2) || " ", this.currentStyle += d, "\n" === r.substring(u, u + 1) && this.$refs.styleEditor && this.$nextTick(function() {
                                                c.$refs.styleEditor.goBottom()
                                            }), setTimeout(i, o)) : t();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })).bind(e);
                        i()
                    })
                },
                progressivelyShowResume: function() {
                    var n = this;
                    return new o.a(function(e, t) {
                        var r = n.fullMarkdown.length,
                            o = n.interval;
                        ! function t() {
                            if (n.currentMarkdown.length < r) {
                                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 2);
                                n.currentMarkdown[n.currentMarkdown.length - 1];
                                "\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function() {
                                    return n.$refs.resumeEditor.goBottom()
                                }), setTimeout(t, o)
                            } else e()
                        }()
                    })
                }
            }
        }
    },
    47: function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = t(15),
            o = t.n(r),
            i = t(25),
            a = t.n(i),
            s = t(24),
            l = t.n(s),
            u = t(42),
            d = t.n(u),
            c = t(41),
            m = t.n(c),
            h = t(40);
        t.n(h);
        e.default = {
            name: "app",
            components: {
                StyleEditor: d.a,
                ResumeEditor: m.a
            },
            data: function() {
                return {
                    interval: 40,
                    currentStyle: "",
                    enableHtml: !1,
                    fullStyle: ["/*\n* Hi, my name is HairuoLiu.\n* \n* Let me write a simple page \n* to introduce myself!\n*/\n\n/* \n* First add transitions \n* to all the elements \n*/\n* {\n  transition: all .3s;\n}\n/* \n* The white background is \n* too monotonous, I need to\n* change background color! \n*/\nhtml {\n  color: #dedede; \n  background: #1E88E5;\n}\n/* Text is too close to border */\n.styleEditor {\n    padding: .5em;\n    border: 3px solid;\n    overflow: auto;\n    width: 95vw; \n    margin: 2.5vh 2.5vw 0.5vh;\n    height: 95vh; \n    border-radius: 5px;\n    border-color:#272822; \n    background: #272822;\n    box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.3);\n    font-family: initial;\n}\n\n/* make it half page */\n.styleEditor {\n  height: 45vh;\n}\n\n/* Highlighting the code  */\n.token.comment { \n  color: #857F6B; \n  font-style: italic; \n  }\n.token.selector{ color: #a6e22e;}\n.token.property{ color: #f92672;}\n.token.punctuation{ color: #66d9ef;}\n.token.function{ color: #ae81ff;}\n\n/* add some 3D effects! */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* Now I need a editor */\n.resume-div{\n  position: fixed; \n  top: 47%; left: 0;\n  padding: .5em; \n  margin:  2.5vw; \n  width: 95vw; height: 50vh;\n  border: 3px solid;\n  border-radius: 5px;\n  overflow: auto;\n  background: white; color: #222;\n}\n/* \n* Well, I can start \n* writing my resumes !\n*/\n", "\n/*\n * Oh, The resume is Markdown type\n * I need to make it friendly to HR\n */\n", "\n/* Let's add some HTML style*/\n.resume-div{\n  padding: 2em;\n}\n.resume-div h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resume-div h6{\n  font-family: 'Saira Extra Condensed', serif;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #343a40;\n}\n.resume-div ul,.resume-div ol{\n  list-style: none;\n}\n.resume-div ul> li::before{\n  content: '•';\n  margin-right: .5em;\n  color: #a2a;\n}\n\n.resume-div li {\n  list-style-type: none;\n  position: relative;\n  margin: 2px;\n  padding: 0.2em 0.2em 0.2em 0.2em;\n  align-items: center;\n  background: lightgrey;\n  font-size:14px;\n}\n\n.resume-div ol {\n  counter-reset: section;\n}\n.resume-div ol li::before {\n  counter-increment: section;\n  content: counters(section, \".\") \" \";\n  margin-right: .5em;\n}\n.resume-div blockquote {\n  margin: 0.3em;\n  padding: .5em;\n  background: #ddd;\n}\n\n"],
                    currentMarkdown: "",
                    fullMarkdown: "\nHairuoLiu\n===== \n\n [GitHub](https://github.com/HairuoLiu?tab=repositories) \n\n [SELECTED PROJECTS](ProjectPage.html)\n\nEDUCATION\n----\n- The Ohio State University, Columbus, Ohio\n- B.S. Computer Science Engineering, December 2017\n\nACTIVITIES\n----\nACM Programming Contest, OSU ACM School Team Member  --  October 2015\n- Won the 2nd place in algorithm programming in OSU school contest.\n- Attended ACM East Center America Regional Programming Contest on behalf OSU.\n\nOBJECTIVE\n----\nNew graduate student, seeking to software develop, mobile applications in a full time position.\n\nQUALIFICATIONS\n----\n*Programming Language:  Java, C, JavaScript, C#, C++, Assembly language, Ruby, PHP\n\n*App Development:  Android studio, Xcode, Visual studio, Amazon Alexa, Amazon Lambda, WeChat develop tools\n\n*Web Development:  ASP.NET, Ruby on rails, Meteor, Middleman, Laravel, Vue, React, Bootstrap, materializecss\n\n*Game Development:  Unity, Visual studio, Monogame\n\n*Security tools:  CIS-CAT Pro, SANS Checklist, OSSEC, Kippo, nmap, Nessus, Metasploit, Tcpdump, wireshark\n\n*Database:  MySQL, SQLite, Mongo DB, DynamoDB\n\nINTERSHIP EXPERIENCE\n----\n\nRomp n' Roll Kindergarten China (http://preschool.rompy.cn) -- May - July 2017\n- Developed frontend with html, css and javascript based on Photoshop designs\n- Built backend with meteorJS, Materialize and mongoDB.\n- Implemented online booking application implement the WeChat platform.\n\nHylanda (China, Beijing) -- May - June 2014\n- Implemented trie tree based statistics algorithm analyzing big data in team. \n\n\n> If you want to email me, Click [My Email Address](mailto:liu.3502@osu.edu).\n\n"
                }
            },
            created: function() {
                this.makeResume()
            },
            methods: {
                makeResume: function() {
                    function n() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, this.progressivelyShowStyle(0);
                                case 2:
                                    return n.next = 4, this.progressivelyShowResume();
                                case 4:
                                    return n.next = 6, this.progressivelyShowStyle(1);
                                case 6:
                                    return n.next = 8, this.showHtml();
                                case 8:
                                    return n.next = 10, this.progressivelyShowStyle(2);
                                case 10:
                                case "end":
                                    return n.stop()
                            }
                        }, n, this)
                    }));
                    return n
                }(),
                showHtml: function() {
                    var n = this;
                    return new o.a(function(e, t) {
                        n.enableHtml = !0, e()
                    })
                },
                progressivelyShowStyle: function(n) {
                    var e = this;
                    return new o.a(function(t, r) {
                        var o = e.interval,
                            i = l()(a.a.mark(function e() {
                                var r, s, l, u, d, c = this;
                                return a.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = this.fullStyle[n]) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            s = this.fullStyle.filter(function(e, t) {
                                                return t <= n
                                            }).map(function(n) {
                                                return n.length
                                            }).reduce(function(n, e) {
                                                return n + e
                                            }, 0), l = s - r.length, this.currentStyle.length < s ? (u = this.currentStyle.length - l, d = r.substring(u, u + 2) || " ", this.currentStyle += d, "\n" === r.substring(u, u + 1) && this.$refs.styleEditor && this.$nextTick(function() {
                                                c.$refs.styleEditor.goBottom()
                                            }), setTimeout(i, o)) : t();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })).bind(e);
                        i()
                    })
                },
                progressivelyShowResume: function() {
                    var n = this;
                    return new o.a(function(e, t) {
                        var r = n.fullMarkdown.length,
                            o = n.interval;
                        ! function t() {
                            if (n.currentMarkdown.length < r) {
                                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 2);
                                n.currentMarkdown[n.currentMarkdown.length - 1];
                                "\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function() {
                                    return n.$refs.resumeEditor.goBottom()
                                }), setTimeout(t, o)
                            } else e()
                        }()
                    })
                }
            }
        }
    },
    48: function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = t(89),
            o = t.n(r);
        e.default = {
            props: ["markdown", "enableHtml"],
            name: "ResumeEditor",
            computed: {
                result: function() {
                    return this.enableHtml ? o()(this.markdown) : this.markdown
                }
            },
            methods: {
                goBottom: function() {
                    this.$refs.container.scrollTop = 1e5
                },
                goTop: function() {
                    this.$refs.container.scrollTop = 0
                }
            }
        }
    },
    49: function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = t(90),
            o = t.n(r);
        e.default = {
            name: "Editor",
            props: ["code"],
            computed: {
                highlightedCode: function() {
                    return o.a.highlight(this.code, o.a.languages.css)
                },
                codeInStyleTag: function() {
                    return "<style>" + this.code + "</style>"
                }
            },
            methods: {
                goBottom: function() {
                    this.$refs.container.scrollTop = 1e5
                }
            }
        }
    },
    50: function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = t(45),
            o = t(43),
            i = t.n(o),
            a = t(44),
            s = t.n(a),
            l = document.documentElement.clientWidth;
        new r.a({
            el: "#app",
            render: function(n) {
                return n(l > 500 ? i.a : s.a)
            }
        })
    },
    85: function(n, e) {},
    86: function(n, e) {},
    87: function(n, e) {},
    88: function(n, e) {},
    93: function(n, e) {
        n.exports = {
            render: function() {
                var n = this,
                    e = n.$createElement,
                    t = n._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("StyleEditor", {
                    ref: "styleEditor",
                    attrs: {
                        code: n.currentStyle
                    }
                }), n._v(" "), t("ResumeEditor", {
                    ref: "resumeEditor",
                    attrs: {
                        markdown: n.currentMarkdown,
                        enableHtml: n.enableHtml
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    94: function(n, e) {
        n.exports = {
            render: function() {
                var n = this,
                    e = n.$createElement,
                    t = n._self._c || e;
                return t("div", {
                    ref: "container",
                    staticClass: "styleEditor"
                }, [t("div", {
                    staticClass: "code",
                    domProps: {
                        innerHTML: n._s(n.codeInStyleTag)
                    }
                }), n._v(" "), t("pre", {
                    domProps: {
                        innerHTML: n._s(n.highlightedCode)
                    }
                })])
            },
            staticRenderFns: []
        }
    },
    95: function(n, e) {
        n.exports = {
            render: function() {
                var n = this,
                    e = n.$createElement,
                    t = n._self._c || e;
                return t("div", {
                    ref: "container",
                    staticClass: "resume-div",
                    class: {
                        htmlMode: n.enableHtml
                    }
                }, [n.enableHtml ? t("div", {
                    domProps: {
                        innerHTML: n._s(n.result)
                    }
                }) : t("pre", [n._v(n._s(n.result))])])
            },
            staticRenderFns: []
        }
    },
    96: function(n, e) {
        n.exports = {
            render: function() {
                var n = this,
                    e = n.$createElement,
                    t = n._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("StyleEditor", {
                    ref: "styleEditor",
                    attrs: {
                        code: n.currentStyle
                    }
                }), n._v(" "), t("ResumeEditor", {
                    ref: "resumeEditor",
                    attrs: {
                        markdown: n.currentMarkdown,
                        enableHtml: n.enableHtml
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    }
}, [50]);
//# sourceMappingURL=app.8a58b912f521afa9ea85.js.map