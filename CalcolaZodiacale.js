let immaginesegno = '<img src="SEGNI/segni.jpg">';
document.getElementById("immagine").innerHTML = immaginesegno;

function calcolaSegnoZodiacale() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);

    let segnoZodiacale = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        segnoZodiacale = 'Ariete';
        let immaginesegno = '<img src="SEGNI/Ariete.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        segnoZodiacale = 'Toro';
        let immaginesegno = '<img src="SEGNI/Toro.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        segnoZodiacale = 'Gemelli';
        let immaginesegno = '<img src="SEGNI/Gemelli.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        segnoZodiacale = 'Cancro';
        let immaginesegno = '<img src="SEGNI/Cancro.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        segnoZodiacale = 'Leone';
        let immaginesegno = '<img src="SEGNI/leone.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        segnoZodiacale = 'Vergine';
        let immaginesegno = '<img src="SEGNI/Vergine.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        segnoZodiacale = 'Bilancia';
        let immaginesegno = '<img src="SEGNI/Bilancia.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        segnoZodiacale = 'Scorpione';
        let immaginesegno = '<img src="SEGNI/Scorpione.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        segnoZodiacale = 'Sagittario';
        let immaginesegno = '<img src="SEGNI/Sagitario.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        segnoZodiacale = 'Capricorno';
        let immaginesegno = '<img src="SEGNI/Capricorno.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        segnoZodiacale = 'Acquario';
        let immaginesegno = '<img src="SEGNI/Acquario.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    } else {
        segnoZodiacale = 'Pesci';
        let immaginesegno = '<img src="SEGNI/Pesci.jpg">';
        document.getElementById("immagine").innerHTML = immaginesegno;
    }

    document.getElementById('output').innerText = `Il tuo segno zodiacale è ${segnoZodiacale}.`;
}