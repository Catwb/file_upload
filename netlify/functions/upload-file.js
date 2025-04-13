// netlify/functions/upload-file.js
exports.handler = async (event) => {
    try {
      const { body, isBase64Encoded } = event;
      const fileData = isBase64Encoded ? Buffer.from(body, 'base64') : Buffer.from(body);
  
      // 将文件保存到 Netlify 的临时存储
      const filePath = `/tmp/uploaded-file.txt`;
      await new Promise((resolve, reject) => {
        const fs = require('fs');
        fs.writeFile(filePath, fileData, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: '文件上传成功' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  };