(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{425:function(s,t,o){"use strict";o.r(t);var r=o(1),a=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("hr"),s._v(" "),t("blockquote",[t("p",[s._v("及上篇博客完成 Google Cloud 免费一年申请 "),t("RouterLink",{attrs:{to:"/pages/defcd9/"}},[s._v("【免费一年、高级上网】-- 30 分钟搭建 Google cloud SS")])],1)]),s._v(" "),t("h2",{attrs:{id:"安装-shadow小火箭socks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-shadow小火箭socks"}},[s._v("#")]),s._v(" 安装 Shadow小火箭socks")]),s._v(" "),t("hr"),s._v(" "),t("h4",{attrs:{id:"_1-通过-ssh-连接到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过-ssh-连接到服务器"}},[s._v("#")]),s._v(" "),t("strong",[s._v("1. 通过 SSH 连接到服务器")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/520-20200903000722023.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_2-切换到-root"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-切换到-root"}},[s._v("#")]),s._v(" "),t("strong",[s._v("2. 切换到 root")])]),s._v(" "),t("p",[s._v("输入命令 "),t("code",[s._v("sudo -i")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/520-20200903000747769.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_3-安装-git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-git"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3. 安装 git")])]),s._v(" "),t("p",[s._v("输入命令 "),t("code",[s._v("yum -y install git")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/520-20200903001433354.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/520-20200903000807722.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_4-下载一键搭建-ss-脚本文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-下载一键搭建-ss-脚本文件"}},[s._v("#")]),s._v(" "),t("strong",[s._v("4. 下载一键搭建 ss 脚本文件")])]),s._v(" "),t("p",[s._v("输入命令 "),t("code",[s._v("git clone https://github.com/zhmbo/ss-fly")])]),s._v(" "),t("blockquote",[t("p",[s._v("其中 flyzy2005.com 换成你要设置的 Shadow小火箭socks 的密码即可（这个 flyzy2005.com 就是你 ss 的密码了，是需要填在客户端的密码那一栏的），密码随便设置，最好只包含字母+数字，一些特殊字符可能会导致冲突。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/520-20200903000817053.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_5-运行搭建-ss-脚本代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-运行搭建-ss-脚本代码"}},[s._v("#")]),s._v(" "),t("strong",[s._v("5. 运行搭建 ss 脚本代码")])]),s._v(" "),t("p",[s._v("输入命令 "),t("code",[s._v("ss-fly/ss-fly.sh -i zhmbo.cn 1024")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/520-20200903000826500.png",alt:""}})]),s._v(" "),t("p",[s._v("界面如下就表示一键搭建 ss 成功了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/620.png",alt:""}})]),s._v(" "),t("p",[s._v("**注：**如果需要改密码或者改端口，只需要重新再执行一次搭建 ss 脚本代码就可以了，或者修改/etc/Shadow小火箭socks.json 这个配置文件。")]),s._v(" "),t("p",[t("strong",[s._v("相关 ss 操作")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("修改配置文件：vim /etc/Shadow小火箭socks.json\n停止ss服务：ssserver "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/Shadow小火箭socks.json "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" stop\n启动ss服务：ssserver "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/Shadow小火箭socks.json "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" start\n重启ss服务：ssserver "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/Shadow小火箭socks.json "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"_5-卸载-ss-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-卸载-ss-服务"}},[s._v("#")]),s._v(" "),t("strong",[s._v("5. 卸载 ss 服务")])]),s._v(" "),t("p",[s._v("输入命令 "),t("code",[s._v("sss -fly/ss-fly.sh -ssr")])]),s._v(" "),t("h2",{attrs:{id:"一键开启-bbr-加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一键开启-bbr-加速"}},[s._v("#")]),s._v(" 一键开启 BBR 加速")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("输入命令 "),t("code",[s._v("ss-fly/ss-fly.sh -bbr")])]),s._v(" "),t("p",[t("strong",[s._v("装完后需要重启系统，输入 y 即可立即重启，或者之后输入 reboot 命令重启。")])]),s._v(" "),t("p",[t("strong",[s._v("判断 BBR 加速有没有开启成功。输入以下命令：")])]),s._v(" "),t("p",[s._v("输入命令 "),t("code",[s._v("sysctl net.ipv4.tcp_available_congestion_control")])]),s._v(" "),t("p",[t("strong",[s._v("如果返回值为：")])]),s._v(" "),t("p",[t("code",[s._v("net.ipv4.tcp_available_congestion_control = bbr cubic reno")])]),s._v(" "),t("p",[t("strong",[s._v("后面有 bbr，则说明已经开启成功了。")])]),s._v(" "),t("h4",{attrs:{id:"shadow小火箭socks-各版本官方下载地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadow小火箭socks-各版本官方下载地址"}},[s._v("#")]),s._v(" "),t("strong",[s._v("Shadow小火箭socks 各版本官方下载地址")])]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("1.")]),s._v(" Windows 客户端下载地址：Windows 对 Framework 的版本要求比价高，我的是 4.0.2 的要求 Framework4.6.2。如果是 XP 或者 Framework 比较低的，可以直接下载低版本的 ss（windows 2.3.1 下载地址："),t("a",{attrs:{href:"https://www.flyzy2005.com/go/go.php?url=https://github.com/Shadow%E5%B0%8F%E7%81%AB%E7%AE%ADsocks/Shadow%E5%B0%8F%E7%81%AB%E7%AE%ADsocks-windows/releases?after=2.5.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Shadow小火箭socks/Shadow小火箭socks-windows/releases?after=2.5.1"),t("OutboundLink")],1),s._v("）。")]),s._v(" "),t("p",[t("strong",[s._v("2.")]),s._v(" Mac 客户端下载地址："),t("a",{attrs:{href:"https://www.flyzy2005.com/go/go.php?url=https://github.com/Shadow%E5%B0%8F%E7%81%AB%E7%AE%ADsocks/Shadow%E5%B0%8F%E7%81%AB%E7%AE%ADsocksX-NG/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Shadow小火箭socks/Shadow小火箭socksX-NG/releases"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("3.")]),s._v(" Linux 客户端下载地址："),t("a",{attrs:{href:"https://www.flyzy2005.com/go/go.php?url=https://github.com/Shadow%E5%B0%8F%E7%81%AB%E7%AE%ADsocks/Shadow%E5%B0%8F%E7%81%AB%E7%AE%ADsocks-qt5/wiki/Installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Shadow小火箭socks/Shadow小火箭socks-qt5/wiki/Installation"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("4.")]),s._v(" Android/安卓客户端下载地址："),t("a",{attrs:{href:"https://www.flyzy2005.com/go/go.php?url=https://github.com/Shadow%E5%B0%8F%E7%81%AB%E7%AE%ADsocks/Shadow%E5%B0%8F%E7%81%AB%E7%AE%ADsocks-android/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/Shadow小火箭socks/Shadow小火箭socks-android/releases"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("5.")]),s._v(" iOS/苹果客户端直接在 App Store 里搜索 shadowsock 关键字（或者 wingy 关键字，FirstWingy 可用 2018.03.25），软件经常被下架，我目前用的是 Wingy & shadow小火箭socks~如果找不到，你也可以通过"),t("strong",[s._v("PP 助手")]),s._v("去下载 shadow小火箭socks。（2018 年 6 月 18 日更，目前 App Store 可用免费 iOS 软件：暂无。收费软件：SuperWingy，ShadowBroken。"),t("strong",[s._v("推荐免费下载 iOS 客户端方法")]),s._v("：也可以电脑下载 PP 助手，手机连上电脑后会自动将 PP 助手同步至手机，不需要越狱，之后在手机上通过 PP 助手下载 shadow小火箭socks）")]),s._v(" "),t("p",[t("strong",[s._v("各版本 Shadow小火箭socks 客户端百度云下载地址：")]),t("a",{attrs:{href:"https://www.flyzy2005.com/go/go.php?url=https://pan.baidu.com/s/1GgzKSzEmqctQ5MUvQ4RR1g",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pan.baidu.com/s/1GgzKSzEmqctQ5MUvQ4RR1g"),t("OutboundLink")],1),s._v("  密码：e66v")]),s._v(" "),t("h3",{attrs:{id:"客户端搭建-ss-代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端搭建-ss-代理"}},[s._v("#")]),s._v(" "),t("strong",[s._v("客户端搭建 ss 代理")])]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("Windows")])]),s._v(" "),t("p",[s._v("根据上面下载好 windows 电脑版相应客户端程序后，双击打开可运行文件（Shadow小火箭socks.exe），根据你的服务器配置，填入相应配置信息，设置如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/401.png",alt:""}})]),s._v(" "),t("p",[s._v("在 Shadow小火箭socks 的 windows 客户端中，"),t("strong",[s._v("服务器 IP")]),s._v("指你购买的 VPS 的 IP，"),t("strong",[s._v("服务器端口")]),s._v("指你服务器的配置文件中的端口，"),t("strong",[s._v("密码")]),s._v("指你服务器的配置文件中的密码，"),t("strong",[s._v("加密")]),s._v("指你服务器的配置文件中的加密方式，"),t("strong",[s._v("代理端口")]),s._v("默认为 1080 不需要改动。设置好后，点击"),t("strong",[s._v("添加按钮")]),s._v("即可~")]),s._v(" "),t("p",[s._v("其中，高版本的 windows 客户端可能有"),t("strong",[s._v("更多的选项")]),s._v("，其他"),t("strong",[s._v("都可以默认")]),s._v("，只要配置正确这几点即可。")]),s._v(" "),t("p",[s._v("右击任务栏右下角的"),t("strong",[s._v("小飞机图标")]),s._v("，可以设置相应的"),t("strong",[s._v("属性项")]),s._v("，包括开启自启，显示日志，PAC 设置，系统代理模式等等。其中系统代理模式中的全局模式是指所有的请求都走代理（国内以及国外的），而 PAC 模式则是自动识别，国内的直连，国外的（例如 Google，YouTube）走代理。")]),s._v(" "),t("p",[s._v("如果你的某个"),t("strong",[s._v("特定的网址")]),s._v("不能通过 PAC 模式访问，通常情况下是指如 YouTube 头像无法加载，或者你某些网站直接无法打开，你可以尝试通过全局模式解决。如果你不希望走全局模式，那么可以在 Windows 客户端中设置 PAC，使用本地的 PAC，再在规则中加入相应网站即可~")]),s._v(" "),t("p",[s._v("OK，以上就是 Shadow小火箭socks 电脑版（windows）客户端常用的一些配置~")]),s._v(" "),t("p",[t("strong",[s._v("MAC")])]),s._v(" "),t("p",[s._v("根据上面教程下载好 Mac OS 电脑版相应客户端程序后，双击打开可运行文件（Shadow小火箭socksX-NG.app），之后会在任务栏有一个小飞机图标，右击小飞机图标，选择"),t("strong",[s._v("服务器")]),s._v("->"),t("strong",[s._v("服务器设置")]),s._v("，根据你的服务器配置，填入相应配置信息，设置如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/1240-20200903003207183.png",alt:""}})]),s._v(" "),t("p",[s._v("在 Shadow小火箭socks 的 Mac OS 客户端中，"),t("strong",[s._v("地址")]),s._v("指你购买的 VPS 的 IP，"),t("strong",[s._v("冒号")]),s._v("后面跟上配置文件中的端口，"),t("strong",[s._v("密码")]),s._v("指你服务器的配置文件中的密码，"),t("strong",[s._v("加密")]),s._v("指你服务器的配置文件中的加密方式。设置好后，点击"),t("strong",[s._v("确认")]),s._v("即可~")]),s._v(" "),t("p",[s._v("其中，高版本的 Mac OS 客户端可能有"),t("strong",[s._v("更多的选项")]),s._v("，其他"),t("strong",[s._v("都可以默认")]),s._v("，只要配置正确这几点即可。")]),s._v(" "),t("p",[s._v("OK，以上就是 Shadow小火箭socks 电脑版（Mac OS）客户端常用的一些配置~")]),s._v(" "),t("p",[t("strong",[s._v("Android")])]),s._v(" "),t("p",[s._v("根据教程下载好 Android 手机端相应客户端程序后，将 apk 文件拷贝至手机中（Shadow小火箭socks-universal-4.5.0.apk），正常安装 apk 文件，安装好后打开ying梭客户端，主界面如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/1240-20200903003218510.png",alt:""}})]),s._v(" "),t("p",[s._v("点击左上角的编辑按钮，根据你的服务器配置，在 Shadow小火箭socks 安卓客户端的配置中填入相应配置信息，服务器设置如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/520-20200903003238653.png",alt:""}})]),s._v(" "),t("p",[s._v("其中，"),t("strong",[s._v("功能设置")]),s._v("中，"),t("strong",[s._v("路由")]),s._v("改成如上图所示，其他都可以默认。")]),s._v(" "),t("p",[s._v("服务器配置好后，保存进入到主界面，点击下方的小飞机图标即可连接（延时不准，请无视）~不用的时候建议在ying梭中将其关闭，不然比较耗电：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/1240-20200903003307842.png",alt:""}})]),s._v(" "),t("p",[s._v("OK，以上就是 Shadow小火箭socks 手机版（Android/安卓）客户端ying梭常用的一些配置~")]),s._v(" "),t("p",[t("strong",[s._v("iOS")])]),s._v(" "),t("p",[s._v("Shadow小火箭socks 苹果客户端经常会被 App Store 下架，可以在 App Store 搜索关键字 shadowsock 或者 wingy，找到一个软件截图中包括填写 ip，加密方式，密码的软件一般就是对的了（目前可以用的是 FirstWingy）。当然，你也可以下载 PP 助手，之后在 PP 助手上下载 Wingy（Wingy 支持 ssr）或者 shadow小火箭socks（shadow小火箭socks 支持 ssr）。之后根据你的服务器配置，填入相应配置信息，设置如下图所示（以 Wingy 为例）：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/1240-20200903003707407.png",alt:""}})]),s._v(" "),t("p",[s._v("在 Shadow小火箭socks 的 iOS 客户端 Wingy 中，"),t("strong",[s._v("Host")]),s._v("指你购买的 VPS 的 IP，"),t("strong",[s._v("Port")]),s._v("指你服务器的配置文件中的端口，"),t("strong",[s._v("Password")]),s._v("指你服务器的配置文件中的密码，"),t("strong",[s._v("Method")]),s._v("指你服务器的配置文件中的加密方式。设置好后，点击"),t("strong",[s._v("Done")]),s._v("即可~")]),s._v(" "),t("p",[s._v("其中系统 ProxyRule 中的 Global Mode 是指所有的请求都走代理（国内以及国外的），而 Auto Mode 则是自动识别，国内的直连，国外的（例如 Google，YouTube）走代理。")]),s._v(" "),t("p",[s._v("其中，iOS 客户端可能有"),t("strong",[s._v("更多的选项")]),s._v("，例如 Protocol，Obfs，如果没有"),t("strong",[s._v("都可以默认")]),s._v("，只要填正确这几点即可。")]),s._v(" "),t("p",[s._v("OK，以上就是 Shadow小火箭socks 手机版（iOS/苹果）客户端常用的一些配置~")])])}),[],!1,null,null,null);t.default=a.exports}}]);