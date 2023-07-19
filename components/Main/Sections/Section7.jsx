import Image from "next/image";

const Section7 = () => {
  return (
    <section className="section-7 text-center">
      <h1 className="common-h1">
        Ullamcorper morbi tincidunt ornare massa eget. <br /> Quam viverra orci
        sagittis eu volutpat odio
      </h1>
      <p className="common-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        <br />
        tempor incididunt ut labore
      </p>

      <div className="d-flex sm-boxes">
        <div className="common-sm-1 m-1">
          <span>
            <svg
              width="47px"
              height="47px"
              viewBox="0 0 36 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fb-img-2"
            >
              <path
                d="M23.5761 72.6826V39.9213H33.9157L35.4526 27.0941H23.5761V18.9238C23.5761 15.2223 24.5409 12.6881 29.5106 12.6881H35.8078V1.25198C32.7439 0.900985 29.6641 0.731509 26.5826 0.744329C17.4434 0.744329 11.1686 6.70821 11.1686 17.6566V27.0701H0.896271V39.8973H11.191V72.6826H23.5761Z"
                fill="#3A75E6"
              />
            </svg>
          </span>
        </div>
        <div>
          <div className="common-sm-1 m-2">
            <span>
              <Image
                src="/images/image-39.svg"
                alt="banner"
                width="60"
                height="93"
                className="sm-img-2"
              />
            </span>
          </div>

          <div className="common-sm-1 m-2">
            <span>
              <Image
                src="/images/image-54.svg"
                alt="banner"
                width="60"
                height="93"
                className="sm-img-2"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
