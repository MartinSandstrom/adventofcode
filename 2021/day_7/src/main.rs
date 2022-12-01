use std::fs;
use std::cmp;

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let data: Vec<i32> = contents
        .split(',')
        .map(|number| number.parse::<i32>().unwrap())
        .collect();

    let min: i32 = *data.iter().min().unwrap();
    let max: i32 = *data.iter().max().unwrap();

    let mut low_score = 2147483647;

    for i in min..max {
        let mut total = 0;
        for num in data.iter() {
            total += (1..=(&i-num).abs()).fold(0, |a, b| a + b);
        }
        low_score = cmp::min(total, low_score);
    }

    println!("Lowest {:?}", low_score);
}
