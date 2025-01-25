import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__blog_list_page mt_190 xs_mt_150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-5">
              <div className="section_heading">
                <h5>OUR BLOG</h5>
                <h2 className="banner_title">Blogs List</h2>
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
          <div className="tf__blog_list_area mt_60">
            <div className="row mt_30" data-animation="">
              <div className="col-xl-5 col-lg-5 col-md-6">
                <Link
                  href="blog_details"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                  className="blog_list_img d-block"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/blog_list_img_1.jpg"
                      alt="blog"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-5 col-lg-7 col-md-6">
                <div className="blog_list_text">
                  <span>Marketing</span>
                  <ul>
                    <li>
                      <p>
                        <i className="far fa-calendar-check" /> September 25,
                        2022
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="far fa-comment-dots" /> No Comments
                      </p>
                    </li>
                  </ul>
                  <Link href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt_30" data-animation="" data-delay=".75">
              <div className="col-xl-5 col-lg-5 col-md-6">
                <Link
                  href="blog_details"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                  className="blog_list_img d-block"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/blog_list_img_2.jpg"
                      alt="blog"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-5 col-lg-7 col-md-6">
                <div className="blog_list_text">
                  <span>Marketing</span>
                  <ul>
                    <li>
                      <p>
                        <i className="far fa-calendar-check" /> September 25,
                        2022
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="far fa-comment-dots" /> No Comments
                      </p>
                    </li>
                  </ul>
                  <Link href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt_30" data-animation="" data-delay=".75">
              <div className="col-xl-5 col-lg-5 col-md-6">
                <Link
                  href="blog_details"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                  className="blog_list_img d-block"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/blog_list_img_3.jpg"
                      alt="blog"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-xl-5 col-lg-7 col-md-6">
                <div className="blog_list_text">
                  <span>Marketing</span>
                  <ul>
                    <li>
                      <p>
                        <i className="far fa-calendar-check" /> September 25,
                        2022
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="far fa-comment-dots" /> No Comments
                      </p>
                    </li>
                  </ul>
                  <Link href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tf__pagination mt_55">
            <div className="row">
              <div className="col-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <i className="fas fa-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        15
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
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
