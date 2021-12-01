use std::fs;


fn part_one(data: String) {
    print!("Part one: {:?}", data);
}

fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    part_one(contents);
}
