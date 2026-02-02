export default function QualitySection() {
  return (
    <section id="kalite" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ürün Kalitesi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Birlik Düğme olarak, müşterilerimize en yüksek kalitede ürünler sunmayı hedefliyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sertifikalı Kalite
            </h3>
            <p className="text-gray-600">
              Tüm ürünlerimiz uluslararası kalite standartlarına uygun olarak üretilir ve sertifikalandırılır.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Dayanıklılık
            </h3>
            <p className="text-gray-600">
              Ürünlerimiz uzun ömürlü ve dayanıklıdır. Yıllarca kullanım sonrası bile performansını korur.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Özenli İşçilik
            </h3>
            <p className="text-gray-600">
              Her ürün, geleneksel zanaatkarlık ile modern üretim tekniklerinin birleşimiyle yaratılır.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
