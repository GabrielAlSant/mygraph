import React, { useState } from 'react';
import './index.css'
import ReactEcharts from 'echarts-for-react'; // importe o componente do pacote correto
import ney from './ney.png'
import messi from './messi.png'
import mb from './mb.png'
import cr7 from './cr7.png'
import vini from './vini.png'
import mar from './marcelo.png'

function App() {

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedValue, setSelectedValue] = useState([]);

  const options = {
    title: { 
      text: ''
    },
    legend: {
      data: []
    }, 
    radar: {
      
      indicator: [
        { name: 'Força', max: 10, nameTextStyle: { fontSize: 20 } },
        { name: 'Velocidade', max: 10, nameTextStyle: { fontSize: 20 } },
        { name: 'Técnica', max: 10 , nameTextStyle: { fontSize: 20 }},
        { name: 'Precisão', max: 10 , nameTextStyle: { fontSize: 20 }},
        { name: 'Disparada', max: 10, nameTextStyle: { fontSize: 20 } },
        { name: 'Salto', max: 10 , nameTextStyle: { fontSize: 20 }}
      ]
    },
    series: [
      {
        name: 'Jogadores',
        type: 'radar',
        data: [
          
        ]
      }
    ]
  };

  return (
    <div className="app">
     <h1 className='titulo'>Radar de Jogadores</h1>
      <div className='App'>
        <div className='esquerdo'>
        
          <div className='card' onClick={() => [setSelectedPlayer('Neymar'), setSelectedValue([7, 7, 9, 8, 7, 8] )]}>
          <img src={ney}></img>
            <div>N E Y M A R</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Messi'), setSelectedValue([7,6,8,7,5,6])]}>
          <img src={messi}></img>
             <div>M E S S I</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Mbappe'), setSelectedValue([7,8,6,7,6,8])]}>
          <img src={mb}></img>
            <div>M B A P P E</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Cristiano Ronaldo'), setSelectedValue([8,9,8,9,9,10])]}>
          <img src={cr7}></img>
            <div>R O N A L D O</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Vini'), setSelectedValue([8,8,5,6,6,9])]}>
          <img src={vini}></img>
            <div>V I N I</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Marcelo'), setSelectedValue([7,8,6,9,6,8])]}>
          <img src={mar}></img>
            <div>M A R C E L O</div>
          </div>
        </div>

        <div className='direito'>
        {(
            <ReactEcharts
              option={{
                ...options,
                series: [
                  {
                    ...options.series[0],
                    data: [
                      {
                        value: selectedValue,
                        name: selectedPlayer
                      },
                    ],
                    lineStyle: {
                      width: 6
                    },
                    symbolSize: 12
                  }
                ]
              }}
              className='grafico'
              style={{ height: '400px', background: 'none', border: 'none' }}
            />
          )}
           <div className='status'>
            <h3>{selectedPlayer || 'Não há nenhum jogador selecionado'}</h3>
            <div className='valor'>
            <div className='att'>{selectedValue[0] || 0}<div>Força</div></div>
            <div className='att'>{selectedValue[1] || 0}<div>Velocidade</div></div>
            <div className='att'>{selectedValue[2] || 0}<div>Técnica</div></div>
            <div className='att'>{selectedValue[3] || 0}<div>Precisão</div></div>
            <div className='att'>{selectedValue[4] || 0}<div>Disparada</div></div>
            <div className='att'>{selectedValue[5] || 0}<div>Salto</div></div>
            </div>
         </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
