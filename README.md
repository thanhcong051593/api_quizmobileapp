# api_quizmobileapp
- API câu hỏi và đáp án

## Cài đăt chạy local
- chạy lênh sau: npm start

### api lấy list câu hỏi và option 
- request tới uri: http://localhost:3000/questions
- method: GET
- response: trả về  1 json có dạng sau 
    
    {
      statusCode: 200,
      message: "Success",
      data: {
        ...
      }
    
    }
    
    
 ### api kiểm tra câu trả lời 
 - request tới uri: http://localhost:3000/answer?question=cauhoi&option=cautraloi
 - method: GET
 - response: trả về 1 json có dạng sau
 
      {
        statusCode: 200,
        message: "Success",
        question: "cauhoi",
        option: "cautraloi",
        correct: true
      }
      
  ### Chú ý: các bạn có thể thay uri 
    http://localhost:3000/questions thành http://cungnhauhoc.online/questions
    http://localhost:3000/answer?question=cauhoi&option=cautraloi thành http://cungnhauhoc.online/answer?question=cauhoi&option=cautraloi
      
