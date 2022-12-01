use std::cmp;
use std::collections::HashMap;
use std::fs;

fn calculate(cords: &Vec<Vec<&str>>, countDiagonal: bool) -> usize {
    let mut visited = HashMap::new();

    for cord in cords.iter() {
        let start: Vec<&str> = cord[0].split(",").collect();
        let x1: u32 = start[0].parse().unwrap();
        let y1: u32 = start[1].parse().unwrap();

        let end: Vec<&str> = cord[1].split(",").collect();
        let x2: u32 = end[0].parse().unwrap();
        let y2: u32 = end[1].parse().unwrap();

        let min_x = cmp::min(x1, x2);
        let max_x = cmp::max(x1, x2);
        let min_y = cmp::min(y1, y2);
        let max_y = cmp::max(y1, y2);

        let mut x = min_x;
        let mut y = min_y;
        if y1 == y2 {
            while x <= max_x {
                let key: String = format!("{}{}{}", x, ",", y);
                visited.entry(key.clone()).or_insert(0);
                let current_value: u32 = visited[&key.clone()];
                visited.insert(key.clone(), current_value + 1);
                x = x + 1;
            }
        } else if x1 == x2 {
            while y <= max_y {
                let key: String = format!("{}{}{}", x, ",", y);
                visited.entry(key.clone()).or_insert(0);
                let current_value: u32 = visited[&key.clone()];
                visited.insert(key.clone(), current_value + 1);
                y = y + 1;
            }
        } else if countDiagonal {
            let descending = (x1 >= x2 && y1 >= y2) || (x1 <= x2 && y1 <= y2);
            // doesn't matter if we use x or y since we know diagonals are the same
            let distance = (x1 as i64 - x2 as i64).abs() as u32;
            let leftmost_point = if x1 < x2 { (x1, y1) } else { (x2, y2) };

            for i in 0..=distance {
                if descending {
                    let key: String =
                        format!("{}{}{}", leftmost_point.0 + i, ",", leftmost_point.1 + i);
                    visited.entry(key.clone()).or_insert(0);
                    let current_value: u32 = visited[&key.clone()];
                    visited.insert(key.clone(), current_value + 1);
                } else {
                    let key: String =
                        format!("{}{}{}", leftmost_point.0 + i, ",", leftmost_point.1 - i);
                    visited.entry(key.clone()).or_insert(0);
                    let current_value: u32 = visited[&key.clone()];
                    visited.insert(key.clone(), current_value + 1);
                };
            }
        }
    }
    visited.retain(|_, val| return val > &mut 1);
    return visited.len();
}

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let lines: Vec<&str> = contents.split('\n').collect();

    let cords: Vec<Vec<&str>> = lines
        .iter()
        .map(|line| line.split(" -> ").collect())
        .collect();

    println!("Part one (6841): {:?}", calculate(&cords, false));
    println!("Part two (19258): {:?}", calculate(&cords, true));
}
