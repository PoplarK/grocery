# 阿里云 ECS 云服务器初步配置

[![阿里云](https://img.alicdn.com/tps/TB11M4hLFXXXXXTXVXXXXXXXXXX-190-64.png)](https://www.aliyun.com/)

## 基本说明
购买的 ECS 云服务器使用的系统为 CentOS 7。

## 添加新用户，并设置为 sudoer
主要是为了避免直接使用 root 用户。
具体操作：
### 1. 新建用户组，譬如：group1

```
groupadd group1
```

### 2. 新建用户，譬如：user1 ，并指定该用户为 group1 的成员

```
useradd -g group1 user1
passwd user1 xxx
```

### 3. 设置为 sudoer

```
visudo
```
> 该命令是编辑 /etc/sudoers 文件，在文件中添加 user1  ALL=(ALL)  ALL 这样一行即可。

## ssh 登录
为了安全，要关闭 root 用户的 ssh 登录，并开启 user1 用户的 ssh 登录。
由于服务器使用的 CentOS 7 已经安装了 OpenSSH ，因此需要修改 /etc/ssh/sshd_config 文件即可。

* 将文件中 PermitRootLogin yes 这一行改为 PermitRootLogin no

* 在文件中添加 AllowUsers user1

* 然后重启 sshd 服务即可

## 安装 ftp server
主要是为了方便向服务器上传文件，这里使用非常好用的 vsftpd。

### 1. 安装 vsftpd

```
sudo yum install vsftpd
```


## openresty 环境搭建
### 1. install openresty

```
yum install yum-utils

yum-config-manager --add-repo https://openresty.org/package/centos/openresty.repo

yum install openresty
```

### 2. install luarocks

从 [luarocks](https://github.com/luarocks/luarocks/wiki/Download) 下载页面找到 luarocks 最新的版本，并下载下来解压
```
./configure --with-lua-include=/usr/local/openresty/luajit/include/luajit-2.1

make build

make install
```
`注意：--with-lua-include 后面的路径是存放 lua.h 的目录，这里使用了上步 openresty 里的 luajit 中的 lua.h （虽然 ali 的 CentOS 7.4 里安装了 lua ，但 configure 时，并没有自动检测到 lua.h 的所在目录）`

### 3. 嗯，似乎没了，写 lua 代码，让 openresty 跑起来吧

## To be continue....