use std::fs;

fn part_one(data: &Vec<u32>) {
    let count = data.windows(2).filter(|w| w[1] > w[0]).count();
    println!("Part one: {}", count);
}

fn part_two(data: &Vec<u32>) {
    let count = data.windows(4).filter(|w| w[3] > w[0]).count();
    println!("Part two: {}", count);
}

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let data: Vec<u32> = contents
        .split('\n')
        .map(|line| line.parse::<u32>().unwrap())
        .collect();

    part_one(&data);
    part_two(&data);
}
