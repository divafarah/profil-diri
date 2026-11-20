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

    <!-- PENJELASAN TEKNOLOGI -->
    <section class="technology-section">
      <div class="technology-heading">
        <p class="eyebrow">PENGEMBANGAN APLIKASI</p>
        <h2>Teknologi di Balik TaskMate</h2>
        <p>Teknologi yang digunakan dalam proses pengembangan aplikasi TaskMate.</p>
      </div>

      <div class="technology-grid">
        <article class="technology-card">
          <h3>Git dan GitHub</h3>
          <p>Git digunakan untuk mengelola versi kode, mencatat perubahan, membuat branch, dan menggabungkan kode. GitHub digunakan untuk menyimpan repository secara online serta mengelola kolaborasi melalui Pull Request.</p>
        </article>

        <article class="technology-card">
          <h3>npm (Node Package Manager)</h3>
          <p>npm digunakan untuk mengelola package atau library yang dibutuhkan dalam pengembangan aplikasi, memasang dependency, dan menjalankan perintah melalui script pada package.json.</p>
        </article>

        <article class="technology-card">
          <h3>TypeScript</h3>
          <p>TypeScript merupakan pengembangan JavaScript yang memiliki sistem tipe data. TaskMate menggunakan interface, type alias, union type, array, primitive types, dan generic function agar kode lebih terstruktur.</p>
        </article>

        <article class="technology-card">
          <h3>Vite</h3>
          <p>Vite merupakan build tool yang menyediakan development server untuk menjalankan aplikasi selama proses pengembangan serta membantu menghasilkan file aplikasi yang siap dipublikasikan.</p>
        </article>

        <article class="technology-card">
          <h3>Environment Variables</h3>
          <p>Environment variables digunakan untuk mengatur konfigurasi aplikasi di luar kode utama. TaskMate menggunakan file .env untuk menyimpan nama dan versi aplikasi serta .env.example sebagai contoh konfigurasi.</p>
        </article>
      </div>

      <div class="process-card">
        <h3>Peran Compiler, Transpiler, dan Bundler</h3>

        <div class="process-item">
          <strong>Compiler</strong>
          <p>TypeScript Compiler (tsc) memeriksa tipe data dan membantu mendeteksi kesalahan pada kode TypeScript.</p>
        </div>

        <div class="process-item">
          <strong>Transpiler</strong>
          <p>Mengubah kode TypeScript menjadi JavaScript agar dapat dijalankan oleh browser.</p>
        </div>

        <div class="process-item">
          <strong>Bundler</strong>
          <p>Vite menggunakan proses bundling untuk menggabungkan dan mengoptimalkan JavaScript, CSS, serta aset lainnya menjadi hasil build yang siap dipublikasikan.</p>
        </div>
      </div>
    </section>

    <footer>
      <p>Dibuat dengan 💜 untuk menemani kegiatan kuliah.</p>
      <p>TaskMate © 2026</p>
    </footer>
  </main>
`;var u=document.querySelector(`#task-form`),d=document.querySelector(`#task-title`),f=document.querySelector(`#task-course`),p=document.querySelector(`#task-deadline`),m=document.querySelector(`#task-description`),h=document.querySelector(`#task-list`),g=document.querySelector(`#submit-btn`),_=document.querySelector(`#cancel-btn`),v=document.querySelector(`#form-title`);function y(){n=r.length;let e=r.filter(e=>!e.completed).length,t=r.filter(e=>e.completed).length;document.querySelector(`#total-count`).textContent=String(n),document.querySelector(`#pending-count`).textContent=String(e),document.querySelector(`#completed-count`).textContent=String(t)}function b(){let e=r.filter(e=>s===`Semua`?!0:s===`Selesai`?e.completed:!e.completed);h.innerHTML=e.length===0?`
      <div class="empty-state">
        <span>📭</span>
        <p>Belum ada tugas di kategori ini.</p>
      </div>
    `:e.map(e=>`
      <article class="task-item ${e.completed?`completed`:``}">
        <div class="task-info">
          <div class="task-title-row">
            <h3>${l(e.title)}</h3>
            <span class="task-status ${e.completed?`done`:`pending`}">
              ${e.completed?`Selesai`:`Belum Selesai`}
            </span>
          </div>
          <p class="task-course">${l(e.course)}</p>
          <p class="task-deadline">📅 ${l(e.deadline)}</p>
          ${e.description?`<p class="task-description">${l(e.description)}</p>`:``}
        </div>

        <div class="task-actions">
          <button class="action-btn complete-btn" data-id="${e.id}" title="Ubah status">
            ${e.completed?`↩️`:`✅`}
          </button>
          <button class="action-btn edit-btn" data-id="${e.id}" title="Edit tugas">
            ✏️
          </button>
          <button class="action-btn delete-btn" data-id="${e.id}" title="Hapus tugas">
            🗑️
          </button>
        </div>
      </article>
    `).join(``),y(),a(`taskmate-tasks`,r)}function x(){u.reset(),c=null,v.textContent=`Tambah Tugas`,g.textContent=`+ Tambahkan Tugas`,_.hidden=!0}u.addEventListener(`submit`,e=>{e.preventDefault();let t=d.value.trim(),n=f.value.trim(),i=p.value,a=m.value.trim();if(t&&n&&i){if(c!==null)r=r.map(e=>e.id===c?{...e,title:t,course:n,deadline:i,description:a}:e);else{let e={id:Date.now(),title:t,course:n,deadline:i,description:a,completed:!1};r.unshift(e)}x(),b()}}),_.addEventListener(`click`,x),document.querySelectorAll(`.filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{s=e.dataset.filter,document.querySelectorAll(`.filter-btn`).forEach(e=>{e.classList.remove(`active`)}),e.classList.add(`active`),b()})}),h.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-id]`);if(!t)return;let n=Number(t.dataset.id),i=r.find(e=>e.id===n);i&&(t.classList.contains(`complete-btn`)&&(r=r.map(e=>e.id===n?{...e,completed:!e.completed}:e)),t.classList.contains(`edit-btn`)&&(c=n,d.value=i.title,f.value=i.course,p.value=i.deadline,m.value=i.description,v.textContent=`Edit Tugas`,g.textContent=`Simpan Perubahan`,_.hidden=!1,d.focus()),t.classList.contains(`delete-btn`)&&window.confirm(`Yakin ingin menghapus tugas ini?`)&&(r=r.filter(e=>e.id!==n),c===n&&x()),b())}),b();