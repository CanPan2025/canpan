(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();

// Add scroll animation functionality
document.addEventListener("DOMContentLoaded", function() {
  // Existing functionality
  const r = document.getElementById("mobile-menu"),
      o = document.getElementById("nav-menu");
  r.addEventListener("click", function() {
    r.classList.toggle("is-active"),
    o.classList.toggle("active")
  }),
  document.querySelectorAll(".nav-link").forEach(t => {
    t.addEventListener("click", function() {
      r.classList.remove("is-active"),
      o.classList.remove("active")
    })
  });
  const n = document.querySelector(".contact-form form");
  n && n.addEventListener("submit", function(t) {
    t.preventDefault();
    const s = this.querySelector('input[type="text"]').value,
        i = this.querySelector('input[type="email"]').value,
        l = this.querySelector("textarea").value;
    console.log("Form submitted:", {
      name: s,
      email: i,
      message: l
    }),
    alert("Thank you for your message! We will get back to you soon."),
    this.reset()
  });
  const e = document.querySelector(".cta-button");
  e && e.addEventListener("click", function() {
    this.classList.add("clicked"),
    setTimeout(() => {
      this.classList.remove("clicked"),
      alert("Welcome to CanPan! Downloading would start soon.")
    }, 300)
  });

  // Add scroll animation functionality
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function isElementPartiallyInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right > 0
    );
  }

  function animateElements() {
    // Animate section headings
    document.querySelectorAll('.features h2, .about h2, .contact h2').forEach(el => {
      if (isElementPartiallyInViewport(el)) {
        el.classList.add('animate');
      }
    });

    // Animate feature cards
    document.querySelectorAll('.feature-card').forEach(el => {
      if (isElementPartiallyInViewport(el)) {
        el.classList.add('animate');
      }
    });

    // Animate about and contact content
    document.querySelectorAll('.about-content, .contact-content').forEach(el => {
      if (isElementPartiallyInViewport(el)) {
        el.classList.add('animate');
      }
    });

    // Animate footer
    document.querySelectorAll('.footer p').forEach(el => {
      if (isElementPartiallyInViewport(el)) {
        el.classList.add('animate');
      }
    });
  }

  // Trigger animations for hero section immediately
  setTimeout(() => {
    document.querySelector('.hero-content h1').style.opacity = '1';
    document.querySelector('.hero-content h1').style.transform = 'translateY(0)';
    setTimeout(() => {
      document.querySelector('.hero-content p').style.opacity = '1';
      document.querySelector('.hero-content p').style.transform = 'translateY(0)';
      setTimeout(() => {
        document.querySelector('.cta-button').style.opacity = '1';
        document.querySelector('.cta-button').style.transform = 'translateY(0)';
      }, 200);
    }, 200);
  }, 100);

  // Check for animations on scroll
  window.addEventListener('scroll', animateElements);
  
  // Check for animations on load
  window.addEventListener('load', animateElements);
  
  // Initial check in case elements are already in viewport
  setTimeout(animateElements, 500);
});