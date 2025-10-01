---
layout: default
title: Simulating Multiple Inheritance in C#
---

# Simulating Multiple Inheritance in C#

**Note:** This tutorial assumes that you have read my previous tutorials and that you understand the following concepts:

- Creating an instance of a class
- Public, private and protected methods
- Properties
- Inheritance
- Interface
- Polymorphism

**Difficulty:** Intermediate

C# (or Java) does not support multiple inheritance. Classes belong to the single rooted object hierarchy and can inherit from only one parent class. Interfaces, however, can be inherited multiple times by a class. The cited issue against supporting multiple inheritance is that it is quite hard to implement its design in practice, and in some cases it manifests as an anti design pattern and seems to cause the diamond problem (sometimes referred to as the deadly diamond of death). It mostly comes down to t...

I will first show you how multiple inheritance can cause ambiguity and then I will show you places where it can be used to reduce program complexity. Finally I will show you the possible ways (with pros and cons) to simulate it in C#. Let’s get started!

---

## Why C# Does Not Support Multiple Inheritance

Recall that multiple inheritance causes the diamond problem. It is actually an ambiguity that arises when two classes (let’s call them B and C) inherit from another class (let’s call it A) and a third class (let’s call it D) inherits from both B and C. If class A has a method that B or C override, but D does not override it, then it is unclear which version of the method D should inherit.

Suppose you have a class `Box` that has the attributes of both `Node` and `Transformable`. Both `Node` and `Transformable` define a method `SetPosition`, and both are inherited in `Drawable`. Now `Drawable` also implements `SetPosition` and is inherited by `Box`. When implementing `SetPosition`, there is an ambiguity about which version the object should call.

```csharp
class Node
{
    public void SetTexture(string texture) { }
    public void SetPosition() { }
}

class Transformable
{
    public void SetPosition() { }
}

class Drawable : Node, Transformable
{
    public void SetPosition() { }
}

class Box : Node, Transformable, Drawable
{
    public void SetTexture(string texture) { }
    public void SetPosition() // which class’s method does it implement?
    {
    }
}
```

In C++ the compiler would simply give an ambiguity error, and you would need to use virtual methods to solve the problem. In C#, the issue is solved by supporting multiple inheritance only for interfaces. Inheriting multiple interfaces does not cause the diamond problem because there can be only one implementation of a method. Thus the complexity of multiple inheritance is avoided.

---

## How To Simulate Multiple Inheritance in C#

There are several ways to simulate multiple inheritance in C#:

### Using Interfaces

Even though C# does not support inheriting from more than one parent class, it supports inheriting from multiple interfaces. Through interfaces, you can simulate multiple inheritance.

```csharp
interface Node
{
    public void SetTexture(string texture);
}

interface Transformable
{
    public void SetPosition();
}

interface Drawable
{
    public void SetPosition();
}

class Box : Node, Transformable, Drawable
{
    public void SetTexture(string texture) { }
    public void SetPosition() { }
}
```

Here you must implement the methods of `Node`, `Transformable`, and `Drawable` in every class, which can cause code duplication. To solve this issue, you can create an abstract class that implements the methods and then inherit that in your class.

```csharp
abstract class ImplNodeTransfDrawable
{
    public void SetTexture(string texture) { }
    public void SetPosition() { }
}

class Box : ImplNodeTransfDrawable
{
}
```

**Pros:**

- Easy to implement
- Recommended because multiple interfaces cannot cause the diamond problem

**Cons:**

- Can lead to code duplication

---

### Object Has Another Object (Composition)

Sometimes it is better to think in terms of “has” rather than “is”. For example, a horse _is_ an animal but _has_ legs. By using composition, you can embed objects instead of inheriting them.

```csharp
class Box
{
    Node node = new Node();
    Transformable transf = new Transformable();
    Drawable drawable = new Drawable();

    public Box(Node node, Transformable transf, Drawable drawable)
    {
        this.node = node;
        this.transf = transf;
        this.drawable = drawable;
    }

    public void SetTexture(string texture)
    {
        node.SetTexture(texture);
    }

    public void SetPosition()
    {
        transf.SetPosition(); // avoids diamond problem
    }
}
```

**Pros:**

- Easy to implement
- No duplication of code

**Cons:**

- Does not truly represent multiple inheritance
- May be confusing to readers of your code

---

### Using Composition with Interfaces

This is a modified version of the composition approach. You can create interfaces and compositions to hold objects of the classes you want to simulate inheritance from.

```csharp
interface INode
{
    Node GetNode();
}

interface ITransformable
{
    Transformable GetTransformable();
}

interface IDrawable
{
    Drawable GetDrawable();
}

class Box : Node, Transformable
{
    Node node = new Node();
    public Node GetNode() { return node; }

    Transformable transf = new Transformable();
    public Transformable GetTransformable() { return transf; }

    Drawable drawable = new Drawable();
    public Drawable GetDrawable() { return drawable; }
}
```

**Pros:**

- Similar semantics to multiple inheritance
- Allows reuse of code
- Supports polymorphism

**Cons:**

- Can generate boilerplate code
- Harder to manage in large programs

---

## Conclusion

Simulating multiple inheritance in C# is possible through interfaces and composition. Each approach has its pros and cons, and the choice depends on your program design. While C# avoids the complexity of true multiple inheritance, you can still achieve similar functionality through these techniques.

---

References:  
[Wikipedia: Multiple Inheritance](http://en.wikipedia.org/wiki/Multiple_inheritance)  
[Stack Overflow: Multiple Inheritance in C#](http://stackoverflow.com/questions/18438196/c-sharp-multiple-inheritance)  
[Wikipedia: Is a](http://en.wikipedia.org/wiki/Is-a)  
[Wikipedia: Has a](http://en.wikipedia.org/wiki/Has-a)
