import React, { useEffect } from 'react';
import './CreateNewReservation.css';

const CreateNewReservation = () => {
  useEffect(() => {
    const searchRoomsBtn = document.getElementById('searchRoomsBtn');
    const resetAvailabilityBtn = document.getElementById('resetAvailabilityBtn');
    const roomsListSection = document.getElementById('roomsListSection');
    const roomsTbody = document.getElementById('roomsTbody');
    const guestDetailsSection = document.getElementById('guestDetailsSection');
    const saveGuestDetailsBtn = document.getElementById('saveGuestDetailsBtn');
    const paymentSection = document.getElementById('paymentSection');
    const processPaymentBtn = document.getElementById('processPaymentBtn');
    const payOnCheckInBtn = document.getElementById('payOnCheckInBtn');
    const reviewSection = document.getElementById('reviewSection');
    const confirmReservationBtn = document.getElementById('confirmReservationBtn');
    const sendConfirmationBtn = document.getElementById('sendConfirmationBtn');
    const editReservationBtn = document.getElementById('editReservationBtn');

    if (searchRoomsBtn) {
      searchRoomsBtn.addEventListener('click', () => {
        const checkInDate = document.getElementById('checkInDate')?.value;
        const checkOutDate = document.getElementById('checkOutDate')?.value;
        if (!checkInDate || !checkOutDate || checkOutDate < checkInDate) {
          alert("⚠️ Please select a valid check-in/check-out date range.");
          return;
        }
        alert("Searching for available rooms (demo).");
        if (roomsListSection) roomsListSection.style.display = 'block';
        if (roomsTbody) {
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
        }
      });
    }

    if (resetAvailabilityBtn) {
      resetAvailabilityBtn.addEventListener('click', () => {
        document.getElementById('availabilityForm')?.reset();
        if (roomsListSection) roomsListSection.style.display = 'none';
        alert("Room availability search reset (demo).");
      });
    }

    if (roomsTbody) {
      roomsTbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('select-room-btn')) {
          const row = e.target.closest('tr');
          alert(`Room selected: ${row.cells[0].textContent} (demo).`);
          if (guestDetailsSection) guestDetailsSection.style.display = 'block';
        }
      });
    }

    if (saveGuestDetailsBtn) {
      saveGuestDetailsBtn.addEventListener('click', () => {
        const guestName = document.getElementById('guestName')?.value.trim();
        if (!guestName) {
          alert("⚠️ Please fill all required guest details (Guest Name).");
          return;
        }
        alert("Guest details saved (demo).");
        if (paymentSection) paymentSection.style.display = 'block';
      });
    }

    if (processPaymentBtn) {
      processPaymentBtn.addEventListener('click', () => {
        alert("✅ Payment processed (demo).");
        if (reviewSection) reviewSection.style.display = 'block';
      });
    }

    if (payOnCheckInBtn) {
      payOnCheckInBtn.addEventListener('click', () => {
        alert("🕒 Payment will be made on check-in (demo).");
        if (reviewSection) reviewSection.style.display = 'block';
      });
    }

    confirmReservationBtn?.addEventListener('click', () => {
      alert("🎟 Reservation confirmed (demo).");
    });

    sendConfirmationBtn?.addEventListener('click', () => {
      alert("📧 Confirmation email sent (demo).");
    });

    editReservationBtn?.addEventListener('click', () => {
      alert("✏️ Edit reservation details (demo).");
    });

    // Cleanup: يمكن إضافة إزالة المستمعين عند فك التثبيت إن لزم الأمر
    return () => {
      // حذف المستمعين إذا احتجت لذلك
    };
  }, []);

  return (
    <>
      {/* Placeholder for Header (to be added later with React) */}
      <header className="header"></header>
      
      {/* Placeholder for Sidebar (to be added later with React) */}
      <aside className="sidebar"></aside>

      {/* Main Content Container */}
      <div className="create-reservation-container">
        {/* Page Header & Breadcrumb */}
        <div className="page-header">
          <h1>Create New Reservation</h1>
          <nav className="breadcrumb">
            Home &gt; Reservations &gt; Create New Reservation
          </nav>
        </div>

        {/* 1. Check Room Availability Section */}
        <section className="availability-section">
          <h2>Check Room Availability</h2>
          <form id="availabilityForm">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="checkInDate">Check-in Date</label>
                <input type="date" id="checkInDate" />
              </div>
              <div className="form-group">
                <label htmlFor="checkOutDate">Check-out Date</label>
                <input type="date" id="checkOutDate" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="roomType">Room Type</label>
                <select id="roomType">
                  <option value="">-- Select --</option>
                  <option value="Standard Room">Standard Room</option>
                  <option value="Deluxe Room">Deluxe Room</option>
                  <option value="Suite">Suite</option>
                  <option value="Executive Room">Executive Room</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="adults">Adults</label>
                <input type="number" id="adults" min="1" defaultValue="1" />
              </div>
              <div className="form-group">
                <label htmlFor="children">Children</label>
                <input type="number" id="children" min="0" defaultValue="0" />
              </div>
            </div>
            <div className="form-buttons">
              <button type="button" id="searchRoomsBtn" className="search-btn">
                🔍 Search Available Rooms
              </button>
              <button type="reset" id="resetAvailabilityBtn" className="reset-btn">
                🔄 Reset
              </button>
            </div>
          </form>
        </section>

        {/* 2. Available Rooms List Section */}
        <section className="rooms-list-section" id="roomsListSection" style={{ display: 'none' }}>
          <h2>Available Rooms</h2>
          <table className="rooms-table">
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Room Type</th>
                <th>Capacity</th>
                <th>Price Per Night</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="roomsTbody">
              {/* Demo data or AJAX data goes here */}
            </tbody>
          </table>
        </section>

        {/* 3. Guest Details Section */}
        <section className="guest-details-section" id="guestDetailsSection" style={{ display: 'none' }}>
          <h2>Guest Details</h2>
          <form id="guestForm">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="guestName">Guest Name</label>
                <input type="text" id="guestName" placeholder="Enter guest name" required />
              </div>
              <div className="form-group">
                <label htmlFor="nationality">Nationality</label>
                <select id="nationality">
                  <option value="">-- Select --</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option>
                  <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Holy See">Holy See</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Korea">North Korea</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine State">Palestine State</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="St Kitts and Nevis">St Kitts and Nevis</option>
                  <option value="St Lucia">St Lucia</option>
                  <option value="St Vincent and the Grenadines">St Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Korea">South Korea</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-Leste">Timor-Leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States of America">United States of America</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="idPassport">ID/Passport Number</label>
                <input type="text" id="idPassport" placeholder="Enter ID/Passport number" />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" placeholder="Enter phone number" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" id="emailAddress" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests</label>
                <textarea id="specialRequests" rows="2" placeholder="Any special requests?"></textarea>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companyAgency">Company/Agency (optional)</label>
                <input type="text" id="companyAgency" placeholder="Enter company/agency if any" />
              </div>
              <div className="form-group">
                <label htmlFor="guestPaymentMethod">Payment Method</label>
                <select id="guestPaymentMethod">
                  <option value="">-- Select --</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Cash">Cash</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>
            </div>
            <div className="form-buttons">
              <button type="button" id="saveGuestDetailsBtn" className="submit-btn">
                💾 Save Guest Details
              </button>
            </div>
          </form>
        </section>

        {/* 4. Payment & Deposit Section */}
        <section className="payment-section" id="paymentSection" style={{ display: 'none' }}>
          <h2>Reservation Payment & Deposit</h2>
          <form id="paymentForm">
            <div className="form-row">
              <div className="form-group">
                <label>Total Amount</label>
                <input type="text" id="totalAmount" readOnly />
              </div>
              <div className="form-group">
                <label>Deposit Required</label>
                <input type="text" id="depositRequired" readOnly />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="amountPaid">Amount Paid</label>
                <input type="number" id="amountPaid" placeholder="Enter amount paid" />
              </div>
              <div className="form-group">
                <label>Remaining Balance</label>
                <input type="text" id="remainingBalance" readOnly />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="transactionRef">Transaction Reference (required for card/bank)</label>
              <input type="text" id="transactionRef" placeholder="Enter transaction reference" />
            </div>
            <div className="form-buttons">
              <button type="button" id="processPaymentBtn" className="submit-btn">
                ✅ Process Payment
              </button>
              <button type="button" id="payOnCheckInBtn" className="cancel-btn">
                🕒 Pay on Check-in
              </button>
            </div>
          </form>
        </section>

        {/* 5. Review & Confirm Reservation Section */}
        <section className="review-section" id="reviewSection" style={{ display: 'none' }}>
          <h2>Review & Confirm Reservation</h2>
          <div className="review-content">
            <p><strong>Guest Name:</strong> <span id="reviewGuestName"></span></p>
            <p><strong>Room Type:</strong> <span id="reviewRoomType"></span></p>
            <p><strong>Check-in Date:</strong> <span id="reviewCheckIn"></span></p>
            <p><strong>Check-out Date:</strong> <span id="reviewCheckOut"></span></p>
            <p><strong>Total Nights:</strong> <span id="reviewNights"></span></p>
            <p><strong>Total Amount:</strong> <span id="reviewTotalAmount"></span></p>
            <p><strong>Deposit Paid:</strong> <span id="reviewDepositPaid"></span></p>
            <p><strong>Remaining Balance:</strong> <span id="reviewRemainingBalance"></span></p>
          </div>
          <div className="review-buttons">
            <button id="confirmReservationBtn" className="submit-btn">
              🎟 Confirm Reservation
            </button>
            <button id="sendConfirmationBtn" className="update-btn">
              📧 Send Confirmation Email
            </button>
            <button id="editReservationBtn" className="cancel-btn">
              ✏️ Edit Reservation
            </button>
          </div>
        </section>

        {/* 6. Active Reservations Summary Section */}
        <section className="summary-section">
          <h2>Active Reservations Summary</h2>
          <table className="summary-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody id="summaryTbody">
              <tr>
                <td>🔴 Pending Confirmation</td>
                <td>5</td>
              </tr>
              <tr>
                <td>🟡 Awaiting Payment</td>
                <td>3</td>
              </tr>
              <tr>
                <td>🟢 Confirmed Reservations</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default CreateNewReservation;
