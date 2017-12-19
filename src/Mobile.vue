<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 40,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* Hi, my name is HairuoLiu.
* It is already December, I will grudate再不做简历就来不及各个公司的招聘了
* I need to write a resume!
*/

/* First add transitions to all the elements */
* {
  transition: all .3s;
}
/* The white background is too monotonous
* I need to change the background color! 
*/
html {
  color: #dedede; 
  background: #1E88E5;
  font-family: Verdana, Geneva, sans-serif;
}
/* The text is too close to the border */
.styleEditor {
    position: relative;
    height: 90vh;
    width: 45vw; 
    margin: .5em;
    padding: 5px;
    overflow: auto;
    border: 3px solid;
    border-radius: 5px;
    box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.3);
    font-family: initial;
    background: #272822;
  // padding: .5em;
  
}

/* Highlighting the code  */
.token.selector{ color: #a6e22e; }
.token.property{ color: #f92672; }
.token.punctuation{ color: #66d9ef; }
.token.function{ color: #ae81ff; }

/* add some 3D effects! */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* Now I need a editor */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* Well, now I can start writing my resumes */


`,
          `
/* 这个简历好像差点miss something 
 * Yes，the resume is Markdown type
 * I need to change it more friendly format for HR.
 * easy,用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `HairuoLiu
----

Computer science & Engineering student at Ohio State University. \n
Information and Computation Assurance (CIA).

COMPUTER AND TECHNICAL SKILLS
----

*App Development

*Game Development 

*Web Development

*Security tools \n
  [CIS-CAT Pro, SANS Checklist, OSSEC, Kippo, nmap, Nessus, Metasploit, Tcpdump, wireshark]

ACADEMIC COMPUTER SCIENCE ENGINEERING PROJECTS
----

INTERSHIP EXPERIENCE AND VOLUNTEER 
----

1. Romproll Kindergarten(China, China, Beijing) -- Summer, 2017
2. PICO organization(USA, Ohio) -- Fall, 2016
3. Hylanda(China, Beijing) -- Summer, 2014

ACADEMIC COMPUTER SCIENCE ENGINEERING PROJECTS
----

* [GitHub](https://github.com/HairuoLiu?tab=repositories)
* [Host Hardening Techniques](https://hairuoliu.gitbooks.io/host-hardening-techniques/content/)
* [Network Security](https://hairuoliu.gitbooks.io/network-security/content/)

> If you want to email me, Click [My Email Address](mailto:liu.3502@osu.edu), please contact me！

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          this.$nextTick(() => {
            this.$refs.resumeEditor.goTop()
          })
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh; position: relative;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }

</style>
