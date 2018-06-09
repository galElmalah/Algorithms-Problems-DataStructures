function isSolveAble(i, j, i2, j2, maze){
  // order of checking right -> down -> left -> up
  // the maze is represnted by a matrix of ones and zeros.
  if(i === i2 && j === j2){
    if(maze[i][j] === 1){
      return true
    }
  }
  if(maze[i][j] === 1){
    // Flag the cell as visited
    maze[i][j] = 10
    if( j < maze.length - 1 ){
      if(isSolveAble(i, j+1, i2, j2, maze)){
        return true
      }
    }
    if( i < maze.length - 1 ){
      if(isSolveAble(i+1, j, i2, j2, maze)){
        return true
      }
    }
    if( j > 0 ){
      if(isSolveAble(i, j-1, i2, j2, maze)){
        return true
      }
    }
    if( i > 0){
      if(isSolveAble(i - 1, j, i2, j2, maze)){
        return true
      }
    }
  }
  return false
}