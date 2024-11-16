---
title: 操作手考核细则
date: 2024-10-02
updated: 2024-10-02
categories: Robomaster
tags:
  - RM
  - 操作手
top: 1
---

# 操作手考核

- 操作手考核主要分为三部分
  
1. 基本规则知识————**30%**
2. 基础能力测试————**40%**
3. 综合能力测试————**30%**

## 基本规则知识(30%)

- 基于[RoboMaster 2024机甲大师超级对抗赛比赛规则手册V2.1](https://terra-1-g.djicdn.com/b2a076471c6c4b72b574a977334d3e05/RM2024/RoboMaster%202024%20%E6%9C%BA%E7%94%B2%E5%A4%A7%E5%B8%88%E8%B6%85%E7%BA%A7%E5%AF%B9%E6%8A%97%E8%B5%9B%E6%AF%94%E8%B5%9B%E8%A7%84%E5%88%99%E6%89%8B%E5%86%8CV2.1%EF%BC%8820240722%EF%BC%89.pdf)中第**1～6**章中的内容考察
- 希望大家能够利用自己的课余时间对比赛赛制以及规则有一定的了解。（**PS：大家不必过于死记一些过于细节的内容**）
- 到时候会由我们出题，大家通过**学习通**在线答题
- **卷面分数 * 0.3**，即为本部分的得分

## 基础能力测试(40%)

1. **反应力测试(10%)**

[Reaction Time](https://humanbenchmark.com/tests/reactiontime)

2. **记忆力测试(10%)**

[Sequence Memory Test](https://humanbenchmark.com/tests/sequence)

3. **定位测试(10%)**

[Aim Trainer](https://humanbenchmark.com/tests/aim)

4. **跟随测试(10%)**
   
此项基于Steam平台上游戏[AimLab](https://store.steampowered.com/app/714010/Aimlabs/?curator_clanid=32874493&l=schinese)中的跟枪测试项目

- 此部分每一项的得分会根据所有人的排名，第一名满分为100分，后面依次递减5分，为你的得分，最终再*0.1为你的最终得分

**示例——反应力测试得分计算**

`算法实现`  

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int n;
    cout << "人数: ";
    cin >> n;

    vector<int> scores(n);
    cout << "请输入每个人的分数: ";

    for (int i = 0; i < n; ++i) {
        cin >> scores[i];
    }

    // 排序
    sort(scores.begin(), scores.end());

    // 计算最终分数
    vector<int> finalScores(n);
    for (int i = 0; i < n; ++i) {
        finalScores[i] = max(0, 100 - 5 * i); // 第一名100分，后面递减
    }

    // 输出结果
    cout << "最终分数为: " << endl;
    for (int i = 0; i < n; ++i) {
        cout << "第 " << (i + 1) << " 名: " << scores[i] << "ms " << "得分：" << finalScores[i] << endl;
    }

    return 0;
}
```
```cpp
输入 
3 
100 200 300

输出
第 1 名: 100ms 得分：100
第 2 名: 200ms 得分：95
第 3 名: 300ms 得分：90
```
## 综合能力测试(30%)

随机团队合作小游戏

打分根据多方面综合实际表现