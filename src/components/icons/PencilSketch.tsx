import { type IconPropsType } from './types'
export default function PencilSketch ({ className }: IconPropsType) {
  return (
        <svg className={className} width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_249_139)">
                <path d="M5.08673 31.2241V17.2955L10.9167 20.8907L15 17.5574L19.0833 20.8907L24.9121 17.2955V31.2241" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.09796 17.2937L14.0513 2.77129C14.5161 2.01748 15.494 2.01748 15.9588 2.77129L24.9121 17.2937" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.9167 20.8907V31.2241" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.0833 20.8907V31.2241" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.86847 9.5575H20.1314" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_249_139" x="-3" y="0.224121" width="36" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_249_139" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_249_139" result="shape" />
                </filter>
            </defs>
        </svg>
  )
}
