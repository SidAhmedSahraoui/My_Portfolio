import React, { useState } from "react";
import { Helmet } from "react-helmet";
import useStyles from "./claim-jss";

const Claim = () => {
  const [post, setPost] = useState({
    title: "",
    category: 0,
    wilaya: 0,
    city: 0,
    content: "",
    images: null,
  });

  const { title, category, wilaya, city, content, images } = post;
  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const onChangeImages = (e) => setPost({ ...post, images: e.target.files });

  const onSubmit = async (e) => {};
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Claim | Add donation</title>
      </Helmet>
      <div className={`${classes.root} card-shadow text-center`}>
        <div className="row">
          <div className="col">
            {" "}
            <form className="add-form" onSubmit={onSubmit}>
              <h3 className="title">Add a Claim</h3>
              <h6 className="subtitle">
                Your local administration will receive this claim
              </h6>
              <div className="form-group">
                <input
                  className="input-text"
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  placeholder="Title"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={onChange}
                  className="input-select input-text"
                >
                  <option value="0">Category...</option>
                  <>
                    <option value="0">Claim</option>
                    <option value="0">Problrm</option>
                    <option value="0">All categories</option>
                    <option value="0">All categories</option>
                  </>
                </select>
              </div>

              <div className="form-group">
                <select
                  id="wilaya"
                  name="wilaya"
                  value={wilaya}
                  onChange={onChange}
                  className="input-select input-text"
                >
                  <option value="0">Loading...</option>
                  <>
                    <option value="0">Select a wilaya</option>

                    <option key={wilaya.code} value={wilaya.code}>
                      {wilaya.label}
                    </option>
                  </>
                </select>
              </div>

              <div className="form-group">
                <select
                  id="city"
                  name="city"
                  value={city}
                  onChange={onChange}
                  className="custom-select input-select input-text"
                >
                  <option value="0">Loading...</option>
                  <>
                    <option value="0">Select a city</option>

                    <option key={city.code} value={city.id}>
                      {city.label}
                    </option>
                  </>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  className="input-text"
                  id="content"
                  name="content"
                  value={content}
                  placeholder="Content"
                  onChange={onChange}
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group">
                <input
                  id="images file"
                  type="file"
                  name="images"
                  onChange={onChangeImages}
                  multiple
                />
                <label htmlFor="images">
                  Attach Images ({images ? images.length : 0})
                </label>
              </div>
              <input
                type="submit"
                value="Add claim"
                className="button-primary mt-3"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Claim;
