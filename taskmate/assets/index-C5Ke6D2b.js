(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`TaskMate`,t=`1.0.0`,n=0,r=i(`taskmate-tasks`,[]);function i(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function a(e,t){localStorage.setItem(e,JSON.stringify(t))}var o=document.querySelector(`#app`);if(!o)throw Error(`Elemen #app tidak ditemukan`);var s=`Semua`,c=null;function l(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}o.innerHTML=`
  <header class="topbar">
    <div class="brand">
      <div class="brand-icon">T</div>
      <span>${e}</span>
    </div>
    <div class="version">Version ${t}</div>
  </header>

  <main class="container">
    <section class="welcome">
      <div>
        <p class="eyebrow">CATATAN KULIAH</p>
        <h1>Halo, Farah Diva! 👋</h1>
        <p class="subtitle">Ada tugas apa hari ini? Yuk, catat biar nggak lupa!</p>
      </div>
      <div class="welcome-icon">📚</div>
    </section>

    <section class="stats">
      <div class="stat-card">
        <span class="stat-icon">📋</span>
        <p>Total Tugas</p>
        <h2 id="total-count">0</h2>
      </div>
      <div class="stat-card">
        <span class="stat-icon">⏳</span>
        <p>Belum Selesai</p>
        <h2 id="pending-count">0</h2>
      </div>
      <div class="stat-card">
        <span class="stat-icon">✅</span>
        <p>Selesai</p>
        <h2 id="completed-count">0</h2>
      </div>
    </section>

    <section class="content-grid">
      <div class="form-card">
        <div class="section-heading">
          <div>
            <p class="eyebrow">TUGAS BARU</p>
            <h2 id="form-title">Tambah Tugas</h2>
          </div>
          <span class="heading-icon">✏️</span>
        </div>

        <form id="task-form">
          <label for="task-title">Nama Tugas</label>
          <input id="task-title" type="text"
            placeholder="Contoh: Membuat laporan..." required>

          <label for="task-course">Mata Kuliah</label>
          <input id="task-course" type="text"
            placeholder="Contoh: Pengembangan Aplikasi Web" required>

          <label for="task-deadline">Deadline</label>
          <input id="task-deadline" type="date" required>

          <label for="task-description">Deskripsi (opsional)</label>
          <textarea id="task-description" rows="3"
            placeholder="Tambahkan catatan tugas..."></textarea>

          <div class="form-actions">
            <button type="submit" class="btn-primary" id="submit-btn">
              + Tambahkan Tugas
            </button>
            <button type="button" class="btn-cancel" id="cancel-btn" hidden>
              Batal
            </button>
          </div>
        </form>
      </div>

      <div class="list-card">
        <div class="section-heading">
          <div>
            <p class="eyebrow">AKTIVITAS KULIAH</p>
            <h2>Daftar Tugas</h2>
          </div>
          <span class="heading-icon">📝</span>
        </div>

        <div class="filters">
          <button class="filter-btn active" data-filter="Semua">Semua</button>
          <button class="filter-btn" data-filter="Belum Selesai">Belum</button>
          <button class="filter-btn" data-filter="Selesai">Selesai</button>
        </div>

        <div id="task-list" class="task-list"></div>
      </div>
    </section>

    <footer>
      <p>Dibuat dengan 💜 untuk menemani kegiatan kuliah.</p>
      <p>TaskMate © 2026</p>
    </footer>
  </main>
`;var u=document.querySelector(`#task-form`),d=document.querySelector(`#task-title`),f=document.querySelector(`#task-course`),p=document.querySelector(`#task-deadline`),m=document.querySelector(`#task-description`),h=document.querySelector(`#task-list`),g=document.querySelector(`#submit-btn`),_=document.querySelector(`#cancel-btn`);function v(){n=r.length;let e=r.filter(e=>e.completed).length,t=n-e;document.querySelector(`#total-count`).textContent=String(n),document.querySelector(`#completed-count`).textContent=String(e),document.querySelector(`#pending-count`).textContent=String(t)}function y(){let e=r.filter(e=>s===`Semua`?!0:s===`Selesai`?e.completed:!e.completed);h.innerHTML=e.length===0?`
      <div class="empty-state">
        <div>🌷</div>
        <h3>Belum ada tugas</h3>
        <p>Belum ada tugas nih. Yuk, tambahkan tugas pertamamu!</p>
      </div>
    `:e.map(e=>{let t=e.completed?`Selesai`:`Belum Selesai`;return`
        <article class="task-item ${e.completed?`completed`:``}">
          <div class="task-top">
            <span class="status ${e.completed?`done`:`pending`}">
              ${t}
            </span>
            <span class="task-date">📅 ${l(e.deadline)}</span>
          </div>

          <h3>${l(e.title)}</h3>
          <p class="course-name">📚 ${l(e.course)}</p>
          <p class="task-description">
            ${l(e.description||`Tidak ada deskripsi`)}
          </p>

          <div class="task-actions">
            <button class="btn-done" data-action="toggle" data-id="${e.id}">
              ${e.completed?`↩ Belum Selesai`:`✓ Selesaikan`}
            </button>
            <button class="btn-edit" data-action="edit" data-id="${e.id}">
              ✏ Edit
            </button>
            <button class="btn-delete" data-action="delete" data-id="${e.id}">
              🗑 Hapus
            </button>
          </div>
        </article>
      `}).join(``),v(),a(`taskmate-tasks`,r)}function b(){u.reset(),c=null,document.querySelector(`#form-title`).textContent=`Tambah Tugas`,g.textContent=`+ Tambahkan Tugas`,_.hidden=!0}u.addEventListener(`submit`,e=>{e.preventDefault();let t=d.value.trim(),n=f.value.trim(),i=p.value,a=m.value.trim();if(t&&n&&i){if(c!==null)r=r.map(e=>e.id===c?{...e,title:t,course:n,deadline:i,description:a}:e);else{let e={id:Date.now(),title:t,course:n,deadline:i,description:a,completed:!1};r.unshift(e)}b(),y()}}),_.addEventListener(`click`,b),h.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-action]`);if(!t)return;let n=Number(t.dataset.id),i=t.dataset.action,a=r.find(e=>e.id===n);if(a){if(i===`toggle`&&(r=r.map(e=>e.id===n?{...e,completed:!e.completed}:e)),i===`delete`){if(!confirm(`Yakin ingin menghapus tugas ini?`))return;r=r.filter(e=>e.id!==n)}i===`edit`?(c=n,d.value=a.title,f.value=a.course,p.value=a.deadline,m.value=a.description,document.querySelector(`#form-title`).textContent=`Edit Tugas`,g.textContent=`Simpan Perubahan`,_.hidden=!1,d.focus()):y()}}),document.querySelectorAll(`.filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{s=e.dataset.filter,document.querySelectorAll(`.filter-btn`).forEach(e=>{e.classList.remove(`active`)}),e.classList.add(`active`),y()})}),y();