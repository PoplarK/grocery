# 阿里云 ECS 云服务器初步配置

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


## To be continue....
