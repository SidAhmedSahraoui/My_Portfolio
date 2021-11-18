import React from "react";
import useStyles from "./post-jss";
import { Button } from "react-bootstrap";
const Post = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="details-top">
            <h5 className="title">Title</h5>
            <p className="description"> somthing wrong!</p>
          </div>
        </div>
        <div className="col-12 col-md-9 d-flex flex-column text-left">
          <div className="details-bottom mt-auto">
            <p className="location mb-0">city + ', ' + wilaya</p>
            <p className="date mb-0">formatedDate createdAt</p>
          </div>
        </div>
        <div className="col-12 col-md-9 d-flex flex-column text-left">
          <div className="confirmation">
            <Button className="confirm-btn" type="submit">
              Confirm
            </Button>
            <Button className="reject-btn" type="submit">
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
