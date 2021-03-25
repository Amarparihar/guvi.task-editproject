import React, { useState } from "react";
import NotificationCard from "./notificationcard";
function Dashboard() {
  let cardDetails =[
    {
      status: "Earnings (Monthly)",
      currency: "$",
      value : 40000,
      color: "primary",
      icon :  "fa-calendar",
      isProgress: false

    },
    {
      status: "Earnings (Annual)",
      currency: "$",
      value : 215000,
      color: "success",
      icon : "fa-dollar-sign",
      isProgress: false
    },
    {
      status: "Tasks",
      value : 50,
      color: "info",
      icon :  "fa-clipboard-list",
      isProgress: false
    },
    {
      status: " Pending Requests",
       value : 18,
       color: "warning",
      icon : "fa-comments",
      isProgress: true
    }
  ]

  const[currentCard,setCurrentCard] = useState("None");

  let handleCardClicked = (value)=>{
    setCurrentCard(value);
  }
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>

      <div class="row">
        {
          cardDetails.map((data)=>{
            return <NotificationCard details={data} handleCard={handleCardClicked}></NotificationCard>
          })
        }
      </div>
      {
        currentCard
      }
    </>
  );
}

export default Dashboard;
