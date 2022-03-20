import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/images/logo.png';

export const Header: React.FC<any> = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<any>(null);

  // handle scroll event
  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <>
      <section style={{ marginTop: sticky.offset }}>
        <header
          className={`header ${sticky.isSticky ? ' sticky' : ''}`}
          ref={headerRef}
        >
          <div>
            <div className="header__box">
              <div className="header__logo">
                <p className="header__logo-text">
                  <img width="50" height="50" src={img} alt="logo" />
                </p>
              </div>
              <div className="filter">
                <p className="text-right font-weight-bold">
                  UNLIMITED TV SHOWS & News
                </p>
                {/* <input type='text' placeholder='Search'/> */}
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
