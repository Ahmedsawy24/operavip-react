document.addEventListener('DOMContentLoaded', () => {
    // عناصر DOM
    const searchBtn = document.getElementById('searchBtn');
    const successMessage = document.getElementById('successMessage');
  
    // ====== تفاصيل الحجوزات (Dummy Data) ======
    // يمكنك استبدال هذا بجلب البيانات من سيرفر أو API
    const groupReservations = [
      {
        id: 'G2034',
        groupName: 'ABC Corporation',
        arrival: '12-04-2025',
        departure: '16-04-2025',
        rooms: 12,
        status: 'Confirmed',
        contactPerson: 'John Doe',
        email: 'john@abc-corp.com',
        phone: '123456789',
        roomTypes: 'Mixed',
        guestsPerRoom: 2,
        paymentStatus: 'Paid',
        specialRequests: 'Early check-in if possible.'
      },
      {
        id: 'G2035',
        groupName: 'XYZ Group',
        arrival: '20-04-2025',
        departure: '25-04-2025',
        rooms: 8,
        status: 'Pending',
        contactPerson: 'Sara Smith',
        email: 'sara@xyzgroup.com',
        phone: '987654321',
        roomTypes: 'Double',
        guestsPerRoom: 2,
        paymentStatus: 'Pending',
        specialRequests: ''
      }
    ];
  
    // ========== بحث بسيط (تجريبي) ==========
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        alert('Search functionality (demo only).');
      });
    }
  
    // ========== إظهار رسالة النجاح ==========
    function showSuccessMessage(msg) {
      successMessage.textContent = msg;
      successMessage.style.display = 'block';
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    }
  
    // ========== عناصر جدول الحجوزات ==========
    const detailsBtns = document.querySelectorAll('.details-btn');
    const modifyBtns = document.querySelectorAll('.modify-btn');
    const cancelBtns = document.querySelectorAll('.cancel-btn');
  
    // ========== عناصر مودال التفاصيل ==========
    const detailsModalOverlay = document.getElementById('detailsModalOverlay');
    const detailsModalClose = document.getElementById('detailsModalClose');
    const detailsModalTitle = document.getElementById('detailsModalTitle');
    const detailsModalContent = document.getElementById('detailsModalContent');
  
    // ========== عناصر مودال التعديل ==========
    const modifyModalOverlay = document.getElementById('modifyModalOverlay');
    const modifyModalTitle = document.getElementById('modifyModalTitle');
    const modifyForm = document.getElementById('modifyForm');
    const modifyModalCancel = document.getElementById('modifyModalCancel');
  
    // حقول التعديل
    const groupNameField = document.getElementById('groupName');
    const contactPersonField = document.getElementById('contactPerson');
    const modEmailField = document.getElementById('modEmail');
    const modPhoneField = document.getElementById('modPhone');
    const modArrivalDateField = document.getElementById('modArrivalDate');
    const modDepartureDateField = document.getElementById('modDepartureDate');
    const numRoomsField = document.getElementById('numRooms');
    const roomTypesField = document.getElementById('roomTypes');
    const guestsPerRoomField = document.getElementById('guestsPerRoom');
    const paymentMethodField = document.getElementById('paymentMethod');
    const paymentStatusField = document.getElementById('paymentStatus');
    const specialRequestsField = document.getElementById('specialRequests');
  
    // ========== عناصر مودال الإلغاء ==========
    const cancelModalOverlay = document.getElementById('cancelModalOverlay');
    const cancelModalText = document.getElementById('cancelModalText');
    const cancelNoBtn = document.getElementById('cancelNoBtn');
    const cancelYesBtn = document.getElementById('cancelYesBtn');
  
    // ========== إغلاق المودالات عند الضغط خارجها ==========
    detailsModalOverlay.addEventListener('click', (e) => {
      if (e.target === detailsModalOverlay) {
        detailsModalOverlay.style.display = 'none';
      }
    });
    modifyModalOverlay.addEventListener('click', (e) => {
      if (e.target === modifyModalOverlay) {
        modifyModalOverlay.style.display = 'none';
      }
    });
    cancelModalOverlay.addEventListener('click', (e) => {
      if (e.target === cancelModalOverlay) {
        cancelModalOverlay.style.display = 'none';
      }
    });
  
    // ========== إغلاق مودال التفاصيل ==========
    if (detailsModalClose) {
      detailsModalClose.addEventListener('click', () => {
        detailsModalOverlay.style.display = 'none';
      });
    }
  
    // ========== إغلاق مودال التعديل ==========
    if (modifyModalCancel) {
      modifyModalCancel.addEventListener('click', () => {
        modifyModalOverlay.style.display = 'none';
      });
    }
  
    // ========== أزرار التفاصيل ==========
    detailsBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const resid = btn.getAttribute('data-resid');
        const groupData = groupReservations.find(gr => gr.id === resid);
  
        if (groupData) {
          detailsModalTitle.textContent = `Group Reservation Details - ${groupData.id}`;
          detailsModalContent.innerHTML = `
            <p><strong>Group Name:</strong> ${groupData.groupName}</p>
            <p><strong>Contact Person:</strong> ${groupData.contactPerson}</p>
            <p><strong>Email:</strong> ${groupData.email}</p>
            <p><strong>Phone Number:</strong> ${groupData.phone}</p>
            <p><strong>Arrival Date:</strong> ${groupData.arrival}</p>
            <p><strong>Departure Date:</strong> ${groupData.departure}</p>
            <p><strong>Total Rooms Booked:</strong> ${groupData.rooms}</p>
            <p><strong>Room Types:</strong> ${groupData.roomTypes}</p>
            <p><strong>Guests per Room:</strong> ${groupData.guestsPerRoom}</p>
            <p><strong>Payment Status:</strong> ${groupData.paymentStatus}</p>
            <p><strong>Special Requests:</strong> ${groupData.specialRequests || 'None'}</p>
          `;
        }
        detailsModalOverlay.style.display = 'flex';
      });
    });
  
    // ========== أزرار التعديل ==========
    modifyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const resid = btn.getAttribute('data-resid');
        const groupData = groupReservations.find(gr => gr.id === resid);
  
        if (groupData) {
          modifyModalTitle.textContent = `Modify Group Reservation - ${groupData.id}`;
          groupNameField.value = groupData.groupName;
          contactPersonField.value = groupData.contactPerson;
          modEmailField.value = groupData.email;
          modPhoneField.value = groupData.phone;
  
          // لا يوجد تنسيق تاريخي فعلي (DD-MM-YYYY)، سنتركه كما هو أو نضبطه يدوياً
          // لأغراض الديمو سنفترض أنك ستتعامل مع تواريخ فعلية
          modArrivalDateField.value = '2025-04-12'; 
          modDepartureDateField.value = '2025-04-16';
  
          numRoomsField.value = groupData.rooms;
          roomTypesField.value = groupData.roomTypes;
          guestsPerRoomField.value = groupData.guestsPerRoom;
          paymentMethodField.value = 'Cash'; // مثال
          paymentStatusField.value = groupData.paymentStatus;
          specialRequestsField.value = groupData.specialRequests;
  
          // إظهار المودال
          modifyModalOverlay.style.display = 'flex';
  
          // تخزين المعرف لعمليات الحفظ
          modifyForm.setAttribute('data-resid', resid);
        }
      });
    });
  
    // حفظ التعديلات
    if (modifyForm) {
      modifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const resid = modifyForm.getAttribute('data-resid');
        const groupData = groupReservations.find(gr => gr.id === resid);
  
        if (groupData) {
          groupData.groupName = groupNameField.value;
          groupData.contactPerson = contactPersonField.value;
          groupData.email = modEmailField.value;
          groupData.phone = modPhoneField.value;
          // التواريخ تحتاج تحويلات إن كانت بتنسيقات مختلفة
          groupData.arrival = modArrivalDateField.value;
          groupData.departure = modDepartureDateField.value;
          groupData.rooms = parseInt(numRoomsField.value);
          groupData.roomTypes = roomTypesField.value;
          groupData.guestsPerRoom = parseInt(guestsPerRoomField.value);
          groupData.paymentStatus = paymentStatusField.value;
          groupData.specialRequests = specialRequestsField.value;
  
          showSuccessMessage('✅ Group reservation updated successfully!');
        }
        modifyModalOverlay.style.display = 'none';
      });
    }
  
    // ========== أزرار الإلغاء ==========
    let currentCancelId = null;
    cancelBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const resid = btn.getAttribute('data-resid');
        const groupName = btn.getAttribute('data-group');
        currentCancelId = resid;
        cancelModalText.textContent = `Are you sure you want to cancel the group reservation (${resid}) for ${groupName}?`;
        cancelModalOverlay.style.display = 'flex';
      });
    });
  
    // زر "No, Go Back"
    if (cancelNoBtn) {
      cancelNoBtn.addEventListener('click', () => {
        cancelModalOverlay.style.display = 'none';
        currentCancelId = null;
      });
    }
  
    // زر "Yes, Cancel Reservation"
    if (cancelYesBtn) {
      cancelYesBtn.addEventListener('click', () => {
        if (currentCancelId) {
          // جد الحجز واحذفه أو عدل حالته إلى Cancelled
          const index = groupReservations.findIndex(gr => gr.id === currentCancelId);
          if (index !== -1) {
            groupReservations[index].status = 'Cancelled';
            showSuccessMessage('✅ Group reservation cancelled successfully!');
          }
        }
        cancelModalOverlay.style.display = 'none';
        currentCancelId = null;
      });
    }
  
    // ========== ترقيم الصفحات (مثال) ==========
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
  