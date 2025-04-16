"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import VoiceSelector from "./voice-selector"
import VibeSelector from "./vibe-selector"
import ScriptEditor from "./script-editor"
import VibeDescription from "./vibe-description"

export default function OpenAIFM() {
  const [selectedVoice, setSelectedVoice] = useState("fable")
  const [selectedVibe, setSelectedVibe] = useState("sincere")
  const [script, setScript] = useState(
    "Thank you for reaching out, and I'm truly sorry about the unexpected charge on your bill. I completely understand how frustrating this must be, especially after your stay.\n\nAfter reviewing your reservation, I can confirm that this was an error on our part. I'll be issuing a full refund right away, and you should see the amount credited to your payment method within a few business days.\n\nI appreciate your understanding and patience, and I'm here if you need any further assistance. Thank you for allowing us to resolve this for you.",
  )
  const [isPlaying, setIsPlaying] = useState(false)
  const [devMode, setDevMode] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // In a real implementation, this would trigger the text-to-speech API
    setTimeout(() => setIsPlaying(false), 2000)
  }

  const toggleDevMode = () => {
    setDevMode(!devMode)
  }

  return (
    <div className="min-h-screen bg-[#ececec] pb-24">
      <div className="max-w-[1920px] w-full mx-auto px-4 py-8">
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold">OpenAI.fm</h1>
            <p className="text-gray-600 mt-1">
              An interactive demo for developers to try the new text-to-speech model in the OpenAI API.
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-1 mr-4 cursor-pointer">
              <span className="font-medium">START BUILDING</span> <ArrowRight className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2">
              <code className="text-sm text-gray-600">&lt;/&gt;</code>
              <button
                type="button"
                role="switch"
                aria-checked={devMode}
                data-state={devMode ? "checked" : "unchecked"}
                value="on"
                id="dev-mode"
                onClick={toggleDevMode}
                className="Switcher_Track__RYRxz"
              >
                <span className="Switcher_Thumb__Au9Bn"></span>
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8">
          <section>
            <h2 className="text-sm font-medium text-gray-500 mb-4">VOICE</h2>
            <VoiceSelector selectedVoice={selectedVoice} onSelectVoice={setSelectedVoice} />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="flex flex-col h-full">
              <div className="border-b border-gray-300 mb-4">
                <h2 className="text-sm font-medium text-gray-500 mb-2">VIBE</h2>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <VibeSelector selectedVibe={selectedVibe} onSelectVibe={setSelectedVibe} />
                </div>
                <div className="flex-grow">
                  <VibeDescription selectedVibe={selectedVibe} />
                </div>
              </div>
            </section>

            <section className="flex flex-col h-full">
              <div className="border-b border-gray-300 mb-4">
                <h2 className="text-sm font-medium text-gray-500 mb-2">SCRIPT</h2>
              </div>
              <div className="flex-grow">
                <ScriptEditor script={script} onScriptChange={setScript} />
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 w-full py-4 bg-[#ececec] border-t border-gray-200 z-10">
        <div className="max-w-[1920px] mx-auto px-4">
          <div className="grid grid-cols-3 gap-3">
            <div
              className="aspect-auto flex items-center justify-center rounded-md cursor-pointer bg-[#6a6a6a] text-white"
              style={{
                height: "60px",
                boxShadow:
                  "inset 1px 1px 1px #ffffffba, inset -1px -1px 1px #0000003b, 0.444584px 0.444584px 0.628737px -1px #00000042, 1.21072px 1.21072px 1.71222px -1.5px #0000003f, 2.6583px 2.6583px 3.75941px -2.25px #0000003b, 5.90083px 5.90083px 8.34503px -3px #0000004f, 12px 12px 21.2132px -3.75px #0000001a, -.5px -.5px #0000006b",
              }}
              data-color="tertiary"
              data-block=""
              role="button"
              tabIndex={0}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.74805 21.75V22.8C6.74805 24.0725 6.74863 24.9818 6.80687 25.6945C6.86438 26.3985 6.97439 26.8445 7.15677 27.2025C7.5163 27.9081 8.08998 28.4817 8.79558 28.8413C9.15353 29.0237 9.59953 29.1337 10.3035 29.1912C11.0163 29.2494 11.9256 29.25 13.198 29.25H22.798C24.0705 29.25 24.9798 29.2494 25.6926 29.1912C26.3966 29.1337 26.8426 29.0237 27.2005 28.8413C27.9061 28.4817 28.4798 27.9081 28.8393 27.2025C29.0217 26.8445 29.1317 26.3985 29.1892 25.6945C29.2475 24.9818 29.248 24.0725 29.248 22.8V21.75H30.748V22.8333C30.7481 24.0652 30.7481 25.0357 30.6842 25.8167C30.6191 26.6134 30.4839 37.2788 30.1758 27.8835C29.6725 28.8713 28.8693 29.6744 27.8815 30.1778C27.2768 30.4859 26.6115 30.6211 25.8147 30.6862C25.0337 30.75 24.0633 30.75 22.8314 30.75H13.1647C11.9328 30.75 10.9624 30.75 10.1814 30.6862C9.38462 30.6211 8.71925 30.4859 8.1146 30.1778C7.12675 29.6744 6.3236 28.8713 5.82026 27.8835C5.51218 27.2788 5.37695 26.6134 5.31185 25.8167C5.24804 25.0357 5.24804 24.0652 5.24805 22.8333L5.24805 21.75H6.74805Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7501 5.24805V20.6874L24.0001 15.4374L25.0608 16.498L18.5304 23.0284C18.2376 23.3213 17.7627 23.3213 17.4698 23.0284L10.9395 16.498L12.0001 15.4374L17.2501 20.6874V5.24805H18.7501Z"
                ></path>
              </svg>
              <span className="uppercase hidden md:inline ml-2">Download</span>
            </div>

            <div
              className="aspect-auto flex items-center justify-center rounded-md cursor-pointer bg-[#222] text-white"
              style={{
                height: "60px",
                boxShadow:
                  "inset 1px 1px 1px #ffffffb3, inset -1px -1px 1px #0000003b, 0.444584px 0.444584px 0.628737px -0.75px #00000042, 1.21072px 1.21072px 1.71222px -1.5px #0000003f, 2.6583px 2.6583px 3.75941px -2.25px #0000003b, 5.90083px 5.90083px 8.34503px -3px #00000031, 14px 14px 21.2132px -3.75px #00000033, -.5px -.5px #000000af",
              }}
              data-color="secondary"
              data-block=""
              role="button"
              tabIndex={0}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.75 21.748V22.798C6.75 24.0705 6.75058 24.9798 6.80882 25.6926C6.86634 26.3966 6.97634 26.8426 7.15873 27.2005C7.51825 27.9061 8.09193 28.4798 8.79754 28.8393C9.15549 29.0217 9.60148 29.1317 10.3055 29.1892C11.0182 29.2475 11.9275 29.248 13.2 29.248H22.8C24.0725 29.248 24.9818 29.2475 25.6945 29.1892C26.3985 29.1317 26.8445 29.0217 27.2025 28.8393C27.9081 28.4798 28.4817 27.9061 28.8413 27.2005C29.0237 26.8426 29.1337 26.3966 29.1912 25.6926C29.2494 24.9798 29.25 24.0705 29.25 22.798V21.748H30.75V22.8314C30.75 24.0633 30.75 25.0337 30.6862 25.8147C30.6211 26.6115 30.4859 27.2768 30.1778 27.8815C29.6744 28.8693 28.8713 29.6725 27.8834 30.1758C27.2788 30.4839 26.6134 30.6191 25.8167 30.6842C25.0357 30.7481 24.0652 30.7481 22.8333 30.748H13.1667C11.9348 30.7481 10.9643 30.7481 10.1833 30.6842C9.38657 30.6191 8.7212 30.4839 8.11655 30.1758C7.1287 29.6725 6.32555 28.8693 5.82222 27.8815C5.51413 27.2768 5.3789 26.6115 5.3138 25.8147C5.24999 25.0337 5.25 24.0633 5.25 22.8314L5.25 21.748H6.75Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.4698 5.46967C17.7627 5.17678 18.2376 5.17678 18.5304 5.46967L25.0608 12L24.0001 13.0607L18.7501 7.81066V23.25H17.2501V7.81066L12.0001 13.0607L10.9395 12L17.4698 5.46967Z"
                ></path>
              </svg>
              <span className="uppercase hidden md:inline ml-2">Share</span>
            </div>

            <div
              className="aspect-auto flex items-center justify-center rounded-md cursor-pointer bg-[#FF5722] text-white"
              style={{
                height: "60px",
                boxShadow:
                  "inset 1px 1px 1px #ffffffd4, inset -1px -1px 1px #0000003b, 0.444584px 0.444584px 0.628737px -1px #00000042, 1.21072px 1.21072px 1.71222px -1.5px #0000003f, 2.6583px 2.6583px 3.75941px -2.25px #0000003b, 5.90083px 5.90083px 8.34503px -3px #00000031, 10px 10px 21.2132px -3.75px #0000003b, -.5px -.5px #952b0087",
              }}
              data-color="primary"
              data-block=""
              role="button"
              tabIndex={0}
              onClick={handlePlay}
            >
              {isPlaying ? (
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin"
                >
                  <path d="M18 3.75C10.1317 3.75 3.75 10.1317 3.75 18C3.75 25.8683 10.1317 32.25 18 32.25C25.8683 32.25 32.25 25.8683 32.25 18C32.25 10.1317 25.8683 3.75 18 3.75ZM18 5.25C25.0416 5.25 30.75 10.9584 30.75 18C30.75 25.0416 25.0416 30.75 18 30.75C10.9584 30.75 5.25 25.0416 5.25 18C5.25 10.9584 10.9584 5.25 18 5.25Z" />
                  <path d="M18 9.75C18.4142 9.75 18.75 10.0858 18.75 10.5V18C18.75 18.4142 18.4142 18.75 18 18.75C17.5858 18.75 17.25 18.4142 17.25 18V10.5C17.25 10.0858 17.5858 9.75 18 9.75Z" />
                </svg>
              ) : (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.85905 6.08889C8.62661 5.96437 8.34585 5.97106 8.11961 6.10652C7.89336 6.24198 7.75488 6.48631 7.75488 6.75V29.25C7.75488 29.5137 7.89336 29.758 8.11961 29.8935C8.34585 30.0289 8.62661 30.0356 8.85905 29.9111L29.8592 18.6611C30.1029 18.5305 30.255 18.2765 30.255 18C30.255 17.7235 30.1029 17.4695 29.8592 17.3389L8.85905 6.08889Z"
                  ></path>
                </svg>
              )}
              <span className="uppercase hidden md:inline ml-2">Play</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

