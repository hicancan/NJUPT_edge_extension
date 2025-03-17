import React, { useState } from 'react';

const GpaCalculator = () => {
    const [grades, setGrades] = useState([{ course: '', credit: '', grade: '' }]);
    const [gpa, setGpa] = useState(null);

    const handleGradeChange = (index, event) => {
        const newGrades = [...grades];
        newGrades[index][event.target.name] = event.target.value;
        setGrades(newGrades);
    };

    const addGrade = () => {
        setGrades([...grades, { course: '', credit: '', grade: '' }]);
    };

    const calculateGpa = () => {
        let totalPoints = 0;
        let totalCredits = 0;

        grades.forEach(({ credit, grade }) => {
            const creditValue = parseFloat(credit);
            const gradeValue = parseFloat(grade);
            if (creditValue && gradeValue) {
                totalPoints += creditValue * gradeValue;
                totalCredits += creditValue;
            }
        });

        setGpa(totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0);
    };

    return (
        <div>
            <h2>GPA 计算器</h2>
            {grades.map((grade, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="course"
                        placeholder="课程名称"
                        value={grade.course}
                        onChange={(event) => handleGradeChange(index, event)}
                    />
                    <input
                        type="number"
                        name="credit"
                        placeholder="学分"
                        value={grade.credit}
                        onChange={(event) => handleGradeChange(index, event)}
                    />
                    <input
                        type="number"
                        name="grade"
                        placeholder="成绩"
                        value={grade.grade}
                        onChange={(event) => handleGradeChange(index, event)}
                    />
                </div>
            ))}
            <button onClick={addGrade}>添加课程</button>
            <button onClick={calculateGpa}>计算GPA</button>
            {gpa !== null && <h3>您的GPA是: {gpa}</h3>}
        </div>
    );
};

export default GpaCalculator;