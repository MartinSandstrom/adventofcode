use std::fs;

fn get_score_by_char (char: &str) -> i32 {
    match char {
        "X" => 1,
        "Y" => 2,
        _ => 3,
    }
}

fn get_game_score (opponent: &str, myself: &str) -> i32 {
    match myself {
        "X" if opponent == "A" => 3 + get_score_by_char(myself),
        "X" if opponent == "B" => 0 + get_score_by_char(myself),
        "X" if opponent == "C" => 6 + get_score_by_char(myself),
        "Y" if opponent == "A" => 6 + get_score_by_char(myself),
        "Y" if opponent == "B" => 3 + get_score_by_char(myself),
        "Y" if opponent == "C" => 0 + get_score_by_char(myself),
        "Z" if opponent == "A" => 0 + get_score_by_char(myself),
        "Z" if opponent == "B" => 6 + get_score_by_char(myself),
        "Z" if opponent == "C" => 3 + get_score_by_char(myself),
        _ => 0,
    }
}

fn get_needed_score (opponent: &str, myself: &str) -> i32 {
    match myself {
        // lose
        "X" if opponent == "A" => 3,
        "X" if opponent == "B" => 1,
        "X" if opponent == "C" => 2,

        // draw
        "Y" if opponent == "A" => 1 + 3,
        "Y" if opponent == "B" => 2 + 3,
        "Y" if opponent == "C" => 3 + 3,

        // win
        "Z" if opponent == "A" => 2 + 6,
        "Z" if opponent == "B" => 3 + 6,
        "Z" if opponent == "C" => 1 + 6,

        //what evs
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
        score_part_one += get_game_score(opponent, myself);
        score_part_two += get_needed_score(opponent, myself);
    }
    println!("Day 2 part one: {:?}", score_part_one);
    println!("Day 2 part two: {:?}", score_part_two);
}
