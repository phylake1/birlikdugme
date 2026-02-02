export default function ImportSection() {
  return (
    <section id="ithalat" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Global İthalat Ağımız
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Birlik Düğme olarak, dünya çapında güvenilir tedarikçilerle çalışarak, 
              en kaliteli ürünleri müşterilerimize ulaştırıyoruz.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Yılların deneyimi ve sektördeki güçlü konumumuzla, tekstil ticaretinde 
              güvenilir ortağınız olmaktan gurur duyuyoruz.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Geniş Tedarik Ağı
                  </h3>
                  <p className="text-gray-600">
                    Dünyanın dört bir yanından seçilmiş tedarikçilerle çalışıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Hızlı ve Güvenli Lojistik
                  </h3>
                  <p className="text-gray-600">
                    Zamanında teslimat garantisi ile global tedarik ağımız sayesinde 
                    ürünlerinizi hızlı ve güvenli şekilde ulaştırıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-gray-900 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Rekabetçi Fiyatlar
                  </h3>
                  <p className="text-gray-600">
                    Dünya standartlarında kaliteyi, rekabetçi fiyatlarla sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gray-900 rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Toplam Ülke</span>
                  <span className="text-3xl font-bold">25+</span>
                </div>
                <div className="h-px bg-gray-700"></div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Yıllık İthalat</span>
                  <span className="text-3xl font-bold">1000+</span>
                </div>
                <div className="h-px bg-gray-700"></div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Tedarikçi</span>
                  <span className="text-3xl font-bold">50+</span>
                </div>
                <div className="h-px bg-gray-700"></div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Müşteri Memnuniyeti</span>
                  <span className="text-3xl font-bold">%98</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
