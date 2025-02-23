'use client'
import { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Ticks } from 'chart.js';
import { color } from 'chart.js/helpers';
import { ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const LineChart = () => {
    const chartRef = useRef<Chart | null>(null); 
    const canvasRef = useRef<HTMLCanvasElement | null>(null); 

    useEffect(() => {
        if (!canvasRef.current) return;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;
        const data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
            datasets: [
                {
                    data: [20, 40, 60, 80, 70, 90, 100], 
                    borderColor: '#4DAF01', 
                    borderWidth: 2,
                    pointRadius: 5,
                    pointBackgroundColor: '#4DAF01', 
                    fill: false, 
                    tension: 0.6, 
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
                                size: 12,
                                
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
                        ticks:{
                            font: {
                                family: 'Satoshi, sans-serif', 
                                size: 12, 
                                
                            },
                        }
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

        
        chartRef.current = new Chart(ctx, config);

        
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default LineChart;