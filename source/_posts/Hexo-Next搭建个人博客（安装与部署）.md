---
title: Hexo-Next搭建个人博客（安装与部署）
comments: true
reward: true
top: false
date: 2019-08-23 13:23:52
tags: 
  - hexo
  - termux
  - 教程
categories:
  - hexo
---
*Hexo是一个快速、简洁且高效的静态站点生成框架，它基于Node.js*
<!-- more -->
# 简介
[Hexo](https://hexo.io/zh-cn/)是一个快速、简洁且高效的静态站点生成框架，它基于[Node.js](https://nodejs.org/en/)。
## 特点：
{% blockquote %}
### 速度快
{% endblockquote %}
Node.js 所带来的超快生成速度，让上百个页面在几秒内瞬间完成渲染。
{% blockquote %}
### 支持Markdown
{% endblockquote %}
Hexo 支持 GitHub Flavored Markdown 的所有功能，甚至可以整合 Octopress 的大多数插件。
{% blockquote %}
### 一键部署
{% endblockquote %}
只需一条指令即可部署到Github或其他网站
{% blockquote %}
### 丰富的插件
{% endblockquote %}
Hexo 拥有强大的插件系统，安装插件可以让 Hexo 支持 Jade, CoffeeScript。

---

# 安装 hexo
打开[termux](https://pan.baidu.com/s/1wFARwcZ18WgB0L5amZXCWQ#/)
按顺序执行以下命令。
{% blockquote %}
此处代码请一行一行的复制#号之前的内容并回车。
{% endblockquote %}

{% codeblock %}
pkg update　　#升级包
pkg install vim git nodejs openssh　　#询问之后输入 y 然后回车
npm install -g hexo-cli　　#安装 hexo
hexo init hexo　　#新建一个名为 hexo 的文件夹并初始化 hexo
cd hexo　　#进入 hexo 文件夹
npm install　　#部署 hexo
{% endcodeblock %}

至此，hexo 已安装完成，指定的文件夹目录如下。
{% codeblock %}
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
{% endcodeblock %}

更多信息可以查看[建站|hexo](https://hexo.io/zh-cn/docs/setup)。

继续我们的 hexo
{% codeblock %}
hexo new postname　　#postname 就是文章名称
vim source/_posts/postname.md　　#用 vim 编辑器编辑 mark down 文本，就是你的文章
{% endcodeblock %}
按`i`进入编辑模式。
编辑完成后，按住`音量加点击E`模拟 Ees 键，输入`ZZ`保存并退出，当然也可以直接右滑后长按KEYBOARD调出辅助键盘。

{% codeblock %}
hexo generate　　#生成静态文件
hexo server　　#启动服务器
{% endcodeblock %}
以上命令也可以简写为
{% codeblock %}
hexo g
hexo s
{% endcodeblock %}
在浏览器输入http://localhost:4000 即可看到你的网站。至此，hexo 搭建完成。


# GitHub设置ssh
本来不想的，结果还是一堆图片,以下是一份超详细的[GitHub](https://github.com)注册教程。

## 注册
首先需要注册一个 GitHub 账号，地址https://github.com。
![1](https://res.cloudinary.com/q2438175594/image/upload/v1566541198/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/1.png)
<center>GitHub的signup</center>

点击`Sign up for GitHub`
![2](https://res.cloudinary.com/q2438175594/image/upload/v1566541410/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/2.png)
<center>Github注册信息</center>

填写自己的信息，用户名，邮箱和密码，出现红色的三角/字，就是用不了的意思，需要换一个别的。
![3](https://res.cloudinary.com/q2438175594/image/upload/v1566541469/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/3.png)
<center>GitHub注册确认</center>

点击`Create an account`选择白嫖套餐
![4](https://res.cloudinary.com/q2438175594/image/upload/v1566541513/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/4.png)
<center>GitHub费用选择</center>

![5](https://res.cloudinary.com/q2438175594/image/upload/v1566541573/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/5.png)
<center>确认选择</center>

点击`Continue`
然后去邮箱点击GitHub发来的连接以完成注册
![6](https://res.cloudinary.com/q2438175594/image/upload/v1566541620/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/6.png)
<center>GitHub页面</center>

点击`Desktop version`
![7](https://res.cloudinary.com/q2438175594/image/upload/v1566541662/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/7.png)
点击`+`号
![8](https://res.cloudinary.com/q2438175594/image/upload/v1566541728/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/8.png)
点击点击`New repository`
![9](https://res.cloudinary.com/q2438175594/image/upload/v1566541781/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/9.png)
在`repository name`中填写`username.github.io`，其中，username 是你的用户名，填好后点击`Create repository`然后发现这个↓![10](https://res.cloudinary.com/q2438175594/image/upload/v1566541830/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/10.png)
点击这个
![11](https://res.cloudinary.com/q2438175594/image/upload/v1566541879/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/11.png)
<center>复制按钮</center>
或者复制这个按钮前面的一长串内容。
你会得到这样一串字符
{% codeblock %}
git@github.com:username/username.github.io.git
{% endcodeblock %}
然后
{% codeblock %}
cd hexo　　#进入 hexo 文件夹
vim _config.yml　　#修改配置文件
{% endcodeblock %}
把 depoly 部分修改为：
{% codeblock %}
deploy:
  type: git
  repo: git@github.com:username/username.github.io.git
  branch: master
{% endcodeblock %}
保存并退出
请注意缩进，可使用`空格`或者`tab键`
其实就是上面复制的内容，当然你也可以直接填写repo部分，username 替换为你的用户名。

## 激活仓库
回到浏览器点击`README`新建一个`README`文件用来激活仓库。
![12](https://res.cloudinary.com/q2438175594/image/upload/v1566541931/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/12.png)
随便写一些什么，反正一会就没有了，然后点击`Commit new file`
![13](https://res.cloudinary.com/q2438175594/image/upload/v1566541995/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/13.png)
然后你会看见这个
![14](https://res.cloudinary.com/q2438175594/image/upload/v1566542065/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/14.png)
至此，GitHub端工作完成

---

## 设置SSH key
打开Termux，输入：
{% codeblock %}
ssh-keygen -t rsa -C "example@mail.com"　　#创建SSH key，引号内替换成你注册GitHub时填的邮箱。
{% endcodeblock %}
之后会要求输入一次文件名，两次密码，可以直接回车忽略，SSH key创建成功之后，运行：
{% codeblock %}
vim .ssh/id_rsa.pub　　#进入SSH key的文件
{% endcodeblock %}
复制里面所有内容后打开GitHub，点击头像↓
![15](https://res.cloudinary.com/q2438175594/image/upload/v1566542125/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/15.png)

点击`Settings`
![16](https://res.cloudinary.com/q2438175594/image/upload/v1566542181/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/16.png)

点击`SSH and GPG keys`
![17](https://res.cloudinary.com/q2438175594/image/upload/v1566542240/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/17.png)

点击`new SSH key`
![18](https://res.cloudinary.com/q2438175594/image/upload/v1566542297/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/18.jpg)

出现以下内容：
![19](https://res.cloudinary.com/q2438175594/image/upload/v1566542364/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2%EF%BC%89/19.png)
Title填自己喜欢的，Key里面粘贴刚才复制的密匙，填好后点`Add SSH key`

打开Termux，输入：
{% codeblock %}
ssh -T git@github.com　　#检验SSH key
{% endcodeblock %}
向你确认，输入`yes`后回车。
成功后会显示Hi rd-dafuz！....

然后
{% codeblock %}
npm install hexo-deployer-git --save　　#安装git的拓展插件
{% endcodeblock %}
此处报错时常见的解决方案
{% codeblock %}
npm config set registry https://registry.npm.taobao.org　　#切换到国内的淘宝源，对，阿里巴巴的那个淘宝！
{% endcodeblock %}


# 开始push
{% codeblock %}
hexo generate　　#生成文件
hexo deploy　　#部署文件
{% endcodeblock %}
也可以简写为：
{% codeblock %}
hexo g -d
{% endcodeblock %}
最后出现`INFO Deploy done：git`即为成功,打开`https://username.github.io`即可查看你的hexo了。


# 参考
[Termux 高级终端安装使用配置教程 | 国光](https://www.sqlsec.com/2018/05/termux.html)
[文档 | Hexo](https://hexo.io/zh-cn/docs/)
及百度、bing、Google （请善用搜索引擎）
