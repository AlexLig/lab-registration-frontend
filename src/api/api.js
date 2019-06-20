async function fetchCall(method, url, body, fetchOptions) {
  return fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    ...fetchOptions
  });
}

async function apiCall(method, url, body, fetchOptions) {
  const res = await fetchCall(method, url, body, fetchOptions);
  const result = await res.json();
  return result.status && result.status >= 400
    ? { errorMessage: result.message }
    : { result };
}

export const login = async loginData =>
  await apiCall("POST", "/api/login", loginData);

export const postUserStudent = async student =>
  await apiCall("POST", "/api/register/student", student);

export const registerStudentToLab = async (labID, studentID) =>
  await apiCall("POST", `/api/labClasses/register/${labID}/${studentID}`);

export const postCourse = async course =>
  await apiCall("POST", "/api/courses", course);

export const postLab = async lab =>
  await apiCall("POST", "/api/labClasses", lab);

export const getStudentLabs = async studentID =>
  await apiCall("GET", `/api/labClasses/student/${studentID}`);

export const getAllCourses = async () => await apiCall("GET", "/api/courses");

export const getAllLabs = async () => await apiCall("GET", "/api/labClasses");

export const getCourseLabs = async courseID =>
  await apiCall("GET", `/api/courses/${courseID}/labs`);

export const getCourseFull = async courseID =>
  await apiCall("GET", `/api/courses/${courseID}`);

export const getLabFull = async labID =>
  await apiCall("GET", `/api/labClasses/${labID}`);

export const unregisterStudentFromLab = async (labID, studentID) =>
  await apiCall("DELETE", `/api/labClasses/register/${labID}/${studentID}`);
