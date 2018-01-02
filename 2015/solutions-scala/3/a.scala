import scala.io.Source

object a {
    def main(args: Array[String]) {
        var set = scala.collection.mutable.Set[String]()
        var puzzle = Source.fromFile("../../test-data/day-three.txt").getLines.toList
        var x = 0
        var y = 0
        var instructions = puzzle(0);
        for (i <- instructions) {
            if (i.toString == "^") {
                y += 1
            } else  if (i.toString == "v") {
                y -= 1
            }  else  if (i.toString == "<") {
                x -= 1
            }  else  if (i.toString == ">") {
                x += 1
            }
            var cord = x + "," + y
            map += cord
        }
        println(map.size)
    }
}
