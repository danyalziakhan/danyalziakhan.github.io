---
layout: default
title: Understanding Abstraction in C#
---

# Understanding Abstraction in C#

**Note:** This tutorial assumes that you have read my previous tutorials on classes, and that you at least know how to create an instance of a class.

**Difficulty:** Intermediate

In my previous tutorials, I have mentioned that the methods (functions defined in a given class) marked as public are the only methods visible to the program and can be used by a programmer, while the methods that are marked as protected are accessible within their class and by derived class instances. In Object Oriented Programming (OOP), abstraction is considered one of three fundamental principles (along with encapsulation and inheritance) that define the paradigm.

Through the use of abstraction, you can hide the unwanted details of the underlying data about an object in order to reduce complexity and increase efficiency. If you have some background in art, you will realize that it works in the same way. For instance, if you are sketching an apple, it is not desirable to sketch the unwanted details around the apple. The details of the apple are the only things that really matter to you. In this way, an object that is created through a class represents the original ...

Abstraction is related to both encapsulation and data hiding. Through this design, you can separate interface from implementation. It is often considered the most useful technique in data hiding. It is not only useful in the program for which the design is originally implemented, but in other programs too. If you are creating some library that is going to be used by other programmers, then it is a very useful design for an API (Application Programming Interface) as it completely hides the implementati...

So, the question is: how can you use this power of abstraction?

I will explain its concept and how this design can be implemented in your C# programs. Even though the source code examples that I will provide may be valid for Java or C++ too, I am focusing on C#. So, let’s get started!

---

## Interfaces To The Rescue

Suppose you want to create some graphics library whose purpose is to simply draw a circle or a rectangle to a window. When designing the API with this design in mind, our concern is not how the methods should be implemented, but how a programmer is supposed to use it. Through an interface, you can separate the common methods of different classes. This assures that any class that inherits from the given interface must implement the methods defined in the interface, otherwise the compiler will give you err...

Let’s consider an interface `Drawable` with a method `Draw` that needs to be implemented in the classes that inherit this interface.

```csharp
interface Drawable
{
    public void Draw();
}
```

Now, every class that inherits from `Drawable` must implement `Draw`.

```csharp
class Circle : Drawable
{
    public void Draw()
    {
        SomeFunction();
    }
}

class Rectangle : Drawable
{
    public void Draw()
    {
        SomeFunction();
    }
}
```

In this case, a programmer does not need to worry about the implementation of `Draw` in every class that implements the interface `Drawable`. They just use those methods in the way they are supposed to be used without worrying about the implementation of different `Draw` methods. Here, you also ensure that the entity is named in a manner that makes sense and that it has all the relevant aspects.

As abstraction provides a programmer a generalized view of the classes, a user of your library can easily examine the interface without reading the implementation, thus it enhances readability. Recall that I mentioned that abstraction can increase efficiency in some cases. For example, suppose you have several methods that have similar functionality of `Draw`, but you name them differently, such as `Draw` and `DrawOnce`, for drawing in a loop or drawing once respectively. Now the programmer can easily se...

At this point, I should add that interfaces are linked with the concept of polymorphism in the sense that it is considered the application of interfaces.

---

## Polymorphism

Through polymorphism, a programmer can use the derived class in the place of a base class. It is a way to generically use common methods. Polymorphism can be considered the application of several concepts such as inheritance and generics. I will not go into the details of polymorphism and its every possible application. I will focus only on its application in abstraction.

In our example, any class can be passed to a method `Draw` of an instance of `Window` that implements the interface `Drawable`, resulting in expressive code and reduced complexity.

```csharp
class Window
{
    void Draw (Drawable drawable)
    {
        drawable.Draw();
    }
}
```

Now, a programmer who wants to draw different shapes other than rectangles and circles can create their own user defined classes that inherit from `Drawable` and then simply implement the `Draw` method. In this way, the instance of a user defined class can easily be passed into the method `Draw` of an instance of `Window`. Through the process, we obtained what we wanted in the first place, data hiding, thus we can conclude that abstraction is indeed a great design for libraries.

---

Did this tutorial encourage you to use abstraction in your next library?
