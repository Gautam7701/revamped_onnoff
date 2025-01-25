import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";

const E404 = () => {
  return (
    <FxotaryLayout errorPage={true}>
      <section
        className="tf__error_page"
        style={{ background: "url(images/error_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto">
              <div className="tf__error_text">
                <h1
                  data-text-animation="rotate-in"
                  data-split="char"
                  data-delay=".7"
                  data-duration=".5"
                >
                  404
                </h1>
                <h2 className="banner_title">Sorry! This page can’t found</h2>
                <p>
                  The page you are looking for doesn't exist or has been moved
                </p>
                <Link href="/" className="circle_btn circle_btn_2 learn_more_2">
                  <i className="fx-icon-long-next-arrow" />
                  Back to <br />
                  Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FxotaryLayout>
  );
};
export default E404;
