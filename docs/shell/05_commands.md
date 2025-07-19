---
title: Some Commands
sidebar_position: 6
---

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