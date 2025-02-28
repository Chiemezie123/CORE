'use client';
import { useEffect, useRef, useState } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js';
import { ChartConfiguration } from 'chart.js/auto';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const LineChart = () => {
    const chartRef = useRef<Chart | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const fontSize = windowWidth < 1390 ? 10 : 12;

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        // Destroy existing chart if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Set canvas dimensions to match the parent container
        const container = containerRef.current;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        const data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    data: [20, 40, 60, 80, 70, 90, 100],
                    borderColor: '#4DAF01',
                    borderWidth: 2,
                    pointRadius: 0,
                    pointBackgroundColor: '#4DAF01',
                    fill: false,
                    tension: 0.4,
                },
            ],
        };

        const config: ChartConfiguration<'line', number[], string> = {
            type: 'line',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            font: {
                                family: 'Satoshi, sans-serif',
                                size: fontSize,
                            },
                        },
                        grid: {
                            display: true,
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                family: 'Satoshi, sans-serif',
                                size: fontSize,
                            },
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
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

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
            resizeObserver.disconnect();
        };
    }, [fontSize]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '240px', position: 'relative' }}>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default LineChart;