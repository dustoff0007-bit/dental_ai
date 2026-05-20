export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY || "AIzaSyC7yvfSaOC8UtwykXAZd-K3ZaTsAncaH3E";
    
    // Map Next.js/OpenAI chat roles to Gemini roles:
    // user -> user, assistant -> model
    const contents = messages
      .filter((m: any) => m.role === "user" || m.role === "assistant")
      .map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [
              {
                text: "You are Dr. Dentech, an AI digital clinical assistant. You help patients understand their dental health symptoms, provide guidance, and recommend when they should see a specialist. AI advice is for guidance only. Always consult with a licensed professional for diagnosis. Keep your answers short, professional, and empathetic."
              }
            ]
          },
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I am currently unable to process your request. Please schedule a visual review with our clinical specialists.";

    const reply = {
      role: "assistant",
      content: replyText
    };

    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Gemini Error, falling back to simulated response:", error);
    const simulatedReply = {
      role: "assistant",
      content: "Hello! I am Dr. Dentech, your AI companion. I see you are asking about your dental symptoms. For the most precise and high-fidelity diagnosis, I highly recommend visiting our interactive Treatment Plan dashboard or scheduling a diagnostic appointment with one of our experienced clinical dentists!"
    };
    return new Response(JSON.stringify({ reply: simulatedReply }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
