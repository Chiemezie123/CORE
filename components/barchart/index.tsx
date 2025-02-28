"use client";
import { useEffect, useRef, useState } from "react";
import { Chart, ChartConfiguration, ChartTypeRegistry } from "chart.js/auto";

const MonthlyIssuanceChart = () => {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (window !== undefined) {
      const handleResize = () => {
        setWindowWidth(window?.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowWidth]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("tony");
    }
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const fontSize = windowWidth < 1390 ? 10 : 12; // Adjust the breakpoint as needed

    const data = {
      labels: [
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
      ],
      datasets: [
        {
          label: "Personalized",
          data: [60, 50, 70, 65, 80, 75, 90, 85],
          backgroundColor: "rgba(54, 162, 235, 0.8)",
          stack: "Stack 0",
        },
        {
          label: "Instant",
          data: [30, 40, 35, 45, 50, 55, 60, 65],
          backgroundColor: "rgba(0, 0, 139, 0.8)",
          stack: "Stack 0",
        },
      ],
    };

    const config: ChartConfiguration<"bar", number[], string> = {
      type: "bar",
      data: data,
      options: {
        plugins: {
          title: {
            display: false,
            text: "Monthly Issuance",
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 12,
              padding: 10,
              usePointStyle: true,
              font: {
                family: "Satoshi, sans-serif",
                size: fontSize,
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: "Satoshi, sans-serif",
                size: fontSize,
              },
            },
          },
          y: {
            title: {
              display: false,
            },
            ticks: {
              stepSize: 10,
              font: {
                family: "Satoshi, sans-serif",
                size: fontSize,
              },
            },
            beginAtZero: true,
          },
        },
        responsive: true,
        interaction: {
          mode: "index",
        },
      },
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [windowWidth]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} className=""></canvas>
    </div>
  );
};

export default MonthlyIssuanceChart;
