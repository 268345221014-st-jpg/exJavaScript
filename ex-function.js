function showText(num) {
   if (num >= 75 && num <= 100) 
    {console.log
        ("สูง");
    } else if (num >= 35 && num <= 55) 
    {
        console.log("กลาง");
    } else if (num >= 10 && num <= 25) 
    {
        console.log("ต่ำ");
    } else {
    console.log("คุณไม่ได้อยู่ในช่วงคะแนนที่กำหนด");
}
}

showText(25);
// แสดงผลลัพธ์ "ต่ำ" เนื่องจากคะแนน 25 อยู่ในช่วง 10 ถึง 25