---
id: 1
title: Simple Pages Builder
description: Simple Pages Builderは、Next.jsをベースとした静的サイトをVercelにホスティングできる一連の流れです。
slug: /simple-pages-builder
---

## はじめに
- Simple Pages Builder(以下、SPBと省略する場合があります)は、SPOのための静的サイトをホスティングできる一連の流れです。  
対応ホスティング先 ： [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), [GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages)など  

### Simple Pages Builderを活用するメリットとデメリット
- メリット
  1. 追加的コストを削減できる。(無料で運用できるように設計されています)
  2. 2ステップで素早く簡単にサイトを作成できる。
  3. 独自ドメインを設定できる。
  4. ホスティング先を選べる。

- デメリット
  1. 表現できることが限られているので独自性が出しにくい。

## 使い方
### 1. Githubからリポジトリをフォークする
Githubリポジトリにアクセスし「Fork」をクリックする。  

![Fork_1](/img/poolmanager/spb_github_fork_1.png)  

- 設定は変更せず、「Create fork」をクリックする。  

![Fork_2](/img/poolmanager/spb_github_fork_2.png)  

### 2. 環境変数を設定する
「Settings」タブを開き、サイドバーにある「Secrets and variables」の中の「Actions」をクリックする。  

![Github_Actions_1](/img/poolmanager/github_actions_1.png)  

「New repository secret」をクリックし、以下の表と写真を参考に環境変数をそれそれ設定してください。  

|  設定  |  Name  | Secret  |
|  ----  |  ----  |  --- |
|  必須  |  POOL_ID  | 「pool...」で始まるプールID  |
|  必須  |  EX_METADATA  | プール拡張メタデータのURLパス  |

![Github_Actions_3](/img/poolmanager/github_actions_3.png)  

### 3. サイトをビルドして公開する
環境変数の設定ができたら、Settings からサイドバーの「Pages」を選択し「Source」を「Github Actions」に変更します。

![Github_Actions_4](/img/poolmanager/github_actions_5.png)  

「Actions」タブに移動し、左サイドバーにある「Deploy Next.js site to Pages」を選択します。  
「Run Workflow」を開き、緑色の「Run workflow」をクリックするとサイト構築が開始されます。

![Github_Actions_5](/img/poolmanager/github_actions_4.png)  

ビルド中はWorkflow名の左側のステータスが黄色く点滅します。  
ビルドに成功するとステータスが緑色のチェックマークに変わります。

成功のステータスを確認できたら作業は以上です。お疲れ様でした！

![Github_Actions_6](/img/poolmanager/github_actions_6.png)  

:::tip サイトが構築される仕組み
ForkしたSPBのリポジトリには Github Actions の Workflow というものが設定されています。  
Workflowとは「このタイミングでこの作業をしてください」という指示が書かれたファイルで、Github Actions はそのファイルよ読み、実行してくれるサービスです。
現在SPBの Workflow では、「Run workflow」をクリックするか、あるいはリポジトリを同期したタイミングで自動でサイトがビルドされるように設定されています。  
[#Github Actions](https://docs.github.com/ja/actions)　
[#Workflow](https://docs.github.com/ja/actions/using-workflows/workflow-syntax-for-github-actions)  
:::

### 次のステップ


## 環境変数
### 最低限設定しておかなければいけない環境変数
- ホスティング先にかかわらず、設定が必要な環境変数です。

|  条件  |  環境変数名  | 説明  |
|  ----  |  ----  |  --- |
|  必須  |  POOL_ID  | 「pool...」で始まるプールID  |
|  必須  |  EX_METADATA  | プール拡張メタデータのURLパス  |

### 任意で設定できる環境変数
- 「Simple Pages Builder」で作成したサイトでより独自性を表現するために「[Pool Manager](https://poolmanager.vercel.app/)」 を提供しています。
あなたのプールがツールや追加的なサービスを提供している、あるいは他のプールとの違いをより詳細に説明したい場合は、以下の環境変数を設定しPool Managerで提供したい情報を作成してください。

|  環境変数名  | 説明  |
|  ----  |  --- |
|  USER_ID  | Pool ManagerのユーザーID |
|  SPB_TYPE  | PoolManager |

## LICENSE
[MIT License](https://github.com/449sabu/poolmanager-spb/blob/main/LICENSE)  
