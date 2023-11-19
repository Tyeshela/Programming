class Crew {
    constructor(leaderName) {
      this.leaderName = leaderName;
      this.students = [];
      this.homework = {};
      this.attendance = {};
    }
  
    addStudent(studentName) {
      this.students.push(studentName);
    }
  
    completeHomework(studentName, assignment) {
      if (!this.homework[studentName]) {
        this.homework[studentName] = [];
      }
      this.homework[studentName].push(assignment);
    }
  
    markAttendance(date, presentStudents) {
      this.attendance[date] = presentStudents;
    }
  
    displayCrewInfo() {
      console.log(`Crew Leader: ${this.leaderName}`);
      console.log('Students:');
      this.students.forEach((student) => {
        console.log(`- ${student}`);
      });
      console.log('Homework:');
      for (const student in this.homework) {
        console.log(`- ${student}: ${this.homework[student].join(', ')}`);
      }
      console.log('Attendance:');
      for (const date in this.attendance) {
        console.log(`- ${date}: ${this.attendance[date].join(', ')}`);
      }
    }
  }
  
  // Create instances for CrewSoso and CrewTyeshela
  const CrewSoso = new Crew('Soso');
  const CrewTyeshela = new Crew('Tyeshela');
  
  // Add students to CrewSoso
  CrewSoso.addStudent('Lasha Lomidze');
  CrewSoso.addStudent('Nika Giorgadze');
  CrewSoso.addStudent('Giorgi Kapanadze JR');
  CrewSoso.addStudent('Levan Tsakadze');
  CrewSoso.addStudent('Saba Mgeliashvili');
  CrewSoso.addStudent('Gio Jintcharadze');
  
  // Add students to CrewTyeshela
  CrewTyeshela.addStudent('Soso Valishvili');
  CrewTyeshela.addStudent('Andria Skhirtladze');
  CrewTyeshela.addStudent('Gika Gelashvili');
  CrewTyeshela.addStudent('Giorgi Qimeridze');
  CrewTyeshela.addStudent('Giorgi Kapanadze');
  
  // Have some students complete homework
  CrewSoso.completeHomework('Lasha Lomidze', 'JavaScript Basics');
  CrewSoso.completeHomework('Nika Giorgadze', 'Arrays and Loops');
  CrewSoso.completeHomework('Levan Tsakadze', 'Functions and Objects');
  
  CrewTyeshela.completeHomework('Soso Valishvili', 'HTML Basics');
  CrewTyeshela.completeHomework('Gika Gelashvili', 'CSS Styling');
  CrewTyeshela.completeHomework('Giorgi Qimeridze', 'Responsive Design');
  
  // Mark attendance for some dates
  CrewSoso.markAttendance('2023-10-25', ['Lasha Lomidze', 'Nika Giorgadze', 'Giorgi Kapanadze JR']);
  CrewSoso.markAttendance('2023-10-26', ['Lasha Lomidze', 'Saba Mgeliashvili', 'Gio Jintcharadze']);
  
  CrewTyeshela.markAttendance('2023-10-25', ['Soso Valishvili', 'Andria Skhirtladze', 'Giorgi Kapanadze']);
  CrewTyeshela.markAttendance('2023-10-26', ['Soso Valishvili', 'Gika Gelashvili', 'Giorgi Qimeridze']);
  
  // Display crew information
  console.log('CrewSoso Information:');
  CrewSoso.displayCrewInfo();
  
  console.log('\nCrewTyeshela Information:');
  CrewTyeshela.displayCrewInfo();
  