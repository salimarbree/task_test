import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Capture Engine
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered lead generation that captures, enriches, and scores
            prospects automatically.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-4">
                $150<span className="text-lg">/mo</span>
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full">
                Get Started
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <p className="text-4xl font-bold mb-4">
                $650<span className="text-lg">/mo</span>
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full">
                Get Started
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-4">
                $500<span className="text-lg">/mo</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">+ $25,000 setup</p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg w-full">
                Contact Sales
              </button>
            </div>
          </div>

          <Link
            href="/forms"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Build Your First Form →
          </Link>
        </div>
      </div>
    </div>
  );
}
