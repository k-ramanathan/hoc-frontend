import React from "react";
import { Link } from "react-router-dom";

const Vendors = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>Vendors</h5>
        <Link to={"create"}>
          <button type="button" className="btn rounded-pill btn-primary">
            <span className="tf-icons bx bx-plus"></span>&nbsp; Add
          </button>
        </Link>
      </div>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Subscribtion Expire</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            <tr>
              <td>
                <a href="vendor-view.html">
                  <span className="badge bg-label-success me-1">
                    <i className="bx bx-show"></i>
                  </span>
                </a>
              </td>
              <td>John Doe</td>
              <td>99755223322</td>
              <td>04/04/2023</td>
              <td>
                <span className="badge bg-label-success me-1">Active</span>
              </td>
            </tr>
            <tr>
              <td>
                <a href="vendor-view.html">
                  <span className="badge bg-label-success me-1">
                    <i className="bx bx-show"></i>
                  </span>
                </a>
              </td>
              <td>Raj Doe</td>
              <td>99788993322</td>
              <td>18/04/2023</td>
              <td>
                <span className="badge bg-label-warning me-1">Inactive</span>
              </td>
            </tr>
            <tr>
              <td>
                <a href="vendor-view.html">
                  <span className="badge bg-label-success me-1">
                    <i className="bx bx-show"></i>
                  </span>
                </a>
              </td>
              <td>Barry Doe</td>
              <td>99765123322</td>
              <td>21/04/2023</td>
              <td>
                <span className="badge bg-label-warning me-1">Inactive</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vendors;
