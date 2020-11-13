# PProfile
> 一个用来展示个人项目/作品，以及导航到博客、Github等社交媒体的网页



**预览｜Preview**

![preview](./preview/preview.jpg)





**好好看～我该如何给自己也整一个？**

准备工作：

1. 安装[Node.js](https://nodejs.org/zh-cn/)
2. 安装`Git`



**开始**

```bash
// 下载项目到本地
git clone https://github.com/shuiRong/PProfile.git
cd PProfile
npm i // 如果遇到问题请全局安装[cnpm](https://developer.aliyun.com/mirror/NPM)，然后使用cnpm i
```

然后用编辑器打开项目，你只需要修改两处文件：

1. `src/views/Home.vue`，至于怎么修改，你参考我的博客页面，就是把我的名称，链接都改成你的即可。
2. `src/assets.data.js`，同上，把我的项目数据改成你的。

然后在项目根目录使用`npm build // 或者cnpm build`，把项目打包成静态文件，输出到`dist`文件夹。

但你会发现点击页面的`Blog`和`About`菜单还是会跳到我的内容页面。其实这部分页面（HTML文件）都在`public`文件夹下，你替换成自己的HTML，或者直接在`src/views/Home.vue`中删除掉对应的部分即可。