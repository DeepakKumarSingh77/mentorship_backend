import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai"; 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const summarizeText = async (req, res) => {
  try {
    const { text } = req.body;

    // Validation
    if (!text) return res.status(400).json({ message: "Text is required" });
    if (text.length < 50) return res.status(400).json({ message: "Text too short" });
    if (text.length > 8000) return res.status(413).json({ message: "Text too large" });

    // 3. Setup the model with System Instructions
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview", 
      systemInstruction: "You are a professional assistant that provides concise, accurate summaries in bullet points."
    });

    const prompt = `Summarize the following text in 3–6 bullet points:\n\n${text}`;

    // 4. Generate content using the SDK-supported method
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    res.json({
      summary,
      model: "gemini-3-flash-preview"
    });

  } catch (error) {
    console.error("Error during summarization:", error);
    res.status(502).json({
      message: "LLM service error",
      error: error.message
    });
  }
};

export { summarizeText };