---
id: 1
title: Simple Pages Builder
description: Simple Pages Builderは、Next.jsをベースとした静的サイトをVercelにホスティングできる一連の流れです。
slug: /simplepage-builder
---

## 概要

- Simplepage Builderは、Next.jsをベースとした静的サイトをVercelにホスティングできる一連の流れです。

## 使い方
### 1. Githubからリポジトリをフォークする
- Githubリポジトリにアクセスし「Fork」をクリックする。

![Fork_1](/img/poolmanager/spb_github_fork_1.png)  

- 設定は変更せず、「Create fork」をクリックする。

![Fork_2](/img/poolmanager/spb_github_fork_2.png)  

### 2. Blockfrost プロジェクトIDの取得
- Blockfrostアカウントをあらかじめ作成しておいてください。GoogleやGithubのアカウントで利用することができます。
- [Blockfrostのダッシュボード画面](https://blockfrost.io/dashboard) にアクセスし「＋ADD PROJECT」をクリックする。

![Blockfrost_1](/img/poolmanager/blockfrost_setup_1.png)  

- 「Project name」に任意のプロジェクト名を記入し、「Network」は「Cardano mainnet」が選択されていることを確認したら、「SAVE PROJECT」をクリックする。 

![Blockfrost_2](/img/poolmanager/blockfrost_setup_2.png)  

- 以下の「PROJECT ID」を環境変数として使用します。  
- 「PROJECT ID」は第三者に知られないようにしてください。(ここでは説明用として一時的なものを公開しています。)  

![Blockfrost_3](/img/poolmanager/blockfrost_setup_3.png)  

### 3. Vercelでサイトを公開する
:::tip 「Vercel」とは

Vercelとは、Single Pages Builderにも使用されているReactのフレームワーク「Next.js」や、状態管理ライブラリの「SWR」を開発・提供している会社です。また、静的サイトをホスティングできるサーバーも提供しており、以下はこのサーバーでサイトを公開する手順です。

:::

- GithubアカウントでVercelにログインします。




## 環境変数
- 設定可能な環境変数の一覧

|  条件  |  環境変数名  | 説明  |
|  ----  |  ----  |  --- |
|  必須  |  BLOCKFROST_API  |  Blockfrostの「PROJECT ID」  |
|  必須  |  USER_ID         | PoolManagerのユーザーID |
|  ？  |  USER_URL         | 編集中 |

## LICENSE
