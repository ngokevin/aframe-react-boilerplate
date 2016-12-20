const radius = 2
const diameter = radius*2
const circumference = diameter*Math.PI

export function circularPositionFromIndex(index, boxSize) {
  let itemsPerCircle = Math.floor(circumference/(boxSize*2)) // Distance between boxes = box size
  let radiansPerIndex = (Math.PI*2)/itemsPerCircle // Javascript sinus and cosinus uses radians, not degrees

  let yIndex = Math.floor(index/itemsPerCircle)
  let y = yIndex % 2 === 0 ? (yIndex*boxSize)*-1 : Math.ceil(yIndex*boxSize)

  let circleIndex = index % itemsPerCircle
  let angle = circleIndex * radiansPerIndex
  let x = 0 + Math.sin(angle)*radius
  let z = 0 + Math.cos(angle)*radius

  return {x, y , z}
}