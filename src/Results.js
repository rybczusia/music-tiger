import React from "react";
import logo from "./img/logo1.png";

const handleCheck = (result) => {
    let feedback = '';
    switch (true) {
        case result < 1:
            feedback = `Zdobyłeś ${result} punktów. Lepiej zajmij się hodowlą jedwabników.`;
            break;
        case result === 1:
            feedback = `Zdobyłeś ${result} punkt. Coś słabiutko, może znasz się lepiej na tarciu chrzanu.`;
            break;
        case result === 2:
            feedback = `Zdobyłeś ${result} punkt. Trochę wstyd.`;
            break;
        case result === 3:
            feedback = `Zdobyłeś ${result} punkt. Brawo. Jesteś lepszy niż 0,00001% społeczeństwa.`;
            break;
        case result === 4:
            feedback = `Zdobyłeś ${result} punkt. Brawo. Oficjalnie możesz nazywać się Gimbusem.`;
            break;
        case result === 5:
            feedback = `Zdobyłeś ${result} punkt. Trzeba było wybrać inną kategorię.`;
            break;
        case result === 6:
            feedback = `Zdobyłeś ${result} punkt. Grasz w to lepiej niż Glik w reklamie Blacho-Trapez.`;
            break;
        case result === 7:
            feedback = `Zdobyłeś ${result} punktów. No, no, możesz sobie zaklaskać uszami.`;
            break;
        case result === 8:
            feedback = `Zdobyłeś ${result} punktów. Sam Sławomir Peszko może Ci teraz polać.`;
            break;
        case (result === 9) :
            feedback = `Zdobyłeś ${result} punktów. Nie jesteś Gimbusem.`;
            break;
        case (result === 10 || result === 11):
            feedback = `Zdobyłeś ${result} punktów. Krzysztof Krawczyk by tyle nie zdobył.`;
            break;
        case (result === 12 || result === 13):
            feedback = `Zdobyłeś ${result} punktów. Masz duży potencjał. Nie zmarnuj go na słuchanie Fasolek.`;
            break;
        case (result > 13 && result < 16):
            feedback = `Zdobyłeś ${result} punktów. Albo masz farta albo zaczynasz to czuć.`;
            break;
        case (result >= 16 && result < 18):
            feedback = `Zdobyłeś ${result} punktów. Znasz się na tym prawie tak dobrze jak Kurt Kobain na dragach.`;
            break;
        case (result >= 18 && result < 20):
            feedback = `Zdobyłeś ${result} punktów. Jesteś tygryskowym potworkiem.`;
            break;
        case (result >= 20):
            feedback = `Zdabyłeś ${result} punktów. Jesteś muzycznym tygryskiem.`;
            break;
    }
    return feedback;
};

const handleClick = () => {
    window.location = "/start";
};

const Results = () => {
    const result = Number(localStorage.result);
    console.log('RESULT: ' + result);

    const feedback = handleCheck(result);
    return (
        <>
            <div className='App-result'>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>{feedback}</div>
                    <button onClick={handleClick} className='App-result-btn'>Spróbuj jeszcze raz</button>
            </div>

        </>
    )
};

export default Results;
