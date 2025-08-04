'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'プログラミング初心者でも受講できますか？',
    answer: 'はい、もちろんです。基礎から丁寧に説明しますので、プログラミング経験がなくても安心して受講いただけます。AIの力を活用することで、より効率的に学習を進めることができます。'
  },
  {
    question: 'どのようなスキルが身につきますか？',
    answer: 'JavaScript、React、Node.jsなどの実践的なスキルに加えて、AIを活用した効率的な開発手法を学べます。また、ポートフォリオに載せられる実践的なプロジェクトも作成します。'
  },
  {
    question: '受講期間はどのくらいですか？',
    answer: '標準的な受講期間は16週間です。週に10-15時間の学習時間を想定していますが、ご自身のペースに合わせて進めることができます。'
  },
  {
    question: '質問サポートはどのように行われますか？',
    answer: '専用のコミュニティで質問を受け付けています。平日9-18時は講師が直接回答し、それ以外の時間もコミュニティメンバーがサポートします。'
  },
  {
    question: '修了後のサポートはありますか？',
    answer: 'はい、修了後もコミュニティへの参加が可能です。また、就職・転職サポートも含まれるプランもあります。'
  },
  {
    question: '返金保証はありますか？',
    answer: 'はい、30日間の無料体験期間中であれば、全額返金いたします。ご満足いただけない場合は、お気軽にお申し付けください。'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            受講前に気になる疑問にお答えします
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm mb-4">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            他にご質問がございましたら、お気軽にお問い合わせください
          </p>
          <button className="btn-secondary">
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  )
} 