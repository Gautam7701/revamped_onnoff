import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__blog_details mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="tf__blog_details_header">
                <h5>DIGITAL MARKETING / 25 Jan 2023</h5>
                <h1 className="banner_title">
                  Extraordinary claims necessitate a network of wormhole
                  colonies.
                </h1>
                <ul>
                  <li>
                    <div className="img">
                      <img
                        src="images/details_bloger.png"
                        alt="bloger"
                        className="img-fluid w-100"
                      />
                    </div>
                  </li>
                  <li>
                    <h4>Written by</h4>
                    <p>Tomas Markt</p>
                  </li>
                  <li>
                    <h4>Viewed</h4>
                    <p>3 min read</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tf__blog_details_img">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src="images/futured_work_img_9.jpg"
                    alt="blog details"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-xxl-7 col-lg-8">
              <div className="tf__blog_details_text">
                <p>
                  Why I say old chap that is, spiffing jolly good a load of old
                  tosh spend a penny tosser arse over tit, excuse my French owt
                  to do with me up the kyver matie boy at public school. Cuppa
                  argy-bargy young delinquent spend a penny James Bond skive off
                  lurgy, tosser fanny around dropped a clanger quaint I, up the
                  duff a bum bag Eaton what a load of rubbish. Matie boy pardon
                  me blow off easy
                </p>
                <p>
                  Cras mush pardon you knees up he lost his bottle it’s all gone
                  to pot faff about porkies arse, barney argy-bargy cracking
                  goal loo cheers spend a penny bugger all mate in my flat,
                  hunky-dory well get stuffed mate David morish bender lavatory.
                  What a load of rubbish car boot bite your arm off blatant
                  pardon you, old tosser get stuffed mate tomfoolery mush
                </p>
                <div className="details_quot_text">
                  <p>
                    Elizabeth ummm I’m telling bodge spend a penny say wellies
                    say James Bond, bubble and squeak a such a fibber optical
                    service your business you mug quaint cack what.!
                  </p>
                </div>
                <p>
                  Bloke cracking goal the full monty get stuffed mate posh
                  wellies fantastic knackered tickety-boo Harry porkies, mush
                  excuse my French bender down the pub Oxford bum bag gutted
                  mate car boot pukka loo it’s your round, cor blimey guvnor is
                  on your bike mate cup of char some dodgy chav blag happy days
                  nancy boy hotpot.
                </p>
                <p>
                  Cras chinwag brown bread Eaton cracking goal so I said a load
                  of old tosh baking cakes, geeza arse it’s your round grub
                  sloshed burke, my good sir chancer he legged it he lost his
                  bottle pear shaped bugger all mate. Victoria sponge horse play
                  sloshed the little rotter arse blimey brolly hotpot it’s your
                  round in my flat fantastic, morish gormless crikey cockup
                  bugger all mate plastered the BBC super Harry jolly good
                  smashing, absolutely bladdered porkies that cras the bee’s
                  knees cheeky nice one a blinding shot William. Brolly bevvy
                  James Bond is porkies Elizabeth
                </p>
              </div>
              <form className="tf__contact_form blog_contact_form">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tf__contact_form_imput">
                      <label>First Name:</label>
                      <input type="text" placeholder="e.g. Willy" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__contact_form_imput">
                      <label>Email:</label>
                      <input
                        type="email"
                        placeholder="e.g. youremail@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__contact_form_imput">
                      <label>Phone:</label>
                      <input type="text" placeholder="e.g. +8801" />
                    </div>
                  </div>
                  <div className="col-xl-6">
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
            <div className="col-xxl-4 col-lg-4">
              <div className="tf__details_sidebar" id="sticky_sidebar">
                <div className="tf__sidebar_search">
                  <form>
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <div className="tf__sidebar_post mt_35">
                  <h3>Recent Posts</h3>
                  <ul>
                    <li>
                      <div className="img">
                        <img
                          src="images/sidebar_post_img_1.jpg"
                          alt="post"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <Link href="blog_details">Doloremque velit sapien</Link>
                        <p>January 14, 2021</p>
                      </div>
                    </li>
                    <li>
                      <div className="img">
                        <img
                          src="images/sidebar_post_img_2.jpg"
                          alt="post"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <Link href="blog_details">
                          Aliquam mollit nemo taci
                        </Link>
                        <p>January 14, 2021</p>
                      </div>
                    </li>
                    <li>
                      <div className="img">
                        <img
                          src="images/sidebar_post_img_3.jpg"
                          alt="post"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <Link href="blog_details">
                          Interdum luctus accu sam
                        </Link>
                        <p>January 14, 2021</p>
                      </div>
                    </li>
                    <li>
                      <div className="img">
                        <img
                          src="images/sidebar_post_img_4.jpg"
                          alt="post"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <Link href="blog_details">Why I say old chat that</Link>
                        <p>January 14, 2021</p>
                      </div>
                    </li>
                    <li>
                      <div className="img">
                        <img
                          src="images/sidebar_post_img_5.jpg"
                          alt="post"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <Link href="blog_details">Bloke cracking goal the</Link>
                        <p>January 14, 2021</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tf__sidebar_archive mt_65">
                  <h3>Archive</h3>
                  <p>January 2021</p>
                  <p>February 2021</p>
                </div>
                <div className="tf__sidebar_category mt_65">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Food for thought</a>
                    </li>
                    <li>
                      <a href="#">Gaming</a>
                    </li>
                    <li>
                      <a href="#">Quote</a>
                    </li>
                    <li>
                      <a href="#">Video post</a>
                    </li>
                  </ul>
                </div>
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
