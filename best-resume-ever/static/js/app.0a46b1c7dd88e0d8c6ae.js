webpackJsonp([1],[,,function(t,s,e){"use strict";function a(t){return{name:t,data:function(){return{person:l.a,terms:v.a}},computed:{lang:function(){return this.terms[this.person.lang]}}}}e.d(s,"a",function(){return a});var i=e(100),n=(e.n(i),e(99)),r=(e.n(n),e(101)),c=(e.n(r),e(103)),o=(e.n(c),e(102)),l=(e.n(o),e(43)),v=e(44)},,,,,,,,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";var a=e(0),i=e(112),n=e(98),r=e.n(n),c=e(97),o=e.n(c);a.a.use(i.a),s.a=new i.a({routes:[{path:"/",name:"home",component:o.a},{path:"/resume/:resumeid",name:"resume",component:r.a}]})},function(t,s,e){function a(t){e(89)}var i=e(1)(e(45),e(110),a,null,null);t.exports=i.exports},function(t,s,e){"use strict";var a={headings:{contact:"联系方式",experience:"工作经历",education:"教育经历",skills:"技能专长",about:"自我介绍"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Kontakt",experience:"Berufserfahrung",education:"Schulbildung",skills:"Qualifikationen",about:"Über mich"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Contact",experience:"Experience",education:"Education",skills:"Skills",about:"About me"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Contacto",experience:"Experiencia",education:"Educación",skills:"Habilidades",about:"Sobre mi"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Contact",experience:"Expérience professionelle",education:"Formation",skills:"Compétences",about:"À propos de moi"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Kapcsolat",experience:"Munkatapasztalat",education:"Tanulmány",skills:"Készségek",about:"Rólam"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Kontak",experience:"Pengalaman",education:"Pendidikan",skills:"Keterampilan",about:"Tentang Saya"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Contatti",experience:"Esperienza professionale",education:"Formazione",skills:"Competenze",about:"Su di me"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Contato",experience:"Experiência Profissional",education:"Educação",skills:"Competências",about:"Sobre"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Contactos",experience:"Experiência Profissional",education:"Educação",skills:"Competências",about:"Sobre mim"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Контакты",experience:"Опыт",education:"Обучение",skills:"Навыки",about:"Обо мне"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"Kontakt",experience:"Arbetslivserfarenhet",education:"Utbildning",skills:"Kunskaper",about:"Om mig"}};s.a=a},function(t,s,e){"use strict";var a={headings:{contact:"ข้อมูลติดต่อ",experience:"ประสบการณ์ทำงาน",education:"ประวัติการศึกษา",skills:"ทักษะและความสามารถ",about:"ข้อมูลส่วนตัว"}};s.a=a},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0),i=e(27),n=e.n(i),r=e(26);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},function(t,s,e){"use strict";e.d(s,"a",function(){return c});var a=e(53),i=e.n(a),n=function(t){if(t&&t.length>0)return t;t=document.getElementsByTagName("*");var s=[],e=!0,a=!1,n=void 0;try{for(var r,c=i()(t);!(e=(r=c.next()).done);e=!0){var o=r.value,l=window.getComputedStyle(o,null).getPropertyValue("box-shadow");"none"!==l&&(o.style.boxShadow="none",s.push({shadow:l,top:o.offsetTop+"px",left:o.offsetLeft+"px",width:o.getBoundingClientRect().width+"px",height:o.getBoundingClientRect().height+"px"}))}}catch(t){a=!0,n=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw n}}return s},r=function(t){var s='<div id="chrome-shadow-fixer">';return t.forEach(function(t,e){return s+='<div id="chrome-shadow-fixer-'+e+'"></div>'}),s+="</div>"},c=function(t){var s=n(t);if(s.length<1)return void console.warn("fixShadows(): No elements to fix shadows.");var e=r(s);return document.body.innerHTML+=e,s.forEach(function(t,s){var e=document.querySelector("#chrome-shadow-fixer-"+s);e.style.height=t.height,e.style.width=t.width,e.style.left=t.left,e.style.top=t.top,e.style.position="absolute",e.style.boxShadow=t.shadow,e.style["-webkit-print-color-adjust"]="exact",e.style["-webkit-filter"]="opacity(1)"}),s}},function(t,s,e){"use strict";e.d(s,"a",function(){return a});var a={name:{first:"Zhakkapong",middle:"",last:"Ponngam"},about:"Hi, my name is Zhakkapong Ponngam.\nI'm was work in web technology, game, linux, mobile, backend, realtime comunication and server infrastructure.",position:"DevOps / Software Developer",birth:{year:1986,location:"Phuket, Thailand"},experience:[{company:"Voice TV",position:"Software Engineering",timeperiod:"Since October 2015",description:"Software development, plan and coding. work with lastest technology ex. NodeJS Firebase NoSQL VueJS ReactJS etc."},{company:"Coworker / Freelace",position:"Programmer / Devops",timeperiod:"Since 2006",description:"Coworker with Liffolab, 3Force, DOS. Develop web game mobile and backend system"}],education:[],skills:[{name:"HTML5",level:"90"},{name:"CSS3 / Stylus / SASS / SCSS",level:"80"},{name:"JavaScript / TypeScript",level:"80"},{name:"Node.js",level:"90"},{name:"VueJS / Angular",level:"80"},{name:"Firebase / Google API",level:"80"},{name:"PHP",level:"80"},{name:"Jquery",level:"80"},{name:"Debian / Ubuntu / CentOS",level:"80"},{name:"Symfony / Codeigniter",level:"50"},{name:"Webpack / Gulp / Grunt",level:"70"},{name:"Yii1-2",level:"80"},{name:"Mongodb / Mysql",level:"60"},{name:"GraphQL",level:"60"}],skillDescription:"Also proficient in Adobe Photoshop and Illustrator, grew up bilingual (English and Klingon).",contact:{email:"zhakkapong@gmail.com",phone:"66858811817",city:"Phuket",street:"Thep Krasattri Road, Thalang",website:"zhakkapong.github.io",github:"zhakkapong"},lang:"en"}},function(t,s,e){"use strict";e.d(s,"a",function(){return m});var a=e(30),i=e(29),n=e(32),r=e(37),c=e(28),o=e(35),l=e(31),v=e(40),d=e(34),_=e(39),p=e(38),u=e(36),f=e(33),m={en:a.a,de:i.a,fr:n.a,pt:r.a,cn:c.a,it:o.a,es:l.a,th:v.a,"pt-br":u.a,ru:p.a,sv:_.a,id:d.a,hu:f.a}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app"}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0);s.default=a.a.component("resume",{name:"app"})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0),i=e(42);e(2);s.default=a.a.component("resume",{name:"app",mounted:function(){var t=i.a();t&&t.length>0&&(window.onhashchange=function(){location.reload()})}})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0),i=e(2);s.default=a.a.component("left-right",e.i(i.a)("left-right"))},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0),i=e(2),n="material-dark";s.default=a.a.component(n,e.i(i.a)(n))},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0),i=e(2);s.default=a.a.component("oblique",e.i(i.a)("oblique"))},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0),i=e(2);s.default=a.a.component("purple",e.i(i.a)(name))},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0),i=e(2);s.default=a.a.component("side-bar",e.i(i.a)("side-bar"))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,e){t.exports=e.p+"static/img/logo.1522a48.png"},function(t,s,e){t.exports=e.p+"static/img/resume-left-right.7426cd9.png"},function(t,s,e){t.exports=e.p+"static/img/resume-material-dark.f7ef15e.png"},function(t,s,e){t.exports=e.p+"static/img/resume-oblique.72046ae.png"},function(t,s,e){t.exports=e.p+"static/img/resume-purple.3b9ff28.png"},function(t,s,e){t.exports=e.p+"static/img/resume-side-bar.38870fa.png"},function(t,s,e){function a(t){e(90)}var i=e(1)(e(46),e(111),a,"data-v-d7e5c49e",null);t.exports=i.exports},function(t,s,e){function a(t){e(88)}var i=e(1)(e(47),e(109),a,"data-v-a4e9d902",null);t.exports=i.exports},function(t,s,e){function a(t){e(84)}var i=e(1)(e(48),e(105),a,"data-v-25653886",null);t.exports=i.exports},function(t,s,e){function a(t){e(85)}var i=e(1)(e(49),e(106),a,"data-v-31798ddc",null);t.exports=i.exports},function(t,s,e){function a(t){e(86)}var i=e(1)(e(50),e(107),a,"data-v-3e9e9731",null);t.exports=i.exports},function(t,s,e){function a(t){e(83)}var i=e(1)(e(51),e(104),a,"data-v-1f07d728",null);t.exports=i.exports},function(t,s,e){function a(t){e(87)}var i=e(1)(e(52),e(108),a,"data-v-4ac258cd",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resume",attrs:{id:"template"}},[e("div",{attrs:{id:"resume-header"}},[e("div",{attrs:{id:"header-left"}},[e("h2",{attrs:{id:"position"}},[t._v(t._s(t.person.position))]),t._v(" "),e("h1",{attrs:{id:"name"}},[t._v(t._s(t.person.name.first)+" "+t._s(t.person.name.last))]),t._v(" "),e("div",{attrs:{id:"info-flex"}},[e("span",{attrs:{id:"email"}},[e("a",{attrs:{href:"mailto:"+t.person.contact.email}},[e("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.person.contact.email))])]),t._v(" "),e("span",{attrs:{id:"phone"}},[e("i",{staticClass:"fa fa-phone-square",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.person.contact.phone))]),t._v(" "),e("span",{attrs:{id:"website"}},[e("a",{attrs:{href:t.person.contact.website}},[e("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.person.contact.website))])]),t._v(" "),e("span",{attrs:{id:"github"}},[e("a",{attrs:{href:"https://github.com/"+t.person.contact.github}},[e("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.person.contact.github))])])])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{attrs:{id:"resume-body"}},[e("div",{attrs:{id:"experience-container"}},[e("h2",{attrs:{id:"experience-title"}},[t._v(t._s(t.lang.headings.experience))]),t._v(" "),e("div",{staticClass:"spacer"}),t._v(" "),t._l(t.person.experience,function(s){return e("div",{staticClass:"experience"},[e("h2",{staticClass:"company"},[t._v(t._s(s.company))]),t._v(" "),e("p",{staticClass:"job-info"},[e("span",{staticClass:"job-title"},[t._v(t._s(s.position)+" | ")]),e("span",{staticClass:"experience-timeperiod"},[t._v(t._s(s.timeperiod))])]),t._v(" "),s.description?e("p",{staticClass:"job-description"},[t._v(t._s(s.description))]):t._e(),t._v(" "),s.list?e("ul",t._l(s.list,function(s){return e("li",[e("span",{staticClass:"list-item-black"},[t._v(t._s(s))])])})):t._e()])})],2),t._v(" "),e("div",{attrs:{id:"education-container"}},[e("h2",{attrs:{id:"education-title"}},[t._v(t._s(t.lang.headings.education))]),t._v(" "),e("div",{staticClass:"spacer"}),t._v(" "),t._l(t.person.education,function(s){return e("div",{staticClass:"education"},[e("h2",{staticClass:"education-description"},[t._v(t._s(s.description))]),t._v(" "),e("p",[e("span",{staticClass:"degree"},[t._v(t._s(s.degree)+" | ")]),e("span",{staticClass:"education-timeperiod"},[t._v(t._s(s.timeperiod))])])])})],2),t._v(" "),t.person.skills!=[]?e("div",{attrs:{id:"skills-container"}},[e("h2",{attrs:{id:"skills-title"}},[t._v(t._s(t.lang.headings.skills))]),t._v(" "),e("div",{staticClass:"spacer"}),t._v(" "),e("p",{attrs:{id:"skill-description"}},[t._v(t._s(t.person.skillDescription))]),t._v(" "),e("ul",{attrs:{id:"skill-list"}},t._l(t.person.skills,function(s){return e("li",{staticClass:"skill"},[e("span",{staticClass:"list-item-black"},[t._v(t._s(s.name))])])}))]):t._e()]),t._v(" "),e("div",{attrs:{id:"resume-footer"}},[t.person.about?e("div",[e("h2",[t._v(t._s(t.lang.headings.about))]),t._v(" "),e("p",[t._v(t._s(t.person.about))])]):t._e()])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"header-right"}},[e("div",{attrs:{id:"headshot"}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resume",attrs:{id:"resume1"}},[e("div",{staticClass:"row text-center"},[e("span",{staticClass:"name"},[t._v(t._s(t.person.name.first)+" "+t._s(t.person.name.middle)+" "+t._s(t.person.name.last))])]),t._v(" "),e("div",{staticClass:"row text-center"},[e("p",{staticClass:"position center"},[t._v(t._s(t.person.position))])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"left half"},[e("div",{staticClass:"experience"},[e("h3",[t._v(t._s(t.lang.headings.experience))]),t._v(" "),t._l(t.person.experience,function(s){return e("div",{staticClass:"experience-block"},[e("span",{staticClass:"company"},[t._v(" "+t._s(s.company)+" ")]),t._v(" "),e("span",{staticClass:"job-title"},[t._v(" "+t._s(s.position)+" ")]),t._v(" "),e("span",{staticClass:"time-period"},[t._v(" "+t._s(s.timeperiod))]),t._v(" "),e("span",{staticClass:"job-description"},[t._v(" "+t._s(s.description)+" ")])])})],2),t._v(" "),e("div",{staticClass:"contact"},[e("h3",[t._v(t._s(t.lang.headings.contact))]),t._v(" "),e("table",[e("tr",[e("td",[e("a",{attrs:{href:"mailto:"+t.person.contact.email}},[t._v(t._s(t.person.contact.email))])]),t._v(" "),t._m(1)]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"tel:"+t.person.contact.phone}},[t._v(t._s(t.person.contact.phone))])]),t._v(" "),t._m(2)]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.person.contact.street)+" "),e("br"),t._v(" "+t._s(t.person.contact.city))]),t._v(" "),t._m(3)]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:t.person.contact.website}},[t._v(t._s(t.person.contact.website))])]),t._v(" "),t._m(4)]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/"+t.person.contact.github}},[t._v("https://github.com/"+t._s(t.person.contact.github))])]),t._v(" "),t._m(5)])])])]),t._v(" "),e("div",{staticClass:"right half"},[e("div",{staticClass:"education"},[e("h3",[t._v(t._s(t.lang.headings.education))]),t._v(" "),t._l(t.person.education,function(s){return e("div",{staticClass:"education-block"},[e("span",{staticClass:"degree"},[t._v(t._s(s.degree))]),t._v(" "),e("span",{staticClass:"degree-description"},[t._v(t._s(s.description))])])})],2),t._v(" "),e("h3",[t._v(t._s(t.lang.headings.skills))]),t._v(" "),e("div",{staticClass:"skills"},t._l(t.person.skills,function(s){return e("div",{staticClass:"skill-block"},[e("span",{staticClass:"skill"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"skill-bar"},[e("div",{staticClass:"level",style:"width: "+s.level+"%"})])])})),t._v(" "),e("span",{staticClass:"skills-other"},[t._v(" "+t._s(t.person.skillDescription)+" ")])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"image center"},[e("div",{staticClass:"img"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resume"},[e("div",{staticClass:"leftCol m_box"},[e("div",{staticClass:"shadow"}),t._v(" "),e("div",{staticClass:"heading",attrs:{id:"myselfpic"}}),t._v(" "),e("div",{staticClass:"section-headline"},[t._v("\n      "+t._s(t.lang.headings.contact)+"\n    ")]),t._v(" "),e("div",{staticClass:"item"},[t._m(0),t._v(" "),e("div",{staticClass:"text"},[e("ul",[e("li",[t._v(" Born "+t._s(t.person.birth.year)+" in "+t._s(t.person.birth.location))])])])]),t._v(" "),e("div",{staticClass:"item"},[t._m(1),t._v(" "),e("div",{staticClass:"text"},[e("ul",[e("li",[t._v(t._s(t.person.contact.street))]),t._v(" "),e("li",[t._v(t._s(t.person.contact.city))])])])]),t._v(" "),e("a",{attrs:{href:"tel:"+t.person.contact.phone}},[e("div",{staticClass:"item"},[t._m(2),t._v(" "),e("div",{staticClass:"text"},[t._v("\n          "+t._s(t.person.contact.phone)+"\n        ")])])]),t._v(" "),e("a",{attrs:{href:"mailto:"+t.person.contact.email}},[e("div",{staticClass:"item"},[t._m(3),t._v(" "),e("div",{staticClass:"text"},[t._v("\n          "+t._s(t.person.contact.email)+"\n        ")])])]),t._v(" "),e("a",{attrs:{href:"https://github.com/"+t.person.contact.github,target:"_blank"}},[e("div",{staticClass:"item"},[t._m(4),t._v(" "),e("div",{staticClass:"text"},[e("span",[t._v("@"+t._s(t.person.contact.github))]),t._v(" "),e("span",[t._v("github.com/"+t._s(t.person.contact.github))])])])]),t._v(" "),e("a",{attrs:{href:t.person.contact.website,target:"_blank"}},[e("div",{staticClass:"item"},[t._m(5),t._v(" "),e("div",{staticClass:"text"},[e("span",[t._v(t._s(t.person.contact.website))])])])]),t._v(" "),e("div",{staticClass:"item last"},[e("div",{staticClass:"section-headline"},[t._v("\n        "+t._s(t.lang.headings.skills)+"\n      ")]),t._v(" "),t._l(t.person.skills,function(s){return e("div",{staticClass:"skill"},[e("div",{staticClass:"right"},[e("span",[t._v(t._s(s.name)+" ")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"determinate",style:"width: "+s.level+"%;"},[e("i",{staticClass:"fa fa-circle"})])])])])})],2)]),t._v(" "),e("div",{staticClass:"rightCol"},[e("div",{staticClass:"title"},[e("h2",[t._v(t._s(t.person.name.first)+" "+t._s(t.person.name.middle)+" "+t._s(t.person.name.last))]),t._v(" "),e("div",[t._v(t._s(t.person.position))])]),t._v(" "),e("div",{staticClass:"block about"},[e("div",{staticClass:"block-helper"}),t._v(" "),e("div",{staticClass:"headline"},[t._v(t._s(t.lang.headings.about))]),t._v(" "),e("p",{staticClass:"info",domProps:{innerHTML:t._s(t.person.about.replace(/(?:\r\n|\r|\n)/g,"<br />"))}})]),t._v(" "),e("div",{staticClass:"section-headline"},[t._v(t._s(t.lang.headings.experience))]),t._v(" "),t._l(t.person.experience,function(s){return e("div",{staticClass:"block"},[e("div",{staticClass:"block-helper"}),t._v(" "),e("div",{staticClass:"headline"},[t._v(t._s(s.position)+" - "+t._s(s.company))]),t._v(" "),e("div",{staticClass:"subheadline"},[t._v(t._s(s.timeperiod))]),t._v(" "),e("p",{staticClass:"info"},[t._v("\n        "+t._s(s.description)+"\n      ")])])})],2),t._v(" "),e("div",{staticStyle:{clear:"both"}})])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("account_circle")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("location_city")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("phone")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("email")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-github"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("language")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resume",attrs:{id:"resume3"}},[e("div",{staticClass:"resume-header"},[e("div",{staticClass:"triangle"}),t._v(" "),e("div",{staticClass:"person-header"},[e("div",{staticClass:"person-wrapper"},[e("div",{staticClass:"person"},[e("div",{staticClass:"name"},[t._v(t._s(t.person.name.first)+" "+t._s(t.person.name.middle)+" "+t._s(t.person.name.last))]),t._v(" "),e("div",{staticClass:"position"},[t._v(t._s(t.person.position))])]),t._v(" "),e("div",{staticClass:"img"})])])]),t._v(" "),e("div",{staticClass:"resume-content"},[e("div",{staticClass:"experience"},[e("h3",[t._v(t._s(t.lang.headings.experience))]),t._v(" "),t._l(t.person.experience,function(s){return e("div",{staticClass:"experience-block"},[e("div",{staticClass:"row"},[e("span",{staticClass:"job-title"},[t._v(" "+t._s(s.position)+" ")]),t._v(" "),e("i",{staticClass:"material-icons"},[t._v("details")]),t._v(" "),e("span",{staticClass:"company"},[t._v(" "+t._s(s.company)+" ")])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"time-period"},[t._v(" "+t._s(s.timeperiod))]),t._v(" "),e("span",{staticClass:"job-description"},[t._v(", "+t._s(s.description)+" ")])])])})],2),t._v(" "),e("div",{staticClass:"education"},[e("h3",[t._v(t._s(t.lang.headings.education))]),t._v(" "),t._l(t.person.education,function(s){return e("div",{staticClass:"education-block"},[e("div",{staticClass:"row"},[e("span",{staticClass:"degree"},[t._v(t._s(s.degree))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"degree-description"},[t._v(t._s(s.description))])])])})],2),t._v(" "),e("div",{staticClass:"skill-section"},[e("h3",[t._v(t._s(t.lang.headings.skills))]),t._v(" "),t._l(t.person.skills,function(s){return e("div",{staticClass:"skills"},[e("div",{staticClass:"skill-block"},[e("i",{staticClass:"material-icons"},[t._v("details")]),t._v(" "),e("span",{staticClass:"skill"},[t._v(t._s(s.name))])])])})],2),t._v(" "),e("div",{staticClass:"skills-other"},[e("span",[t._v(t._s(t.person.skillDescription)+" ")])]),t._v(" "),e("div",{staticClass:"contact"},[e("h3",[t._v(t._s(t.lang.headings.contact))]),t._v(" "),e("a",{attrs:{href:"mailto:"+t.person.contact.email}},[t._v(" "+t._s(t.person.contact.email))]),t._v(" "),e("span",[t._v("; ")]),t._v(" "),e("a",{attrs:{href:"tel:"+t.person.contact.phone}},[t._v(t._s(t.person.contact.phone))]),t._v(" "),e("span",[t._v("; ")]),t._v(" "),e("span",[t._v(t._s(t.person.contact.street)+", "+t._s(t.person.contact.city))]),t._v(" "),e("span",[t._v("; ")]),t._v(" "),e("a",{attrs:{href:t.person.contact.website}},[t._v("\n              "+t._s(t.person.contact.website))]),t._v(" "),e("span",[t._v("; ")]),t._v(" "),e("a",{attrs:{href:"https://github.com/"+t.person.contact.github}},[t._v("\n                https://github.com/"+t._s(t.person.contact.github))])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resume",attrs:{id:"resume2"}},[e("div",{staticClass:"top-row"},[e("span",{staticClass:"person-name"},[t._v("\n          "+t._s(t.person.name.first)+" "+t._s(t.person.name.middle)+" "+t._s(t.person.name.last)+"\n        ")]),t._v(" "),e("span",{staticClass:"person-position"},[t._v("\n          "+t._s(t.person.position)+"\n        ")])]),t._v(" "),e("div",{staticClass:"left-col"},[t._m(0),t._v(" "),e("div",{staticClass:"contact"},[e("h3",[t._v(t._s(t.lang.headings.contact))]),t._v(" "),e("div",{staticClass:"contact-row"},[e("a",{attrs:{href:"mailto:"+t.person.contact.email}},[t._v(t._s(t.person.contact.email))])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"contact-row"},[e("a",{attrs:{href:"'tel:'+person.contact.phone"}},[t._v(t._s(t.person.contact.phone))])]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"contact-row"},[t._v("\n                "+t._s(t.person.contact.street)+" "),e("br"),t._v(" "+t._s(t.person.contact.city)+"\n            ")]),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"contact-row"},[e("a",{attrs:{href:"https://github.com/"+t.person.contact.github}},[t._v("https://github.com/"+t._s(t.person.contact.github))])])])]),t._v(" "),e("div",{staticClass:"right-col"},[e("div",{staticClass:"experience"},[e("h3",[t._v(t._s(t.lang.headings.experience))]),t._v(" "),t._l(t.person.experience,function(s){return e("div",{staticClass:"experience-block"},[e("div",{staticClass:"row"},[e("span",{staticClass:"company"},[t._v(" "+t._s(s.company)+" -")]),t._v(" "),e("span",{staticClass:"job-title"},[t._v(" "+t._s(s.position)+" ")])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"time-period"},[t._v(" "+t._s(s.timeperiod))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"job-description"},[t._v(" "+t._s(s.description)+" ")])])])})],2),t._v(" "),e("div",{staticClass:"education"},[e("h3",[t._v(t._s(t.lang.headings.education))]),t._v(" "),t._l(t.person.education,function(s){return e("div",{staticClass:"education-block"},[e("div",{staticClass:"row"},[e("span",{staticClass:"degree"},[t._v(t._s(s.degree))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"degree-description"},[t._v(t._s(s.description))])])])})],2),t._v(" "),e("div",{staticClass:"skills-block"},[e("h3",[t._v(t._s(t.lang.headings.skills))]),t._v(" "),e("div",{staticClass:"skills"},t._l(t.person.skills,function(s){return e("div",{staticClass:"skill"},[e("span",{staticClass:"skill-name"},[t._v(t._s(s.name))])])})),t._v(" "),e("span",{staticClass:"skills-other"},[t._v(" "+t._s(t.person.skillDescription)+" ")])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"person-image"},[e("div",{staticClass:"image-centerer"},[e("div",{staticClass:"img"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contact-row dots"},[e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contact-row dots"},[e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contact-row dots"},[e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e(t.$route.params.resumeid,{tag:"component"})],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("h3",{staticClass:"title"},[t._v("best-resume-ever")]),t._v(" "),a("div",{staticClass:"previews"},[a("div",{staticClass:"preview"},[a("router-link",{attrs:{to:"/resume/material-dark"}},[a("div",{staticClass:"preview-wrapper"},[a("img",{attrs:{src:e(93)}}),t._v(" "),a("span",[t._v("material-dark")])])])],1),t._v(" "),a("div",{staticClass:"preview"},[a("router-link",{attrs:{to:"/resume/left-right"}},[a("div",{staticClass:"preview-wrapper"},[a("img",{attrs:{src:e(92)}}),t._v(" "),a("span",[t._v("left-right")])])])],1),t._v(" "),a("div",{staticClass:"preview"},[a("router-link",{attrs:{to:"/resume/oblique"}},[a("div",{staticClass:"preview-wrapper"},[a("img",{attrs:{src:e(94)}}),t._v(" "),a("span",[t._v("oblique")])])])],1),t._v(" "),a("div",{staticClass:"preview"},[a("router-link",{attrs:{to:"/resume/side-bar"}},[a("div",{staticClass:"preview-wrapper"},[a("img",{attrs:{src:e(96)}}),t._v(" "),a("span",[t._v("side-bar")])])])],1),t._v(" "),a("div",{staticClass:"preview"},[a("router-link",{attrs:{to:"/resume/purple"}},[a("div",{staticClass:"preview-wrapper"},[a("img",{attrs:{src:e(95)}}),t._v(" "),a("span",[t._v("purple")])])])],1)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"https://github.com/salomonelli/best-resume-ever",target:"_blank"}},[e("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:e(91)}})])}]}}],[41]);
//# sourceMappingURL=app.0a46b1c7dd88e0d8c6ae.js.map