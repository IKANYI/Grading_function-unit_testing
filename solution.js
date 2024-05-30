function stemGrading(score) {
  if (score >= 70) {
    return "A";
  } else if (score >= 60 && score <= 69) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score >= 40 && score <= 49) {
    return "Pass";
  } else {
    return "Sup";
  }
}

function religiousGrading(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "Pass";
  } else {
    return "Sup";
  }
}

function languageGrading(score) {
  if (score >= 75 && score <= 100) {
    return "A";
  } else if (score >= 65 && score <= 74) {
    return "B";
  } else if (score >= 55 && score <= 64) {
    return "C";
  } else if (score >= 45 && score <= 54) {
    return "Pass";
  } else {
    return "Sup";
  }
}

function calculateGradeAndAverage(studentScores) {
  let totalScore = 0;
  let subjectCount = 0;
  const grades = { name: studentScores.name };

  for (const [subject, score] of Object.entries(studentScores)) {
    if (subject !== "name") {
      let grade;
      if (subject === "re") {
        grade = religiousGrading(score);
      } else if (subject === "comp" || subject === "kis" || subject === "eng") {
        grade = languageGrading(score);
      } else {
        grade = stemGrading(score);
      }
      grades[subject] = grade;
      totalScore += score;
      subjectCount++;
    }
  }

  const averageScore = totalScore / subjectCount;
  grades["average"] = Math.floor(averageScore) 

  return grades;
}

module.exports = {
  stemGrading,
  religiousGrading,
  languageGrading,
  calculateGradeAndAverage
};
