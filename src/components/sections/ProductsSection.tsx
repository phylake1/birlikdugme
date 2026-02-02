export default function ProductsSection() {
  // Placeholder product images - replace with actual product images
  const products = [
    {
      id: 1,
      title: "Premium Ceket Düğmeleri",
      category: "Metal Düğmeler",
    },
    {
      id: 2,
      title: "Klasik Düğme Serisi",
      category: "Plastik Düğmeler",
    },
    {
      id: 3,
      title: "Özel Tasarım Düğmeler",
      category: "Özel Üretim",
    },
    {
      id: 4,
      title: "Endüstriyel Düğmeler",
      category: "Endüstriyel",
    },
    {
      id: 5,
      title: "Dekoratif Düğmeler",
      category: "Dekoratif",
    },
    {
      id: 6,
      title: "Lüks Düğme Koleksiyonu",
      category: "Lüks Seri",
    },
  ]

  return (
    <section id="urunler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ürünlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geniş ürün yelpazemizle her ihtiyacınıza uygun çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square hover:shadow-xl transition-shadow duration-300"
            >
              {/* Placeholder for product image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {product.category}
                  </p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-300">{product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#iletisim"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Daha Fazla Bilgi İçin İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  )
}
