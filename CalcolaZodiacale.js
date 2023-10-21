function calcolaSegnoZodiacale() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);

    let segnoZodiacale = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        segnoZodiacale = 'Ariete';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        segnoZodiacale = 'Toro';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        segnoZodiacale = 'Gemelli';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        segnoZodiacale = 'Cancro';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        segnoZodiacale = 'Leone';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        segnoZodiacale = 'Vergine';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        segnoZodiacale = 'Bilancia';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        segnoZodiacale = 'Scorpione';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        segnoZodiacale = 'Sagittario';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        segnoZodiacale = 'Capricorno';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        segnoZodiacale = 'Acquario';
    } else {
        segnoZodiacale = 'Pesci';
    }

    document.getElementById('output').innerText = `Il tuo segno zodiacale è ${segnoZodiacale}.`;
}