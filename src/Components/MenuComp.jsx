import React from 'react'


const MenuComp = () => {
    const [activeTab, setActiveTab] = useState("tab-1"); // Default active tab

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    <>
    <div
      className="banner-header valign bg-img bg-fixed menubg"
      data-overlay-dark="6"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center caption mt-60">
            <h5>Menu</h5>
            <h1>
              Our Special Meals <span>Food & Drinks</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <section className="menu-book tabs section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="tab-links mb-60">
              <ul className="text-center">
                {["Starters", "Mains", "Salads", "Desserts", "Wine"].map(
                  (label, index) => {
                    const tab = `tab-${index + 1}`;
                    return (
                      <li
                        key={tab}
                        className={`item-link ${
                          activeTab === tab ? "current" : ""
                        }`}
                        onClick={() => handleTabClick(tab)}
                      >
                        {label}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="position-re">
              {["tab-1", "tab-2", "tab-3", "tab-4", "tab-5"].map((tab) => (
                <div
                  key={tab}
                  className={`tab-content ${
                    activeTab === tab ? "current" : ""
                  }`}
                >
                  {tab === "tab-1" && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/starters/1.jpg"
                                className="image-popup-vertical-fit"
                                title="Mozzarella Dippers"
                              >
                                <img
                                  src="img/menu/starters/1.jpg"
                                  alt="Mozzarella Dippers"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">Mozzarella Dippers</div>
                              <div className="dots"></div>
                              <div className="price">$27.00</div>
                            </div>
                            <p>
                              <i>Fried mozzarella sticks, marinara sauce</i>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/starters/3.jpg"
                                className="image-popup-vertical-fit"
                                title="Onion Rings"
                              >
                                <img
                                  src="img/menu/starters/3.jpg"
                                  alt="Onion Rings"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">Onion Rings</div>
                              <div className="dots"></div>
                              <div className="price">$15.00</div>
                            </div>
                            <p>
                              <i>Fried onion rings, smoked aioli</i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {tab === "tab-2" && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/mains/1.jpg"
                                className="image-popup-vertical-fit"
                                title="Rusty’s Burger"
                              >
                                <img
                                  src="img/menu/mains/1.jpg"
                                  alt="Rusty’s Burger"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">Rusty’s Burger</div>
                              <div className="dots"></div>
                              <div className="price">$35.00</div>
                            </div>
                            <p>
                              <i>
                                Smoked pulled beef ribs, bbq sauce, cheddar
                              </i>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/mains/3.jpg"
                                className="image-popup-vertical-fit"
                                title="Southern Fried Chicken"
                              >
                                <img
                                  src="img/menu/mains/3.jpg"
                                  alt="Southern Fried Chicken"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">
                                Southern Fried Chicken
                              </div>
                              <div className="dots"></div>
                              <div className="price">$45.50</div>
                            </div>
                            <p>
                              <i>Cajun coated chicken breast, fries</i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {tab === "tab-3" && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/salads/1.jpg"
                                className="image-popup-vertical-fit"
                                title="Ceaser Salad"
                              >
                                <img
                                  src="img/menu/salads/1.jpg"
                                  alt="Ceaser Salad"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">Ceaser Salad</div>
                              <div className="dots"></div>
                              <div className="price">$15.00</div>
                            </div>
                            <p>
                              <i>Romaine lettuce, croutons, parmigiano</i>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/salads/3.jpg"
                                className="image-popup-vertical-fit"
                                title="Grilled Salmon Salad"
                              >
                                <img
                                  src="img/menu/salads/3.jpg"
                                  alt="Grilled Salmon Salad"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">
                                Grilled Salmon Salad
                              </div>
                              <div className="dots"></div>
                              <div className="price">$25.00</div>
                            </div>
                            <p>
                              <i>
                                Grilled salmon, mixed greens, orange slices
                              </i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {tab === "tab-4" && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/desserts/1.jpg"
                                className="image-popup-vertical-fit"
                                title="New York Cheesecake"
                              >
                                <img
                                  src="img/menu/desserts/1.jpg"
                                  alt="New York Cheesecake"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">New York Cheesecake</div>
                              <div className="dots"></div>
                              <div className="price">$20.00</div>
                            </div>
                            <p>
                              <i>Cheesecake, strawberry & lime salad</i>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/desserts/3.jpg"
                                className="image-popup-vertical-fit"
                                title="Vegan Potato Waffles"
                              >
                                <img
                                  src="img/menu/desserts/3.jpg"
                                  alt="Vegan Potato Waffles"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">
                                Vegan Potato Waffles
                              </div>
                              <div className="dots"></div>
                              <div className="price">$28.00</div>
                            </div>
                            <p>
                              <i>Walnut banana syrup salad</i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {tab === "tab-5" && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/wine/1.jpg"
                                className="image-popup-vertical-fit"
                                title="Merlot 2019"
                              >
                                <img
                                  src="img/menu/wine/1.jpg"
                                  alt="Merlot 2019"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">Merlot 2019</div>
                              <div className="dots"></div>
                              <div className="price">$35.00</div>
                            </div>
                            <p>
                              <i>Rich red wine with fruity aromas</i>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="menu-list mb-30">
                          <div className="item">
                            <div className="img">
                              <a
                                href="img/menu/wine/3.jpg"
                                className="image-popup-vertical-fit"
                                title="Chardonnay 2018"
                              >
                                <img
                                  src="img/menu/wine/3.jpg"
                                  alt="Chardonnay 2018"
                                />
                              </a>
                            </div>
                            <div className="flex">
                              <div className="title">Chardonnay 2018</div>
                              <div className="dots"></div>
                              <div className="price">$30.00</div>
                            </div>
                            <p>
                              <i>Elegant white wine with oak flavors</i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Booking />
  </>
  )
}

export default MenuComp