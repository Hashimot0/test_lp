import { Brain, Clock, Users, Award, BookOpen, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI駆動学習',
    description: 'Claude Codeと一緒にプログラミングを学び、AIの力を活用した効率的な学習体験を提供します。'
  },
  {
    icon: Clock,
    title: '自分のペースで',
    description: '忙しい生活に合わせて、いつでもどこでも学習できます。動画とテキストで理解を深めましょう。'
  },
  {
    icon: Users,
    title: 'コミュニティサポート',
    description: '同じ目標を持つ仲間と交流し、質問や相談ができる活発なコミュニティに参加できます。'
  },
  {
    icon: Award,
    title: '実践的なスキル',
    description: '理論だけでなく、実際に使えるスキルを身につけ、ポートフォリオに載せられるプロジェクトを作成します。'
  },
  {
    icon: BookOpen,
    title: '段階的カリキュラム',
    description: '初心者から上級者まで、レベルに応じた段階的な学習カリキュラムで着実にスキルアップできます。'
  },
  {
    icon: MessageSquare,
    title: '専門家サポート',
    description: '経験豊富な講師があなたの学習をサポートし、質問に丁寧にお答えします。'
  }
]

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            なぜClaude Code講座を選ぶのか
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI時代のプログラミング学習を革新する、6つの特徴をご紹介します
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 