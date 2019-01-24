const questionaireKeyDict = {
  brain: {
    RQ1A1: 25,
    RQ1A2: 15,
    RQ1A3: 5,
  },
  energy: {
    RQ2A1: 25,
    RQ2A2: 5,
    RQ2A3: 15,
  },
  freetime: {
    RQ3A1: 5,
    RQ3A2: 15,
    RQ3A3: 25,
  },
  health: {
    RQ4A1: 5,
    RQ4A2: 25,
    RQ4A3: 15,
  },
  money: {
    RQ5A1: 5,
    RQ5A2: 15,
    RQ5A3: 25,
  },
  socialvalue: {
    RQ6A1: 15,
    RQ6A2: 25,
    RQ6A3: 5,
  },
  willpower: {
    RQ7A1: 25,
    RQ7A2: 5,
    RQ7A3: 15,
  }
}


const questEvaluation = (results) => {
  const tobereduxed = {}
  Object.keys(results).map(key => {
    if (key in questionaireKeyDict) {
      Object.keys(questionaireKeyDict[key]).filter(subkey => {
        if (subkey === results[key]) {
          tobereduxed[key] = questionaireKeyDict[key][subkey]
        }
      })

    }
  }
  )
  return tobereduxed
}

export default questEvaluation