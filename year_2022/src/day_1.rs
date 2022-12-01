use std::fs;

pub unsafe fn solve_puzzle_of_the_day() {
    let content: String = fs::read_to_string("./src/day_1_puzzle.txt").expect("Unable to open");
    let mut all_elf_total_food: Vec<i32> = content
        .split("\n\n")
        .map(|food: &str| {
            food.split('\n')
                .map(|meal: &str| meal.parse::<i32>().unwrap())
                .sum()
        })
        .collect();
    all_elf_total_food.sort();
    let first: i32 = all_elf_total_food.pop().unwrap();
    println!("Day 1 part one: {:?}", first);
    let second: i32 = all_elf_total_food.pop().unwrap();
    let third: i32 = all_elf_total_food.pop().unwrap();
    println!("Day 1 part two: {:?}", first + second + third);
}
