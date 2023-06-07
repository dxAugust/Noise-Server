module.exports = {
    Reset:"\x1b[0m",
    Bright:"\x1b[1m",
    Dim:"\x1b[2m",
    Underscore:"\x1b[4m",
    Blink:"\x1b[5m",
    Reverse:"\x1b[7m",
    Hidden:"\x1b[8m",

    FgBlack:"\x1b[30m",
    FgRed:"\x1b[31m",
    FgGreen:"\x1b[32m",
    FgYellow:"\x1b[33m",
    FgBlue:"\x1b[34m",
    FgMagenta:"\x1b[35m",
    FgCyan:"\x1b[36m",
    FgWhite:"\x1b[37m",
    FgGray:"\x1b[90m",

    BgBlack:"\x1b[40m",
    BgRed:"\x1b[41m",
    BgGreen:"\x1b[42m",
    BgYellow:"\x1b[43m",
    BgBlue:"\x1b[44m",
    BgMagenta:"\x1b[45m",
    BgCyan:"\x1b[46m",
    BgWhite:"\x1b[47m",
    BgGray:"\x1b[100m",
};   

/** 
 * Prints a colored message in server console
 * @param {String} message Message to show
 * @param {color} foregroundColor Foreground color
 * @param {color} backGroundColor Background color
*/
let printColoredMessage = function() { 
    let message = arguments[0];
    let foregroundColor = arguments[1];
    let backgroundColor = arguments[2];

    console.log(foregroundColor
        + backgroundColor
        + message
        + "\x1b[0m");
};

let logMessage = function(tag, message, type)
{
    if (type === 0) { // Info message
        console.log(`${customConsole.BgGray + customConsole.FgWhite}${tag}${customConsole.BgBlack + customConsole.FgGray} ${message}`);
    } else if (type === 1) { // Success message
        console.log(`${customConsole.BgGreen + customConsole.FgWhite}${tag}${customConsole.BgBlack + customConsole.FgGreen} ${message}`);
    } else if (type === 2) { // Warn message
        console.log(`${customConsole.BgYellow + customConsole.FgWhite}${tag}${customConsole.BgBlack + customConsole.FgYellow} ${message}`);
    } else if (type === 3) { // Error message
        console.log(`${customConsole.BgRed + customConsole.FgWhite}${tag}${customConsole.BgBlack + customConsole.FgRed} ${message}`);
    }
}

module.exports.printColoredMessage = printColoredMessage;
module.exports.logMessage = logMessage;