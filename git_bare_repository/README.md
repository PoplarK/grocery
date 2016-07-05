# Git 祼仓库 (Bare Respository)



[![Git](https://git-scm.com/images/logo@2x.png)](https://git-scm.com/)

## 遭遇
之前购买了阿里云，想将代码保存在服务器里，但又不想搭建像 gitlab 这样的服务，因为买的服务器的配置太低，搭建之后服务器吃不消。而且我想要的仅仅是将代码保存在服务器里。

## 解决办法
解决办法就是用 git 祼仓库，利用 ssh 协议直接将代码提交 push 到服务器中的代码仓库中或从代码仓库中直接 clone 到本地。

## 具体操作：
### 1. 在服务器中创建 git 祼仓库，譬如：test

```
git init --bare test
```
> Terminal 中显示：  
> **Initialized empty Git repository in /home/username/git/test/**  
> 则表示创建成功。

**注意：**

* 命令中的 --bare 参数
* 这里是在 /home/username/git 目录下创建的仓库

### 2. 从服务器中 clone 代码库到本地

```
git clone ssh://username@server_location/home/username/git/test
```
此时，会提示你输入 username 在 server_location 这个服务器中的登录密码。

> Terminal 中显示：  
> warning: You appear to have cloned an empty repository.  
> Checking connectivity... done.  
> 则表示 clone 成功。

### 3. 在服务器中部署
服务器中 /home/username/git/test 这个代码库并不能被直接用于部署，因为它是 bare respository ，它没有 working tree ，在该目录中，我们看不到具体的代码文件（它就像是普通代码库中的 .git 目录）。

```
git clone /home/username/git/test
```

> clone 出普通的代码库用于部署。  

### 总结
这个方法基本是够用的，除了每次提交都需要输入用户登录密码较烦外，还算比较方便。若想更方便，可以通过 ssh key 验证的方法，下面有链接。

* [Git on the Server - Getting Git on a Server](https://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server)
* [Git on the Server - Setting Up the Server](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server)