import { CheckCircle, Play, BookOpen, Code, Database, Globe } from 'lucide-react'

const modules = [
  {
    icon: BookOpen,
    title: 'モジュール1: 基礎知識',
    duration: '2週間',
    topics: [
      'プログラミングの基本概念',
      'Claude Codeの使い方',
      '開発環境の構築',
      'バージョン管理（Git）'
    ]
  },
  {
    icon: Code,
    title: 'モジュール2: フロントエンド開発',
    duration: '4週間',
    topics: [
      'HTML/CSS基礎',
      'JavaScript基礎',
      'React.js入門',
      'レスポンシブデザイン'
    ]
  },
  {
    icon: Database,
    title: 'モジュール3: バックエンド開発',
    duration: '4週間',
    topics: [
      'Node.js基礎',
      'Express.jsフレームワーク',
      'データベース設計',
      'API開発'
    ]
  },
  {
    icon: Globe,
    title: 'モジュール4: 実践プロジェクト',
    duration: '6週間',
    topics: [
      'フルスタックアプリケーション開発',
      'AI機能の統合',
      'デプロイメント',
      'ポートフォリオ作成'
    ]
  }
]

export default function Curriculum() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            学習カリキュラム
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            16週間でAI時代のプログラマーになるための包括的なカリキュラム
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <module.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {module.title}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {module.duration}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Play className="w-4 h-4" />
            合計16週間の学習プログラム
          </div>
          <p className="text-gray-600">
            週に10-15時間の学習時間を想定しています
          </p>
        </div>
      </div>
    </section>
  )
} 