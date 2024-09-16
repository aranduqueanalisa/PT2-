function convertMe() {
    const yards = document.getElementById('yardsInput').value;
    if (yards) {
        const meters = (yards * 100.30).toFixed(2); 
        document.getElementById('metersOutput').value = meters + ' meters';
    }
}
document.getElementById('convertButton').addEventListener('click', convertMe);

