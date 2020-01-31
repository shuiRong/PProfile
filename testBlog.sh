#!/bin/bash

BlogFile=/Users/shuirong/Code/Blog
PProfile=/Users/shuirong/Code/PProfile

cd ${PProfile}
yarn build
cd ${BlogFile}
rm -rf public/*
hexo g
if  test -e "${BlogFile}/blog" 
then
    echo "存在"
else
    mkdir blog
fi
mv public/* blog
mv blog public
mv public/blog/blog/* public/blog
rm blog
cp -R "${PProfile}/dist/" public/

# -P 如果目标文件夹不存在就创建
# 将github年度报告复制过来
cp -RP "${GithubAnnualReport}/build/" public/github

# 本地测试博客运行
cd public
hs
