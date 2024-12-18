import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-5TayTP4S.js";import{c as F,w as l,f as g,e as c,p as r,o as m,g as s,h as i,r as t}from"./app-DghEkXbc.js";import"./YunComment.vue_vue_type_style_index_0_lang-D-NuCeei.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CoQ6p90e.js";import"./post-1bNkvwRN.js";const D={__name:"Sentry_SDUST",setup(u,{expose:p}){const e=JSON.parse('{"title":"Sentry_SDUST简易部署流程","description":"","frontmatter":{"title":"Sentry_SDUST简易部署流程","date":"2024-11-15","updated":"2024-11-15","categories":"Robomaster","tags":["RM","视觉"],"top":1},"headers":[{"level":2,"title":"1、依赖","slug":"_1、依赖","link":"#_1、依赖","children":[]},{"level":2,"title":"2、ROS2-Humble-*","slug":"_2、ros2-humble","link":"#_2、ros2-humble","children":[]},{"level":2,"title":"3、ROS 2 RMW for Eclipse Cyclone DDS","slug":"_3、ros-2-rmw-for-eclipse-cyclone-dds","link":"#_3、ros-2-rmw-for-eclipse-cyclone-dds","children":[]},{"level":2,"title":"4、Livox-SDK2","slug":"_4、livox-sdk2","link":"#_4、livox-sdk2","children":[]},{"level":2,"title":"4、补充(很重要)","slug":"_4、补充-很重要","link":"#_4、补充-很重要","children":[]},{"level":2,"title":"5、部署","slug":"_5、部署","link":"#_5、部署","children":[]}],"relativePath":"pages/posts/Sentry_SDUST.md","path":"/home/runner/work/JakukuR.github.io/JakukuR.github.io/pages/posts/Sentry_SDUST.md","lastUpdated":1734526336000}'),n=c(),h=e.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},e.frontmatter||{}),r("pageData",e),r("valaxy:frontmatter",h),globalThis.$frontmatter=h,p({frontmatter:{title:"Sentry_SDUST简易部署流程",date:"2024-11-15",updated:"2024-11-15",categories:"Robomaster",tags:["RM","视觉"],top:1}}),(a,k)=>{const o=d;return m(),F(o,{frontmatter:g(h)},{"main-content-md":l(()=>k[0]||(k[0]=[s("h1",{id:"sentry-sdust简易部署流程",tabindex:"-1"},[i("Sentry_SDUST简易部署流程 "),s("a",{class:"header-anchor",href:"#sentry-sdust简易部署流程","aria-label":'Permalink to "Sentry_SDUST简易部署流程"'},"​")],-1),s("hr",null,null,-1),s("h2",{id:"_1、依赖",tabindex:"-1"},[i("1、依赖 "),s("a",{class:"header-anchor",href:"#_1、依赖","aria-label":'Permalink to "1、依赖"'},"​")],-1),s("ul",null,[s("li",null,[s("strong",null,"系统"),s("ul",null,[s("li",null,"Ubuntu 22.04"),s("li",null,"ROS Humble (desktop-full)")])]),s("li",null,[s("strong",null,"库"),s("ul",null,[s("li",null,[s("a",{href:"https://github.com/Livox-SDK/Livox-SDK2",target:"_blank",rel:"noreferrer"},"LIVOX-SDK2")]),s("li",null,"libpcl-ros-dev"),s("li",null,"eigen、pcl、opoencv、ceres等"),s("li",null,"将fastdds改为cyclonedds并附上 export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp在命令行中"),s("li",null,[i("安装sudo apt install ros-"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"R"),s("mi",null,"O"),s("msub",null,[s("mi",null,"S"),s("mi",null,"D")]),s("mi",null,"I"),s("mi",null,"S"),s("mi",null,"T"),s("mi",null,"R"),s("mi",null,"O"),s("mo",null,"−"),s("mi",null,"j"),s("mi",null,"o"),s("mi",null,"i"),s("mi",null,"n"),s("mi",null,"t"),s("mo",null,"−"),s("mi",null,"s"),s("mi",null,"t"),s("mi",null,"a"),s("mi",null,"t"),s("mi",null,"e"),s("mo",null,"−"),s("mi",null,"p"),s("mi",null,"u"),s("mi",null,"b"),s("mi",null,"l"),s("mi",null,"i"),s("mi",null,"s"),s("mi",null,"h"),s("mi",null,"e"),s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"g"),s("mi",null,"u"),s("mi",null,"i"),s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"s"),s("mo",null,"−")]),s("annotation",{encoding:"application/x-tex"},"ROS_DISTRO-joint-state-publisher-gui ros-")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"RO"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3283em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0576em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"D")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"STRO"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6984em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"u"),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"gu"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"ros"),s("span",{class:"mord"},"−")])])]),i("ROS_DISTRO-robot-state-publisher（很重要）")]),s("li",null,"BehaviorTree.CPP")])])],-1),s("hr",null,null,-1),s("h2",{id:"_2、ros2-humble",tabindex:"-1"},[i("2、ROS2-Humble-* "),s("a",{class:"header-anchor",href:"#_2、ros2-humble","aria-label":'Permalink to "2、ROS2-Humble-*"'},"​")],-1),s("p",null,[s("strong",null,[i("1、参考鱼香ROS手动安装"),s("a",{href:"https://fishros.com/d2lros2/#/humble/chapt1/get_started/3.%E5%8A%A8%E6%89%8B%E5%AE%89%E8%A3%85ROS2",target:"_blank",rel:"noreferrer"},"动手学鱼香ROS")])],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#鱼香ROS2手动安装")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#添加源")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"echo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "deb [arch=$('),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"dpkg"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --print-architecture"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")] https://repo.huaweicloud.com/ros2/ubuntu/ $("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"lsb_release"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -cs"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},') main"'),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," tee"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /etc/apt/sources.list.d/ros2.list"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," >"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /dev/null")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#添加源对应密钥")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," curl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," gnupg2"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -y")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"curl"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://gitee.com/ohhuo/rosdistro/raw/master/ros.asc"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt-key"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," add"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," -")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#更新")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," update"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#安装鱼香ROS2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ros-humble-desktop")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#安装额外依赖")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," python3-argcomplete"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -y")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#配置环境变量")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"source"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /opt/ros/humble/setup.bash")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#添加系统默认环境变量")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"echo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "source /opt/ros/humble/setup.bash"'),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," >>"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ~/.bashrc")])])]),s("button",{class:"collapse"})],-1),s("p",null,[s("strong",null,"PS：出问题时卸载鱼香ROS")],-1),s("div",{class:"language-BASH vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"BASH"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," remove"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ros-humble-"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," autoremove")])])]),s("button",{class:"collapse"})],-1),s("p",null,[s("strong",null,"2、安装鱼香rosdepc")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"wget"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," http://fishros.com/install"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -O"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," fishros"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," && "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"."),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," fishros")])])]),s("button",{class:"collapse"})],-1),s("p",null,[s("strong",null,"选择安装rosdepc")],-1),s("p",null,[s("strong",null,"3、安装Nav2")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ros-humble-nav2-"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"*")])])]),s("button",{class:"collapse"})],-1),s("hr",null,null,-1),s("h2",{id:"_3、ros-2-rmw-for-eclipse-cyclone-dds",tabindex:"-1"},[i("3、ROS 2 RMW for Eclipse Cyclone DDS "),s("a",{class:"header-anchor",href:"#_3、ros-2-rmw-for-eclipse-cyclone-dds","aria-label":'Permalink to "3、ROS 2 RMW for Eclipse Cyclone DDS"'},"​")],-1),s("p",null,[s("strong",null,"1、安装")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ros-humble-rmw-cyclonedds-cpp")])])]),s("button",{class:"collapse"})],-1),s("p",null,[s("strong",null,"2、设置环境变量")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," RMW_IMPLEMENTATION"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"rmw_cyclonedds_cpp")])])]),s("button",{class:"collapse"})],-1),s("hr",null,null,-1),s("h2",{id:"_4、livox-sdk2",tabindex:"-1"},[i("4、Livox-SDK2 "),s("a",{class:"header-anchor",href:"#_4、livox-sdk2","aria-label":'Permalink to "4、Livox-SDK2"'},"​")],-1),s("p",null,[s("strong",null,"1、安装CMake")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," cmake")])])]),s("button",{class:"collapse"})],-1),s("p",null,[s("strong",null,"2、安装Livox-SDK2")],-1),s("div",{class:"language-BASH vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"BASH"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://github.com/Livox-SDK/Livox-SDK2.git")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"cd"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ./Livox-SDK2/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mkdir"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," build")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"cd"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," build")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"cmake"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," .."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," && "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"make"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -j")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," make"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install")])])]),s("button",{class:"collapse"})],-1),s("p",null,[s("strong",null,"3、移除")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," rm"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -rf"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /usr/local/lib/liblivox_lidar_sdk_"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"*")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," rm"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -rf"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /usr/local/include/livox_lidar_"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"*")])])]),s("button",{class:"collapse"})],-1),s("hr",null,null,-1),s("h2",{id:"_4、补充-很重要",tabindex:"-1"},[i("4、补充(很重要) "),s("a",{class:"header-anchor",href:"#_4、补充-很重要","aria-label":'Permalink to "4、补充(很重要)"'},"​")],-1),s("p",null,[s("strong",null,"1、")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ros-"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$ROS_DISTRO"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"-joint-state-publisher-gui"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ros-"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$ROS_DISTRO"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"-robot-state-publisher")])])]),s("button",{class:"collapse"})],-1),s("p",null,[s("strong",null,"2、")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ros-humble-asio-cmake-module")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"_5、部署",tabindex:"-1"},[i("5、部署 "),s("a",{class:"header-anchor",href:"#_5、部署","aria-label":'Permalink to "5、部署"'},"​")],-1),s("p",null,[s("strong",null,"1、安装依赖")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt-get"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -y"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"  libpcl-ros-dev")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"rosdep"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --from-paths"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," src"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --ignore-src"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -r"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -y")])])]),s("button",{class:"collapse"})],-1),s("p",null,[s("strong",null,"2、编译")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"colcon"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," build"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --symlink-install")])])]),s("button",{class:"collapse"})],-1),s("p",null,[s("strong",null,"3、注意修改")],-1),s("ul",null,[s("li",null,"将ICP中PCD文件路径进行更改"),s("li",null,"将Nav2中luanch的bringup_launch.py文件引用的2Dmap名称进行更改")],-1),s("p",null,[s("strong",null,"4、运行")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 建图")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"./mapping.sh")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 导航")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"./nav.sh")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#保存建图以及PCD文件")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"1.保存2D地图ros2"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," nav2_map_server"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," map_saver_cli"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -t"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," map"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -f"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," <"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"mapnam"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"e"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"2.保存PCD文件ros2"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," service"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," call"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /map_save"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," std_srvs/srv/Trigger")])])]),s("button",{class:"collapse"})],-1)])),"main-header":l(()=>[t(a.$slots,"main-header")]),"main-header-after":l(()=>[t(a.$slots,"main-header-after")]),"main-nav":l(()=>[t(a.$slots,"main-nav")]),"main-content":l(()=>[t(a.$slots,"main-content")]),"main-content-after":l(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(a.$slots,"main-nav-after")]),comment:l(()=>[t(a.$slots,"comment")]),footer:l(()=>[t(a.$slots,"footer")]),aside:l(()=>[t(a.$slots,"aside")]),"aside-custom":l(()=>[t(a.$slots,"aside-custom")]),default:l(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{D as default};