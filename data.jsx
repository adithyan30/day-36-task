db.users.insertMany([
  {
    userid: 1,
    name: "rithvik",
    email: "rithvik@gmail.com",
    mentorid: 1,
  },
  {
    userid: 2,
    name: "arun",
    email: "arun@gmail.com",
    mentorid: 2,
  },
  {
    userid: 3,
    name: "sekar",
    email: "sekar@gmail.com",
    mentorid: 3,
  },
  {
    userid: 4,
    name: "adithyan",
    email: "adithyan@gmail.com",
    mentorid: 4,
  },
  {
    userid: 5,
    name: "kumar",
    email: "kumar@gmail.com",
    mentorid: 5,
  },
]);


db.codekata.insertMany([
  {
    userid: 1,
    problems: 30,
  },
  {
    userid: 2,
    problems: 15,
  },
  {
    userid: 3,
    problems: 20,
  },
  {
    userid: 4,
    problems: 25,
  },
  {
    userid: 5,
    problems: 18,
  },
]);

db.topics.insertMany([
  {
    topicid: 1,
    topic: "html",
    topic_date: new Date("4-oct-2020"),
  },
  {
    topicid: 2,
    topic: "css",
    topic_date: new Date("10-oct-2020"),
  },
  {
    topicid: 3,
    topic: "Javascript",
    topic_date: new Date("15-oct-2020"),
  },
  {
    topicid: 4,
    topic: "React",
    topic_date: new Date("20-oct-2020"),
  },
  {
    topicid: 5,
    topic: "NodeJs",
    topic_date: new Date("25-oct-2020"),
  },
]);


db.tasks.insertMany([
  {
    taskid: 1,
    topicid: 1,
    userid: 1,
    task: "html task",
    due_date: new Date("4-oct-2020"),
    submitted: true,
  },
  {
    taskid: 2,
    topicid: 2,
    userid: 2,
    task: "css task",
    due_date: new Date("10-oct-2020"),
    submitted: true,
  },
  {
    taskid: 3,
    topicid: 3,
    userid: 3,
    task: "Javascript task",
    due_date: new Date("15-oct-2020"),
    submitted: false,
  },
  {
    taskid: 4,
    topicid: 4,
    userid: 4,
    task: "React task",
    due_date: new Date("20-oct-2020"),
    submitted: false,
  },
  {
    taskid: 5,
    topicid: 5,
    userid: 5,
    task: "Node task",
    due_date: new Date("25-oct-2020"),
    submitted: false,
  },
]);



db.attendance.insertMany([
  {
    userid: 1,
    topicid: 1,
    attended: true,
  },
  {
    userid: 2,
    topicid: 2,
    attended: true,
  },
  {
    userid: 3,
    topicid: 3,
    attended: false,
  },
  {
    userid: 4,
    topicid: 4,
    attended: false,
  },
  {
    userid: 5,
    topicid: 5,
    attended: false,
  },
]);

db.comapnydrives.insertMany([
  {
    userid: 1,
    drive_date: new Date("10-oct-2020"),
    company: "Google",
  },
  {
    userid: 1,
    drive_date: new Date("15-oct-2020"),
    company: "Amazon",
  },
  {
    userid: 2,
    drive_date: new Date("20-oct-2020"),
    company: "SAP labs",
  },
  {
    userid: 3,
    drive_date: new Date("25-oct-2020"),
    company: "Mac App studio",
  },
  {
    userid: 4,
    drive_date: new Date("27-oct-2020"),
    company: "Freshworks",
  },
]);


db.mentors.insertMany([
  {
    mentorid: 1,
    mentorname: "manikandan",
    mentor_email: "manikandan@gmail.com",
  },
  {
    mentorid: 2,
    mentorname: "Sriram",
    mentor_email: "sriram@gmail.com",
  },
  {
    mentorid: 3,
    mentorname: "suburamani",
    mentor_email: "suburamani@gmail.com",
  },
  {
    mentorid: 4,
    mentorname: "arunkumar",
    mentor_email: "arunkumar@gmail.com",
  },
  {
    mentorid: 5,
    mentorname: "balaji",
    mentor_email: "balaji@gmail.com",
  },
]);
