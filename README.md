[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/gon-park/interactive-web)
![Jekyll site CI](https://github.com/gon-park/interactive-web/workflows/Jekyll%20site%20CI/badge.svg)

<!-- TOC -->

- [1. interactive-web](#1-interactive-web)
  - [1.1. Idea](#11-idea)
  - [1.2. Build develop environment](#12-build-develop-environment)
    - [1.2.1. install yarn](#121-install-yarn)
    - [1.2.2. create-react-app install](#122-create-react-app-install)
    - [1.2.3. make react project](#123-make-react-project)
    - [1.2.4. start react](#124-start-react)
  - [1.3. To run CI](#13-to-run-ci)
    - [1.3.1. install eslint](#131-install-eslint)
    - [1.3.2. run CI link test](#132-run-ci-link-test)
  - [1.4. 공통 주제(4개 다 하고, 순서를 정해서 먼저 한다)](#14-공통-주제4개-다-하고-순서를-정해서-먼저-한다)
    - [1.4.1. 돌아가는 카드(성원)](#141-돌아가는-카드성원)
    - [1.4.2. 이두희](#142-이두희)
    - [1.4.3. 양(현지)](#143-양현지)
    - [1.4.4. surf forecast](#144-surf-forecast)
  - [1.5. 참고](#15-참고)

<!-- /TOC -->
# 1. interactive-web
웹페이지가 반응해

## 1.1. Idea
- [x] 공통 블로그(포트폴리오) OK?
- [x] https://www.youtube.com/watch?v=cpEeqACsF_Q

## 1.2. Build develop environment
### 1.2.1. install yarn
yarn은 `javascript`의 package 관리 tool
```sh
# in MacOS
brew install yarn


yarn init
# package.json 생성
```
### 1.2.2. create-react-app install
```sh
# create-react-app 은 react app 개발 환경을 쉽게 구축해주는 도구
yarn add create-react-app
```

### 1.2.3. make react project
```sh
# `project_name`으로 디렉토리가 생성됨
yarn run create-react-app {{ project_name }}
```

### 1.2.4. start react
```sh
yarn start
```

## 1.3. To run CI
### 1.3.1. install eslint
```sh
yarn add eslint
```

### 1.3.2. run CI link test
```sh
yarn run eslint --init

# package.json에 lint script 추가
> "lint": "eslint src/**/*.js"

yarn lint
```

사용법 참고
- [eslint src/**/*.js](https://eslint.org/docs/user-guide/configuring#adding-shared-settings)

## 1.4. 공통 주제(4개 다 하고, 순서를 정해서 먼저 한다)
### 1.4.1. 돌아가는 카드(성원)
### 1.4.2. 이두희
### 1.4.3. 양(현지)
### 1.4.4. surf forecast

## 1.5. 참고
- https://takeuu.tistory.com/142?category=752297