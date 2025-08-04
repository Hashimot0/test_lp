import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Claude Code講座
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              AI時代のプログラミング学習を革新する講座です。
              初心者から上級者まで、一人ひとりのレベルに合わせた学習体験を提供します。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">講座</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">カリキュラム</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">料金プラン</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">無料体験</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">よくある質問</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">サポート</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">コミュニティ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ヘルプセンター</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Claude Code講座. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@claudecode.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">03-1234-5678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 