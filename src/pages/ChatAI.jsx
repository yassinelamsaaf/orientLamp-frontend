import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import { Send } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ChatAI = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Bonjour ! Je suis OrientIA, votre assistant virtuel pour l'orientation universitaire. Comment puis-je vous aider aujourd'hui ?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const generateAIResponse = (userInput) => {
    // Simple response logic based on keywords
    const input = userInput.toLowerCase();

    if (
      input.includes("bonjour") ||
      input.includes("salut") ||
      input.includes("hello")
    ) {
      return "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
    }

    if (
      input.includes("inpt") ||
      input.includes("institut national des postes")
    ) {
      return "L'INPT (Institut National des Postes et Télécommunications) est une école d'ingénieurs située à Rabat. Elle forme des ingénieurs dans les domaines des télécommunications et des technologies de l'information. L'admission se fait principalement via le Concours National Commun (CNC) ou par concours spécifique.";
    }

    if (
      input.includes("ensias") ||
      input.includes("école nationale supérieure d'informatique")
    ) {
      return "L'ENSIAS est l'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes, située à Rabat. C'est une grande école d'ingénieurs spécialisée en informatique, proposant plusieurs filières comme le génie logiciel, l'IA, la cybersécurité, etc. L'admission se fait principalement via le CNC.";
    }

    if (
      input.includes("orientation") ||
      input.includes("choix") ||
      input.includes("filière") ||
      input.includes("conseil")
    ) {
      return "Pour vous aider dans votre orientation, je vous conseille de prendre en compte vos centres d'intérêt, vos points forts académiques et vos projets professionnels. Pouvez-vous me parler de vos matières préférées et de vos aspirations professionnelles ?";
    }

    if (input.includes("bac") || input.includes("baccalauréat")) {
      return "Après le baccalauréat au Maroc, vous avez plusieurs options : les écoles d'ingénieurs via le système CPGE puis CNC, les facultés de médecine via concours, les facultés générales, les écoles de commerce comme l'ENCG, ou les formations professionnelles. Quel domaine vous intéresse le plus ?";
    }

    if (input.includes("merci") || input.includes("thank")) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.";
    }

    // Default response
    return "Je ne suis pas sûr de comprendre votre question. Pourriez-vous la reformuler ou me donner plus de détails sur ce que vous recherchez ?";
  };

  return (
    <Layout>
      <div className="flex flex-col h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-orientlamp-gold ring-offset-2">
              <AvatarImage
                src="/images/20b9a1b1-1802-42e7-8347-83c1f1324f09.png"
                alt="OrientLamp"
              />
              <AvatarFallback className="bg-orientlamp-gold text-white">
                OI
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                OrientIA
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Votre assistant d'orientation en ligne
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } animate-fadeIn`}
            >
              {message.sender === "ai" && (
                <Avatar className="mr-3 mt-1 h-8 w-8 ring-2 ring-gray-200 dark:ring-gray-700">
                  <AvatarImage
                    src="/images/20b9a1b1-1802-42e7-8347-83c1f1324f09.png"
                    alt="OrientLamp"
                  />
                  <AvatarFallback className="bg-orientlamp-gold text-white text-xs">
                    OI
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[85%] md:max-w-[70%] rounded-2xl p-4 shadow-md transition-all hover:shadow-lg ${
                  message.sender === "user"
                    ? "bg-gradient-to-br from-orientlamp-gold to-amber-600 text-white rounded-br-sm"
                    : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-bl-sm"
                }`}
              >
                <div className="text-sm leading-relaxed">{message.text}</div>
                <div
                  className={`text-xs mt-2 ${
                    message.sender === "user"
                      ? "text-amber-100"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
              {message.sender === "user" && (
                <Avatar className="ml-3 mt-1 h-8 w-8 ring-2 ring-orientlamp-gold">
                  <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs">
                    U
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shadow-lg">
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-orientlamp-gold focus:ring-0 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all"
            />
            <button
              type="submit"
              className="h-12 w-12 rounded-full bg-gradient-to-br from-orientlamp-gold to-amber-600 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={inputMessage.trim() === ""}
            >
              <Send size={20} />
            </button>
          </form>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
            💡 Essayez: "Qu'est-ce que l'INPT ?", "Comment choisir mon
            orientation ?"
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatAI;
