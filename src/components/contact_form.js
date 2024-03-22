import React from "react";
import '../style.css';
export const contact_F = () => {
    return (
      <contact id="Contact">
        <div className="row contact">
          <div className="col-12 contact_head mt-5 p-2 mb-3">CONTACT US</div>
          <div className="row">
            <div className="col-lg-2 col-sm-2"></div>
            <div className="col-lg-8 col-sm-8 contact_subhead p-4 pb-3">
              sed ut prepciatis unde omnis iste natus error sit volupetamn
              accusiatism doloreguemrne laudatntium. totam rem applierianm
            </div>
          </div>
          <form>
            <div className="row p-5 pt-2">
              <div className="col-sm-6 p-2 pb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-sm-6 p-2">
                <select className="form-select input" required>
                  <option selected>Category</option>
                  <option value="General">General</option>
                  <option value="SC">SC</option>
                  <option value="OBC">OBc</option>
                  <option value="ST">ST</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="col-sm-6 p-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="col-sm-6 p-2 pb-3">
                <select className="form-select select input" required>
                  <option selected disabled>
                    City
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
              <div className="col-sm-12 p-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="col-sm-12 p-2">
                <input
                  type="text"
                  className="form-control msg"
                  placeholder="Message"
                  required
                />
              </div>
              <div className="col-sm-9"></div>
              <div className="col-sm-3 p-3 p-1">
                <button type="submit" className="btn btn-primary butto">
                  Contact us
                </button>
              </div>
            </div>
          </form>
        </div>
      </contact>
    );
};