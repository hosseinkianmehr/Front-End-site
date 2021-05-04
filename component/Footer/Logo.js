import { useTheme } from '@material-ui/core/styles'

export default function Logo({ height = '64px', width = '64px' }) {
  const theme = useTheme()
  let color =
    theme.palette.type === 'dark'
      ? theme.palette.secondary.main
      : theme.palette.primary.main
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      version='1'
      viewBox='0 0 640 640'>
      <g fill={color}>
        <path
          d='M2040 5917c-267-265-832-827-1256-1248L13 3904l930-1209 929-1210 147 1c80 1 362 5 626 9l480 7 600 545c330 299 613 557 629 572l28 29-283 323c-156 178-295 336-309 351l-25 29-500-454-501-454-220-7-220-6-532 694-532 695 818 815 817 815 920 1h921l832-1112 832-1112v1559l-605 808-605 807H2525l-485-483z'
          transform='matrix(.1 0 0 -.1 0 640)'></path>
        <path
          d='M3816 4907l-520-9-600-545c-331-300-614-558-630-573l-29-28 306-346c169-191 309-348 311-349 3-1 230 201 505 450l499 451 216 3c204 3 217 2 235-16 11-11 252-323 536-694l517-674-154-153c-84-83-454-449-822-813l-668-661H1685L845 2070 5 3190l-3-777-2-777 613-816L1227 5l1334-2 1334-3 1250 1243c688 683 1250 1247 1250 1253s-416 553-925 1217l-925 1207-105-2c-58-1-339-6-624-11z'
          transform='matrix(.1 0 0 -.1 0 640)'></path>
      </g>
    </svg>
  )
}
