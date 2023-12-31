import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner">
      <div className="row p-0">
        <div className="col-md-6 col-sm-6 banner-left">
          <h1>
            Lore <span>ipsum.</span> Dolor <span>sit.</span>
          </h1>
          <p className="common-p">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde
            omnis iste natus error.
          </p>

          <div className="d-flex mt-5">
            <button type="button" class="btn btn-outline-dark viverra-btn">
              Viverra orci sagittis
            </button>
            <button type="button" className="btn btn-success border-0 demo-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.37259 0 0 5.37257 0 12C0 18.6273 5.37259 23.9999 12 23.9999C18.6274 23.9999 24 18.6273 24 12C23.993 5.37553 18.6245 0.00708146 12 0ZM17.0537 12.3823C16.9709 12.5483 16.8366 12.683 16.6708 12.7662C16.6696 12.7667 16.6689 12.7679 16.6689 12.7693C16.6689 12.7706 16.6681 12.7718 16.6669 12.7723L9.81172 16.2C9.38824 16.4116 8.87345 16.2398 8.66181 15.8164C8.60164 15.696 8.57065 15.5631 8.57141 15.4285V8.57143C8.57121 8.09803 8.95476 7.71412 9.42817 7.71387C9.56131 7.71382 9.69264 7.74476 9.81172 7.80427L16.6689 11.2329C17.0925 11.444 17.2649 11.9586 17.0537 12.3823Z"
                  fill="white"
                />
              </svg>{" "}
              Get a demo
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <Image
            src="/images/Rectangle.svg"
            alt="banner"
            width="974"
            height="1046"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
