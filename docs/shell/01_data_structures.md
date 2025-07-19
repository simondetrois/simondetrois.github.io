---
title: Data Structures
sidebar_position: 2
---

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

> Associative Arrays (Key-Value Maps) - Bash 4.0+ is required

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