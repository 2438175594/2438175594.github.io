---
title: Termux美化
comments: true
reward: true
top: false
date: 2019-08-22 23:50:19
tags: 
  - Termux
  - 教程
categories: Termux
---
■软件名称:Termux
<!-- more -->


■官方简介:高级终端Termux组合了强大的终端模拟 和拓展Linux包收集支持。享受bash和zsh。使用nano和vim编辑文件。通过ssh访问服务器。使用gcc和clang编译代码。使用python控制台来作为口袋计算器。使用git和subversion检查项目。使用frotz运行基于文本的游戏。

【下载地址】[Termux](https://pan.baidu.com/s/1wFARwcZ18WgB0L5amZXCWQ#/)

【官方介绍】(有删改)

让你的 Termux 变的五颜六色～

为Termux添加oh my zsh终端环境以及zsh-syntax-highlighting，设置色彩样式（大部分来自Gogh）和Powerline字体（来自powerline/fonts）。oh-my-zsh主题默认为agnoster，颜色样式默认为Tango，字体默认为Ubuntu。



【注意】
此 Repo 使用 Termux 官方源，在中国大陆可能需要将 Termux 应用添加到代理列表。

第一步更新apt(遇到y/n输入y)
{% codeblock %}
apt update && apt upgrade
{% endcodeblock %}

第二步安装curl环境
{% codeblock %}
apt install curl
{% endcodeblock %}

第三步安装脚本
{% codeblock %}
sh -c "$(curl -fsSL https://github.com/Cabbagec/termux-ohmyzsh/raw/master/install.sh)"
{% endcodeblock %}

第四步跟着ohmyzsh设置(没有英语基础的可以一个个试)
第一步是设置色彩样式
第二步是设置字体(需重启termux后生效)

第二次打开时若要更换色彩样式输入
{% codeblock %}
~/.termux/colors.sh
{% endcodeblock %}

更换字体输入
{% codeblock %}
~/.termux/fonts.sh
{% endcodeblock %}
