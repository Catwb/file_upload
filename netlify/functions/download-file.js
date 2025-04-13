// netlify/functions/download-file.js
exports.handler = async (event) => {
    try {
      const filePath = `/tmp/uploaded-file.txt`;
      const fs = require('fs');
  
      // 检查文件是否存在
      if (!fs.existsSync(filePath)) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: '文件未找到' }),
        };
      }
  
      // 读取文件内容
      const fileData = fs.readFileSync(filePath);
  
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': 'attachment; filename="downloaded-file.txt"',
        },
        body: fileData.toString('base64'),
        isBase64Encoded: true,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  };