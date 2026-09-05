---
layout: default
title: Classes in OOP (C# and Java)
---

# Classes in OOP (C# and Java)

**Note:** This tutorial is part of a beginner series on Object Oriented Programming (OOP). It assumes that readers understand data types, variables, conditions, loops, and know how to properly write and run a “hello world” program.

**Difficulty:** Beginner

In Object Oriented Programming (OOP), the class is the most important concept, especially in languages like C# and Java. You first create a class as a simple plan or blueprint, then use that plan to make many objects that share the same type of data and actions.

Class is a way to store the properties and attributes of any object in a user-defined type, such as a car, dog, or person. In OOP, we work with different objects and focus on the data rather than just the logic. We care about what the data holds. An object that is used in OOP is an instance of a class and must be created from that class.

Classes also help with data encapsulation, which means they can hide certain details from the user. The object that comes from a class not only contains logic but also keeps its own state, so it can be changed or used by other objects.

In this tutorial, I will teach you the fundamental feature of OOP: classes, along with their uses and syntax.

The syntax for declaring a class is the same in both Java and C#. You write the keyword **class**, then a class name that clearly describes the object, followed by opening and closing braces:

```csharp
class ClassName
{
}
```

A class is not useful without data, because it is meant to hold information and actions. It can contain **members** (variables that store the class’s data) and **methods** (functions that work with that data). Here is the basic way to define them inside a class:

```csharp
class ClassName
{
    <access modifier> <data type> <memberName>;
    <access modifier> <return type> <methodName>(<parameters, if any>)
    {
        // method body
    }
}
```

Where:

- **access modifier**: a keyword that controls the visibility of a member or method (public, private, protected)
- **return type**: the type of value a method gives back (e.g., int, string, void)
- **member name**: the variable name you choose for the data inside the class

For example, if we want to create a class for our cool character **SuperMario** (any old gamers out there?), we can write it like this:

```csharp
class SuperMario
{
    public void Run() // The character can run
    {
        Console.WriteLine("Mario Runs!");
    }

    public void Jump() // The character can jump
    {
        Console.WriteLine("Mario Jumps!");
    }

    public string GetState() // Returns the current state
    {
        return state;
    }

    public void SetState(string s) // Updates the current state
    {
        state = s;
    }

    private string state; // Stores Mario's state
}
```

Here you can see that we defined the properties and actions of the Mario character in the **SuperMario** class. You can add as many members or methods as you like, there is practically no limit (though if your computer is as old as Mario, adding too much might gobble up its memory!). Similarly, we can define other classes too:

```csharp
class Mushroom
{
    public string color;
}

class Coin
{
    public int collected;
}
```

### Public, Private, and Protected

What are these three P’s?

They are access modifiers that tell the compiler whether a member or method of a class can be used only inside that class or also from other classes.

- **public**: the member or method can be used from anywhere, even by other classes
- **private**: it can be used only inside the same class
- **protected**: it can be used inside the same class and in any class that inherits from it

Protected is a little tricky because it involves inheritance, which I will cover in a later tutorial.

**Note**: C# also has another access modifier called **internal**, which limits access to the current assembly (think of it as the current project).

### Creating an Instance of a Class

Remember when I said you need to create an instance of a class to use it? Here’s the simple formula:

```csharp
<class name> <object name> = new <class name>();
```

Using this, we can create and use our Mario in the program:

```csharp
class MyAwesomeMarioGame
{
    public static void Main()
    {
        SuperMario mario = new SuperMario();
        mario.Jump(); // make our hero jump!
        mario.Run();  // make him run from the bad guys!

        mario.SetState("Bigger");
        Console.WriteLine(mario.GetState());

        // mario.state = "Bigger";
        // this gives an error because 'state' is private
        // and can only be used inside the SuperMario class

        Mushroom mushroom = new Mushroom();
        mushroom.color = "Green";

        Coin coin = new Coin();
        coin.collected = 50;
    }
}
```

We could also declare **state** as protected, but since there’s no inheritance in this program, the result is the same, which means you still can’t access it in **Main**. I’ll show how protected works when we cover inheritance later.

See how simple it is to use classes? That’s it for now. If you have a question or think I missed something, feel free to reach out to me directly.

Note: Running this program will not magically let you play Super Mario on your computer. There are other, more fun ways to do that…
