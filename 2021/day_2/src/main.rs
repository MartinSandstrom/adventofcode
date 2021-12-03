use std::fs;

fn part_one(data: Vec<&str>) {
    let mut horizontal: i32 = 0;
    let mut depth: i32 = 0;

    for s in data.iter() {
        let chunks: Vec<_> = s.split_whitespace().collect();
        let dir = chunks[0];
        let value = chunks[1].parse::<i32>().unwrap();

        if dir == "forward" {
            horizontal += value;
        } else if dir == "down" {
            depth -= value;
        } else if dir == "up" {
            depth += value;
        }
    }

    println!("Part one {:?}", horizontal * depth);
}

fn part_two(data: Vec<&str>) {
    let mut horizontal: i32 = 0;
    let mut depth: i32 = 0;
    let mut aim: i32 = 0;

    for s in data.iter() {
        let chunks: Vec<_> = s.split_whitespace().collect();
        let dir = chunks[0];
        let value = chunks[1].parse::<i32>().unwrap();

        if dir == "forward" {
            horizontal += value;
            depth += value * aim;
        } else if dir == "down" {
            aim -= value;
        } else if dir == "up" {
            aim += value;
        }
    }

    println!("Part one {:?}", horizontal * depth);
}

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let data: Vec<_> = contents.split('\n').collect();

    part_one(data.clone());
    part_two(data.clone());
}
