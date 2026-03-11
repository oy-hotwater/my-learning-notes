# My Learning Notes (学習ログ & ナレッジベース)

- 日々の技術学習、概念の理解、トラブルシューティングの過程を記録した、私個人の技術ノートです。

- プログラミング・アルゴリズム・開発環境など、  
  学習した内容を整理しながら公開しています。

🌐 **Live Site:** [https://oy-hotwater.github.io/my-learning-notes/](https://oy-hotwater.github.io/my-learning-notes/)

---

## 目的 / Purpose

このリポジトリは以下を目的として運用しています。

- 技術学習の記録
- 知識の整理と再利用
- 将来の自分のためのナレッジベース
- 学習プロセスの可視化

## 構築アーキテクチャ / Architecture

「執筆の労力を最小化し、公開を全自動化する」ことを目的に、以下の構成で構築しました。これにより、Obsidianで書いた内容がcommit&syncショートカットキーによってサイトとして公開可能。

- **執筆環境**: Obsidian (ローカルMarkdown)
- **SSG (静的サイト生成)**: Quartz v4
- **CI/CD**: GitHub Actions
- **ホスティング**: GitHub Pages

```
Obsidian (Markdown)
↓
Quartz (Static Site Generator)
↓
GitHub Actions (CI/CD)
↓
GitHub Pages
```

## Design Philosophy

このリポジトリは次の思想で運用しています。

- **書く負担を減らす**
- **継続できる仕組みを作る**
- **知識を蓄積する**

そのため

- Markdown中心
- 自動公開
- シンプルな構成

を採用しています。

## Contents

現在記録している主な内容

- プログラミング学習
- アルゴリズム
- 開発環境の設定
- トラブルシューティング
- 技術メモ

今後も学習内容に応じて追加予定。

## Related Projects

開発した他のプロジェクト

- code-card  
  React + TypeScriptで開発中のカード型プログラミングゲーム

- pathfinding-visualizer  
  C++で実装した経路探索アルゴリズムの比較ツール

---

## 運用ポリシー

1. **プロセスを重視**: 単なるコードの切れ端ではなく、「なぜそう考えたか」「どこで詰まったか」という思考の軌跡を残す。
2. **ネットワーク化**: 知識を階層（フォルダ）ではなく、双方向リンクで繋ぐことで、技術の全体像を俯瞰する。

## License / ライセンス

This repository contains code derived from Quartz, which is licensed under the MIT License.

Unless explicitly stated otherwise, the notes, writings, and original images in this repository are not covered by the MIT License.
All original notes, written content, and original images are © oy-hotwater. All rights reserved.

Unauthorized copying, redistribution, or reuse of the original written content and original images is not permitted.

このリポジトリには、MITライセンスの Quartz 由来コードが含まれます。

ただし、明示しない限り、このリポジトリ内のノート本文・文章・自作画像は MIT ライセンスの対象ではありません。
オリジナルのノート、文章コンテンツ、画像の著作権は oy-hotwater に帰属します。無断転載・再配布・再利用を禁止します。

See also:

- `LICENSE` for the Quartz-derived code
- `CONTENT_LICENSE.md` for original notes and written content
