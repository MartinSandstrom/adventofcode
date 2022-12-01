use std::fs;

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let data: Vec<u32> = contents
        .split(',')
        .map(|number| number.parse::<u32>().unwrap())
        .collect();

    let mut number_arr = vec![0,0,0,0,0,0,0,0,0];
    let mut total = data.len();

    for fish in data.iter() {
        number_arr[*fish as usize] += 1;
    }

    for day in 1..=256 {
        let current = number_arr[0];
        number_arr[0] = number_arr[1];
        number_arr[1] = number_arr[2];
        number_arr[2] = number_arr[3];
        number_arr[3] = number_arr[4];
        number_arr[4] = number_arr[5];
        number_arr[5] = number_arr[6];
        number_arr[6] = number_arr[7];
        number_arr[7] = number_arr[8];
        number_arr[6] += current;
        number_arr[8] = current;
        println!("Day: {}: Total {:?} Current: {}", day, total, current);
        total += current;
    }
    
    println!("Total {:?}", total)


}
