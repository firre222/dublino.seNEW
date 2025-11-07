const createAnnouncementBar = () => {
  const bar = document.createElement('div');
  bar.className = 'announcement-bar';
  bar.id = 'announcement-bar';

  bar.innerHTML = `
    <div class="message">
       NEW tools launched check it out, click to <a href="tools.html" target="_blank" class="learn-more-link">learn more</a>.
    </div>
    <button class="close-btn" id="close-btn">×</button>
  `;

  // Append the bar to the body
  document.body.insertBefore(bar, document.body.firstChild);

  // Add the styles for the announcement bar dynamically
  const style = document.createElement('style');
  style.innerHTML = `
   .announcement-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  box-sizing: border-box;

  background: linear-gradient(90deg, #0072ff, #00c6ff);
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.5px;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  z-index: 1000;
  animation: slideDown 0.6s ease-out;
}

.announcement-bar .message {
  flex: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  animation: textFadeIn 1.2s ease-out;
}

/* ✨ Stylish “Learn More” link */
.announcement-bar .learn-more-link {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  margin-left: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.announcement-bar .learn-more-link:hover {
  color: #00c6ff;
  border-bottom-color: #00c6ff;
  text-shadow: 0 0 8px rgba(0, 198, 255, 0.6);
}

/* ❌ Close Button */
.announcement-bar .close-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
}

.announcement-bar .close-btn:hover {
  background: #fff;
  color: #0072ff;
  transform: rotate(90deg) scale(1.1);
  box-shadow: 0 0 10px rgba(0, 198, 255, 0.6);
}

/* ✨ Entry Animation */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes textFadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 🧩 When bar is visible, push down the content */
body.announcement-visible {
  margin-top: 55px;
  transition: margin-top 0.3s ease;
}

/* 📱 Responsive tweaks */
@media (max-width: 600px) {
  .announcement-bar {
    flex-direction: column;
    text-align: center;
    gap: 8px;
    padding: 10px;
  }

  .announcement-bar .message {
    white-space: normal;
  }

  body.announcement-visible {
    margin-top: 70px;
  }
}
  `;
  document.head.appendChild(style);

  // Function to close the announcement bar
  const closeBtn = document.getElementById('close-btn');
  const announcementBar = document.getElementById('announcement-bar');

  closeBtn.addEventListener('click', () => {
    announcementBar.style.display = 'none';  // Hide the bar
    document.body.classList.remove('announcement-visible'); // Remove the top margin from the body
  });

  // Initially show the announcement bar and add the top margin to the body
  document.body.classList.add('announcement-visible');
};

// Run the function to create the bar when the DOM is ready
document.addEventListener('DOMContentLoaded', createAnnouncementBar);
