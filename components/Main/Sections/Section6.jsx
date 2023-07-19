import Image from "next/image";

const Section6 = () => {
  return (
    <section className="section-6">
      <div className="d-flex">
        <div>
          <h1 className="common-h1">
            Consectetur <br /> adipiscing elit
          </h1>
          <p className="common-p">
            Convallis a cras semper auctor neque. Fringilla <br /> est
            ullamcorper eget nulla facilisi etiam <br /> dignissim viverra
          </p>
        </div>
        <div className="d-flex">
          <div>
            <div className="box">
              <Image
                src="/images/p1.svg"
                alt="poll-1"
                width="103"
                height="146"
                className=""
              />
            </div>
            <div className="common-div mt-2">First touch</div>
          </div>
          <div>
            <div className="box">
              <Image
                src="/images/p2.svg"
                alt="poll-2"
                width="103"
                height="145"
                className=""
              />
            </div>
            <div className="common-div mt-2" style={{ color: "#FFC646" }}>
              Last touch
            </div>
          </div>
        </div>
        <div className="circle">
          {/* <img src="/images/Ellipse-5.svg" alt="ellipse" className="ms-5" />
           */}
          <svg
            width="245"
            height="256"
            viewBox="0 0 245 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_2_3986)">
              <ellipse
                cx="121.676"
                cy="127"
                rx="95.3243"
                ry="101"
                fill="white"
              />
              <ellipse
                cx="121.676"
                cy="127"
                rx="95.3243"
                ry="101"
                stroke="white"
                stroke-opacity="0.2"
                stroke-width="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_2_3986"
                x="0.35144"
                y="0"
                width="244.649"
                height="256"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-9" dy="-9" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.933333 0 0 0 0 0.933333 0 0 0 0 0.933333 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_3986"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="10" dy="10" />
                <feGaussianBlur stdDeviation="8.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.757118 0 0 0 0 0.816667 0 0 0 0 0.76605 0 0 0 0.26 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_2_3986"
                  result="effect2_dropShadow_2_3986"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_2_3986"
                  result="shape"
                />
              </filter>
            </defs>
            <text
              x="50"
              y="100"
              font-family="Roboto"
              font-size="20"
              fill="#181F1B"
            >
              <tspan x="110" dy="5" font-size="50" font-weight="bold">
                3
              </tspan>

              <tspan x="80" dy="1.2em" font-size="20">
                +Custom
              </tspan>
              <tspan x="100" dy="1.2em" font-size="20">
                ones
              </tspan>
            </text>
            <br />

            {/* <h1>jhfgfgj</h1> */}
          </svg>
          asdfas
        </div>
      </div>
    </section>
  );
};

export default Section6;
