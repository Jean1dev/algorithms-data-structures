function dynamicArray(n, queries) {
  let arrays = []
  let arrayLastAnswer = []
  let lastAnswer = 0

  for (let i = 0; i < n; i++) {
    arrays[i] = []
  }

  queries[0].forEach(query => {
    let x = query[1]
    let y = query[2]

    if (query[0] === 1) {
      let idx = ((x ^ lastAnswer) % n)
      arrays[idx].push(y)
    } else {
      let idx = ((x ^ lastAnswer) % n)
      let size = arrays[idx].length
      let element = arrays[idx][y % size]
      lastAnswer = element
      arrayLastAnswer.push(lastAnswer)
    }
  })


  return arrayLastAnswer
}

function main() {
  const n = 2

  const q = [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]

  let queries = Array(q);

  const result = dynamicArray(n, queries);
  console.log(result)
}

main()
