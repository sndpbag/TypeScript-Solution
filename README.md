 

## 🔍 What are the Differences Between `interface` and `type` in TypeScript?

In TypeScript, both `interface` and `type` are used to define the shape of an object. But they have some differences:

| Feature                  | `interface`                       | `type`                                    |
| ------------------------ | --------------------------------- | ----------------------------------------- |
| Syntax Purpose           | Mainly for defining object shapes | Can define any type (object, union, etc.) |
| Extendable?              | ✅ Yes (can extend interfaces)     | ✅ Yes (can use `&` to combine types)      |
| Reopened/Modified Later? | ✅ Yes                             | ❌ No (once defined, cannot reopen)        |
| Readability in OOP       | Better for object-oriented coding | More flexible for complex type operations |
| Declaration Merging      | ✅ Supports merging                | ❌ Does not support merging                |

**📝 Example using `interface`:**

```ts
interface User {
  name: string;
  age: number;
}
```

**📝 Example using `type`:**

```ts
type User = {
  name: string;
  age: number;
}
```

👉 Use `interface` when you're working with object shapes and want to extend or merge types.
👉 Use `type` when you need more flexibility, such as unions, tuples, or combining types.

---

## 🔑 What is the Use of the `keyof` Keyword in TypeScript?

The `keyof` keyword is used to get a union of all property names (keys) of a given object type.

### 🎯 Why use it?

It helps create **type-safe access** to object keys and is very useful when writing **generic functions**.

### 📝 Example:

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;  // "name" | "age"

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Rahul", age: 25 };
const value = getValue(person, "name");  // Output: "Rahul"
```

✔️ Here, `keyof Person` gives us `"name" | "age"` — the names of the properties of `Person`.

---

Let me know if you want a downloadable `README.md` version or want this written directly into a file.
