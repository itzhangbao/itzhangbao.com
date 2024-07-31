(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{461:function(s,a,e){"use strict";e.r(a);var t=e(1),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在国内的网络环境下使用 Homebrew 安装软件的过程中可能会长时间卡在 Updating Homebrew 这个步骤。")]),s._v(" "),a("h2",{attrs:{id:"安装homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装homebrew"}},[s._v("#")]),s._v(" 安装homebrew")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('/bin/bash -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v(" "),a("p",[s._v("例：执行 brew install composer 命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("➜  ~ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v("\nUpdating Homebrew"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果碰到长时间卡在这里，参考以下 2 种处理方法")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"方法-1：按住-control-c-取消本次更新操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-1：按住-control-c-取消本次更新操作"}},[s._v("#")]),s._v(" 方法 1：按住 control + c 取消本次更新操作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("➜  ~ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v("\nUpdating Homebrew"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n^C\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("按住 control + c 之后命令行会显示 ^C，就代表已经取消了 Updating Homebrew 操作")]),s._v(" "),a("p",[s._v("大概不到 1 秒钟之后就会去执行我们真正需要的安装操作了")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("➜  ~ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v("\nUpdating Homebrew"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n^C"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Satisfying dependencies\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Downloading https://getcomposer.org/download/1.7.2/composer.phar\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这个方法是临时的、一次性的")]),s._v(" "),a("h2",{attrs:{id:"方法-2：使用-alibaba-的-homebrew-镜像源进行加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-2：使用-alibaba-的-homebrew-镜像源进行加速"}},[s._v("#")]),s._v(" 方法 2：使用 Alibaba 的 Homebrew 镜像源进行加速")]),s._v(" "),a("p",[s._v("平时我们执行 brew 命令安装软件的时候，跟以下 3 个仓库地址有关：")]),s._v(" "),a("ol",[a("li",[s._v("brew.git")]),s._v(" "),a("li",[s._v("homebrew-core.git")]),s._v(" "),a("li",[s._v("homebrew-bottles")])]),s._v(" "),a("p",[s._v("通过以下操作将这 3 个仓库地址全部替换为 Alibaba 提供的地址")]),s._v(" "),a("h3",{attrs:{id:"_1-替换-还原-brew-git-仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-替换-还原-brew-git-仓库地址"}},[s._v("#")]),s._v(" 1. 替换 / 还原 brew.git 仓库地址")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换成阿里巴巴的 brew.git 仓库地址:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repo")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#=======================================================")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还原为官方提供的 brew.git 仓库地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repo")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://github.com/Homebrew/brew.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_2-替换-还原-homebrew-core-git-仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-替换-还原-homebrew-core-git-仓库地址"}},[s._v("#")]),s._v(" 2. 替换 / 还原 homebrew-core.git 仓库地址")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换成阿里巴巴的 homebrew-core.git 仓库地址:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repo")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/Library/Taps/homebrew/homebrew-core"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换成阿里巴巴的 homebrew-services.git 仓库地址:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repo")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/Library/Taps/homebrew/homebrew-services"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-services.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#=======================================================")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还原为官方提供的 homebrew-core.git 仓库地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repo")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/Library/Taps/homebrew/homebrew-core"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://github.com/Homebrew/homebrew-core.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repo")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/Library/Taps/homebrew/homebrew-services"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://github.com/Homebrew/homebrew-services.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"_3-替换-还原-homebrew-bottles-访问地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-替换-还原-homebrew-bottles-访问地址"}},[s._v("#")]),s._v(" 3. 替换 / 还原 homebrew-bottles 访问地址")]),s._v(" "),a("p",[s._v("这个步骤跟你的 macOS 系统使用的 shell 版本有关系")]),s._v(" "),a("p",[s._v("所以，先来查看当前使用的 shell 版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你的输出结果是 /bin/zsh，参考?的 zsh 终端操作方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你的输出结果是 /bin/bash，参考?的 bash 终端操作方式")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_3-1-zsh-终端操作方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-zsh-终端操作方式"}},[s._v("#")]),s._v(" 3.1 zsh 终端操作方式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换成阿里巴巴的 homebrew-bottles 访问地址:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#=======================================================")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还原为官方提供的 homebrew-bottles 访问地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.zshrc\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后，删除 HOMEBREW_BOTTLE_DOMAIN 这一行配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"_3-2-bash-终端操作方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-bash-终端操作方式"}},[s._v("#")]),s._v(" 3.2 bash 终端操作方式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换 homebrew-bottles 访问 URL:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bash_profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#=======================================================")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还原为官方提供的 homebrew-bottles 访问地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.bash_profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后，删除 HOMEBREW_BOTTLE_DOMAIN 这一行配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);