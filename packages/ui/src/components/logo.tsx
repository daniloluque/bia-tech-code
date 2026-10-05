import { type ComponentProps } from "solid-js"

export const Mark = (props: { class?: string }) => {
  return (
    <svg
      data-component="logo-mark"
      classList={{ [props.class ?? ""]: !!props.class }}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path data-slot="logo-logo-mark-shadow" d="M12 16H4V12H12V16Z" fill="var(--icon-weak-base)" />
      <path
        data-slot="logo-logo-mark-o"
        fill-rule="evenodd"
        d="M4 0V8H16V20H0V0H4ZM12 12H4V16H12V12Z"
        fill="var(--icon-strong-base)"
      />
    </svg>
  )
}

export const Splash = (props: Pick<ComponentProps<"svg">, "ref" | "class">) => {
  return (
    <svg
      ref={props.ref}
      data-component="logo-splash"
      classList={{ [props.class ?? ""]: !!props.class }}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60 80H20V60H60V80Z" fill="var(--icon-base)" />
      <path fill-rule="evenodd" d="M20 0V40H80V100H0V0H20ZM60 60H20V80H60V60Z" fill="var(--icon-strong-base)" />
    </svg>
  )
}

export const Logo = (props: { class?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 42"
      fill="none"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      <g>
        <path d="M6 18H18V24H6ZM6 24H18V30H6Z" fill="var(--icon-weak-base)" />
        <path d="M0 0H6V6H0ZM0 6H24V12H0ZM0 12H6V18H0ZM18 12H24V18H18ZM0 18H6V24H0ZM18 18H24V24H18ZM0 24H6V30H0ZM18 24H24V30H18ZM0 30H24V36H0Z" fill="var(--icon-base)" />
        <path d="M30 0H36V6H30ZM30 12H36V18H30ZM30 18H36V24H30ZM30 24H36V30H30ZM30 30H36V36H30Z" fill="var(--icon-base)" />
        <path d="M48 24H60V30H48Z" fill="var(--icon-weak-base)" />
        <path d="M42 6H66V12H42ZM60 12H66V18H60ZM42 18H66V24H42ZM42 24H48V30H42ZM60 24H66V30H60ZM42 30H66V36H42Z" fill="var(--icon-base)" />
        <path d="M90 0H96V6H90ZM84 6H108V12H84ZM90 12H96V18H90ZM90 18H96V24H90ZM90 24H96V30H90ZM90 30H108V36H90Z" fill="var(--icon-base)" />
        <path d="M120 24H138V30H120Z" fill="var(--icon-weak-base)" />
        <path d="M114 6H138V12H114ZM114 12H120V18H114ZM132 12H138V18H132ZM114 18H138V24H114ZM114 24H120V30H114ZM114 30H138V36H114Z" fill="var(--icon-base)" />
        <path d="M150 18H168V24H150ZM150 24H168V30H150Z" fill="var(--icon-weak-base)" />
        <path d="M144 6H168V12H144ZM144 12H150V18H144ZM144 18H150V24H144ZM144 24H150V30H144ZM144 30H168V36H144Z" fill="var(--icon-base)" />
        <path d="M180 18H192V24H180ZM180 24H192V30H180ZM180 30H192V36H180Z" fill="var(--icon-weak-base)" />
        <path d="M174 0H180V6H174ZM174 6H192V12H174ZM174 12H180V18H174ZM192 12H198V18H192ZM174 18H180V24H174ZM192 18H198V24H192ZM174 24H180V30H174ZM192 24H198V30H192ZM174 30H180V36H174ZM192 30H198V36H192Z" fill="var(--icon-base)" />
        <g transform="translate(96 0)">
          <path d="M144 30H126V18H144V30Z" fill="var(--icon-weak-base)" />
          <path d="M144 12H126V30H144V36H120V6H144V12Z" fill="var(--icon-strong-base)" />
          <path d="M168 30H156V18H168V30Z" fill="var(--icon-weak-base)" />
          <path d="M168 12H156V30H168V12ZM174 36H150V6H174V36Z" fill="var(--icon-strong-base)" />
          <path d="M198 30H186V18H198V30Z" fill="var(--icon-weak-base)" />
          <path d="M198 12H186V30H198V12ZM204 36H180V6H198V0H204V36Z" fill="var(--icon-strong-base)" />
          <path d="M234 24V30H216V24H234Z" fill="var(--icon-weak-base)" />
          <path d="M216 12V18H228V12H216ZM234 24H216V30H234V36H210V6H234V24Z" fill="var(--icon-strong-base)" />
        </g>
      </g>
    </svg>
  )
}
