// netlify/functions/generate-temp-link.js
exports.handler = async (event) => {
    try {
      // 模拟生成临时链接
      const tempLink = `${netlifySiteUrl}/.netlify/functions/download-file?expires=${Date.now() + 300000}`;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ url: tempLink }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  };