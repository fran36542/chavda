import type { SVGProps } from "react";

export const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="20" fill="#F0F6FE"/>
    <path d="M41.667 66.667a8.333 8.333 0 01-8.334-8.334V50a8.333 8.333 0 018.334-8.333h8.333a8.333 8.333 0 110 16.666h-8.333v8.334z" fill="#0ACF83"/>
    <path d="M41.667 50a8.333 8.333 0 000-16.667h8.333a8.333 8.333 0 110 16.667h-8.333z" fill="#A259FF"/>
    <path d="M58.333 50a8.333 8.333 0 11-8.333-8.333 8.333 8.333 0 018.333 8.333z" fill="#FF7262"/>
    <path d="M58.333 66.667a8.333 8.333 0 11-8.333 8.333 8.333 8.333 0 018.333-8.333z" fill="#1ABCFE"/>
    <path d="M50 50a8.333 8.333 0 118.333 8.333A8.333 8.333 0 0150 50z" fill="#F24E1E"/>
  </svg>
);

export const SketchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="20" fill="#FDF1D3"/>
    <path d="M50 15L25 35.5H75L50 15Z" fill="#F7B500"/>
    <path d="M25 35.5L50 56L75 35.5H25Z" fill="#F7B500"/>
    <path d="M25 35.5L50 15V56L25 35.5Z" fill="#FAD200"/>
    <path d="M75 35.5L50 15V56L75 35.5Z" fill="#FAD200"/>
    <path d="M50 85L25 64.5H75L50 85Z" fill="#F7B500"/>
    <path d="M25 64.5L50 44L75 64.5H25Z" fill="#F7B500"/>
    <path d="M25 64.5L50 85V44L25 64.5Z" fill="#FAD200"/>
    <path d="M75 64.5L50 85V44L75 64.5Z" fill="#FAD200"/>
  </svg>
);


export const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="20" fill="#EBF9FC"/>
    <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
    <g>
        <ellipse cx="50" cy="50" rx="38" ry="15" stroke="#61DAFB" strokeWidth="4" />
        <ellipse cx="50" cy="50" rx="38" ry="15" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="38" ry="15" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)" />
    </g>
  </svg>
);

export const XDIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="100" height="100" rx="20" fill="#FFF0FA"/>
        <path d="M64.583 33.333h-8.996l-9.617 14.584L36.353 33.333H27.083l14.459 20.834L27.083 75h8.996l9.617-14.583 8.996 14.583h9.617l-14.458-20.833 14.458-20.834z" fill="#FF61F6"/>
    </svg>
);

export const WebflowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="20" fill="#E6F2FF"/>
    <path d="M50 25h20.833C74.25 25 75 25.75 75 26.667v20.833H50V25z" fill="#4353FF" />
    <path d="M25 25h20.833v20.833H25V25z" fill="#4353FF" />
    <path d="M25 50h20.833v20.833H26.667C25.75 70.833 25 70.083 25 69.167V50z" fill="#4353FF" />
  </svg>
);
