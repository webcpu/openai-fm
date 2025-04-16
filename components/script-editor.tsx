"use client"
import { useState, useEffect } from "react"

interface ScriptEditorProps {
  script: string
  onScriptChange: (script: string) => void
}

export default function ScriptEditor({ script, onScriptChange }: ScriptEditorProps) {
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    setCharCount(script.length)
  }, [script])

  return (
    <div className="relative h-full">
      <textarea
        value={script}
        onChange={(e) => onScriptChange(e.target.value)}
        className="h-full w-full resize-none p-6 font-mono text-sm rounded-md border-0 bg-white focus:outline-none"
        style={{
          boxShadow: "inset 0.5px 0.5px 1px #fff, inset -0.5px -0.5px 1px #00000026",
          minHeight: "100%",
        }}
      />
      <div className="absolute bottom-4 right-4 text-gray-400 text-sm">{charCount}</div>
    </div>
  )
}

