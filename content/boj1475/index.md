---
emoji: ''
title: 백준-1475
date: '2021-07-21 01:19:01'
categories: 알고리즘
tags: 백준 알고리즘 백준 1475
---

[백준 1475 방 번호](https://www.acmicpc.net/problem/1475)

```
#include <bits/stdc++.h>
using namespace std;

int main(){

    int arr[10];
    fill(arr, arr+10, 0);
    int N;
    cin >> N;

    if(N==0){
        cout << 1;
        return 0;
    }

    while(N>0){
        int tmp = N%10;
        N/=10;
        arr[tmp]++;
    }

    arr[6] += arr[9];
    if(arr[6]%2!=0){
        arr[6]=arr[6]/2+1;
    }else{
        arr[6]/=2;
    }
    arr[9] = 0;
    int max = *max_element(arr, arr+10);
    cout << max;
    return 0;
}
```

문제에 의하면 6과 9는 뒤집어서 이용할 수 있습니다. 그래서 모든 6과 9의 갯수를 더한 후, 2로 나누어 세트의 개수를 구할 수 있습니다. ex) 6669 => 6을 2장, 9를 2장으로 만들 수 있음.
6과 9의 갯수를 더한 후, 2로 나누어줍니다. 만약 나머지가 있다면 한 세트를 더 뜯어야 한다는 뜻이므로 1을 더해줍니다.

<b>주의 사항</b>

0번 부터 9번까지의 숫자들이므로, 0 한 장만 입력받는 경우도 고려를 해야합니다.

```toc

```
