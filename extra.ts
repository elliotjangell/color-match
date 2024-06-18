namespace SpriteKind {
    export const Line_of_text = SpriteKind.create()
}

/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="left"
    Left,
    //% block="top"
    Top,
    //% block="right"
    Right,
    //% block="bottom"
    Bottom
}

/**
 * Extra Blocks
 */
//% weight=50
//% block="Extra Blocks"
namespace extraBlocks {
    /**
     * Gets a neighboring location to a sprite on the tilemap
     * @param l the neighboring location to place the sprite, eg: MyEnum.left
     * @param sprite the sprite to move, eg: "mySprite"
     */
    //% block="tilemap location $l of $sprite"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite

    export function tilemaplocation(l: MyEnum, sprite: Sprite) {
        if (l == MyEnum.Left) {
            return sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
        } else if (l == MyEnum.Top) {
            return sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top)
        } else if (l == MyEnum.Right) {
            return sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right)
        } else {
            return sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)
        }

    }
    /**
     * Shows a body of text on the screen with a maximum height of 6 lines. If you want to extend it, use the "extend block" in the y parameter of show lines of text, then enter the number of lines you want to skip.
     * 
     */
    //% block="show text starting at x $x y $y with background $bg text color $fg and lines $line1 $line2 || $line3 $line4 $line5 $line6"
    //% fg.defl=1
    //% fg.shadow="colorindexpicker"
    //% bg.defl=0
    //% bg.shadow="colorindexpicker"
    export function showLinesOfText(x: number, y: number, bg: number, fg: number, line1: string, line2: string, line3?: string, line4?: string, line5?: string, line6?: string): void {

        let textSprite = textsprite.create(line1, bg, fg)
        textSprite.left = x
        textSprite.y = y
        textSprite.setKind(SpriteKind.Line_of_text)
        let textSprite2 = textsprite.create(line2, bg, fg)
        textSprite2.left = x
        textSprite2.top = textSprite.bottom + 2
        textSprite2.setKind(SpriteKind.Line_of_text)
        if (line3) {
            let textSprite3 = textsprite.create(line3, bg, fg)
            textSprite3.left = x
            textSprite3.top = textSprite2.bottom + 2
            textSprite3.setKind(SpriteKind.Line_of_text)
            if (line4) {
                let textSprite4 = textsprite.create(line4, bg, fg)
                textSprite4.left = x
                textSprite4.top = textSprite3.bottom + 2
                textSprite4.setKind(SpriteKind.Line_of_text)
                if (line5) {
                    let textSprite5 = textsprite.create(line5, bg, fg)
                    textSprite5.left = x
                    textSprite5.top = textSprite4.bottom + 2
                    textSprite5.setKind(SpriteKind.Line_of_text)
                    if (line6) {
                        let textSprite6 = textsprite.create(line6, bg, fg)
                        textSprite6.left = x
                        textSprite6.top = textSprite5.bottom + 2
                        textSprite6.setKind(SpriteKind.Line_of_text)
                    }
                }
            }
        }

    }

    /** 
    * Clear all lines of text on the screen, similar to "destroy all sprites of kind"
    *
    */
    //% block="clear all lines of text"
    export function clearAllLinesOfText(): void {
        sprites.destroyAllSpritesOfKind(SpriteKind.Line_of_text)
    }

    /**
    * Extends your "lines of text" further down the screen. Just put this in the y parameter of a "show lines of text" block and enter the number of lines to skip
    *
    */
    //% block="extend lines of text by $lineCount lines"
    export function lineExtendY(lineCount: number) {
        let y = 5
        y += lineCount * 6 + lineCount * 4
        return y
    }
}
