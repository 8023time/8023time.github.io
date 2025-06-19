var posts=["2024/12/11/2024第十五届蓝桥杯CC++B组/","2024/12/22/GO/","2025/04/20/JavaScript-八股/","2024/12/01/JavaScript常用小知识/","2024/12/07/Map(C++)/","2024/12/01/Map/","2024/12/01/Math/","2024/12/01/Promise/","2024/11/15/JavaWeb后端/","2024/12/08/Set/","2025/01/20/Svelte/","2025/04/10/cst-exam/","2024/11/30/http协议/","2024/10/22/git学习/","2025/01/03/pair(c++)/","2024/12/30/set(c++)/","2025/03/09/react/","2025/01/15/stack(c++)/","2025/01/05/string(c++)/","2024/10/23/javascrit前端/","2024/12/01/this/","2024/12/30/unordered_map(c++)/","2024/12/30/unordered_set(c++)/","2025/01/03/vector(c++)/","2024/11/10/vue3语法/","2024/12/07/二叉排序树/","2024/12/01/二叉树/","2024/12/07/分块查找/","2024/11/26/动态爱心/","2024/12/10/动态规划/","2024/12/01/哈希/","2024/12/01/图论/","2024/12/16/字符串/","2024/10/15/开启我的个人之旅/","2024/11/20/手撕数据结构队列,以实现BFS算法,不使用原有的queue/","2024/12/16/数学/","2025/01/20/微信小程序/","2024/11/22/数据结构-实验一/","2024/12/11/数据结构-实验三/","2024/11/26/数据结构-实验二/","2024/12/14/数据结构-实验四/","2025/01/11/数据结构/","2024/11/29/数据结构12-二叉排序树/","2024/11/30/数据结构13-平衡二叉树/","2024/11/30/数据结构14-哈夫曼树/","2024/12/10/数据结构15-图的创建/","2024/11/27/数据结构基础10-二叉树的创建与三种遍历/","2024/11/28/数据结构基础11-线索二叉树的三种写法/","2024/12/22/数据结构课程设计/","2024/12/01/数组/","2025/02/26/登录页面设计/","2024/11/25/水墨画动态网页/","2024/12/14/递归/","2024/12/23/算法-二分查找详解[多语言实现]/","2024/12/17/算法-排序详解[多语言实现]/","2024/12/10/链表/","2025/05/20/HTML-CSS-补充学习/","2025/05/22/playwright前端测试/","2025/05/21/THREEjs/","2025/06/04/实现可过期的localstorage数据/","2025/05/20/微信小程序页面实现分享功能/","2025/06/06/vue源码分析/","2025/06/17/C-json-cjson.h/","2025/06/17/C-sysstat.h/","2025/06/17/C-unistd.h/","2025/06/17/C-pthread.h/","2025/06/17/C-arpainet.h/","2025/06/19/C++-list/","2025/06/19/C++-fstream/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"OI Wiki","link":"https://oi-wiki.org/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/oi-wiki.org.png","descr":"一个很好的算法学习网站"},{"name":"Csdn","link":"https://blog.csdn.net/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/csdn.png","descr":"一个不错的计算机学习网站","recommend":true},{"name":"GitHub","link":"https://github.com/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/github.jpg","descr":"最好用的代码托管平台","recommend":true},{"name":"Gitee","link":"https://gitee.com/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/gitee-icon-filled-256.png","descr":"国内代码托管平台"},{"name":"ChatGPT","link":"https://chatgpt.com/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/chatgpt.jpg","descr":"一个很好用的AI网站"},{"name":"Gemini","link":"https://gemini.google.com/app","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/f4a855188450701.65b6d6903dc33.png","descr":"谷歌旗下的AI产品"},{"name":"豆包","link":"https://www.doubao.com/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/logo_new.png","descr":"字节跳动旗下AI智能助手"},{"name":"力扣","link":"https://leetcode.cn/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/LeetCode.jpg","descr":"刷题网站","recommend":true},{"name":"洛谷","link":"https://www.luogu.com.cn/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/luogu.jpeg","descr":"刷题网站"},{"name":"codeforces","link":"https://codeforces.com/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/codeforces.jpg","descr":"刷题,比赛网站"},{"name":"Youtube","link":"https://www.youtube.com/","avatar":"https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png","descr":"全球最大视频网站"},{"name":"Twitter","link":"https://twitter.com/","avatar":"https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png","descr":"社交分享平台"},{"name":"bilibili","link":"https://www.bilibili.com/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/bilibili.jpg","descr":"常用来学习的视频平台","recommend":true},{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网志框架","recommend":true},{"name":"Vue","link":"https://cn.vuejs.org/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/vue.png","descr":"易学易用，性能出色，适用场景丰富的 Web 前端框架"},{"name":"React","link":"https://zh-hans.react.dev/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/61d65d01a06cc.png","descr":"用于构建 Web 和原生交互界面的库"},{"name":"Svelte","link":"https://www.svelte.cn/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/svelte-framework-logo-vector-28671201.jpg","descr":"编译型前端框架，无虚拟DOM"},{"name":"Element","link":"https://element-plus.org/zh-CN/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/20200519133744367.png","descr":"基于 Vue 3，面向设计师和开发者的组件库"},{"name":"Apache ECharts","link":"https://echarts.apache.org/zh/index.html","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/apache-echarts-logo.png","descr":"一个基于 JavaScript 的开源可视化图表库"},{"name":"寻觅~流光","link":"https://8023time.com/","avatar":"https://cdn.jsdelivr.net/gh/8023time/image-storage-address/basic-img/avatar.jpg","descr":"这是我","recommend":true},{"name":"lindaren","link":"https://lindaren-user.github.io/","avatar":"https://lindaren-user.github.io/img/avatar_hu17550748250494431831.png","descr":"无敌是多么寂寞"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };