/*
135. Candy
Hard
Topics
Companies
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

 

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
 

Constraints:

n == ratings.length
1 <= n <= 2 * 104
0 <= ratings[i] <= 2 * 104
*/

// PASSES FIRST 13
// var candy = function(ratings) {
//     let candy = 0;
//     if (ratings[0] > ratings[1]) candy++
//     for (let i=0; i < ratings.length; i++){
//         candy++
//         if (ratings[i] < ratings[i+1]) candy++
//     }
//     return candy
// };

// PASSES FIRST 16
// var candy = function(ratings) {
//     let candy = 0;
//     if (ratings[0] > ratings[1]) candy++
//     for (let i=0; i < ratings.length; i++){
//         candy++

//         if (ratings[i] < ratings[i+1])  candy++
//         if (ratings[i +1] < ratings[i] && ratings[i-1] >= ratings[i]) candy++  
  
//     }
//     return candy
// };

ratings = [1,0,2]
// Output: 5
console.log(candy(ratings))

ratings2 = [1,2,2]
// Output: 4
console.log(candy(ratings2))

ratings3 = [1,3,2,2,1]
// Output: 7
console.log(candy(ratings3))

ratings4 = [1,2,87,87,87,2,1]
// Output: 13 But why? I got 11, so I hit my target
console.log(candy(ratings4))