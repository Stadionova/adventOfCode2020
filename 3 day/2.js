var mapTrees = [
    '....#..#.................#..#..',
    '#..#.#.#..#.###.#..#...#..#....',
    '.#....#......#.#.#..##...#...#.',
    '.............#.#..#........#.#.',
    '............##.#..#...##.###...',
    '.....#..#......#......##.......',
    '........##........#...........#',
    '..................#..#.........',
    '......#..#...#..#......###..#..',
    '.#....#...........#.....#.##...',
    '..#..#.#........###..#....#...#',
    '..#..##..#..#....#..#......#...',
    '......#....................#...',
    '.........#..#..................',
    '..#.#.....#......#.#....#...#..',
    '..#..........##.......##.##....',
    '#.......#.##.....#...#....#....',
    '####..............###.#....#...',
    '....#........#.#..###..#...#..#',
    '#.#......#...#.##....#.....#...',
    '.......#......#.....#........#.',
    '.##.........#...#.........#....',
    '............#....#.#........#..',
    '#..##..#....#...#.#....#....#..',
    '.....#....##..#................',
    '.#...........#....#..#.....#...',
    '......#.#...#..###.............',
    '#...#...........#..###.#..#..#.',
    '...................#..#....#..#',
    '....#...#...#.#.....#....#.##..',
    '.......#.......#.#.........#...',
    '#..#.......#...#..#.#......#...',
    '..##...........#....#..#.......',
    '.#...............#...##........',
    '.....#..........#............#.',
    '..#.......#.#.#...........#..#.',
    '........#..#.#.#........#.#.##.',
    '.###..............#.#..........',
    '.#....###.....#......#....#....',
    '............#.#......#..#....#.',
    '.#.#.............#........##...',
    '.....#..###....##.....#....#..#',
    '.##....#...#.#.........#......#',
    '....##.......#...............##',
    '..........##.##.......#........',
    '......#....##.........##.#.#.#.',
    '..............#....#..#......#.',
    '......##.........#.........#...',
    '.#...##...##....##..#..#.....#.',
    '.#......#.###.#....#...#......#',
    '.##.......................#..#.',
    '....#......#.##..........#.###.',
    '.#.....##..........#.#.........',
    '....#.#.........#...#..........',
    '.#..##.#....##.......#.......#.',
    '.........#.......#............#',
    '###..........#.....##.#....#...',
    '.......###.#....#........#...##',
    '..#..#....#.......#.#..........',
    '.#..#..........#......#...#....',
    '.....###.#..#.....#...#..#.....',
    '........#.#.#..........#.#..#..',
    '........#...##.................',
    '...#.............#.#..#......##',
    '......#......##......#...#.#..#',
    '.#..#...##..........#...##.....',
    '..#.#....####..#...#....##....#',
    '.#..##.........#..##......#....',
    '#....#.#.........#.............',
    '....###..............#....#....',
    '....#..#..#...###..#.#..#.#....',
    '....#.....#...........###..#...',
    '....#.#.....#...#.....#.......#',
    '..#.......#..................#.',
    '#...................##.........',
    '....#.#.#.#.#.....#.....#......',
    '...............##..#..##.#...##',
    '..#.....#.....##.........#..#..',
    '...#...#.....#..##..##....#..##',
    '..#.................#....#...#.',
    '#....##...............##..#....',
    '..#.....#.....##.........##...#',
    '..#.###..............#...#.....',
    '.......................#.......',
    '#...#..#.....##...#...#........',
    '..........#......#.###....#...#',
    '..#.....#.##.#..#.#.......#....',
    '#.##...#............#..........',
    '#........#.#.#..#...#..#.....##',
    '#............#.#...............',
    '.#..#.......#.#.....#.#......##',
    '.#.#....#........#..##.........',
    '..#....#......#.#...##...#.....',
    '##.....#......................#',
    '...#.......#..##.....#........#',
    '......##..#...............##...',
    '.....#...#......##....#.#......',
    '.#...#....#.#.#........#...#.#.',
    '.......#...#...##...#..........',
    '.##..#..##........##....###.#..',
    '..##........#........##........',
    '............#....#......#......',
    '.......#...........#.......#...',
    '#.#......##.#...#....#.#.....#.',
    '..#.#.#......##........#....#..',
    '#.#.####.#..#..........#.......',
    '......................#.#......',
    '...#.......#.....#......#..#.#.',
    '...#....#....##..........#..##.',
    '......#......#....#.........#..',
    '.........#....#...#.#.........#',
    '.....#...##.#.#.#......#.....#.',
    '........#...#......#.#....#....',
    '.....#.........#.............#.',
    '.#...........#.#....##.......#.',
    '.#..#......#....#....#....#....',
    '#.......#.#.#.#..#.......#.....',
    '..#...#...#......#.............',
    '.....#.......#..#.........##..#',
    '#..##...........#.#.........#..',
    '#..#..........#....#......#...#',
    '#...#............#....##..#.##.',
    '....#.#..#....#.........##..##.',
    '.........#..........#.......##.',
    '#...#........................#.',
    '....#....#..#...........##...#.',
    '.....###.###.#....#.....#.....#',
    '.#..###..#...##..........#.....',
    '#..#.....#...#........#........',
    '.#..##..#......#.....#......##.',
    '#.....##........#.#..#....#.#..',
    '.#....#...#..#...............#.',
    '..........#.#........#.....#...',
    '..#.#.....#....#........#.###..',
    '...#..#...#.##.....#..........#',
    '..#......##....................',
    '.....#...#....#..#....#.......#',
    '......#............#....#...#..',
    '.#..#....#.....#........##.....',
    '...#..#.......#...............#',
    '##.#..#...............#.#..##..',
    '..#.........#.####.####........',
    '.........#...#.#........#..###.',
    '..###.....#.........##........#',
    '#..##.....##.#..........#....##',
    '.#..#....###..#.....##..#......',
    '#...#..#........#.............#',
    '#.#....#........#.........#.###',
    '.....#....#.###.......#........',
    '...........#............#..#...',
    '..........#.#..##......###....#',
    '..##....#...........#....#....#',
    '..#...##.#.......#.##.......#..',
    '.......#......#..........#....#',
    '.........#..#..............####',
    '#.#...#...#......#...#..#...#.#',
    '.#.#...#.....#.......#.#..##.#.',
    '......##..##...#...............',
    '....#....#...##.......#.#......',
    '.............................#.',
    '..##...#.......#......#.......#',
    '.#.##.##....#......##.......#..',
    '.......##..#....#.##.#.#.......',
    '....#.............#......#..#..',
    '...#.........#....#..#.....#.#.',
    '......#......#......#.........#',
    '........#..#.#.....#.....#...#.',
    '.#.......#.........#...#.......',
    '#.#.##.....#...#...............',
    '..#.......##.....#............#',
    '.................##.#..#.....##',
    '........#.###....#.......##.#..',
    '....#.#..#..#.......#.#....#..#',
    '.#..#..#..#...##....#..#.....#.',
    '...#..#...#..........#........#',
    '...........##....#...##.#...###',
    '.##..#.......##.....##....#....',
    '...#.#..#..#..##..#.....##.....',
    '.#.....#..........#...#........',
    '.....#..#.#..#.................',
    '..#.......#..#.....##.......#..',
    '............##.##.....#...#....',
    '#......#......................#',
    '...#..........#...#...#..#.....',
    '......##..............##.##....',
    '................##......#.###..',
    '.###...#..........#...........#',
    '#....#...#.........##......#...',
    '.............#...............#.',
    '.###.....#......#...#.......#..',
    '......##..#.#.#.....#........#.',
    '..#.#..........#.#......##.....',
    '.#.#...#.#.....#.#..#.....#....',
    '.......#....#.#....##..........',
    '#.........#........####.#......',
    '...#..#.....#..............#.#.',
    '...#..........................#',
    '..##....#..#..........#....#...',
    '..##.##.#.#.#......#..#........',
    '...#..#.#.#..#........#.......#',
    '.....#.....#..#...#........##..',
    '..#..#...........#...##..##..#.',
    '#.....#.....#..#..##........#..',
    '...#..............#......#..#..',
    '...#.#...........###...#.#.....',
    '..........................#.#..',
    '....#........#..#..........#.#.',
    '.#..#..........#.#..........#..',
    '....#.........#......#.#....#..',
    '..#........#.................#.',
    '...#......#............#.......',
    '...#.#...#..##....#........#...',
    '......##.#....#.#......#.......',
    '........#..........#........#..',
    '###..#.....#...#......#...###..',
    '..##...#..###............#...#.',
    '#.......#..#..#............##..',
    '#........####......#...........',
    '#..#..#...........#.......####.',
    '......#..##................#...',
    '.....#..##......#.#...#..#.....',
    '......#.....##.....#.###.......',
    '.#.....#.........#.......#.#..#',
    '.##...........###...#....#...#.',
    '.#....#..#....#.##...#.........',
    '.................##............',
    '......#......#.............#...',
    '.........##.#........#....#...#',
    '..##....#.......#....##.#......',
    '.......#.#.#.....##..#.#.......',
    '......#.#.#.#......#...#.......',
    '....##...#.....#..#......#.....',
    '..............#......#.##......',
    '#.##..###........#.##........##',
    '#..#.........#.#......#.#......',
    '.#..###.......#................',
    '..............#...#..##.#.#....',
    '.....#..#........#...##.#...#..',
    '.#...##.....#........#..###.#..',
    '....#.....#...#........#.......',
    '....#.##.....#....#............',
    '#.#..#....#....#............#..',
    '....#....#...#.#...#...######..',
    '.##.........#..#.....#.....#...',
    '..##...............#...........',
    '........##...#........#..#.....',
    '...#................###.##..##.',
    '.#..#..#..#...#.............#..',
    '#.....#..##.#....#.#......#..#.',
    '...#...#...#.....#...#...#.....',
    '..##.###..#..#...##...........#',
    '.#.......##........#.#..#..#...',
    '..#.......#.###................',
    '..#...#........##...#..#......#',
    '...#...#............#.#......#.',
    '..#...#.....#.#.#.#........#...',
    '.#........#......##....##...#..',
    '...#..##....#.........#....#.#.',
    '....#........##...............#',
    '.###.....#...#..#.#.....#.....#',
    '..#...#..................#...##',
    '#..#....###....................',
    '...........#...#...........#...',
    '........#.....#................',
    '#........#...........#........#',
    '........#..#....#...#....#..#..',
    '#.#....#......#.......##.......',
    '.#.....##..#...#......#.#.#....',
    '..#..##.#.....#...#.#......#.#.',
    '.##....#...#....#......##......',
    '.#..#..#...##.##..#.#..#.......',
    '.....#.#...........#.#........#',
    '.#...#....#..................#.',
    '...........#...#.........#.....',
    '.#..###........##......#..#...#',
    '.............###..##.....#.#..#',
    '.#..#..........#......#........',
    '..#........#.#...#.......##.#..',
    '....#...........##......#...#..',
    '...........#....#.....#...#.#..',
    '...#...........#.....#.#..#..#.',
    '......#.......#................',
    '##.......#.....#............#.#',
    '.##.....#.#.#..................',
    '..........#.....##..#.#.#......',
    '.###.#.....##...#..#.#........#',
    '#....#........##..#..#.........',
    '.............#.........##..#...',
    '......##.#...#.#.#....##.......',
    '.#.......###.#.###..##........#',
    '..##.....#..#.............#..#.',
    '.#...#......#.#.............#..',
    '..##.#...#.........##....#...#.',
    '...........#......#.#..........',
    '.....#..#...##.....#....#..#...',
    '#...................##...#.....',
    '..#.................#.....#....',
    '..............#..#.#...###.....',
    '.......#........#...#.....#....',
    '.............#.......#...##..#.',
    '.#...#..#...#..#.....#......#.#',
    '....#..#..#...#...........#....',
    '.....#..#......##.##....#..#...',
    '...#......#..#.#...#.....#.....',
    '.......##..#.#.......#..#....##',
    '#.#..#....##.##.#.#..........#.',
    '..........#..........#....##.#.',
    '....#.................#...#..#.',
    '...#.....#..#...#.#...#..#.....',
    '....#.#..###....#.............#',
    '#....#..#.#..........#..#..#...',
    '...#..#......#...#...#...#...#.',
    '##....#.......#..........#.....',
    '#......#.........#...#.........',
    '##...##.#....#....#..#..#.#....',
    '....#..#.....#.##.#.......#.#..',
    '..##....##....#...#..####...#.#',
    '..##..........#.............#..',
    '..#......#..............#......',
    '...#......#..#.#...#.......#...',
    '.#............#....#...##.##..#',
    '..##..........#...........#..#.',
    '..#..##..#....#..#.#..#..#..#..'];

var tressMulty = 1;
var stepRight = [1, 3, 5, 7, 1];
var stepDown = [1, 1, 1, 1, 2];

stepRight.forEach((right, index) => {
    var sharps = 0;
    var rightStep = right;
    var downStep = stepDown[index];
    for (var i = 0; i < mapTrees.length; i++) {
        var j = downStep;
        var newMap = j && mapTrees[j] && mapTrees[j].repeat(i + 1);
        if (newMap && (newMap[rightStep] === '#')) {
            sharps += 1;
        }
        rightStep += right;
        downStep += stepDown[index];
    }
    tressMulty *= sharps;
});

console.log('tressMulty ', tressMulty);