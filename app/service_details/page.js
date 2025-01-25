import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__about_us_2 mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading">
                <h5>ABOUT US</h5>
                <h2 className="banner_title">
                  Our fusion of design and code is driven by our unwavering
                  passion.
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt_30 xs_mt_50 item_1">
            <div className="col-xl-4 col-md-6" />
            <div className="col-xl-8 col-md-6">
              <div className="tf__services_2_text">
                <div className="d-flex">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    viverra purus senectus sapien habitant rutrum himenaeos
                    curabitur posuere congue
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    viverra purus senectus sapien habitant rutrum himenaeos
                    curabitur posuere congue
                  </p>
                </div>
                <ul>
                  <li>Web 3.0 Development</li>
                  <li>Webflow Development</li>
                  <li>Blockchain Technology</li>
                  <li>Backend Development</li>
                  <li>JavaScript</li>
                  <li>WordPress</li>
                </ul>
                <div className="mt-5">
                  <img
                    src="images/service_details.png"
                    alt="service"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <h3>Website &amp; Mobile App Development</h3>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <p className="mt-0">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  purus senectus sapien habitant rutrum himenaeos curabitur
                  posuere congue ac non eu odio tempor placerat id. Lorem ipsum
                  dolor sit amet consectetur adipiscing elit viverra purus
                  senectus sapien habitant rutrum himenaeos curabitur posuere
                </p>
                <ul>
                  <li>Web 3.0 Development</li>
                  <li>Webflow Development</li>
                  <li>Blockchain Technology</li>
                  <li>Backend Development</li>
                  <li>JavaScript</li>
                  <li>WordPress</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-6 col-xl-8 mb-3">
              <img src="./images/service_details-1.png" alt="" />
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
              <img src="./images/service_details-2.png" alt="" />
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-0 col-xl-2" />
            <div className="col-md-12 col-xl-10">
              <div className="tf__services_2_text">
                <h3>
                  User Interface Design <br />
                  &amp; Branding
                </h3>
                <div className="d-flex">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    viverra purus senectus sapien habitant rutrum himenaeos
                    curabitur posuere congue
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    viverra purus senectus sapien habitant rutrum himenaeos
                    curabitur posuere congue
                  </p>
                </div>
                <ul>
                  <li>Web 3.0 Development</li>
                  <li>Webflow Development</li>
                  <li>Blockchain Technology</li>
                  <li>Backend Development</li>
                  <li>JavaScript</li>
                  <li>WordPress</li>
                </ul>
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
