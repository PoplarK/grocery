# Interview

## 唯品会

### Q: 前后端分离，前端如何部署（部署至哪里）？

### Q: Git workflow

#### 1. Git Flow

##### 特点：
```
项目存在 **两个** 长期分支：master & develop

项目存在 **三种** 短期分支（完成后即删掉）：feature & hotfix & release

一张图解释所有:
```

![git flow](http://nvie.com/img/git-model@2x.png)

##### 参考：
1. [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)
2. [Git分支管理策略](http://www.ruanyifeng.com/blog/2012/07/git.html)

##### 评价：
```
Git Flow 优点是清晰可控，缺点是相对复杂，而且 master 是创建代码库时的默认分支，但开发时要切换到 develop 分支，
经常切换太烦人。

更大问题在于，这个模式基于"版本发布"，目标是一段时间产生一个新版本。但是，很多网站项目是"持续发布"，代码一有变动，
就部署一次。这时，master 分支和 develop 分支和差别不大，没必要维护两个长期分支。（个人觉得比较适合敏捷开发）
```

#### 2. Github Flow

##### 特点：
```
项目只有 **一个** 长期分支：master ，其他开发分支甚至是 Fork 的 master 或其他开发分支都通过 Pull Request 的方式
合并到源代码库的 master 分支。
下图为源代码库的其他开发分支合并到 master 分支中:
```
![Pull Request](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015122305.png)

##### 具体步骤：
```
第一步：根据需求，从 master 拉出新分支，不区分功能分支或补丁分支。
第二步：新分支开发完成后，或者需要讨论的时候，就向 master 发起一个 pull request（简称 PR ）。
第三步：Pull Request 既是一个通知，让别人注意到你的请求，又是一种对话机制，大家一起评审和讨论你的代码。
对话过程中，你还可以不断提交代码。
第四步：你的 Pull Request 被接受，合并进 master ，重新部署后，原来你拉出来的那个分支就被删除。（先部署再合并也可。）
```

##### 评价：
```
Github flow 的最大优点就是简单，对于"持续发布"的产品，可以说是最合适的流程。
可是，有些时候代码合并进入 master 分支，并不代表它就能立刻发布，这种情况，只有 master 一个主分支就不够用了。
通常，你不得不在 master 分支以外，另外新建一个 production 分支跟踪线上版本。
```

#### 3. Gitlab Flow
##### 特点：
```
```