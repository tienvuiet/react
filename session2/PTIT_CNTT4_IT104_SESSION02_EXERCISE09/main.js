const used = {
    name: "dev",
    age: 20,
    listMonHoc: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "Physics", score: 6 },
        { subject: "Literature", score: 8.5 },
    ]
}
const getStudentSummary = (student) => {
    const scores = student.listMonHoc;
    const avg = (scores.reduce((sum, subj) => sum + subj.score, 0) / scores.length).toFixed(2);
    const setRank = (avg) => {
        if (avg >= 8.5) return `hoc sinh gioi`
        else if (avg >= 7) return `hoc sinh kha`
        else if (avg >= 5) return `hoc sinh trung binh`
        else return `hoc sinh yeu`
    };
    const sortSubj = scores.sort((a, b) => b.score - a.score);
    const rankMax = sortSubj[0];
    const rankMin = sortSubj[sortSubj.length - 1];

    console.log(`
    ${student.name} is ${student.age} years old 
    Average score: ${avg} -> ${setRank(avg)}
    best subject: ${rankMax.subject} (${rankMax.score})
    Weakest subject: ${rankMin.subject} (${rankMin.score});
     `);

}
getStudentSummary(used);