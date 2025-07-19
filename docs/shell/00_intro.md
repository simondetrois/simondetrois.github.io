# Bash HowTo's

## Colorful outputs
- Is done with using ANSI escape codes for colored output
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

## Data Structures

- Scalar variables
- Indexed arrays
- Associative arrays (hash maps)
- Strings and manipulations
- Related tricks using parameter expansion and built-ins

> Scalar Variables (Single Values)

- Scalar variables hold single strings or numbers.
- Assignment: `var=value` (no spaces)
- Access: ` $var or ${var}`

```bash
name="Alice"
age=30
```

> Indexed Arrays (zero-based ordered lists)
```bash
fruits=("apple" "banana" "cherry")

echo "${fruits[1]}" # Access element -> banana
fruits+=("date") # Add element
fruits[0]="avocado" # Modify element
echo "${#fruits[@]}" # Get number of elements -> 4
echo "${fruits[@]}" # List all elements

# Looping: Use [@] to preserve spacing and quotes. ${fruits[*]} merges all items as one word if not quoted properly
for fruit in "${fruits[@]}"; do
  echo "$fruit"
done

```

> Associative Arrays (Key-Value Maps)

> 🧠 Bash 4.0+ is required for associative arrays.

```bash
declare -A colors
colors[apple]="red"
colors[banana]="yellow"

# Access & Loop:

echo "${colors[apple]}"          # red
echo "${!colors[@]}"             # keys
echo "${colors[@]}"              # values

for key in "${!colors[@]}"; do
  echo "$key: ${colors[$key]}"
done
```

> Strings and Substring Manipulation

```bash
text="hello world"

# Common Operations:

echo "${#text}"                  # Length: 11
echo "${text:0:5}"               # Substring: hello
echo "${text/world/universe}"    # Replace first: hello universe
echo "${text//l/X}"              # Replace all: heXXo worXd
echo "${text% world}"            # Remove suffix: hello
echo "${text#hello }"            # Remove prefix: world
```

---

> Parameter Expansion Tricks

```bash
name="Alice"
file="path/to/file.txt"
```

| Syntax                         | Description                                | Example                              |
|-------------------------------|--------------------------------------------|--------------------------------------|
| `${var:-default}`             | Use default if var is unset or empty       | `${username:-guest}`                |
| `${#var}`                     | Length of var                              | `${#text}`                          |
| `${var:offset:length}`        | Substring                                  | `${text:0:4}` → `hell`              |
| `${var#pattern}`              | Remove shortest match from start (prefix)  | `${file#*/}` → `to/file.txt`        |
| `${var##pattern}`             | Remove longest match from start            | `${file##*/}` → `file.txt`          |
| `${var%pattern}`              | Remove shortest match from end (suffix)    | `${file%.txt}` → `path/to/file`     |
| `${var%%pattern}`             | Remove longest match from end              |                                      |
| `${var/pattern/replacement}`  | Replace first match                        | `${text/l/X}` → `heXlo world`       |
| `${var//pattern/replacement}` | Replace all matches                        | `${text//o/0}` → `hell0 w0rld`      |

---

> Built-in Tools for Data Manipulation

- `read -a` (Split input into array)

```bash
read -a words <<< "one two three"
echo "${words[2]}"       # three
```

- `mapfile` / `readarray` (Read lines into array)

```bash
mapfile -t lines < myfile.txt
echo "${lines[0]}"
```

- Internal Field Separator (IFS)

```bash
IFS="," read -ra items <<< "apple,banana,cherry"
```

- Simulated 2D Arrays

Bash doesn't support multi-dimensional arrays natively. Simulate with compound keys:

```bash
matrix[0,0]="a"
matrix[0,1]="b"
matrix[1,0]="c"
matrix[1,1]="d"

echo "${matrix[1,0]}" # ->  c
```

## Functions

> There are two valid syntaxes:

```bash
# Syntax 1 - POSIX compliant (works guaranteed on UNIX like OS)
my_function() {
  echo "Hello from my_function"
}

# Syntax 2 - Bash specific
function my_function {
  echo "Hello from my_function"
}
```

Once defined, call a function just like a command: `my_function`  

> Also **parameters** can be handed over to that function:

```bash
greet_user() {
  echo "Hello, $1!"
}

greet_user "Alice"  # Output: Hello, Alice!
```

Paramters can accessed with different variants inside a function:

|Expression|Description|
|-|-|
| `$1`       | First argument                    |
| `$2`       | Second argument                   |
| `$@`       | All arguments (as separate words) |
| `$*`       | All arguments (as a single word)  |
| `$#`       | Number of arguments passed        |

> Function **return** values:

Functions can return exit codes (0–255), but not strings. Use echo or global variables to return strings.

```bash
get_current_user() {
  local currentUser="$(whoami)" # use local for function scope
  echo "${currentUser}"
}

user=$(get_current_user)
echo "Current user: $user"
```

## Control Structures
### if - check
Basic Syntax:

```bash
if [[ (...) ]]; then
  (...)
elif [[ (...) ]]; then
  (...)
else 
  (...)
fi
```

String Tests:

```bash 
if [[ -z $1 ]]; then          # String is empty/null
if [[ -n $1 ]]; then          # String is not empty
if [[ $1 == "value" ]]; then  # String equals
if [[ $1 != "value" ]]; then  # String not equals
if [[ $1 =~ ^[0-9]+$ ]]; then # String matches regex (numbers only)
```

File Tests:

```
if [[ -f $file ]]; then       # File exists and is regular file
if [[ -d $dir ]]; then        # Directory exists
if [[ -e $path ]]; then       # Path exists (file or directory)
if [[ -r $file ]]; then       # File is readable
if [[ -w $file ]]; then       # File is writable
if [[ -x $file ]]; then       # File is executable
```

Numeric Tests:

```bash 
if [[ $num -eq 5 ]]; then     # Equal
if [[ $num -ne 5 ]]; then     # Not equal
if [[ $num -gt 5 ]]; then     # Greater than
if [[ $num -lt 5 ]]; then     # Less than
if [[ $num -ge 5 ]]; then     # Greater or equal
if [[ $num -le 5 ]]; then     # Less or equal
```

Logical Operators:

```bash 
if [[ $1 == "a" && $2 == "b" ]]; then  # AND
if [[ $1 == "a" || $1 == "b" ]]; then  # OR
if [[ ! -f $file ]];
```

## Variables

### Indirect variable Expansion

If you want to store the name of a variable in another variable, you can use indirect variable expansion. Here is how it works:
```bash
YELLOW="33"
RED="31"
color="YELLOW"

echo ${color}     # Outputs: YELLOW
echo ${!color}    # Outputs: 33 (value of $YELLOW)
```

## Commands used
- `$0`:
  - When you run a script, $0 contains the path or filename used to invoke that script 
  - When you're in an interactive shell session (like your terminal prompt), $0 usually contains the name of the shell
  ```bash
  #!/bin/bash
  echo "This script is called: $0"
  ```
  Entries in the Terminal and output:

  `./myscript.sh` -> output -> ./myscript.sh. 

  `bash ./myscript.sh` -> output -> bash

  `$0` -> output -> zsh

- `dirname`: Prints the dir name of a file (=~ parent dir)
- `<command> & disown` -> runs task in background and disowns it from terminal session
