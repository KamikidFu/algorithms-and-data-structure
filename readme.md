# Algorithms and data structures
*An overall note about algorithms and data structures repo*

## Intro
### What is algorithm?
A series of steps to accomplish a task.
### What is data structure?
A collection of data to provide efficient access and modification.
### How to write an algorithm?
* Understand the final goal of this algorithm
* Think about the pathway to the goal from the input to the output
* Break it down to pieces
* Solve them and try to simplify them
* Review and refactor
### How to analyse an algorithm?
There are two factors to analyse an algorithm which are:
* Time Complexity
* Space Complexity

Normally using Big-O notation, but there are Big-Theta and Big-Omega notations for representing complexity as well.
> See: 
>* [Big O Notation (Wikipedia)](https://en.wikipedia.org/wiki/Big_O_notation)
>* [Analysis of algorithms (Wikipedia)](https://en.wikipedia.org/wiki/Analysis_of_algorithms)
### How to deal with common questions?
There are some ways named as problem solving patterns which are:
* Frequency count
* Multiple pointers
* Sliding window
* Divide and conquer
* Dynamic programming
* Greedy algorithms
* Backtracking
* etc...

## Algorithm Topics
### Recursion
*A function that will call itself.*

Recursion usually used in traversal problems. Somehow it is not necessary to implement a function in a recursive way because it may be clearer when using iteration. For the best performance, the recursion needs to be a tail recursion, which means calling the same function at somewhere near the end of the whole function.

#### Call Stack
When using recursion, there is stack data structure will be used. Any time a function is invoked, it will be pushed onto stack. When the function will return, it will be poped from stack.

#### Examples:
* `JSON.parse()`/`JSON.stringify()`
* `document.getElementById()`
#### Implementation
##### Base Case
It is important to have a base case in recursion otherwise the programme will keep running until stack overflow. The base case is a condition indicating it should stop at this point.
##### Recursive input
The input should be changed each time for next recursion.

### Search
*To find meaningful data*

Search is a common algorithm to find something in a collection of data.

##### Examples:
* `indexOf()`/`includes()`/`find()` or similar

##### Implementation
* Linear Search
* Binary Search
* etc

### Sort
*To sort a collection of data in an order*
> See [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

Sort is also a common algorithm to sort data into an order.

##### Implementation
* `BubbleSort()`
* `SelectionSort()`
* `InsertionSort()`
* `MergeSort()`
* `QuickSort()`
* `RadixSort()`

##### Details
1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Merge Sort
5. Quick Sort
6. Radix Sort



## Meta
**Author**: [Kamikid](http://www.kamikid.me/)
### Reference
#### Java

#### JavaScript
* [JavaScript Algorithms and Data Structures Masterclass (Udemy)](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/) by Colt Steele
* [Professional JavaScript for Web Developer (Amazon)](https://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691?SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duckduckgo-d-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1118026691) 3rd Edition by Nicholas C. Zakas
* [JavaScript: The Definitive Guide (Amazon)](https://www.amazon.com/JavaScript-Definitive-Guide-Activate-Guides/dp/0596805527/ref=sr_1_1?keywords=JavaScript%3A+The+Definitive+Guide&qid=1558765094&s=books&sr=1-1) 6th Edition by David Flanagan 


