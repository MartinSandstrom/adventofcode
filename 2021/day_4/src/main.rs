use std::fs;

#[derive(Debug, Copy, Clone)]
struct Number {
    drawn: bool,
    number: i32,
}

fn show_score(mut bingo_brick: Vec<Vec<Number>>, number: &i32, part: &str) {
    let mut sum: i32 = 0;
    println!("bingo_brick {:?}", bingo_brick);
    for bingo_row in bingo_brick.iter_mut() {
        for bingo_value in bingo_row.iter_mut() {
            sum += bingo_value.number;
        }
    }
    println!("Sum {:?}", sum);
    println!("Part {} {:?}", part,  sum * number);
}

fn has_won(mut bingo_array: Vec<Vec<Vec<Number>>>, number: &i32) -> bool {
    for bingo_brick in bingo_array.iter_mut() {
        for bingo_row in bingo_brick.iter_mut() {
            let count = bingo_row.iter().filter(|value| value.drawn).count();
            if count == 5 {
                show_score(bingo_brick.clone(), number, "one");
                return true;
            }
        }
        for i in 0..5 {
            let mut col_count = 0;
            for bingo_row in bingo_brick.iter_mut() {
                let bingo_value = bingo_row[i];
                if bingo_value.drawn {
                    col_count += 1;
                }
            }
            if col_count == 5 {
                show_score(bingo_brick.clone(), number, "one");
                return true;
            }
        }

    }
    return false;
}

fn part_one (numbers: Vec<i32>, mut bingo_array: Vec<Vec<Vec<Number>>>) {
    for number in numbers.iter() {
        for bingo_brick in bingo_array.iter_mut() {
            for bingo_row in bingo_brick.iter_mut() {
                for bingo_value in bingo_row.iter_mut() {
                    if number == &bingo_value.number {
                        bingo_value.number = 0;
                        bingo_value.drawn = true;
                    }
                }
            }
        }
        if has_won(bingo_array.clone(), number) {
            return;
        }
    }
}

fn has_won_last(mut bingo_array: Vec<Vec<Vec<Number>>>, number: &i32, winners: Vec<&i32>) -> bool {
    for bingo_brick in bingo_array.iter_mut() {
        for bingo_row in bingo_brick.iter_mut() {
            let count = bingo_row.iter().filter(|value| value.drawn).count();
            if count == 5 {
                if winners.len() == 2 {
                    show_score(bingo_brick.clone(), number, "two");
                }
                return true;
            }
        }
        for i in 0..5 {
            let mut col_count = 0;
            for bingo_row in bingo_brick.iter_mut() {
                let bingo_value = bingo_row[i];
                if bingo_value.drawn {
                    col_count += 1;
                }
            }
            if col_count == 5 {
                if winners.len() == 2 {
                    show_score(bingo_brick.clone(), number, "two");
                }
                return true;
            }
        }

    }
    return false;
}

fn part_two (numbers: Vec<i32>, mut bingo_array: Vec<Vec<Vec<Number>>>) {
    let mut winners :Vec<&i32> = Vec::new();
    for number in numbers.iter() {
        println!("Number drawn {:?}", number);
        for bingo_brick in bingo_array.iter_mut() {
            for bingo_row in bingo_brick.iter_mut() {
                for bingo_value in bingo_row.iter_mut() {
                    if number == &bingo_value.number {
                        bingo_value.number = 0;
                        bingo_value.drawn = true;
                    }
                }
            }
        }
        if has_won_last(bingo_array.clone(), number, winners.clone()) {
        }
    }
}


fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let parts: Vec<_> = contents.split("\n\n").collect();

    let numbers: Vec<i32> = parts[0]
        .split(',')
        .map(|s| s.parse::<i32>().unwrap())
        .collect();

    let mut bingo_array: Vec<Vec<Vec<Number>>> = Vec::new();

    for i in 1..parts.len() {
        let lines: Vec<&str> = parts[i].split('\n').collect();

        let numbers: Vec<Vec<Number>> = lines
            .iter()
            .map(|lines| {
                lines
                    .split_whitespace()
                    .map(|c| Number {
                        drawn: false,
                        number: c.parse::<i32>().unwrap(),
                    })
                    .collect()
            })
            .collect();

        bingo_array.push(numbers);
    }

    part_one(numbers.clone(), bingo_array.clone());
    part_two(numbers.clone(), bingo_array.clone());
}



/*





*/