import React from "react";

const services = [
  { title: "Custom Software Development", desc: "We design scalable software solutions tailored to your business needs.", icon: "💻" },
  { title: "Cloud Computing Solutions", desc: "Secure cloud migration and management services.", icon: "☁️" },
  { title: "AI & Machine Learning", desc: "Leverage AI for automation and insights.", icon: "🤖" },
  { title: "E-Commerce Development", desc: "Robust and scalable online stores.", icon: "🛍️" },
  { title: "Web & Mobile App Development", desc: "High-performance apps for all platforms.", icon: "📱" },
  { title: "Cybersecurity Solutions", desc: "Protect your business from cyber threats.", icon: "🔒" },
  { title: "IT Consulting & Digital Transformation", desc: "Transform your business with the latest technology.", icon: "🔧" },
  { title: "SEO & Digital Marketing", desc: "Boost your online presence and traffic.", icon: "📈" },
];

const Services = () => {
  return (
    <div className="bg-gray-100 lg:mt-8 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-4">Empowering businesses with cutting-edge technology solutions.</p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 text-center shadow-lg rounded-lg">
  <h2 className="text-4xl font-extrabold tracking-wide">🚀 How We Work</h2>
  <p className="text-lg mt-3 opacity-90">Our streamlined process ensures top-notch results.</p>

  <div className="mt-8 space-y-6 max-w-2xl mx-auto">
    <div className="flex items-center justify-center space-x-4 bg-white bg-opacity-20 px-6 py-4 rounded-lg shadow-md hover:scale-105 transition">
      <span className="text-3xl">🔍</span>
      <p className="text-lg font-medium">Consultation - Understanding your business needs</p>
    </div>

    <div className="flex items-center justify-center space-x-4 bg-white bg-opacity-20 px-6 py-4 rounded-lg shadow-md hover:scale-105 transition">
      <span className="text-3xl">💡</span>
      <p className="text-lg font-medium">Strategy - Crafting a custom solution</p>
    </div>

    <div className="flex items-center justify-center space-x-4 bg-white bg-opacity-20 px-6 py-4 rounded-lg shadow-md hover:scale-105 transition">
      <span className="text-3xl">🚀</span>
      <p className="text-lg font-medium">Development - Building and testing your product</p>
    </div>

    <div className="flex items-center justify-center space-x-4 bg-white bg-opacity-20 px-6 py-4 rounded-lg shadow-md hover:scale-105 transition">
      <span className="text-3xl">✅</span>
      <p className="text-lg font-medium">Deployment - Ensuring seamless integration</p>
    </div>
  </div>
</section>

      {/* Industries We Serve */}
      <section className="container mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold text-center text-blue-600 tracking-wide">🌍 Industries We Serve</h2>
  <p className="text-lg text-gray-600 text-center mt-3">Delivering tailored solutions for diverse industries.</p>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mt-10 max-w-4xl mx-auto">
    {[
      { icon: "🏥", name: "Healthcare" },
      { icon: "🏦", name: "Finance & Banking" },
      { icon: "🛒", name: "Retail & E-Commerce" },
      { icon: "🎓", name: "Education & E-Learning" },
      { icon: "🏗️", name: "Real Estate" },
      { icon: "📱", name: "Startups" },
    ].map((industry, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-blue-500 hover:shadow-lg transition transform hover:-translate-y-2 duration-300"
      >
        <span className="text-4xl">{industry.icon}</span>
        <p className="mt-3 text-lg font-medium text-gray-700">{industry.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Why Choose Us */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <p className="mt-4">✅ Industry Experts | ✅ Agile Approach | ✅ 24/7 Support | ✅ Innovative Technology</p>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center">FAQs</h2>
        <div className="mt-6 space-y-4">
          <p>❓ How long does software development take? 📌 Typically 2-6 months, depending on complexity.</p>
          <p>❓ Do you integrate third-party APIs? 📌 Yes! We specialize in API development.</p>
          <p>❓ Do you offer post-development support? 📌 Absolutely! Ongoing maintenance available.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white text-center py-16">
        <h2 className="text-3xl font-semibold">Let's Build Something Great!</h2>
        <p className="mt-4">💬 Contact us today to discuss your project.</p>
        <div className="mt-6">
          <p>📞 Call Us: +1 234 567 890</p>
          <p>📩 Email: contact@yourcompany.com</p>
          <p>🌐 Visit: www.yourcompany.com</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
