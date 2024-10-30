import { useEffect, useState } from "react";


const playersArray: Array<Player> = [
    { id: crypto.randomUUID(), name: 'Cristiano Ronaldo', goals: 906, imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75oMT9Ct6Wq7AiwAJK7nV4yZ2CC86CAj3BQ&s' },
    { id: crypto.randomUUID(), name: 'Lionel Messi', goals: 896, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Pelé', goals: 767, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Romário', goals: 772, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Ferenc Puskás', goals: 746, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Josef Bican', goals: 805, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Gerd Müller', goals: 735, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Diego Maradona', goals: 344, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Marco van Basten', goals: 277, imageURL: '' },
    { id: crypto.randomUUID(), name: 'George Best', goals: 208, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Hugo Sánchez', goals: 282, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Eusébio', goals: 473, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Johan Cruyff', goals: 368, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Michel Platini', goals: 224, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Alfredo Di Stéfano', goals: 493, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Robert Lewandowski', goals: 584, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Neymar Jr.', goals: 436, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Luis Suárez', goals: 528, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Karim Benzema', goals: 437, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Edinson Cavani', goals: 429, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Kylian Mbappé', goals: 267, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Harry Kane', goals: 317, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Mohamed Salah', goals: 230, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Sadio Mané', goals: 205, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Raheem Sterling', goals: 160, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Romelu Lukaku', goals: 250, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Antoine Griezmann', goals: 220, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Ciro Immobile', goals: 210, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Paulo Dybala', goals: 130, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Lautaro Martínez', goals: 115, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Erling Haaland', goals: 160, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Gabriel Jesus', goals: 120, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Bruno Fernandes', goals: 135, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Kevin De Bruyne', goals: 115, imageURL: '' },
    { id: crypto.randomUUID(), name: 'João Félix', goals: 95, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Son Heung-min', goals: 170, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Marcus Rashford', goals: 130, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Phil Foden', goals: 65, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Vinícius Júnior', goals: 60, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Thierry Henry', goals: 411, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Raúl González', goals: 404, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Sergio Agüero', goals: 427, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Francesco Totti', goals: 316, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Alessandro Del Piero', goals: 346, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Gabriel Batistuta', goals: 356, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Samuel Eto’o', goals: 359, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Didier Drogba', goals: 300, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Wayne Rooney', goals: 366, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Andriy Shevchenko', goals: 349, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Michael Owen', goals: 222, imageURL: '' },
    { id: crypto.randomUUID(), name: 'David Villa', goals: 323, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Hernán Crespo', goals: 273, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Ruud van Nistelrooy', goals: 347, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Patrick Kluivert', goals: 240, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Fernando Torres', goals: 260, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Roberto Baggio', goals: 318, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Ryan Giggs', goals: 168, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Frank Lampard', goals: 303, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Steven Gerrard', goals: 212, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Paul Scholes', goals: 155, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Zinedine Zidane', goals: 125, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Xavi Hernández', goals: 113, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Andrés Iniesta', goals: 93, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Ronaldinho Gaúcho', goals: 266, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Pavel Nedvěd', goals: 146, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Clarence Seedorf', goals: 127, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Robinho', goals: 193, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Luka Modrić', goals: 107, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Jari Litmanen', goals: 203, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Dejan Stanković', goals: 118, imageURL: '' },
    { id: crypto.randomUUID(), name: 'David Beckham', goals: 146, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Arjen Robben', goals: 246, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Paolo Maldini', goals: 40, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Cafu', goals: 20, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Roberto Carlos', goals: 75, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Carles Puyol', goals: 22, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Philipp Lahm', goals: 25, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Javier Zanetti', goals: 33, imageURL: '' },
    { id: crypto.randomUUID(), name: 'John Terry', goals: 41, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Rio Ferdinand', goals: 15, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Giorgio Chiellini', goals: 38, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Gerard Piqué', goals: 53, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Sergio Ramos', goals: 105, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Nemanja Vidić', goals: 20, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Vincent Kompany', goals: 37, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Thiago Silva', goals: 42, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Ashley Cole', goals: 20, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Patrice Evra', goals: 15, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Marcelo Vieira', goals: 38, imageURL: '' },
    { id: crypto.randomUUID(), name: 'Dani Alves', goals: 60, imageURL: '' },
    { id: crypto.randomUUID(), name: 'João Cancelo', goals: 15, imageURL: '' }
];


type Player = { id: string, name: string, goals: number, imageURL: string | undefined };
type Slot = { id: string, text: string, multiplier: number, player: Player | undefined };
const sixKSlots: Array<Slot> = [
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined
    },
    {
        id: crypto.randomUUID(), text: 'X3', multiplier: 3, player: undefined
    },
    {
        id: crypto.randomUUID(), text: 'X4', multiplier: 4, player: undefined
    }];
type MaxAttempts = { x1: number, x2: number, x3: number, x4: number, x5: number };
const sixKTargetAttempts: MaxAttempts = {
    x1: 3,
    x2: 2,
    x3: 1,
    x4: 1,
    x5: 0
}
const nineKTargetAttempts: MaxAttempts = {
    x1: 3,
    x2: 2,
    x3: 1,
    x4: 1,
    x5: 0
}
const tenKTargetAttempts: MaxAttempts = {
    x1: 3,
    x2: 2,
    x3: 1,
    x4: 1,
    x5: 0
}
const twelveKTargetAttempts: MaxAttempts = {
    x1: 3,
    x2: 2,
    x3: 1,
    x4: 1,
    x5: 0
}

function getPlayer(): Player {
    const index = Math.floor(Math.random() * playersArray.length);
    return playersArray[index];
}

function App() {
    const [sortedPlayersList, setSortedPlayersList] = useState<Array<Player>>([]);
    const [currentSlots, setCurrentSlots] = useState<Array<Slot>>(sixKSlots);
    const [currentPlayer, setCurrentPlayer] = useState<Player>(getPlayer());

    useEffect(() => {
        if (currentPlayer) {
            setSortedPlayersList(prev => {
                const aux = [...prev, currentPlayer];
                return aux;
            });
        }
        console.log(sortedPlayersList);
    }, [currentPlayer]);

    return (
        <>
            <div className="current_player_data">
                <img src={currentPlayer?.imageURL} alt="" className="player_image" />
                <p>{currentPlayer?.name}</p>
                <div className="slots">
                    {currentSlots.map(slot => {
                        return (
                            <div className="slot_row">
                                <button className="slot_btn" onClick={(e) => {
                                    e.currentTarget.disabled = true;
                                    setCurrentSlots(prev => {
                                        let aux = [...prev];
                                        const index = aux.findIndex(i => i.id === slot.id);
                                        aux[index] = { ...aux[index], player: { ...currentPlayer, goals: currentPlayer.goals * slot.multiplier } }
                                        return aux;
                                    });
                                    setCurrentPlayer(getPlayer());
                                }}>{slot.text}</button>
                                <p>{slot.text}: {slot.player !== undefined ? `${slot.player.name} -` : ''} {slot.player !== undefined ? `(${slot.player.goals})` : ''}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default App;