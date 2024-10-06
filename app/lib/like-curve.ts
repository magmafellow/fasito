export function getCurve(duration: number) {
  const coorArray = []
  for (let i = 0; i < 300; i++) {
    coorArray.push({ translateX: -(i*i)/50 * 0.2, duration })
    coorArray.push({ translateY: (i*i)/100 * 0.38, duration })
  }
  return coorArray
}
