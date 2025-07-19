---
title: Go Data Types Overview
---

Go provides several built-in and user-defined types. Here's a quick overview:

## Basic Types
| Type                        | Description                 | Example         |
|-----------------------------|-----------------------------|-----------------|
| `bool`                      | Boolean true/false          | `true`, `false` |
| `string`                    | UTF-8 encoded text          | `"hello"`       |
| `int`                       | Platform-dependent integer  | `42`            |
| `int8`, `int16`, `int32`, `int64` | Signed integers      | `int32(100)`    |
| `uint`, `uint8`, `uint16`, `uint32`, `uint64` | Unsigned integers | `uint8(255)` |
| `byte`                      | Alias for `uint8`           | `byte('A')`     |
| `rune`                      | Alias for `int32`, Unicode char | `rune('世')` |
| `float32`, `float64`        | Floating point numbers      | `3.14`          |
| `complex64`, `complex128`   | Complex numbers             | `1 + 2i`        |

## Composite Types
**Array** — Fixed-size list of elements of the same type.
```go
var a [3]int = [3]int{1, 2, 3}
````

**Slice** — Dynamic-size array-like structure.

```go
s := []string{"a", "b", "c"}
```

**Map** — Key-value pairs (hash table).

```go
m := map[string]int{"a": 1, "b": 2}
```

**Struct** — User-defined composite type.

```go
type Expense struct {
    Title  string
    Amount float64
}
```

**Pointer** — Stores the address of a value.

```go
var x int = 10
var p *int = &x
```

## Function Type

Functions are first-class citizens and can be stored in variables.

```go
func add(a int, b int) int {
    return a + b
}
```

## Interface

Defines behavior through method sets.

```go
type Stringer interface {
    String() string
}
```

## Custom Types

You can create your own types based on existing ones:

```go
type Currency string
```

## Zero Values

All types have a default zero value:

* `int` → `0`
* `bool` → `false`
* `string` → `""`
* Pointers, slices, maps, interfaces → `nil`

```

Just copy **all of this exactly as is**, no added spaces or breaks anywhere. This is one uninterrupted markdown text.

If you want I can also provide it as a plain text file for download. Does this meet your expectation?
```
