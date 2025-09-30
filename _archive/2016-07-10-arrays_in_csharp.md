---
layout: default
title: Arrays in C# - Static and Dynamic Arrays, Syntax and Usefulness
---

# Arrays in C# - Static and Dynamic Arrays, Syntax and Usefulness

**Note:** This tutorial is part of a beginner series on Object Oriented Programming (OOP). It assumes that readers understand data types, variables, conditions, loops, and know how to properly write and run a “hello world” program.

**Difficulty:** Beginner

An array is one of those features that are commonly found in most programming languages. It is a way to store multiple values of the same data type in a single variable. With it, you do not need to redundantly create variables of the same data type.

Arrays in C# are zero indexed like in most languages such as C and C++. That is, the array indexes start at zero. In C#, arrays are objects just like everything else and must be instantiated after declaring them in order to use them in your program.

In this tutorial, I will teach you the syntax and usage of arrays in C#. Let’s get started!

---

## Declaring and Instantiating Arrays

The following is the syntax for declaring arrays:

```csharp
<data type>[] <variable name>;
```

For example, if we want to create two arrays, one for storing integers and one for storing strings, we can do so as follows:

```csharp
int[] numbers;
string[] students;
```

Note that they have not been created yet. You can create them as follows:

```csharp
int[] numbers = new int[10]; // creates an array of 10 integers
string[] students = new string[10]; // creates an array of 10 strings
```

You can see that the syntax for instantiating arrays is the same as the syntax for instantiating an object. Thus it is obvious that they are created and are objects just like other things in C#.

Now, for defining elements in an array, you can use the following syntax:

```csharp
numbers[0] = 20;
numbers[5] = 10;

students[0] = "Richard";
students[6] = "Jack";
```

As you can see, the first element in an array starts with index 0. That is, if an array is of size 10 (`new int[10]`), then you can write and read elements from 0 to 9. Using an index greater than the size of an array will throw an overflow error, so keep this in mind when you use arrays in your program.

Note that in C#, there is no distinction between static and dynamic arrays. The syntax for declaring them is the same. For increasing the size of an array, you can simply instantiate it again as follows:

```csharp
numbers = new int[20];
```

For retrieving the length of an array, you can use the property `Length` that is available on every array.

```csharp
Console.WriteLine(numbers.Length); // will print 20
```

For declaring and creating an array at the same time, you can use the following syntax:

```csharp
int[] numbers = {5, 50, 20, 3};
```

That will create an array of size equal to the number of elements present in the list.

Another interesting thing to note is that `foreach` loops can easily be used on arrays. For example:

```csharp
foreach (int i in numbers)
{
    System.Console.WriteLine(i);
}
```

---

## Single Dimensional Arrays, Multidimensional Arrays, and Array of Arrays (Jagged Arrays)

As we have seen previously, we can declare single dimensional arrays as follows:

```csharp
int[] numbers;
```

In C#, there are two more types of arrays: multidimensional arrays and array of arrays.

For declaring and creating multidimensional arrays we can use the following syntax:

```csharp
int[,] matrix = new int[5, 4];

matrix = new int[,] { {1, 2}, {3, 4}, {5, 6}, {7, 8}, {9, 10} };
```

You can access the members of this array as follows:

```csharp
matrix[1, 1] = 5; // changes the second element in the second row to 5
```

For declaring and creating an array of arrays we can use the following syntax:

```csharp
byte[][] scores = new byte[5][];

for (int x = 0; x < scores.Length; x++)
{
    scores[x] = new byte[4];
}
```

Now, you can access the members of this array as follows:

```csharp
scores[0][0] = 58;
```

---

## Usefulness

Arrays are commonly used in cases where you need to store the same types of data, but the number of items is large. Instead of defining multiple variables, you can store them in an array and retrieve them later from a single variable.

For instance, if you need to store the names of students, without arrays you would need to define variables for every student’s name. With arrays, you can simply store all the student names in an array of strings. This makes the program easier to read and manage.

However, when we need a collection of different data types, then we use a class or struct instead.

From trivial to complex programs, you can see the usage of arrays pretty much everywhere. Their usefulness cannot be dismissed, considering the fact that they are implemented in most programming languages we use.
