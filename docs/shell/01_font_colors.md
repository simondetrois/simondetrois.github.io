## Font Colors

For colorful output, ANSI escape codes are used. More on formatting texts in shell scripts can be found e.g. [here](https://www.baeldung.com/linux/formatting-text-in-terminals)

```bash
# Escape character in octal (code 27 in decimal), interpreted as \27 -> ESC (ASCII). 
LOGGER_ESC="\033" 
# Begins ANSI control sequence -> special string of characters that the terminal interprets as a command to change how text is displayed (e.g. color, style)
LOGGER_START_ANSI_SEQUENCE="["
# m is the SGR command -> tells the terminal to change the text formatting
LOGGER_SGR="m"
# Codes (examples)
RESET="0"
BOLD="1"
RED="31"
# How it looks like in the end
echo -e "\033[31;1m[ERROR]\033[0m"

```