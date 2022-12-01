use std::fs;

pub unsafe fn solve_puzzle_of_the_day() {
    let content = fs::read_to_string("./src/day_1_puzzle.txt").expect("Unable to open");
    let mut all_elf_meals: Vec<i32> = 
        content
        .split("\n\n")
        .map(|food| {
            food.split('\n')
                .map(|meal| meal.parse::<i32>().unwrap())
                .sum()
        })
        .collect();
    all_elf_meals.sort();
    let first = all_elf_meals.pop().unwrap();
    println!("Day 1 part one: {:?}", first);
    let second = all_elf_meals.pop().unwrap();
    let third = all_elf_meals.pop().unwrap();
    println!("Day 1 part two: {:?}", first + second + third);
}
