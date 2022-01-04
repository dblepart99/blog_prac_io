---
emoji: ''
title: 백준 10807
date: '2021-07-18 01:40:24'
categories: 알고리즘
tags: 백준 알고리즘 백준-10807
---

[백준 10807 개수 세기](https://www.acmicpc.net/problem/10807)

```c++
#include <bits/stdc++.h>
using namespace std;

int main(){
    int arr[201];
    fill(arr, arr+201, 0);
    int N, tmp;
    cin >> N;
    for(int i = 0; i < N; i++){
        cin >> tmp;
        arr[tmp+100]++;
    }
    cin >> tmp;
    cout << arr[tmp+100];

    return 0;
}
```

입력받을 수 있는 숫자의 범위는 -100에서 100까지 총 201개입니다. 길이가 201인 int형 배열을 선언합니다.
fill함수를 이용하여 배열 전체를 0으로 초기화해줍니다. 0은 -100에서 100까지의 수 중에서 101번째의 숫자이므로, 입력받은 수 + 100 의 index의 값을 +1을 해주며 입력받은 숫자의 갯수를 세줍니다.
마지막으로 입력받은 숫자의 횟수를 출력합니다.

```toc

```
