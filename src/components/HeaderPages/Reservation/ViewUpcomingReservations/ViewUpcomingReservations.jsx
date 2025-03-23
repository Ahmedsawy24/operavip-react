document.addEventListener('DOMContentLoaded', () => {
    // ====== تطبيق الفلاتر ======
    const applyFiltersBtn = document.getElementById('applyFiltersBtn');
    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener('click', () => {
        // يمكن هنا تنفيذ البحث / الفلاتر
        alert('Filters applied (demo only).');
      });
    }
  
    // ====== عرض تفاصيل الحجز ======
    const detailsBtns = document.querySelectorAll('.details-btn');
    const detailsModalOverlay = document.getElementById('detailsModalOverlay');
    const detailsModalClose = document.getElementById('detailsModalClose');
    const detailsModalTitle = document.getElementById('detailsModalTitle');
    const detailsModalContent = document.getElementById('detailsModalContent');
  
    detailsBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const bookingNumber = btn.getAttribute('data-booking');
        const guestName = btn.getAttribute('data-guest');
  
        // تعبئة بيانات المودال (مثال)
        detailsModalTitle.textContent = `Reservation Details - #${bookingNumber}`;
        detailsModalContent.innerHTML = `
          <p><strong>Guest Name:</strong> ${guestName}</p>
          <p><strong>Email:</strong> guest@example.com</p>
          <p><strong>Phone Number:</strong> 123456789</p>
          <p><strong>Arrival Date:</strong> 22-03-2025</p>
          <p><strong>Departure Date:</strong> 25-03-2025</p>
          <p><strong>Room Type:</strong> Single</p>
          <p><strong>Guests:</strong> 2 Adults, 0 Children</p>
          <p><strong>Booking Date:</strong> 10-03-2025</p>
          <p><strong>Payment Status:</strong> Paid</p>
          <p><strong>Special Requests:</strong> None</p>
        `;
  
        // إظهار المودال
        detailsModalOverlay.style.display = 'flex';
      });
    });
  
    // زر إغلاق مودال التفاصيل
    if (detailsModalClose) {
      detailsModalClose.addEventListener('click', () => {
        detailsModalOverlay.style.display = 'none';
      });
    }
    // إغلاق المودال عند النقر خارج النافذة
    detailsModalOverlay.addEventListener('click', (e) => {
      if (e.target === detailsModalOverlay) {
        detailsModalOverlay.style.display = 'none';
      }
    });
  
    // ====== نافذة Check-In ======
    const checkinBtns = document.querySelectorAll('.checkin-btn');
    const checkinModalOverlay = document.getElementById('checkinModalOverlay');
    const checkinCancelBtn = document.getElementById('checkinCancelBtn');
    const checkinConfirmBtn = document.getElementById('checkinConfirmBtn');
    const checkinModalTitle = document.getElementById('checkinModalTitle');
    const checkinRoomType = document.getElementById('checkinRoomType');
    const checkinStay = document.getElementById('checkinStay');
  
    checkinBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const bookingNumber = btn.getAttribute('data-booking');
        const guestName = btn.getAttribute('data-guest');
  
        // تعبئة بيانات المودال (مثال)
        checkinModalTitle.textContent = `Check-In Guest - ${guestName} (#${bookingNumber})`;
        checkinRoomType.textContent = 'Single';
        checkinStay.textContent = '22-03-2025 to 25-03-2025';
  
        // إظهار المودال
        checkinModalOverlay.style.display = 'flex';
      });
    });
  
    // إغلاق نافذة Check-In عند الضغط على زر Cancel
    if (checkinCancelBtn) {
      checkinCancelBtn.addEventListener('click', () => {
        checkinModalOverlay.style.display = 'none';
      });
    }
    // إغلاق المودال عند النقر خارج النافذة
    checkinModalOverlay.addEventListener('click', (e) => {
      if (e.target === checkinModalOverlay) {
        checkinModalOverlay.style.display = 'none';
      }
    });
  
    // تأكيد Check-In
    if (checkinConfirmBtn) {
      checkinConfirmBtn.addEventListener('click', () => {
        alert('Guest checked-in successfully!');
        checkinModalOverlay.style.display = 'none';
      });
    }
  
    // ====== مثال على أزرار الصفحات (Pagination) ======
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    if (prevPageBtn) {
      prevPageBtn.addEventListener('click', () => {
        alert('Go to previous page (demo).');
      });
    }
    if (nextPageBtn) {
      nextPageBtn.addEventListener('click', () => {
        alert('Go to next page (demo).');
      });
    }
  });
  