use std::fs;


fn main() {
    let contents = fs::read_to_string("./puzzle.txt").expect("Unable to open");
    let depths: Vec<_> = contents
        .trim()
        .split('\n')
        .map(|line| line.parse::<i32>().unwrap())
        .collect();

        let mut ans = 0;
        for tuple in depths.windows(2) {
            if tuple[0] < tuple[1] {
                ans += 1;
            }
        }
    
        println!("{}", ans);
}
