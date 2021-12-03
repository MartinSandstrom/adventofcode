use std::fs;


fn part_one(data: &Vec<&str>) {
    let mut most_common: String = String::from("");
    let mut least_common: String = String::from("");

    for i in 0..data[0].chars().count() {
        let number_of_one = data.iter().filter(|line| line.chars().nth(i).unwrap() == '1').count();
        if number_of_one > data.len() - number_of_one {
            most_common.push('1');
            least_common.push('0');
        } else {
            most_common.push('0');
            least_common.push('1');
        }
    }

    let gamma: i32 = i32::from_str_radix(&most_common, 2).unwrap();
    let epsilon: i32 = i32::from_str_radix(&least_common, 2).unwrap();
    
    println!("Part one {}", gamma * epsilon);
}

fn part_two(data: &Vec<&str>) {
    let mut oxygen_data = data.clone();
    let mut co2_data = data.clone();
    let len = data[0].chars().count();

    
    for i in 0..len {
        let number_of_one = oxygen_data.iter().filter(|line| line.chars().nth(i).unwrap() == '1').count();
        if number_of_one >= oxygen_data.len() - number_of_one {
            oxygen_data = oxygen_data
                .iter()
                .filter(|line| line.chars().nth(i).unwrap() == '1')
                .cloned()
                .collect();
        } else {
            oxygen_data = oxygen_data
            .iter()
            .filter(|line| line.chars().nth(i).unwrap() == '0')
            .cloned()
            .collect();
        }
        
        let number_of_zero = co2_data.iter().filter(|line| line.chars().nth(i).unwrap() == '0').count();
        if co2_data.len() > 1 {
            if number_of_zero <= co2_data.len() - number_of_zero  {
                co2_data = co2_data
                    .iter()
                    .filter(|line| line.chars().nth(i).unwrap() == '0')
                    .cloned()
                    .collect();
            } else {
                co2_data = co2_data
                .iter()
                .filter(|line| line.chars().nth(i).unwrap() == '1')
                .cloned()
                .collect();
            }
        }
    }

    let oxygen_value = i64::from_str_radix(&oxygen_data[0], 2).unwrap();
    let co2_value = i64::from_str_radix(&co2_data[0], 2).unwrap();

    println!("Part Two {}", oxygen_value * co2_value);
}

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let data: Vec<_> = contents 
                .split('\n')
                .collect();

    part_one(&data);
    part_two(&data);
}
