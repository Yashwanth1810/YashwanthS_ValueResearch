export const metadata = {
  title: "About | Yashwanth S – Valued Research Insights",
  description:
    "Learn about Yashwanth S, the analyst behind Valued Research Insights, focused on deep company analysis and long-term value investing.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">
        About Me
      </h1>

      <p className="text-lg leading-relaxed mb-4">
        Hi, I’m <strong>Yashwanth S</strong>, the creator of
        <strong> Valued Research Insights</strong>.
      </p>

      <p className="leading-relaxed mb-4">
        I am a long-term value investor and independent equity research analyst.
        My work focuses on identifying fundamentally strong Indian businesses
        with durable competitive advantages, sensible capital allocation, and
        long-term compounding potential.
      </p>

      <p className="leading-relaxed mb-4">
        This platform was created to share{" "}
        <strong>transparent, unbiased, and research-backed insights</strong> for
        retail investors. I do not provide tips or recommendations. Every
        article published here is meant purely for educational and analytical
        purposes.
      </p>

      <p className="leading-relaxed mb-4">
        My analysis typically covers business quality, financial strength,
        management integrity, industry structure, risks, and long-term growth
        drivers. I focus on <strong>deeply analyzing companies</strong> to
        explain why they perform the way they do, including both positive
        tailwinds and negative headwinds.
      </p>

      <p className="leading-relaxed mb-8">
        If you value clarity over noise and fundamentals over hype,
        you’re in the right place.
      </p>

      {/* Disclaimer Section */}
      <div className="border-t pt-6 text-sm text-gray-600">
        <p className="font-semibold mb-2">Disclaimer</p>
        <p>
          I am <strong>not a SEBI registered Research Analyst or Investment
          Advisor</strong>. The content published on this website represents my
          personal views and research for educational purposes only. It should
          not be construed as investment advice, stock recommendations, or a
          solicitation to buy or sell any securities. Readers are advised to do
          their own research or consult a qualified financial advisor before
          making any investment decisions.
        </p>
      </div>
    </main>
  );
}