import scala.io.Source

object a {
    def main (args: Array[String]) {
        var puzzle = Source.fromFile("../../test-data/day-two.txt").getLines.toList
        var sum = 0;
        for (a <- puzzle) {
            var inputArr = a.split("x");
            var l = inputArr(0)
            var h = inputArr(1)
            var w = inputArr(2)
            var valueToAdd = getValue(l.toInt, h.toInt, w.toInt)
            sum += valueToAdd
        }
        println(sum)
    }

    def getValue(l: Int, h: Int, w: Int): Int = {
        var firstSide = l*w
        var secondSide = w*h
        var thirdSide = h*l;
        return (
            2*firstSide + 2*secondSide + 2*thirdSide + List(firstSide, secondSide, thirdSide).min
        )
    }
}

