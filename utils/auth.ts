export const saveJWT = (token: string) => {
  console.log("saving jwt");
  localStorage.setItem("authToken", token);
};
