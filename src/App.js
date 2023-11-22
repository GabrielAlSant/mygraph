import React from 'react';
import './index.css'
import ReactEcharts from 'echarts-for-react'; // importe o componente do pacote correto


function App() {
  const options = {
    title: { 
      text: ''
    },
    legend: {
      data: ['Neymar', 'Messi', 'CR 7', 'Mbape']
    },
    radar: {
      
      indicator: [
        { name: 'Força', max: 10 },
        { name: 'Velocidade', max: 10 },
        { name: 'QI', max: 10 },
        { name: 'Poder do Chute', max: 10 },
        { name: 'Disparada', max: 10 },
        { name: 'Gol em campeonato', max: 10 }
      ]
    },
    series: [
      {
        name: 'Jogadores',
        type: 'radar',
        data: [
          {
            value: [4, 3, 2, 3, 5, 1],
            name: 'Neymar'
          },
          {
            value: [5, 1, 2, 2, 4, ],
            name: 'Messi'
          },
          {
            value: [5, 2,8,7,4,2,3],
            name: 'CR 7'
          },
          {
            value: [5, 1, 8, 3, 4, 2],
            name: 'Mbape'
          }
        ]
      }
    ]
  };

  
  return (

      <div className="app">
         <h1>Radar de Jogadores</h1>
       <div className='App'>
       <div className='esquerdo'>
          <div className='card'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IW1M4zJNlJYhOczq_HEyQHYfQGyFECoeQw&usqp=CAU'></img>
            <div>Neymar</div>
          </div>
          <div className='card'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IW1M4zJNlJYhOczq_HEyQHYfQGyFECoeQw&usqp=CAU'></img>
            <div>Neymar</div>
          </div>
        </div>
     
        <div className='direito'>
        <ReactEcharts option={options} className='grafico' style={{  height: '400px'}} />

        </div>
       </div>
      </div>
    );
}

export default App;
