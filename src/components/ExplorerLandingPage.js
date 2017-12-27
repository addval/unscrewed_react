import React from 'react';
 
export const ExplorerLandingPage = () => {
	return (
		<main className="landing-main">
      <div className="container-fluid landing-page-banner">
          <div className="row">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-12 col-lg-10 col-xl-8 pt-100 pb-100 landing-page-banner-wrapper d-flex flex-column align-items-center justify-content-center">
                          <h1 className="mb-40 text-center">Now Delivering</h1>
                          <h3 className="text-center mb-40">We already search for the world's best wine deals 24/7 at Unscrewed and Vinopedia. Now we're sending you 3 of the best deals we find each month</h3>
                          <a href="../explorer/index.html" className="button-group button-group-white d-flex flex-row align-items-center justify-content-center">Try it, risk free</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid landing-intro pt-100">
          <div className="row">
              <div className="container">
                  <div className="row flex-lg-row-reverse align-items-lg-center justify-content-between">
                      <div className="col-12 col-lg-5 mb-lg-100">
                          <img src="images/landing-intro.png" className="img-fluid d-block ml-md-auto mr-auto mr-md-0" alt="Landing page intro image" />
                      </div>
                      <div className="col-12 col-lg-6 d-flex flex-column align-items-start justify-content-start mb-100">
                          <h1 className="mb-40">You explore. We do all the research.</h1>
                          <p className="mb-40">Delicious, expressive, well-made wines can be found for $15, but but it's not easy. Time to get Unscrewed. Finding these huge value gems is <span>literally</span> our business... We started Explorer so you, too, can adventure through the fascinating world of wine confident that you're getting exceptional value in each bottle. Time to discover what you've been missing...</p>
                          <a href="../explorer/index.html" className="button-group button-group-black d-flex flex-row align-items-center justify-content-center">Start Exploring</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid landing-how-itworks text-center pt-100">
          <div className="row">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <h1 className="mb-70">How it Works</h1>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12 col-lg-3">
                          <div className="landing-howitworks-card d-flex flex-column align-items-center mb-lg-100">
                              <div className="icon-box rounded-circle d-flex flex-column align-items-center justify-content-center mb-25">
                                  <img src="images/bottole-icon.png" alt="Bottle Icon" className="img-fluid d-block ml-auto mr-auto" />
                              </div>
                              <h2 className="mb-24">3 Wines</h2>
                              <p className="mb-0">We source three exceptionally high value wines at $15 / bottle</p>
                          </div>
                      </div>
                      <div className="col-12 col-lg-1 pt-60 pb-60 pb-lg-0 pt-lg-40">
                          <img src="images/arrow-right-icon.png" className="img-fluid d-block ml-auto mr-auto arrow-icon" alt="Right arrow icon" />
                      </div>
                      <div className="col-12 col-lg-4">
                          <div className="landing-howitworks-card d-flex flex-column align-items-center mb-lg-100">
                              <div className="icon-box rounded-circle d-flex flex-column align-items-center justify-content-center mb-25">
                                  <img src="images/car-icon.png" alt="Car Icon" className="img-fluid d-block ml-auto mr-auto" />
                              </div>
                              <h2 className="mb-24">Monthly Delivery</h2>
                              <p className="mb-0">Shipping is always $5 anywhere in the U.S.</p>
                          </div>
                      </div>
                      <div className="col-12 col-lg-1 pt-60 pb-60 pb-lg-0 pt-lg-40">
                          <img src="images/arrow-right-icon.png" className="img-fluid d-block ml-auto mr-auto arrow-icon" alt="Right arrow icon" />
                      </div>
                      <div className="col-12 col-lg-3">
                          <div className="landing-howitworks-card d-flex flex-column align-items-center mb-100">
                              <div className="icon-box rounded-circle d-flex flex-column align-items-center justify-content-center mb-25">
                                  <img src="images/cup-icon.png" alt="Cup Icon" className="img-fluid d-block ml-auto mr-auto" />
                              </div>
                              <h2 className="mb-24">Discover & Decide</h2>
                              <p className="mb-0">Change types & frequency, reorder or cancel any time</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid landing-feature pt-100 pb-100">
          <div className="row">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <h1 className="text-center mb-70">We are a different kind of ‘club’</h1>
                      </div>
                  </div>
                  <div className="row flex-md-row-reverse align-items-center justify-content-center">
                      <div className="col-12 col-md-4 col-xl-3 d-flex flex-row justify-content-center justify-content-md-end mb-30 mb-md-60">
                          <div className="feature-image-box rounded-circle d-flex flex-column align-items-center justify-content-center position-relative p-30">
                              <img src="images/machine-icon.png" alt="Feature Icon 1" className="img-fluid d-block ml-auto mr-auto" />
                          </div>
                      </div>
                      <div className="col-12 col-md-8 col-xl-7 mb-60">
                          <h3 className="mb-20">We don't make our own wine</h3>
                          <p className="mb-0">Great wine producers have clubs worth joining. But at the $15/bottle level, watch out for clubs that make or private label their wines. They'll say it's a big advantage, but actually it's a way for them to send you hugely profitable wines. Think about it. The best wine-makers have a hard enough time making a few great wines. Think these club "wine-makers" are expertly growing and crafting hundreds of wines for you? Don't be fooled.</p>
                      </div>
                  </div>
                  <div className="row align-items-center justify-content-center">
                      <div className="col-12 col-md-4 col-xl-3 d-flex flex-row justify-content-center justify-content-md-start mb-30 mb-md-60">
                          <div className="feature-image-box rounded-circle d-flex flex-column align-items-center justify-content-center position-relative p-20">
                              <img src="images/frouts-icon.png" alt="Feature Icon 3" className="img-fluid d-block ml-auto mr-auto" />
                          </div>
                      </div>
                      <div className="col-12 col-md-8 col-xl-7 mb-60">
                          <h3 className="mb-20">No taste matching</h3>
                          <p className="mb-0">Matching wines to your taste feels like a good idea. But it’s not. For two big reasons: 1) Taste-matching clubs really only have a few wines to 'match' with you (try answering their tests differently and see for yourself). 2) Matching taste is notoriously difficult, and, even if you could, you'd never be exploring anything new. We don't like that at Unscrewed. We think you should try great wines of all grapes, styles, and geographies. That's what our club is about: exploring with the confidence that each wine is a high value expression of that grape, style, etc.</p>
                      </div>
                  </div>
                  <div className="row flex-md-row-reverse align-items-center justify-content-center">
                      <div className="col-12 col-md-4 col-xl-3 d-flex flex-row justify-content-center justify-content-md-end mb-30 mb-md-60">
                          <div className="feature-image-box rounded-circle d-flex flex-column align-items-center justify-content-center position-relative p-30">
                              <img src="images/gift-box-icon.png" alt="Feature Icon 3" className="img-fluid d-block ml-auto mr-auto" />
                          </div>
                      </div>
                      <div className="col-12 col-md-8 col-xl-7 mb-60">
                          <h3 className="mb-20">No fancy packaging</h3>
                          <p className="mb-0">Big name wine clubs divert your attention from the wine with beautiful (i.e. expensive) presentation. We are NOT investing in custom-printed boxes, monogrammed tissue paper, focus-grouped wine labels made by design teams, or adorable full-color booklets written by an editorial staff. That’s all meant to distract you from the wine in your glass. We bought packing tape with our name on it... And we're looking for cheaper tape. </p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12 d-flex flex-row justify-content-center">
                          <a href="../explorer/index.html" className="button-group button-group-black d-flex flex-row align-items-center justify-content-center">Start Exploring</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid landing-inbox pt-100">
          <div className="row">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-12 col-md-7 mb-40 mb-md-100">
                          <img src="images/box-image.png" className="img-fluid d-block" alt="What is in your box" />
                      </div>
                      <div className="col-12 col-md-5 mb-100">
                          <h1 className="mb-40">What’s in your box</h1>
                          <ul className="mb-60">
                              <li>3 bottles (750ML)</li>
                              <li>Select all red, all whites, or 2+1 of each</li>
                              <li>Tasting notes, pairing tips and the story behind the wines</li>
                          </ul>
                          <h1 className="mb-40">$15 per bottle</h1>
                          <p className="mb-0">$49.99 per month for 3 bottles<br />(including $5 flat rate shipping)</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid landing-concept pt-100 pb-100">
          <div className="row">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-12 col-lg-10 d-flex flex-column align-items-center">
                          <h1 className="mb-40 text-center">How we select wine</h1>
                          <p className="mb-40 text-center">ALL WE CARE ABOUT when choosing your wines is QUALITY and PRICE. If our tasters and tastemakers (see unscrewed below) love a wine and it's priced exceptionally, it'll end up in your box. We don't care if it's organic, or biodynamic (though, often they are), or has an adorable backstory about the winemaker's dog, or if it has an ugly label (might be why we got the price), or if it's big and bold and jammy or light and funky and earthy. Great wines come in all styles and our club is about EXPLORING those styles with the confidence that you've got an exceptional deal. </p>
                          <a href="../explorer/index.html" className="button-group button-group-white d-flex flex-row align-items-center justify-content-center">Start Exploring</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid landing-research pt-100 pb-100">
          <div className="row">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-12 col-lg-10 text-center">
                          <h1 className="mb-20">Our Value Research Engines</h1>
                          <p className="mb-60">Unscrewed Inc. owns two companies that constantly analyze the global and local wine markets. As a result, we often encounter exceptional deals. We created the Unscrewed Explorer program because we wanted to include more people in our discoveries.</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12 col-md-6 d-flex flex-row align-items-stretch">
                          <div className="landing-research-card pt-50 pb-50 pl-20 pr-20 p-lg-50 mb-70">
                              <img src="images/vinopedia-logo.png" alt="Vinopedia Logo" className="img-fluid d-block ml-auto mr-auto mb-30" />
                              <p className="text-center mb-0">Vinopedia is a global wine search engine tracking millions of wines across thousands of retailers. We compare prices, aggregate reviews and monitor inventories so that you can find the best wines for your money, at the best prices. Unlike our competition, Vinopedia is free and always will be.</p>
                          </div>
                      </div>
                      <div className="col-12 col-md-6 d-flex flex-row align-items-stretch">
                          <div className="landing-research-card pt-50 pb-50 pl-20 pr-20 p-lg-50 mb-70">
                              <img src="images/unscrewed_logo.svg" alt="Unscrewed Logo" className="img-fluid d-block ml-auto mr-auto mb-40" />
                              <p className="text-center mb-0">Unscrewed is a mobile app that helps you find great wines at the places you shop, like Trader Joe's, Kroger, Costco and Whole Foods. It puts chefs, wine experts and friends whose taste you trust in the aisles with you, so you're never shopping for wine alone. (Currently in LA and Seattle, more soon!).</p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12 d-flex flex-row justify-content-center">
                          <a href="../explorer/index.html" className="button-group button-group-black d-flex flex-row align-items-center justify-content-center">Try it, risk free</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
	)
}
