---
layout: default
title: Properties in C# - Syntax and Usefulness
---

# Properties in C# - Syntax and Usefulness

**Note:** This tutorial is part of a beginner series on Object Oriented Programming (OOP). It assumes that readers understand data types, variables, conditions, loops, and know how to properly write and run a “hello world” program.

**Difficulty:** Beginner

Properties are a simple and yet useful feature of the C# programming language. They enable a programmer to use member syntax for setters and getters. Through them, you can read, write, or compute the value of a private field very flexibly. If you have used C++ or Java in the past, then you most likely have seen methods for reading and writing member variables in a class, such as `setLength(int length)` and `getLength()` for setting the length and getting the length respectively. In C#, they are actually special methods called accessors.

In this tutorial, I will teach you how you can use properties in C#, and I will show you cases where they are very useful.

---

## Syntax

The following is the simple syntax for defining properties in a class:

```csharp
public <return type> <name>
{
    get { } // for getter
    set { } // for setter
}
```

Using the properties in a class is as easy as follows:

```csharp
class Rect
{
    private int _length;
    public int length
    {
        get { return _length; }
        set { _length = value; } // here ‘value’ represents any data of the same type assigned to ‘length’
    }
}
```

Now, we can easily use our class in a program:

```csharp
class Properties
{
    public static void Main()
    {
        Rect rect = new Rect();
        rect.length = 20; // set length to 20
        System.Console.WriteLine(rect.length); // get the length
    }
}
```

As you can see, it is very easy to use this feature in C#. Now, the question that might arise in your mind is: What good does this feature do for us (except the fact that “\_length” is renamed to “length” in use)?

---

## Usefulness

The places where properties come in handy are those where you need to implement member syntax for getting/setting data from an array or struct. Without properties, you would have to resort to implementing setter and getter methods.

For instance, suppose we have the following class `Vector3f` for holding three members: x, y, z.

```csharp
class Vector3f
{
    public float x, y, z;
}
```

But you may prefer to store the values of a vector in an array instead (probably because you want to perform specialized operations internally that can be done only on arrays, such as SIMD operations for efficiency). Without properties, the class would look like this:

```csharp
class Vector3f
{
    public float[] vec = new float[3];
    public float GetX()
    {
        return vec[0];
    }

    public float GetY()
    {
        return vec[1];
    }

    public float GetZ()
    {
        return vec[2];
    }
}
```

With properties, you can simply implement the setters and getters for x, y, and z as properties:

```csharp
class Vector3f
{
    public float[] vec = new float[3];

    public float x
    {
        get { return vec[0]; }
        set { vec[0] = value; }
    }

    public float y
    {
        get { return vec[1]; }
        set { vec[1] = value; }
    }

    public float z
    {
        get { return vec[2]; }
        set { vec[2] = value; }
    }
}
```

Now you can use the class in a program:

```csharp
class Properties
{
    public static void Main()
    {
        Vector3f vec = new Vector3f();

        vec.x = 20.1f;
        vec.y = 40.2f;
        vec.z = 10.5f;

        Console.WriteLine(vec.x);
        Console.WriteLine(vec.y);
        Console.WriteLine(vec.z);
    }
}
```

Another very useful case of properties is when you want to implement some logic in a setter/getter, yet you want to use the property as if you are accessing a variable instead. The [MSDN documentation](http://msdn.microsoft.com/en-us/library/x9fsa0sw.aspx) provides a great example of a class `TimePeriod` which stores a time period in seconds, but a property named `Hours` specifies a time in hours and performs the conversion between hours and seconds.

```csharp
class TimePeriod
{
    private double seconds;
    public double Hours
    {
        get { return seconds / 3600; }
        set { seconds = value * 3600; }
    }
}
```

Properties can also be used to make some variables read only. For instance, arrays in C# have a property `Length` (for giving the length of an array) that can only be read.

I find properties to be one of the “killer” features of C#, because they make libraries easier to use and develop. This feature makes me want to use C# for developing libraries, because no other statically typed language supports this feature (though D also has properties, but that language is fringe). What is your opinion on this feature?
