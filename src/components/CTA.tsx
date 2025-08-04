import { ArrowRight, Clock, Users, Award } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-primary-600">
      <div className="container-custom">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI時代のプログラマーになりませんか？
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            今すぐ始めて、未来のスキルを身につけましょう。
            30日間の無料体験で、Claude Codeの魅力を体験してください。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
              無料体験を始める
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              講座の詳細を見る
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary-200" />
              <div className="text-left">
                <p className="font-semibold">30日間無料体験</p>
                <p className="text-sm opacity-80">リスクなしで始められます</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary-200" />
              <div className="text-left">
                <p className="font-semibold">500名以上受講</p>
                <p className="text-sm opacity-80">実績豊富な講座です</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-primary-200" />
              <div className="text-left">
                <p className="font-semibold">返金保証付き</p>
                <p className="text-sm opacity-80">安心して受講できます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 