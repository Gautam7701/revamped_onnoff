import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
const page = () => {
  return (
    <FxotaryLayout>
      {" "}
      {/*===============================
  SERVICES PAGE START
    ===============================*/}
      <section className="tf__services_page tf__about_us_2 mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="section_heading">
                <h5>OUR SERVICES</h5>
                <h2 className="banner_title" data-text-animation="slide-up">
                  Our fusion of design and code is driven by our unwavering
                  passion.
                </h2>
              </div>
              <div className="about_text_2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  purus senectus sapien habitant rutrum himenaeos curabitur
                  posuere congue ac non eu odio tempor placerat id.
                </p>
                <a className="circle_btn" href="#service_list">
                  View All <br />
                  Our Services <i className="fx-icon-next-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tf__service_2 mt_60">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-6">
              <div className="tf__service_2_img">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src="images/service_2_img.jpg"
                    alt="service"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="tf__service_2_text">
                <h2 data-text-animation="scrub" data-split="char">
                  Branding <span>Branding</span>
                </h2>
                <h2 data-text-animation="scrub" data-split="char">
                  UX/UI Design <span>UX/UI Design </span>
                </h2>
                <h2 data-text-animation="scrub" data-split="char">
                  Digital Marketing
                </h2>
                <h2 data-text-animation="scrub" data-split="char">
                  Graphic Design<span>Graphic Design</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="tf__services_page_item" id="service_list">
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/service_pages_img_1.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="word">
                    Website &amp; Mobile App Development
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    viverra purus senectus sapien habitant rutrum himenaeos
                    curabitur posuere congue ac non eu odio tempor placerat id.
                  </p>
                  <ul>
                    <li>Web 3.0 Development</li>
                    <li>Webflow Development</li>
                    <li>Blockchain Technology</li>
                    <li>Backend Development</li>
                    <li>JavaScript</li>
                    <li>WordPress</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="service_details"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_2">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="char">
                    User Interface Design &amp; Branding
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    viverra purus senectus sapien habitant rutrum himenaeos
                    curabitur posuere congue ac non eu odio tempor placerat id.
                  </p>
                  <ul>
                    <li>Web 3.0 Development</li>
                    <li>Webflow Development</li>
                    <li>Blockchain Technology</li>
                    <li>Backend Development</li>
                    <li>JavaScript</li>
                    <li>WordPress</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="service_details"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/service_pages_img_2.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/service_pages_img_3.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                    Promotion of your Product Marketing
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    viverra purus senectus sapien habitant rutrum himenaeos
                    curabitur posuere congue ac non eu odio tempor placerat id.
                  </p>
                  <ul>
                    <li>Web 3.0 Development</li>
                    <li>Webflow Development</li>
                    <li>Blockchain Technology</li>
                    <li>Backend Development</li>
                    <li>JavaScript</li>
                    <li>WordPress</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="service_details"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  SERVICES PAGE END
    ===============================*/}
      <Question />
    </FxotaryLayout>
  );
};
export default page;
