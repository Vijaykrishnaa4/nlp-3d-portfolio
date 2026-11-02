import confetti from 'canvas-confetti';
import { SplineHero3D } from './scene3d.js';
import { sound } from './audio.js';
import { portfolioData } from './data.js';

class PortfolioApp {
  constructor() {
    this.splineHero = null;
    this.starCount = 0;
    this.maxStars = 10;
    this.currentQuizIndex = 0;

    this.mamPhoto = localStorage.getItem('mam_photo') || null;
    this.studentPhoto = localStorage.getItem('student_photo') || null;

    this.init();
  }

  init() {
    // 1. Initialize Spline 3D Hero Stage
    const mount = document.getElementById('spline-canvas-mount');
    if (mount) {
      this.splineHero = new SplineHero3D(mount, (starIdx) => {
        this.collectStar();
      });
    }

    // 2. Restore Saved Photos
    this.updatePhotoFrames();

    // 3. Render Sections
    this.renderChronicles();
    this.renderStarQuest();
    this.renderGratitude();
    this.renderTokenizer();
    this.renderProjects();

    // 4. Setup Controls
    this.setupNavigation();
    this.setupPhotoUploaders();
    this.setupAudio();
    this.setupCinematicEffects();
  }

  setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetId = btn.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Star counter in nav
    const navStarBtn = document.getElementById('nav-star-counter');
    if (navStarBtn) {
      navStarBtn.addEventListener('click', () => {
        sound.playStar();
        document.getElementById('star-quest').scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Hero buttons
    const heroMiracleBtn = document.getElementById('hero-miracle-btn');
    if (heroMiracleBtn) {
      heroMiracleBtn.addEventListener('click', () => {
        sound.playClick();
        document.getElementById('miracle').scrollIntoView({ behavior: 'smooth' });
      });
    }

    const heroQuestBtn = document.getElementById('hero-quest-btn');
    if (heroQuestBtn) {
      heroQuestBtn.addEventListener('click', () => {
        sound.playStar();
        document.getElementById('star-quest').scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  setupPhotoUploaders() {
    const mamInput = document.getElementById('mam-file-input');
    const studentInput = document.getElementById('student-file-input');

    document.querySelectorAll('.upload-mam-trigger').forEach(b => {
      b.addEventListener('click', () => mamInput.click());
    });

    document.querySelectorAll('.upload-student-trigger').forEach(b => {
      b.addEventListener('click', () => studentInput.click());
    });

    mamInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          this.mamPhoto = evt.target.result;
          localStorage.setItem('mam_photo', this.mamPhoto);
          this.updatePhotoFrames();
          sound.playStar();
          this.showToast("👩‍🏫 Prof. Sharmila Banu's Photo Updated!");
        };
        reader.readAsDataURL(file);
      }
    });

    studentInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          this.studentPhoto = evt.target.result;
          localStorage.setItem('student_photo', this.studentPhoto);
          this.updatePhotoFrames();
          sound.playStar();
          this.showToast("👨‍💻 Student Photo Updated!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  updatePhotoFrames() {
    const mamFrame = document.getElementById('mam-photo-frame');
    if (mamFrame && this.mamPhoto) {
      mamFrame.style.backgroundImage = `url(${this.mamPhoto})`;
      mamFrame.innerHTML = '';
    }

    const studentFrame = document.getElementById('student-photo-frame');
    if (studentFrame && this.studentPhoto) {
      studentFrame.style.backgroundImage = `url(${this.studentPhoto})`;
      studentFrame.innerHTML = '';
    }
  }

  setupAudio() {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const isMuted = sound.toggleMute();
        audioBtn.innerHTML = isMuted ? '🔇' : '🔊';
        this.showToast(isMuted ? "Sound Muted 🔇" : "Audio Feedback Enabled 🔊");
      });
    }
  }

  collectStar() {
    this.starCount = Math.min(this.maxStars, this.starCount + 1);
    sound.playStar();
    this.updateStarUI();
    this.showToast(`⭐️ Star #${this.starCount} Collected!`);

    if (this.starCount >= this.maxStars) {
      this.triggerInternalsCelebration();
    }
  }

  updateStarUI() {
    const navBtn = document.getElementById('nav-star-counter');
    if (navBtn) {
      navBtn.innerHTML = `⭐️ Stars: ${this.starCount} / 10`;
    }

    // Slots
    const slots = document.querySelectorAll('.star-slot-pill');
    slots.forEach((s, i) => {
      if (i < this.starCount) {
        s.classList.add('filled');
        s.innerHTML = '★';
      } else {
        s.classList.remove('filled');
        s.innerHTML = '☆';
      }
    });

    const statusText = document.getElementById('quest-status-text');
    if (statusText) {
      if (this.starCount === 0) {
        statusText.innerHTML = `Current Balance: <strong>0 Stars</strong> (Classic Semester Reality 😂)`;
      } else if (this.starCount < 10) {
        statusText.innerHTML = `Current Balance: <strong>${this.starCount} Stars</strong> (${10 - this.starCount} more for Sharmila Mam's full internal marks!)`;
      } else {
        statusText.innerHTML = `🎉 <strong>10/10 STARS ACHIEVED!</strong> Full internal marks granted!`;
      }
    }
  }

