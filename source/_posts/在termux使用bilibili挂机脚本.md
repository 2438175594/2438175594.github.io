---
title: 在termux使用bilibili挂机脚本
comments: true
reward: true
top: false
date: 2019-08-22 15:34:14
tags:
  - 教程
  - termux
  - bilibili
categories: Termux
---
点击下载[Termux](https://pan.baidu.com/s/1wFARwcZ18WgB0L5amZXCWQ#/)
<!-- more -->

输入
{% codeblock %}
pkg up && pkg in curl && pkg in php && pkg in git
{% endcodeblock %}
安装依赖
![正在安装](https://res.cloudinary.com/q2438175594/image/upload/v1564441384/%E5%9C%A8termux%E4%BD%BF%E7%94%A8bilibili%E6%8C%82%E6%9C%BA%E8%84%9A%E6%9C%AC/1.jpg)
安装完成之后呢，我们使用git工具把项目拉下来
{% codeblock %}
git clone https://github.com/lkeme/BiliHelper.git && cd BiliHelper/conf && cp user.conf.example user.conf
{% endcodeblock %}
![拉下来后](https://res.cloudinary.com/q2438175594/image/upload/v1564441632/%E5%9C%A8termux%E4%BD%BF%E7%94%A8bilibili%E6%8C%82%E6%9C%BA%E8%84%9A%E6%9C%AC/2.jpg)
使用
{% codeblock %}
cd ~ && curl -sS https://getcomposer.org/installer | php
{% endcodeblock %}
安装composer
![安装好了](https://res.cloudinary.com/q2438175594/image/upload/v1564441781/%E5%9C%A8termux%E4%BD%BF%E7%94%A8bilibili%E6%8C%82%E6%9C%BA%E8%84%9A%E6%9C%AC/3.jpg)
然后通过
{% codeblock %}
cp composer.phar BiliHelper
cd BiliHelper
php composer.phar install
{% endcodeblock %}
来安装挂机工具
安装好后如下图
![安装完成](https://res.cloudinary.com/q2438175594/image/upload/v1564441986/%E5%9C%A8termux%E4%BD%BF%E7%94%A8bilibili%E6%8C%82%E6%9C%BA%E8%84%9A%E6%9C%AC/4.jpg)
接下来是最后一步！设置用户名和密码
输入
{% codeblock %}
vi conf/user.conf
{% endcodeblock %}
进行设置
![配置的地方](https://res.cloudinary.com/q2438175594/image/upload/v1564442184/%E5%9C%A8termux%E4%BD%BF%E7%94%A8bilibili%E6%8C%82%E6%9C%BA%E8%84%9A%E6%9C%AC/5.jpg)
最后通过esc和ZZ退出编辑器！
输入
{% codeblock %}
php index.php
{% endcodeblock %}
就可以运行了！
![运行中](https://res.cloudinary.com/q2438175594/image/upload/v1566462547/%E5%9C%A8termux%E4%BD%BF%E7%94%A8bilibili%E6%8C%82%E6%9C%BA%E8%84%9A%E6%9C%AC/6.jpg)

更新：
{% codeblock %}
cd BiliHelper
git pull
{% endcodeblock %}
