[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/gon-park/interactive-web)


<!-- TOC -->

- [interactive-web](#interactive-web)
  - [Idea](#idea)
  - [Build develop environment](#build-develop-environment)
    - [install yarn](#install-yarn)
    - [create-react-app install](#create-react-app-install)
    - [make react project](#make-react-project)
    - [start react](#start-react)
  - [To run CI](#to-run-ci)
    - [install eslint](#install-eslint)
    - [run CI link test](#run-ci-link-test)
  - [공통 주제(4개 다 하고, 순서를 정해서 먼저 한다)](#공통-주제4개-다-하고-순서를-정해서-먼저-한다)
    - [돌아가는 카드(성원)](#돌아가는-카드성원)
    - [이두희](#이두희)
    - [양(현지)](#양현지)
    - [surf forecast](#surf-forecast)
  - [Status](#status)
  - [참고](#참고)

<!-- /TOC -->
# interactive-web
웹페이지가 반응해

## Idea
- [x] 공통 블로그(포트폴리오) OK?
- [x] https://www.youtube.com/watch?v=cpEeqACsF_Q

## Build develop environment
### install yarn
yarn은 `javascript`의 package 관리 tool
```sh
# in MacOS
brew install yarn


yarn init
# package.json 생성
```
### create-react-app install
```sh
# create-react-app 은 react app 개발 환경을 쉽게 구축해주는 도구
yarn add create-react-app
```

### make react project
```sh
# `project_name`으로 디렉토리가 생성됨
yarn run create-react-app {{ project_name }}
```

### start react
```sh
yarn start
```

## To run CI
### install eslint
```sh
yarn add eslint
```

### run CI link test
```sh
yarn run eslint --init
```
을 수행하면 `yarn start` comile 시 eslint를 수행한다.

## 공통 주제(4개 다 하고, 순서를 정해서 먼저 한다)
### 돌아가는 카드(성원)
### 이두희
### 양(현지)
### surf forecast

## Status
![Jekyll site CI](https://github.com/gon-park/interactive-web/workflows/Jekyll%20site%20CI/badge.svg)

## 참고
- https://takeuu.tistory.com/142?category=752297