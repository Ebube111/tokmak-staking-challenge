import React from "react";

import Chart from "react-apexcharts";

const chartOptions = {
  series: [
    {
      name: "Stake",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
      name: "Unstake",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    },
    legend: {
      position: "top"
    },
    grid: {
      show: false
    }
  }
};

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-12">
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
