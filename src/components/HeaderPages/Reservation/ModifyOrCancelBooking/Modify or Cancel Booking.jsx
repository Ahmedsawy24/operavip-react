document.addEventListener('DOMContentLoaded', function() {

    // زر البحث (لأغراض تجريبية)
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
      searchBtn.addEventListener('click', function() {
        alert('Search functionality is not implemented in this demo.');
      });
    }
  
    // أزرار "Modify"
    const modifyButtons = document.querySelectorAll('.modify-btn');
    const modifyModalOverlay = document.getElementById('modifyModalOverlay');
    const modifyModalCancel = document.getElementById('modifyModalCancel');
    const modifyForm = document.getElementById('modifyForm');
    const modifyModalTitle = document.getElementById('modifyModalTitle');
  
    modifyButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const bookingNumber = btn.getAttribute('data-booking');
        const guestName = btn.getAttribute('data-guest');
  
        // مثال تعبئة الحقول (يمكنك جلب بيانات حقيقية من السيرفر)
        modifyModalTitle.textContent = `Modify Booking - #${bookingNumber}`;
        document.getElementById('modGuestName').value = guestName;
        document.getElementById('modEmail').value = "guest@example.com";
        document.getElementById('modPhone').value = "1234567890";
        document.getElementById('modArrival').value = "2025-03-15";
        document.getElementById('modDeparture').value = "2025-03-18";
        document.getElementById('modRoomType').value = "Double";
        document.getElementById('modNumRooms').value = "1";
        document.getElementById('modAdults').value = "2";
        document.getElementById('modChildren').value = "0";
        document.getElementById('modPayment').value = "Cash";
        document.getElementById('modRequests').value = "";
  
        // إظهار المودال
        modifyModalOverlay.style.display = 'flex';
      });
    });
  
    // إغلاق نافذة التعديل عند الضغط على زر Cancel
    if (modifyModalCancel) {
      modifyModalCancel.addEventListener('click', function() {
        modifyModalOverlay.style.display = 'none';
      });
    }
  
    // حفظ التعديلات عند الضغط على زر Save Changes
    if (modifyForm) {
      modifyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // هنا يمكنك تنفيذ حفظ البيانات في السيرفر
        alert('Booking modified successfully.');
        modifyModalOverlay.style.display = 'none';
      });
    }
  
    // أزرار "Cancel"
    const cancelButtons = document.querySelectorAll('.cancel-btn');
    const cancelModalOverlay = document.getElementById('cancelModalOverlay');
    const cancelModalText = document.getElementById('cancelModalText');
    const cancelModalNo = document.getElementById('cancelModalNo');
    const cancelModalYes = document.getElementById('cancelModalYes');
  
    cancelButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const bookingNumber = btn.getAttribute('data-booking');
        const guestName = btn.getAttribute('data-guest');
  
        // نص التأكيد
        cancelModalText.textContent = `Are you sure you want to cancel Booking #${bookingNumber} for ${guestName}?`;
  
        // إظهار المودال
        cancelModalOverlay.style.display = 'flex';
      });
    });
  
    // زر "No, Go Back"
    if (cancelModalNo) {
      cancelModalNo.addEventListener('click', function() {
        cancelModalOverlay.style.display = 'none';
      });
    }
  
    // زر "Yes, Cancel Booking"
    if (cancelModalYes) {
      cancelModalYes.addEventListener('click', function() {
        // هنا يمكنك تنفيذ إلغاء الحجز في السيرفر
        alert('Booking canceled successfully.');
        cancelModalOverlay.style.display = 'none';
      });
    }
  
  });
  