  triggerInternalsCelebration() {
    sound.playCelebration();
    confetti({ particleCount: 220, spread: 100, origin: { y: 0.6 } });

    const banner = document.getElementById('internals-cert-banner');
    if (banner) {
      banner.style.display = 'block';
      banner.scrollIntoView({ behavior: 'smooth' });
    }
  }

  renderChronicles() {
    const container = document.getElementById('chronicles-container');
    if (!container) return;

    container.innerHTML = portfolioData.chronicles.map(ch => `
      <div class="glass-card">
        <div class="chronicle-card-top">
          <span class="chronicle-badge">${ch.tag}</span>
          <span style="font-size: 1.25rem;">✨</span>
        </div>
        <h3 class="chronicle-title">${ch.title}</h3>
        <p class="chronicle-body">${ch.content}</p>
        <div class="chronicle-vibe-tag">
          <span>Vibe:</span>
          <span>${ch.vibe}</span>
        </div>
      </div>
    `).join('');
  }

  renderStarQuest() {
    const slotsRow = document.getElementById('star-slots-row');
    if (slotsRow) {
      slotsRow.innerHTML = Array(10).fill(0).map((_, i) => `
        <div class="star-slot-pill" data-index="${i}">☆</div>
      `).join('');
    }

    this.renderQuizQuestion();

    const claimBtn = document.getElementById('claim-all-stars-btn');
    if (claimBtn) {
      claimBtn.addEventListener('click', () => {
        this.starCount = 10;
        if (this.splineHero) this.splineHero.collectAllRemainingStars();
        this.updateStarUI();
        this.triggerInternalsCelebration();
        this.showToast("🌟 Legend Fulfilled! Full Internal Marks Unlocked!");
      });
    }
  }

