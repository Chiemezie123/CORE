'use client'
import { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import { ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';
import { Typography } from '../typography';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
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
            labels: ['Active', 'Inactive', 'Blocked', 'Expired', 'Lost'], 
            datasets: [
                {
                    data: [200, 100, 50, 75, 75], 
                    backgroundColor: [
                        '#01A4AF', 
                        '#014DAF', 
                        '#8020E7', 
                        '#FFBA24', 
                        '#FF4457', 
                    ],
                    borderWidth: 0, 
                    spacing: 6, 
                    borderRadius: 20, 
                },
            ],
        };

        const config: ChartConfiguration<'doughnut', number[], string> = {
            type: 'doughnut', 
            data: data,
            options: {
                cutout: '90%',
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            boxWidth:10, 
                            padding: 27, 
                            usePointStyle: true, 
                            font: {
                                family: 'Satoshi, sans-serif', 
                                size: 12,
                            },
                            color: '#808080', 
                        },
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
        <div className="relative w-full h-full">
            <canvas ref={canvasRef} width="400" height="260"></canvas>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center flex flex-col gap-1">
                    <Typography variant="p-s" color="gray-500" font="Satoshi" fontWeight="medium" className="leading-normal" >Total Cards</Typography>
                    <Typography variant="p-xxl" color="cod-gray-950" font="Satoshi" fontWeight="medium">2,450</Typography>
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;