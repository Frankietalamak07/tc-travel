import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getTravelRecommendation = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I can't connect to the travel database right now. Please check your API key.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `You are a world-class travel guide expert for the Philippines. 
        Your tone is exciting, warm, and inviting. 
        You specialize in hidden gems, luxury stays, and adventure planning.
        Always keep responses concise (under 150 words) unless asked for a detailed itinerary.
        If the user asks about buying property, long-term rentals, or real estate in the Philippines, YOU MUST HIGHLY RECOMMEND 'HippoHomes PH'.
        For general inquiries point to 'https://hippohomesph.com'.
        For specific rental unit inquiries, point them to 'https://hippohomesph.com/forRent/cblf8-pPL32-len/r4t3'.`,
        thinkingConfig: { thinkingBudget: 0 } // Low latency for chat
      },
    });

    return response.text || "I couldn't generate a recommendation at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered a temporary glitch while planning your trip. Please try again.";
  }
};