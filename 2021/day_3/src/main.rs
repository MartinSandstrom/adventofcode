use std::fs;


fn part_one(data: &Vec<&str>) {
    let mut most_common = String::from("");
    let mut least_common = String::from("");

    for i in 0..12 {
        let total = data.len();
        let number_of_one = data.iter().filter(|line| line.chars().nth(i).unwrap() == '1').count();

        if number_of_one > total / 2 {
            most_common.push('1');
            least_common.push('0');
        } else {
            most_common.push('0');
            least_common.push('1');
        }
    }

    println!("Most common {:?}", most_common);
    println!("Least common {:?}", least_common);
    
    let z = i64::from_str_radix(&most_common, 2);
    let y = i64::from_str_radix(&least_common, 2);
    
    println!("Part one 749376");
    println!("Part one {}", y.unwrap() * z.unwrap());
}

fn part_two(data: &Vec<&str>) {
    
    let mut oxygen_data = data.clone();
    let mut co2_data = data.clone();
    
    for i in 0..12 {
        let mut number_of_zero = 0;
        let mut number_of_one = 0;
        for line in oxygen_data.iter() {
            if line.chars().nth(i).unwrap() == '1' {
                number_of_one = number_of_one + 1;
            } else {
                number_of_zero = number_of_zero + 1;
            }
        }
        if oxygen_data.len() > 1 { 
            if number_of_zero > number_of_one {
                oxygen_data = oxygen_data
                .iter()
                .filter(|line| line.chars().nth(i).unwrap() == '0')
                .cloned()
                .collect();
            } else {
                oxygen_data = oxygen_data
                .iter()
                .filter(|line| line.chars().nth(i).unwrap() == '1')
                .cloned()
                .collect();
            }
        }  
        number_of_zero = 0;
        number_of_one = 0;
        for line in co2_data.iter() {
            if line.chars().nth(i).unwrap() == '1' {
                number_of_one = number_of_one + 1;
            } else {
                number_of_zero = number_of_zero + 1;
            }
        }
        if co2_data.len() > 1 { 
            if number_of_zero <= number_of_one {
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

    let z = i64::from_str_radix(&oxygen_data[0], 2);
    let y = i64::from_str_radix(&co2_data[0], 2);

    
    println!("Part Two 2372923");
    println!("Part Two {}", y.unwrap() * z.unwrap());
}

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let data: Vec<_> = contents 
                .split('\n')
                .collect();

    part_one(&data);
    part_two(&data);
}
