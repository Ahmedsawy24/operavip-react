document.addEventListener('DOMContentLoaded', () => {
    // عناصر DOM
    const checkBtn = document.getElementById('checkBtn');
    const noAvailabilityAlert = document.getElementById('noAvailabilityAlert');
    const reservationSuccess = document.getElementById('reservationSuccess');
    const availabilityTbody = document.getElementById('availabilityTbody');
    const reserveModalOverlay = document.getElementById('reserveModalOverlay');
    const reserveModalTitle = document.getElementById('reserveModalTitle');
    const reserveForm = document.getElementById('reserveForm');
    const reserveCancelBtn = document.getElementById('reserveCancelBtn');
    const reserveConfirmBtn = document.getElementById('reserveConfirmBtn');
  
    const modalArrivalDate = document.getElementById('modalArrivalDate');
    const modalDepartureDate = document.getElementById('modalDepartureDate');
  
    // مثال على حجز فعلي أو وهمي
    // يمكنك استبدال هذا بجلب البيانات من سيرفر أو API
    let roomsData = [
      { room: 101, type: 'Single', capacity: '1 Adult', rate: 100, status: 'Available' },
      { room: 202, type: 'Double', capacity: '2 Adults', rate: 150, status: 'Available' },
      { room: 303, type: 'Suite', capacity: '4 Adults', rate: 300, status: 'Booked' },
    ];
  
    // عند الضغط على زر Check Availability
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        // أخفِ رسائل التنبيه
        noAvailabilityAlert.style.display = 'none';
        reservationSuccess.style.display = 'none';
  
        // قم بقراءة التاريخ من حقول الإدخال (مثال)
        const arrivalDate = document.getElementById('arrivalDate').value;
        const departureDate = document.getElementById('departureDate').value;
  
        // مثال بسيط جدًا لفحص التواريخ
        if (!arrivalDate || !departureDate || arrivalDate >= departureDate) {
          alert('Please select valid arrival and departure dates.');
          return;
        }
  
        // قم بتفريغ الجدول
        availabilityTbody.innerHTML = '';
  
        // ابحث عن الغرف المتاحة (هنا مثال فقط، يمكنك تعديل المنطق حسب احتياجك)
        const availableRooms = roomsData.filter(r => r.status === 'Available');
  
        if (availableRooms.length === 0) {
          // لا توجد غرف متاحة
          noAvailabilityAlert.style.display = 'block';
        } else {
          // عرض الغرف المتاحة
          availableRooms.forEach(room => {
            const row = document.createElement('tr');
  
            const roomCell = document.createElement('td');
            roomCell.textContent = room.room;
            const typeCell = document.createElement('td');
            typeCell.textContent = room.type;
            const capCell = document.createElement('td');
            capCell.textContent = room.capacity;
            const rateCell = document.createElement('td');
            rateCell.textContent = `$${room.rate}`;
            const statusCell = document.createElement('td');
            statusCell.classList.add('status-available');
            statusCell.textContent = '✅ Available';
  
            const actionCell = document.createElement('td');
            const reserveBtn = document.createElement('button');
            reserveBtn.className = 'action-btn reserve-btn';
            reserveBtn.textContent = 'Reserve Now';
            reserveBtn.setAttribute('data-room', room.room);
            reserveBtn.setAttribute('data-roomtype', room.type);
            // إضافة الحدث
            reserveBtn.addEventListener('click', () => openReserveModal(room.room, room.type, arrivalDate, departureDate));
  
            actionCell.appendChild(reserveBtn);
  
            row.appendChild(roomCell);
            row.appendChild(typeCell);
            row.appendChild(capCell);
            row.appendChild(rateCell);
            row.appendChild(statusCell);
            row.appendChild(actionCell);
  
            availabilityTbody.appendChild(row);
          });
        }
      });
    }
  
    // فتح نافذة الحجز
    function openReserveModal(roomNumber, roomType, arrival, departure) {
      // أخفِ رسائل التنبيه
      noAvailabilityAlert.style.display = 'none';
      reservationSuccess.style.display = 'none';
  
      // تعبئة بيانات المودال
      reserveModalTitle.textContent = `Reserve Room - ${roomNumber} (${roomType})`;
      modalArrivalDate.value = arrival;
      modalDepartureDate.value = departure;
  
      // إظهار المودال
      reserveModalOverlay.style.display = 'flex';
    }
  
    // إغلاق نافذة الحجز
    if (reserveCancelBtn) {
      reserveCancelBtn.addEventListener('click', () => {
        reserveModalOverlay.style.display = 'none';
      });
    }
  
    // عند تأكيد الحجز
    if (reserveForm) {
      reserveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // هنا يمكنك إرسال البيانات إلى السيرفر أو API
        reserveModalOverlay.style.display = 'none';
        reservationSuccess.style.display = 'block';
      });
    }
  
    // إغلاق المودال عند النقر خارج النافذة
    reserveModalOverlay.addEventListener('click', (e) => {
      if (e.target === reserveModalOverlay) {
        reserveModalOverlay.style.display = 'none';
      }
    });
  
    // ترقيم الصفحات (مثال)
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
  