document.addEventListener('DOMContentLoaded', () => {
  // ====== 1. Check Room Availability ======
  const searchRoomsBtn = document.getElementById('searchRoomsBtn');
  const resetAvailabilityBtn = document.getElementById('resetAvailabilityBtn');
  const roomsListSection = document.getElementById('roomsListSection');
  const roomsTbody = document.getElementById('roomsTbody');

  searchRoomsBtn.addEventListener('click', () => {
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    if (!checkInDate || !checkOutDate || checkOutDate < checkInDate) {
      alert("⚠️ Please select a valid check-in/check-out date range.");
      return;
    }
    // منطق البحث عن الغرف المتاحة (AJAX/Fetch)
    alert("Searching for available rooms (demo).");

    // عرض قسم الغرف المتاحة (Demo)
    roomsListSection.style.display = 'block';
    // ملء الجدول (Demo)
    roomsTbody.innerHTML = `
      <tr>
        <td>101</td>
        <td>Deluxe Room</td>
        <td>2 Adults</td>
        <td>$200.00</td>
        <td>🟢 Available</td>
        <td><button class="action-btn select-room-btn">Select</button></td>
      </tr>
      <tr>
        <td>205</td>
        <td>Standard Room</td>
        <td>1 Adult</td>
        <td>$150.00</td>
        <td>🟢 Available</td>
        <td><button class="action-btn select-room-btn">Select</button></td>
      </tr>
    `;
  });

  resetAvailabilityBtn.addEventListener('click', () => {
    document.getElementById('availabilityForm').reset();
    roomsListSection.style.display = 'none';
    alert("Room availability search reset (demo).");
  });

  // ====== 2. Select a Room ======
  roomsTbody.addEventListener('click', (e) => {
    if (e.target.classList.contains('select-room-btn')) {
      const row = e.target.parentNode.parentNode;
      alert(`Room selected: ${row.cells[0].textContent} (demo).`);
      // بعد اختيار الغرفة ننتقل لقسم Guest Details
      document.getElementById('guestDetailsSection').style.display = 'block';
    }
  });

  // ====== 3. Guest Details ======
  const saveGuestDetailsBtn = document.getElementById('saveGuestDetailsBtn');
  const guestDetailsSection = document.getElementById('guestDetailsSection');
  const paymentSection = document.getElementById('paymentSection');

  saveGuestDetailsBtn.addEventListener('click', () => {
    // تحقق من بيانات النزيل (Demo)
    const guestName = document.getElementById('guestName').value.trim();
    if (!guestName) {
      alert("⚠️ Please fill all required guest details (Guest Name).");
      return;
    }
    alert("Guest details saved (demo).");
    // بعد حفظ بيانات النزيل نعرض قسم Payment
    paymentSection.style.display = 'block';
  });

  // ====== 4. Payment & Deposit ======
  const processPaymentBtn = document.getElementById('processPaymentBtn');
  const payOnCheckInBtn = document.getElementById('payOnCheckInBtn');
  const reviewSection = document.getElementById('reviewSection');

  processPaymentBtn.addEventListener('click', () => {
    // تحقق من مبلغ الدفع (Demo)
    alert("✅ Payment processed (demo).");
    // بعد الدفع نعرض قسم Review
    reviewSection.style.display = 'block';
  });

  payOnCheckInBtn.addEventListener('click', () => {
    alert("🕒 Payment will be made on check-in (demo).");
    reviewSection.style.display = 'block';
  });

  // ====== 5. Review & Confirm ======
  const confirmReservationBtn = document.getElementById('confirmReservationBtn');
  const sendConfirmationBtn = document.getElementById('sendConfirmationBtn');
  const editReservationBtn = document.getElementById('editReservationBtn');

  confirmReservationBtn.addEventListener('click', () => {
    alert("🎟 Reservation confirmed (demo).");
  });

  sendConfirmationBtn.addEventListener('click', () => {
    alert("📧 Confirmation email sent (demo).");
  });

  editReservationBtn.addEventListener('click', () => {
    alert("✏️ Edit reservation details (demo).");
    // يمكنك إعادة المستخدم لأقسام سابقة للتعديل
  });
});
