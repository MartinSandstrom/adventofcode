import scala.io.Source

object b {
    def main(args: Array[String]) {
        var puzzle = Source.fromFile("../../test-data/day-two.txt").getLines.toList
        var sum = 0
        for (a <- puzzle) {
            var inputs = a.split("x")
            var l = inputs(0)
            var w = inputs(1)
            var h = inputs(2)
            var valueToAdd = getRibbon(l.toInt, w.toInt, h.toInt)
            sum += valueToAdd
        }
        println(sum)
    }

    def getRibbon(l: Int, w: Int, h: Int): Int = {
        var list = List(l,w,h).sorted
        var min = list(0)
        var second = list(1)
        return ( min + min + second + second + (l*w*h))
    }
}
