import React from "react";

function NotificationCard(props) {
  return (
    <>
      <div class="col-xl-3 col-md-6 mb-4" onClick={()=>props.handleCard(props.details.value)}>
        <div className={`card  shadow h-100 py-2 border-left-${props.details.color}`}>
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div className={`text-xs font-weight-bold text-uppercase mb-1 text-${props.details.color}`}>
                 {props.details.status}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                {props.details.currency}{props.details.value}
                </div>
              </div>
              <div class="col-auto">
              <i className={`fas fa-2x text-gray-300 ${props.details.icon}`}></i>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default NotificationCard;
