import { ArrowRight, Code, Zap, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AIプログラミングの未来を体験
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Claude Codeで
            <span className="text-primary-600 block">プログラミングを学ぼう</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AIと一緒にコーディングを学び、実践的なスキルを身につけましょう。
            初心者から上級者まで、あなたのレベルに合わせた学習体験を提供します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary inline-flex items-center gap-2">
              無料体験を始める
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary">
              講座の詳細を見る
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-600" />
              <span>500名以上の受講生</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary-600" />
              <span>実践的なプロジェクト</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary-600" />
              <span>AI活用スキル</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 