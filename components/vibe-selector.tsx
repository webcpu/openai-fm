"use client"

interface VibeSelectorProps {
  selectedVibe: string
  onSelectVibe: (vibe: string) => void
}

export default function VibeSelector({ selectedVibe, onSelectVibe }: VibeSelectorProps) {
  const vibes = [
    { id: "sincere", name: "Sincere" },
    { id: "santa", name: "Santa" },
    { id: "sympathetic", name: "Sympathetic" },
    { id: "sports-coach", name: "Sports Coach" },
    { id: "calm", name: "Calm" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {vibes.map((vibe) => (
        <div key={vibe.id} className="relative" onClick={() => onSelectVibe(vibe.id)}>
          <div
            className="aspect-4/3 sm:aspect-2/1 lg:aspect-2.5/1 min-h-[60px] max-h-[100px] flex flex-col items-start justify-between relative p-6 rounded-md cursor-pointer bg-white"
            style={{
              boxShadow:
                selectedVibe === vibe.id
                  ? "inset 0.5px 0.5px 1px #fff, inset -0.5px -0.5px 1px #00000026, 0.222px 0.222px 0.314px -0.5px #0003, 0.605px 0.605px 0.856px -1px #0000002e, 1.329px 1.329px 1.88px -1.5px #00000040, 2.95px 2.95px 4.172px -2px #0000001a, 2.5px 2.5px 3px -2.5px #00000026, -0.5px -0.5px 0 0 rgb(0 0 0/10%)"
                  : "inset 1px 1px 1px 0 rgb(255, 255, 255), inset -1px -1px 1px 0 rgba(0, 0, 0, .15), 0.444584px 0.444584px 0.628737px -1px rgba(0, 0, 0, .26), 1.21072px 1.21072px 1.71222px -1.5px rgba(0, 0, 0, .247), 2.6583px 2.6583px 3.75941px -2.25px rgba(0, 0, 0, .23), 5.90083px 5.90083px 8.34503px -3px rgba(0, 0, 0, .192), 10px 10px 21.2132px -3.75px rgba(0, 0, 0, .056), -0.5px -0.5px 0 0 rgb(0 0 0/5%)",
            }}
            role="button"
            tabIndex={0}
          >
            <span className="break-words pr-1">{vibe.name}</span>
            <div className="absolute left-[0.93rem] bottom-[0.93rem]">
              <span
                className="block w-[7px] h-[7px] rounded-full"
                style={{
                  backgroundColor: selectedVibe === vibe.id ? "#ff4a00" : "rgba(0, 0, 0, .1)",
                  boxShadow: "inset 1px 1px 2px #0000001c, 0 1px 0 0 #ffffff30",
                }}
              ></span>
            </div>
          </div>
        </div>
      ))}
      <div
        className="aspect-4/3 sm:aspect-2/1 lg:aspect-2.5/1 min-h-[60px] max-h-[100px] flex items-center justify-center rounded-md cursor-pointer bg-gray-300"
        style={{
          boxShadow:
            "inset 1px 1px 1px 0 rgb(255, 255, 255), inset -1px -1px 1px 0 rgba(0, 0, 0, .15), 0.444584px 0.444584px 0.628737px -1px rgba(0, 0, 0, .26), 1.21072px 1.21072px 1.71222px -1.5px rgba(0, 0, 0, .247), 2.6583px 2.6583px 3.75941px -2.25px rgba(0, 0, 0, .23), 5.90083px 5.90083px 8.34503px -3px rgba(0, 0, 0, .192), 10px 10px 21.2132px -3.75px rgba(0, 0, 0, .056), -0.5px -0.5px 0 0 rgb(0 0 0/5%)",
        }}
        data-color="neutral"
        data-block=""
        role="button"
        tabIndex={0}
        aria-label="Generate new list of vibes"
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.7442 18.8497L30.6514 19.5939C29.867 25.8841 24.5025 30.7511 18 30.7511C14.1461 30.7511 10.6158 29.04 8.25 26.33V30.7511H6.75V24.0011C6.75 23.5869 7.08579 23.2511 7.5 23.2511H14.25V24.7511H8.89767C10.967 27.4804 14.3146 29.2511 18 29.2511C23.7364 29.2511 28.471 24.957 29.1629 19.4083L29.2557 18.6641L30.7442 18.8497Z"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.34866 16.4072C6.13304 10.117 11.4976 5.25 18.0001 5.25C21.8636 5.25 25.402 6.96967 27.7678 9.6915V5.25H29.2678V12C29.2678 12.4142 28.932 12.75 28.5178 12.75H28.5144C28.5053 12.7502 28.4962 12.7502 28.4871 12.75H21.7678V11.25H27.1024C25.033 8.52068 21.6855 6.75 18.0001 6.75C12.2637 6.75 7.52905 11.0441 6.83714 16.5928L6.74433 17.337L5.25586 17.1514L5.34866 16.4072Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

