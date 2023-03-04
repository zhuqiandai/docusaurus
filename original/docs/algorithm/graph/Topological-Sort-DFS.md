---
title: Togological Sort DFS
description: This is my first post on Docusaurus 2.
authors: wangzhaoxu
tags: [algorithm, graph]
hide_table_of_contents: false
---


## DFS 算法

> 每次遍历到最后，把终点元素推入栈中。最后逆向输出结果

```mermaid
flowchart LR
    建图 --> 建visited队列 --> 展开所有待访问visit --> DFS
```