export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Missing GEMINI_API_KEY' });
    }
  
    const { question } = req.body;
  
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }
  
    // 🔥 SHORTENED KNOWLEDGE BASE
    const KNOWLEDGE = `
  Sri Lanka Student Guidance:
  
  After O/L:
  - A/L streams: Science, Commerce, Arts, Technology
  - Vocational: VTA, NAITA, DTET (NVQ 1-4)
  - Professional: AAT, ICT certifications
  
  After A/L:
  - State University (free via Z-score)
  - Private Universities (SLIIT, NSBM, APIIT, IIT)
  - External Degrees (UoC, USJP)
  - Vocational (NVQ 5+)
  - Professional (CA, ACCA, CIMA)
  
  Z-Score ranges:
  - Medicine: 1.8+
  - Engineering: 1.4+
  - IT: 1.0+
  - Business: 0.8+
  
  Other options:
  - Study abroad (UK, Australia, Canada, Germany, Malaysia)
  - Freelancing (IT, design, marketing)
  - Online courses (Coursera, Google, Microsoft)
  
  Careers:
  - IT/Data: high demand
  - Accounting: high demand
  - Engineering, Medicine, Banking also strong
  
  Tip:
  If unsure → follow short course or vocational training.
  `;
  
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a friendly career guidance assistant for Sri Lankan students.
  Use ONLY the knowledge below. Be simple, short, and helpful.
  
  KNOWLEDGE:
  ${KNOWLEDGE}
  
  QUESTION: ${question}`
                  }
                ]
              }
            ]
          })
        }
      );
  
      const data = await response.json();
  
      console.log("Gemini response:", JSON.stringify(data, null, 2));
  
      if (!response.ok) {
        console.error("Gemini Error:", data);
        return res.status(500).json({
          error: data?.error?.message || "Gemini API error"
        });
      }
  
      const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  
      if (!answer) {
        console.error("Invalid Gemini response:", data);
        return res.status(500).json({ error: "Invalid response from AI" });
      }
  
      res.status(200).json({ answer });
  
    } catch (error) {
      console.error("Server Error:", error);
      res.status(500).json({ error: error.message });
    }
  }