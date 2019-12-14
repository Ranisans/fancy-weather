function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

const getDefaultPosition = async () => {
  try {
    const { coords } = await getCurrentPosition();
    const { latitude, longitude } = coords;

    return { latitude, longitude };
  } catch (error) {
    return { error };
  }
};

export default getDefaultPosition;
