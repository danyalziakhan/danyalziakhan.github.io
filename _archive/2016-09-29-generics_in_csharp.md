---
layout: default
title: Generics in C# - Its Usage and How It Differs From C++ Templates and Java Generics
---

# Generics in C# - Its Usage and How It Differs From C++ Templates and Java Generics

**Note:** This tutorial assumes that you have read my previous tutorials, especially on operator overloading.

**Difficulty:** Intermediate

Generics allow a type or method to operate on objects of various types while providing compile time type safety. They can be used to achieve parametric polymorphism, a way to make a language more expressive while still maintaining full static type safety. Through generics, you can generically define a member or method in a class that is valid for all the related types, or you can pass any data type to a function whose parameter has any template. Templates are commonly considered as a compile time feature...

In this detailed tutorial, I will tell you how you can implement generics, the benefits of this programming model, and the difference between Java and C#. Let’s start the journey!

---

## How To Implement Generics

In my previous tutorial on operator overloading, I gave you the example of `Vector3f`. Let us continue from where we left. Suppose we want a class for holding three point vector values (x, y, and z) that is generic and accepts any data type including integer, float, and double. In order to do that, we would normally need to create different classes for different data types. Fortunately, through the generics feature, we can define only a single class with generic semantics that implements the same methods...

```csharp
class Vector3 <T>
{
    public T x, y, z;
    public Vector3(T x, T y, T z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
```

The formula to declare a generic class is as follows:

```csharp
<class name<data type>> <object name> = new <class name<data type>>();
```

Usage:

```csharp
using System;

class Generics
{
    public static void Main()
    {
        Vector3<int> veci = new Vector3<int>(20, 10, 5);
        Console.WriteLine(veci.x); // prints 20

        var vecf = new Vector3<float>(15.5f, 12.3f, 18.5f);
        Console.WriteLine(vecf.x); // prints 15.5

        var vecd = new Vector3<double>(18.50, 20.1, 25.3);
        Console.WriteLine(vecd.x); // prints 18.5
    }
}
```

As you can see, we can easily create an object of `Vector3` of any data type. This greatly reduces the need to create separate classes for different types. The above example is for a generic class. Note, however, that you cannot use operators on a generic data type, because at the time of compilation, a compiler doesn’t know whether those operations make sense. That is a limitation of generics in C#. However, you can nevertheless overload operators in a class if you are sure that a programmer will use on...

---

## Generic Method

Consider a simple method for printing what a programmer passed to a method. For printing different data types (int, float, string, etc.), you would normally need to define different methods of the same name (function overloading).

```csharp
static void PrintInput(int i)
{
    Console.WriteLine(i);
}

static void PrintInput(float i)
{
    Console.WriteLine(i);
}

static void PrintInput(string i)
{
    Console.WriteLine(i);
}
```

You can see that the implementation is the same for all the methods, but as C# is strongly typed, you cannot pass a double into the parameter for `int`, so we had to define different methods. Fortunately, through generics, you only need to define a single method.

```csharp
public static void PrintInput<T>(T i)
{
    Console.WriteLine(i);
}
```

---

## Generic Interface

An interface can be generic too. Consider the following example:

```csharp
interface IVector3<T>
{
    T GetX();
}

class Vector3f: IVector3<float>
{
    public float x, y, z;
    public float GetX()
    {
        return x;
    }
}

class Vector3i: IVector3<int>
{
    public int x, y, z;
    public int GetX()
    {
        return x;
    }
}
```

---

## How Generics Work

As I previously mentioned, generics are a compile time feature, meaning they work during compilation of a program. They transform the class, interface, or function that has a generic type into equivalent source code with specific classes, interfaces, or functions of data types that are used when creating an object.

```csharp
class Vector3<T>
{
    public T x, y, z;
}
```

During initialization of an object, the compiler transforms the above class into equivalent classes:

```csharp
class Vector3
{
    public int x, y, z;
}

class Vector3
{
    public float x, y, z;
}
```

Note that in C#, the types are substituted during compilation, so there may be a slight overhead.

---

## Difference From Java Generics

In Java, there is a concept of generics too, which, although similar in syntax, has a different implementation. Generics in Java provide compile time safety for type correctness but are partially considered a run time feature and are somewhat similar to inheritance polymorphism in practice. In Java, there is a process called type erasure, through which type information is removed during compilation and there is no way to tell what was the type of a generic when it was instantiated during run time. This i...

```java
class MyClass<T>
{
    public static void MyMethod(Object item)
    {
        if (item instanceof T) { // Compiler error
        }
    }
}
```

Because there is no way to tell during run time what the type of `T` was. As I said earlier, Java has type erasure, which actually has run time cost because behind the scenes Java’s compiler casts the type, something like the following:

```java
ArrayList<Vector3> foo = new ArrayList<Vector3>();
Vector3 vec = (Vector3)foo.get(1);
```

---

## Difference From C++ Templates

In C++, templates are a pure compile time feature, which greatly increases compilation speed. The resulting program is bigger in size as well due to the boilerplate code templates create during compilation. Templates in C++ are more powerful than C# and Java but are also more complex. It gives a terrible compilation speed during source code transformation. Both provide support for parameterized types. C++ provides substitutions of types during compile time. In C#, however, substitutions are performed at ...

```cpp
template<typename T>
class Vector3
{
public:
    T x, y, z;
};

int main()
{
    Vector3<int> vec; // define Vector3 of type int during compile time
    vec.x = 20;
}
```

In C#, you cannot call arithmetic operators on a generic type, though you can call user defined operators. In C++, the following code is valid:

```cpp
template<typename T>
class Vector3
{
public:
    T x, y, z;
    T getLength()
    {
        return sqrt(x * x + y * y + z * z); // * is valid here
    }
    Vector3<T>(T x, T y, T z)
    {
        this->x = x;
        this->y = y;
        this->z = z;
    }
};

int main()
{
    Vector3<float> vec(15.5, 12.0, 13.2);
    vec.getLength();
}
```

C# neither supports explicit specialization nor partial specialization, which makes generics less useful in some cases.

---

## Conclusion

Generics are one of the most useful features, especially in libraries. Their usefulness cannot be dismissed when creating a library for other programmers, considering the fact that they are implemented in collections in C#. I find it easier to achieve polymorphism through generics than through interfaces. What do you think?

---

References:  
[Wikipedia: Parametric Polymorphism](http://en.wikipedia.org/wiki/Parametric_polymorphism)  
[MSDN: Generics in .NET](http://msdn.microsoft.com/en-us/library/ms379564%28v=vs.80%29.aspx)  
[Wikipedia: Generics in Java](http://en.wikipedia.org/wiki/Generics_in_Java)  
[MSDN: C# Generics](http://msdn.microsoft.com/en-us/library/c6cyy67b.aspx)  
[Stack Overflow: Differences between C# and Java Generics](http://stackoverflow.com/questions/31693/what-are-the-differences-between-generics-in-c-sharp-and-java-and-templates-i)  
[MSDN: Generic Methods](http://msdn.microsoft.com/en-us/library/kwtft8ak.aspx)
