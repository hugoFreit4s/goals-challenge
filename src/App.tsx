import { useEffect, useState } from "react"
import SetSlotButton from "./SetSlotButton";

function App() {
    type Player = { name: string, goals: number };
    const playersArray: Array<Player> = [
        { name: 'Cristiano Ronaldo', goals: 906 },
        { name: 'Lionel Messi', goals: 896 },
        { name: 'Pelé', goals: 767 },
        { name: 'Romário', goals: 772 },
        { name: 'Robert Lewandowski', goals: 598 },
        { name: 'Luis Suárez', goals: 520 },
        { name: 'Zlatan Ibrahimović', goals: 573 },
        { name: 'Neymar', goals: 436 },
        { name: 'Kylian Mbappé', goals: 300 },
        { name: 'Erling Haaland', goals: 250 },
        { name: 'Karim Benzema', goals: 426 },
        { name: 'Thierry Henry', goals: 411 },
        { name: 'Gabriel Batistuta', goals: 356 },
        { name: 'Sergio Agüero', goals: 427 },
        { name: 'Edinson Cavani', goals: 428 },
        { name: 'Raúl', goals: 404 },
        { name: 'David Villa', goals: 376 },
        { name: 'Ruud van Nistelrooy', goals: 347 },
        { name: 'Andriy Shevchenko', goals: 372 },
        { name: 'Samuel Eto\'o', goals: 426 },
        { name: 'Wayne Rooney', goals: 366 },
        { name: 'Roberto Baggio', goals: 318 },
        { name: 'Sergio Ramos', goals: 132 },
        { name: 'Franz Beckenbauer', goals: 113 },
        { name: 'Ronald Koeman', goals: 253 },
        { name: 'Daniel Alves', goals: 55 },
        { name: 'Gerard Piqué', goals: 59 },
        { name: 'Thiago Silva', goals: 45 },
        { name: 'John Terry', goals: 66 },
        { name: 'David Alaba', goals: 35 },
        { name: 'Frank Lampard', goals: 303 },
        { name: 'Steven Gerrard', goals: 191 },
        { name: 'Zinedine Zidane', goals: 125 },
        { name: 'Xavi Hernandez', goals: 85 },
        { name: 'Andrés Iniesta', goals: 57 },
        { name: 'Paul Scholes', goals: 155 },
        { name: 'Michael Ballack', goals: 146 },
        { name: 'Cesc Fàbregas', goals: 98 },
        { name: 'Kevin De Bruyne', goals: 153 },
        { name: 'Luka Modric', goals: 82 },
        { name: 'Arturo Vidal', goals: 125 },
        { name: 'Rogério Ceni', goals: 131 },
        { name: 'José Luis Chilavert', goals: 67 },
        { name: 'Hans-Jörg Butt', goals: 32 },
        { name: 'René Higuita', goals: 41 },
        { name: 'Mohamed Salah', goals: 270 },
        { name: 'Sadio Mané', goals: 211 },
        { name: 'Harry Kane', goals: 321 },
        { name: 'Antoine Griezmann', goals: 234 },
        { name: 'Pierre-Emerick Aubameyang', goals: 272 },
        { name: 'Romelu Lukaku', goals: 368 },
        { name: 'Eden Hazard', goals: 185 },
        { name: 'Angel Di Maria', goals: 126 },
        { name: 'Philippe Coutinho', goals: 121 },
        { name: 'Toni Kroos', goals: 100 },
        { name: 'Casemiro', goals: 46 },
        { name: 'Sergio Busquets', goals: 18 },
        { name: 'N’Golo Kanté', goals: 24 },
        { name: 'Thomas Müller', goals: 277 },
        { name: 'Miroslav Klose', goals: 277 },
        { name: 'Marco Reus', goals: 159 },
        { name: 'Lautaro Martínez', goals: 149 },
        { name: 'João Félix', goals: 80 },
        { name: 'Paulo Dybala', goals: 152 },
        { name: 'Roberto Firmino', goals: 164 },
        { name: 'Alisson Becker', goals: 2 },
        { name: 'Ederson Moraes', goals: 1 },
        { name: 'Manuel Neuer', goals: 1 },
        { name: 'Paolo Maldini', goals: 40 },
        { name: 'Alessandro Nesta', goals: 20 },
        { name: 'Fabio Cannavaro', goals: 15 },
        { name: 'Marquinhos', goals: 38 },
        { name: 'Leonardo Bonucci', goals: 42 },
        { name: 'Virgil van Dijk', goals: 50 },
        { name: 'Raphaël Varane', goals: 29 },
        { name: 'Kalidou Koulibaly', goals: 23 },
        { name: 'Aymeric Laporte', goals: 25 },
        { name: 'Ben Chilwell', goals: 14 },
        { name: 'Reece James', goals: 13 },
        { name: 'Matthijs de Ligt', goals: 21 },
        { name: 'Achraf Hakimi', goals: 28 },
        { name: 'Andrew Robertson', goals: 12 },
        { name: 'Jordi Alba', goals: 27 },
        { name: 'César Azpilicueta', goals: 18 },
        { name: 'Antonio Rüdiger', goals: 19 },
        { name: 'Trent Alexander-Arnold', goals: 15 },
        { name: 'Luke Shaw', goals: 8 },
        { name: 'Giorgio Chiellini', goals: 37 },
        { name: 'Bruno Fernandes', goals: 120 },
        { name: 'Jadon Sancho', goals: 65 },
        { name: 'Marcus Rashford', goals: 120 },
        { name: 'Bukayo Saka', goals: 40 },
        { name: 'Raheem Sterling', goals: 140 },
        { name: 'Jack Grealish', goals: 40 },
        { name: 'Phil Foden', goals: 60 },
        { name: 'Mason Mount', goals: 55 },
        { name: 'Jude Bellingham', goals: 30 },
        { name: 'Kai Havertz', goals: 75 },
        { name: 'Tammy Abraham', goals: 90 },
        { name: 'Victor Osimhen', goals: 110 },
        { name: 'Wilfried Zaha', goals: 70 },
        { name: 'Jamie Vardy', goals: 190 },
        { name: 'James Maddison', goals: 60 },
        { name: 'Youri Tielemans', goals: 40 },
        { name: 'Harvey Barnes', goals: 40 },
        { name: 'James Ward-Prowse', goals: 55 },
        { name: 'Ollie Watkins', goals: 65 },
        { name: 'Ivan Toney', goals: 85 },
        { name: 'Alexander Isak', goals: 75 },
        { name: 'Martin Ødegaard', goals: 50 },
        { name: 'Emile Smith Rowe', goals: 30 },
        { name: 'Gabriel Jesus', goals: 120 },
        { name: 'Richarlison', goals: 85 },
        { name: 'Dominic Calvert-Lewin', goals: 70 },
        { name: 'Raphinha', goals: 60 },
        { name: 'Rodri', goals: 25 },
        { name: 'Declan Rice', goals: 15 },
        { name: 'Kalvin Phillips', goals: 10 },
        { name: 'Fabinho', goals: 30 },
        { name: 'Thiago Alcântara', goals: 25 },
        { name: 'Georginio Wijnaldum', goals: 70 },
        { name: 'Jorginho', goals: 34 },
        { name: 'Yves Bissouma', goals: 10 },
        { name: 'Enzo Fernández', goals: 15 },
        { name: 'Casemiro', goals: 46 },
        { name: 'Lucas Paquetá', goals: 55 },
        { name: 'Rodrygo', goals: 45 },
        { name: 'Vinícius Júnior', goals: 85 },
        { name: 'Federico Valverde', goals: 35 },
        { name: 'Eduardo Camavinga', goals: 15 },
        { name: 'Aurelien Tchouameni', goals: 20 },
        { name: 'Pedri', goals: 25 },
        { name: 'Gavi', goals: 15 },
        { name: 'Ansu Fati', goals: 35 },
        { name: 'Ferran Torres', goals: 45 },
        { name: 'Ousmane Dembélé', goals: 60 },
        { name: 'Memphis Depay', goals: 145 },
        { name: 'Gonzalo Higuaín', goals: 336 },
        { name: 'Karim Adeyemi', goals: 50 },
        { name: 'Christopher Nkunku', goals: 85 },
        { name: 'Randal Kolo Muani', goals: 50 },
        { name: 'Dusan Vlahovic', goals: 105 },
        { name: 'Federico Chiesa', goals: 60 },
        { name: 'Lorenzo Insigne', goals: 135 },
        { name: 'Ciro Immobile', goals: 240 },
        { name: 'Andrea Belotti', goals: 120 },
        { name: 'Sandro Tonali', goals: 25 },
        { name: 'Nicolo Barella', goals: 35 },
        { name: 'Adrien Rabiot', goals: 40 },
        { name: 'Manuel Locatelli', goals: 25 },
        { name: 'Sergej Milinkovic-Savic', goals: 80 },
        { name: 'Rafael Leão', goals: 85 },
        { name: 'Domenico Berardi', goals: 125 },
        { name: 'Paulo Dybala', goals: 152 },
        { name: 'Giorgio Chiellini', goals: 37 },
        { name: 'Leonardo Bonucci', goals: 42 },
        { name: 'Gianluigi Donnarumma', goals: 1 },
        { name: 'Kasper Schmeichel', goals: 1 },
        { name: 'Samir Handanovic', goals: 1 },
        { name: 'Pepe Reina', goals: 1 },
        { name: 'Manuel Neuer', goals: 1 },
        { name: 'Alisson Becker', goals: 2 },
        { name: 'Ederson Moraes', goals: 1 }
    ];

    const [pickedPlayersArr, setPickedPlayersArr] = useState<Player[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<Player>({} as Player);
    const [timeToSet, setTimeToSet] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);
    const [X1, setX1] = useState<number>(0);
    const [X2, setX2] = useState<number>(0);
    const [X3, setX3] = useState<number>(0);
    const [X4, setX4] = useState<number>(0);


    useEffect(() => {
        if (pickedPlayersArr.length >= 9) {
            let acc = 0
            pickedPlayersArr.forEach(player => {
                acc += player.goals;
            });
            setResult(acc);
        }

        setPickedPlayersArr((prev) => {
            const auxArr = [...prev]
            for (let i = 0; i < auxArr.length; i++) {
                for (let j = 0; j < auxArr.length; j++) {
                    if (auxArr[j].goals > auxArr[i].goals) {
                        let aux = auxArr[j];
                        auxArr[j] = auxArr[i];
                        auxArr[i] = { ...aux };
                    }
                }
            }
            return auxArr;
        });
    }, [X1, X2, X3, X4]);

    return (
        <main>
            <button className="button" disabled={timeToSet} onClick={() => {
                if (pickedPlayersArr.length < 9) {
                    const randomIndex = Math.floor(Math.random() * playersArray.length);
                    setCurrentPlayer(playersArray[randomIndex]);
                    setTimeToSet(true);
                    console.log(pickedPlayersArr.length)
                } else if (pickedPlayersArr.length === 9) {
                    setPickedPlayersArr([]);
                    setX1(0);
                    setX2(0);
                    setX3(0);
                    setX4(0);
                    setResult(0);
                    const randomIndex = Math.floor(Math.random() * playersArray.length);
                    setCurrentPlayer(playersArray[randomIndex]);
                    setTimeToSet(true);
                }
            }}>{pickedPlayersArr.length >= 9 ? 'Play again!' : 'Start game!'}</button>

            <div className="current_player">{currentPlayer.name}</div>
            <div className="options">
                <SetSlotButton
                    timeToSet={timeToSet}
                    setTimeToSet={() => {
                        setTimeToSet(!timeToSet);
                    }}
                    setPickedPlayersArr={(multiplier) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * multiplier };
                        setX1(X1 + 1);
                        return auxArr;
                    })}
                    multiplier={1}
                    slotVerifier={X1}
                    maxLength={3}
                    setSlotVerifier={() => setX1(X1 + 1)}
                    btnText="X1"
                />
                <SetSlotButton
                    timeToSet={timeToSet}
                    setTimeToSet={() => {
                        setTimeToSet(!timeToSet);
                    }}
                    setPickedPlayersArr={(multiplier) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * multiplier };
                        setX2(X2 + 1);
                        return auxArr;
                    })}
                    multiplier={2}
                    slotVerifier={X2}
                    maxLength={3}
                    setSlotVerifier={() => setX2(X2 + 1)}
                    btnText="X2"
                />
                <SetSlotButton
                    timeToSet={timeToSet}
                    setTimeToSet={() => {
                        setTimeToSet(!timeToSet);
                    }}
                    setPickedPlayersArr={(multiplier) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * multiplier };
                        setX3(X3 + 1);
                        return auxArr;
                    })}
                    multiplier={3}
                    slotVerifier={X3}
                    maxLength={2}
                    setSlotVerifier={() => setX3(X3 + 1)}
                    btnText="X3"
                />
                <SetSlotButton
                    timeToSet={timeToSet}
                    setTimeToSet={() => {
                        setTimeToSet(!timeToSet);
                    }}
                    setPickedPlayersArr={(multiplier) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * multiplier };
                        setX4(X4 + 1);
                        return auxArr;
                    })}
                    multiplier={4}
                    slotVerifier={X4}
                    maxLength={1}
                    setSlotVerifier={() => setX4(X4 + 1)}
                    btnText="X4"
                />
            </div>
            <div className="slots">
                {pickedPlayersArr.map(player => {
                    return <p>{`${player.name} - ${player.goals}`}</p>
                })}
            </div>
            {pickedPlayersArr.length >= 9 &&
                <div className="modal_backdrop">
                    <div className="modal_content">
                        <p>{result}</p>
                        <p>{result >= 9000 ? 'You Win!' : 'You Lose!'}</p>
                    </div>
                </div>}
        </main>
    )
}

export default App;