async function get(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
}
async function post(url, body) {
  return fetch(url, {
    method: "POST",
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
async function del(url) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
}

async function responseBuilder(apiCallBack) {
  const res = await apiCallBack();
  const result = await res.json();
  return result.status && result.status >= 400
    ? { errorMessage: result.message }
    : { result };
}

export const login = async loginData =>
  await responseBuilder(() => post("/api/login", loginData));

export const postUserStudent = async student =>
  await responseBuilder(() => post("/api/register/student", student));

export const registerStudentToLab = async (labID, studentID) =>
  await responseBuilder(() =>
    post(`/api/labClasses/register/${labID}/${studentID}`)
  );

export const postCourse = async course =>
  await responseBuilder(() => post("/api/courses", course));

export const postLab = async lab =>
  await responseBuilder(() => post("/api/labClasses", lab));

export const getStudentLabs = async studentID =>
  await responseBuilder(() => get(`/api/labClasses/student/${studentID}`));

export const getAllCourses = async () =>
  await responseBuilder(() => get("/api/courses"));

export const getAllLabs = async () =>
  await responseBuilder(() => get("/api/labClasses"));

export const getCourseLabs = async courseID =>
  await responseBuilder(() => get(`/api/courses/${courseID}/labs`));

export const getCourseFull = async courseID =>
  await responseBuilder(() => get(`/api/courses/${courseID}`));

export const getLabFull = async labID =>
  await responseBuilder(() => get(`/api/labClasses/${labID}`));

export const unregisterStudentFromLab = async (labID, studentID) =>
  await responseBuilder(() =>
    del(`/api/labClasses/register/${labID}/${studentID}`)
  );
