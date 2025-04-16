interface VibeDescriptionProps {
  selectedVibe: string
}

export default function VibeDescription({ selectedVibe }: VibeDescriptionProps) {
  const descriptions = {
    sincere: {
      affect: "Calm, composed, and reassuring. Competent and in control, instilling trust.",
      tone: "Sincere, empathetic, with genuine concern for the customer and understanding of the situation.",
      pacing:
        "Slower during the apology to allow for clarity and processing. Faster when offering solutions to signal action and resolution.",
    },
    santa: {
      affect: "Jolly, warm, and cheerful, with a playful and magical quality that fits Santa's personality.",
      tone: "Festive and welcoming, creating a joyful, holiday atmosphere for the caller.",
      emotion: "Joyful and playful, filled with holiday spirit, ensuring the conversation feels magical and special.",
    },
    sympathetic: {
      affect: "Gentle, understanding, and compassionate.",
      tone: "Warm and supportive, showing genuine concern.",
      pacing: "Measured and thoughtful, giving space for emotional processing.",
    },
    "sports-coach": {
      affect: "Energetic, motivational, and confident.",
      tone: "Direct and encouraging, with a focus on action and improvement.",
      pacing: "Dynamic and punchy, creating momentum and enthusiasm.",
    },
    calm: {
      affect: "Serene, balanced, and composed.",
      tone: "Soothing and reassuring, creating a sense of peace.",
      pacing: "Steady and measured, allowing for clarity and focus.",
    },
  }

  const description = descriptions[selectedVibe as keyof typeof descriptions] || descriptions.sincere

  return (
    <div
      className="p-6 bg-white rounded-md h-full"
      style={{ boxShadow: "inset 0.5px 0.5px 1px #fff, inset -0.5px -0.5px 1px #00000026" }}
    >
      <div className="space-y-6">
        {description.affect && (
          <div>
            <p className="text-gray-700">
              <span className="font-medium">Voice Affect:</span> {description.affect}
            </p>
          </div>
        )}
        {description.tone && (
          <div>
            <p className="text-gray-700">
              <span className="font-medium">Tone:</span> {description.tone}
            </p>
          </div>
        )}
        {description.pacing && (
          <div>
            <p className="text-gray-700">
              <span className="font-medium">Pacing:</span> {description.pacing}
            </p>
          </div>
        )}
        {description.emotion && (
          <div>
            <p className="text-gray-700">
              <span className="font-medium">Emotion:</span> {description.emotion}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

