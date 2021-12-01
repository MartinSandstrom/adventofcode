use std::fs;

fn part_one(data: Vec<i32>) {
    let mut count = 0;
    for tuple in data.windows(2) {
        if tuple[0] < tuple[1] {
            count += 1;
        }
    }

    println!("{}", count);
}

fn part_two() {
    let mut count = 0;
    println!("{}", count);
}

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let data: Vec<_> = contents
        .trim()
        .split('\n')
        .map(|line| line.parse::<i32>().unwrap())
        .collect();

    part_one(data);
    part_two();
}
