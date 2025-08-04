import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: '佐藤 花子',
    role: 'Webデザイナー',
    content: 'Claude Code講座を受講して、AIを使った効率的な開発手法を学ぶことができました。今では以前の3倍のスピードでプロジェクトを進められるようになりました。',
    rating: 5
  },
  {
    name: '山田 次郎',
    role: 'エンジニア転職希望',
    content: 'プログラミング初心者でしたが、この講座で基礎から応用までしっかり学べました。AIの活用方法も身につき、転職活動でも大きな武器になりました。',
    rating: 5
  },
  {
    name: '鈴木 美咲',
    role: 'フリーランス開発者',
    content: '実践的なプロジェクトを通じて、実際に使えるスキルを身につけることができました。コミュニティも活発で、質問にもすぐに答えてもらえます。',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            受講生の声
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            実際に講座を受講された方々の生の声をお聞きください
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            平均評価: 4.9/5.0
          </div>
          <p className="text-gray-600">
            500名以上の受講生から高い評価をいただいています
          </p>
        </div>
      </div>
    </section>
  )
} 