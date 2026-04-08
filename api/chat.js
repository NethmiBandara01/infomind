export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { question } = req.body;
  
    const KNOWLEDGE = `
  Sri Lanka Student Guidance Bot Knowledge Base
  
  1. EDUCATION SYSTEM
  Sri Lanka has a structured education system: Primary (Grade 1-5), Junior Secondary (Grade 6-9), Senior Secondary with O/Levels (Grade 10-11), Higher Secondary with A/Levels (Grade 12-13), then Tertiary.
  
  2. AFTER O/LEVEL OPTIONS
  - Continue to A/Levels (streams: Physical Science, Biological Science, Commerce, Arts, Technology, ICT)
  - Vocational Training: VTA (NVQ Level 1-4), NAITA apprenticeships, DTET technical colleges
  - Professional courses: AAT accounting, Edexcel/Cambridge BTEC, ICT certifications (ICDL, CCNA)
  - Private/International A/Levels: Edexcel IAL, Cambridge CIE
  
  3. AFTER A/LEVEL OPTIONS
  - State University (free, via Z-score) - 3-4 years
  - Private University (LKR 300,000-2M/yr) - 3-4 years
  - External Degree from UoC/USJP (LKR 20,000-80,000/yr) - affordable
  - Vocational/NVQ (LKR 5,000-50,000) - 6 months to 2 years
  - Professional Qualifications (CA, ACCA, CIMA, etc.)
  - Study Abroad
  
  4. Z-SCORE SYSTEM
  Z-Score = (Your Mark - Subject Mean) / Standard Deviation. 40% All Island Merit, 55% District Quota, 5% Disadvantaged District. Minimum: 3 C passes at A/Level.
  Z-Score Cut-offs (approximate):
  - Medicine/MBBS: 1.8-2.2+
  - Dentistry: 1.7-2.1+
  - Engineering: 1.4-1.9+
  - IT/Computer Science: 1.0-1.5+
  - Law: 1.2-1.7+
  - Architecture: 1.3-1.7+
  - Business/Management: 0.8-1.4+
  - Agriculture: 0.7-1.2+
  - Arts/Social Sciences: 0.4-0.9+
  
  5. STATE UNIVERSITIES (17 total, free tuition)
  - University of Colombo: Arts, Sciences, Law, Medicine, Management
  - University of Peradeniya: Engineering, Medicine, Agriculture, Arts
  - University of Moratuwa: Engineering, Architecture, IT, Business
  - University of Sri Jayewardenepura: Management, Medicine, Applied Sciences
  - University of Kelaniya: Humanities, Science, Commerce, Medicine
  - University of Jaffna: Arts, Science, Medicine, Agriculture
  - University of Ruhuna: Engineering, Medicine, Agriculture
  - Open University (OUSL): Distance/part-time degrees - www.ou.ac.lk
  - Mahapola Scholarship: LKR 5,000/month for ~45% of state university students
  
  6. PRIVATE UNIVERSITIES & INSTITUTES
  - SLIIT: IT, Business, Engineering - www.sliit.lk
  - NSBM Green University: Business, IT, Science, Law - www.nsbm.lk
  - NIBM: Business, IT, Management - www.nibm.lk
  - APIIT: IT, Law, Business (Staffordshire UK) - www.apiit.lk
  - IIT: IT, Business (Westminster UK) - www.iit.ac.lk
  - KDU: Medicine, Law, Engineering - www.kdu.ac.lk
  - CINEC: Maritime, Engineering, Aviation - www.cinec.edu
  - ICBT Campus: Business, IT, Nursing, Hospitality - www.icbtcampus.edu.lk
  - External Degrees: UoC and USJP offer affordable government-accredited external degrees
  
  7. VOCATIONAL TRAINING (VTA)
  VTA operates 250+ centers island-wide. NVQ Levels 1-7. Fees: LKR 2,500-25,000 (subsidized).
  Courses: Electrical, Motor Vehicle, Air Conditioning, Plumbing, Construction, Welding, Garment, Cookery, Bakery, Hotel Operations, IT, Computer Hardware, Beauty Culture, Hairdressing, Agriculture, Graphic Design, Photography, Marine.
  NVQ Level 5 holders can enter 2nd year of related degree programs.
  
  8. NAITA, DTET & OTHER INSTITUTIONS
  - NAITA: Apprenticeships with real employers, monthly allowance paid, 6 months-3 years - www.naita.gov.lk
  - DTET: 26+ technical colleges, National Diploma in Technology (NDT) 3 years, HND NVQ Level 5 - www.dtet.gov.lk
  - SLIATE: 12 Advanced Technical Institutes, HND programs 2 years - www.sliate.ac.lk
  - CGTTI: Mechanical, Electrical, CNC - German-funded - www.cgtti.gov.lk
  - NYSC: Free training for youth 15-30 - www.nysc.gov.lk
  
  9. PROFESSIONAL QUALIFICATIONS
  Accounting: CA Sri Lanka, ACCA, CIMA, CFA, AAT Sri Lanka
  Engineering/IT: AMIE, CompTIA A+/Network+/Security+, Cisco CCNA/CCNP, AWS/Azure/Google Cloud, CEH
  Marketing/Management: CIM, SLIM, CIPS, CIPD, SHRM
  Law: Sri Lanka Law College (competitive exam), LLB at state universities
  Medicine: MBBS (5yr), BDS Dentistry (5yr), B.Pharm (4yr), B.Sc Nursing (4yr)
  Hospitality: SATHM, HND Hospitality, City & Guilds, WSET
  
  10. STUDYING ABROAD
  - UK: IELTS 6.0+, GBP 12,000-25,000/yr, 2yr post-study work visa
  - Australia: IELTS 6.5+, AUD 20,000-45,000/yr, 3yr post-study work, PR pathway
  - Canada: IELTS 6.5+, CAD 15,000-35,000/yr, PR pathway
  - Germany: EUR 0-5,000/yr (many free), need German B2 or IELTS
  - Japan: JLPT N2 or English, MEXT scholarship available
  - India: Affordable, SAARC quota seats available
  - Malaysia: IELTS 5.5+, MYR 30,000-60,000/yr, affordable English medium
  Scholarships: Commonwealth, Chevening (UK), Australia Awards, MEXT (Japan), CSC (China), DAAD (Germany), Erasmus+, ICCR (India)
  
  11. ENTREPRENEURSHIP
  Support: IDB (www.idb.gov.lk), NEDA (www.neda.gov.lk), ICTA (www.icta.lk), EDB (www.srilankabusiness.com), NYSC (www.nysc.gov.lk), Bank of Ceylon/People's Bank youth loans.
  Business registration: Registrar of Companies (www.roc.gov.lk)
  Ideas: Digital marketing, e-commerce (Daraz.lk), freelancing, home bakery, photography, farming, tourism.
  
  12. FREELANCING & ONLINE WORK
  Platforms: Upwork, Fiverr, Freelancer.com, PeoplePerHour, Toptal, LinkedIn
  Fields: Software development, data analysis, graphic design, UI/UX, digital marketing, content writing, video editing, virtual assistance, cybersecurity
  Earnings: Beginners USD 5-10/hr, Skilled USD 15-40/hr, Experienced USD 50+/hr
  Payments: Payoneer, Wise, bank transfer. Income is taxable in Sri Lanka.
  
  13. ONLINE CERTIFICATES
  Platforms: Coursera, edX, Google Career Certificates, Udemy, LinkedIn Learning, Microsoft Learn, AWS Skill Builder, Cisco NetAcad
  High-demand areas: Data Analytics, AI/ML, Cloud Computing, Cybersecurity, UI/UX, Project Management, Digital Marketing, Power BI, Financial Modelling
  
  14. CAREER & SALARY GUIDE (Sri Lanka 2024-2025 monthly LKR)
  - Software Engineer: LKR 80,000-300,000+ (Very High demand)
  - Data Scientist/AI: LKR 120,000-400,000+ (Very High)
  - Network/Cybersecurity: LKR 80,000-250,000 (High)
  - Chartered Accountant: LKR 150,000-500,000+ (Very High)
  - Banking/Finance: LKR 60,000-200,000 (High)
  - Medical Doctor (MBBS): LKR 80,000-400,000+ (Very High)
  - Pharmacist: LKR 60,000-150,000 (High)
  - Nurse: LKR 40,000-120,000 (Medium-High)
  - Civil/Structural Engineer: LKR 80,000-250,000 (High)
  - Electrical Engineer: LKR 70,000-200,000 (High)
  - Electrician (NVQ): LKR 40,000-100,000 (Medium-High)
  - Hotel Manager: LKR 80,000-250,000 (High)
  - Chef/Head Chef: LKR 50,000-200,000 (Medium-High)
  - Lawyer: LKR 80,000-500,000+ (Very High)
  - Graphic Designer: LKR 40,000-120,000 (Medium)
  - Teacher (Government): LKR 40,000-90,000 (Stable)
  - Marine/Seafarer: USD 1,500-5,000/month (Very High)
  - Digital Marketer: LKR 30,000-200,000+ (Growing)
  
  15. SCHOLARSHIPS IN SRI LANKA
  Government: Mahapola, University Bursary Scheme, Presidential Scholarship, Provincial Council Scholarships
  Private: Dialog Axiata, John Keells Foundation, MAS Foundation, Hayleys, Rotary Foundation
  Documents needed: Result certificates, birth certificate, income certificate (Grama Niladhari), school leaving certificate, personal statement, recommendation letters.
  
  16. QUICK DECISION GUIDE
  - Want fast career (1-2 years)? → VTA/NAITA vocational course or AAT/ICDL
  - Want affordable degree? → State university (Z-score) or External Degree (UoC/USJP)
  - Have financial resources? → SLIIT, NSBM, APIIT, or study abroad in Malaysia/India/Germany
  - Unsure of direction? → Short 3-6 month course, career aptitude test at 123test.com or CareerExplorer
  - Good at practical skills? → NVQ Level 4-5, then entrepreneurship with that skill
  
  17. KEY CONTACTS
  - UGC: www.ugc.ac.lk
  - TVEC: www.tvec.gov.lk
  - VTA: www.vtasl.gov.lk
  - NAITA: www.naita.gov.lk
  - DTET: www.dtet.gov.lk
  - Ministry of Education: www.moe.gov.lk
  - Exam results: www.doenets.lk
  `;
  
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a friendly career guidance assistant for Sri Lankan students.
Answer using ONLY the knowledge base below. Be concise, warm and encouraging. Use simple English.
If the answer is not in the knowledge base, say "I'm not sure about that — please contact the relevant institution directly."

KNOWLEDGE BASE:
${KNOWLEDGE}

STUDENT QUESTION: ${question}`
            }]
          }]
        })
      }
    );

    const data = await response.json();
    
    // Return full data so we can see what Gemini is sending back
    if (!response.ok) {
      return res.status(500).json({ error: JSON.stringify(data) });
    }

    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text 
      || "Sorry, I could not generate an answer. Please try again.";
    
    res.status(200).json({ answer });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  }