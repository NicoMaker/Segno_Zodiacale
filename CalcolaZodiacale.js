let immaginesegno = '<img src="SEGNI/segni.jpg">';
document.getElementById("immagine").innerHTML = immaginesegno;

function calcolaSegnoZodiacale() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);

    let segnoZodiacale = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        segnoZodiacale = 'Ariete';
        immaginesegno = '<img src="SEGNI/Ariete.jpg">';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        segnoZodiacale = 'Toro';
        immaginesegno = '<img src="SEGNI/Toro.jpg">';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        segnoZodiacale = 'Gemelli';
        immaginesegno = '<img src="SEGNI/Gemelli.jpg">';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        segnoZodiacale = 'Cancro';
        immaginesegno = '<img src="SEGNI/Cancro.jpg">';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        segnoZodiacale = 'Leone';
        immaginesegno = '<img src="SEGNI/leone.jpg">';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        segnoZodiacale = 'Vergine';
        immaginesegno = '<img src="SEGNI/Vergine.jpg">';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        segnoZodiacale = 'Bilancia';
        immaginesegno = '<img src="SEGNI/Bilancia.jpg">';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        segnoZodiacale = 'Scorpione';
        immaginesegno = '<img src="SEGNI/Scorpione.jpg">';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        segnoZodiacale = 'Sagittario';
        immaginesegno = '<img src="SEGNI/Sagitario.jpg">';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        segnoZodiacale = 'Capricorno';
        immaginesegno = '<img src="SEGNI/Capricorno.jpg">';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        segnoZodiacale = 'Acquario';
        immaginesegno = '<img src="SEGNI/Acquario.jpg">';
    } else {
        segnoZodiacale = 'Pesci';
        immaginesegno = '<img src="SEGNI/Pesci.jpg">';
    }

    document.getElementById('output').innerText = `Il tuo segno zodiacale è ${segnoZodiacale}.`;
    document.getElementById("immagine").innerHTML = immaginesegno;
}