// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Link,
//   Card,
// } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: "2.5rem",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//   },
//   paper: {
//     padding: 30,
//     maxWidth: 400,
//     margin: "auto", // Center the Paper horizontally
//     textAlign: "center",
//   },
//     Box: {
//         display: "flex",
//         flexDirection: "column",
//         gap: 20,
//     },
// }));

// const SignupPage = () => {
//   const classes = useStyles();
//   return (
//     <Container className={classes.container}>
//       <Paper component={Card} elevation={3} className={classes.paper}>
//         <Typography variant="h4">Add Product</Typography>
//         <Box className={classes.Box}>
//           <TextField label="Product Name" variant="outlined" fullWidth />
//           <TextField label="Product Price" variant="outlined" fullWidth />
//           <TextField label="Product category" variant="outlined" fullWidth />
//           <TextField label="Product userId" variant="outlined" fullWidth />
//           <TextField label="Product company" variant="outlined" fullWidth />
//           <Button variant="contained" color="primary" fullWidth>Submit</Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };
// export default SignupPage;



import React, { useState } from 'react';
import { Button, Typography, Paper, Radio, RadioGroup, FormControl, FormControlLabel, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "Which technology would you like to learn?",
    options: [
      { id: 'web', label: 'Web Development' },
      { id: 'android', label: 'Android Development' },
      { id: 'english', label: 'English' },
    ],
  },
  {
    id: 2,
    question: "For web development, you have options:",
    options: [
      { id: 'frontend', label: 'Frontend' },
      { id: 'backend', label: 'Backend' },
    ],
    condition: (answers) => answers[0] === 'web',
  },
  {
    id: 3,
    question: "For backend development, which language do you prefer?",
    options: [
      { id: 'python', label: 'Python' },
      { id: 'javascript', label: 'JavaScript' },
      { id: 'nodejs', label: 'Node.js' },
    ],
    condition: (answers) => answers[1] === 'backend',
  },
  {
    id: 4,
    question: "In Python, which topic do you find interesting?",
    options: [
      { id: 'web_frameworks', label: 'Web Frameworks' },
      { id: 'data_science', label: 'Data Science' },
      { id: 'automation', label: 'Automation' },
    ],
    condition: (answers) => answers[2] === 'python',
  },
];
const Questionnaire = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 2) {
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("Survey Submitted. Answers:", answers);
      navigate('/python');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: "100px" }}>
      <div>
        <Typography variant="h6">{questions[questionIndex].question}</Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="options"
            name="options"
            value={answers[questionIndex]}
            onChange={(event) => handleAnswer(event.target.value)}
          >
            {questions[questionIndex].options.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button
            variant="contained"
            onClick={handleNext}
            style={{ width: '100%' }}
            disabled={!answers[questionIndex]}
          >
            {questionIndex === questions.length-2? "Submit" : "Next"}
          </Button>
        </Box>
      </div>
    </Paper>
  );
};

export default Questionnaire;










