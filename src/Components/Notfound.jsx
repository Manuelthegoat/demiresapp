import React from "react";

const Notfound = () => {
  return (
    <>
      <section class="comming section-padding text-center">
        <div class="v-middle">
          <div class="container">
            <div class="row mb-20">
              <div class="col-md-12">
                <h1>404</h1>
              </div>
              <div class="col-md-12">
                <h2>Not Found 404</h2>
                <h6>Sorry We Can't Find That Page!</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <p>
                  The page you are looking for was moved, removed, renamed or
                  never existed.
                </p>
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    required
                  />
                  <button>Search</button>
                </form>
              </div>
            </div>
            <div class="row mt-20">
              <div class="col-md-12">
                <a href="/" class="link-btn">
                  Home Page{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notfound;
