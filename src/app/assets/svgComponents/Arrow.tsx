export const Arrow = (props: JSX.IntrinsicElements["svg"]) => {
  const { fill } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_69_3793"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect
          width="20"
          height="20"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_69_3793)">
        <path
          d="M7.65374 9.99952L13.931 16.2768C14.0966 16.4424 14.1773 16.6373 14.1731 16.8616C14.1688 17.0861 14.0839 17.2811 13.9183 17.4466C13.7526 17.6122 13.5576 17.6949 13.3333 17.6949C13.109 17.6949 12.914 17.6122 12.7483 17.4466L6.35582 11.0668C6.20513 10.9161 6.09346 10.7473 6.02082 10.5604C5.94818 10.3734 5.91187 10.1865 5.91187 9.99952C5.91187 9.81258 5.94818 9.62563 6.02082 9.43869C6.09346 9.25175 6.20513 9.08293 6.35582 8.93223L12.7483 2.53952C12.914 2.37397 13.1112 2.29334 13.3398 2.29765C13.5684 2.30195 13.7655 2.38688 13.931 2.55244C14.0966 2.718 14.1794 2.913 14.1794 3.13744C14.1794 3.36175 14.0966 3.55668 13.931 3.72223L7.65374 9.99952Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
