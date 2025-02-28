"use client";
import { useEffect, useRef, useState } from "react";
import { Chart, ChartConfiguration } from "chart.js/auto";

const MonthlyIssuanceChart = () => {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Initialize and update the chart
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Destroy existing chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Set canvas dimensions to match the parent container
    const container = containerRef.current;
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
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
        },
      },
    };

    // Create the chart
    chartRef.current = new Chart(ctx, config);

    // ResizeObserver to handle container resizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (canvasRef.current) {
          canvasRef.current.width = width;
          canvasRef.current.height = height;
        }
        if (chartRef.current) {
          chartRef.current.resize();
        }
      }
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      resizeObserver.disconnect();
    };
  }, [windowWidth]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "95%", position: "relative" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
};

export default MonthlyIssuanceChart;