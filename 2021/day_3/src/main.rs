use std::fs;

fn part_one(data: &Vec<Vec<char>>) {
    let mut most_common: Vec<char> = Vec::new();
    let mut least_common: Vec<char> = Vec::new();

    for i in 0..data[0].len() {
        let number_of_one = data.iter().filter(|line| line[i] == '1').count();
        if number_of_one > data.len() - number_of_one {
            most_common.push('1');
            least_common.push('0');
        } else {
            most_common.push('0');
            least_common.push('1');
        }
    }

    let gamma: i32 = i32::from_str_radix(&String::from_iter(most_common), 2).unwrap();
    let epsilon: i32 = i32::from_str_radix(&String::from_iter(least_common), 2).unwrap();

    println!("Part one {}", gamma * epsilon);
}

fn part_two(data: &Vec<Vec<char>>) {
    let mut oxygen_data = data.clone();
    let mut co2_data = data.clone();
    let len = data[0].len();

    for i in 0..len {
        let number_of_one = oxygen_data.iter().filter(|line| line[i] == '1').count();
        let filter_one = |line: &&Vec<char>| line[i] == '1';
        let filter_zero = |line: &&Vec<char>| line[i] == '0';

        if number_of_one >= oxygen_data.len() - number_of_one {
            oxygen_data = oxygen_data.iter().filter(filter_one).cloned().collect();
        } else {
            oxygen_data = oxygen_data.iter().filter(filter_zero).cloned().collect();
        }

        let number_of_zero = co2_data.iter().filter(filter_zero).count();
        if co2_data.len() > 1 {
            if number_of_zero <= co2_data.len() - number_of_zero {
                co2_data = co2_data.iter().filter(filter_zero).cloned().collect();
            } else {
                co2_data = co2_data.iter().filter(filter_one).cloned().collect();
            }
        }
    }

    let oxygen_value: i64 = i64::from_str_radix(&String::from_iter(&oxygen_data[0]), 2).unwrap();
    let co2_value: i64 = i64::from_str_radix(&String::from_iter(&co2_data[0]), 2).unwrap();

    println!("Part Two 2372923 {}", oxygen_value * co2_value);
}

fn main() {
    let contents: String = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let lines: Vec<&str> = contents.split('\n').collect();
    let chars: Vec<Vec<char>> = lines.iter().map(|line| line.chars().collect()).collect();

    part_one(&chars);
    part_two(&chars);
}
