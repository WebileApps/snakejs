DIRECTION_LEFT = 1;
DIRECTION_UP = 2;
DIRECTION_RIGHT = 3;
DIRECTION_DOWN = 4;
const CELLS_X = 20;
const CELLS_Y = 30;


/**
 * X Axis increases towards the right and Y axis increases down.
 * So, Top Left is {x : 0, y: 0} and Bottom right is {x : 20, y: 30}.
 * 
 * body is an array of {x, y}. Example [{0,2}, {0,1}, {0,0}]
 * 
 * @param {Array} body 
 * @param {number} direction 
 * 
 * @returns {Array} body of the snake at new position 
 * or "false", if the snake cannot be moved due to a collision with the wall or to itself.
 * 
 */
function moveSnake(body, direction, foodX, foodY) {

    const [{x, y}] = body;
    const nextHead = (direction) => {
        if (direction == Snake.prototype.DIRECTION_DOWN) {
            return { x, y: y+1};
        }
        if (direction == Snake.prototype.DIRECTION_RIGHT) {
            return { x: x+1, y};
        }
        if (direction == Snake.prototype.DIRECTION_UP) {
            return { x, y: y-1};
        }
        if (direction == Snake.prototype.DIRECTION_LEFT) {
            return { x: x-1, y};
        }
    }
    const newHead = nextHead(direction)
    body.unshift(newHead);
    if(newHead.x != foodX || newHead.y != foodY) {
        body.pop();
    }
    return body;
}