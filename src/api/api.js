export async function postUserStudent(student) {
  return fetch("/api/register/student", {
    method: "POST",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json"
    }
  });
}
export async function login(loginData) {
  return fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export async function getStudentLabs(studentID) {
  return fetch(`/api/labClasses/student/${studentID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
}
export async function getAllCourses() {
  return fetch("/api/courses", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
}
export async function getCourseLabs(courseID) {
  return fetch(`/api/courses/${courseID}/labs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export async function unregisterStudentFromLab(labID, studentID) {
  return fetch(`/api/labClasses/register/${labID}/${studentID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
}
export async function registerStudentToLab(labID, studentID) {
  return fetch(`/api/labClasses/register/${labID}/${studentID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });
}
