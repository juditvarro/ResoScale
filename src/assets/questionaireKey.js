const questionaireKeyDict = {
  brain: {
    RQ1A1: 5,
    RQ1A2: 15,
    RQ1A3: 25,
  },
  energy: {
    RQ2A1: 5,
    RQ2A2: 15,
    RQ2A3: 25,
  },
  freetime: {
    RQ3A1: 5,
    RQ3A2: 15,
    RQ3A3: 25,
  },
  health: {
    RQ4A1: 5,
    RQ4A2: 15,
    RQ4A3: 25,
  },
  money: {
    RQ5A1: 5,
    RQ5A2: 15,
    RQ5A3: 25,
  },
  socialvalue: {
    RQ6A1: 5,
    RQ6A2: 15,
    RQ6A3: 25,
  },
  willpower: {
    RQ7A1: 5,
    RQ7A2: 15,
    RQ7A3: 25,
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