use std::fs;

fn count(data: Vec<u32>) -> u32 {
    let mut count = 0;
    for tuple in data.windows(2) {
        if tuple[0] < tuple[1] {
            count += 1;
        }
    }
    return count;
}

fn adapt_to_three_measurement(data: Vec<u32>) -> Vec<u32> {
    let mut adapted_vec = Vec::<u32>::new();
    for triple in data.windows(3) {
        adapted_vec.push(triple[0] + triple[1] + triple[2]);
    }
    return adapted_vec;
}

fn part_one(data: Vec<u32>) {
    println!("Part one: {}", count(data));
}

fn part_two(data: Vec<u32>) {
    let adapted_data = adapt_to_three_measurement(data);
    println!("Part two: {}", count(adapted_data));
}

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let data: Vec<u32> = contents
        .split('\n')
        .map(|line| line.parse::<u32>().unwrap())
        .collect();

    part_one(data.clone());
    part_two(data.clone());
}
