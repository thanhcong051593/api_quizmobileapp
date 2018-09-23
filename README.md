# api_quizmobileapp
- API câu hỏi và đáp án

### 1. Cài đăt chạy api local
    B1: clone code từ github
    B2: truy cập vào thư mục root của ứng dụng api
    B3: gõ lệnh cmd "npm install"
    B4: gõ lệnh cmd "npm start"
    B5: truy cập vào "http://localhost:3000" để kiểm tra cài đặt thành công hay chưa

### 2. api lấy list câu hỏi và option 
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
    
    
 ### 3. api kiểm tra câu trả lời 
 - request tới uri: http://localhost:3000/answer?question=question1&option=option2
 - method: GET
 - response: trả về 1 json có dạng sau

          {
            statusCode: 200,
            message: "Success",
            question: "question1",
            option: "option2",
            correct: true
          }
 ### 4. Truy cập api online
        - http://13.250.122.56:3000/questions
        - http://13.250.122.56:3000/answer?question=question1&option=option2
      
  
    
      
