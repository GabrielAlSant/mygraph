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
        
          <div className='card' onClick={() => [setSelectedPlayer('Neymar'), setSelectedValue([4, 3, 2, 3, 5, 1] )]}>
          <img src={ney}></img>
            <div>N E Y M A R</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Messi'), setSelectedValue([5, 2,8,7,4,2])]}>
          <img src={messi}></img>
             <div>M E S S I</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Mbappe'), setSelectedValue([5,2,1,5,6,8])]}>
          <img src={mb}></img>
            <div>M B A P P E</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Cristiano Ronaldo'), setSelectedValue([5,2,1,5,6,8])]}>
          <img src={cr7}></img>
            <div>R O N A L D O</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Vini'), setSelectedValue([8,3,4,2,5,9])]}>
          <img src={vini}></img>
            <div>V I N I</div>
          </div>
          <div className='card' onClick={() => [setSelectedPlayer('Marcelo'), setSelectedValue([6,4,2,9,6,2])]}>
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
                      }
                    ]
                  }
                ]
              }}
              className='grafico'
              style={{ height: '400px', background: 'none', border: 'none' }}
            />
          )}
           <div className='status'>
            <h3>Nome do Jogador: {selectedPlayer || 'Não há nenhum Selecionado'}</h3>
            <div className='valor'>
            <div className='att'>Força: <div>{selectedValue[0] || 0}</div></div>
            <div className='att'>Velocidade: <div>{selectedValue[1] || 0}</div></div>
            <div className='att'>Técnica: <div>{selectedValue[2] || 0}</div></div>
            <div className='att'>Precisão: <div>{selectedValue[3] || 0}</div></div>
            <div className='att'>Disparada: <div>{selectedValue[4] || 0}</div></div>
            <div className='att'>Salto: <div>{selectedValue[5] || 0}</div></div>
            </div>
         </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
