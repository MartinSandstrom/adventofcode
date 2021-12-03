use std::fs;


fn part_one(data: &Vec<&str>) {
    let mut gamma = String::from("");
    let mut epsilon = String::from("");
    let len = data[0].chars().count();

    for i in 0..len {
        let total = data.len();
        let number_of_gamma = data.iter().filter(|line| line.chars().nth(i).unwrap() == '1').count();
        if number_of_gamma > total / 2 {
            gamma.push('1');
            epsilon.push('0');
        } else {
            gamma.push('0');
            epsilon.push('1');
        }
    }
    let gamma_value = i64::from_str_radix(&gamma, 2);
    let epsilon_value = i64::from_str_radix(&epsilon, 2);
    println!("Part one {}", gamma_value.unwrap() * epsilon_value.unwrap());
}

fn part_two(data: &Vec<&str>) {
    let mut oxygen_data = data.clone();
    let mut co2_data = data.clone();
    let len = data[0].chars().count();

    
    for i in 0..len {
        let total_gamma = oxygen_data.len();
        let number_of_gamma = oxygen_data.iter().filter(|line| line.chars().nth(i).unwrap() == '1').count();
        if number_of_gamma <= total_gamma / 2 {
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
        let mut number_of_zero = 0;
        let mut number_of_one = 0;
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
