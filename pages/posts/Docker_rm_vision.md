---
title: Docker部署rm_vision——保姆级流程
date: 2024-11-16
updated: 2024-11-16
categories: Robomaster
tags:
  - RM
  - 视觉
top: 1
---

# Docker部署rm_vision

## ~~___（网络）___~~网线调参 + 通过ssh在Vscode中查看/修改容器中的代码

- #### ***保姆级教程***

---

## 一、安装Docker

### 1、卸载Docker

- **由于部分NUC预装的Docker镜像版本可能过老，推荐安装最新的Docker，否则可能导致构建镜像时出现奇怪的报错**

  **（1）删除docker及安装时自动安装的所有包**

  ```sh
  $ apt-get autoremove docker docker-ce docker-engine  docker.io  containerd runc
  ```

  **（2）查看docker是否卸载干净**

  ```sh
  $ dpkg -l | grep docker
  $ dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P # 删除无用的相关的配置文件
  ```

  **（3）删除没有删除的相关插件**

  ```sh
  $ apt-get autoremove docker-ce-*
  ```

  **（4）删除docker**

  ```sh
  $ rm -rf /etc/systemd/system/docker.service.d
  $ rm -rf /var/lib/docker
  ```

  **（5）确定docker卸载完毕**

  ```sh
  $ docker --version
  ```

### 2、安装Docker

- **鱼香ROS一键安装**

  ```sh
  $ sudo wget http://fishros.com/install -O fishros && bash fishros
  ```

- **确定安装完成**

  ```sh
  $ docker --version
  ```

---

## 二、构建rm_vision镜像并部署（已经构建完成，可直接拉取，见步骤3）

### 1、创建镜像（基于本队代码）

- **构建Dockerfile文件，输入以下内容**

```dockerfile
FROM ros:humble-ros-base

RUN sed -i 's@http://archive.ubuntu.com/@http://mirrors.aliyun.com/@g' /etc/apt/sources.list
# create workspace
RUN mkdir /ros_ws
WORKDIR /ros_ws/

# clone projects
RUN git clone https://gitee.com/gsq0226/src.git && cd src

# install dependencies and some tools
RUN apt-get update && rosdep install --from-paths src --ignore-src -r -y && \
    apt-get install ros-humble-foxglove-bridge wget htop vim -y && \
    rm -rf /var/lib/apt/lists/*
    
# install dependencies
RUN apt-get update && \
    apt-get install -y \
    git \
    cmake \
    vim \
    libgflags-dev \
    libgoogle-glog-dev \
    ros-humble-asio-cmake-module
    
# install Abseil
RUN cd /tmp && \
    git clone https://github.com/abseil/abseil-cpp.git && \
    cd abseil-cpp && \
    mkdir build && \
    cd build && \
    cmake .. && \
    make -j4 && \
    make install && \
    rm -rf /tmp/abseil-cpp

# install Ceres Solver
RUN cd /tmp && \
    git clone https://gitee.com/mirrors/ceres-solver.git && \
    cd ceres-solver && \
    mkdir build && \
    cd build && \
    cmake -Dceres_use_absl=ON -Dabsl_BUILD_TESTING=OFF .. && \
    make -j4 && \
    make install && \
    rm -rf /tmp/ceres-solver

# setup zsh
RUN sh -c "$(wget -O- https://ghproxy.com/https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" -- \
    -t jispwoso -p git \
    -p https://ghproxy.com/https://github.com/zsh-users/zsh-autosuggestions \
    -p https://ghproxy.com/https://github.com/zsh-users/zsh-syntax-highlighting && \
    chsh -s /bin/zsh && \
    rm -rf /var/lib/apt/lists/*

# build
RUN . /opt/ros/humble/setup.sh && colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release

# setup .zshrc
RUN echo 'export TERM=xterm-256color\n\
source /ros_ws/install/setup.zsh\n\
eval "$(register-python-argcomplete3 ros2)"\n\
eval "$(register-python-argcomplete3 colcon)"\n'\
>> /root/.zshrc

# source entrypoint setup
RUN sed --in-place --expression \
      '$isource "/ros_ws/install/setup.bash"' \
      /ros_entrypoint.sh
```

