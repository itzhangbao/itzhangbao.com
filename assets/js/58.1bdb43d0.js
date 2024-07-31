(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{477:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/1240-20200903005653472.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("blockquote",[s("p",[t._v("当一个 tableView 中的 cell 类型过多时，我们务必会在 tableView 的各个代理中做这样那样的判断，当需要增加一种 cell，或调换 cell 的顺序的时候我们就会在 tableView 的各个代理中进行修改判断。\n使用 "),s("strong",[s("a",{attrs:{href:"https://github.com/zhmbo/ZBCellConfig",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZBCellConfig"),s("OutboundLink")],1)]),t._v(" 可以应对各种变态需求，当增删、调换 cell 的顺序时，只需一键配置。")])]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("ul",[s("li",[t._v("ZBCellConfig 对象实例会将 tableView 中 cell 所需的基本信息存储下来，然后放到数组中进行管理；")]),t._v(" "),s("li",[t._v('每个 ZBCellConfig 实例与 tableView 中想要显示的 cell 相对应。（但注意，是"想要显示的"cell，由于 cell 的重用，实际上 cell 并不会生成那么多）；')]),t._v(" "),s("li",[t._v("优点：改变不同类型 cell 的顺序、增删时，极为方便，只需改变用于存放 ZBCellConfig 的数组即可，** 重点是无需在多个 tableView 代理方法中逐个修改 **。")])]),t._v(" "),s("h2",{attrs:{id:"结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/1240-20200903005701499.png",alt:"目录结构"}})]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("ul",[s("li",[t._v("支持 cocoapods 导入 "),s("code",[t._v("pod 'ZBCellConfig'")])]),t._v(" "),s("li",[t._v("直接将文件拖拽到项目中 "),s("code",[t._v('#import "ZBCellConfig.h"')])])]),t._v(" "),s("h2",{attrs:{id:"知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[t._v("请下载示例项目查看详细使用方法及实际中如何使用 "),s("a",{attrs:{href:"https://github.com/zhmbo/ZBCellConfig",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 下载地址"),s("OutboundLink")],1),t._v("。\n初、中、高、高 MVVM 内容上是一样的，区别在于没一级别知识点递增。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/1240-20200903005708132.png",alt:"Demo 展示"}})]),t._v(" "),s("h3",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("p",[t._v("1 . 首先在控制器中声明存放 ZBCellConfig 实例的二维数组")]),t._v(" "),s("div",{staticClass:"language-swift line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 二维数组 (匹配 tableView 的数据结构，第一层是 section，第二层放 cell)\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strong"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSMutableArray")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSArray")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZBCellConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cellConfigs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("2-1 . 初始化数组，每一个 ZBCellConfig 为 cell 的基本信息，改变不同类型 cell 的顺序、增删时，只需在此修改即可，无需在多个 tableView 代理方法中逐个修改(具体查看 Demo 注释很清晰)")]),t._v(" "),s("div",{staticClass:"language-swift line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSMutableArray")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSArray")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZBCellConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("cellConfigs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _cellConfigs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSMutableArray")]),t._v(" alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cell1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZBCellConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cell1Config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZBCellConfig")]),t._v(" cellConfigWithClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LowTableViewCell1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" showCellInfoMethod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_cellConfigs addObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cell1Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cell2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZBCellConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cell2Config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZBCellConfig")]),t._v(" cellConfigWithClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LowTableViewCell1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" showCellInfoMethod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_cellConfigs addObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cell2Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cell3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("....")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _cellConfigs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("2-2 . 增删只需这样：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/strip-20200903005716179.gif",alt:"增删操作.gif"}}),s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1874013-7460b89d4c28f6d6.gif?imageMogr2/auto-orient/strip",alt:"效果图.gif"}})]),t._v(" "),s("p",[t._v("3 . tableView 代理中实现部分")]),t._v(" "),s("div",{staticClass:"language-swift line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSInteger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("numberOfSectionsInTableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITableView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cellConfigs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSInteger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITableView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView numberOfRowsInSection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSInteger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("section\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cellConfigs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("section"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITableViewCell")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITableView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView cellForRowAtIndexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSIndexPath")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("indexPath\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据 indexPath 获取 对应的 cellConfig")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZBCellConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cellConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cellConfigs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("indexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("section"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("indexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据对应的 cellConfig 获取 cell，并给 cell 赋值 根据模型显示。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// • dataModels: 这里由于为示例代码不是用真实数据，只起到 执行 cell 的赋值函数。在实际项目中应该传递从网络请求的真实数据。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITableViewCell")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cell "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cellConfig cellOfCellConfigWithTableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("tableView dataModels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LowModel")]),t._v(" new"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("h3",{attrs:{id:"cell-自适应高度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cell-自适应高度"}},[t._v("#")]),t._v(" cell 自适应高度")]),t._v(" "),s("p",[t._v("1 . tableView 设置如下")]),t._v(" "),s("div",{staticClass:"language-swift line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * default is 0, which means there is no estimate\n * estimatedRowHeight 默认为 0，不估算cell高度\n * 赋值不为 0 时候，开启cell估值配合 layout 约束，进行cell高度自适应\n * 也就是说想要自动布局 cell 高度就给这个 estimatedRowHeight 属性赋值，值为你所有 cell 的平均高度的一个估值\n */")]),t._v("\n_heightTableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("estimatedRowHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// iOS8 系统中 rowHeight 的默认值已经设置成了 UITableViewAutomaticDimension")]),t._v("\n_heightTableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rowHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UITableViewAutomaticDimension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("2 . cell 需采用 AutoLayout 布局，masory 或 xib 托线的形式皆可，约束规定上左下右还有让 cell 知道内容的高：\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/zhmbo/static@master/img/1240-20200903005750365.png",alt:"AutoLayout约束"}})]),t._v(" "),s("h3",{attrs:{id:"tableview-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tableview-style"}},[t._v("#")]),t._v(" tableView style")]),t._v(" "),s("ol",[s("li",[t._v("UITableViewStylePlain 和 UITableViewStyleGrouped 区别")]),t._v(" "),s("li",[t._v("UITableViewStylePlain：sectionView 当 tableView cectionHeader/Footer 会默认高度为 0， 滑动到顶部时 会停留到导航栏底部")]),t._v(" "),s("li",[t._v("UITableViewStyleGrouped：sectionView 当 tableView cectionHeader/Footer 会默认高度为 10， 滑动到顶部时 不会停留到导航栏底部")]),t._v(" "),s("li",[t._v("注意：当需要 为 UITableViewStyleGrouped 时查看【MediaExample 使用示例】")])]),t._v(" "),s("h3",{attrs:{id:"zbcellconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zbcellconfig"}},[t._v("#")]),t._v(" ZBCellConfig")]),t._v(" "),s("p",[t._v("通过函数 "),s("code",[t._v("- (void)zb_performSelector:(SEL)aSelector withObjects:(NSArray *)objects")]),t._v("来执行 初始化时配置好的"),s("code",[t._v("showCellInfoMethod")]),t._v("。\n此函数是对 "),s("code",[t._v("- (id)performSelector:(SEL)aSelector withObject:(id)object1 withObject:(id)object2;")]),t._v("的一个扩展，以数组的形式来传递多参数。\n函数实现部分：")]),t._v(" "),s("div",{staticClass:"language-swift line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 签名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSMethodSignature")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("signature "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" instanceMethodSignatureForSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("aSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signature "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token nil constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSAssert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LINE=%d ERROR - 找不到 %@ 方法"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__LINE__")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSStringFromSelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包装")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSInvocation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("invocation  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSInvocation")]),t._v(" invocationWithMethodSignature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("signature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置调用者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invocation setTarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置调用的方法 与 NSMethodSignature 签名的方法一致")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invocation setSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("aSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0为target 1为_cmd 所以从2索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numberOfArguments "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id dataModel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token nil constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invocation setArgument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dataModel atIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// retain 所有参数，防止释放")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invocation retainArguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invocation invoke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[t._v("把将要展示的几种 cell 的基本信息 以 tableView 的数据结构二维数组的形式存放，储存基本配置并不会生成多余的 cell，内部创建采用 tableView 的重用机制。示例 Demo 中注释详细，"),s("a",{attrs:{href:"https://github.com/zhmbo/ZBCellConfig",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo 下载地址"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("_ If I have no knife,I can't protect you.If I had a sword,I can't hold you. \n"),s("br"),t._v("\n如果我没有刀，我就不能保护你。如果我有刀，我就不能拥抱你。\n"),s("br"),t._v("\n————《剪刀手爱德华》_")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);