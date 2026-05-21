export default function RiseRahamaInitiativeWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-pink-50 to-orange-50 opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-white shadow px-4 py-2 mb-6 text-sm font-medium text-rose-700">
                RiseRahama Initiative
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
                Empowering Women.
                <span className="block text-rose-600">Protecting Futures.</span>
              </h1>

              <p className="mt-8 text-lg lg:text-xl leading-relaxed text-gray-600 max-w-2xl">
                RiseRahama Initiative is dedicated to amplifying women's voices, fighting domestic violence, reducing poverty, and advancing girl child education through advocacy, community support, and empowerment programs.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-rose-600 hover:bg-rose-700 transition text-white px-8 py-4 text-lg font-semibold shadow-lg">
                  Join Our Mission
                </button>

                <button className="rounded-2xl border border-rose-300 hover:border-rose-500 hover:bg-rose-50 transition px-8 py-4 text-lg font-semibold text-rose-700">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-[2rem] shadow-2xl p-8 border border-rose-100">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                  alt="Women empowerment"
                  className="rounded-3xl h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
              alt="Community support"
              className="rounded-[2rem] shadow-xl object-cover h-[450px] w-full"
            />
          </div>

          <div>
            <p className="text-rose-600 font-semibold uppercase tracking-widest mb-3">
              Who We Are
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Creating Safe Communities and Equal Opportunities
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We believe every woman and girl deserves dignity, safety, education, and the opportunity to thrive. RiseRahama Initiative works with communities to challenge injustice, support survivors of domestic violence, and empower families through education and economic resilience.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                <h3 className="font-bold text-xl text-rose-700 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  A society where women and girls live free from violence, poverty, and discrimination.
                </p>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <h3 className="font-bold text-xl text-orange-700 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To advocate, educate, and empower vulnerable women and girls through sustainable community initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-rose-600 font-semibold uppercase tracking-widest">
              What We Do
            </p>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
              Our Core Focus Areas
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Through advocacy, outreach, mentorship, and education, we work to transform lives and communities.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-rose-50 p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-5">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ending Domestic Violence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting survivors, creating awareness, and advocating for safer homes and stronger protections for women and children.
              </p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-5">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Poverty Reduction
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering women and families through skills development, mentorship, entrepreneurship, and economic support programs.
              </p>
            </div>

            <div className="rounded-3xl bg-pink-50 p-8 shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-5">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Girl Child Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Promoting access to education, mentorship opportunities, and leadership development for girls in underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <p className="text-rose-600 font-semibold uppercase tracking-widest">
            Our Impact
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
            Building Hope Through Action
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100">
            <h3 className="text-5xl font-extrabold text-rose-600">500+</h3>
            <p className="mt-3 text-gray-600 font-medium">Women Reached</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100">
            <h3 className="text-5xl font-extrabold text-orange-500">120+</h3>
            <p className="mt-3 text-gray-600 font-medium">Girls Supported</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100">
            <h3 className="text-5xl font-extrabold text-pink-500">30+</h3>
            <p className="mt-3 text-gray-600 font-medium">Community Programs</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100">
            <h3 className="text-5xl font-extrabold text-rose-500">10+</h3>
            <p className="mt-3 text-gray-600 font-medium">Partner Organizations</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Together We Can Rise.
          </h2>

          <p className="mt-8 text-xl text-rose-100 leading-relaxed max-w-3xl mx-auto">
            Join RiseRahama Initiative in creating a future where every woman and girl can live safely, learn freely, and thrive with dignity.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="bg-white text-rose-700 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-rose-50 transition shadow-xl">
              Become a Volunteer
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-rose-700 transition">
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Programs Section */}
      <section className="bg-rose-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-rose-600 font-semibold uppercase tracking-widest">
              Our Programs
            </p>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
              Empowering Women and Girls Across Communities
            </h2>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
                alt="African girl education"
                className="h-64 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Supporting girls with school supplies, tuition assistance, mentorship, and leadership opportunities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd59a93f7d0f?q=80&w=1200&auto=format&fit=crop"
                alt="African women empowerment"
                className="h-64 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Women Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Equipping women with entrepreneurship, financial literacy, and vocational training opportunities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop"
                alt="Community outreach Africa"
                className="h-64 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Outreach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Organizing awareness campaigns, counseling support, and advocacy initiatives against domestic violence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-white rounded-[2rem] shadow-2xl p-10 border border-gray-100 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-rose-600 font-semibold uppercase tracking-widest">
              Contact Us
            </p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Partner With RiseRahama Initiative
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Whether you want to volunteer, donate, sponsor a girl’s education, or partner with us, we would love to hear from you.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <p>📍 Kampala, Uganda</p>
              <p>📧 info@riserahama.org</p>
              <p>📞 +256 XXX XXX XXX</p>
            </div>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-2xl border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full rounded-2xl border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-rose-400"
            ></textarea>

            <button className="bg-rose-600 hover:bg-rose-700 transition text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-300 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white">
              RiseRahama Initiative
            </h3>
            <p className="mt-4 leading-relaxed text-gray-400">
              Advocating for women's rights, empowering communities, and advancing girl child education for a brighter future.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Focus Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Domestic Violence Advocacy</li>
              <li>Women Empowerment</li>
              <li>Girl Child Education</li>
              <li>Community Outreach</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@riserahama.org</li>
              <li>Phone: +256 XXX XXX XXX</li>
              <li>Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm px-6">
          © 2026 RiseRahama Initiative. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
