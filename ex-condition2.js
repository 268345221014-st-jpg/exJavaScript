let score = 9;

if (score >= 75 && score <= 100) 
    {console.log
        ("สูง");
} else if (score >= 35 && score < 55) 
    {
        console.log("กลาง");
} else if (score >= 10 && score < 25) 
    {
        console.log("ต่ำ");
} else {
    console.log("คุณไม่ได้อยู่ในช่วงคะแนนที่กำหนด");
}
// แสดงผลลัพธ์ "คุณไม่ได้อยู่ในช่วงคะแนนที่กำหนด" เนื่องจากคะแนน 9 ไม่อยู่ในช่วงที่กำหนดไว้ในเงื่อนไขใดๆ