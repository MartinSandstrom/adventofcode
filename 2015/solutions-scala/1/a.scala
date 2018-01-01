import scala.io.Source

object a {
    def main (args: Array[String]) {
        var puzzle = Source.fromFile("../../test-data/day-one.txt").getLines.toList
        var number = 0
        for (a <- puzzle) {
            var input = a.toList
            for (b <- input) {
                if (b.toString == "(") {
                    number += 1;
                } else {
                    number -= 1;
                }
            }
        }
        println("Answer " + number)
    }
}