  renderQuizQuestion() {
    const q = portfolioData.quiz[this.currentQuizIndex];
    if (!q) return;

    const progressEl = document.getElementById('quiz-progress-label');
    if (progressEl) progressEl.innerText = `Question ${this.currentQuizIndex + 1} of ${portfolioData.quiz.length}`;

    const questionBox = document.getElementById('quiz-question-box');
    if (questionBox) questionBox.innerText = q.question;

    const optWrapper = document.getElementById('quiz-options-wrapper');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    if (feedbackBox) feedbackBox.style.display = 'none';

    if (optWrapper) {
      optWrapper.innerHTML = q.options.map((opt, i) => `
        <button class="quiz-opt-btn" data-index="${i}">
          <strong style="color: #38bdf8; margin-right: 0.5rem;">${String.fromCharCode(65 + i)}.</strong> ${opt}
        </button>
      `).join('');

      optWrapper.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = parseInt(btn.getAttribute('data-index'), 10);
          if (selected === q.correctIndex) {
            btn.style.background = 'rgba(16, 185, 129, 0.25)';
            btn.style.borderColor = '#10b981';
            sound.playStar();
            feedbackBox.style.display = 'block';
            feedbackBox.style.background = 'rgba(16, 185, 129, 0.15)';
            feedbackBox.style.border = '1px solid #10b981';
            feedbackBox.style.color = '#a7f3d0';
            feedbackBox.innerHTML = `✅ <strong>Correct!</strong> ${q.explanation} <br/><button id="quiz-next-btn" class="btn-primary" style="padding: 0.4rem 1rem; font-size: 0.85rem; margin-top: 0.75rem;">Next Question ➔</button>`;

            this.collectStar();

            document.getElementById('quiz-next-btn').addEventListener('click', () => {
              this.currentQuizIndex = (this.currentQuizIndex + 1) % portfolioData.quiz.length;
              this.renderQuizQuestion();
            });
          } else {
            sound.playClick();
            feedbackBox.style.display = 'block';
            feedbackBox.style.background = 'rgba(239, 68, 68, 0.15)';
            feedbackBox.style.border = '1px solid #ef4444';
            feedbackBox.style.color = '#fca5a5';
            feedbackBox.innerHTML = `❌ <strong>Not quite!</strong> Recall Sharmila Mam's real-world explanation. Try again!`;
          }
        });
      });
    }
  }

  renderGratitude() {
    const letterEl = document.getElementById('gratitude-letter-text');
    if (letterEl) {
      letterEl.innerHTML = `
Dear Sharmila Banu Mam,

Thank you from the bottom of our hearts for being such an extraordinary educator.

You pushed us to look beyond simple textbook answers and taught us how to build intuition for complex language models.

Even if our official star counter remained at zero on paper, you gave us something far more enduring: the ability to remember concepts through vivid visual mental models that literally saved our semester exams!

Thank you for your energy, your high standards, your real-world analogies, and the immense knowledge you poured into us every single week. You made NLP our favorite and most memorable course!
      `;
    }

    const badgesContainer = document.getElementById('honorary-badges-grid');
    if (badgesContainer) {
      badgesContainer.innerHTML = [
        { icon: "🎯", title: "20-Mark Exam Savior", desc: "Clutched exam questions purely via visual recall" },
        { icon: "💡", title: "Master of Real-World Analogies", desc: "Never taught an abstract concept without a live story" },
        { icon: "⭐️", title: "The Star Architect", desc: "Master of the legendary 10-Star internal bounty" },
        { icon: "👑", title: "NLP Torchbearer", desc: "Ignited genuine curiosity in Modern AI and NLP" }
      ].map(b => `
        <div class="badge-item-card">
          <div class="badge-icon">${b.icon}</div>
          <h4 style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 0.35rem;">${b.title}</h4>
          <p style="font-size: 0.88rem; color: #94a3b8;">${b.desc}</p>
        </div>
      `).join('');
    }

    const bouquetBtn = document.getElementById('btn-send-bouquet');
    if (bouquetBtn) {
      bouquetBtn.addEventListener('click', () => {
        sound.playCelebration();
        confetti({ particleCount: 160, spread: 80, colors: ['#f43f5e', '#fbbf24', '#38bdf8'] });
        this.showToast("💐 A vibrant gratitude bouquet has been sent to Sharmila Mam!");
      });
    }

    const applauseBtn = document.getElementById('btn-applause');
    if (applauseBtn) {
      applauseBtn.addEventListener('click', () => {
        sound.playCelebration();
        confetti({ particleCount: 200, spread: 110, origin: { y: 0.5 } });
        this.showToast("👏 The entire class gives Sharmila Mam a resounding standing ovation!");
      });
    }
  }

  renderTokenizer() {
    const input = document.getElementById('tokenizer-input-field');
    const chipsWrapper = document.getElementById('token-chips-wrapper');
    const countEl = document.getElementById('token-count-display');

    if (!input || !chipsWrapper) return;

    const update = () => {
      const words = input.value.trim().split(/\s+/).filter(Boolean);
      countEl.innerText = words.length;
      chipsWrapper.innerHTML = words.map((w, i) => `
        <div class="token-chip-pill">
          <span>${w}</span>
          <span style="font-size: 0.72rem; background: rgba(0,0,0,0.4); padding: 0.1rem 0.35rem; border-radius: 4px; color: #38bdf8;">#${100 + i * 13}</span>
        </div>
      `).join('');
    };

    input.addEventListener('input', update);
    update();
  }

  renderProjects() {
    const wrapper = document.getElementById('projects-grid-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = portfolioData.projects.map(proj => `
      <div class="glass-card">
        <span class="project-tag">${proj.tag}</span>
        <h3 class="project-title">${proj.title}</h3>
        <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 1rem;">${proj.summary}</p>
        
        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1rem;">
          ${proj.tech.map(t => `
            <span style="font-size: 0.75rem; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); padding: 0.25rem 0.65rem; border-radius: 8px; color: #94a3b8;">${t}</span>
          `).join('')}
        </div>

        <div class="project-metric-box">
          ⚡ ${proj.metrics}
        </div>
      </div>
    `).join('');
  }


  setupCinematicEffects() {
    // Scroll progress indicator
    const progress = document.getElementById('scroll-progress-fill');
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      if (progress) progress.style.width = `${percent}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    // Reveal content as it enters the viewport; keep reduced-motion users comfortable.
    const revealTargets = document.querySelectorAll(
      '.section-header, .glass-card, .miracle-card, .star-quest-arena, .gratitude-letter, .playground-card, .spline-stage-container'
    );
    revealTargets.forEach((el, index) => {
      el.classList.add('cinematic-reveal');
      el.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 85}ms`);
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
      revealTargets.forEach(el => observer.observe(el));
    } else {
      revealTargets.forEach(el => el.classList.add('is-visible'));
    }

    // Subtle pointer lighting on large interactive surfaces.
    const pointerTargets = document.querySelectorAll('.glass-card, .flow-step-box, .quiz-card, .project-card');
    pointerTargets.forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
      });
    });

    // Active navigation follows the section currently in view.
    const sections = [...document.querySelectorAll('main section, body > section')];
    if ('IntersectionObserver' in window && sections.length) {
      const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const active = document.querySelector(`.nav-btn[data-target="${entry.target.id}"]`);
          if (active) {
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            active.classList.add('active');
          }
        });
      }, { rootMargin: '-35% 0px -55% 0px' });
      sections.forEach(section => sectionObserver.observe(section));
    }
  }

  showToast(msg) {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '2rem';
    toast.style.right = '2rem';
    toast.style.background = 'rgba(15, 23, 42, 0.95)';
    toast.style.border = '1px solid #38bdf8';
    toast.style.color = '#fff';
    toast.style.padding = '0.85rem 1.4rem';
    toast.style.borderRadius = '16px';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(56, 189, 248, 0.3)';
    toast.style.zIndex = '9999';
    toast.style.fontSize = '0.92rem';
    toast.style.fontWeight = '700';
    toast.style.transition = 'all 0.3s ease';
    toast.innerText = msg;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 2800);
  }
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  window.app = new PortfolioApp();
});
