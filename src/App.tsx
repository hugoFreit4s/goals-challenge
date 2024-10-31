import { useEffect, useState } from "react";
import { renderToReadableStream } from "react-dom/server";


const playersArray: Array<Player> = [
    { id: crypto.randomUUID(), name: 'Cristiano Ronaldo', goals: 906, imageURL: '' },
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
type Slot = { id: string, text: string, multiplier: number, player: Player | undefined, clicked: boolean; };
const sixKSlots: Array<Slot> = [
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X3', multiplier: 3, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X4', multiplier: 4, player: undefined, clicked: false,
    }];
const nineKSlots: Array<Slot> = [
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X3', multiplier: 3, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X3', multiplier: 3, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X4', multiplier: 4, player: undefined, clicked: false,
    }];
const tenKSlots: Array<Slot> = [
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X3', multiplier: 3, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X3', multiplier: 3, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X4', multiplier: 4, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X5', multiplier: 5, player: undefined, clicked: false,
    }];
const twelveKSlots: Array<Slot> = [
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X1', multiplier: 1, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X2', multiplier: 2, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X3', multiplier: 3, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X3', multiplier: 3, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X4', multiplier: 4, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X4', multiplier: 4, player: undefined, clicked: false,
    },
    {
        id: crypto.randomUUID(), text: 'X5', multiplier: 5, player: undefined, clicked: false,
    }];
type HighScores = {
    sixK: number,
    nineK: number,
    tenK: number,
    twelveK: number
}
const initialHighScores: HighScores = {
    sixK: 0,
    nineK: 0,
    tenK: 0,
    twelveK: 0
}
type Wins = {
    sixK: number,
    nineK: number,
    tenK: number,
    twelveK: number
}
const initialWins: Wins = {
    sixK: 0,
    nineK: 0,
    tenK: 0,
    twelveK: 0
}

function getPlayer(): Player {
    const index = Math.floor(Math.random() * playersArray.length);
    return playersArray[index];
}

