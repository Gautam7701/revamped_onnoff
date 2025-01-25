import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
const page = () => {
  return (
    <FxotaryLayout>
      {/*============================
  TEAM PAGE START
    =============================*/}
      <section className="tf__team tf__team_about mt_190 xs_mt_150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-5">
              <div className="section_heading section_heading_2">
                <h5>See Our Team Member.</h5>
                <h2 className="banner_title">Let’s Check our creative team.</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="tf__team_page_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  purus senectus sapien habitant rutrum himenaeos curabitur
                  posuere congue ac non eu odio tempor placerat id.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_team" data-animation="fade-left">
                <a href="#" className="single_team_img cursor-arrow">
                  <img
                    src="images/team_1.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                </a>
                <h3>Wade Warren</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div
                className="single_team"
                data-animation="fade-left"
                data-delay=".75"
              >
                <a href="#" className="single_team_img cursor-arrow">
                  <img
                    src="images/team_2.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                </a>
                <h3>Willy Tommy</h3>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div
                className="single_team"
                data-animation="fade-left"
                data-delay={1}
              >
                <a href="#" className="single_team_img cursor-arrow">
                  <img
                    src="images/team_3.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                </a>
                <h3>Jacob Wilson</h3>
                <p>Digital Marketer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  TEAM PAGE END
    =============================*/}
      {/*===============================
  COUNTER START
    ===============================*/}
      <section className="counter team_page_counter pt_125 xs_pt_75">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-md-6">
              <div className="counter_img">
                <img
                  src="images/counter_img.png"
                  alt="counter"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="row">
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item counter_item_icon"
                    data-animation="fade-right"
                  >
                    <h2 className="count">10</h2>
                    <p>Project completed</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item"
                    data-animation="fade-right"
                    data-delay=".75"
                  >
                    <h2 className="count">180</h2>
                    <p>Skilled Professional</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item"
                    data-animation="fade-right"
                    data-delay={1}
                  >
                    <h2 className="count">500</h2>
                    <p>Visited Conference</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item counter_item_icon"
                    data-animation="fade-right"
                    data-delay="1.25"
                  >
                    <h2 className="count">30</h2>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  COUNTER END
    ===============================*/}
      <Question />
    </FxotaryLayout>
  );
};
export default page;
