import { useEffect, useMemo, useState } from "react"
import SetSlotButton from "./SetSlotButton";
import PickedPlayersSlot from "./PickedPlayersSlot";
const playersArray: Array<Player> = [
    { id: crypto.randomUUID(), name: 'Cristiano Ronaldo', goals: 906 },
    { id: crypto.randomUUID(), name: 'Lionel Messi', goals: 896 },
    { id: crypto.randomUUID(), name: 'Pelé', goals: 767 },
    { id: crypto.randomUUID(), name: 'Romário', goals: 772 },
    { id: crypto.randomUUID(), name: 'Ferenc Puskás', goals: 746 },
    { id: crypto.randomUUID(), name: 'Ronaldo Nazário', goals: 414 },
    { id: crypto.randomUUID(), name: 'Josef Bican', goals: 805 },
    { id: crypto.randomUUID(), name: 'Gerd Müller', goals: 735 },
    { id: crypto.randomUUID(), name: 'Zlatan Ibrahimović', goals: 573 },
    { id: crypto.randomUUID(), name: 'Robert Lewandowski', goals: 584 },
    { id: crypto.randomUUID(), name: 'Thierry Henry', goals: 411 },
    { id: crypto.randomUUID(), name: 'Raúl González', goals: 404 },
    { id: crypto.randomUUID(), name: 'Neymar Jr.', goals: 436 },
    { id: crypto.randomUUID(), name: 'Luis Suárez', goals: 528 },
    { id: crypto.randomUUID(), name: 'Karim Benzema', goals: 437 },
    { id: crypto.randomUUID(), name: 'Diego Maradona', goals: 344 },
    { id: crypto.randomUUID(), name: 'Sergio Agüero', goals: 427 },
    { id: crypto.randomUUID(), name: 'Francesco Totti', goals: 316 },
    { id: crypto.randomUUID(), name: 'Alessandro Del Piero', goals: 346 },
    { id: crypto.randomUUID(), name: 'Gabriel Batistuta', goals: 356 },
    { id: crypto.randomUUID(), name: 'Samuel Eto’o', goals: 359 },
    { id: crypto.randomUUID(), name: 'Didier Drogba', goals: 300 },
    { id: crypto.randomUUID(), name: 'Edinson Cavani', goals: 429 },
    { id: crypto.randomUUID(), name: 'Kylian Mbappé', goals: 267 },
    { id: crypto.randomUUID(), name: 'Wayne Rooney', goals: 366 },
    { id: crypto.randomUUID(), name: 'Marco van Basten', goals: 277 },
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
    { id: crypto.randomUUID(), name: 'Gary Neville', goals: 7 },
    { id: crypto.randomUUID(), name: 'Patrice Evra', goals: 15 },
    { id: crypto.randomUUID(), name: 'Marcelo Vieira', goals: 38 },
    { id: crypto.randomUUID(), name: 'Dani Alves', goals: 60 },
    { id: crypto.randomUUID(), name: 'João Cancelo', goals: 15 },
    { id: crypto.randomUUID(), name: 'Johan Cruyff', goals: 368 },
];
export type Player = { id: string, name: string, goals: number };
export type SelectedPlayer = { "1stX1": Player, "2ndX1": Player, "3rdX1": Player, "1stX2": Player, "2ndX2": Player, "3rdX2": Player, "1stX3": Player, "2ndX3": Player, "3rdX3": Player, "1stX4": Player, "1stX5": Player };
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
    x3: 2,
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
const maxAttemptsInitialState = multiplier6000GoalsInitialState.x1
    + multiplier6000GoalsInitialState.x2
    + multiplier6000GoalsInitialState.x3
    + multiplier6000GoalsInitialState.x4
    + multiplier6000GoalsInitialState.x5

function App() {

    const [pickedPlayersArr, setPickedPlayersArr] = useState<SelectedPlayer[]>([]);
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


    useEffect(() => {
        if (pickedPlayersArr.length >= maxAttempts) {
            let acc = 0
            pickedPlayersArr.forEach(player => {
                acc += player.goals;
            });
            setResult(acc);
            setHighestScore(acc > highestScore ? acc : highestScore);
            setGameStarted(false);
        }

        setPickedPlayersArr((prev) => {
            const auxArr = [...prev]
            for (let i = 0; i < auxArr.length - 1; i++) {
                for (let j = i + 1; j < auxArr.length; j++) {
                    if (auxArr[j].goals < auxArr[i].goals) {
                        let aux = auxArr[j];
                        auxArr[j] = auxArr[i];
                        auxArr[i] = { ...aux };
                    }
                }
            }
            return auxArr;
        });
    }, [timesGoalsMultiplier]);

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
    }

    useEffect(() => {
        setGoalsMultiplierInitialState();
    }, [targetGoals])

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
                console.log(currentPlayer)
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
                    setPickedPlayersArr={() => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * 1 };
                        return auxArr;
                    })}
                    attempts={timesGoalsMultiplier.x1}
                    setAttempts={() => setTimesGoalsMultiplier((prev) => {
                        return { ...prev, x1: prev.x1 - 1 }
                    })}
                    btnText="X1"
                />
            </div>
            <div className="slots">
                {<PickedPlayersSlot allPlayers={playersArray} pickedPlayers={pickedPlayersArr} />}
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