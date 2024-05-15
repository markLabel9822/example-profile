export const useProfile = () => {
  const getProfile = async () => {
    const response = {
      firstName: "John",
      lastName: "Adam",
      nickName: "soda",
    };
    return response;
  };

  return {
    getProfile,
  };
};
