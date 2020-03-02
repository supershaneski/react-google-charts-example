import React from 'react';
import Chart from "react-google-charts";

export default function SandBox() {
    return (
        <>
        <div>
            <div className="chart-container">
                <h4>Bar Chart</h4>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="ColumnChart"
                    spreadSheetUrl=""
                    loader={<div>Loading Chart</div>}
                    options={{
                        title: 'COVID-19 Persons Under Investigation (PUI) Daily Total',
                        colors: ['#06F', '#F00'],
                        chartArea: { width: '60%' },
                        isStacked: true,
                        hAxis: { format: 'M/d', },
                        vAxis: { 
                            format: 'decimal',
                            // format:'scientific'
                            // format:'long'
                            // format:'percent'
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    legendToggle
                />
            </div>
            
            <div className="chart-container">
                <h4>Line Chart</h4>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    spreadSheetUrl=""
                    options={{
                        title: 'COVID-19 Case Tracker',
                        colors: ['#2D2', '#0AF', '#F00'],
                        chartArea: { width: '60%' },
                        hAxis: { format: 'M/d', },
                        vAxis: { 
                            format: 'long',
                            // format:'scientific'
                            // format:'long'
                            // format:'percent'
                        }
                    }}
                    rootProps={{ 'data-testid': '2' }}
                    legendToggle
                />
            </div>
            
            <div className="chart-container">
                <h4>Table Chart</h4>
                <div className="main">
                    <div className="table-container">
                        <Chart
                        chartType="Table"
                        loader={<div>Loading Chart</div>}
                        spreadSheetUrl=""
                        options={{
                            showRowNumber: false,
                        }}
                        rootProps={{ 'data-testid': '3' }}
                        />
                    </div>
                </div>                                
            </div>
            
        </div>
        <style jsx>
            {`
            h4 {
                padding-left: 15px;
                padding-top: 10px;
            }
            .chart-container {
                position: relative;
                margin: 0px 0px 5px 0px;
                display: block;
            }
            .main {
                background-color: white;
                position: relative;
                width: 100%;
                height: 380px;
            }
            .table-container {
                position: absolute;
                width: 350px;
                left: calc((100% - 350px)/2);
            }
            `}
        </style>
        </>
    )
}