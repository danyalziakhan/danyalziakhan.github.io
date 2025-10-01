---
layout: default
title: Operator Overloading - Its Usefulness and Misuses
---

# Operator Overloading - Its Usefulness and Misuses

**Note:** This tutorial assumes that you have read my previous beginning tutorials and that you at least know how to create an instance of a class.

**Difficulty:** Intermediate

Operator overloading is a great feature of C# that acts as syntactic sugar in the code and eases the use of libraries in your programs. This feature is not present in Java, which makes C# appealing to many programmers including myself. Through it, you can create your own user defined operator implementation of available operators for your own classes and structs. This feature is particularly useful if you are creating a library as it will make your library easier to use for others.

In this tutorial, I will teach you its usefulness, misuses, and how you can implement them in C#.

---

## Which Operators Can Be Overloaded?

MSDN provides a complete list of operators that can be overloaded. In short: unary operators (`+` as in `i++` etc.), binary operators (`+` as in `obj1 + obj2` etc.), comparison operators (`>`, `<` etc.), and conversion operators can be overloaded.

---

## Usefulness of Operator Overloading

Suppose you have a class called `Vector3f` for storing three floats (x, y, and z) corresponding to mathematical vectors used for the operations on three dimensional vectors, commonly found in graphics libraries. We need different methods to operate on them: add, subtract, multiply, and divide. You can create such a class with methods as follows:

```csharp
class Vector3f
{
    public float x, y, z;
    public void Add(Vector3f vec)
    {
        x += vec.x;
        y += vec.y;
        z += vec.z;
    }

    public void Sub(Vector3f vec)
    {
        x -= vec.x;
        y -= vec.y;
        z -= vec.z;
    }

    public void Mul(Vector3f vec)
    {
        x *= vec.x;
        y *= vec.y;
        z *= vec.z;
    }

    public void Div(Vector3f vec)
    {
        x /= vec.x;
        y /= vec.y;
        z /= vec.z;
    }
}
```

Now, we can use this class in our program and operate on the objects as follows:

```csharp
class Operator
{
    public static void Main()
    {
        Vector3f vec1 = new Vector3f(2,2,2);
        Vector3f vec2 = new Vector3f(2,2,2);
        vec1.Add(vec2);
        Console.WriteLine (vec1.x); // 4
        Console.WriteLine (vec1.y); // 4
        Console.WriteLine (vec1.z); // 4

        vec1.Sub(vec2);
        vec1.Mul(vec2);
        vec1.Div(vec2);
    }
}
```

Wouldn’t it be better to simply perform operations on them like `vec1 + vec2` just like `2 + 3`? Operator overloading reduces the need to explicitly call methods for such trivial tasks.

```csharp
class Vector3f
{
    public float x, y, z;
    public Vector3f(float x, float y, float z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public static Vector3f operator+ (Vector3f vec1, Vector3f vec2)
    {
        return new Vector3f (vec1.x + vec2.x, vec1.y + vec2.y, vec1.z + vec2.z);
    }

    public static Vector3f operator- (Vector3f vec1, Vector3f vec2)
    {
        return new Vector3f (vec1.x - vec2.x, vec1.y - vec2.y, vec1.z - vec2.z);
    }

    public static Vector3f operator* (Vector3f vec1, Vector3f vec2)
    {
        return new Vector3f (vec1.x * vec2.x, vec1.y * vec2.y, vec1.z * vec2.z);
    }

    public static Vector3f operator/ (Vector3f vec1, Vector3f vec2)
    {
        return new Vector3f (vec1.x / vec2.x, vec1.y / vec2.y, vec1.z / vec2.z);
    }
}
```

Now we can simply use them in our program as follows:

```csharp
using System;

class Operator
{
    public static void Main()
    {
        var vec1 = new Vector3f (5.5f, 5.5f, 5.5f);
        var vec2 = new Vector3f (9.8f, 9.8f, 9.8f);

        var vec3 = vec1 + vec2;
        Console.WriteLine (vec3.x); // 15.3
        Console.WriteLine (vec3.y); // 15.3
        Console.WriteLine (vec3.z); // 15.3

        vec3 += vec1;
    }
}
```

Any operator that can be overloaded can be defined in a class like this:

```csharp
public static <return type> operator <operator>(<parameters>)
{
    // implementation
}
```

Example:

```csharp
public static bool operator == (Vector3f vec1, Vector3f vec2)
{
    return vec1.x == vec2.x && vec1.y == vec2.y && vec1.z == vec2.z;
}

public static bool operator != (Vector3f vec1, Vector3f vec2)
{
    return vec1.x != vec2.x && vec1.y != vec2.y && vec1.z != vec2.z;
}

public static Vector3f operator ++ (Vector3f vec)
{
    return new Vector3f(vec.x + 1, vec.y + 1, vec.z + 1);
}

public static Vector3f operator -- (Vector3f vec)
{
    return new Vector3f(vec.x - 1, vec.y - 1, vec.z - 1);
}
```

Usage:

```csharp
using System;

class Operator
{
    public static void Main()
    {
        var vec1 = new Vector3f(2,2,2);
        var vec2 = new Vector3f(4,4,4);

        var vec3 = vec1;
        if (vec3 == vec1)
        {
            Console.WriteLine("Vectors are equal");
        }

        if (vec1 != vec2)
        {
            Console.WriteLine("Vectors are not equal");
        }

        vec1++;
        vec2--;
    }
}
```

---

## Misuses of Operator Overloading

As it eases the use of libraries, some people use operator overloading in places where there is ambiguity in its meaning. You should only overload operators on logical types where its meaning is obvious.

```csharp
class ArrayHolder
{
    public int[] array;
    public ArrayHolder(int[] a)
    {
        array = a;
    }

    public static ArrayHolder operator +(ArrayHolder a, int b)
    {
        var temp = a.array;
        foreach (var i in temp) {
            temp [i] = b;
        }

        return new ArrayHolder(temp);
    }
}
```

In this case, the overloaded `+` operator adds an integer to all elements of an array. The issue is that the programmer does not know which number is being added, making it ambiguous.

To make code less ambiguous, provide equivalent methods alongside overloaded operators. For example, if a user does not understand your operators, they can use the methods instead.

You should also overload operators symmetrically. For example, if you overload `+` and `-`, you should also overload `*` and `/`. If you overload equality `==`, you should also overload inequality `!=`.

Overall, operator overloading is a very useful feature if used properly where its meaning makes sense, such as logical numbers, vector like structures (quaternions, matrices), etc. It should be used in places where operations on objects are obvious.

---

Will you be willing to use this feature in your library? Or would you just prefer to use methods for consistency with Java code?

---

References:  
[Wikipedia: Operator Overloading](http://en.wikipedia.org/wiki/Operator_overloading)  
[MSDN: Operator Overloading](http://msdn.microsoft.com/en-us/library/8edha89s.aspx)  
[MSDN: Conversion Operators](http://msdn.microsoft.com/en-us/library/2sk3x8a7%28v=vs.71%29.aspx)
