export function convertColorToRGBA(colorString, opacity = 1) {
    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i;

    let red, green, blue, alpha;

    const hexMatch = colorString.match(hexRegex);
    if (hexMatch) {
        red = parseInt(hexMatch[1], 16);
        green = parseInt(hexMatch[2], 16);
        blue = parseInt(hexMatch[3], 16);
        alpha = opacity;
    }

    const rgbMatch = colorString.match(rgbRegex);
    if (rgbMatch) {
        red = parseInt(rgbMatch[1]);
        green = parseInt(rgbMatch[2]);
        blue = parseInt(rgbMatch[3]);
        alpha = opacity;
    }

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}


export function parseDateString(dateString) {

    const dateComponents = dateString.split("-");

    const day = parseInt(dateComponents[2]);
    const month = parseInt(dateComponents[1]);
    const year = parseInt(dateComponents[0]);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return {
        day: day,
        month: month,
        year: year,
        monthName: monthNames[month],
    };
}

export function formatNumber(number) {
    let numberAsString = String(number);

    if (numberAsString.includes('.')) {
        let [integerPart, decimalPart] = numberAsString.split('.');

        if (decimalPart.length === 1) {
            decimalPart += '0';

            numberAsString = `${integerPart}.${decimalPart}`;
        }
    }
    return numberAsString;
}

export function truncateStringToWords(str, maxWords = 10) {

    const words = str.split(' ');

    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ');
    }

    return str;
}
