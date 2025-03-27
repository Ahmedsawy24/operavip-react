import React, { useEffect } from 'react';
import './ModifyorCancelBooking.css';

const ModifyorCancelBooking = () => {
  useEffect(() => {
    // البحث: زر البحث (Demo)
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
      searchBtn.addEventListener('click', function () {
        alert('Search functionality is not implemented in this demo.');
      });
    }

    // أزرار "Modify"
    const modifyButtons = document.querySelectorAll('.modify-btn');
    const modifyModalOverlay = document.getElementById('modifyModalOverlay');
    const modifyModalCancel = document.getElementById('modifyModalCancel');
    const modifyForm = document.getElementById('modifyForm');
    const modifyModalTitle = document.getElementById('modifyModalTitle');

    modifyButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const bookingNumber = btn.getAttribute('data-booking');
        const guestName = btn.getAttribute('data-guest');

        // تعبئة الحقول (Demo)
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

        if (modifyModalOverlay) modifyModalOverlay.style.display = 'flex';
      });
    });

    if (modifyModalCancel) {
      modifyModalCancel.addEventListener('click', function () {
        if (modifyModalOverlay) modifyModalOverlay.style.display = 'none';
      });
    }

    if (modifyForm) {
      modifyForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Booking modified successfully.');
        if (modifyModalOverlay) modifyModalOverlay.style.display = 'none';
      });
    }

    // أزرار "Cancel"
    const cancelButtons = document.querySelectorAll('.cancel-btn');
    const cancelModalOverlay = document.getElementById('cancelModalOverlay');
    const cancelModalText = document.getElementById('cancelModalText');
    const cancelModalNo = document.getElementById('cancelModalNo');
    const cancelModalYes = document.getElementById('cancelModalYes');

    cancelButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const bookingNumber = btn.getAttribute('data-booking');
        const guestName = btn.getAttribute('data-guest');

        cancelModalText.textContent = `Are you sure you want to cancel Booking #${bookingNumber} for ${guestName}?`;
        if (cancelModalOverlay) cancelModalOverlay.style.display = 'flex';
      });
    });

    if (cancelModalNo) {
      cancelModalNo.addEventListener('click', function () {
        if (cancelModalOverlay) cancelModalOverlay.style.display = 'none';
      });
    }

    if (cancelModalYes) {
      cancelModalYes.addEventListener('click', function () {
        alert('Booking canceled successfully.');
        if (cancelModalOverlay) cancelModalOverlay.style.display = 'none';
      });
    }
  }, []);

  return (
    <>
      {/* Main Container (بدون هيدر وسايد بار) */}
      <div className="main-container">
        {/* عنوان الصفحة + Breadcrumb */}
        <header className="page-header">
          <h1>Modify or Cancel Booking</h1>
          <nav className="breadcrumb">
            Home &gt; Reservations &gt; Modify or Cancel Booking
          </nav>
        </header>

        {/* منطقة البحث */}
        <section className="search-area">
          <h2>Search for Booking</h2>
          <div className="search-box">
            <input type="text" id="searchInput" placeholder="Enter Guest Name or Booking Number" />
            <button id="searchBtn">🔍 Search</button>
          </div>
        </section>

        {/* جدول نتائج البحث */}
        <section className="results-section">
          <table className="results-table">
            <thead>
              <tr>
                <th>Booking #</th>
                <th>Guest Name</th>
                <th>Arrival Date</th>
                <th>Departure Date</th>
                <th>Room Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="resultsBody">
              <tr>
                <td>10234</td>
                <td>Abdullah Ahmed</td>
                <td>15-03-2025</td>
                <td>18-03-2025</td>
                <td>Double</td>
                <td className="status-confirmed">Confirmed</td>
                <td>
                  <button className="action-btn modify-btn" data-booking="10234" data-guest="Abdullah Ahmed">Modify</button>
                  <button className="action-btn cancel-btn" data-booking="10234" data-guest="Abdullah Ahmed">Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* Modify Booking Modal */}
      <div className="modal-overlay" id="modifyModalOverlay">
        <div className="modal">
          <h2 id="modifyModalTitle">Modify Booking - #10234</h2>
          <form id="modifyForm">
            <label htmlFor="modGuestName">Guest Name</label>
            <input type="text" id="modGuestName" name="modGuestName" required />

            <label htmlFor="modEmail">Email</label>
            <input type="email" id="modEmail" name="modEmail" required />

            <label htmlFor="modPhone">Phone Number</label>
            <input type="text" id="modPhone" name="modPhone" required />

            <label htmlFor="modArrival">Arrival Date</label>
            <input type="date" id="modArrival" name="modArrival" required />

            <label htmlFor="modDeparture">Departure Date</label>
            <input type="date" id="modDeparture" name="modDeparture" required />

            <label htmlFor="modRoomType">Room Type</label>
            <select id="modRoomType" name="modRoomType" required>
              <option value="">Select room type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Suite">Suite</option>
            </select>

            <label htmlFor="modNumRooms">Number of Rooms</label>
            <input type="number" id="modNumRooms" name="modNumRooms" min="1" defaultValue="1" required />

            <div className="form-row">
              <div>
                <label htmlFor="modAdults">Adults</label>
                <input type="number" id="modAdults" name="modAdults" min="1" defaultValue="1" required />
              </div>
              <div>
                <label htmlFor="modChildren">Children</label>
                <input type="number" id="modChildren" name="modChildren" min="0" defaultValue="0" required />
              </div>
            </div>

            <label htmlFor="modPayment">Payment Method</label>
            <select id="modPayment" name="modPayment" required>
              <option value="">Select payment method</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>

            <label htmlFor="modRequests">Special Requests</label>
            <textarea id="modRequests" name="modRequests" rows="4" placeholder="Enter any special requests"></textarea>

            <div className="modal-buttons">
              <button type="button" className="modal-cancel" id="modifyModalCancel">Cancel</button>
              <button type="submit" className="modal-save" id="modifyModalSave">Save Changes</button>
            </div>
          </form>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      <div className="modal-overlay" id="cancelModalOverlay">
        <div className="modal cancel-modal">
          <h2>⚠️ Confirm Cancellation</h2>
          <p id="cancelModalText">Are you sure you want to cancel Booking #10234 for Abdullah Ahmed?</p>
          <div className="modal-buttons">
            <button type="button" className="modal-cancel" id="cancelModalNo">No, Go Back</button>
            <button type="button" className="modal-confirm" id="cancelModalYes">Yes, Cancel Booking</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifyorCancelBooking;
