exports.countExecTime = function (cllbck) {
  let startTime = performance.now()
  console.log(cllbck())
  let endTime = performance.now()
  console.log(`it took around ${endTime - startTime} ms to run`)
}