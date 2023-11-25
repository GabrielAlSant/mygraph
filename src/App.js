import React from 'react';
import './index.css'
import ReactEcharts from 'echarts-for-react'; // importe o componente do pacote correto
import ney from './ney.png'
import messi from './messi.png'
import mb from './mb.png'
import cr7 from './cr7.png'
import vini from './vini.png'
import mar from './marcelo.png'

function App() {
  const options = {
    title: { 
      text: ''
    },
    legend: {
      data: []
    }, 
    radar: {
      
      indicator: [
        { name: 'Força', max: 10, nameTextStyle: { fontSize: 25 } },
        { name: 'Velocidade', max: 10, nameTextStyle: { fontSize: 25 } },
        { name: 'Técnica', max: 10 , nameTextStyle: { fontSize: 25 }},
        { name: 'Poder do Chute', max: 10 , nameTextStyle: { fontSize: 25 }},
        { name: 'Disparada', max: 10, nameTextStyle: { fontSize: 25 } },
        { name: 'Salto', max: 10 , nameTextStyle: { fontSize: 25 }}
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
            <img src={ney}></img>
            <div>N E Y M A R</div>
         
          </div>
          <div className='card'>
            <img src={messi}></img>
             <div>M E S S I</div>
          </div>
          <div className='card'>
            <img src={mb}></img>
            <div>M B A P P E</div>
          </div>
          <div className='card'>
            <img src={cr7}></img>
            <div>R O N A L D O</div>
          </div>
          <div className='card'>
            <img src={vini}></img>
            <div> V I N I</div>
          </div>
          <div className='card'>
            <img src={mar}></img>
            <div> M A R C E L O</div>
          </div>
        </div>
     
        <div className='direito'>
        <ReactEcharts option={options} className='grafico' style={{  height: '600px',background:'none', border:'none', fontSize:'10px'}} />

        </div>
       </div>
      </div>
    );
}

export default App;
