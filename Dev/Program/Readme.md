🧩 Abstract Classes in Java — Complete Interview Guide
📘 Definition

An abstract class in Java is a partially implemented class that cannot be instantiated directly.
It acts as a base or blueprint for other classes.
It can contain both abstract methods (without a body) and non-abstract methods (with implementation).

Declared using the abstract keyword.

🧱 Syntax
abstract class ClassName {
abstract void method1(); // abstract method
void method2() { // non-abstract method
System.out.println("Concrete method");
}
}

⚙️ Key Characteristics

Declared using the abstract keyword.

Cannot be instantiated directly using new.

Can contain both abstract and non-abstract methods.

Can have:

Constructors

Static methods

Final methods

Instance and static variables

Must be inherited by another class to be used.

Subclasses must:

Implement all abstract methods, OR

Be declared abstract themselves.

Can extend another abstract or concrete class.

Can implement interfaces.

Can have access modifiers for variables and methods.

🧩 Example
abstract class Animal {
abstract void sound(); // abstract method

    void eat() {           // concrete method
        System.out.println("Animals eat food");
    }

}

class Dog extends Animal {
void sound() {
System.out.println("Dog barks");
}
}

public class Test {
public static void main(String[] args) {
Animal a = new Dog(); // polymorphism
a.sound();
a.eat();
}
}

Output:

Dog barks
Animals eat food

💡 Purpose of Abstract Classes
Purpose Explanation
Partial Abstraction Allows hiding unnecessary details while showing essential features.
Code Reusability Common features defined once and reused by all subclasses.
Template/Design Provides a base structure that subclasses must follow.
Enforces Rules Ensures that subclasses implement specific required methods.
🧱 Abstract Class with Partial Implementation
abstract class Payment {
abstract void processPayment();

    void connectGateway() {
        System.out.println("Connecting to Payment Gateway...");
    }

}

class CreditCardPayment extends Payment {
void processPayment() {
System.out.println("Processing Credit Card Payment...");
}
}

🧭 Abstract Class vs Interface
Feature Abstract Class Interface
Keyword abstract class interface
Methods Abstract + Concrete Abstract (till Java 7), Default & Static (from Java 8)
Variables Instance & static allowed Only public static final
Constructors ✅ Yes ❌ No
Multiple Inheritance ❌ Not allowed ✅ Allowed
Access Modifiers public, protected, private Always public
When to Use When classes are closely related When unrelated classes share behavior
🧠 Real-world Analogy

An abstract class is like a template or blueprint.

Example:
A Vehicle abstract class defines general behavior like start() and stop(),
while each specific vehicle (Car, Bike) defines its own version of how it starts or moves.

🧩 Constructors in Abstract Classes

Yes, abstract classes can have constructors — used to initialize common fields.

abstract class Shape {
int sides;

    Shape(int sides) {
        this.sides = sides;
        System.out.println("Shape created with " + sides + " sides");
    }

    abstract double area();

}

class Square extends Shape {
int sideLength;

    Square(int sideLength) {
        super(4);
        this.sideLength = sideLength;
    }

    double area() {
        return sideLength * sideLength;
    }

}

⚙️ Abstract Class with Variables & Blocks
abstract class Vehicle {
static int count = 0;
String type;

    { System.out.println("Instance block executed"); }

    Vehicle(String type) {
        this.type = type;
        count++;
    }

    abstract void start();

    static void showCount() {
        System.out.println("Vehicles created: " + count);
    }

}

🔁 Constructor Chaining in Abstract Classes

When a subclass object is created,
both the abstract class constructor and subclass constructor are executed — top-down.

abstract class A {
A() {
System.out.println("A constructor");
}
}

class B extends A {
B() {
System.out.println("B constructor");
}
}

public class Test {
public static void main(String[] args) {
new B();
}
}

Output:

A constructor
B constructor

⚡ Nested Abstract Classes

Yes, abstract classes can be nested inside another class —
even declared as static.

class Outer {
static abstract class Inner {
abstract void display();
}

    static class SubInner extends Inner {
        void display() {
            System.out.println("Inside static nested abstract class");
        }
    }

}

public class Demo {
public static void main(String[] args) {
Outer.SubInner obj = new Outer.SubInner();
obj.display();
}
}

🧾 Rules Summary
Rule Description
Can contain abstract methods ✅ Yes
Can contain non-abstract methods ✅ Yes
Can have constructors ✅ Yes
Can be nested ✅ Yes
Can be static if nested ✅ Yes
Can have main method ✅ Yes
Can implement interface ✅ Yes
Can extend another abstract/concrete class ✅ Yes
Must be extended ✅ Yes
Can be final ❌ No (final can’t be inherited)
⚔️ Common Interview Questions
Question Answer
Can abstract class have constructor? ✅ Yes, for initialization
Can abstract class have static method? ✅ Yes
Can abstract class have final method? ✅ Yes, cannot be overridden
Can abstract class have private method? ✅ Yes, but not accessible to child
Can abstract class be final? ❌ No
Can we create object of abstract class? ❌ No
Can abstract class extend another abstract class? ✅ Yes
Can abstract class implement interface? ✅ Yes
Can abstract class have main method? ✅ Yes
Can abstract class be nested inside another class? ✅ Yes
🧩 Abstract Class + Interface Example
interface Drivable {
void accelerate();
}

abstract class Vehicle implements Drivable {
abstract void start();

    void stop() {
        System.out.println("Vehicle stopped");
    }

}

class Car extends Vehicle {
void start() {
System.out.println("Car started");
}

    public void accelerate() {
        System.out.println("Car accelerating");
    }

}

⚡ Abstract Class vs Concrete Class
Aspect Abstract Class Concrete Class
Instantiation ❌ Not possible ✅ Possible
Abstract methods ✅ May have ❌ Not allowed
Purpose Blueprint / Base class Fully implemented class
Extension Must be extended Can be directly used
🧠 1-Minute Spoken Summary (Interview Version)

An abstract class in Java is a partially implemented class that serves as a base for other classes.
It’s declared with the abstract keyword and can contain both abstract and concrete methods.
It cannot be instantiated directly and is used to achieve partial abstraction and enforce a specific structure among subclasses.
Abstract classes can have constructors, static methods, and variables, and are often used in real-world applications as templates or base designs that define common functionality for derived classes.

✅ In Short

Abstract Class = Partially implemented blueprint
Used for partial abstraction, reusability, and enforcing structure
Cannot be instantiated, but can have everything else (variables, constructor, static, etc.)
