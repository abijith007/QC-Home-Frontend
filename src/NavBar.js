import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            QC@Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-item nav-link active"
                href="#"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                About Us <span className="sr-only">(current)</span>
              </a>
              <div
                className="modal fade bd-example-modal-lg"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="exampleModalScrollableTitle"
                      >
                        The Team
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-6 col-md-4">
                          <img
                            src="adi.jpeg"
                            className="rounded-circle"
                            alt="Aditya Pati"
                            width="200"
                            height="200"
                          ></img>
                        </div>
                        <br></br>
                        <div className="col-12 col-md-8">
                          {" "}
                          <br></br>{" "}
                          <h4>
                            <b>Aditya Pati</b>
                          </h4>
                          I enjoy learning new and unexplored new fields
                          regularly. Love working on Web and Graphic Design
                          based projects
                        </div>
                      </div>
                      <br></br>
                      <div className="row">
                        <div className="col-6 col-md-4">
                          <img
                            src="abeer.jpeg"
                            className="rounded-circle"
                            alt="Abeer Vaishnav"
                            width="200"
                            height="200"
                          ></img>
                        </div>
                        <br></br>
                        <div className="col-12 col-md-8">
                          <br></br>{" "}
                          <h4>
                            <b>Abeer Vaishnav</b>
                          </h4>
                          I am a pure Science Enthusiast currently researching
                          on Quantum Computing topics. I enjoy singing and
                          tweaking with electronic gadgets in my free time.
                        </div>
                      </div>
                      <br></br>
                      <div className="row">
                        <div className="col-6 col-md-4">
                          <img
                            src="abi.png"
                            className="rounded-circle"
                            alt="Abijith Trichur Ramachandran"
                            width="200"
                            height="200"
                          ></img>
                        </div>
                        <br></br>
                        <div className="col-12 col-md-8">
                          {" "}
                          <br></br>{" "}
                          <h4>
                            <b>Abijith Trichur Ramachandran</b>
                          </h4>
                          I enjoy Web Development and believe in hard work at
                          every step. I am also a professional photographer who
                          tries to capture the best moment of nature.
                        </div>
                      </div>
                      <br></br>
                      <div className="row">
                        <div className="col-6 col-md-4 ">
                          <img
                            src="harika.png"
                            className="rounded-circle"
                            alt="Balusa Venkata Sai Harika"
                            width="200"
                            height="200"
                          ></img>
                        </div>
                        <br></br>
                        <div className="col-12 col-md-8">
                          {" "}
                          <br></br>{" "}
                          <h4>
                            <b>Balusa Venkata Sai Harika</b>
                          </h4>
                          I am a front end web developer and an avid reader
                          currently interested in Data Science. I like reading
                          about new ideas and capturing nature through the lens.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
