import scala.io.Source

object b {
    def main (args: Array[String]) {
        var puzzle = Source.fromFile("../../test-data/day-one.txt").getLines.toList
        var number = 0
        var cur = 1
        for ( a <- puzzle ) {
            var chars = a.toList;
            for(b <- chars) {
                if( b.toString == "(") {
                number += 1
                } else {
                    number -= 1
                }
                if (number == -1) {
                    println(cur)
                }
                cur += 1
            }
        }
    }
}