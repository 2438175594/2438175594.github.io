const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
	name: "Visions",
	artist: 'Acreix',
	url: 'http://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9kYWJjb29vYWNuei1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9wYm0yNTc5X211YWJsX2NuL0VaSVBHNnhEUktOR2c3azA2WXRmbWVrQnlLb3RNbVl0VnRrTXVReHEwQmxrT3c/ZT00T25FWU4=.mp3',
	cover: 'https://p2.music.126.net/CDOS3j7zAYrvs6She437yQ==/109951163593319450.jpg?param=130y130',
      },
	  {
	name: "My Soul",
	artist: 'July',
	url: 'http://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9kYWJjb29vYWNuei1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9wYm0yNTc5X211YWJsX2NuL0VWVlcxd01qdnJ4SWwyNDI0T2I4RVdzQlVRUF92Q0RaczN1cWRTeU5kdlg1NXc/ZT1ZVVV0Vjg=.mp3',
	cover: 'https://p2.music.126.net/NFl1s5Hl3E37dCaFIDHfNw==/727876697598920.jpg?param=130y130',
      },
	  {
	name: "追光者",
	artist: '岑宁儿',
	url: 'http://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9kYWJjb29vYWNuei1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9wYm0yNTc5X211YWJsX2NuL0VlbnNwVml4aWQ1Tmo1WWNMSXlyY0ZnQlRMMGF5ZEZhRjFxanhkaVFDcHFlZ3c/ZT1BSGJ4amM=.mp3',
	cover: 'https://p2.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg?param=130y130',
      },
          {
        name: "让酒",
        artist: '摩登兄弟',
        url: 'http://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9kYWJjb29vYWNuei1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9wYm0yNTc5X211YWJsX2NuL0VVOEJvSVE4bndSR3R3RTNrYWhxZnZJQmliY3loeDFGWkR1UENTeVZuX3VEMGc/ZT0xZ2F5cTY=.mp3',
        cover: 'https://p1.music.126.net/JtRFFxXdu4TiKAhK7JT4OQ==/109951163830435640.jpg?param=130y130',
      },
	  {
	name: "哪吒",
	artist: '蔡翊昇',
	url: 'http://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9kYWJjb29vYWNuei1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9wYm0yNTc5X211YWJsX2NuL0VjQlZXT2tiNHBKRnRqTXI3MDJubVFVQkhSNmh4VG45NkpBMS1PT000X2ZrNHc/ZT1BQkNrZGs=.mp3',
	cover: 'https://p1.music.126.net/Za_wWwp1CRCMAesBbE994A==/109951163023780798.jpg?param=130y130',
      },
	  {
        name: "Apologize",
        artist: 'Martin Ermen',
        url: 'http://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9kYWJjb29vYWNuei1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9wYm0yNTc5X211YWJsX2NuL0VkV2tEcnQ0aWt0RnJBSlFRd2sySi13QlNUdVBsS2lobVlpVy1qeTNTOFZmMVE/ZT1GckZPaUo=.mp3',
        cover: 'http://p1.music.126.net/-_6mcI4VV5IKaiwhUAytbg==/1791104441647901.jpg?param=130y130',
      },
	  {
        name: "River Flows in You",
        artist: 'Yiruma',
        url: 'http://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9kYWJjb29vYWNuei1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9wYm0yNTc5X211YWJsX2NuL0VWNWNLREtwdUtoUGh1VzN4VnltYkk4QllaSV9OWVhQQl80YVNhU01VUnlBcFE/ZT11YzBRNng=.mp3',
        cover: 'http://p1.music.126.net/8ZRSyI0ZN_4ah8uzsNd1mA==/2324367581169008.jpg?param=130y130',
      },
      {
        name: '惊蛰',
        artist: '音阙诗听/王梓钰',
        url: 'http://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly9kYWJjb29vYWNuei1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9wYm0yNTc5X211YWJsX2NuL0VjYmdEakNqQ3pkTnY3ZnhnMzQ4S2U4QnFhZExBeXBaTXRLaW5NSkhVcFlKMkE/ZT1EVnlaZ2w=.mp3',
        cover: 'http://p1.music.126.net/5MmXpaP9r88tNzExPGMI8Q==/109951163370350985.jpg?param=130y130',
      }
    ]
});
