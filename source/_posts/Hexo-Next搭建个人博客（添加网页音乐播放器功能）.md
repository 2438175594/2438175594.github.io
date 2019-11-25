---
title: Hexo-Next搭建个人博客（添加网页音乐播放器功能）
comments: true
reward: true
top: false
date: 2019-09-20 12:30:12
tags:
  - hexo
  - termux
  - 教程
  - next
categories: hexo
---
*为博客添加网页音乐播放器功能*
<!-- more -->
效果图：
![效果图](https://res.cloudinary.com/q2438175594/image/upload/v1568954382/Hexo-Next%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E6%B7%BB%E5%8A%A0%E7%BD%91%E9%A1%B5%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8%E5%8A%9F%E8%83%BD%EF%BC%89/music.png)
# download #

点击访问Aplayer源码：[GitHub Aplayer](https://github.com/MoePlayer/APlayer)。下载到本地，解压后将 
`dist` 
文件夹复制到 
`themes\next\source` 
文件夹下。

# music.js #
新建 
`themes\next\source\dist\music.js` 
文件，添加内容：
{% codeblock %}
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
        {
        name: "Visions",
        artist: 'Acreix',
        url: 'http://www.ytmp3.cn/down/47082.mp3',
        cover: 'https://p2.music.126.net/CDOS3j7zAYrvs6She437yQ==/109951163593319450.jpg?param=130y130',
      },
          {
        name: "My Soul",
        artist: 'July',
        url: 'http://www.ytmp3.cn/down/50137.mp3',
        cover: 'https://p2.music.126.net/NFl1s5Hl3E37dCaFIDHfNw==/727876697598920.jpg?param=130y130',
      },
          {
        name: "追光者",
        artist: '岑宁儿',
	url: 'http://www.ytmp3.cn/down/57711.mp3',
	cover: 'https://p2.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg?param=130y130',
      },
	  {
	name: "让酒",
	artist: '摩登兄弟',
        url: 'http://www.ytmp3.cn/down/53762.mp3',
	cover: 'https://p1.music.126.net/JtRFFxXdu4TiKAhK7JT4OQ==/109951163830435640.jpg?param=130y130',
      },
	  {
	name: "哪吒",
	artist: '蔡翊昇',
	url: 'http://www.ytmp3.cn/down/58327.mp3',
        cover: 'https://p1.music.126.net/Za_wWwp1CRCMAesBbE994A==/109951163023780798.jpg?param=130y130',
      },
	  {
	name: "Apologize",
	artist: 'Martin Ermen',
	url: 'http://www.ytmp3.cn/down/59606.mp3',
	cover: 'http://p1.music.126.net/-_6mcI4VV5IKaiwhUAytbg==/1791104441647901.jpg?param=130y130',
      },
          {
	name: "River Flows in You",
	artist: 'Yiruma',
	url: 'http://www.ytmp3.cn/down/56482.mp3',
	cover: 'http://p1.music.126.net/8ZRSyI0ZN_4ah8uzsNd1mA==/2324367581169008.jpg?param=130y130',
      },
      {
        name: '惊蛰',
	artist: '音阙诗听/王梓钰',
	url: 'http://www.ytmp3.cn/down/48755.mp3',
	cover: 'http://p1.music.126.net/5MmXpaP9r88tNzExPGMI8Q==/109951163370350985.jpg?param=130y130',
      }
    ]
});
{% endcodeblock %}
源码中对应的参数解释，这边都有：[Aplayer 中文文档](https://aplayer.js.org/#/zh-Hans/)
`audio` 对应的便是音频文件，所以音乐播放器需要播放的音乐是需要自己进行相关信息（如歌曲链接、歌词、封面等）的配置。~~这里放一个mp3音乐外链网站：http://up.mcyt.net/，搜索对应的音乐~~（网站挂了，我现在用的是[OneDrive直链](https://onedrive.gimhoy.com/)）复制 `url` 接粘贴到对应的位置上就行了。

注：由于该外链网站没有歌词链接，我这边没有进行配置，所以播放器在播放音乐时点击歌词是没有显示的。

# _layout.swig #

打开 
`themes\next\layout\_layout.swig` 
文件，将
{% codeblock %}
<link rel="stylesheet" href="/dist/APlayer.min.css">
<div id="aplayer"></div>
<script type="text/javascript" src="/dist/APlayer.min.js"></script>
<script type="text/javascript" src="/dist/music.js"></script>
{% endcodeblock %}
添加到 `<body itemscope ...>` 后面就行，即在 `<body></body>` 里面。

重新生成，访问页面，就能看到左下角的音乐播放器了。
