---
title: Control Structures
sidebar_position: 4
---

## if - check
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