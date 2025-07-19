---
title: Functions
sidebar_position: 3
---

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