import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import shape_10 from "../images/shape_10.png";
import shape_9 from "../images/shape_9.png";
import '../menu_style.css';

const Menu = () => {
  const [menuData, setMenuData] = useState({
    vegDishes: [],
    tavaItems: [],
    riceItems: [],
    snacks: [],
  });

  useEffect(() => {
    // Fetch data from the new /api/menu endpoint when the component mounts
    fetchDataFromMenu();
  }, []);

  const fetchDataFromMenu = async () => {
    try {
      const response = await axios.get("http://localhost:8080/menu");
      setMenuData(response.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className="menulist">
        <div className="row">
          <div className="col-sm-12">
            <br />
          </div>
          <div className="col-3">
            <img
              className="gallery_shape1"
              src={shape_10}
              alt=""
              width="63"
              height="17"
            />
          </div>
          <div className="col-6">
            <p className="gallery_heading">MENU LIST</p>
            <br />
          </div>
          <div className="col-3">
            <img
              className="gallery_shape2"
              src={shape_9}
              alt=""
              width="63"
              height="17"
            />
          </div>
          <div className="col-3"></div>
          <div className="col-6">
            <center>
              <h2 className="head">Snacks</h2>
            </center>
            <table className="table tab">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Price (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {menuData.snacks &&
                  menuData.snacks.map((item) => (
                    <tr key={item.item_id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <center>
              <h2 className="head">Dal / Vegetables</h2>
            </center>
            <table className="tab table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Price (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {menuData.vegDishes &&
                  menuData.vegDishes.map((item) => (
                    <tr key={item.item_id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <center>
              <h2 className="head">Roti</h2>
            </center>
            <table className="table tab">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Price (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {menuData.tavaItems &&
                  menuData.tavaItems.map((item) => (
                    <tr key={item.item_id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <br />
            <center>
              <h2 className="head">Rice</h2>
            </center>
            <table className="table tab">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Price (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {menuData.riceItems &&
                  menuData.riceItems.map((item) => (
                    <tr key={item.item_id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Menu;
