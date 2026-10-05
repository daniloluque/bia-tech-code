import { createUniqueId, type ComponentProps } from "solid-js"

export function WordmarkV2(props: Pick<ComponentProps<"svg">, "class">) {
  const mask = createUniqueId()
  const maskGradient = createUniqueId()
  const fillGradient = createUniqueId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 129"
      fill="none"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      <g>
        <g mask={`url(#${mask})`}>
          <g fill={`url(#${fillGradient})`}>
            <path
              d="M64.6154 0H83.0769V18.4286H64.6154ZM64.6154 18.4286H138.4615V36.8571H64.6154ZM64.6154 36.8571H83.0769V55.2857H64.6154ZM120 36.8571H138.4615V55.2857H120ZM64.6154 55.2857H83.0769V73.7143H64.6154ZM120 55.2857H138.4615V73.7143H120ZM64.6154 73.7143H83.0769V92.1429H64.6154ZM120 73.7143H138.4615V92.1429H120ZM64.6154 92.1429H138.4615V110.5714H64.6154Z"
            />
            <path
              d="M156.9231 0H175.3846V18.4286H156.9231ZM156.9231 36.8571H175.3846V55.2857H156.9231ZM156.9231 55.2857H175.3846V73.7143H156.9231ZM156.9231 73.7143H175.3846V92.1429H156.9231ZM156.9231 92.1429H175.3846V110.5714H156.9231Z"
            />
            <path
              d="M193.8462 18.4286H267.6923V36.8571H193.8462ZM249.2308 36.8571H267.6923V55.2857H249.2308ZM193.8462 55.2857H267.6923V73.7143H193.8462ZM193.8462 73.7143H212.3077V92.1429H193.8462ZM249.2308 73.7143H267.6923V92.1429H249.2308ZM193.8462 92.1429H267.6923V110.5714H193.8462Z"
            />
            <path
              d="M323.0769 0H341.5385V18.4286H323.0769ZM304.6154 18.4286H378.4615V36.8571H304.6154ZM323.0769 36.8571H341.5385V55.2857H323.0769ZM323.0769 55.2857H341.5385V73.7143H323.0769ZM323.0769 73.7143H341.5385V92.1429H323.0769ZM323.0769 92.1429H378.4615V110.5714H323.0769Z"
            />
            <path
              d="M396.9231 18.4286H470.7692V36.8571H396.9231ZM396.9231 36.8571H415.3846V55.2857H396.9231ZM452.3077 36.8571H470.7692V55.2857H452.3077ZM396.9231 55.2857H470.7692V73.7143H396.9231ZM396.9231 73.7143H415.3846V92.1429H396.9231ZM396.9231 92.1429H470.7692V110.5714H396.9231Z"
            />
            <path
              d="M489.2308 18.4286H563.0769V36.8571H489.2308ZM489.2308 36.8571H507.6923V55.2857H489.2308ZM489.2308 55.2857H507.6923V73.7143H489.2308ZM489.2308 73.7143H507.6923V92.1429H489.2308ZM489.2308 92.1429H563.0769V110.5714H489.2308Z"
            />
            <path
              d="M581.5385 0H600V18.4286H581.5385ZM581.5385 18.4286H636.9231V36.8571H581.5385ZM581.5385 36.8571H600V55.2857H581.5385ZM636.9231 36.8571H655.3846V55.2857H636.9231ZM581.5385 55.2857H600V73.7143H581.5385ZM636.9231 55.2857H655.3846V73.7143H636.9231ZM581.5385 73.7143H600V92.1429H581.5385ZM636.9231 73.7143H655.3846V92.1429H636.9231ZM581.5385 92.1429H600V110.5714H581.5385ZM636.9231 92.1429H655.3846V110.5714H636.9231Z"
            />
          </g>
        </g>
      </g>
      <defs>
        <mask id={mask} style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="720" height="129">
          <rect width="720" height="129" fill={`url(#${maskGradient})`} />
        </mask>
        <linearGradient id={maskGradient} x1="360" y1="40" x2="360" y2="129" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="1" />
          <stop offset="1" stop-color="white" stop-opacity="0.35" />
        </linearGradient>
        <linearGradient id={fillGradient} x1="0" y1="0" x2="720" y2="129" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ff2a4f" />
          <stop offset="0.55" stop-color="#cc092f" />
          <stop offset="1" stop-color="#8a0a20" />
        </linearGradient>
      </defs>
    </svg>
  )
}
