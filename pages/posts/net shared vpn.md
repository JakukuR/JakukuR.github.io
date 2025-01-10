---
title: 使用Windows给Ubuntu（共享局域网+Clash代理共享）
date: 2025-1-10
updated: 2025-1-10
categories: CS
tags:
  - RM
  - 计算机网络
  - 局域网
top: 1
---

# 使用Windows给Ubuntu（共享局域网+Clash代理共享）

---

## 一、局域网共享

- **环境**

Windows * 1

Ubuntu * 1

网线 * 1 —— 构建局域网，用于ssh连接

### **插网线**，构建局域网

- 一端连接Windows，另一端连接Ubuntu

（1）在Ubuntu端，打开网络设置，设置为自动连接，其他不用更改

（2）Windows端

- 按`Win+R`，输入`ncpa.cpl`

- 此时弹出会***更改网络适配器* **的窗口，然后重新插拔网线，找到该网线对应的**以太网**

![1](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/1.png)

- 右键窗口中的`WLAN`，该设备为你的无线网卡，点击**属性**，选择**共享**

- 勾选**允许其他网络用户通过此计算机的Internet连接来连接**，然后在下方的**家庭网络连接**中选择**网线所对应的以太网**

![2](https://raw.githubusercontent.com/JakukuR/JakukuR.github.io/26a01e4b4153e44cc731c21537f78402a986a4ac/image/docker_rm_vision/2.png)

---

## 二、Clash局域网共享（基于局域网构建完成情况下）

#### 1、配置Clash

- 在`Windows`端，打开`Clash`
- 选择`General`，勾选`Allow LAN`，同时确保**代理开启**

![3](https://gitee.com/gsq0226/picture/raw/master/Snipaste_2025-01-10_19-55-25.png)

#### 2、Ubuntu网络代理修改

- 在`Windows`端，`Win` +` R ` 打开终端，输入`ipconfig`

- 查看你本机所连接网络的`IP`，如图片所示，查看你`IPv4`的地址

  ![4](https://gitee.com/gsq0226/picture/raw/master/Snipaste_2025-01-10_20-11-04.png)

- 在`Ubuntu`端，打开网络设置

- 点击 **Network Proxy**  的设置

- ![5](https://gitee.com/gsq0226/picture/raw/master/Snipaste_2025-01-10_20-19-00.png)

- 选择 **Manual**

- 将 **HTTP Proxy **修改为你刚才在`Windows`端查询到的`IP`，端口为`7890`

- ![5](https://gitee.com/gsq0226/picture/raw/master/Snipaste_2025-01-10_20-24-50.png)

### 大功告成，测试下是否可行

