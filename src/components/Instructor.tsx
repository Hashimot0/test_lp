import { Award, Users, BookOpen, MessageSquare } from 'lucide-react'

export default function Instructor() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            講師紹介
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            豊富な経験を持つ専門家があなたの学習をサポートします
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-200 w-64 h-64 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-gray-500 text-lg">講師写真</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              田中 太郎
            </h3>
            <p className="text-lg text-primary-600 font-medium mb-6">
              AIプログラミング専門講師
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              10年以上のプログラミング経験を持ち、AI技術の活用に精通しています。
              Claude Codeを使った効率的な開発手法を研究し、多くの開発者に指導を行ってきました。
              初心者から上級者まで、一人ひとりのレベルに合わせた丁寧な指導が特徴です。
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-semibold text-gray-900">10年+</p>
                  <p className="text-sm text-gray-600">開発経験</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-semibold text-gray-900">500名+</p>
                  <p className="text-sm text-gray-600">指導実績</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-semibold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">プロジェクト</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-semibold text-gray-900">24時間</p>
                  <p className="text-sm text-gray-600">サポート</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-3">専門分野</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'Python', 'AI/ML', 'Claude Code'].map((skill, index) => (
                  <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 