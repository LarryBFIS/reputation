// Shared site chrome — auto-injects nav and footer
(function() {
  const navHTML = `
    <nav class="nav">
      <div class="nav-inner">
        <a href="${BASE}index.html" class="logo">
          <span class="logo-mark">G</span>
          <div style="display: flex; flex-direction: column; line-height: 1;">
            <span style="font-size: 17px;">GuestGraph</span>
            <span style="font-size: 10px; font-family: var(--font-mono); color: var(--ink-mute); letter-spacing: 0.06em; margin-top: 3px; font-weight: 400;">BY BUILDD</span>
          </div>
        </a>
        <div class="nav-links">
          <a href="${BASE}pages/dashboard.html" data-nav="dashboard">Dashboard</a>
          <a href="${BASE}pages/actions.html" data-nav="actions">Actions</a>
          <a href="${BASE}pages/chatbot.html" data-nav="chatbot">Ask GuestGraph</a>
          <a href="${BASE}pages/team.html" data-nav="team">Team queue</a>
          <a href="${BASE}pages/whatsapp.html" data-nav="whatsapp">WhatsApp</a>
          <a href="${BASE}pages/report.html" data-nav="report">Report</a>
          <a href="#" class="nav-cta">Robert · Belmont</a>
        </div>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <div class="flex items-center gap-3">
          <span class="logo-mark" style="width:22px;height:22px;font-size:13px;">G</span>
          <span>GuestGraph · Reputation × Revenue intelligence · part of the Buildd From Ideas family</span>
        </div>
        <div class="mono">v1.0 · live demo</div>
      </div>
    </footer>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    const navSlot = document.getElementById('site-nav');
    const footerSlot = document.getElementById('site-footer');
    if (navSlot) {
      navSlot.outerHTML = navHTML;
      const current = document.body.dataset.page;
      if (current) {
        const link = document.querySelector(`[data-nav="${current}"]`);
        if (link) link.classList.add('active');
      }
    }
    if (footerSlot) footerSlot.outerHTML = footerHTML;
  });
})();
