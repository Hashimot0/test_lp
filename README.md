# Claude Code講座 ランディングページ

AIプログラミング講座のためのランディングページです。Next.js App RouterとTailwind CSSを使用して構築されています。

## 特徴

- **モダンなデザイン**: Tailwind CSSを使用した美しいUI
- **レスポンシブ対応**: モバイル、タブレット、デスクトップに対応
- **SEO最適化**: メタデータと構造化されたコンテンツ
- **アクセシビリティ**: アクセシブルなコンポーネント設計
- **パフォーマンス**: Next.js App Routerによる最適化

## セクション構成

1. **ヒーローセクション**: メインキャッチコピーとCTA
2. **特徴セクション**: 講座の6つの特徴
3. **カリキュラムセクション**: 16週間の学習プログラム
4. **講師紹介セクション**: 講師の経歴と専門分野
5. **受講生の声セクション**: 実際の受講生のレビュー
6. **料金プランセクション**: 3つの料金プラン
7. **FAQセクション**: よくある質問
8. **CTAセクション**: 最終的な行動喚起
9. **フッター**: リンクと連絡先情報

## 技術スタック

- **Next.js 14**: App Router
- **TypeScript**: 型安全性
- **Tailwind CSS**: スタイリング
- **Lucide React**: アイコン
- **React**: UIライブラリ

## セットアップ

### 前提条件

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### ビルド

```bash
# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start
```

## プロジェクト構造

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Hero.tsx
    ├── Features.tsx
    ├── Curriculum.tsx
    ├── Instructor.tsx
    ├── Testimonials.tsx
    ├── Pricing.tsx
    ├── FAQ.tsx
    ├── CTA.tsx
    └── Footer.tsx
```

## カスタマイズ

### 色の変更

`tailwind.config.js`の`primary`カラーを変更することで、ブランドカラーをカスタマイズできます。

### コンテンツの編集

各コンポーネントファイル内のテキストやデータを編集することで、コンテンツをカスタマイズできます。

### 新しいセクションの追加

1. `src/components/`に新しいコンポーネントを作成
2. `src/app/page.tsx`にインポートして追加

## デプロイ

### Vercel（推奨）

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

### その他のプラットフォーム

- Netlify
- AWS Amplify
- Google Cloud Platform

## ライセンス

MIT License

## お問い合わせ

ご質問やご要望がございましたら、お気軽にお問い合わせください。 