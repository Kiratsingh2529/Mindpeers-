import React from "react";

const Approach = () => {
  const cards = [
    {
      title: "Measurable",
      description:
        "Leveraging technology to collect, analyze & integrate data about how our mind impacts our lives.",
      img: "https://th.bing.com/th/id/OIP.gp2nSDSd_z81dTBhHosP2AAAAA?w=138&h=143&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "Neuroscience",
      description:
        "Providing insights & interactive tools on the most advanced learnings and findings from the field.",
      img: "https://th.bing.com/th/id/OIP.qd638EwcRY5kvtDDkAXboAAAAA?w=159&h=134&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "Positive Psychology",
      description:
        "Pioneering a strength-based approach for enhanced goal achievement and a clear sense of direction in life.",
      img: "https://th.bing.com/th/id/OIP.PMskgmRAKalSQD1tYnra4QAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 lg:px-16">
      <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Our Approach</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={card.img}
              alt={card.title}
              className="mx-auto mb-4 h-32 w-32 object-contain"
            />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-400">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          Download Our Whitepaper
        </a>
      </div>
    </section>
  );
};

export default Approach;
