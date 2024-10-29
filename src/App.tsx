import { useEffect, useMemo, useState } from "react"
import SetSlotButton from "./SetSlotButton";
const playersArray: Array<Player> = [
    // Lendários
    { id: crypto.randomUUID(), name: 'Cristiano Ronaldo', goals: 906 },
    { id: crypto.randomUUID(), name: 'Lionel Messi', goals: 896 },
    { id: crypto.randomUUID(), name: 'Pelé', goals: 767 },
    { id: crypto.randomUUID(), name: 'Romário', goals: 772 },
    { id: crypto.randomUUID(), name: 'Ferenc Puskás', goals: 746 },
    { id: crypto.randomUUID(), name: 'Josef Bican', goals: 805 },
    { id: crypto.randomUUID(), name: 'Gerd Müller', goals: 735 },
    { id: crypto.randomUUID(), name: 'Diego Maradona', goals: 344 },
    { id: crypto.randomUUID(), name: 'Marco van Basten', goals: 277 },
    { id: crypto.randomUUID(), name: 'George Best', goals: 208 },
    { id: crypto.randomUUID(), name: 'Hugo Sánchez', goals: 282 },
    { id: crypto.randomUUID(), name: 'Eusébio', goals: 473 },
    { id: crypto.randomUUID(), name: 'Johan Cruyff', goals: 368 },
    { id: crypto.randomUUID(), name: 'Michel Platini', goals: 224 },
    { id: crypto.randomUUID(), name: 'Alfredo Di Stéfano', goals: 493 },

    // Em atividade (nas grandes ligas europeias)
    { id: crypto.randomUUID(), name: 'Robert Lewandowski', goals: 584 },
    { id: crypto.randomUUID(), name: 'Neymar Jr.', goals: 436 },
    { id: crypto.randomUUID(), name: 'Luis Suárez', goals: 528 },
    { id: crypto.randomUUID(), name: 'Karim Benzema', goals: 437 },
    { id: crypto.randomUUID(), name: 'Edinson Cavani', goals: 429 },
    { id: crypto.randomUUID(), name: 'Kylian Mbappé', goals: 267 },
    { id: crypto.randomUUID(), name: 'Harry Kane', goals: 317 },
    { id: crypto.randomUUID(), name: 'Mohamed Salah', goals: 230 },
    { id: crypto.randomUUID(), name: 'Sadio Mané', goals: 205 },
    { id: crypto.randomUUID(), name: 'Raheem Sterling', goals: 160 },
    { id: crypto.randomUUID(), name: 'Romelu Lukaku', goals: 250 },
    { id: crypto.randomUUID(), name: 'Antoine Griezmann', goals: 220 },
    { id: crypto.randomUUID(), name: 'Ciro Immobile', goals: 210 },
    { id: crypto.randomUUID(), name: 'Paulo Dybala', goals: 130 },
    { id: crypto.randomUUID(), name: 'Lautaro Martínez', goals: 115 },
    { id: crypto.randomUUID(), name: 'Erling Haaland', goals: 160 },
    { id: crypto.randomUUID(), name: 'Gabriel Jesus', goals: 120 },
    { id: crypto.randomUUID(), name: 'Bruno Fernandes', goals: 135 },
    { id: crypto.randomUUID(), name: 'Kevin De Bruyne', goals: 115 },
    { id: crypto.randomUUID(), name: 'João Félix', goals: 95 },
    { id: crypto.randomUUID(), name: 'Son Heung-min', goals: 170 },
    { id: crypto.randomUUID(), name: 'Marcus Rashford', goals: 130 },
    { id: crypto.randomUUID(), name: 'Phil Foden', goals: 65 },
    { id: crypto.randomUUID(), name: 'Vinícius Júnior', goals: 60 },

    // Aposentados conhecidos
    { id: crypto.randomUUID(), name: 'Thierry Henry', goals: 411 },
    { id: crypto.randomUUID(), name: 'Raúl González', goals: 404 },
    { id: crypto.randomUUID(), name: 'Sergio Agüero', goals: 427 },
    { id: crypto.randomUUID(), name: 'Francesco Totti', goals: 316 },
    { id: crypto.randomUUID(), name: 'Alessandro Del Piero', goals: 346 },
    { id: crypto.randomUUID(), name: 'Gabriel Batistuta', goals: 356 },
    { id: crypto.randomUUID(), name: 'Samuel Eto’o', goals: 359 },
    { id: crypto.randomUUID(), name: 'Didier Drogba', goals: 300 },
    { id: crypto.randomUUID(), name: 'Wayne Rooney', goals: 366 },
    { id: crypto.randomUUID(), name: 'Andriy Shevchenko', goals: 349 },
    { id: crypto.randomUUID(), name: 'Michael Owen', goals: 222 },
    { id: crypto.randomUUID(), name: 'David Villa', goals: 323 },
    { id: crypto.randomUUID(), name: 'Hernán Crespo', goals: 273 },
    { id: crypto.randomUUID(), name: 'Ruud van Nistelrooy', goals: 347 },
    { id: crypto.randomUUID(), name: 'Patrick Kluivert', goals: 240 },
    { id: crypto.randomUUID(), name: 'Fernando Torres', goals: 260 },
    { id: crypto.randomUUID(), name: 'Roberto Baggio', goals: 318 },
    { id: crypto.randomUUID(), name: 'Ryan Giggs', goals: 168 },
    { id: crypto.randomUUID(), name: 'Frank Lampard', goals: 303 },
    { id: crypto.randomUUID(), name: 'Steven Gerrard', goals: 212 },
    { id: crypto.randomUUID(), name: 'Paul Scholes', goals: 155 },
    { id: crypto.randomUUID(), name: 'Zinedine Zidane', goals: 125 },
    { id: crypto.randomUUID(), name: 'Xavi Hernández', goals: 113 },
    { id: crypto.randomUUID(), name: 'Andrés Iniesta', goals: 93 },
    { id: crypto.randomUUID(), name: 'Ronaldinho Gaúcho', goals: 266 },
    { id: crypto.randomUUID(), name: 'Pavel Nedvěd', goals: 146 },
    { id: crypto.randomUUID(), name: 'Clarence Seedorf', goals: 127 },
    { id: crypto.randomUUID(), name: 'Robinho', goals: 193 },
    { id: crypto.randomUUID(), name: 'Luka Modrić', goals: 107 },
    { id: crypto.randomUUID(), name: 'Jari Litmanen', goals: 203 },
    { id: crypto.randomUUID(), name: 'Dejan Stanković', goals: 118 },
    { id: crypto.randomUUID(), name: 'David Beckham', goals: 146 },
    { id: crypto.randomUUID(), name: 'Arjen Robben', goals: 246 },
    { id: crypto.randomUUID(), name: 'Paolo Maldini', goals: 40 },
    { id: crypto.randomUUID(), name: 'Cafu', goals: 20 },
    { id: crypto.randomUUID(), name: 'Roberto Carlos', goals: 75 },
    { id: crypto.randomUUID(), name: 'Carles Puyol', goals: 22 },
    { id: crypto.randomUUID(), name: 'Philipp Lahm', goals: 25 },
    { id: crypto.randomUUID(), name: 'Javier Zanetti', goals: 33 },
    { id: crypto.randomUUID(), name: 'John Terry', goals: 41 },
    { id: crypto.randomUUID(), name: 'Rio Ferdinand', goals: 15 },
    { id: crypto.randomUUID(), name: 'Giorgio Chiellini', goals: 38 },
    { id: crypto.randomUUID(), name: 'Gerard Piqué', goals: 53 },
    { id: crypto.randomUUID(), name: 'Sergio Ramos', goals: 105 },
    { id: crypto.randomUUID(), name: 'Nemanja Vidić', goals: 20 },
    { id: crypto.randomUUID(), name: 'Vincent Kompany', goals: 37 },
    { id: crypto.randomUUID(), name: 'Thiago Silva', goals: 42 },
    { id: crypto.randomUUID(), name: 'Ashley Cole', goals: 20 },
    { id: crypto.randomUUID(), name: 'Patrice Evra', goals: 15 },
    { id: crypto.randomUUID(), name: 'Marcelo Vieira', goals: 38 },
    { id: crypto.randomUUID(), name: 'Dani Alves', goals: 60 },
    { id: crypto.randomUUID(), name: 'João Cancelo', goals: 15 }
];

