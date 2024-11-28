---
title: SDUST-Sandard rm_vision 本地部署流程
date: 2024-11-28
updated: 2024-11-28
categories: Robomaster
tags:
  - RM
  - 视觉
top: 1
---

# SDUST-Sandard rm_vision 本地部署流程

----

- ## 依赖环境 ##

  （1）**系统环境 **

  ​	1、Ubuntu-22.04

  ​	2、ROS2-Humble

  > **依赖库版本十分重要，编译错误请检查依赖库版本**

  （2）**依赖库**

  ​	1、Gflag-master

  ​	2、Glog-0.4.0

  ​	3、Solver-ceres-1.14.0

  ​	4、Eigen-3.2.5

  ​	5、fmt-9.1.0

  ​	6、海康相机驱动

- ## 构建以及使用

1、创建工作空间

```sh
$ mkdir sr_vision
$ cd  sr_vision
```

2、拷贝代码到本地

```sh
$ git clone https://gitee.com/sand--sm-team-visual-team/2025-standard-v1.0.git
```

3、使用rosdep安装依赖并编译

```sh
$ rosdep install --from-paths src --ignore-src -r -y
$ colcon build --symlink-install
```

4、运行单个节点（以常用的海康相机节点、识别（detector）结点、串口（serial）为例）

**[  ！！！] 运行每个节点前，必须新建终端并输入命令，且运行前需要执行**```source install/setup.bash```

```sh
$ ros2 launch hik_camera hik_camera.launch.py # 海康相机节点
$ ros2 run armor_decetor armor_detecto_noder # 识别节点
$ ros2 launch rm_serial_driver serial_driver.launch.py # 串口节点
```

5、运行整车代码

```sh
$ ros2 ros2 launch rm_vision_bringup vision_bringup.launch.py # 整车
```

- ## Foxglove可视化

1、[下载Foxglove客户端](https://foxglove.dev/download)

2、安装Foxglove-bridge

```sh
$ sudo apt install ros-humble-foxglove-bridge
```

3、连接数据

打开新终端，输入

```sh
$ ros2 launch foxglove_bridge foxglove_bridge_launch.xml
```

打开foxglove客户端

选择打开连接（Open a new connection），点击Open进入面板

![6](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/6.png)

4、开启调试

![10](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/refs/heads/main/image/docker_rm_vision/10.png)

5、查看不同信息

![11](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/refs/heads/main/image/docker_rm_vision/11.png)
