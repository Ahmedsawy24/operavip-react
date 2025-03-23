
import React, { useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = ({ children }) => {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const dummySearchData = [
      { reservation_id: '340023', guest_name: 'Abdullah Alhammami', room_number: '204', email: 'abdullah@example.com' },
      { reservation_id: '340024', guest_name: 'John Doe', room_number: '305', email: 'john.doe@example.com' }
    ];

    window.toggleDropdown = (event, id) => {
      event.stopPropagation();
      const dropdown = document.getElementById(id);
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu !== dropdown) menu.classList.remove('show');
      });
      dropdown.classList.toggle('show');
    };

    document.querySelectorAll('.nav ul li > a').forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdown = this.nextElementSibling;
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== dropdown) menu.classList.remove('show');
        });
        dropdown.classList.toggle('show');
      });
    });

    document.querySelectorAll('.dropdown-icon').forEach(icon => {
      icon.addEventListener('click', function (event) {
        window.toggleDropdown(event, this.nextElementSibling.id);
      });
    });

    window.performLiveSearch = () => {
      const input = document.getElementById('searchInput').value.toLowerCase();
      const tbody = document.querySelector('#searchResultsTable tbody');
      tbody.innerHTML = '';

      const filtered = dummySearchData.filter(item =>
        item.reservation_id.includes(input) ||
        item.guest_name.toLowerCase().includes(input) ||
        item.room_number.includes(input) ||
        item.email.toLowerCase().includes(input)
      );

      if (filtered.length > 0) {
        filtered.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${item.reservation_id}</td>
            <td>${item.guest_name}</td>
            <td>${item.room_number}</td>
            <td>${item.email}</td>
            <td><button onclick="alert('Viewing details for reservation ${item.reservation_id}')">View Details</button></td>
          `;
          tbody.appendChild(row);
        });
      } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="5">No results found</td>`;
        tbody.appendChild(row);
      }
    };

    window.markNotificationsRead = () => {
      document.querySelectorAll('#notificationsDropdown .status').forEach(status => {
        status.textContent = 'Read';
      });
      alert('All notifications marked as read.');
    };

    const handleSidebarToggle = () => {
      const sidebar = sidebarRef.current;
      const overlay = overlayRef.current;
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
      if (!sidebar.classList.contains('open')) {
        closeAllSubmenus();
      }
    };

    const closeAllSubmenus = () => {
      document.querySelectorAll('.submenu').forEach(menu => menu.classList.remove('show'));
      document.querySelectorAll('.sidebar ul > li').forEach(item => item.classList.remove('active'));
    };

    window.toggleSubmenu = (event, id) => {
      event.stopPropagation();
      const submenu = document.getElementById(id);
      const parentLi = event.currentTarget;

      document.querySelectorAll('.submenu').forEach(menu => {
        if (menu !== submenu) {
          menu.classList.remove('show');
          if (menu.parentElement) menu.parentElement.classList.remove('active');
        }
      });

      submenu.classList.toggle('show');
      parentLi.classList.toggle('active');
    };

    document.addEventListener('click', (event) => {
      const isOutside = !event.target.closest('.dropdown-icon') && !event.target.closest('.nav ul li');
      if (isOutside) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
          menu.classList.remove('show');
        });
      }
    });
  }, []);

  return (
    <>
      <div className="sidebar" ref={sidebarRef}>
        {/* Sidebar items here */}
      </div>

      <div className="overlay" ref={overlayRef} onClick={() => {
        sidebarRef.current.classList.toggle("open");
        overlayRef.current.classList.toggle("show");
      }}></div>

      <header className="header">
        <div className="header-left">
          <span className="menu-icon" onClick={() => {
            sidebarRef.current.classList.toggle("open");
            overlayRef.current.classList.toggle("show");
          }}>
            <i className="fas fa-bars"></i>
          </span>
          <div className="logo">OperaVIP</div>
        </div>

        {/* Navigation and icons here */}
      </header>

      <main className="main-content">
        {children}
      </main>
    </>
  );
};

export default Navbar;
