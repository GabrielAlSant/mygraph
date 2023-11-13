import React, { useState } from 'react';

import ReactEcharts from 'echarts-for-react'; // importe o componente do pacote correto

function App() {
  const options = {
    title: { 
      text: 'Grafico'
    },
    legend: {
      data: ['Zed', 'Kayn']
    },
    radar: {
      
      indicator: [
        { name: 'Força', max: 6500 },
        { name: 'Velocidade', max: 16000 },
        { name: 'QI', max: 60000 },
        { name: 'Poder Mágico', max: 38000 },
        { name: 'Persuasão', max: 52000 },
        { name: 'Força Física', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Zed vs Kayn',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Zed'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Kayn'
          }
        ]
      }
    ]
  };

  const options1 = {
    title: { 
      text: 'Grafico'
    },
    legend: {
      data: ['Zead', 'Kayan']
    },
    radar: {
      
      indicator: [
        { name: 'Força', max: 6500 },
        { name: 'Velocidade', max: 16000 },
        { name: 'QI', max: 60000 },
        { name: 'Poder Mágico', max: 38000 },
        { name: 'Persuasão', max: 52000 },
        { name: 'Força Física', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Zed vs Kayn',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Zed'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Kayn'
          }
        ]
      }
    ]
  };

  const options2 = {
    title: { 
      text: 'Grafico'
    },
    legend: {
      data: ['Zed', 'Kayn']
    },
    radar: {
      
      indicator: [
        { name: 'Força', max: 6500 },
        { name: 'Velocidade', max: 16000 },
        { name: 'QI', max: 60000 },
        { name: 'Poder Mágico', max: 38000 },
        { name: 'Persuasão', max: 52000 },
        { name: 'Força Física', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Zed vs Kayn',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Zed'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Kayn'
          }
        ]
      }
    ]
  };
  
  return (

      <div className="App">
        <ReactEcharts option={options} style={{height: '400px', width: '600px'}} />

        
      </div>
    );
}

export default App;