- **构建镜像**

```sh
$ sudo docker buildx build -t rm_vision01 .
```

### **2、推送镜像至阿里云镜像仓库**

- **登录阿里云Docker Registry**

```sh
$ docker login --username=aliyun9970473437 crpi-f5v2195568vh2w3m.cn-qingdao.personal.cr.aliyuncs.com
```

- **将镜像推送至Registry**

  > [!NOTE]
  >
  > **当前镜像版本号为`01`（后续视情况更新）**
  >
  > **[ImageId]：参照本地仓库镜像ID**

```sh
docker login --username=aliyun9970473437 crpi-f5v2195568vh2w3m.cn-qingdao.personal.cr.aliyuncs.com
docker tag [ImageId] crpi-f5v2195568vh2w3m.cn-qingdao.personal.cr.aliyuncs.com/sr_vision/sr_vision01:[镜像版本号]
docker push crpi-f5v2195568vh2w3m.cn-qingdao.personal.cr.aliyuncs.com/sr_vision/sr_vision01:[镜像版本号]
```

#### 部分Docker常用命令

- **查询镜像信息**

```sh
$ docker images
```

`Example of terminal output message`

```sh
REPOSITORY                                                         TAG                 IMAGE ID            CREATED             VIRTUAL SIZE registry.aliyuncs.com/acs/agent                                    0.7-dfb6816         37bb9c63c8b2        7 days ago          37.89 MB
```

- **查询所有的容器**

```sh
$ docker ps -a
```

- **查询正在运行的容器**

```sh
$ docker ps
```

- **停止运行容器**

  新建终端

```sh
$ docker stop <CONTAINER ID>
```

- **重新开启容器**

```sh
$ docker start <CONTAINER ID>
```

> [!WARNING]
>
> **Docker中 `run` 和 `start` 的区别：`run` 命令只在第一次运行镜像操作时使用，相当于执行了两步操作，将镜像放入容器中然后将容器启动；而 `start` 命令在重新启动已经存在的镜像时使用，使用该命令需要知道容器的 `id` 或者名字。**

### 3、拉取镜像（可以直接从这步开始）

- **从Registry中拉取镜像**

  > [!IMPORTANT]
  >
  > **镜像版本号为`01`（后续视情况更新）**

```sh
$ docker pull crpi-f5v2195568vh2w3m.cn-qingdao.personal.cr.aliyuncs.com/sr_vision/sr_vision01:[镜像版本号]
```

- **查看镜像**

```sh
$ docker image
```

### 4、构建容器

**（1）构建开发容器rv_devel（名称可以自定义，但是懒得改了）**

```sh
$ docker run -it --name rv_devel \
  --privileged --network host \
  -v /dev:/dev \
  -v $HOME/.ros:/root/.ros \
  -v ws:/ros_ws \
  crpi-f5v2195568vh2w3m.cn-qingdao.personal.cr.aliyuncs.com/sr_vision/sr_vision01:01
```

**（2）构建运行容器rv_runtime**

```sh
$ docker run -d --name rv_runtime \
  --privileged --network host \
  -v /dev:/dev \
  -v $HOME/.ros:/root/.ros \
  -v ws:/ros_ws \
  crpi-f5v2195568vh2w3m.cn-qingdao.personal.cr.aliyuncs.com/sr_vision/sr_vision01:01
```

- **查看容器**

```sh
$ docker ps -a
```

---

## 三、在Windows远程连接Ubuntu使用Foxglove-bridge可视化运行

- **环境**

Windows * 1

Ubuntu * 1

网线 * 1 —— 构建局域网，用于ssh连接

### 1、**插网线**，构建局域网

