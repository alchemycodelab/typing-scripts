// simple formating based on user's browser locale
function simpleFormatAsCurrency(number) {
    return '$' + Number(number).toLocaleString();
}

// extended formating options
function formatAsCurrency(number) {
    return Number(number).toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0 
    });
}
