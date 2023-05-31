#!/bin/bash
# chmod u+x deploy.sh
# git branch -D gh-pages
# # pnpm docs:update-package
# pnpm docs:build
# mkdir ./new_folder
# mv ./src/.vuepress/dist/* ./new_folder

# git checkout -b gh-pages

# # 遍历当前目录下的所有目录和文件
# for file in *; do
#   # 如果文件或目录名称不是 new_folder、.git 或 .github
#   if [[ $file != "new_folder" && $file != ".git" && $file != ".github" && $file != "deploy.sh" ]]; then
#     # 如果是目录，则递归删除
#     if [[ -d $file ]]; then
#       rm -rf "$file"
#     # 如果是文件，则直接删除
#     else
#       rm -f "$file"
#     fi
#   fi
# done

# mv new_folder/* ./ 
# rm -d new_folder

# git add .
# git commit -m "update"
# git push -f origin gh-pages

# git checkout main

rm -rf ./docs/*
pnpm docs:build
mv ./src/.vuepress/dist/* ./docs
git add .
git commit -m "update"
git push
