(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{480:function(t,e,i){"use strict";i.r(e);var s=i(1),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/600-20200903010552846.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("blockquote",[e("p",[t._v("自己开发的或朋友给的 "),e("code",[t._v(".ipa")]),t._v(" "),e("em",[t._v("or")]),t._v(" "),e("code",[t._v(".app")]),t._v(" 如何让亲朋好友安装后把玩？")])]),t._v(" "),e("p",[t._v("那个谁把手机的 UDID 给我~\n那个谁把手机拿过来我给你用 "),e("strong",[t._v("Xcode")]),t._v(" 装一个~\n...\n"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/strip-20200903010603707.gif",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),e("p",[t._v("除了上架 "),e("em",[t._v("App Store")]),t._v(" 我们还可以利用 "),e("strong",[e("em",[t._v("重签名")])]),t._v(" 让我或者公司开发的 "),e("code",[t._v("app")]),t._v(" 安装到非测试设备上，也就是本文主要内容。")]),t._v(" "),e("h3",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),e("p",[t._v("1、需要被重签名 app、archive 包、 ipa")]),t._v(" "),e("p",[t._v("2、$ 299 企业开发者账号 "),e("strong",[t._v("or")]),t._v(" 企业证书（P12 文件）+ 与此证书相匹配的任意描述文件（.mobileprovision）")]),t._v(" "),e("p",[t._v("3、有效的证书（可以在钥匙串中查找），记录一下企业证书名称备用\n"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/600-20200903010613926.png",alt:"证书"}})]),t._v(" "),e("p",[t._v("4、.mobileprovision 配置描述文件** （以下三种获得途径）")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("存储路径："),e("code",[t._v("~/Library/MobileDevice/Provisioning Profiles")]),t._v(" 拷贝出来重命名 "),e("code",[t._v("embedded.mobileprovision")])])]),t._v(" "),e("li",[e("p",[t._v("可以在 "),e("strong",[t._v("Xcode")]),t._v(" 中找一个有效的，右键 "),e("code",[t._v("show in finder")]),t._v("，将文件复制出来，重命名为 "),e("code",[t._v("embedded.mobileprovision")]),t._v(" "),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/600.jpeg",alt:"描述文件"}})])]),t._v(" "),e("li",[e("p",[t._v("解压又当前企业账号 build 后的到 app "),e("code",[t._v("显示包内容")]),t._v(" 得到 "),e("code",[t._v("embedded.mobileprovision")]),t._v(" 拷贝出来备用")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1874013-bfe1a8fdc5d9ffdc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600",alt:"embedded.mobileprovision"}}),t._v("\n（* 注：安装包与描述文件放到同一目录下，我这里全部都放到桌面）")]),t._v(" "),e("h3",{attrs:{id:"重签名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重签名"}},[t._v("#")]),t._v(" 重签名")]),t._v(" "),e("blockquote",[e("p",[t._v("新建 "),e("strong",[t._v("Demo")]),t._v(" 项目, 用我个人账号对编译出 "),e("strong",[t._v("Demo.app")]),t._v(" ，再用企业账号对 "),e("strong",[t._v("Demo.app")]),t._v(" 重签名。")])]),t._v(" "),e("h6",{attrs:{id:"_1、选择非企业开发者账号编译工程得到-demo-app-，拷贝到桌面与上面得到的-embedded-mobileprovision-放到同一目录下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、选择非企业开发者账号编译工程得到-demo-app-，拷贝到桌面与上面得到的-embedded-mobileprovision-放到同一目录下"}},[t._v("#")]),t._v(" 1、选择非企业开发者账号编译工程得到 "),e("strong",[t._v("Demo.app")]),t._v(" ，拷贝到桌面与上面得到的 "),e("code",[t._v("embedded.mobileprovision")]),t._v(" 放到同一目录下")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/600-20200903010633651.png",alt:"Demo.app"}})]),t._v(" "),e("p",[e("code",[t._v("Show in Finder")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/400-20200903010643869.png",alt:"Show in Finder"}})]),t._v(" "),e("p",[t._v("显示包内容")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/400-20200903010653155.png",alt:"包内容"}})]),t._v(" "),e("p",[t._v("将 "),e("em",[t._v("准备工作")]),t._v(" 的第 4 步中 "),e("code",[t._v("embedded.mobileprovision")]),t._v(" 拷贝到这里进行替换")]),t._v(" "),e("h6",{attrs:{id:"_2、-生成-entitlements-plist-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、-生成-entitlements-plist-文件"}},[t._v("#")]),t._v(" 2、 生成 "),e("code",[t._v("entitlements.plist")]),t._v(" 文件")]),t._v(" "),e("p",[t._v("先通过“security”命令，从 "),e("code",[t._v("mobileprovision")]),t._v(" 文件中生成一个完整的 plist 文件\n命令 : "),e("code",[t._v('security cms -D -i "mobileprovision文件" > "entitlements文件"')]),t._v(" "),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1874013-cb02850c9a40e7f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/800",alt:"命令-1"}})]),t._v(" "),e("p",[t._v("得到结果：\n"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/600-20200903010701514.png",alt:""}})]),t._v(" "),e("p",[t._v("我们只是为了得到里面的 "),e("code",[t._v("Entitlements")]),t._v(" 字段，使用如下的命令\n命令 : "),e("code",[t._v("/usr/libexec/PlistBuddy -x -c 'Print:Entitlements' tmp_entitlements.plist > Entitlements.plist")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1874013-452af46e42c1a8c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/800",alt:"命令-2"}})]),t._v(" "),e("p",[t._v("得到结果：\n"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/600-20200903010710264.png",alt:""}})]),t._v(" "),e("h6",{attrs:{id:"_3、签名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、签名"}},[t._v("#")]),t._v(" 3、签名")]),t._v(" "),e("p",[t._v("命令 : "),e("code",[t._v('codesign -f -s "证书" --entitlements "entitlements文件" "需要签名的app文件"')]),t._v(" "),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1874013-d4f334fdd6237147.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/800",alt:"命令-3"}})]),t._v(" "),e("p",[t._v("新建文件夹 Payload，将 Demo.app 拷贝到文件夹 Payload 中执行命令\n命令："),e("code",[t._v("zip -r new_demo.ipa Payload")]),t._v(" "),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1874013-3fbb0b943044a005.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/800",alt:""}})]),t._v(" "),e("h1",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/1240-20200903010717991.png",alt:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);