import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__portfolio_page mt_190 xs_mt_150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-5">
              <div className="section_heading">
                <h5>OUR PORTFOLIO</h5>
                <h2 className="banner_title">Modern Grid</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="tf__portfolio_page_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  purus senectus sapien habitant rutrum himenaeos curabitur
                  posuere congue ac non eu odio tempor placerat id.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt_60 justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item">
                <Link
                  href="portfolio_details"
                  className="cursor-arrow tf__featured_work_item_img"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_7.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="portfolio_details">
                  <h3
                    data-text-animation="rotate-in"
                    data-split="line"
                    data-duration={1}
                  >
                    Website Design 2024
                  </h3>
                </Link>
                <p>Website Design / Brand</p>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item tf__featured_work_item_small mt_65">
                <Link
                  href="portfolio_details"
                  className="cursor-arrow tf__featured_work_item_img"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_8.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="portfolio_details">
                  <h3
                    data-text-animation="rotate-in"
                    data-split="line"
                    data-duration={1}
                  >
                    Corporate Website
                  </h3>
                </Link>
                <p>Website Design / Brand</p>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tf__featured_work_item item_2 mt_65">
                <Link
                  href="portfolio_details"
                  className="cursor-arrow tf__featured_work_item_img"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_9.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="portfolio_details">
                  <h3
                    data-text-animation="rotate-in"
                    data-split="line"
                    data-duration={1}
                  >
                    Website Design 2024
                  </h3>
                </Link>
                <p>Website Design / Brand</p>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item tf__featured_work_item_small mt_65">
                <Link
                  href="portfolio_details"
                  className="cursor-arrow tf__featured_work_item_img"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_10.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="portfolio_details">
                  <h3
                    data-text-animation="rotate-in"
                    data-split="line"
                    data-duration={1}
                  >
                    Corporate Website
                  </h3>
                </Link>
                <p>Website Design / Brand</p>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item item_2 mt_85">
                <Link
                  href="portfolio_details"
                  className="cursor-arrow tf__featured_work_item_img"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_11.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="portfolio_details">
                  <h3
                    data-text-animation="rotate-in"
                    data-split="line"
                    data-duration={1}
                  >
                    Website Design 2024
                  </h3>
                </Link>
                <p>Website Design / Brand</p>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tf__featured_work_item item_2 mt_85">
                <Link
                  href="portfolio_details"
                  className="cursor-arrow tf__featured_work_item_img"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_12.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="portfolio_details">
                  <h3
                    data-text-animation="rotate-in"
                    data-split="line"
                    data-duration={1}
                  >
                    Website Design 2024
                  </h3>
                </Link>
                <p>Website Design / Brand</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Question />
    </FxotaryLayout>
  );
};
export default page;
