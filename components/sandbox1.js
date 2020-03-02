import React from 'react';
import Chart from "react-google-charts";

export default function SandBox1() {
    return (
        <>
        <div>
            <div className="chart-container">
                <h4>Bar Chart</h4>
                <Chart
                    width={'100%'}
                    height={300}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Dates','Previous Day PUI','PUI Added'],
                        ['1/29',26,1],
                        ['1/30',27,2],
                        ['1/31',29,2],
                        ['2/1',31,5],
                        ['2/2',36,16],
                        ['2/3',52,28],
                        ['2/4',80,25],
                        ['2/5',105,28],
                        ['2/6',133,45],
                        ['2/7',178,37],
                        ['2/8',215,52],
                    ]}
                    options={{
                        title: 'COVID-19 Persons Under Investigation (PUI) Daily Total',
                        colors: ['#06F', '#F00'],
                        chartArea: { width: '60%' },
                        isStacked: true,
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
                    data={[
                        ['days', 'confirmed', 'recovered', 'deaths'],
                        ['2/1', 2, null, null],
                        ['2/6', 26, null, null],
                        ['2/12', 29, null, 1],
                        ['2/13', 33, 11, 1],
                        ['2/16', 52, 13, 1],
                        ['2/17', 64, 16, 2],
                        ['2/19', 84, 18, 2],
                        ['2/21', 107, 22, 2],
                        ['2/22', 133, 22, 2],
                        ['2/25', 171, 23, 3],
                        ['2/26', 189, 36, 5],
                        ['2/27', 214, 37, 5],
                        ['2/28', 231, 41, 5],
                    ]}
                    options={{
                        title: 'COVID-19 Case Tracker',
                        colors: ['#2D2', '#0AF', '#F00'],
                        chartArea: { width: '60%' },
                        isStacked: true,
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
                        data={[
                            [
                            { type: 'string', label: 'Region Name' },
                            { type: 'number', label: 'Admitted PUI' },
                            { type: 'number', label: 'Confirmed Case' },
                            ],
                            ['CAR', { v: 2, f: 2 }, { v: 0, f: 0 }],
                            ['Ilocos', { v: 1, f: 1 }, { v: 0, f: 0 }],
                            ['Cagayan Valley', { v: 1, f: 1 }, { v: 0, f: 0 }],
                            ['Central Luzon', { v: 2, f: 2 }, { v: 0, f: 0 }],
                            ['NCR', { v: 86, f: 86 }, { v: 0, f: 0 }],
                            ['CALABARZON', { v: 4, f: 4 }, { v: 0, f: 0 }],
                            ['MIMAROPA', { v: 0, f: 0 }, { v: 0, f: 0 }],
                            ['Bicol', { v: 0, f: 0 }, { v: 0, f: 0 }],
                            ['Western Visayas', { v: 0, f: 0 }, { v: 0, f: 0 }],
                            ['Eastern Visayas', { v: 0, f: 0 }, { v: 0, f: 0 }],
                            ['Central Visayas', { v: 3, f: 3 }, { v: 0, f: 0 }],
                            ['Caraga', { v: 0, f: 0 }, { v: 0, f: 0 }],
                            ['Northern Mindanao', { v: 1, f: 1 }, { v: 0, f: 0 }],
                            ['Davao', { v: 0, f: 0 }, { v: 0, f: 0 }],
                            ['BARMM', { v: 0, f: 0 }, { v: 0, f: 0 }],
                            ['SOCCSKSARGEN', { v: 1, f: 1 }, { v: 0, f: 0 }],
                        ]}
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
                width: 335px;
                left: calc((100% - 335px)/2);
            }
            `}
        </style>
        </>
    )
}