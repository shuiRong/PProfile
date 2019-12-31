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
cp -R "${PProfile}/dist/" public/