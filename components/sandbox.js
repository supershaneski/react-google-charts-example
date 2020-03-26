import React from 'react';
import Chart from "react-google-charts";

export default function SandBox() {
    
    const dailyPUIUrl = "/spreadsheets/d/18MCJgAMD_waEZ6w6WaAC-emEkckf6wJGhnOk6bad6H8/edit?usp=sharing"
    const covid19CaseUrl = "/spreadsheets/d/13hJGwQBYltl7Eu6GwYJGNCrK1qyN7iF15IB89BW9NlE/edit?usp=sharing"
    const regionDataUrl = "/spreadsheets/d/1GjPH2Qk4rI-myvoqUJdHMi9WE_3qwRAzyL8eY63gpcM/edit?usp=sharing"
    
    return (
        <>
        <div>
            <div className="chart-container">
                <h4>Bar Chart</h4>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="ColumnChart"
                    spreadSheetUrl={`https://docs.google.com${dailyPUIUrl}`}
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
                    spreadSheetUrl={`https://docs.google.com${covid19CaseUrl}`}
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
                        spreadSheetUrl={`https://docs.google.com${regionDataUrl}`}
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