- 一端连接Windows，另一端连接Ubuntu

（1）在Ubuntu端，打开网络设置，设置为自动连接，其他不用更改

（2）Windows端

- 按`Win+R`，输入`ncpa.cpl`

- 此时弹出会***更改网络适配器* **的窗口，然后重新插拔网线，找到该网线对应的**以太网**

![1](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/1.png)

- 右键窗口中的`WLAN`，该设备为你的无线网卡，点击**属性**，选择**共享**

- 勾选**允许其他网络用户通过此计算机的Internet连接来连接**，然后在下方的**家庭网络连接**中选择**网线所对应的以太网**

![2](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/2.png)

- 查找设备的 IP 地址

  使用快捷键 `Win+R` 键，打开 Win 系统的运行窗口，在运行窗口下输入`CMD`回车，输入`arp -a`，在接口`192.168.137.1`网段下为动态类型的 IP 地址，默认第一个 IP 就是对应设备的 IP 地址。

  ![3](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/3.png)

  **PS：如果没有则重新插拔Ubuntu设备上的网线** 

  - 在Ubuntu一端，你也可以通过以下命令**查询/获取IP**

    ```sh
    $ ifconfig
    ```

### 2、ssh连接 && Foxglove可视化运行

- **在Windows中下载客户端**

首先确保你已经下载安装了[Foxglove客户端](https://foxglove.dev/download)

- **ssh连接**（该流程以我部署的为例）

1. `Win+R`，输入`CMD`回车，打开终端，在终端中输入`ssh j11218cpu@192.168.137.244`

   > **j11218cpu@192.168.137.244为你的终端名+IP地址**
   >
   > 实验室NUC密码为：j11218cpu
   >
   > 实验室NX密码为：j11218nx

2. 输入Ubuntu的管理员密码，此时你已经进入了Ubuntu的终端中 

   ![4](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/4.png)

- **运行Docker容器**

1. 启动开发容器

- 在终端中输入

```sh
#启动容器
$ docker start rv_devel 
#进入开发容器中
$ docker attach rv_devel 
```

![5](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/5.png)

- 随后输入命令，启动`rm_vision`

```sh
$ ros2 launch rm_vision_bringup vision_bringup.launch.py
```

2. 启动运行容器 

- 在终端输入

```sh
#启动容器
$ docker start rv_runtime 
#进入运行容器中
$ docker attach rv_runtime
```

- 随后输入命令，运行可视化端口（发布数据）

  **PS：端口默认开放为8765** 

```sh
$ ros2 launch foxglove_bridge foxglove_bridge_launch.xml port:=8765
```

- **Foxglove可视化**

打开 `Foxglove`，选择 `Open Connection`

将默认的`localhost`修改为**” Ubuntu的IP地址 “**——演示为`192.168.137.244`

![6](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/6.png)

### 3、通过ssh在Vscode中查看/修改容器中的代码

- 打开`Vscode`，选择左侧栏中的拓展应用商店，搜索下载`Remote - SSH`
- 下载完毕之后，输入快捷键 `Ctrl+Shift+P` ，打开Vscode的命令运行框

1. 输入`Remote-SSH`，在下方弹出的选项中选择`Remote-SSH:连接到主机/Connect to Host...`（汉化/未汉化）

![7](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/7.png)

2. 点击**添加新的SSH主机**

3. 输入**Ubuntu主机名+IP地址**（eg. j11218cpu@192.168.137.244）

4. 输入Ubuntu管理员密码，添加完成
5. 随后第一步，选择连接你刚才添加的主机，然后**在弹出的新窗口中输入管理员密码**，这样你就成功进入了Ubuntu中，左下角可见

![8](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/8.png)

- 进入容器
  1. 点击左下角，在上方弹出的选择框内选择**附加到正在运行的容器/Attach to Running Container**

![9](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/9.png)

2. 选择rv_devel，进入开发容器中，此时就可以编辑代码了