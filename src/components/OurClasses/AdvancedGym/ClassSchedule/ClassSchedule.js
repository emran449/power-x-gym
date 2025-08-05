import React from "react";
import "./ClassSchedule.css"; // Assuming you have a CSS file for styling
import advanceImg from "../../../../Image-Icon/advance.jpg";

const ClassSchedule = () => {
  return (
    <div className="class-schedule">
      <div className="container">
        <div className="row h-100  position-relative">
          <div className="col-md-7">
            <div className="class-schedule__image">
              <img
                src={advanceImg}
                height="400px"
                width="100%"
                alt="Class Schedule"
              />
            </div>
            <div className="mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, quo provident excepturi, inventore distinctio quibusdam
                perferendis vero nesciunt, deleniti rem fugiat tempora ipsam
                quod? Cupiditate, quasi! Eaque saepe velit porro! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sunt inventore
                aliquam quia corrupti quam recusandae voluptatem unde, illum,
                molestias ab tempore iusto. Reiciendis, quos. Qui magnam quam
                minima necessitatibus numquam!
              </p>
              <div class="container mt-5">
                <h4 class="mb-4">Select Your Fitness Goals</h4>
                <form>
                  <div class="form-check fw-bold">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="goal1"
                      checked
                    />
                    <label class="form-check-label" for="goal1">
                      Having Slimmer Shapely Thighs
                    </label>
                  </div>
                  <div class="form-check mt-2 fw-bold">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="goal2"
                      checked
                    />
                    <label class="form-check-label" for="goal2">
                      Getting Stronger Body
                    </label>
                  </div>
                  <div class="form-check mt-2 fw-bold">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="goal3"
                      checked
                    />
                    <label class="form-check-label" for="goal3">
                      Increased Metabolism
                    </label>
                  </div>
                  <div class="form-check mt-2 fw-bold">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="goal4"
                      checked
                    />
                    <label class="form-check-label" for="goal4">
                      Increased Muscular Endurance
                    </label>
                  </div>
                  <div class="form-check mt-2 fw-bold">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="goal5"
                      checked
                    />
                    <label class="form-check-label" for="goal5">
                      Maximum Results in Less Time
                    </label>
                  </div>
                  <div class="form-check mt-2 fw-bold">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="goal6"
                      checked
                    />
                    <label class="form-check-label" for="goal6">
                      Firm Hips and Tummy
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5 h-100 ">
            <div className="class-schedule__content">
              <div className="mb-5">
                <h2 className="text-uppercase">
                  <span className="text-warning">Class</span> Schedule
                </h2>
              </div>
              <div>
                <div className="card-group ">
                  <div className="card me-2 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Monday</h5>
                      <p className="card-text text-warning">
                        8:00 AM - 9:00 AM
                      </p>
                    </div>
                  </div>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Tuesday</h5>
                      <p className="card-text text-warning">
                        10:00 AM - 11:00 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-group mt-3">
                  <div className="card me-2 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Wednesday</h5>
                      <p className="card-text text-warning">
                        6:00 AM - 7:00 AM
                      </p>
                    </div>
                  </div>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Thursday</h5>
                      <p className="card-text text-warning">
                        5:00 AM - 6:00 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-group mt-3">
                  <div className="card me-2 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Friday</h5>
                      <p className="card-text text-warning">
                        6:00 AM - 7:00 AM
                      </p>
                    </div>
                  </div>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Saturday</h5>
                      <p className="card-text text-warning">
                        7:00 AM - 8:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-absolute bottom-0 end-0">
                <button className="btn btn-warning fw-bold px-5">
                  JOIN US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
