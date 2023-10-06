import React from "react";
import naukImgSrc from "../media/naukri.png";
import "./styles.css";
// import { IUserPreviewNotification } from "../preview";
// import { fontPrefix } from "@/app/helpers/fontconfig";
const fontPrefix = 'naukri'

const UserNotificationPreview = (props) => {
  const { company = "Infoedge", role = "SDE1", walkIn = true, location = "Delhi", onClick } = props;

  const renderHeader = () => {
    return `${walkIn ? 'Walk-In' : 'Job'} Invite ${!!company ? `from ${company}` : `for ${role}`}`;
  }

  const renderMsg = () => {
    if (walkIn && !!company) {
      return `Get ready to shine! You're chosen to appear for a ${role} interview in ${location}`
    }
    if (!!company) {
      return `Get ready to shine! You're chosen to apply for ${role} in ${location}.`
    }
    else if (walkIn) {
      return `Get ready to shine! You're chosen to appear for walk-in interview in ${location}.`
    }
    else {
      return `Get ready to shine! You're chosen to apply for this role based in ${location}.`
    }
  }

  return (
    <div className="notificationPreviewContainer" onClick={onClick}>
      <div className="npContent">
        <div className="npFrame">
          <img src={naukImgSrc} alt="" />
          <span>Naukri</span>
          <span className={`${fontPrefix}ellipse icon iconDot`} />
          <span>now</span>
          <span className={`${fontPrefix}arrow_down icon`} />
        </div>
        <div className="npHeading">
          <span className="icon">✉️ </span>
          <span className="heading">How was your experience on call with Recruiter ABC??</span>
        </div>
        <div className="npBody">
        <b>ALERT </b> Scammer may ask for money in form of registration charge or visit charge
        </div>

        <div className="btnContainer">
          <div className="btn report">Report</div>
          <div className="btn">Good</div>
        </div>
      </div>
    </div>
  );
}

export default UserNotificationPreview;