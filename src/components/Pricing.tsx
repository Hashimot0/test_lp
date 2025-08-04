import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'ベーシック',
    price: '29,800',
    period: '月',
    description: '個人学習に最適なプラン',
    features: [
      '全16週間のカリキュラム',
      '動画レッスン（100時間以上）',
      'テキスト教材',
      'コミュニティ参加',
      '質問サポート（平日9-18時）'
    ],
    popular: false
  },
  {
    name: 'プロフェッショナル',
    price: '49,800',
    period: '月',
    description: '本格的にスキルアップしたい方向け',
    features: [
      'ベーシックプランの全機能',
      '1対1メンタリング（月2回）',
      'ポートフォリオレビュー',
      '就職・転職サポート',
      '24時間質問サポート',
      '実践プロジェクトの追加'
    ],
    popular: true
  },
  {
    name: 'エンタープライズ',
    price: '99,800',
    period: '月',
    description: 'チームでの導入に最適',
    features: [
      'プロフェッショナルプランの全機能',
      'チーム向けカスタマイズ',
      '専任メンター',
      '企業研修対応',
      '修了証書発行',
      '継続サポート（6ヶ月）'
    ],
    popular: false
  }
]

export default function Pricing() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたの目標に合わせて最適なプランを選択してください
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white p-8 rounded-xl shadow-sm border-2 ${
              plan.popular ? 'border-primary-500 shadow-lg' : 'border-gray-200'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    人気
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    ¥{plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    /{plan.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                plan.popular
                  ? 'bg-primary-600 hover:bg-primary-700 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                {plan.popular ? '今すぐ始める' : 'プランを選択'}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            すべてのプランで30日間の無料体験が可能です
          </p>
          <p className="text-sm text-gray-500">
            * 料金は税込表示です。* 返金保証付き
          </p>
        </div>
      </div>
    </section>
  )
} 