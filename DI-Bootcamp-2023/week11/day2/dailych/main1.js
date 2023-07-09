// const largenumber=365
// export{largenumber}

const getCurrentDateTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  };
  
  module.exports = getCurrentDateTime;
  