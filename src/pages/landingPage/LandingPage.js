import './LandingStyle.css';
import { useState } from 'react';

export function LandingPage() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOnClickMenu = (e) => {
    const navBox = document.querySelector('.nav-box');
    if (!menuIsOpened) {
      navBox.classList.add('show');
      setMenuIsOpened(true);
    } else {
      navBox.classList.remove('show');
      setMenuIsOpened(false);
    }
  };

  const handleClickOutSide = (e) => {
    const navBox = document.querySelector('.nav-box');
    if (!navBox.contains(e.target)) {
      setMenuIsOpened(false);
      navBox.classList.remove('show');
    }
  };

  const aTags = document.querySelectorAll('.side-nav a');

  return (
    <div>
      <div className="nav-wrapper sticky noselect">
        <div className="nav-container">
          <div className="logo">
            <span className="author pointer ">Author</span>
            <span className="dot">.</span>
          </div>
          <div onClick={handleOnClickMenu} className="menu pointer">Menu</div>
          <div className="nav-box">
            <div className="pointer">Home</div>
            <div className="pointer">About</div>
            <div className="pointer">Reviews</div>
            <div className="pointer">My Books</div>
            <div className="pointer">Author</div>
            <div className="pointer">Contact</div>
          </div>
        </div>
      </div>
      <div className="body-container my-4 ">
        <div onClick={handleClickOutSide} className="intro-wrapper my-4">
          <div className="intro-container">
            <div className="sub-heading txt-ct">Best Seller Book Of The Week</div>
            <h1 className="heading txt-ct">Clue Of The Wooden Cottage</h1>
            <p className="content mb-4">
              A small river named Duden flows by their place and supplies it with the
              necessary
              regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <a className="buy pointer">Buy Now For $22.78</a>
          </div>
          <img
            src="https://preview.colorlib.com/theme/author/images/undraw_book_lover_mkck.svg"
            alt="bookLover"
          />
        </div>
        <div className="partners my-4">
          <img src="https://preview.colorlib.com/theme/author/images/partner-1.png.webp" alt="partner1" />
          <img src="https://preview.colorlib.com/theme/author/images/partner-2.png.webp" alt="partner2" />
          <img src="https://preview.colorlib.com/theme/author/images/partner-3.png.webp" alt="partner3" />
          <img src="https://preview.colorlib.com/theme/author/images/partner-4.png.webp" alt="partner4" />
          <img src="https://preview.colorlib.com/theme/author/images/partner-5.png.webp" alt="partner5" />
        </div>
        <div className="about-wrapper my-4">
          <div className="about-img-container">
            <img
              src="https://preview.colorlib.com/theme/author/images/bg_1.jpg.webp"
              alt="book"
            />
          </div>
          <div className="about-container">
            <h2 className="mb-4">About The Book</h2>
            <p>
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It
              is a
              paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <h4 className="mb-4">Award achievements</h4>
            <p>
              Far far away, behind the
              word mountains, far from the countries Vokalia and Consonantia,
              there
              live
              the blind texts. Separated they live in
              Bookmarksgrove right at the coast of the Semantics,
              a
              large
              language ocean.
            </p>
            <h4 className="mb-4">Read On Any Devices</h4>
            <p>
              Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language
              ocean.
            </p>
            <h4 className="mb-4">Very High Resolution</h4>
            <p>
              Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia, there
              live
              the blind texts.
            </p>
          </div>
        </div>
        <div className="counter-wrapper txt-ct my-4 bg-light">
          <div>
            <div className="number">1,100</div>
            <div className="counter-txt">Copies Sold</div>
          </div>
          <div>
            <div className="number">1,200</div>
            <div className="counter-txt">Copies Released</div>
          </div>
          <div>

            <div className="number">340</div>
            <div className="counter-txt">Cup Of Coffee</div>
          </div>
          <div>
            <div className="number">12,000</div>
            <div className="counter-txt">Happy Readers</div>
          </div>
        </div>
        <div className="chapter my-4">
          <h2 className="txt-ct mb-4">What's Inside The Book</h2>
          <div className="chapter-container my-4">
            <div className="side-nav">
              <div><a href="#titlePage">Title page</a></div>
              <div><a href="#copyright">Copyright</a></div>
              <div><a href="#tableOfContents">Table of contents</a></div>
              <div><a href="#dedication">Dedication</a></div>
              <div><a href="#foreword">Foreword</a></div>
              <div><a href="#epologue">Epologue</a></div>
              <div><a href="#epilogue">Epilogue</a></div>
            </div>
            <div className="chapter-content">
              <div id="titlePage" className="bg-light">
                <h2>Title page</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind Text, that where it came
                  from
                  it would have been rewritten a thousand times and everything that was left from its
                  origin would be the word "and" and the Little Blind Text should turn around and
                  return
                  to its own, safe country. But nothing the copy said could convince her and so it
                  didn’t
                  take long until a few insidious Copy Writers ambushed her, made her drunk with Longe
                  and
                  Parole and dragged her into their agency, where they abused her for their.
                </p>
              </div>
              <div id="copyright" className="bg-light">
                <h2>Copyright</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind Text, that where it came
                  from
                  it would have been rewritten a thousand times and everything that was left from its
                  origin would be the word "an
                  d" and the Little Blind Text should turn around and
                  return
                  to its own, safe country. But nothing the copy said could convince her and so it
                  didn’t
                  take long until a few insidious Copy Writers ambushed her, made her drunk with Longe
                  and
                  Parole and dragged her into their agency, where they abused her for their.
                </p>
              </div>
              <div id="tableOfContents" className="bg-light">
                <h2>Table of Contents</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind Text, that where it came
                  from
                  it would have been rewritten a thousand times and everything that was left from its
                  origin would be the word "and" and the Little Blind Text should turn around and
                  return
                  to its own, safe country. But nothing the copy said could convince her and so it
                  didn’t
                  take long until a few insidious Copy Writers ambushed her, made her drunk with Longe
                  and
                  Parole and dragged her into their agency, where they abused her for their.
                </p>
              </div>
              <div id="dedication" className="bg-light">
                <h2>Dedication</h2>
                <p>
                  {' '}
                  On her way she met a copy. The copy warned the Little Blind Text, that where it came
                  from it would have been rewritten a thousand times and everything that was left from
                  its
                  origin would be the word "and" and the Little Blind Text should turn around and
                  return
                  to its own, safe country. But nothing the copy said could convince her and so it
                  didn’t
                  take long until a few insidious Copy Writers ambushed her, made her drunk with Longe
                  and
                  Parole and dragged her into their agency, where they abused her for their.
                </p>
              </div>
              <div id="foreword" className="bg-light">
                <h2>Foreword</h2>
                <p>
                  {' '}
                  On her way she met a copy. The copy warned the Little Blind Text, that where it came
                  from it would have been rewritten a thousand times and everything that was left from
                  its
                  origin would be the word "and" and the Little Blind Text should turn around and
                  return
                  to its own, safe country. But nothing the copy said could convince her and so it
                  didn’t
                  take long until a few insidious Copy Writers ambushed her, made her drunk with Longe
                  and
                  Parole and dragged her into their agency, where they abused her for their.
                </p>
              </div>
              <div id="epologue" className="bg-light">
                <h2>Epologue</h2>
                <p>
                  {' '}
                  On her way she met a copy. The copy warned the Little Blind Text, that where it came
                  from it would have been rewritten a thousand times and everything that was left from
                  its
                  origin would be the word "and" and the Little Blind Text should turn around and
                  return
                  to its own, safe country. But nothing the copy said could convince her and so it
                  didn’t
                  take long until a few insidious Copy Writers ambushed her, made her drunk with Longe
                  and
                  Parole and dragged her into their agency, where they abused her for their.
                </p>
              </div>
              <div id="epilogue" className="bg-light">
                <h2>Epilogue</h2>
                <p>
                  {' '}
                  On her way she met a copy. The copy warned the Little Blind Text, that where it came
                  from it would have been rewritten a thousand times and everything that was left from
                  its
                  origin would be the word "and" and the Little Blind Text should turn around and
                  return
                  to its own, safe country. But nothing the copy said could convince her and so it
                  didn’t
                  take long until a few insidious Copy Writers ambushed her, made her drunk with Longe
                  and
                  Parole and dragged her into their agency, where they abused her for their.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="service-wrapper mb-4"> */}
      {/*    <div className="small-service center">Services</div> */}
      {/*    <div className="big-service center">Services</div> */}
      {/* </div> */}
    </div>
  );
}
