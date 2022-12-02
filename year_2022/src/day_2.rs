use std::fs;

fn play_by_play (opponent: &str, myself: &str) -> i32 {
    match myself {
        "X" if opponent == "A" => 3 + 1,
        "X" if opponent == "B" => 0 + 1,
        "X" if opponent == "C" => 6 + 1,
        "Y" if opponent == "A" => 6 + 2,
        "Y" if opponent == "B" => 3 + 2,
        "Y" if opponent == "C" => 0 + 2,
        "Z" if opponent == "A" => 0 + 3,
        "Z" if opponent == "B" => 6 + 3,
        "Z" if opponent == "C" => 3 + 3,
        _ => 0,
    }
}

fn play_by_tactic (opponent: &str, myself: &str) -> i32 {
    match myself {
        "X" if opponent == "A" => 3,
        "X" if opponent == "B" => 1,
        "X" if opponent == "C" => 2,
        "Y" if opponent == "A" => 1 + 3,
        "Y" if opponent == "B" => 2 + 3,
        "Y" if opponent == "C" => 3 + 3,
        "Z" if opponent == "A" => 2 + 6,
        "Z" if opponent == "B" => 3 + 6,
        "Z" if opponent == "C" => 1 + 6,
        _ => 0
    }
}

pub unsafe fn solve_puzzle_of_the_day() {
    let content: String = fs::read_to_string("./src/day_2_puzzle.txt").expect("Unable to open");
    let rounds: Vec<&str> = content.split('\n').collect();
    let mut score_part_one: i32 = 0;
    let mut score_part_two: i32 = 0;

    for round in rounds {
        let mut instructions = round.split(' ');
        let opponent = instructions.next().unwrap();
        let myself = instructions.next().unwrap();
        score_part_one += play_by_play(opponent, myself);
        score_part_two += play_by_tactic(opponent, myself);
    }
    println!("Day 2 part one: {:?}", score_part_one);
    println!("Day 2 part two: {:?}", score_part_two);
}
