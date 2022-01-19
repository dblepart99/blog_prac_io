---
emoji: ''
title: 정렬
date: '2022-01-19 06:37:47'
categories: 프로젝트
author: Hyunsoo
tags: mui material-ui material-icon navbar
---

## material 이란?

[material](https://mui.com/)은 UI 라이브러리 중 하나로 웹 개발 시 UI와 icon을 보다 쉽게 관리할 수 있게 도와주는 툴이다.

## 설치 방법

```shell
npm install @mui/material @emotion/react @emotion/styled
```

## material-ui 적용 방법

```javascript
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import QuizIcon from '@mui/icons-material/Quiz';
import ChatIcon from '@mui/icons-material/Chat';
```

import를 우선 해준다.

```javascript
function Navbar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //useState를 이용하여 클릭 event가 발생하면 값을 변경해준다.
  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
        <Tab label="Home" icon={<HomeIcon />} to="/" component={Link} />
        <Tab label="My Questions" icon={<QuizIcon />} to="/myquestions" component={Link} />
        <Tab label="My Answers" icon={<HomeIcon />} to="/myanswer" component={Link} />
        <Tab label="Ranking" icon={<ThumbUpIcon />} to="/ranking" component={Link} />
      </Tabs>
    </AppBar>
  );
  //Link component를 이용하여 화면 전환까지 넣어줄 수 있다.
}

export default Navbar;
```

```toc

```
