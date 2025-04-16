"use client"

interface VoiceSelectorProps {
  selectedVoice: string
  onSelectVoice: (voice: string) => void
}

export default function VoiceSelector({ selectedVoice, onSelectVoice }: VoiceSelectorProps) {
  const voices = [
    { id: "alloy", name: "Alloy" },
    { id: "ash", name: "Ash", isPremium: true },
    { id: "ballad", name: "Ballad", isPremium: true },
    { id: "coral", name: "Coral", isPremium: true },
    { id: "echo", name: "Echo" },
    { id: "fable", name: "Fable" },
    { id: "onyx", name: "Onyx" },
    { id: "nova", name: "Nova" },
    { id: "sage", name: "Sage", isPremium: true },
    { id: "shimmer", name: "Shimmer" },
    { id: "verse", name: "Verse", isPremium: true },
  ]

  return (
    <div className="flex flex-1 flex-col pt-3 rounded-md">
      <div className="grid grid-cols-12 gap-3">
        {voices.map((voice) => (
          <div key={voice.id} className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1 relative">
            <div
              className="aspect-4/3 sm:aspect-2/1 lg:aspect-2.5/1 xl:aspect-square min-h-[60px] max-h-[100px] flex-col items-start justify-between relative p-4 rounded-md cursor-pointer bg-[#f4f4f4]"
              style={{
                boxShadow:
                  selectedVoice === voice.id
                    ? "inset 0.5px 0.5px 1px #fff, inset -0.5px -0.5px 1px #00000026, 0.222px 0.222px 0.314px -0.5px #0003, 0.605px 0.605px 0.856px -1px #0000002e, 1.329px 1.329px 1.88px -1.5px #00000040, 2.95px 2.95px 4.172px -2px #0000001a, 2.5px 2.5px 3px -2.5px #00000026, -0.5px -0.5px 0 0 rgb(0 0 0/10%)"
                    : "inset 1px 1px 1px 0 rgb(255, 255, 255), inset -1px -1px 1px 0 rgba(0, 0, 0, .15), 0.444584px 0.444584px 0.628737px -1px rgba(0, 0, 0, .26), 1.21072px 1.21072px 1.71222px -1.5px rgba(0, 0, 0, .247), 2.6583px 2.6583px 3.75941px -2.25px rgba(0, 0, 0, .23), 5.90083px 5.90083px 8.34503px -3px rgba(0, 0, 0, .192), 10px 10px 21.2132px -3.75px rgba(0, 0, 0, .056), -0.5px -0.5px 0 0 rgb(0 0 0/5%)",
              }}
              data-color="default"
              data-block=""
              data-selected={selectedVoice === voice.id ? "" : undefined}
              role="button"
              tabIndex={0}
              onClick={() => onSelectVoice(voice.id)}
            >
              <span>{voice.name}</span>
              <div className="absolute left-[0.93rem] bottom-[0.93rem]">
                <span
                  className="block w-[7px] h-[7px] rounded-full"
                  style={{
                    backgroundColor: selectedVoice === voice.id ? "#ff4a00" : "rgba(0, 0, 0, .1)",
                    boxShadow: "inset 1px 1px 2px #0000001c, 0 1px 0 0 #ffffff30",
                  }}
                ></span>
              </div>
              {voice.isPremium && (
                <div className="absolute right-[13px] bottom-[10.5px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[12px] h-[12px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5248 3.15838C10.5656 2.4022 11.1831 1.75 12 1.75C12.8169 1.75 13.4344 2.4022 13.4752 3.15836C13.6966 7.25635 16.727 10.2914 20.8187 10.5134C21.5854 10.555 22.25 11.1807 22.25 12.0119C22.25 12.8463 21.5806 13.4727 20.8113 13.5108C16.7255 13.7132 13.6966 16.7437 13.4752 20.8416C13.4344 21.5978 12.8169 22.25 12 22.25C11.1831 22.25 10.5656 21.5978 10.5248 20.8416C10.3034 16.7434 7.2739 13.7126 3.18751 13.5107C2.41877 13.4728 1.75 12.8469 1.75 12.0132C1.75 11.1794 2.41879 10.5537 3.18717 10.5155C7.27028 10.3124 10.3032 7.26175 10.5248 3.15838ZM12.0004 6.01235C11.0373 8.86655 8.848 11.0618 5.99104 12.0117C8.84653 12.9562 11.0364 15.1398 12 17.9892C12.9654 15.1345 15.1615 12.9482 18.0247 12.0066C15.1626 11.0555 12.9661 8.86773 12.0004 6.01235Z"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1">
          <div
            className="aspect-4/3 sm:aspect-2/1 lg:aspect-2.5/1 xl:aspect-square min-h-[60px] max-h-[100px] flex items-center justify-center rounded-md cursor-pointer bg-gray-300"
            style={{
              boxShadow:
                "inset 1px 1px 1px 0 rgb(255, 255, 255), inset -1px -1px 1px 0 rgba(0, 0, 0, .15), 0.444584px 0.444584px 0.628737px -1px rgba(0, 0, 0, .26), 1.21072px 1.21072px 1.71222px -1.5px rgba(0, 0, 0, .247), 2.6583px 2.6583px 3.75941px -2.25px rgba(0, 0, 0, .23), 5.90083px 5.90083px 8.34503px -3px rgba(0, 0, 0, .192), 10px 10px 21.2132px -3.75px rgba(0, 0, 0, .056), -0.5px -0.5px 0 0 rgb(0 0 0/5%)",
            }}
            data-color="neutral"
            data-block=""
            role="button"
            tabIndex={0}
            aria-label="Select random voice"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.51146 9.85363C6.10011 9.75487 5.64877 9.75002 4.5 9.75002H3.75V8.25002H4.5C4.53312 8.25002 4.56584 8.25001 4.59818 8.25001C5.61675 8.24987 6.25641 8.24978 6.86163 8.39508C7.39732 8.52368 7.90943 8.73581 8.37916 9.02366C8.90984 9.34886 9.35795 9.79709 10.0709 10.5103C10.0934 10.5328 10.1161 10.5555 10.1392 10.5785L13.0607 13.5L12 14.5607L9.0785 11.6392C8.27498 10.8357 7.95624 10.5237 7.59541 10.3026C7.25989 10.097 6.8941 9.94549 6.51146 9.85363Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27 4.93945L32.0303 9.96978C32.3232 10.2627 32.3232 10.7376 32.0303 11.0304L27 16.0608L25.9393 15.0001L29.6893 11.2501H26.9823C25.846 11.2501 25.4 11.2549 24.9885 11.3537C24.6059 11.4456 24.2401 11.5971 23.9046 11.8027C23.5438 12.0238 23.225 12.3357 22.4215 13.1393L10.1392 25.4216C10.1161 25.4446 10.0934 25.4674 10.0709 25.4899C9.35795 26.203 8.90984 26.6513 8.37916 26.9765C7.90943 27.2643 7.39732 27.4764 6.86163 27.6051C6.25641 27.7504 5.61675 27.7503 4.59817 27.7501C4.56583 27.7501 4.53311 27.7501 4.5 27.7501H3.75V26.2501H4.5C5.64877 26.2501 6.10011 26.2453 6.51146 26.1465C6.89409 26.0546 7.25989 25.9031 7.59541 25.6975C7.95624 25.4764 8.27498 25.1645 9.0785 24.361L21.3608 12.0786C21.3839 12.0556 21.4066 12.0329 21.4291 12.0104C22.142 11.2972 22.5902 10.849 23.1208 10.5238C23.5906 10.2359 24.1027 10.0238 24.6384 9.89517C25.2436 9.74987 25.8774 9.74996 26.8858 9.7501C26.9176 9.75011 26.9498 9.75011 26.9823 9.75011H29.6893L25.9393 6.00011L27 4.93945ZM27 19.9395L32.0303 24.9698C32.3232 25.2627 32.3232 25.7375 32.0303 26.0304L27 31.0608L25.9393 30.0001L29.6893 26.2501H26.9823C26.9498 26.2501 26.9176 26.2501 26.8858 26.2501C25.8774 26.2503 25.2436 26.2504 24.6384 26.1051C24.1027 25.9764 23.5906 25.7643 23.1208 25.4765C22.5902 25.1513 22.142 24.703 21.4291 23.9898C21.4066 23.9674 21.3838 23.9446 21.3608 23.9216L19.9393 22.5001L21 21.4395L22.4215 22.861C23.225 23.6645 23.5438 23.9764 23.9046 24.1975C24.2401 24.4031 24.6059 24.5546 24.9885 24.6465C25.4 24.7453 25.846 24.7501 26.9823 24.7501H29.6893L25.9393 21.0001L27 19.9395Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

