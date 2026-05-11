// ============================================================
//  Room Area Calculator — script.js
//  ใช้ Function Declaration และ Arrow Function
// ============================================================


// ── ฟังก์ชันคำนวณพื้นที่แบบ Function Declaration ─────────────────
function calculateArea(width, height) {
  let area = width * height;
  return area;
}

// ── ฟังก์ชันคำนวณแบบ Arrow Function ─────────────────────────────
const multiply = (a, b) => a * b;


// ── เก็บโค้ดข้อความธรรมดาไว้สำหรับปุ่ม Copy ─────────────────────
let plainCodeText = "";


// ── สร้าง HTML ของโค้ดพร้อม Syntax Highlight ─────────────────────
function buildCodeHTML(wA, hA, wB, hB, roomA, roomB) {
  return [
    `<span class="cm">// ── Function Declaration ──────────────────────────</span>`,
    `<span class="kw">function</span> <span class="fn">calculateArea</span>(width, height) {`,
    `  <span class="kw">let</span> <span class="vr">area</span> = width * height;`,
    `  <span class="kw">return</span> <span class="vr">area</span>;`,
    `}`,
    ``,
    `<span class="cm">// ── Arrow Function ────────────────────────────────</span>`,
    `<span class="kw">const</span> <span class="fn">multiply</span> = (a, b) => a * b;`,
    ``,
    `<span class="cm">// ── เรียกใช้งาน ───────────────────────────────────</span>`,
    `<span class="kw">let</span> <span class="vr">roomA</span> = <span class="fn">calculateArea</span>(<span class="num">${wA}</span>, <span class="num">${hA}</span>);`,
    `<span class="kw">let</span> <span class="vr">roomB</span> = <span class="fn">multiply</span>(<span class="num">${wB}</span>, <span class="num">${hB}</span>);`,
    ``,
    `<span class="fn">console</span>.log(<span class="str">"พื้นที่ห้อง A = "</span> + <span class="vr">roomA</span>); <span class="cm">// ${roomA}</span>`,
    `<span class="fn">console</span>.log(<span class="str">"พื้นที่ห้อง B = "</span> + <span class="vr">roomB</span>); <span class="cm">// ${roomB}</span>`,
  ].join("\n");
}


// ── สร้างโค้ดข้อความธรรมดาสำหรับ Copy ───────────────────────────
function buildCodePlain(wA, hA, wB, hB, roomA, roomB) {
  return `// ── Function Declaration ──────────────────────────
function calculateArea(width, height) {
  let area = width * height;
  return area;
}

// ── Arrow Function ────────────────────────────────
const multiply = (a, b) => a * b;

// ── เรียกใช้งาน ───────────────────────────────────
let roomA = calculateArea(${wA}, ${hA});
let roomB = multiply(${wB}, ${hB});

console.log("พื้นที่ห้อง A = " + roomA); // ${roomA}
console.log("พื้นที่ห้อง B = " + roomB); // ${roomB}`;
}


// ── แสดง Error ในกล่องผลลัพธ์ ────────────────────────────────────
function showError(elementId, message) {
  const el = document.getElementById(elementId);
  el.innerHTML = `<span class="error">⚠ ${message}</span>`;
  el.classList.remove("has-value");
}


// ── แสดงผลลัพธ์ในกล่อง ───────────────────────────────────────────
function showResult(elementId, label, value, unit) {
  const el = document.getElementById(elementId);
  el.innerHTML = `${label} = <span class="area-num">${value}</span> ${unit}`;
  el.classList.add("has-value");
}


// ── ฟังก์ชันหลัก: คำนวณและแสดงผล ────────────────────────────────
function calculate() {
  const wA = parseFloat(document.getElementById("widthA").value);
  const hA = parseFloat(document.getElementById("heightA").value);
  const wB = parseFloat(document.getElementById("widthB").value);
  const hB = parseFloat(document.getElementById("heightB").value);

  let valid = true;

  // ตรวจสอบ input ห้อง A
  if (!wA || !hA || wA <= 0 || hA <= 0) {
    showError("resultA", "กรุณากรอกขนาดห้อง A ให้ถูกต้อง");
    valid = false;
  }

  // ตรวจสอบ input ห้อง B
  if (!wB || !hB || wB <= 0 || hB <= 0) {
    showError("resultB", "กรุณากรอกขนาดห้อง B ให้ถูกต้อง");
    valid = false;
  }

  if (!valid) {
    document.getElementById("summary").classList.remove("show");
    document.getElementById("codeSection").classList.remove("show");
    return;
  }

  // คำนวณพื้นที่ด้วยฟังก์ชัน
  const roomA = parseFloat(calculateArea(wA, hA).toFixed(2));
  const roomB = parseFloat(multiply(wB, hB).toFixed(2));
  const total  = (roomA + roomB).toFixed(2);

  // แสดงผลในกล่องของแต่ละห้อง
  showResult("resultA", "พื้นที่ห้อง A", roomA, "ตารางเมตร");
  showResult("resultB", "พื้นที่ห้อง B", roomB, "ตารางเมตร");

  // อัปเดต Summary
  document.getElementById("sumA").textContent    = roomA;
  document.getElementById("sumB").textContent    = roomB;
  document.getElementById("sumTotal").textContent = total + " ตร.ม.";
  document.getElementById("summary").classList.add("show");

  // แสดง Code Block พร้อม syntax highlight
  document.getElementById("codeDisplay").innerHTML = buildCodeHTML(wA, hA, wB, hB, roomA, roomB);
  plainCodeText = buildCodePlain(wA, hA, wB, hB, roomA, roomB);
  document.getElementById("codeSection").classList.add("show");
}


// ── ฟังก์ชัน Copy โค้ด ───────────────────────────────────────────
function copyCode() {
  if (!plainCodeText) return;

  navigator.clipboard.writeText(plainCodeText).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.textContent = "✅ คัดลอกแล้ว!";
    setTimeout(() => {
      btn.textContent = "📋 คัดลอก";
    }, 2000);
  });
}


// ── Event Listeners ──────────────────────────────────────────────
document.getElementById("calcBtn").addEventListener("click", calculate);
document.getElementById("copyBtn").addEventListener("click", copyCode);

// กด Enter เพื่อคำนวณ
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calculate();
  }
});
