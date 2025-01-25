"use client";
import Counter from "@/components/Counter";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
const page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("home_2");
  }, []);

  return (
    <FxotaryLayout>
      {/*===============================
  BANNER 2 START
    ===============================*/}
      <section className="banner_2" id="banner_2">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 m-auto">
              <div className="banner_text_2">
                <h1 className="banner_title">
                  We Are Digital <span>Agency.</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit eros
                  nullam inceptos placerat aliquet taciti conubia himenaeos
                  elementum mattis per velit eleifend ridiculus.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt_20">
            <div className="col-xl-4 col-md-4">
              <div className="banner_2_img_1">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src="images/banner_2_img_1.jpg"
                    alt="banner"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="banner_2_img_2">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src="images/banner_2_img_2.jpg"
                    alt="banner"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="banner_2_img_3">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src="images/banner_2_img_3.jpg"
                    alt="banner"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="banner_2_button">
          <li>
            <a href="#banner_2">
              <i className="fa-regular fa-arrow-up" />
            </a>
          </li>
          <li>
            <a href="#counter_2">
              <i className="fa-regular fa-arrow-down" />
            </a>
          </li>
        </ul>
      </section>
      {/*===============================
  BANNER 2 END
    ===============================*/}
      {/*============================
  BRAND 2 START
    =============================*/}
      <section className="tf__brand tf__brand_2 pt_110 xs_pt_70 pb_100 xs_pb_60">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>
                We have collaborated with some of the world's largest brands
              </p>
            </div>
            <div className="col-12">
              <Marquee className="marquee_animi">
                <ul className="tf__brand_logo_area d-flex flex-wrap justify-content-between">
                  <li data-animation="" data-delay="1.75">
                    <a href="#">
                      <img
                        src="images/brand_7.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li data-animation="">
                    <a href="#">
                      <img
                        src="images/brand_8.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li data-animation="" data-delay=".75">
                    <a href="#">
                      <img
                        src="images/brand_9.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li data-animation="" data-delay={1}>
                    <a href="#">
                      <img
                        src="images/brand_10.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li data-animation="" data-delay="1.25">
                    <a href="#">
                      <img
                        src="images/brand_11.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li data-animation="" data-delay="1.50">
                    <a href="#">
                      <img
                        src="images/brand_12.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BRAND 2 END
    =============================*/}
      {/*============================
  SERVICE 2 START
    =============================*/}
      <section className="tf__service_2 mt_60">
        <div className="row justify-content-between">
          <div className="col-xl-5">
            <div className="tf__service_2_img">
              <div data-animation="img-blur">
                <img
                  src="images/service_2_img.jpg"
                  alt="service"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7">
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
      </section>
      {/*============================
  SERVICE 2 END
    =============================*/}
      {/*===============================
  COUNTER 2 START
    ===============================*/}
      <section
        className="counter_2 pt_110 xs_pt_60 pb_70 xs_pb_20"
        id="counter_2"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-md-8 col-lg-6">
              <div className="counter_2_heading">
                <div className="section_heading section_heading_2">
                  <h2
                    data-text-animation="rotate-in"
                    data-split="char"
                    data-duration={1}
                  >
                    We Providing Digital Services in USA.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit eros
                    nullam inceptos placerat aliquet taciti conubia himenaeos
                    elementum mattis per velit eleifend ridiculus.
                  </p>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="about_us"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="counter_2_count_area">
                <div className="row">
                  <div
                    className="col-xl-6 col-sm-6"
                    data-animation="fade-bottom"
                    data-duration="1.75"
                  >
                    <div className="counter_item counter_item_icon">
                      <h2 data-duration={1} className="count">
                        <Counter end={10} />k
                      </h2>
                      <p>Project completed</p>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-sm-6"
                    data-animation="fade-bottom"
                    data-duration="1.75"
                  >
                    <div className="counter_item">
                      <h2 data-duration={1} className="count">
                        <Counter end={180} />
                      </h2>
                      <p>Skilled Professional</p>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-sm-6"
                    data-animation="fade-bottom"
                    data-duration="1.75"
                    data-delay={1}
                  >
                    <div className="counter_item">
                      <h2 className="count">
                        <Counter end={500} />
                      </h2>
                      <p>Visited Conference</p>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-sm-6"
                    data-animation="fade-bottom"
                    data-duration="1.75"
                    data-delay={1}
                  >
                    <div className="counter_item counter_item_icon">
                      <h2 className="count">
                        <Counter end={30} />k
                      </h2>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  COUNTER 2 END
    ===============================*/}
      {/*===============================
  FEATURED WORK START
    ===============================*/}
      <section className="tf__featured_work pt_90 xs_pt_40">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-8">
              <div className="section_heading section_heading_2">
                <h2 data-text-animation="" data-split="char" data-duration={1}>
                  We elevate your brand's Daring dedication.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit eros
                  nullam inceptos placerat aliquet taciti conubia himenaeos
                  elementum mattis per velit eleifend ridiculus time of human
                  beign.
                </p>
              </div>
            </div>
          </div>
          <Link
            className="circle_btn circle_btn_2 learn_more_2"
            href="portfolio"
          >
            <i className="fx-icon-long-next-arrow" /> Learn More
          </Link>
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item mb-5">
                <Link
                  href="service_details"
                  className="tf__featured_work_item_img cursor-arrow"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_1.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <h3>Brand Design</h3>
                <p>Website Design / Brand</p>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item">
                <Link
                  href="service_details"
                  className="tf__featured_work_item_img cursor-arrow"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_2.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <h3>Website Design 2024</h3>
                <p>Website Design / Brand</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  FEATURED WORK END
    ===============================*/}
      {/*============================
  BRAND 3 START
    =============================*/}
      <section className="tf__brand_3 mt_170 xs_mt_100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Marquee className="marquee_animi">
                <ul>
                  <li>Impaired With Creativity</li>
                  <li>Design &amp; Development Craft</li>
                  <li>Crafting Emotional</li>
                  <li>Product Design</li>
                  <li>laravel web development</li>
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BRAND 3 END
    =============================*/}
      {/*============================
  TEAM START
    =============================*/}
      <section className="tf__team mt_170 xs_mt_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-md-8">
              <div className="section_heading section_heading_2">
                <h2 data-text-animation="" data-split="char" data-duration={1}>
                  Let’s Check our creative team.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit eros
                  nullam inceptos placerat aliquet taciti conubia himenaeos
                  elementum mattis per velit eleifend ridiculus.
                </p>
              </div>
            </div>
          </div>
          <Link
            className="circle_btn circle_btn_2 learn_more_2"
            href="team_page"
            data-cursor='<i class="fx-icon-long-next-arrow"></i>'
          >
            <i className="fx-icon-long-next-arrow" /> See All Team <br />
            Member
          </Link>
          <div className="row">
            <div
              className="col-xl-4 col-md-6 col-lg-4"
              data-animation="fade-left"
            >
              <div className="single_team">
                <a
                  href="#"
                  className="single_team_img cursor-arrow"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                >
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
            <div
              className="col-xl-4 col-md-6 col-lg-4"
              data-animation="fade-left"
              data-delay=".75"
            >
              <div className="single_team">
                <a
                  href="#"
                  className="single_team_img cursor-arrow"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                >
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
            <div
              className="col-xl-4 col-md-6 col-lg-4"
              data-animation="fade-left"
              data-delay={1}
            >
              <div className="single_team">
                <a
                  href="#"
                  className="single_team_img cursor-arrow"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                >
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
  TEAM END
    =============================*/}
      {/*============================
  HOME 2 CONTACT START
    =============================*/}
      <section className="home_2_contact mt_60 pt_105 xs_pt_70 pb_110 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6">
              <div className="section_heading section_heading_2">
                <h2 data-text-animation="" data-split="char" data-duration={1}>
                  Stay informed on all things Fxotary👍
                </h2>
                <p />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="home_2_contact_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  purus senectus sapien habitant rutrum himena curabitur
                  posuerecongue ac non eu odio
                </p>
              </div>
            </div>
          </div>
          <form className="tf__contact_form">
            <div className="row">
              <div className="col-md-6">
                <div className="tf__contact_form_imput">
                  <label>First Name:</label>
                  <input type="text" placeholder="e.g. Willy" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tf__contact_form_imput">
                  <label>Email:</label>
                  <input type="email" placeholder="e.g. youremail@gmail.com" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tf__contact_form_imput">
                  <label>Phone:</label>
                  <input type="text" placeholder="e.g. +8801" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tf__contact_form_imput">
                  <label>subject:</label>
                  <input type="text" placeholder="e.g. I need help" />
                </div>
              </div>
              <div className="col-xl-12">
                <div className="tf__contact_form_imput">
                  <label>Message:</label>
                  <textarea
                    rows={4}
                    placeholder="e.g. you need any help"
                    defaultValue={""}
                  />
                </div>
                <button
                  className="circle_btn circle_btn_2 learn_more_2"
                  type="submit"
                >
                  <i className="fx-icon-long-next-arrow" />
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/*============================
  HOME 2 CONTACT END
    =============================*/}
      {/*===============================
  BLOG 2 START
    ===============================*/}
      <section className="blog blog_2 pt_120 xs_pt_80">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4">
              <div className="section_heading">
                <h2 data-text-animation="" data-split="char" data-duration={1}>
                  Latest News &amp; Updates.
                </h2>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="blog_right_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur inceptos placerat
                  aliquet taciti conubia.
                </p>
                <Link
                  className="circle_btn circle_btn_2 learn_more_2"
                  href="blog_list"
                >
                  <i className="fx-icon-long-next-arrow" /> View All Our <br />
                  News
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt_20">
            <div className="col-lg-4 col-md-6" data-animation="fade-left">
              <div className="single_blog first_blog">
                <div className="single_blog_text">
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <i className="far fa-calendar-check" /> September 25, 2022
                    </li>
                    <li>
                      <i className="far fa-comment-dots" /> No Comments
                    </li>
                  </ul>
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img"
                  >
                    <img
                      src="images/blog_1.jpg"
                      alt="blog"
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-animation="fade-left"
              data-delay=".75"
            >
              <div className="single_blog">
                <div className="single_blog_text">
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <i className="far fa-calendar-check" /> September 25, 2022
                    </li>
                    <li>
                      <i className="far fa-comment-dots" /> No Comments
                    </li>
                  </ul>
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img"
                  >
                    <img
                      src="images/blog_2.jpg"
                      alt="blog"
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-animation="fade-left"
              data-delay=".75"
            >
              <div className="single_blog last_blog">
                <div className="single_blog_text">
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <i className="far fa-calendar-check" /> September 25, 2022
                    </li>
                    <li>
                      <i className="far fa-comment-dots" /> No Comments
                    </li>
                  </ul>
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img"
                  >
                    <img
                      src="images/blog_3.jpg"
                      alt="blog"
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  BLOG 2 END
    ===============================*/}
      {/*===============================
  QUESTION START
    ===============================*/}
      <section
        className="tf__question pt_100 xs_pt_70 pb_100 xs_pb_70"
        data-animation="fade-bottom"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link
                href="contact"
                data-cursor='<i class="fa-light fa-envelope"></i>'
                className="tf__question_text"
              >
                <h2>
                  Have any <span>project?</span>
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  QUESTION END
    ===============================*/}
    </FxotaryLayout>
  );
};
export default page;
