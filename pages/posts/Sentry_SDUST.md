---
title: Sentry_SDUST简易部署流程
date: 2024-11-15
updated: 2024-11-15
categories: Robomaster
tags:
  - RM
  - 视觉
top: 1
---

#  Sentry_SDUST简易部署流程

----

## 1、依赖

- **系统**
  - Ubuntu 22.04
  - ROS Humble (desktop-full)
- **库**
  - [LIVOX-SDK2](https://github.com/Livox-SDK/Livox-SDK2)
  - libpcl-ros-dev
  - eigen、pcl、opoencv、ceres等
  - 将fastdds改为cyclonedds并附上 export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp在命令行中
  - 安装sudo apt install ros-$ROS_DISTRO-joint-state-publisher-gui ros-$ROS_DISTRO-robot-state-publisher（很重要）
  - BehaviorTree.CPP

----

## 2、ROS2-Humble-*

**1、参考鱼香ROS手动安装[动手学鱼香ROS](https://fishros.com/d2lros2/#/humble/chapt1/get_started/3.%E5%8A%A8%E6%89%8B%E5%AE%89%E8%A3%85ROS2)**

```bash
#鱼香ROS2手动安装
#添加源
echo "deb [arch=$(dpkg --print-architecture)] https://repo.huaweicloud.com/ros2/ubuntu/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
#添加源对应密钥
sudo apt install curl gnupg2 -y
curl -s https://gitee.com/ohhuo/rosdistro/raw/master/ros.asc | sudo apt-key add -
#更新
sudo apt update    
#安装鱼香ROS2
sudo apt install ros-humble-desktop
#安装额外依赖
sudo apt install python3-argcomplete -y
#配置环境变量
source /opt/ros/humble/setup.bash
#添加系统默认环境变量
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc

```

**PS：出问题时卸载鱼香ROS**

```BASH
sudo apt remove ros-humble-*
sudo apt autoremove
```

**2、安装鱼香rosdepc**

``` bash
wget http://fishros.com/install -O fishros && . fishros
```

**选择安装rosdepc**

**3、安装Nav2**

```bash
 sudo apt install ros-humble-nav2-*
```

----

## 3、ROS 2 RMW for Eclipse Cyclone DDS

**1、安装**

```bash
sudo apt install ros-humble-rmw-cyclonedds-cpp
```

**2、设置环境变量**

```bash
export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp
```

----

## 4、Livox-SDK2

**1、安装CMake**

```bash
sudo apt install cmake
```

**2、安装Livox-SDK2**

```BASH
git clone https://github.com/Livox-SDK/Livox-SDK2.git
cd ./Livox-SDK2/
mkdir build
cd build
cmake .. && make -j
sudo make install
```

**3、移除**

```bash
$ sudo rm -rf /usr/local/lib/liblivox_lidar_sdk_*
$ sudo rm -rf /usr/local/include/livox_lidar_*
```

----

## 4、补充(很重要)

**1、**

```bash
sudo apt install ros-$ROS_DISTRO-joint-state-publisher-gui ros-$ROS_DISTRO-robot-state-publisher
```

**2、**

```bash
sudo apt install ros-humble-asio-cmake-module
```

## 5、部署

**1、安装依赖**

```bash
sudo apt-get install -y  libpcl-ros-dev
rosdep install --from-paths src --ignore-src -r -y
```

**2、编译**

```bash
colcon build --symlink-install
```

**3、注意修改**

- 将ICP中PCD文件路径进行更改
- 将Nav2中luanch的bringup_launch.py文件引用的2Dmap名称进行更改

**4、运行**

```bash
# 建图
./mapping.sh
# 导航
./nav.sh
#保存建图以及PCD文件
1.保存2D地图ros2 run nav2_map_server map_saver_cli -t map -f <mapname>
2.保存PCD文件ros2 service call /map_save std_srvs/srv/Trigger
```



