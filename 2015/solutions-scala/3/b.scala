import scala.io.Source

object b {
    var santaX = 0
    var santaY = 0
    var elfX = 0
    var elfY = 0

    def main(args: Array[String]) {
        var puzzle = Source.fromFile("../../test-data/day-three.txt").getLines.toList
        var set = scala.collection.mutable.Set[String]()
        var instructions = puzzle(0)
        var index = 0
        for (a <- instructions) {
            if (index % 2 == 0) {
                //Santa
                handleMovement(a.toString, true)
                set += santaX + "," + santaY;
            } else {
                //Elf
                handleMovement(a.toString, false)
                set += elfX + "," + elfY;
            }
            index += 1
        }
        println(set.size)
    }

    def handleMovement(a: String, isSanta: Boolean) {
        if (a.toString == "^") {
            if(isSanta) {
                santaY += 1
            } else {
                elfY += 1
            }
        } else  if (a.toString == "v") {
            if(isSanta) {
                santaY -= 1
            } else {
                elfY -= 1
            }
        }  else  if (a.toString == "<") {
            if(isSanta) {
                santaX -= 1
            } else {
                elfX -= 1
            }
        }  else  if (a.toString == ">") {
            if(isSanta) {
                santaX += 1
            } else {
                elfX += 1
            }
        }
    }


}
