use std::fs;


fn part_one(data: &Vec<&str>) {
    let mut gamma = String::from("");
    let mut epsilon = String::from("");
    let len = data[0].chars().count();

    for i in 0..len {
        let total = data.len();
        let number_of_gamma = data.iter().filter(|line| line.chars().nth(i).unwrap() == '1').count();
        if number_of_gamma > total - number_of_gamma {
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
        let number_of_gamma = oxygen_data.iter().filter(|line| line.chars().nth(i).unwrap() == '1').count();
        if number_of_gamma >= oxygen_data.len() - number_of_gamma {
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
        
        let number_of_epsilon = co2_data.iter().filter(|line| line.chars().nth(i).unwrap() == '0').count();
        if co2_data.len() > 1 {
            if number_of_epsilon <= co2_data.len() - number_of_epsilon  {
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
