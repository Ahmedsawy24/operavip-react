document.addEventListener('DOMContentLoaded', () => {
    // عناصر DOM
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const noResultsAlert = document.getElementById('noResultsAlert');
    const successMessage = document.getElementById('successMessage');
    const resultsTbody = document.getElementById('resultsTbody');
  
    // المودالات
    const checkinModalOverlay = document.getElementById('checkinModalOverlay');
    const checkinModal = document.getElementById('checkinModal');
    const checkinModalTitle = document.getElementById('checkinModalTitle');
    const checkinGuestName = document.getElementById('checkinGuestName');
    const checkinArrivalDate = document.getElementById('checkinArrivalDate');
    const checkinDepartureDate = document.getElementById('checkinDepartureDate');
    const checkinRoomNumber = document.getElementById('checkinRoomNumber');
    const checkinGuestsCount = document.getElementById('checkinGuestsCount');
    const checkinPaymentMethod = document.getElementById('checkinPaymentMethod');
    const advancePayment = document.getElementById('advancePayment');
    const roomKeyCards = document.getElementById('roomKeyCards');
    const checkinRequests = document.getElementById('checkinRequests');
    const checkinCancelBtn = document.getElementById('checkinCancelBtn');
    const checkinConfirmBtn = document.getElementById('checkinConfirmBtn');
  
    const assignModalOverlay = document.getElementById('assignModalOverlay');
    const assignModal = document.getElementById('assignModal');
    const assignModalTitle = document.getElementById('assignModalTitle');
    const availableRooms = document.getElementById('availableRooms');
    const assignRoomType = document.getElementById('assignRoomType');
    const assignRoomRate = document.getElementById('assignRoomRate');
    const assignCancelBtn = document.getElementById('assignCancelBtn');
    const assignConfirmBtn = document.getElementById('assignConfirmBtn');
  
    // بيانات وهمية للحجوزات (يمكنك استبدالها بجلب البيانات من السيرفر)
    let reservationsData = [
      {
        id: "230101",
        guestName: "Abdullah Alhammami",
        arrival: "10-04-2025",
        departure: "15-04-2025",
        roomNumber: "101",
        roomType: "Single",
        status: "Reserved",
        adults: 1,
        children: 0
      },
      {
        id: "230102",
        guestName: "Ahmed Sami",
        arrival: "11-04-2025",
        departure: "12-04-2025",
        roomNumber: "105",
        roomType: "Double",
        status: "Checked-in",
        adults: 2,
        children: 0
      },
      {
        id: "230103",
        guestName: "Safa Emad",
        arrival: "11-04-2025",
        departure: "15-04-2025",
        roomNumber: "Not Assigned",
        roomType: "Suite",
        status: "Pending",
        adults: 2,
        children: 1
      }
    ];
  
    // دوال مساعدة
    function showNoResultsAlert() {
      noResultsAlert.style.display = 'block';
    }
    function hideNoResultsAlert() {
      noResultsAlert.style.display = 'none';
    }
    function showSuccessMessage(msg) {
      successMessage.textContent = msg;
      successMessage.style.display = 'block';
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    }
  
    // عرض البيانات في الجدول
    function renderTable(data) {
      resultsTbody.innerHTML = '';
      data.forEach(res => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${res.id}</td>
          <td>${res.guestName}</td>
          <td>${res.arrival}</td>
          <td>${res.departure}</td>
          <td>${res.roomNumber}</td>
          <td>${res.roomType}</td>
          <td class="status-${res.status.toLowerCase().replace(/ /g, '')}">
            ${res.status === "Checked-in" ? "✅ Checked-in"
               : res.status === "Pending" ? "⏳ Pending"
               : res.status === "Cancelled" ? "❌ Cancelled"
               : res.status === "Reserved" ? "✅ Reserved"
               : res.status}
          </td>
          <td>
            ${res.status === "Reserved" ? `<button class="action-btn checkin-btn" data-id="${res.id}">Check-In</button>` : ""}
            ${res.status === "Checked-in" ? `<button class="action-btn details-btn" data-id="${res.id}">View Details</button>` : ""}
            ${res.status === "Pending" ? `<button class="action-btn assign-btn" data-id="${res.id}">Assign Room</button>` : ""}
          </td>
        `;
        resultsTbody.appendChild(row);
      });
      if (data.length === 0) {
        showNoResultsAlert();
      } else {
        hideNoResultsAlert();
      }
    }
  
    // تحميل البيانات الافتراضية في الجدول
    renderTable(reservationsData);
  
    // ===== Search Functionality (Demo) =====
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        hideNoResultsAlert();
        const query = searchInput.value.toLowerCase().trim();
        if (!query) {
          // إذا البحث فارغ، نعرض كل البيانات
          renderTable(reservationsData);
          return;
        }
        const filtered = reservationsData.filter(res => {
          return (
            res.id.toLowerCase().includes(query) ||
            res.guestName.toLowerCase().includes(query) ||
            res.roomNumber.toLowerCase().includes(query)
          );
        });
        renderTable(filtered);
      });
    }
  
    // ====== إغلاق المودال عند النقر خارجها ======
    function closeModalOnOverlayClick(overlay, modal) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    }
    closeModalOnOverlayClick(checkinModalOverlay, checkinModal);
    closeModalOnOverlayClick(assignModalOverlay, assignModal);
  
    // ====== Check-In Modal Logic ======
    function openCheckInModal(reservation) {
      checkinModalTitle.textContent = `🔑 Guest Check-In - ${reservation.guestName} (${reservation.roomNumber})`;
      checkinGuestName.textContent = reservation.guestName;
      checkinArrivalDate.textContent = reservation.arrival;
      checkinDepartureDate.textContent = reservation.departure;
      checkinRoomNumber.textContent = reservation.roomNumber;
      checkinGuestsCount.textContent = `${reservation.adults} Adults, ${reservation.children} Children`;
  
      // Reset fields
      checkinPaymentMethod.value = "Cash";
      advancePayment.value = "";
      roomKeyCards.value = "";
      checkinRequests.value = "";
  
      checkinModalOverlay.style.display = 'flex';
    }
  
    // فتح Check-In Modal
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('checkin-btn')) {
        const id = e.target.getAttribute('data-id');
        const reservation = reservationsData.find(r => r.id === id);
        if (reservation) {
          openCheckInModal(reservation);
        }
      }
    });
  
    // زر Cancel في Check-In Modal
    checkinCancelBtn.addEventListener('click', () => {
      checkinModalOverlay.style.display = 'none';
    });
  
    // زر Confirm في Check-In Modal
    checkinConfirmBtn.addEventListener('click', () => {
      // حدث check-in
      const id = checkinModalTitle.textContent.match(/\d+/)[0]; // يستخرج أول رقم (230101 مثلاً)
      const reservation = reservationsData.find(r => r.id.includes(id));
      if (reservation) {
        reservation.status = "Checked-in";
        // يمكنك تخزين بيانات check-in مثل advancePayment, roomKeyCards, إلخ...
        showSuccessMessage("✅ Guest Checked-In Successfully!");
        renderTable(reservationsData);
      }
      checkinModalOverlay.style.display = 'none';
    });
  
    // ====== Assign Room Modal Logic ======
    function openAssignModal(reservation) {
      assignModalTitle.textContent = `Assign Room - ${reservation.guestName}`;
      // استعادة القيم الافتراضية
      availableRooms.value = "";
      assignRoomType.textContent = reservation.roomType;
      assignRoomRate.textContent = "$0"; // مثال، يمكن ملء البيانات ديناميكياً
  
      assignModalOverlay.style.display = 'flex';
      // يمكن تنفيذ logic لجلب قائمة الغرف المتاحة من السيرفر
    }
  
    // فتح Assign Room Modal
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('assign-btn')) {
        const id = e.target.getAttribute('data-id');
        const reservation = reservationsData.find(r => r.id === id);
        if (reservation) {
          openAssignModal(reservation);
        }
      }
    });
  
    // زر Cancel في Assign Room Modal
    assignCancelBtn.addEventListener('click', () => {
      assignModalOverlay.style.display = 'none';
    });
  
    // زر Confirm في Assign Room Modal
    assignConfirmBtn.addEventListener('click', () => {
      const selectedRoom = availableRooms.value;
      if (!selectedRoom) {
        alert("Please select a room.");
        return;
      }
      // استخراج رقم الحجز من عنوان المودال
      const idMatch = assignModalTitle.textContent.match(/\d+/);
      if (!idMatch) {
        assignModalOverlay.style.display = 'none';
        return;
      }
      const id = idMatch[0];
      const reservation = reservationsData.find(r => r.id.includes(id));
      if (reservation) {
        reservation.roomNumber = selectedRoom;
        // قد تغير حالته إلى Reserved إن كان Pending
        if (reservation.status === "Pending") {
          reservation.status = "Reserved";
        }
        // يمكنك تخزين نوع الغرفة أو سعرها إذا تغيرت
        showSuccessMessage(`✅ Room assigned to ${reservation.guestName}!`);
        renderTable(reservationsData);
      }
      assignModalOverlay.style.display = 'none';
    });
  
    // ====== View Details (فقط للتجربة) ======
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('details-btn')) {
        const id = e.target.getAttribute('data-id');
        alert(`Showing details for reservation ${id} (demo only).`);
      }
    });
  });
  