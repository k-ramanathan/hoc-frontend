import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CREATE_VENDOR, GET_GOOGLE_PLACE_API } from "../contants/routes";
import ValidationMessage from "../common/ValidationMessage";
import AsyncSelect from "react-select/async";

const CreateVendor = () => {
  const [form, setForm] = useState();
  const [errors, setErrors] = useState({});

  const loadOptions = async (inputValue, callback) => {
    axios.get(GET_GOOGLE_PLACE_API(inputValue)).then((res) => {
      console.log(res);
      // const options = data.results.map((result) => ({
      //   value: result.id,
      //   label: result.name,
      // }));
      // callback(options);
    });
  };

  /**
   * form submit API's call
   */
  const createVendor = () => {
    axios
      .post(CREATE_VENDOR)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        if (err.response.status === 422) {
          const error = err.response.data.error;
          setErrors(error);
        }
      });
  };
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="demo-inline-spacing d-flex justify-content-end mb-3">
          <Link to={"/vendor"}>
            <button type="button" className="btn btn-dark rounded-pill">
              <i className="bx bx-exit"></i> back
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Vendor</h5>
              </div>
              <div className="card-body pb-0">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="basic-default-fullname"
                        >
                          Name<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-default-fullname"
                          placeholder="Name"
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                        />
                        <ValidationMessage error={errors} name="name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="basic-default-email"
                        >
                          Email<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-default-email"
                          placeholder="Email"
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                        />
                        <ValidationMessage error={errors} name="email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="basic-default-mobile"
                        >
                          Mobile<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-default-mobile"
                          placeholder="Mobile No"
                          onChange={(e) =>
                            setForm({ ...form, mobile: e.target.value })
                          }
                        />
                        <ValidationMessage error={errors} name="mobile" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="basic-default-gst-no"
                        >
                          GST No
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-default-gst-no"
                          placeholder="GST No"
                          onChange={(e) =>
                            setForm({ ...form, gst_no: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="basic-default-door-no"
                        >
                          Door No<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-default-door-no"
                          placeholder="Door No"
                          onChange={(e) =>
                            setForm({ ...form, door_no: e.target.value })
                          }
                        />
                        <ValidationMessage error={errors} name="door_no" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="lan-mark">
                          Lanmark
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lan-mark"
                          placeholder="Landmark"
                          onChange={(e) =>
                            setForm({ ...form, lanmark: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="basic-default-gst-no"
                        >
                          Address<span className="text-danger">*</span>
                        </label>
                        <AsyncSelect
                          loadOptions={loadOptions}
                          placeholder="Search Address"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Address</h5>
              </div>
              <div className="card-body pb-0">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="basic-default-door-no"
                        >
                          Door No<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="basic-default-door-no"
                          placeholder="Door No"
                        />
                        <ValidationMessage error={errors} name="door_no" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="street-name">
                          Street Name<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="street-name"
                          placeholder="Street Name"
                        />
                        <ValidationMessage error={errors} name="street" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="lan-mark">
                          Lanmark
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lan-mark"
                          placeholder="Landmark"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="city">
                          City<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="City"
                        />
                        <ValidationMessage error={errors} name="city" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="state">
                          State<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder="State"
                        />
                        <ValidationMessage error={errors} name="state" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="pincode">
                          Pincode<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="Pincode"
                        />
                        <ValidationMessage error={errors} name="pincode" />
                      </div>
                    </div>
                  </div>
                </form>
              </div> */}
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Bank</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="ifsc-code">
                          IFSC Code<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ifsc-code"
                          placeholder="IFSC Code"
                          onChange={(e) =>
                            setForm({ ...form, ifsc_code: e.target.value })
                          }
                        />
                        <ValidationMessage error={errors} name="ifsc_code" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="bank-name">
                          Bank Name<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="bank-name"
                          placeholder="Bank Name"
                          onChange={(e) =>
                            setForm({ ...form, bank_name: e.target.value })
                          }
                        />
                        <ValidationMessage error={errors} name="bank_name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="account-no">
                          Account No<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="account-no"
                          placeholder="Account No"
                          onChange={(e) =>
                            setForm({ ...form, account_number: e.target.value })
                          }
                        />
                        <ValidationMessage
                          error={errors}
                          name="account_number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="holder-name">
                          Holder Name<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="holder-name"
                          placeholder="Holder Name"
                          onChange={(e) =>
                            setForm({ ...form, holder_name: e.target.value })
                          }
                        />
                        <ValidationMessage error={errors} name="holder_name" />
                      </div>
                    </div>
                  </div>
                  <div className="demo-inline-spacing d-flex justify-content-end">
                    <Link to={"/vendor"}>
                      <button
                        type="button"
                        className="btn btn-primary rounded-pill"
                      >
                        Close
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-secondary rounded-pill"
                      onClick={() => createVendor()}
                    >
                      &nbsp;Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVendor;
