# Algorithms and data structures
*A note for JavaScript implementation*

## Topics
### Common Patterns
> See [*CommonPatterns.js*](https://github.com/KamikidFu/algorithms-and-data-structure/blob/master/JavaScript/CommonPatterns.js)
---
#### Frequency Count
**Goal:**

To avoid nested looping and reduce the time complexity

**Example Tasks:**

1. Write an algorithm named `isSquared` which accepts two arrays to check if they have identical elements.
2. Write an algorithm named `isAnagram` which allows two strings and determine if they are anagram.

---
#### Multiple Pointer
**Goal:**

To create different pointer to point at different index or position

**Example Tasks:**

1. Write an algorithm names `pickZeroSum` which accepts a sorted array of integers and output pairs of integers which the sum of these two is zero.
2. Write an algorithm names `countUniqueValue` which allows a sorted array of integers and output how many unique integers in the array.
---
#### Sliding Window
**Goal:**

To find a meaningful slice in an array.

**Example Tasks:**

1. Write an algorithm named `maxSubarraySum` which uses an array of integers and an integer number determining the subarray size to output the maximum sum.
---
#### Divide and Conquer
**Goal:**

To divide a data set into smaller chunks and then repeat a process with a subset of data.

**Example Tasks:**
1. Write an algorithm named `binarySearch` which needs a sorted array of integer and a number which is this algorithm looking for.
---
### Recursion
> See [*Recursion.js*](https://github.com/KamikidFu/algorithms-and-data-structure/blob/master/JavaScript/Recursion.js)

**Goal:**

To simplify a normal routine using loop.

**Example Tasks:**
1. Write an algorithm named `sumRange()` which accepts one number and output the total sum from 1 to this number.
2. Write an algorithm named `factorial()` which allows one number and calculate the factorial result of this number.
3. Write an algorithm named `fib()` which accepts one number and calculate the sum of its fibonacci numbers.
---
### Search
> See [Search.js](https://github.com/KamikidFu/algorithms-and-data-structure/blob/master/JavaScript/Search.js)

**Goal:**

To find an element in a collection.

**Example Takes:**

1. Write an algorithm named `search()` which accepts an array and a item for search. This item does not have to one inside the array. And return its index, if there is no such element, return -1.
---
### Sort
> See [Sort.js](https://github.com/KamikidFu/algorithms-and-data-structure/blob/master/JavaScript/Soft.js)

**Goal:**

To sort the elements in order.

**Example Takes:**
All the functions accept one array and may have one more argument indicating the order.
1. `BubbleSort()`
2. `SelectionSort()`
3. `InsertionSort()`
4. `MergeSort()`
5. `QuickSort()`
6. `RadixSort()`