---
title: Hexo-Next搭建个人博客（更换主题）
comments: true
reward: true
top: false
date: 2019-09-16 14:47:14
tags:
  - 教程
  - hexo
  - next
  - termux
categories: hexo
---
#前置#
已经搭建好的`Hexo`的平台，在本地可以用`server`打开的也算；

如果没有，请阅读[Hexo-Next搭建个人博客（安装与部署）](https://2438175594.github.io/2019/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/)


#主题#
[hexo主题](https://github.com/hexojs/hexo/wiki/Themes)，这里有所有的主题，任君选择，找好主题之后，从 Github 上面下载下来，本人使用的是[NexT](https://github.com/theme-next/hexo-theme-next/blob/master/README.md)


##安装##
最简单的安装方法是克隆整个存储库：
{% codeblock %}
cd hexo
git clone https://github.com/theme-next/hexo-theme-next themes/next
{% endcodeblock %}
或者，如果您需要任何其他变体，可以查看[详细的安装说明](https://github.com/theme-next/hexo-theme-next/blob/master/docs/INSTALLATION.md)。


##应用##
修改站点配置文件`_config.yml`把`theme`后改为`next`
{% codeblock %}
# Extensions                                               ## Plugins: https://hexo.io/plugins/                       ## Themes: https://hexo.io/themes/                         theme: next ##把landscape改为next
{% endcodeblock %}


#配置#
站点配置文件路径`~/hexo/_config.yml`
主题配置文件路径`~/hexo/themes/next/_config.yml`

##站点##

###配置hexo网站相关信息###
找到site的设置 按下面备注修改相关信息
{% blockquote %}
# Site
title: ⌬の空间  #网站标题
subtitle: 为了梦想而努力!  #网站副标题
description:     #描述,介绍网站的
keywords: 生活,科技 #网站的关键字
author: ZHANGYIJIA  #博主姓名
language: zh-CN #语言  zh-CN 是简体中文
timezone:    #时区
{% endblockquote %}

###设置hexo永久链接###
设置永久链接的目的是为了便于分享和seo优化.这样别人收藏地址后不会出现链接失效
{% blockquote %}
# URL
url: https://2438175594.github.io #网站的首页地址
root: / #网站的根目录设置
permalink: :year/:month/:day/:title.html # 这种设置的url表现为2018/10/18/hello-world.html 样式
{% endblockquote %}
默认链接样式可修改为 (permalink配置只能有一种,关闭某种开头加 #)
{% blockquote %}
permalink: :category/:title.html #用分类和博客title当做url地址
{% endblockquote %}


##主题配置##

###配置hexo中的tag,categories菜单###
默认菜单只开启了首页和归档,hexo所有图标均来自[fontawesome](http://fontawesome.dashgame.com/)
{% blockquote %}
menu: #菜单设置为 菜单名: /菜单目录 || 菜单图标名字
  home: / || home 
  about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
  commonweal: /404/ || heartbeat
menu_settings:
  icons: true  #显示图标
  badges: true  #显示统计信息
{% endblockquote %}
手动生成hexo菜单对应文件 新菜单开启后是没有对应文件的,所以要手动生成about,tags,categories和404页面,这里我们将404替换成腾讯的公益页面
> 新建about页面
{% codeblock %}
cd hexo
hexo new page about #about就是普通的布局一般用来介绍站点信息和博主信息等
{% endcodeblock %}
> 新建一个tags页面
{% codeblock %}
cd hexo
hexo new page tags
{% endcodeblock %}
找到tags文件`hexo/source/tags/index.md`编辑它
{% blockquote %}
---
title: All tags
date: 2018-10-01 13:58:44 #时间随意
type: "tags" #类型一定要为tags
---
{% endblockquote %}
> 新建一个categories页面
{% codeblock %}
cd blog
hexo new page categories
{% endcodeblock %}
找到categories文件`hexo/source/categories/index.md`编辑它
{% blockquote %}
---
title: 分类
date: 2018-10-15 00:03:57
type: "categories"
---
{% endblockquote %}
> 新建一个404页面
{% codeblock %}
cd blog
hexo new page 404
{% endcodeblock %}
找到404文件`hexo/source/404/index.md`编辑它,内容全部替换成如下
{% blockquote %}
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>404</title>
</head>
<body>
<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="返回"></script> 
</body></html>
 ```
{% endblockquote %}

###配置hexo站点的footer信息###
底部footer可以开关显示hexo版权,theme版权,还有建站时间等个性化配置
{% blockquote %}
footer:
  since: 2015   #建站开始时间
  icon:
    name: user  #设置 建站初始时间和至今时间中间的图标 默认是一个'小人像'更改user为heart可以变成一个'心'
    color: "#808080" #更改图标的颜色 红色为 '#ff0000'
  powered:
    enable: true #是否开启hexo驱动
    version: true #是否开启hexo版本号
  theme:
    enable: true #是否开启theme驱动
    version: true #是否开启主题版本号
  custom_text: Hosted by <a target="_blank" rel="external nofollow" href="https://pages.coding.me"><b>Coding Pages</b></a> #这里的底部标识是为了添加coding page服务时的版权声明 打开注释就可以看到底部有一个 hosted by coding pages
{% endblockquote %}

###hexo网站next主题侧边栏宽度,头像信息,头像设置圆形和头像旋转###
{% blockquote %}
sidebar:
  position: left  #选择pisces 或者 gemini 主题是 可以 选择侧边栏 位置 调整左边或者右边
  #position: right
  width: 300   # muse mist 主题 可以控制侧边栏的宽度 
  display: post   #如果是muse mist 主题 可以选择 侧边栏弹出动作  post 是 只在内容页弹出
  #display: always  #全局弹出
  #display: hide    #全局隐藏侧边栏 右下角有角标唤出
  #display: remove  #移除侧边栏
avatar:
  url: /images/avatar.gif  #设置头像资源的位置
  rounded: false  #开启圆形头像
  opacity: 1    #不透明的比例  0 就是完全透明
  rotated: false  #开启旋转
{% endblockquote %}

##hexo中next主题的社交信息和友链配置##
{% blockquote %}
social: #和菜单设置格式一样  社交名字: 社交url || 社交图标 ,图标信息还是[fontawesome](https://fontawesome.com/v4.7.0/icons)
  GitHub: https://github.com/yourname || github
  E-Mail: mailto:yourname@gmail.com || envelope
  Google: https://plus.google.com/yourname || google


social_icons:
  nable: true  #显示社交图标
  icons_only: false #只显示图标的开关


# Blog rolls
links_icon: link  #友链的图标 参考上文
links_title: Links #友链的title  比如你可以更改为 友情链接
links_layout: block #友链摆放的样式,按块 一行一个
#links_layout: inline #按线摆放,一行很多个 切记 同时只能一种样式
links:
  Title: http://example.com/  #友链的地址