function App() {
    const [currentSlots, setCurrentSlots] = useState<Array<Slot>>(sixKSlots);
    const [currentPlayer, setCurrentPlayer] = useState<Player>(getPlayer());
    const [sumOfGoals, setSumOfGoals] = useState<number>();
    const [sortedPlayers, setSortedPlayers] = useState<Array<Player>>([]);
    const [targetAmountOfGoals, setTargetAmountOfGoals] = useState<string>("6000");
    const [gameFinished, setGameFinished] = useState<boolean>(false);
    const [highScores, setHighScores] = useState<HighScores>(initialHighScores);
    const [currentHighScore, setCurrentHighscore] = useState<number>(initialHighScores.sixK);
    const [wins, setWins] = useState<Wins>(initialWins);
    const [currentWins, setCurrentWins] = useState<number>(initialWins.sixK);

    useEffect(() => {
        if (sortedPlayers.length === currentSlots.length) {
            let acc = 0;
            currentSlots.map(slot => {
                acc += slot.player!.goals;
            });
            setSumOfGoals(acc);
            setGameFinished(true);
        }

        if (sortedPlayers.length !== currentSlots.length) {
            setCurrentPlayer(getPlayer());
        } else {
            setCurrentPlayer({ name: '', goals: 0, imageURL: '', id: 'none' })
        }

    }, [sortedPlayers]);

    useEffect(() => {
        switch (targetAmountOfGoals) {
            case "6000":
                setCurrentSlots(sixKSlots);
                break;
            case "9000":
                setCurrentSlots(nineKSlots);
                break;
            case "10000":
                setCurrentSlots(tenKSlots);
                break;
            case "12000":
                setCurrentSlots(twelveKSlots);
                break;
            default:
                break;
        }
    }, [targetAmountOfGoals]);

    useEffect(() => {
        const currentLayout = getCurrentLayout();

        switch (currentLayout) {
            case 'sixk':
                if (sumOfGoals! > highScores.sixK) {
                    setHighScores(prev => {
                        const aux = { ...prev };
                        aux.sixK = sumOfGoals!;
                        return aux
                    });
                }
                if (sumOfGoals! > Number(targetAmountOfGoals)) {
                    setWins(prev => {
                        const aux = { ...prev };
                        aux.sixK = aux.sixK + 1;
                        return aux
                    });
                }
                break;
            case 'ninek':
                if (sumOfGoals! > highScores.nineK) {
                    setHighScores(prev => {
                        const aux = { ...prev };
                        aux.nineK = sumOfGoals!;
                        return aux
                    });
                }
                if (sumOfGoals! > Number(targetAmountOfGoals)) {
                    setWins(prev => {
                        const aux = { ...prev };
                        aux.nineK = aux.nineK + 1;
                        return aux
                    });
                }
                break;
                break;
            case 'tenk':
                if (sumOfGoals! > highScores.tenK) {
                    setHighScores(prev => {
                        const aux = { ...prev };
                        aux.tenK = sumOfGoals!;
                        return aux
                    });
                }
                if (sumOfGoals! > Number(targetAmountOfGoals)) {
                    setWins(prev => {
                        const aux = { ...prev };
                        aux.tenK = aux.tenK + 1;
                        return aux
                    });
                }
                break;
                break;
            case 'twelvek':
                if (sumOfGoals! > highScores.twelveK) {
                    setHighScores(prev => {
                        const aux = { ...prev };
                        aux.twelveK = sumOfGoals!;
                        return aux
                    });
                }
                if (sumOfGoals! > Number(targetAmountOfGoals)) {
                    setWins(prev => {
                        const aux = { ...prev };
                        aux.twelveK = aux.twelveK + 1;
                        return aux
                    });
                }
                break;
                break;
            default:
                break;
        }
    }, [sumOfGoals]);

    useEffect(() => {
        const currentLayout = getCurrentLayout();
        switch (currentLayout) {
            case 'sixk':
                setCurrentHighscore(highScores.sixK);
                setCurrentWins(wins.sixK);
                break;
            case 'ninek':
                setCurrentHighscore(highScores.nineK);
                setCurrentWins(wins.nineK);
                break;
            case 'tenk':
                setCurrentHighscore(highScores.tenK);
                setCurrentWins(wins.tenK);
                break;
            case 'twelvek':
                setCurrentHighscore(highScores.twelveK);
                setCurrentWins(wins.twelveK);
                break;
            default:
                break;
        }
    })

    function resetGame(layout: Slot[]) {
        setCurrentSlots(layout);
        setGameFinished(false);
        setCurrentPlayer(getPlayer());
        setSortedPlayers([]);
        setSumOfGoals(0);
    }

    function getCurrentLayout() {
        if (currentSlots.length === 7) {
            return 'sixk';
        } else if (currentSlots.length === 8) {
            return 'ninek';
        } else if (currentSlots.length === 9) {
            return 'tenk';
        } else {
            return 'twelvek';
        }
    }

    return (
        <>
            <div className="select_target">
                <select name="target" id="select_target" onChange={(e) => {
                    setTargetAmountOfGoals(e.target.value);
                    setCurrentPlayer(getPlayer());
                    switch (e.target.value) {
                        case "6000":
                            setCurrentHighscore(highScores.sixK);
                            resetGame(sixKSlots);
                            break;
                        case "9000":
                            setCurrentHighscore(highScores.nineK);
                            resetGame(nineKSlots);
                            break;
                        case "10000":
                            setCurrentHighscore(highScores.tenK);
                            resetGame(tenKSlots);
                            break;
                        case "12000":
                            setCurrentHighscore(highScores.twelveK);
                            resetGame(twelveKSlots);
                            break;
                        default:
                            break;
                    }
                }}>
                    <option value="6000">6000</option>
                    <option value="9000">9000</option>
                    <option value="10000">10000</option>
                    <option value="12000">12000</option>
                </select>
            </div>
            <div className="current_player_data">
                <img src={currentPlayer?.imageURL} alt="" className="player_image" />
                <p>{currentPlayer?.name}</p>
            </div>
            <div className="slots">
                {gameFinished && <button className="play_again_btn" onClick={() => {
                    const currentLayout = getCurrentLayout();
                    switch (currentLayout) {
                        case 'sixk':
                            resetGame(sixKSlots);
                            break;
                        case 'ninek':
                            resetGame(nineKSlots);
                            break;
                        case 'tenk':
                            resetGame(tenKSlots)
                            break;
                        case 'twelvek':
                            resetGame(twelveKSlots)
                            break;
                        default:
                            break;
                    }
                }}>Play again</button>}
                {currentSlots.map(slot => {
                    return (
                        <div className="slot_row">
                            <button className="slot_btn" disabled={slot.clicked} onClick={() => {
                                setSortedPlayers(prev => {
                                    const aux = [...prev, currentPlayer];
                                    return aux;
                                });
                                setCurrentSlots(prev => {
                                    let aux = [...prev];
                                    const index = aux.findIndex(i => i.id === slot.id);
                                    aux[index] = { ...aux[index], player: { ...currentPlayer, goals: currentPlayer.goals * slot.multiplier }, clicked: true }
                                    return aux;
                                });
                            }}>{slot.text}</button>
                            <p>{slot.text}: {slot.player !== undefined ? `${slot.player.name} -` : ''} {slot.player !== undefined ? `(${slot.player.goals})` : ''}</p>
                        </div>
                    )
                })}
                {(sumOfGoals !== undefined && sumOfGoals > 0) && <p className="result_txt">{sumOfGoals}</p>}
                <p className="high_score_txt">{`Current level highscore: ${currentHighScore}`}</p>
                <p className="wins_txt">{`Wins at this level: ${currentWins}`}</p>
            </div>
        </>
    )
}

export default App;