const grid = document.querySelector("#product-grid");

if (grid && Array.isArray(window.PRODUCTS)) {
  grid.innerHTML = window.PRODUCTS.map((product, index) => `
    <article class="product-card">
      <div class="product-number">0${index + 1}</div>
      <span class="tag">${product.label}</span>
      ${product.imageUrl ? `
        <a class="product-image" href="${product.imageLink || product.url}" target="_blank" rel="nofollow sponsored noopener">
          <img src="${product.imageUrl}" alt="${product.imageAlt || product.name}" loading="lazy">
        </a>
      ` : `<div class="product-placeholder" aria-hidden="true"><span>TOFU</span></div>`}
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <ul>${product.points.map(point => `<li>${point}</li>`).join("")}</ul>
      ${product.updated ? `<small class="product-updated">${product.updated}</small>` : ""}
      <span class="ad-label">広告</span>
      <a class="product-link" href="${product.url}" target="_blank" rel="nofollow sponsored noopener">${product.store}<span>→</span></a>
    </article>
  `).join("");
}

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#global-nav");

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav?.classList.toggle("is-open", !open);
});

document.querySelectorAll("#global-nav a").forEach(link => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("is-open");
  });
});

document.querySelector("[data-contact-form]")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = `【常温保存豆腐.com】${data.get("type")}`;
  const body = [
    "常温保存豆腐.comへのお問い合わせ",
    "",
    `お名前：${data.get("name")}`,
    `返信先：${data.get("email")}`,
    `種別：${data.get("type")}`,
    "",
    "お問い合わせ内容：",
    data.get("message")
  ].join("\n");
  const message = document.querySelector(".form-message");
  if (message) message.textContent = "メール作成画面を開いています。内容を確認して送信してください。";
  window.location.href = `mailto:tofu102.15@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
