/**
 * Garb Problem Solution
 * 
 * Connie likes to wear different combinations of clothes every day.
 * Given a two-dimensional array clothes containing Connie's outfits,
 * write a solution function that returns the number of different combinations of clothes.
 * 
 * Rules:
 * - Connie can only wear one outfit of each type at a time
 * - Even if some clothes are wearing overlap, if other clothes do not overlap,
 *   or if wearing additional clothes, they are counted as being worn in different ways
 * - Connie wears at least one outfit a day
 * 
 * Each row of clothes consists of [name of clothing, type of clothing]
 * The number of costumes that Connie has is between 1 and 30
 * There is no costume with the same name
 * All elements of clothes are made of strings
 */

function solution(clothes) {
    // Group clothes by type
    const clothesByType = {};
    
    for (const [name, type] of clothes) {
        if (!clothesByType[type]) {
            clothesByType[type] = [];
        }
        clothesByType[type].push(name);
    }
    
    // Calculate combinations
    // For each type, Connie can either:
    // 1. Not wear anything from that type (1 way)
    // 2. Wear one of the items from that type (n ways, where n is number of items)
    // So for each type with n items, there are (n + 1) ways
    
    let result = 1;
    for (const type in clothesByType) {
        const count = clothesByType[type].length;
        result *= (count + 1); // +1 for not wearing anything from this type
    }
    
    // Subtract 1 because Connie must wear at least one outfit
    return result - 1;
}

// Test cases from the problem
function testSolution() {
    // Example 1: [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
    // Expected output: 5
    const clothes1 = [
        ["yellow_hat", "headgear"],
        ["blue_sunglasses", "eyewear"], 
        ["green_turban", "headgear"]
    ];
    console.log("Test 1 result:", solution(clothes1)); // Should be 5
    
    // Example 2: [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]
    // Expected output: 3
    const clothes2 = [
        ["crow_mask", "face"],
        ["blue_sunglasses", "face"],
        ["smoky_makeup", "face"]
    ];
    console.log("Test 2 result:", solution(clothes2)); // Should be 3
    
    // Explanation for Example 1:
    // headgear: yellow_hat, green_turban (2 items) -> 3 ways (none, yellow_hat, green_turban)
    // eyewear: blue_sunglasses (1 item) -> 2 ways (none, blue_sunglasses)
    // Total combinations: 3 * 2 = 6
    // Subtract 1 (for wearing nothing): 6 - 1 = 5
    
    console.log("\nDetailed breakdown for Example 1:");
    console.log("Possible combinations:");
    console.log("1. yellow_hat");
    console.log("2. blue_sunglasses");
    console.log("3. green_turban");
    console.log("4. yellow_hat + blue_sunglasses");
    console.log("5. green_turban + blue_sunglasses");
}

// Export the solution function
module.exports = {
    solution,
    testSolution
};

// Run tests if this file is executed directly
if (require.main === module) {
    testSolution();
}