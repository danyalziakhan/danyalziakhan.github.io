---
layout: default
title: Functions (a.k.a Subroutines) - Static Methods and Static Classes in C# and Java
---

# Functions (a.k.a Subroutines) - Static Methods and Static Classes in C# and Java

**Note:** This tutorial is part of a beginner series on Object Oriented Programming (OOP). It assumes that readers understand data types, variables, conditions, loops, and know how to properly write and run a “hello world” program.

**Difficulty:** Beginner

A function is a way of packaging up code that does something, such as adding two numbers and then returning the value, or writing your funny name to the console. Through functions, you can separate commonly used tasks into different parts which can be called wherever a programmer needs them, instead of forcing you to duplicate the same code throughout the program (which you won’t like, trust me).

In OOP languages such as C# or Java, functions are implemented as static methods; that is, they are declared within a class, unlike C/C++ and some other languages where the functions exist by themselves. In OOP, they are part of an object and are defined in a class (or in a struct) and every executed instruction is performed in the context of a method. So, for example, when we called `Console.WriteLine()` in C#, we were actually calling a function (available to the assembly of C#) that simply writes something to the console.

In this tutorial, I will teach you how you can implement functions in C# and Java to make your programming life more joyful!

---

## Static Methods

As I said earlier, in OOP languages, we define functions as static methods. They are those methods which do not change the state of a class (thus they are called “static”). It makes sense that functions are implemented as static methods, because in functions we are interested in executing some arbitrary logic and we are not interested in changing the object’s state.

The syntax for defining a static method in a class is the same for both C# and Java. It is as follows:

```csharp
<access modifier> static <data type> <function name>(<parameters, if any>)
{
    // Implementation of a function
}
```

Considering this syntax, we can easily define our function. Let’s define a function for adding two numbers:

```csharp
public static int add(int a, int b)
{
    return a + b;
}
```

You can see that it’s simple to define a function, but then the task that our function does is simple as well. Let’s define another function for calculating factorial:

```csharp
public static int factorial(int n)
{
    if (n < 2) {
        return 1;
    }

    return n * factorial(n - 1);
}
```

We can use our functions in a program as follows:

**C#**

```csharp
class StaticMethod
{
    public static int add(int a, int b)
    {
        return a + b;
    }

    public static int factorial(int n)
    {
        if (n < 2) {
            return 1;
        }

        return n * factorial(n - 1);
    }

    public static void Main()
    {
        Console.WriteLine(add(4, 4)); // prints ‘8’
        Console.WriteLine(factorial(4)); // prints ‘24’
    }
}
```

**Java**

```java
class StaticMethod {
    public static int add(int a, int b) {
        return a + b;
    }

    public static int factorial(int n) {
        if (n < 2) {
            return 1;
        }

        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(add(4, 4)); // prints ‘8’
        System.out.println(factorial(4)); // prints ‘24’
    }
}
```

---

## Static Classes

Static classes are those classes for which only one instance is available to a program. These classes do not need to be instantiated. It is a useful feature in cases where you know that an instance of a class does not need to be passed to other classes, but can be easily used without instantiating. A static class is a class which can only contain static members, and therefore cannot be instantiated. One of its examples is `GameSettings` for storing different settings in a game.

We can define such a class as follows:

```csharp
class GameSettings
{
    public static bool soundOn = true;
    public static bool musicOn = true;
    public static void run()
    {
        Console.WriteLine("Running..."); // Or System.out.println("Running..."); in Java
    }
}
```

The following is the syntax for using a static method in a class:

```csharp
<class name>.<static method name>;
```

Now we can use our static class in a program as follows:

**C#**

```csharp
class StaticClass
{
    public static bool isMusicOn()
    {
        return GameSettings.musicOn;
    }

    public static void Main()
    {
        GameSettings.soundOn = false;
        GameSettings.musicOn = false;
        GameSettings.run();

        Console.WriteLine(isMusicOn()); // prints 'false’
    }
}
```

**Java**

```java
class StaticClass {
    public static boolean isMusicOn() {
        return GameSettings.musicOn;
    }

    public static void main(String[] args) {
        GameSettings.soundOn = false;
        GameSettings.musicOn = false;
        GameSettings.run();

        System.out.println(isMusicOn()); // prints 'false’
    }
}
```

Note that you cannot use non static members in static methods.

As you can see, a static class can be used as a convenient container for sets of methods that only run on input parameters and do not modify the state of an object. In the .NET Framework Class Library, the static [Math](http://msdn.microsoft.com/en-us/library/system.math.aspx) class contains methods that perform mathematical operations like `cos`, `sin`, etc., without any requirement to store or retrieve data that is unique to a particular instance of the class. Thus, they do not need instantiation.

Functions are best suited for simple tasks, especially when some task is duplicated several times in your program. Hence, you can simply create a static method in a class and call it whenever you need it. In which cases are you going to use functions?