export type Player = { id: string, name: string, goals: number };
type Slot = {
    text: string,
    multiplier: number,
    player: Player | undefined
}
type TimesGoalsMultiplierType = {
    x1: number,
    x2: number,
    x3: number,
    x4: number,
    x5: number,
}
const multiplier6000GoalsInitialState: TimesGoalsMultiplierType = {
    x1: 3,
    x2: 2,
    x3: 1,
    x4: 1,
    x5: 0
}
const multiplier9000GoalsInitialState: TimesGoalsMultiplierType = {
    x1: 3,
    x2: 3,
    x3: 3,
    x4: 1,
    x5: 0
}
const multiplier11000GoalsInitialState: TimesGoalsMultiplierType = {
    x1: 3,
    x2: 3,
    x3: 3,
    x4: 1,
    x5: 1
}

function App() {

    const [pickedPlayersArr, setPickedPlayersArr] = useState<Player[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<Player>({} as Player);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);
    const [targetGoals, setTargetGoal] = useState<number>(6000);
    const [timesGoalsMultiplier, setTimesGoalsMultiplier] = useState<TimesGoalsMultiplierType>(multiplier6000GoalsInitialState);
    const [highestScore, setHighestScore] = useState<number>(0);
    const maxAttempts = useMemo(() => {
        return timesGoalsMultiplier.x1
            + timesGoalsMultiplier.x2
            + timesGoalsMultiplier.x3
            + timesGoalsMultiplier.x4
            + timesGoalsMultiplier.x5
    }, [timesGoalsMultiplier]);
    const [slots, setSlots] = useState<Array<Slot>>([]);


    useEffect(() => {
        if (pickedPlayersArr.length >= maxAttempts) {
            let acc = 0
            slots.forEach(slot => {
                acc += slot.player!.goals * slot.multiplier;
            });
            setResult(acc);
            setHighestScore(acc > highestScore ? acc : highestScore);
            setGameStarted(false);
        }

        setSlots((prev) => {
            const auxArr = [...prev]
            for (let i = 0; i < auxArr.length - 1; i++) {
                for (let j = i + 1; j < auxArr.length; j++) {
                    if (auxArr[j].multiplier < auxArr[i].multiplier) {
                        let aux = auxArr[j];
                        auxArr[j] = auxArr[i];
                        auxArr[i] = { ...aux };
                    }
                }
            }
            return auxArr;
        });
    }, [timesGoalsMultiplier, maxAttempts]);

    function setGoalsMultiplierInitialState() {
        if (targetGoals === 6000) {
            setTimesGoalsMultiplier(multiplier6000GoalsInitialState)
        } else if (targetGoals === 9000) {
            setTimesGoalsMultiplier(multiplier9000GoalsInitialState)
        } else {
            setTimesGoalsMultiplier(multiplier11000GoalsInitialState)
        }
    }

    function resetGame() {
        setGoalsMultiplierInitialState();
        setResult(0);
        setPickedPlayersArr([]);
        changeSlotLayout();
    }

    useEffect(() => {
        setGoalsMultiplierInitialState();
        changeSlotLayout()
    }, [targetGoals])

    function changeSlotLayout() {
        switch (targetGoals) {
            case 6000:
                setSlots([
                    { multiplier: 1, text: 'X1:', player: undefined },
                    { multiplier: 1, text: 'X1:', player: undefined },
                    { multiplier: 1, text: 'X1:', player: undefined },
                    { multiplier: 2, text: 'X2:', player: undefined },
                    { multiplier: 2, text: 'X2:', player: undefined },
                    { multiplier: 3, text: 'X3:', player: undefined },
                    { multiplier: 4, text: 'X4:', player: undefined },
                ]);
                break;
            case 9000:
                setSlots([
                    { multiplier: 1, text: 'X1:', player: undefined },
                    { multiplier: 1, text: 'X1:', player: undefined },
                    { multiplier: 1, text: 'X1:', player: undefined },
                    { multiplier: 2, text: 'X2:', player: undefined },
                    { multiplier: 2, text: 'X2:', player: undefined },
                    { multiplier: 2, text: 'X2:', player: undefined },
                    { multiplier: 3, text: 'X3:', player: undefined },
                    { multiplier: 3, text: 'X3:', player: undefined },
                    { multiplier: 3, text: 'X3:', player: undefined },
                    { multiplier: 4, text: 'X4:', player: undefined },
                ]);
                break;
            case 11000:
                setSlots([
                    { multiplier: 1, text: 'X1:', player: undefined },
                    { multiplier: 1, text: 'X1:', player: undefined },
                    { multiplier: 1, text: 'X1:', player: undefined },
                    { multiplier: 2, text: 'X2:', player: undefined },
                    { multiplier: 2, text: 'X2:', player: undefined },
                    { multiplier: 2, text: 'X2:', player: undefined },
                    { multiplier: 3, text: 'X3:', player: undefined },
                    { multiplier: 3, text: 'X3:', player: undefined },
                    { multiplier: 3, text: 'X3:', player: undefined },
                    { multiplier: 4, text: 'X4:', player: undefined },
                    { multiplier: 5, text: 'X5:', player: undefined },
                ]);
                break;
            default:
                break;
        }
    }

    function getRandomNumber(): number {
        return Math.floor(Math.random() * playersArray.length);
    }

    return (
        <main>
            <h1>Goal: {targetGoals}</h1>
            <select name="goal" id="goal_select" disabled={gameStarted} onChange={(e) => {
                resetGame();
                setHighestScore(0);
                setTargetGoal(+e.target.value);
            }}>
                <option value="6000">6000</option>
                <option value="9000">9000</option>
                <option value="11000">11000</option>
            </select>
            <button className="button" disabled={gameStarted} onClick={() => {
                const randomIndex = Math.floor(getRandomNumber());
                setCurrentPlayer(playersArray[randomIndex]);
                setGameStarted(true);
                if (pickedPlayersArr.length >= maxAttempts) {
                    resetGame();
                }
            }}>{pickedPlayersArr.length >= maxAttempts ? 'Play again!' : 'Start game!'}</button>

            <div className="current_player">{currentPlayer.name}</div>
            <div className="options">
                <SetSlotButton
                    getPlayer={() => {
                        const randomIndex = Math.floor(getRandomNumber());
                        setCurrentPlayer(playersArray[randomIndex]);
                    }}
                    setPickedPlayersArr={() => setSlots(prev => {
                        let index;
                        index = prev.findIndex(i => i.multiplier === 1 && i.player === undefined)
                        let auxArr = [...prev];
                        auxArr[index] = { ...auxArr[index], player: currentPlayer }
                        return auxArr
                    })
                    }
                    attempts={timesGoalsMultiplier.x1}
                    setAttempts={() => setTimesGoalsMultiplier((prev) => {
                        return { ...prev, x1: prev.x1 - 1 }
                    })}
                    btnText="X1"
                />
                <SetSlotButton
                    getPlayer={() => {
                        const randomIndex = Math.floor(getRandomNumber());
                        setCurrentPlayer(playersArray[randomIndex]);
                    }}
                    setPickedPlayersArr={() => setSlots(prev => {
                        let index;
                        index = prev.findIndex(i => i.multiplier === 2 && i.player === undefined)
                        let auxArr = [...prev];
                        auxArr[index] = { ...auxArr[index], player: currentPlayer }
                        return auxArr
                    })}
                    attempts={timesGoalsMultiplier.x2}
                    setAttempts={() => setTimesGoalsMultiplier((prev) => {
                        return { ...prev, x2: prev.x2 - 1 }
                    })}
                    btnText="X2" />
                <SetSlotButton
                    getPlayer={() => {
                        const randomIndex = Math.floor(getRandomNumber());
                        setCurrentPlayer(playersArray[randomIndex]);
                    }}
                    setPickedPlayersArr={() => setSlots(prev => {
                        let index;
                        index = prev.findIndex(i => i.multiplier === 3 && i.player === undefined)
                        let auxArr = [...prev];
                        auxArr[index] = { ...auxArr[index], player: currentPlayer }
                        return auxArr
                    })}
                    attempts={timesGoalsMultiplier.x3}
                    setAttempts={() => setTimesGoalsMultiplier((prev) => {
                        return { ...prev, x3: prev.x3 - 1 }
                    })}
                    btnText="X3" />
                <SetSlotButton
                    getPlayer={() => {
                        const randomIndex = Math.floor(getRandomNumber());
                        setCurrentPlayer(playersArray[randomIndex]);
                    }}
                    setPickedPlayersArr={() => setSlots(prev => {
                        let index;
                        index = prev.findIndex(i => i.multiplier === 4 && i.player === undefined)
                        let auxArr = [...prev];
                        auxArr[index] = { ...auxArr[index], player: currentPlayer }
                        return auxArr
                    })}
                    attempts={timesGoalsMultiplier.x4}
                    setAttempts={() => setTimesGoalsMultiplier((prev) => {
                        return { ...prev, x4: prev.x4 - 1 }
                    })}
                    btnText="X4" />
                <SetSlotButton
                    getPlayer={() => {
                        const randomIndex = Math.floor(getRandomNumber());
                        setCurrentPlayer(playersArray[randomIndex]);
                    }}
                    setPickedPlayersArr={() => setSlots(prev => {
                        let index;
                        index = prev.findIndex(i => i.multiplier === 5 && i.player === undefined)
                        let auxArr = [...prev];
                        auxArr[index] = { ...auxArr[index], player: currentPlayer }
                        return auxArr
                    })}
                    attempts={timesGoalsMultiplier.x5}
                    setAttempts={() => setTimesGoalsMultiplier((prev) => {
                        return { ...prev, x5: prev.x5 - 1 }
                    })}
                    btnText="X5" />
            </div>
            <div className="slots">
                {slots.map(s => {
                    return <p>{s.text} {s.player === undefined ? '' : s.player.name + '(' + s.player.goals * s.multiplier + ')'}</p>
                })}
            </div>
            {pickedPlayersArr.length >= maxAttempts &&
                <div className="modal_backdrop">
                    <div className="modal_content">
                        <p>Score: {result}</p>
                        <p>{result >= targetGoals ? 'You Win!' : 'You Lose!'}</p>
                    </div>
                </div>}
            <p>Highest Score: {highestScore}</p>
        </main>
    )
}

export default App;